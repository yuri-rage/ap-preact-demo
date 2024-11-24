import { array_from_range, array_mean, linear_interp } from '@/utils/array-math';

interface ExpoResult {
    std_deviation: number;
    corrected_thrust?: number[];
    gradient?: number[];
    mean?: number;
    expo?: number;
}

export const EXPO_TEST_STEP = 0.005;
export const ACTUATOR_TEST_STEP = 0.001;
export const ACTUATOR_TEST_VALUES = array_from_range(0.0, 1.0, ACTUATOR_TEST_STEP);

const get_corrected_thrust = (
    curve_expo: number,
    MOT_SPIN_MIN: number,
    MOT_SPIN_MAX: number,
    MOT_PWM_MIN: number,
    MOT_PWM_MAX: number,
    data: { pwm: number[]; thrust: number[]; voltage?: number[]; current?: number[] }
): ExpoResult => {
    // Helper function allows direct copy of AP linearisation code
    function constrain_float(amt: number, low: number, high: number) {
        if (amt < low) {
            return low;
        }

        if (amt > high) {
            return high;
        }

        return amt;
    }

    // Helper function allows direct copy of AP linearisation code
    function is_zero(val: number) {
        return val == 0.0;
    }

    // Helper function allows direct copy of AP linearisation code
    function safe_sqrt(val: number) {
        return Math.sqrt(val);
    }

    // https://github.com/ArduPilot/ardupilot/blob/master/libraries/AP_Motors/AP_Motors_Thrust_Linearization.cpp#L116
    // apply_thrust_curve_and_volt_scaling - returns throttle in the range 0 ~ 1
    function apply_thrust_curve_and_volt_scaling(thrust: number) {
        const battery_scale = 1.0;
        const lift_max = 1.0;

        /*
        AP uses estimated resting voltage for correction, we can assume constant resting voltage for the duration of the test
        if (is_positive(batt_voltage_filt.get())) {
            battery_scale = 1.0 / batt_voltage_filt.get();
        }
        */

        // apply thrust curve - domain -1.0 to 1.0, range -1.0 to 1.0
        const thrust_curve_expo = constrain_float(curve_expo, -1.0, 1.0);
        if (is_zero(thrust_curve_expo)) {
            // zero expo means linear, avoid floating point exception for small values
            return lift_max * thrust * battery_scale;
        }
        const throttle_ratio =
            (thrust_curve_expo -
                1.0 +
                safe_sqrt(
                    (1.0 - thrust_curve_expo) * (1.0 - thrust_curve_expo) +
                        4.0 * thrust_curve_expo * lift_max * thrust
                )) /
            (2.0 * thrust_curve_expo);
        return constrain_float(throttle_ratio * battery_scale, 0.0, 1.0);
    }

    // https://github.com/ArduPilot/ardupilot/blob/master/libraries/AP_Motors/AP_Motors_Thrust_Linearization.cpp#L101
    // converts desired thrust to linearized actuator output in a range of 0~1
    function thrust_to_actuator(thrust_in: any) {
        thrust_in = constrain_float(thrust_in, 0.0, 1.0);
        return MOT_SPIN_MIN + (MOT_SPIN_MAX - MOT_SPIN_MIN) * apply_thrust_curve_and_volt_scaling(thrust_in);
    }

    // https://github.com/ArduPilot/ardupilot/blob/master/libraries/AP_Motors/AP_MotorsMulticopter.cpp#L405-L406
    // convert actuator output (0~1) range to pwm range
    function output_to_pwm(actuator: number) {
        return MOT_PWM_MIN + (MOT_PWM_MAX - MOT_PWM_MIN) * actuator;
    }

    // Run the actuator demand through the AP equations to get a PWM output
    const len = ACTUATOR_TEST_VALUES.length;
    let pwm = new Array(len);
    for (let i = 0; i < len; i++) {
        const actuator = thrust_to_actuator(ACTUATOR_TEST_VALUES[i]);
        pwm[i] = output_to_pwm(actuator);
    }

    // Interpolate the thrust for the given PWM
    const corrected_thrust = linear_interp(data.thrust, data.pwm, pwm);

    // Differentiate, good linearisation has constant gradient
    let gradient = new Array(len - 1);
    for (let i = 0; i < len - 1; i++) {
        gradient[i] = (corrected_thrust[i + 1] - corrected_thrust[i]) / ACTUATOR_TEST_STEP;
    }

    // Standard deviation
    const mean = array_mean(gradient);
    let std_deviation_sum = 0.0;
    for (let i = 0; i < len - 1; i++) {
        std_deviation_sum += (gradient[i] - mean) ** 2;
    }
    const std_deviation = Math.sqrt(std_deviation_sum / gradient.length);

    return {
        corrected_thrust,
        gradient,
        mean,
        std_deviation,
        expo: curve_expo,
    };
};

const get_optimized_expo = (
    MOT_SPIN_MIN: number,
    MOT_SPIN_MAX: number,
    MOT_PWM_MIN: number,
    MOT_PWM_MAX: number,
    data: { pwm: number[]; thrust: number[]; voltage?: number[]; current?: number[] }
): ExpoResult => {
    const expoRange = array_from_range(-1, 1, EXPO_TEST_STEP);

    return expoRange.reduce((bestResult: ExpoResult | null, expo) => {
        const currentResult = get_corrected_thrust(
            expo,
            MOT_SPIN_MIN,
            MOT_SPIN_MAX,
            MOT_PWM_MIN,
            MOT_PWM_MAX,
            data
        );

        return !bestResult || currentResult.std_deviation < bestResult.std_deviation
            ? currentResult
            : bestResult;
    }, null) as ExpoResult;
};

export { get_corrected_thrust, get_optimized_expo };

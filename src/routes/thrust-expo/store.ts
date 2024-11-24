import type { Layout, PlotData } from 'plotly.js';
import type { Dash } from 'plotly.js';

import { signal, computed } from '@preact/signals';

import { array_offset, array_scale, linear_interp } from '@/utils/array-math';

import {
    loadParams,
    type ParamValue,
    createParamSignal,
    initializeParamSignal,
} from '@/components/param-grid';
import { createVerticalLine, createVerticalAnnotation, createHorizontalLine } from '@/components/plotly-plot';

import { EXAMPLE_DATA } from './example-data';
import {
    get_corrected_thrust,
    get_optimized_expo,
    ACTUATOR_TEST_VALUES,
    ACTUATOR_TEST_STEP,
} from './thrust-expo-calc';

export interface ThrustData {
    [key: string]: number;
    pwm: number;
    thrust: number;
    voltage: number;
    current: number;
}

const EMPTY_ROW: ThrustData = {
    pwm: 0,
    thrust: 0,
    voltage: 0,
    current: 0,
};

export const MOTOR_PARAMS = {
    MOT_PWM_MIN: 1000,
    MOT_PWM_MAX: 2000,
    MOT_SPIN_ARM: 0.1,
    MOT_SPIN_MIN: 0.15,
    MOT_SPIN_MAX: 0.95,
    MOT_THST_EXPO: 0.65,
} as const;

export const HOVER_PARAMS = {
    MOT_THST_HOVER: 0,
} as const;

export const READ_ONLY_STATES = {
    MOT_THST_HOVER: true,
} as const;

export const CONSTRAINED_STATES = {
    MOT_THST_EXPO: false,
} as const;

export const paramConfig = signal<ParamValue[]>([]);
export const params = createParamSignal();
export const hoverParamConfig = signal<ParamValue[]>([]);
export const hoverParams = createParamSignal();
export const isParamGridLoading = signal(true);
export const isHoverParamGridLoading = signal(true);
export const thrustDataRows = signal<ThrustData[]>(
    Array(10)
        .fill(null)
        .map(() => ({ ...EMPTY_ROW }))
);
export const shouldOptimize = signal(true);

/**
 * simple memoization helper for expensive calculations
 * @param fn - function to memoize
 * @param getKey - optional function to generate cache key
 * @returns memoized function
 */
const memoize = <T extends (...args: any[]) => any>(
    fn: T,
    getKey: (...args: Parameters<T>) => string = (...args) => JSON.stringify(args)
): T => {
    const cache = new Map<string, ReturnType<T>>();

    return ((...args: Parameters<T>) => {
        const key = getKey(...args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }) as T;
};

/**
 * normalizes a value between a min and max range
 * @param rawValue - the value to normalize
 * @param min - minimum value of the range
 * @param max - maximum value of the range
 * @returns normalized value between min and max
 */
const normalize = (rawValue: number, min: number, max: number) => {
    return min + (max - min) * rawValue;
};

/**
 * creates a deep copy of example data
 * @returns array of cloned thrust data
 */
const cloneExampleData = (): ThrustData[] =>
    EXAMPLE_DATA.map((row) => ({
        pwm: row.pwm,
        thrust: row.thrust,
        voltage: row.voltage,
        current: row.current,
    }));

/**
 * computed signal for the maximum thrust value in the data
 * uses reduce for better performance than spread operator
 */
export const maxThrust = computed(() => {
    return thrustDataRows.value.reduce((max, row) => Math.max(max, row.thrust), 0) || 1;
});

/**
 * computed signal for required thrust based on AUW and motor count
 */
export const requiredThrust = computed(() => {
    const motorCount = hoverParams.value['Number of motors'];
    const auw = hoverParams.value['All-up weight (AUW)'];
    if (motorCount > 0 && auw > 0) {
        return auw / motorCount;
    }
    return 0;
});

/**
 * computed signal to check if we have valid data
 */
export const hasValidData = computed(() => {
    if (paramConfig.value.length === 0 || thrustDataRows.value.length === 0) {
        return false;
    }
    return thrustDataRows.value.some((row) => row.thrust > 0 && row.pwm > 0);
});

/**
 * type guard for thrust data validation
 */
const isValidThrustData = (data: unknown): data is ThrustData => {
    if (!data || typeof data !== 'object') return false;
    const d = data as ThrustData;
    return (
        typeof d.pwm === 'number' &&
        typeof d.thrust === 'number' &&
        typeof d.voltage === 'number' &&
        typeof d.current === 'number'
    );
};

/**
 * safely handles data changes with validation
 */
export const onDataChange = (newRows: ThrustData[]) => {
    try {
        if (!Array.isArray(newRows) || !newRows.every(isValidThrustData)) {
            throw new Error('invalid thrust data format');
        }
        thrustDataRows.value = newRows;
        shouldOptimize.value = true;
    } catch (error) {
        console.error('failed to update thrust data:', error);
    }
};

/**
 * updates the hover throttle based on corrected thrust values
 * @param correctedThrust - array of corrected thrust values
 */
const updateHoverThrottle = (correctedThrust: number[]) => {
    if (requiredThrust.value > 0) {
        const hoverThrottle = linear_interp(ACTUATOR_TEST_VALUES, correctedThrust, [requiredThrust.value])[0];
        const newValue = Number(hoverThrottle.toFixed(3));
        if (Math.abs(newValue - hoverParams.value.MOT_THST_HOVER) > 0.001) {
            hoverParams.value.MOT_THST_HOVER = newValue;
        }
    }
};

/**
 * populates the page with example data
 */
export const showExampleData = () => {
    onDataChange(cloneExampleData());
    hoverParams.value['All-up weight (AUW)'] = 2.5;
};

/**
 * resets all parameters to their initial values in a single batch update
 */
export const resetAll = () => {
    onDataChange(
        Array(10)
            .fill(null)
            .map(() => ({ ...EMPTY_ROW }))
    );
    params.value.MOT_PWM_MIN = MOTOR_PARAMS.MOT_PWM_MIN;
    params.value.MOT_PWM_MAX = MOTOR_PARAMS.MOT_PWM_MAX;
    params.value.MOT_SPIN_ARM = MOTOR_PARAMS.MOT_SPIN_ARM;
    params.value.MOT_SPIN_MIN = MOTOR_PARAMS.MOT_SPIN_MIN;
    params.value.MOT_SPIN_MAX = MOTOR_PARAMS.MOT_SPIN_MAX;
    params.value.MOT_THST_EXPO = MOTOR_PARAMS.MOT_THST_EXPO;
    hoverParams.value['Number of motors'] = 4;
    hoverParams.value['All-up weight (AUW)'] = 0;
    hoverParams.value.MOT_THST_HOVER = 0;
};

/**
 * computed signal for raw thrust plot data
 * returns array of plotly data points for measured thrust values
 */
export const thrustPlotData = computed<Partial<PlotData>[]>(() => {
    if (!hasValidData.value) return [];

    const rows = thrustDataRows.value;
    const len = rows.length;
    const x = new Array(len);
    const y = new Array(len);

    for (let i = 0; i < len; i++) {
        x[i] = rows[i].pwm;
        y[i] = rows[i].thrust;
    }

    return [
        {
            x,
            y,
            name: 'Measured Thrust',
        },
    ];
});

const memoizedGetCorrectedThrust = memoize(get_corrected_thrust);
const memoizedGetOptimizedExpo = memoize(get_optimized_expo);

/**
 * computed signal for linearized thrust calculations
 * handles optimization of expo value and updates hover throttle
 * @returns object containing corrected thrust values, gradient, and optimization results
 */
export const linearizedResult = computed(() => {
    if (!hasValidData.value) return null;

    const data = {
        pwm: thrustDataRows.value.map((row) => row.pwm),
        thrust: thrustDataRows.value.map((row) => row.thrust),
        voltage: thrustDataRows.value.map((row) => row.voltage),
        current: thrustDataRows.value.map((row) => row.current),
    };

    if (shouldOptimize.value) {
        const result = memoizedGetOptimizedExpo(
            params.value.MOT_SPIN_MIN,
            params.value.MOT_SPIN_MAX,
            params.value.MOT_PWM_MIN,
            params.value.MOT_PWM_MAX,
            data
        );

        if (result.expo !== undefined && !isNaN(result.expo)) {
            shouldOptimize.value = false;
            params.value.MOT_THST_EXPO = Number(result.expo.toFixed(3));
        }

        updateHoverThrottle(result.corrected_thrust);
        return result;
    }

    const result = memoizedGetCorrectedThrust(
        params.value.MOT_THST_EXPO,
        params.value.MOT_SPIN_MIN,
        params.value.MOT_SPIN_MAX,
        params.value.MOT_PWM_MIN,
        params.value.MOT_PWM_MAX,
        data
    );

    updateHoverThrottle(result.corrected_thrust);
    return result;
});

/**
 * computed signal for thrust error plot data
 * returns array of plotly data points showing thrust linearization error
 */
export const thrustErrorPlotData = computed<Partial<PlotData>[]>(() => {
    if (!linearizedResult.value) {
        return [];
    }

    return [
        {
            x: array_scale(array_offset(ACTUATOR_TEST_VALUES.slice(0, -1), ACTUATOR_TEST_STEP * 0.5), 100.0),
            y: linearizedResult.value.gradient,
            name: `Linearized Thrust<br>Std dev: ${linearizedResult.value.std_deviation.toFixed(3)}`,
            line: { color: 'indianred' },
        },
    ];
});

/**
 * computed signal for thrust error plot layout
 * @returns plotly layout configuration for thrust error visualization
 */
export const thrustErrorPlotLayout = computed<Partial<Layout>>(() => {
    if (!linearizedResult.value) {
        return {
            xaxis: { title: 'Throttle (%)' },
            yaxis: { title: 'Thrust gradient (delta thrust / delta throttle)' },
        };
    }

    return {
        xaxis: {
            title: 'Throttle (%)',
            range: [0, 100],
        },
        yaxis: {
            title: 'Thrust gradient (delta thrust / delta throttle)',
        },
        showlegend: true,
        shapes: linearizedResult.value.mean
            ? [
                  createHorizontalLine({
                      y: linearizedResult.value.mean,
                      color: 'gray',
                      dash: '4px,3px' as Dash,
                  }),
              ]
            : [],
    };
});

const memoizedLinearInterp = memoize(linear_interp);

/**
 * computed signal for thrust expo plot data
 * returns array of plotly data points showing measured vs linearized thrust,
 * ideal gradient, and hover throttle marker if applicable
 */
export const thrustExpoPlotData = computed<Partial<PlotData>[]>(() => {
    if (!linearizedResult.value) return [];

    const data = {
        pwm: thrustDataRows.value.map((row) => row.pwm),
        thrust: thrustDataRows.value.map((row) => row.thrust),
    };

    const uncorrected_actuator = data.pwm.map((pwm) => {
        const throttle =
            (pwm - params.value.MOT_PWM_MIN) / (params.value.MOT_PWM_MAX - params.value.MOT_PWM_MIN);
        return (
            (throttle - params.value.MOT_SPIN_MIN) / (params.value.MOT_SPIN_MAX - params.value.MOT_SPIN_MIN)
        );
    });

    const uncorrected_thrust = memoizedLinearInterp(data.thrust, uncorrected_actuator, ACTUATOR_TEST_VALUES);
    const actuator_pct = array_scale(ACTUATOR_TEST_VALUES, 100);

    // calculate ideal linear thrust line starting from min thrust
    const maxThrust = Math.max(...linearizedResult.value.corrected_thrust);
    const minThrust = linearizedResult.value.corrected_thrust[0]; // thrust at MOT_SPIN_MIN
    const thrustRange = maxThrust - minThrust;
    
    const idealThrust = actuator_pct.map(pct => minThrust + (thrustRange * pct) / 100);

    const plotData: Partial<PlotData>[] = [
        {
            x: actuator_pct,
            y: uncorrected_thrust,
            name: 'Measured Thrust',
        },
        {
            x: actuator_pct,
            y: linearizedResult.value.corrected_thrust,
            name: 'Linearized Thrust',
        },
        {
            x: actuator_pct,
            y: idealThrust,
            name: 'Ideal Response',
            line: {
                dash: '4px,3px' as Dash,
                width: 1,
                color: 'gray',
            },
        },
    ];

    const hoverThrottle = hoverParams.value.MOT_THST_HOVER * 100;
    if (hoverThrottle >= 0 && hoverThrottle <= 100) {
        plotData.push({
            x: [hoverThrottle],
            y: [requiredThrust.value],
            name: 'THST_HOVER',
            mode: 'markers',
            marker: {
                size: 8,
                symbol: 'circle',
                color: 'green',
            },
        });
    }

    return plotData;
});

/**
 * computed signal for normalized PWM values with caching
 */
export const normalizedPWMValues = computed(() => {
    const { MOT_PWM_MIN, MOT_PWM_MAX } = params.value;
    return {
        pwmSpinArm: normalize(params.value.MOT_SPIN_ARM, MOT_PWM_MIN, MOT_PWM_MAX),
        pwmSpinMin: normalize(params.value.MOT_SPIN_MIN, MOT_PWM_MIN, MOT_PWM_MAX),
        pwmSpinMax: normalize(params.value.MOT_SPIN_MAX, MOT_PWM_MIN, MOT_PWM_MAX),
    };
});

/**
 * computed signal for thrust plot layout
 * returns plotly layout configuration with motor parameter indicators
 * and appropriate axis ranges
 */
export const thrustPlotLayout = computed<Partial<Layout>>(() => {
    if (paramConfig.value.length === 0) {
        return {
            xaxis: { title: 'ESC Signal (μs)' },
            yaxis: { title: 'Thrust' },
        };
    }

    const { pwmSpinArm, pwmSpinMin, pwmSpinMax } = normalizedPWMValues.value;
    const yMax = maxThrust.value;

    const lines = [
        { x: pwmSpinArm, color: 'orange', label: 'MOT_SPIN_ARM' },
        { x: pwmSpinMin, color: 'green', label: 'MOT_SPIN_MIN' },
        { x: pwmSpinMax, color: 'red', label: 'MOT_SPIN_MAX' },
    ];

    return {
        xaxis: {
            title: 'ESC Signal (μs)',
            range: [params.value.MOT_PWM_MIN, params.value.MOT_PWM_MAX],
        },
        yaxis: {
            title: 'Thrust',
            range: [0, yMax],
        },
        shapes: lines.map(({ x, color }) => createVerticalLine({ x, yMax, color })),
        annotations: lines.map(({ x, label }) => createVerticalAnnotation({ x, label })),
    };
});

/**
 * computed signal for thrust expo plot layout
 * returns plotly layout configuration for thrust expo visualization
 */
export const thrustExpoPlotLayout = computed<Partial<Layout>>(() => ({
    xaxis: {
        title: 'Throttle (%)',
        range: [0, 100],
    },
    yaxis: {
        title: 'Thrust',
        range: [0, maxThrust.value],
    },
    showlegend: true,
}));

/**
 * initializes motor parameters from configuration
 * sets up parameter grid with initial values and constraints
 */
loadParams(Object.keys(MOTOR_PARAMS), MOTOR_PARAMS, READ_ONLY_STATES, CONSTRAINED_STATES)
    .then((result) => {
        paramConfig.value = result;
        params.value = initializeParamSignal(result);
    })
    .catch((error) => {
        console.error('failed to load thrust expo parameters:', error);
    })
    .finally(() => {
        isParamGridLoading.value = false;
    });

loadParams(Object.keys(HOVER_PARAMS), HOVER_PARAMS, READ_ONLY_STATES, CONSTRAINED_STATES)
    .then((result) => {
        result.splice(0, 0, {
            Name: 'Number of motors',
            Desc: 'Number of thrust producing motors',
            Value: 4,
            Range: { low: 1, high: 12 },
        });
        result.splice(1, 0, {
            Name: 'All-up weight (AUW)',
            Desc: 'All-up weight including battery and payload. Must be same units as thrust data.',
            Value: 0,
        });
        hoverParamConfig.value = result;
        hoverParams.value = initializeParamSignal(result);
    })
    .catch((error) => {
        console.error('Failed to load hover parameters:', error);
    })
    .finally(() => {
        isHoverParamGridLoading.value = false;
    });

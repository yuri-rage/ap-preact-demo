/**
 * parameter objects by prefix
 * should reflect all parameters used in https://github.com/ArduPilot/WebTools as of commit 2d1d26f
 * NOT a comprehensive list
 */
export const ATC = {
    ATC_ACCEL_P_MAX: {
        Description: 'Maximum acceleration in pitch axis',
        DisplayName: 'Acceleration Max for Pitch',
        Increment: '1000',
        Range: {
            high: '180000',
            low: '0',
        },
        Units: 'cdeg/s/s',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '108000': 'Medium',
            '162000': 'Fast',
            '30000': 'VerySlow',
            '72000': 'Slow',
        },
        __field_text:
            '\n    // @DisplayName: Acceleration Max for Pitch\n    // @Description: Maximum acceleration in pitch axis\n    // @Units: cdeg/s/s\n    // @Range: 0 180000\n    // @Increment: 1000\n    // @Values: 0:Disabled, 30000:VerySlow, 72000:Slow, 108000:Medium, 162000:Fast\n    // @User: Advanced',
    },
    ATC_ACCEL_R_MAX: {
        Description: 'Maximum acceleration in roll axis',
        DisplayName: 'Acceleration Max for Roll',
        Increment: '1000',
        Range: {
            high: '180000',
            low: '0',
        },
        Units: 'cdeg/s/s',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '108000': 'Medium',
            '162000': 'Fast',
            '30000': 'VerySlow',
            '72000': 'Slow',
        },
        __field_text:
            '\n    // @DisplayName: Acceleration Max for Roll\n    // @Description: Maximum acceleration in roll axis\n    // @Units: cdeg/s/s\n    // @Range: 0 180000\n    // @Increment: 1000\n    // @Values: 0:Disabled, 30000:VerySlow, 72000:Slow, 108000:Medium, 162000:Fast\n    // @User: Advanced',
    },
    ATC_ACCEL_Y_MAX: {
        Description: 'Maximum acceleration in yaw axis',
        DisplayName: 'Acceleration Max for Yaw',
        Increment: '1000',
        Range: {
            high: '72000',
            low: '0',
        },
        Units: 'cdeg/s/s',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '18000': 'Slow',
            '36000': 'Medium',
            '54000': 'Fast',
            '9000': 'VerySlow',
        },
        __field_text:
            '\n    // @DisplayName: Acceleration Max for Yaw\n    // @Description: Maximum acceleration in yaw axis\n    // @Units: cdeg/s/s\n    // @Range: 0 72000\n    // @Values: 0:Disabled, 9000:VerySlow, 18000:Slow, 36000:Medium, 54000:Fast\n    // @Increment: 1000\n    // @User: Advanced',
    },
    ATC_ANGLE_BOOST: {
        Description: 'Angle Boost increases output throttle as the vehicle leans to reduce loss of altitude',
        DisplayName: 'Angle Boost',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Angle Boost\n    // @Description: Angle Boost increases output throttle as the vehicle leans to reduce loss of altitude\n    // @Values: 0:Disabled, 1:Enabled\n    // @User: Advanced',
    },
    ATC_ANG_LIM_TC: {
        Description: 'Angle Limit (to maintain altitude) Time Constant',
        DisplayName: 'Angle Limit (to maintain altitude) Time Constant',
        Range: {
            high: '10.0',
            low: '0.5',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Angle Limit (to maintain altitude) Time Constant\n    // @Description: Angle Limit (to maintain altitude) Time Constant\n    // @Range: 0.5 10.0\n    // @User: Advanced',
    },
    ATC_ANG_PIT_P: {
        Description:
            'Pitch axis angle controller P gain.  Converts the error between the desired pitch angle and actual angle to a desired pitch rate',
        DisplayName: 'Pitch axis angle controller P gain',
        Range: {
            high: '12.000',
            low: '3.000',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Pitch axis angle controller P gain\n    // @Description: Pitch axis angle controller P gain.  Converts the error between the desired pitch angle and actual angle to a desired pitch rate\n    // @Range: 3.000 12.000\n    // @Range{Sub}: 0.0 12.000\n    // @User: Standard',
    },
    ATC_ANG_RLL_P: {
        Description:
            'Roll axis angle controller P gain.  Converts the error between the desired roll angle and actual angle to a desired roll rate',
        DisplayName: 'Roll axis angle controller P gain',
        Range: {
            high: '12.000',
            low: '3.000',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Roll axis angle controller P gain\n    // @Description: Roll axis angle controller P gain.  Converts the error between the desired roll angle and actual angle to a desired roll rate\n    // @Range: 3.000 12.000\n    // @Range{Sub}: 0.0 12.000\n    // @User: Standard',
    },
    ATC_ANG_YAW_P: {
        Description:
            'Yaw axis angle controller P gain.  Converts the error between the desired yaw angle and actual angle to a desired yaw rate',
        DisplayName: 'Yaw axis angle controller P gain',
        Range: {
            high: '12.000',
            low: '3.000',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Yaw axis angle controller P gain\n    // @Description: Yaw axis angle controller P gain.  Converts the error between the desired yaw angle and actual angle to a desired yaw rate\n    // @Range: 3.000 12.000\n    // @Range{Sub}: 0.0 6.000\n    // @User: Standard',
    },
    ATC_HOVR_ROL_TRM: {
        Description: 'Trim the hover roll angle to counter tail rotor thrust in a hover',
        DisplayName: 'Hover Roll Trim',
        Increment: '10',
        Range: {
            high: '1000',
            low: '0',
        },
        Units: 'cdeg',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Hover Roll Trim\n    // @Description: Trim the hover roll angle to counter tail rotor thrust in a hover\n    // @Units: cdeg\n    // @Increment: 10\n    // @Range: 0 1000\n    // @User: Advanced',
    },
    ATC_INPUT_TC: {
        Description:
            'Attitude control input time constant.  Low numbers lead to sharper response, higher numbers to softer response',
        DisplayName: 'Attitude control input time constant',
        Increment: '0.01',
        Range: {
            high: '1',
            low: '0',
        },
        Units: 's',
        User: 'Standard',
        Values: {
            '0.05': 'Very Crisp',
            '0.1': 'Crisp',
            '0.15': 'Medium',
            '0.2': 'Soft',
            '0.5': 'Very Soft',
        },
        __field_text:
            '\n    // @DisplayName: Attitude control input time constant\n    // @Description: Attitude control input time constant.  Low numbers lead to sharper response, higher numbers to softer response\n    // @Units: s\n    // @Range: 0 1\n    // @Increment: 0.01\n    // @Values: 0.5:Very Soft, 0.2:Soft, 0.15:Medium, 0.1:Crisp, 0.05:Very Crisp\n    // @User: Standard',
    },
    ATC_PIRO_COMP: {
        Description: 'Pirouette compensation enabled',
        DisplayName: 'Piro Comp Enable',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Piro Comp Enable\n    // @Description: Pirouette compensation enabled\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    ATC_RATE_FF_ENAB: {
        Description: 'Controls whether body-frame rate feedfoward is enabled or disabled',
        DisplayName: 'Rate Feedforward Enable',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Rate Feedforward Enable\n    // @Description: Controls whether body-frame rate feedfoward is enabled or disabled\n    // @Values: 0:Disabled, 1:Enabled\n    // @User: Advanced',
    },
    ATC_RATE_P_MAX: {
        Description: 'Maximum angular velocity in pitch axis',
        DisplayName: 'Angular Velocity Max for Pitch',
        Increment: '1',
        Range: {
            high: '1080',
            low: '0',
        },
        Units: 'deg/s',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '180': 'Medium',
            '360': 'Fast',
            '60': 'Slow',
        },
        __field_text:
            '\n    // @DisplayName: Angular Velocity Max for Pitch\n    // @Description: Maximum angular velocity in pitch axis\n    // @Units: deg/s\n    // @Range: 0 1080\n    // @Increment: 1\n    // @Values: 0:Disabled, 60:Slow, 180:Medium, 360:Fast\n    // @User: Advanced',
    },
    ATC_RATE_R_MAX: {
        Description: 'Maximum angular velocity in roll axis',
        DisplayName: 'Angular Velocity Max for Roll',
        Increment: '1',
        Range: {
            high: '1080',
            low: '0',
        },
        Units: 'deg/s',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '180': 'Medium',
            '360': 'Fast',
            '60': 'Slow',
        },
        __field_text:
            '\n    // @DisplayName: Angular Velocity Max for Roll\n    // @Description: Maximum angular velocity in roll axis\n    // @Units: deg/s\n    // @Range: 0 1080\n    // @Increment: 1\n    // @Values: 0:Disabled, 60:Slow, 180:Medium, 360:Fast\n    // @User: Advanced',
    },
    ATC_RATE_Y_MAX: {
        Description: 'Maximum angular velocity in yaw axis',
        DisplayName: 'Angular Velocity Max for Yaw',
        Increment: '1',
        Range: {
            high: '1080',
            low: '0',
        },
        Units: 'deg/s',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '180': 'Medium',
            '360': 'Fast',
            '60': 'Slow',
        },
        __field_text:
            '\n    // @DisplayName: Angular Velocity Max for Yaw\n    // @Description: Maximum angular velocity in yaw axis\n    // @Units: deg/s\n    // @Range: 0 1080\n    // @Increment: 1\n    // @Values: 0:Disabled, 60:Slow, 180:Medium, 360:Fast\n    // @User: Advanced',
    },
    ATC_RAT_PIT_D: {
        Description:
            'Pitch axis rate controller D gain.  Compensates for short-term change in desired pitch rate vs actual pitch rate',
        DisplayName: 'Pitch axis rate controller D gain',
        Increment: '0.001',
        Range: {
            high: '0.03',
            low: '0.0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Pitch axis rate controller D gain\n    // @Description: Pitch axis rate controller D gain.  Compensates for short-term change in desired pitch rate vs actual pitch rate\n    // @Range: 0.0 0.03\n    // @Increment: 0.001\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_PIT_FF: {
        Description: 'Pitch axis rate controller feed forward',
        DisplayName: 'Pitch axis rate controller feed forward',
        Increment: '0.001',
        Range: {
            high: '0.5',
            low: '0.05',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Pitch axis rate controller feed forward\n    // @Description: Pitch axis rate controller feed forward\n    // @Range: 0.05 0.5\n    // @Increment: 0.001\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_PIT_FLTD: {
        Description: 'Pitch axis rate controller derivative frequency in Hz',
        DisplayName: 'Pitch axis rate controller derivative frequency in Hz',
        Increment: '1',
        Range: {
            high: '50',
            low: '0',
        },
        Units: 'Hz',
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Pitch axis rate controller derivative frequency in Hz\n    // @Description: Pitch axis rate controller derivative frequency in Hz\n    // @Range: 0 50\n    // @Increment: 1\n    // @Units: Hz\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_PIT_FLTE: {
        Description: 'Pitch axis rate controller error frequency in Hz',
        DisplayName: 'Pitch axis rate controller error frequency in Hz',
        Increment: '1',
        Range: {
            high: '50',
            low: '5',
        },
        Units: 'Hz',
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Pitch axis rate controller error frequency in Hz\n    // @Description: Pitch axis rate controller error frequency in Hz\n    // @Range: 5 50\n    // @Increment: 1\n    // @Units: Hz\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_PIT_FLTT: {
        Description: 'Pitch axis rate controller target frequency in Hz',
        DisplayName: 'Pitch axis rate controller target frequency in Hz',
        Increment: '1',
        Range: {
            high: '50',
            low: '5',
        },
        Units: 'Hz',
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Pitch axis rate controller target frequency in Hz\n    // @Description: Pitch axis rate controller target frequency in Hz\n    // @Range: 5 50\n    // @Increment: 1\n    // @Units: Hz\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_PIT_I: {
        Description:
            'Pitch axis rate controller I gain.  Corrects long-term difference in desired pitch rate vs actual pitch rate',
        DisplayName: 'Pitch axis rate controller I gain',
        Increment: '0.01',
        Range: {
            high: '0.6',
            low: '0.0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Pitch axis rate controller I gain\n    // @Description: Pitch axis rate controller I gain.  Corrects long-term difference in desired pitch rate vs actual pitch rate\n    // @Range: 0.0 0.6\n    // @Increment: 0.01\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_PIT_ILMI: {
        Description: 'Point below which I-term will not leak down',
        DisplayName: 'Pitch axis rate controller I-term leak minimum',
        Range: {
            high: '1',
            low: '0',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Pitch axis rate controller I-term leak minimum\n    // @Description: Point below which I-term will not leak down\n    // @Range: 0 1\n    // @User: Advanced',
    },
    ATC_RAT_PIT_IMAX: {
        Description:
            'Pitch axis rate controller I gain maximum.  Constrains the maximum that the I term will output',
        DisplayName: 'Pitch axis rate controller I gain maximum',
        Increment: '0.01',
        Range: {
            high: '1',
            low: '0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Pitch axis rate controller I gain maximum\n    // @Description: Pitch axis rate controller I gain maximum.  Constrains the maximum that the I term will output\n    // @Range: 0 1\n    // @Increment: 0.01\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_PIT_P: {
        Description:
            'Pitch axis rate controller P gain.  Corrects in proportion to the difference between the desired pitch rate vs actual pitch rate',
        DisplayName: 'Pitch axis rate controller P gain',
        Increment: '0.005',
        Range: {
            high: '0.35',
            low: '0.0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Pitch axis rate controller P gain\n    // @Description: Pitch axis rate controller P gain.  Corrects in proportion to the difference between the desired pitch rate vs actual pitch rate\n    // @Range: 0.0 0.35\n    // @Increment: 0.005\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_PIT_SMAX: {
        Description:
            'Sets an upper limit on the slew rate produced by the combined P and D gains. If the amplitude of the control action produced by the rate feedback exceeds this value, then the D+P gain is reduced to respect the limit. This limits the amplitude of high frequency oscillations caused by an excessive gain. The limit should be set to no more than 25% of the actuators maximum slew rate to allow for load effects. Note: The gain will not be reduced to less than 10% of the nominal value. A value of zero will disable this feature.',
        DisplayName: 'Pitch slew rate limit',
        Increment: '0.5',
        Range: {
            high: '200',
            low: '0',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Pitch slew rate limit\n    // @Description: Sets an upper limit on the slew rate produced by the combined P and D gains. If the amplitude of the control action produced by the rate feedback exceeds this value, then the D+P gain is reduced to respect the limit. This limits the amplitude of high frequency oscillations caused by an excessive gain. The limit should be set to no more than 25% of the actuators maximum slew rate to allow for load effects. Note: The gain will not be reduced to less than 10% of the nominal value. A value of zero will disable this feature.\n    // @Range: 0 200\n    // @Increment: 0.5\n    // @User: Advanced',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_RLL_D: {
        Description:
            'Roll axis rate controller D gain.  Compensates for short-term change in desired roll rate vs actual roll rate',
        DisplayName: 'Roll axis rate controller D gain',
        Increment: '0.001',
        Range: {
            high: '0.03',
            low: '0.0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Roll axis rate controller D gain\n    // @Description: Roll axis rate controller D gain.  Compensates for short-term change in desired roll rate vs actual roll rate\n    // @Range: 0.0 0.03\n    // @Increment: 0.001\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_RLL_FF: {
        Description: 'Roll axis rate controller feed forward',
        DisplayName: 'Roll axis rate controller feed forward',
        Increment: '0.001',
        Range: {
            high: '0.5',
            low: '0.05',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Roll axis rate controller feed forward\n    // @Description: Roll axis rate controller feed forward\n    // @Range: 0.05 0.5\n    // @Increment: 0.001\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_RLL_FLTD: {
        Description: 'Roll axis rate controller derivative frequency in Hz',
        DisplayName: 'Roll axis rate controller derivative frequency in Hz',
        Increment: '1',
        Range: {
            high: '50',
            low: '0',
        },
        Units: 'Hz',
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Roll axis rate controller derivative frequency in Hz\n    // @Description: Roll axis rate controller derivative frequency in Hz\n    // @Range: 0 50\n    // @Increment: 1\n    // @Units: Hz\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_RLL_FLTE: {
        Description: 'Roll axis rate controller error frequency in Hz',
        DisplayName: 'Roll axis rate controller error frequency in Hz',
        Increment: '1',
        Range: {
            high: '50',
            low: '5',
        },
        Units: 'Hz',
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Roll axis rate controller error frequency in Hz\n    // @Description: Roll axis rate controller error frequency in Hz\n    // @Range: 5 50\n    // @Increment: 1\n    // @Units: Hz\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_RLL_FLTT: {
        Description: 'Roll axis rate controller target frequency in Hz',
        DisplayName: 'Roll axis rate controller target frequency in Hz',
        Increment: '1',
        Range: {
            high: '50',
            low: '5',
        },
        Units: 'Hz',
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Roll axis rate controller target frequency in Hz\n    // @Description: Roll axis rate controller target frequency in Hz\n    // @Range: 5 50\n    // @Increment: 1\n    // @Units: Hz\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_RLL_I: {
        Description:
            'Roll axis rate controller I gain.  Corrects long-term difference in desired roll rate vs actual roll rate',
        DisplayName: 'Roll axis rate controller I gain',
        Increment: '0.01',
        Range: {
            high: '0.6',
            low: '0.0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Roll axis rate controller I gain\n    // @Description: Roll axis rate controller I gain.  Corrects long-term difference in desired roll rate vs actual roll rate\n    // @Range: 0.0 0.6\n    // @Increment: 0.01\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_RLL_ILMI: {
        Description: 'Point below which I-term will not leak down',
        DisplayName: 'Roll axis rate controller I-term leak minimum',
        Range: {
            high: '1',
            low: '0',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Roll axis rate controller I-term leak minimum\n    // @Description: Point below which I-term will not leak down\n    // @Range: 0 1\n    // @User: Advanced',
    },
    ATC_RAT_RLL_IMAX: {
        Description:
            'Roll axis rate controller I gain maximum.  Constrains the maximum that the I term will output',
        DisplayName: 'Roll axis rate controller I gain maximum',
        Increment: '0.01',
        Range: {
            high: '1',
            low: '0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Roll axis rate controller I gain maximum\n    // @Description: Roll axis rate controller I gain maximum.  Constrains the maximum that the I term will output\n    // @Range: 0 1\n    // @Increment: 0.01\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_RLL_P: {
        Description:
            'Roll axis rate controller P gain.  Corrects in proportion to the difference between the desired roll rate vs actual roll rate',
        DisplayName: 'Roll axis rate controller P gain',
        Increment: '0.005',
        Range: {
            high: '0.35',
            low: '0.0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Roll axis rate controller P gain\n    // @Description: Roll axis rate controller P gain.  Corrects in proportion to the difference between the desired roll rate vs actual roll rate\n    // @Range: 0.0 0.35\n    // @Increment: 0.005\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_RLL_SMAX: {
        Description:
            'Sets an upper limit on the slew rate produced by the combined P and D gains. If the amplitude of the control action produced by the rate feedback exceeds this value, then the D+P gain is reduced to respect the limit. This limits the amplitude of high frequency oscillations caused by an excessive gain. The limit should be set to no more than 25% of the actuators maximum slew rate to allow for load effects. Note: The gain will not be reduced to less than 10% of the nominal value. A value of zero will disable this feature.',
        DisplayName: 'Roll slew rate limit',
        Increment: '0.5',
        Range: {
            high: '200',
            low: '0',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Roll slew rate limit\n    // @Description: Sets an upper limit on the slew rate produced by the combined P and D gains. If the amplitude of the control action produced by the rate feedback exceeds this value, then the D+P gain is reduced to respect the limit. This limits the amplitude of high frequency oscillations caused by an excessive gain. The limit should be set to no more than 25% of the actuators maximum slew rate to allow for load effects. Note: The gain will not be reduced to less than 10% of the nominal value. A value of zero will disable this feature.\n    // @Range: 0 200\n    // @Increment: 0.5\n    // @User: Advanced',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_YAW_D: {
        Description:
            'Yaw axis rate controller D gain.  Compensates for short-term change in desired yaw rate vs actual yaw rate',
        DisplayName: 'Yaw axis rate controller D gain',
        Increment: '0.001',
        Range: {
            high: '0.02',
            low: '0.000',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Yaw axis rate controller D gain\n    // @Description: Yaw axis rate controller D gain.  Compensates for short-term change in desired yaw rate vs actual yaw rate\n    // @Range: 0.000 0.02\n    // @Increment: 0.001\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_YAW_FF: {
        Description: 'Yaw axis rate controller feed forward',
        DisplayName: 'Yaw axis rate controller feed forward',
        Increment: '0.001',
        Range: {
            high: '0.5',
            low: '0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Yaw axis rate controller feed forward\n    // @Description: Yaw axis rate controller feed forward\n    // @Range: 0 0.5\n    // @Increment: 0.001\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_YAW_FLTD: {
        Description: 'Yaw axis rate controller derivative frequency in Hz',
        DisplayName: 'Yaw axis rate controller derivative frequency in Hz',
        Increment: '1',
        Range: {
            high: '50',
            low: '0',
        },
        Units: 'Hz',
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Yaw axis rate controller derivative frequency in Hz\n    // @Description: Yaw axis rate controller derivative frequency in Hz\n    // @Range: 0 50\n    // @Increment: 1\n    // @Units: Hz\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_YAW_FLTE: {
        Description: 'Yaw axis rate controller error frequency in Hz',
        DisplayName: 'Yaw axis rate controller error frequency in Hz',
        Increment: '1',
        Range: {
            high: '50',
            low: '5',
        },
        Units: 'Hz',
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Yaw axis rate controller error frequency in Hz\n    // @Description: Yaw axis rate controller error frequency in Hz\n    // @Range: 5 50\n    // @Increment: 1\n    // @Units: Hz\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_YAW_FLTT: {
        Description: 'Yaw axis rate controller target frequency in Hz',
        DisplayName: 'Yaw axis rate controller target frequency in Hz',
        Increment: '1',
        Range: {
            high: '50',
            low: '5',
        },
        Units: 'Hz',
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Yaw axis rate controller target frequency in Hz\n    // @Description: Yaw axis rate controller target frequency in Hz\n    // @Range: 5 50\n    // @Increment: 1\n    // @Units: Hz\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_YAW_I: {
        Description:
            'Yaw axis rate controller I gain.  Corrects long-term difference in desired yaw rate vs actual yaw rate',
        DisplayName: 'Yaw axis rate controller I gain',
        Increment: '0.01',
        Range: {
            high: '0.2',
            low: '0.01',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Yaw axis rate controller I gain\n    // @Description: Yaw axis rate controller I gain.  Corrects long-term difference in desired yaw rate vs actual yaw rate\n    // @Range: 0.01 0.2\n    // @Increment: 0.01\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_YAW_ILMI: {
        Description: 'Point below which I-term will not leak down',
        DisplayName: 'Yaw axis rate controller I-term leak minimum',
        Range: {
            high: '1',
            low: '0',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Yaw axis rate controller I-term leak minimum\n    // @Description: Point below which I-term will not leak down\n    // @Range: 0 1\n    // @User: Advanced',
    },
    ATC_RAT_YAW_IMAX: {
        Description:
            'Yaw axis rate controller I gain maximum.  Constrains the maximum that the I term will output',
        DisplayName: 'Yaw axis rate controller I gain maximum',
        Increment: '0.01',
        Range: {
            high: '1',
            low: '0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Yaw axis rate controller I gain maximum\n    // @Description: Yaw axis rate controller I gain maximum.  Constrains the maximum that the I term will output\n    // @Range: 0 1\n    // @Increment: 0.01\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_YAW_P: {
        Description:
            'Yaw axis rate controller P gain.  Corrects in proportion to the difference between the desired yaw rate vs actual yaw rate',
        DisplayName: 'Yaw axis rate controller P gain',
        Increment: '0.005',
        Range: {
            high: '0.60',
            low: '0.180',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Yaw axis rate controller P gain\n    // @Description: Yaw axis rate controller P gain.  Corrects in proportion to the difference between the desired yaw rate vs actual yaw rate\n    // @Range: 0.180 0.60\n    // @Increment: 0.005\n    // @User: Standard',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_RAT_YAW_SMAX: {
        Description:
            'Sets an upper limit on the slew rate produced by the combined P and D gains. If the amplitude of the control action produced by the rate feedback exceeds this value, then the D+P gain is reduced to respect the limit. This limits the amplitude of high frequency oscillations caused by an excessive gain. The limit should be set to no more than 25% of the actuators maximum slew rate to allow for load effects. Note: The gain will not be reduced to less than 10% of the nominal value. A value of zero will disable this feature.',
        DisplayName: 'Yaw slew rate limit',
        Increment: '0.5',
        Range: {
            high: '200',
            low: '0',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Yaw slew rate limit\n    // @Description: Sets an upper limit on the slew rate produced by the combined P and D gains. If the amplitude of the control action produced by the rate feedback exceeds this value, then the D+P gain is reduced to respect the limit. This limits the amplitude of high frequency oscillations caused by an excessive gain. The limit should be set to no more than 25% of the actuators maximum slew rate to allow for load effects. Note: The gain will not be reduced to less than 10% of the nominal value. A value of zero will disable this feature.\n    // @Range: 0 200\n    // @Increment: 0.5\n    // @User: Advanced',
        path: 'AC_AttitudeControl_Heli',
    },
    ATC_SLEW_YAW: {
        Description: 'Maximum rate the yaw target can be updated in Loiter, RTL, Auto flight modes',
        DisplayName: 'Yaw target slew rate',
        Increment: '100',
        Range: {
            high: '18000',
            low: '500',
        },
        Units: 'cdeg/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Yaw target slew rate\n    // @Description: Maximum rate the yaw target can be updated in Loiter, RTL, Auto flight modes\n    // @Units: cdeg/s\n    // @Range: 500 18000\n    // @Increment: 100\n    // @User: Advanced',
    },
    ATC_THR_G_BOOST: {
        Description:
            'Throttle-gain boost ratio. A value of 0 means no boosting is applied, a value of 1 means full boosting is applied. Describes the ratio increase that is applied to angle P and PD on pitch and roll.',
        DisplayName: 'Throttle-gain boost',
        Range: {
            high: '1',
            low: '0',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Throttle-gain boost\n    // @Description: Throttle-gain boost ratio. A value of 0 means no boosting is applied, a value of 1 means full boosting is applied. Describes the ratio increase that is applied to angle P and PD on pitch and roll.\n    // @Range: 0 1\n    // @User: Advanced',
    },
    ATC_THR_MIX_MAN: {
        Description:
            'Throttle vs attitude control prioritisation used during manual flight (higher values mean we prioritise attitude control over throttle)',
        DisplayName: 'Throttle Mix Manual',
        Range: {
            high: '0.9',
            low: '0.1',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Throttle Mix Manual\n    // @Description: Throttle vs attitude control prioritisation used during manual flight (higher values mean we prioritise attitude control over throttle)\n    // @Range: 0.1 0.9\n    // @User: Advanced',
    },
    ATC_THR_MIX_MAX: {
        Description:
            'Throttle vs attitude control prioritisation used during active flight (higher values mean we prioritise attitude control over throttle)',
        DisplayName: 'Throttle Mix Maximum',
        Range: {
            high: '0.9',
            low: '0.5',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Throttle Mix Maximum\n    // @Description: Throttle vs attitude control prioritisation used during active flight (higher values mean we prioritise attitude control over throttle)\n    // @Range: 0.5 0.9\n    // @User: Advanced',
    },
    ATC_THR_MIX_MIN: {
        Description:
            'Throttle vs attitude control prioritisation used when landing (higher values mean we prioritise attitude control over throttle)',
        DisplayName: 'Throttle Mix Minimum',
        Range: {
            high: '0.25',
            low: '0.1',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Throttle Mix Minimum\n    // @Description: Throttle vs attitude control prioritisation used when landing (higher values mean we prioritise attitude control over throttle)\n    // @Range: 0.1 0.25\n    // @User: Advanced',
    },
};

export const INS = {
    INS_ACC1_CALTEMP: {
        Calibration: '1',
        Description: 'Temperature that the 1st accelerometer was calibrated at',
        DisplayName: 'Calibration temperature for 1st accelerometer',
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Calibration temperature for 1st accelerometer\n    // @Description: Temperature that the 1st accelerometer was calibrated at\n    // @User: Advanced\n    // @Units: degC\n    // @Calibration: 1',
    },
    INS_ACC2OFFS_X: {
        Calibration: '1',
        Description:
            'Accelerometer2 offsets of X axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer2 offsets of X axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer2 offsets of X axis\n    // @Description: Accelerometer2 offsets of X axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC2OFFS_Y: {
        Calibration: '1',
        Description:
            'Accelerometer2 offsets of Y axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer2 offsets of Y axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer2 offsets of Y axis\n    // @Description: Accelerometer2 offsets of Y axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC2OFFS_Z: {
        Calibration: '1',
        Description:
            'Accelerometer2 offsets of Z axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer2 offsets of Z axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer2 offsets of Z axis\n    // @Description: Accelerometer2 offsets of Z axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC2SCAL_X: {
        Calibration: '1',
        Description: 'Accelerometer2 scaling of X axis.  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer2 scaling of X axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer2 scaling of X axis\n    // @Description: Accelerometer2 scaling of X axis.  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC2SCAL_Y: {
        Calibration: '1',
        Description: 'Accelerometer2 scaling of Y axis  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer2 scaling of Y axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer2 scaling of Y axis\n    // @Description: Accelerometer2 scaling of Y axis  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC2SCAL_Z: {
        Calibration: '1',
        Description: 'Accelerometer2 scaling of Z axis  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer2 scaling of Z axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer2 scaling of Z axis\n    // @Description: Accelerometer2 scaling of Z axis  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC2_CALTEMP: {
        Calibration: '1',
        Description: 'Temperature that the 2nd accelerometer was calibrated at',
        DisplayName: 'Calibration temperature for 2nd accelerometer',
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Calibration temperature for 2nd accelerometer\n    // @Description: Temperature that the 2nd accelerometer was calibrated at\n    // @User: Advanced\n    // @Units: degC\n    // @Calibration: 1',
    },
    INS_ACC2_ID: {
        Description: 'Accelerometer2 sensor ID, taking into account its type, bus and instance',
        DisplayName: 'Accelerometer2 ID',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer2 ID\n    // @Description: Accelerometer2 sensor ID, taking into account its type, bus and instance\n    // @ReadOnly: True\n    // @User: Advanced',
    },
    INS_ACC3OFFS_X: {
        Calibration: '1',
        Description:
            'Accelerometer3 offsets of X axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer3 offsets of X axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer3 offsets of X axis\n    // @Description: Accelerometer3 offsets of X axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC3OFFS_Y: {
        Calibration: '1',
        Description:
            'Accelerometer3 offsets of Y axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer3 offsets of Y axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer3 offsets of Y axis\n    // @Description: Accelerometer3 offsets of Y axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC3OFFS_Z: {
        Calibration: '1',
        Description:
            'Accelerometer3 offsets of Z axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer3 offsets of Z axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer3 offsets of Z axis\n    // @Description: Accelerometer3 offsets of Z axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC3SCAL_X: {
        Calibration: '1',
        Description: 'Accelerometer3 scaling of X axis.  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer3 scaling of X axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer3 scaling of X axis\n    // @Description: Accelerometer3 scaling of X axis.  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC3SCAL_Y: {
        Calibration: '1',
        Description: 'Accelerometer3 scaling of Y axis  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer3 scaling of Y axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer3 scaling of Y axis\n    // @Description: Accelerometer3 scaling of Y axis  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC3SCAL_Z: {
        Calibration: '1',
        Description: 'Accelerometer3 scaling of Z axis  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer3 scaling of Z axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer3 scaling of Z axis\n    // @Description: Accelerometer3 scaling of Z axis  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC3_CALTEMP: {
        Calibration: '1',
        Description: 'Temperature that the 3rd accelerometer was calibrated at',
        DisplayName: 'Calibration temperature for 3rd accelerometer',
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Calibration temperature for 3rd accelerometer\n    // @Description: Temperature that the 3rd accelerometer was calibrated at\n    // @User: Advanced\n    // @Units: degC\n    // @Calibration: 1',
    },
    INS_ACC3_ID: {
        Description: 'Accelerometer3 sensor ID, taking into account its type, bus and instance',
        DisplayName: 'Accelerometer3 ID',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer3 ID\n    // @Description: Accelerometer3 sensor ID, taking into account its type, bus and instance\n    // @ReadOnly: True\n    // @User: Advanced',
    },
    INS_ACCEL_FILTER: {
        Description:
            'Filter cutoff frequency for accelerometers. This can be set to a lower value to try to cope with very high vibration levels in aircraft. A value of zero means no filtering (not recommended!)',
        DisplayName: 'Accel filter cutoff frequency',
        Range: {
            high: '256',
            low: '0',
        },
        Units: 'Hz',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accel filter cutoff frequency\n    // @Description: Filter cutoff frequency for accelerometers. This can be set to a lower value to try to cope with very high vibration levels in aircraft. A value of zero means no filtering (not recommended!)\n    // @Units: Hz\n    // @Range: 0 256\n    // @User: Advanced',
    },
    INS_ACCOFFS_X: {
        Calibration: '1',
        Description:
            'Accelerometer offsets of X axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer offsets of X axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer offsets of X axis\n    // @Description: Accelerometer offsets of X axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACCOFFS_Y: {
        Calibration: '1',
        Description:
            'Accelerometer offsets of Y axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer offsets of Y axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer offsets of Y axis\n    // @Description: Accelerometer offsets of Y axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACCOFFS_Z: {
        Calibration: '1',
        Description:
            'Accelerometer offsets of Z axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer offsets of Z axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer offsets of Z axis\n    // @Description: Accelerometer offsets of Z axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACCSCAL_X: {
        Calibration: '1',
        Description: 'Accelerometer scaling of X axis.  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer scaling of X axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer scaling of X axis\n    // @Description: Accelerometer scaling of X axis.  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACCSCAL_Y: {
        Calibration: '1',
        Description: 'Accelerometer scaling of Y axis  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer scaling of Y axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer scaling of Y axis\n    // @Description: Accelerometer scaling of Y axis  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACCSCAL_Z: {
        Calibration: '1',
        Description: 'Accelerometer scaling of Z axis  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer scaling of Z axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer scaling of Z axis\n    // @Description: Accelerometer scaling of Z axis  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_ACC_BODYFIX: {
        Description: 'The body-fixed accelerometer to be used for trim calculation',
        DisplayName: 'Body-fixed accelerometer',
        User: 'Advanced',
        Values: {
            '1': 'IMU 1',
            '2': 'IMU 2',
            '3': 'IMU 3',
        },
        __field_text:
            '\n    // @DisplayName: Body-fixed accelerometer\n    // @Description: The body-fixed accelerometer to be used for trim calculation\n    // @User: Advanced\n    // @Values: 1:IMU 1,2:IMU 2,3:IMU 3',
    },
    INS_ACC_ID: {
        Description: 'Accelerometer sensor ID, taking into account its type, bus and instance',
        DisplayName: 'Accelerometer ID',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer ID\n    // @Description: Accelerometer sensor ID, taking into account its type, bus and instance\n    // @ReadOnly: True\n    // @User: Advanced',
    },
    INS_ENABLE_MASK: {
        Bitmask: {
            '0': 'FirstIMU',
            '1': 'SecondIMU',
            '2': 'ThirdIMU',
            '3': 'FourthIMU',
            '4': 'FifthIMU',
            '5': 'SixthIMU',
            '6': 'SeventhIMU',
        },
        Description: 'Bitmask of IMUs to enable. It can be used to prevent startup of specific detected IMUs',
        DisplayName: 'IMU enable mask',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU enable mask\n    // @Description: Bitmask of IMUs to enable. It can be used to prevent startup of specific detected IMUs\n    // @User: Advanced\n    // @Bitmask: 0:FirstIMU,1:SecondIMU,2:ThirdIMU,3:FourthIMU,4:FifthIMU,5:SixthIMU,6:SeventhIMU',
    },
    INS_FAST_SAMPLE: {
        Bitmask: {
            '0': 'FirstIMU',
            '1': 'SecondIMU',
            '2': 'ThirdIMU',
        },
        Description: 'Mask of IMUs to enable fast sampling on, if available',
        DisplayName: 'Fast sampling mask',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Fast sampling mask\n    // @Description: Mask of IMUs to enable fast sampling on, if available\n    // @User: Advanced\n    // @Bitmask: 0:FirstIMU,1:SecondIMU,2:ThirdIMU',
    },
    INS_GYR1_CALTEMP: {
        Calibration: '1',
        Description: 'Temperature that the 1st gyroscope was calibrated at',
        DisplayName: 'Calibration temperature for 1st gyroscope',
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Calibration temperature for 1st gyroscope\n    // @Description: Temperature that the 1st gyroscope was calibrated at\n    // @User: Advanced\n    // @Units: degC\n    // @Calibration: 1',
    },
    INS_GYR2OFFS_X: {
        Calibration: '1',
        Description: 'Gyro2 sensor offsets of X axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro2 offsets of X axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro2 offsets of X axis\n    // @Description: Gyro2 sensor offsets of X axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_GYR2OFFS_Y: {
        Calibration: '1',
        Description: 'Gyro2 sensor offsets of Y axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro2 offsets of Y axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro2 offsets of Y axis\n    // @Description: Gyro2 sensor offsets of Y axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_GYR2OFFS_Z: {
        Calibration: '1',
        Description: 'Gyro2 sensor offsets of Z axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro2 offsets of Z axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro2 offsets of Z axis\n    // @Description: Gyro2 sensor offsets of Z axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_GYR2_CALTEMP: {
        Calibration: '1',
        Description: 'Temperature that the 2nd gyroscope was calibrated at',
        DisplayName: 'Calibration temperature for 2nd gyroscope',
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Calibration temperature for 2nd gyroscope\n    // @Description: Temperature that the 2nd gyroscope was calibrated at\n    // @User: Advanced\n    // @Units: degC\n    // @Calibration: 1',
    },
    INS_GYR2_ID: {
        Description: 'Gyro2 sensor ID, taking into account its type, bus and instance',
        DisplayName: 'Gyro2 ID',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro2 ID\n    // @Description: Gyro2 sensor ID, taking into account its type, bus and instance\n    // @ReadOnly: True\n    // @User: Advanced',
    },
    INS_GYR3OFFS_X: {
        Calibration: '1',
        Description: 'Gyro3 sensor offsets of X axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro3 offsets of X axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro3 offsets of X axis\n    // @Description: Gyro3 sensor offsets of X axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_GYR3OFFS_Y: {
        Calibration: '1',
        Description: 'Gyro3 sensor offsets of Y axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro3 offsets of Y axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro3 offsets of Y axis\n    // @Description: Gyro3 sensor offsets of Y axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_GYR3OFFS_Z: {
        Calibration: '1',
        Description: 'Gyro3 sensor offsets of Z axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro3 offsets of Z axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro3 offsets of Z axis\n    // @Description: Gyro3 sensor offsets of Z axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_GYR3_CALTEMP: {
        Calibration: '1',
        Description: 'Temperature that the 3rd gyroscope was calibrated at',
        DisplayName: 'Calibration temperature for 3rd gyroscope',
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Calibration temperature for 3rd gyroscope\n    // @Description: Temperature that the 3rd gyroscope was calibrated at\n    // @User: Advanced\n    // @Units: degC\n    // @Calibration: 1',
    },
    INS_GYR3_ID: {
        Description: 'Gyro3 sensor ID, taking into account its type, bus and instance',
        DisplayName: 'Gyro3 ID',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro3 ID\n    // @Description: Gyro3 sensor ID, taking into account its type, bus and instance\n    // @ReadOnly: True\n    // @User: Advanced',
    },
    INS_GYROFFS_X: {
        Calibration: '1',
        Description: 'Gyro sensor offsets of X axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro offsets of X axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro offsets of X axis\n    // @Description: Gyro sensor offsets of X axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_GYROFFS_Y: {
        Calibration: '1',
        Description: 'Gyro sensor offsets of Y axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro offsets of Y axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro offsets of Y axis\n    // @Description: Gyro sensor offsets of Y axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_GYROFFS_Z: {
        Calibration: '1',
        Description: 'Gyro sensor offsets of Z axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro offsets of Z axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro offsets of Z axis\n    // @Description: Gyro sensor offsets of Z axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_GYRO_FILTER: {
        Description:
            'Filter cutoff frequency for gyroscopes. This can be set to a lower value to try to cope with very high vibration levels in aircraft. A value of zero means no filtering (not recommended!)',
        DisplayName: 'Gyro filter cutoff frequency',
        Range: {
            high: '256',
            low: '0',
        },
        Units: 'Hz',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro filter cutoff frequency\n    // @Description: Filter cutoff frequency for gyroscopes. This can be set to a lower value to try to cope with very high vibration levels in aircraft. A value of zero means no filtering (not recommended!)\n    // @Units: Hz\n    // @Range: 0 256\n    // @User: Advanced',
    },
    INS_GYRO_RATE: {
        Description:
            'Gyro rate for IMUs with fast sampling enabled. The gyro rate is the sample rate at which the IMU filters operate and needs to be at least double the maximum filter frequency. If the sensor does not support the selected rate the next highest supported rate will be used. For IMUs which do not support fast sampling this setting is ignored and the default gyro rate of 1Khz is used.',
        DisplayName: 'Gyro rate for IMUs with Fast Sampling enabled',
        RebootRequired: 'True',
        User: 'Advanced',
        Values: {
            '0': '1kHz',
            '1': '2kHz',
            '2': '4kHz',
            '3': '8kHz',
        },
        __field_text:
            '\n    // @DisplayName: Gyro rate for IMUs with Fast Sampling enabled\n    // @Description: Gyro rate for IMUs with fast sampling enabled. The gyro rate is the sample rate at which the IMU filters operate and needs to be at least double the maximum filter frequency. If the sensor does not support the selected rate the next highest supported rate will be used. For IMUs which do not support fast sampling this setting is ignored and the default gyro rate of 1Khz is used.\n    // @User: Advanced\n    // @Values: 0:1kHz,1:2kHz,2:4kHz,3:8kHz\n    // @RebootRequired: True',
    },
    INS_GYR_CAL: {
        Description: 'Conrols when automatic gyro calibration is performed',
        DisplayName: 'Gyro Calibration scheme',
        User: 'Advanced',
        Values: {
            '0': 'Never',
            '1': 'Start-up only',
        },
        __field_text:
            '\n    // @DisplayName: Gyro Calibration scheme\n    // @Description: Conrols when automatic gyro calibration is performed\n    // @Values: 0:Never, 1:Start-up only\n    // @User: Advanced',
    },
    INS_GYR_ID: {
        Description: 'Gyro sensor ID, taking into account its type, bus and instance',
        DisplayName: 'Gyro ID',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro ID\n    // @Description: Gyro sensor ID, taking into account its type, bus and instance\n    // @ReadOnly: True\n    // @User: Advanced',
    },
    INS_POS1_X: {
        Description:
            'X position of the first IMU Accelerometer in body frame. Positive X is forward of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer X position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer X position\n    // @Description: X position of the first IMU Accelerometer in body frame. Positive X is forward of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS_POS1_Y: {
        Description:
            'Y position of the first IMU accelerometer in body frame. Positive Y is to the right of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer Y position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer Y position\n    // @Description: Y position of the first IMU accelerometer in body frame. Positive Y is to the right of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS_POS1_Z: {
        Description:
            'Z position of the first IMU accelerometer in body frame. Positive Z is down from the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer Z position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer Z position\n    // @Description: Z position of the first IMU accelerometer in body frame. Positive Z is down from the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS_POS2_X: {
        Description:
            'X position of the second IMU accelerometer in body frame. Positive X is forward of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer X position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer X position\n    // @Description: X position of the second IMU accelerometer in body frame. Positive X is forward of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS_POS2_Y: {
        Description:
            'Y position of the second IMU accelerometer in body frame. Positive Y is to the right of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer Y position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer Y position\n    // @Description: Y position of the second IMU accelerometer in body frame. Positive Y is to the right of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS_POS2_Z: {
        Description:
            'Z position of the second IMU accelerometer in body frame. Positive Z is down from the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer Z position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer Z position\n    // @Description: Z position of the second IMU accelerometer in body frame. Positive Z is down from the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS_POS3_X: {
        Description:
            'X position of the third IMU accelerometer in body frame. Positive X is forward of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer X position',
        Range: {
            high: '10',
            low: '-10',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer X position\n    // @Description: X position of the third IMU accelerometer in body frame. Positive X is forward of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -10 10\n    // @User: Advanced',
    },
    INS_POS3_Y: {
        Description:
            'Y position of the third IMU accelerometer in body frame. Positive Y is to the right of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer Y position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer Y position\n    // @Description: Y position of the third IMU accelerometer in body frame. Positive Y is to the right of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS_POS3_Z: {
        Description:
            'Z position of the third IMU accelerometer in body frame. Positive Z is down from the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer Z position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer Z position\n    // @Description: Z position of the third IMU accelerometer in body frame. Positive Z is down from the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS_STILL_THRESH: {
        Description:
            'Threshold to tolerate vibration to determine if vehicle is motionless. This depends on the frame type and if there is a constant vibration due to motors before launch or after landing. Total motionless is about 0.05. Suggested values: Planes/rover use 0.1, multirotors use 1, tradHeli uses 5',
        DisplayName: 'Stillness threshold for detecting if we are moving',
        Range: {
            high: '50',
            low: '0.05',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Stillness threshold for detecting if we are moving\n    // @Description: Threshold to tolerate vibration to determine if vehicle is motionless. This depends on the frame type and if there is a constant vibration due to motors before launch or after landing. Total motionless is about 0.05. Suggested values: Planes/rover use 0.1, multirotors use 1, tradHeli uses 5\n    // @Range: 0.05 50\n    // @User: Advanced',
    },
    INS_TCAL_OPTIONS: {
        Bitmask: {
            '0': 'PersistParams',
        },
        Description:
            'This enables optional temperature calibration features. Setting PersistParams will save the accelerometer and temperature calibration parameters in the bootloader sector on the next update of the bootloader.',
        DisplayName: 'Options for temperature calibration',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Options for temperature calibration\n    // @Description: This enables optional temperature calibration features. Setting PersistParams will save the accelerometer and temperature calibration parameters in the bootloader sector on the next update of the bootloader.\n    // @Bitmask: 0:PersistParams\n    // @User: Advanced',
    },
    INS_TRIM_OPTION: {
        Description: 'Specifies how the accel cal routine determines the trims',
        DisplayName: 'Accel cal trim option',
        User: 'Advanced',
        Values: {
            '0': "Don't adjust the trims",
            '1': 'Assume first orientation was level',
            '2': 'Assume ACC_BODYFIX is perfectly aligned to the vehicle',
        },
        __field_text:
            "\n    // @DisplayName: Accel cal trim option\n    // @Description: Specifies how the accel cal routine determines the trims\n    // @User: Advanced\n    // @Values: 0:Don't adjust the trims,1:Assume first orientation was level,2:Assume ACC_BODYFIX is perfectly aligned to the vehicle",
    },
    INS_USE: {
        Description: 'Use first IMU for attitude, velocity and position estimates',
        DisplayName: 'Use first IMU for attitude, velocity and position estimates',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Use first IMU for attitude, velocity and position estimates\n    // @Description: Use first IMU for attitude, velocity and position estimates\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    INS_USE2: {
        Description: 'Use second IMU for attitude, velocity and position estimates',
        DisplayName: 'Use second IMU for attitude, velocity and position estimates',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Use second IMU for attitude, velocity and position estimates\n    // @Description: Use second IMU for attitude, velocity and position estimates\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    INS_USE3: {
        Description: 'Use third IMU for attitude, velocity and position estimates',
        DisplayName: 'Use third IMU for attitude, velocity and position estimates',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Use third IMU for attitude, velocity and position estimates\n    // @Description: Use third IMU for attitude, velocity and position estimates\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },

    INS_HNTC2_ATT: {
        Description:
            'Harmonic Notch Filter attenuation in dB. Values greater than 40dB will typically produce a hard notch rather than a modest attenuation of motor noise.',
        DisplayName: 'Harmonic Notch Filter attenuation',
        Range: {
            high: '50',
            low: '5',
        },
        Units: 'dB',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter attenuation\n    // @Description: Harmonic Notch Filter attenuation in dB. Values greater than 40dB will typically produce a hard notch rather than a modest attenuation of motor noise.\n    // @Range: 5 50\n    // @Units: dB\n    // @User: Advanced',
    },
    INS_HNTC2_BW: {
        Description:
            'Harmonic Notch Filter bandwidth in Hz. This is typically set to half the base frequency. The ratio of base frequency to bandwidth determines the notch quality factor and is fixed across harmonics.',
        DisplayName: 'Harmonic Notch Filter bandwidth',
        Range: {
            high: '250',
            low: '5',
        },
        Units: 'Hz',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter bandwidth\n    // @Description: Harmonic Notch Filter bandwidth in Hz. This is typically set to half the base frequency. The ratio of base frequency to bandwidth determines the notch quality factor and is fixed across harmonics.\n    // @Range: 5 250\n    // @Units: Hz\n    // @User: Advanced',
    },
    INS_HNTC2_ENABLE: {
        Description: 'Harmonic Notch Filter enable',
        DisplayName: 'Harmonic Notch Filter enable',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter enable\n    // @Description: Harmonic Notch Filter enable\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    INS_HNTC2_FM_RAT: {
        Description:
            'The minimum ratio below the configured frequency to take throttle based notch filters when flying at a throttle level below the reference throttle. Note that lower frequency notch filters will have more phase lag. If you want throttle based notch filtering to be effective at a throttle up to 30% below the configured notch frequency then set this parameter to 0.7. The default of 1.0 means the notch will not go below the frequency in the FREQ parameter.',
        DisplayName: 'Throttle notch min freqency ratio',
        Range: {
            high: '1.0',
            low: '0.1',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Throttle notch min freqency ratio\n    // @Description: The minimum ratio below the configured frequency to take throttle based notch filters when flying at a throttle level below the reference throttle. Note that lower frequency notch filters will have more phase lag. If you want throttle based notch filtering to be effective at a throttle up to 30% below the configured notch frequency then set this parameter to 0.7. The default of 1.0 means the notch will not go below the frequency in the FREQ parameter.\n    // @Range: 0.1 1.0\n    // @User: Advanced',
    },
    INS_HNTC2_FREQ: {
        Description:
            'Harmonic Notch Filter base center frequency in Hz. This is the center frequency for static notches, the center frequency for Throttle based notches at the reference thrust value, and the minimum limit of center frequency variation for all other notch types. This should always be set lower than half the backend gyro rate (which is typically 1Khz). ',
        DisplayName: 'Harmonic Notch Filter base frequency',
        Range: {
            high: '495',
            low: '10',
        },
        Units: 'Hz',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter base frequency\n    // @Description: Harmonic Notch Filter base center frequency in Hz. This is the center frequency for static notches, the center frequency for Throttle based notches at the reference thrust value, and the minimum limit of center frequency variation for all other notch types. This should always be set lower than half the backend gyro rate (which is typically 1Khz). \n    // @Range: 10 495\n    // @Units: Hz\n    // @User: Advanced',
    },
    INS_HNTC2_HMNCS: {
        Bitmask: {
            '0': '1st harmonic',
            '1': '2nd harmonic',
            '2': '3rd harmonic',
            '3': '4th harmonic',
            '4': '5th harmonic',
            '5': '6th harmonic',
            '6': '7th harmonic',
            '7': '8th harmonic',
        },
        Description:
            'Bitmask of harmonic frequencies to apply Harmonic Notch Filter to. This option takes effect on the next reboot. A value of 0 disables this filter. The first harmonic refers to the base frequency.',
        DisplayName: 'Harmonic Notch Filter harmonics',
        RebootRequired: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter harmonics\n    // @Description: Bitmask of harmonic frequencies to apply Harmonic Notch Filter to. This option takes effect on the next reboot. A value of 0 disables this filter. The first harmonic refers to the base frequency.\n    // @Bitmask: 0:1st harmonic,1:2nd harmonic,2:3rd harmonic,3:4th hamronic,4:5th harmonic,5:6th harmonic,6:7th harmonic,7:8th harmonic\n    // @User: Advanced\n    // @RebootRequired: True',
    },
    INS_HNTC2_MODE: {
        Description:
            'Harmonic Notch Filter dynamic frequency tracking mode. Dynamic updates can be throttle, RPM sensor, ESC telemetry or dynamic FFT based. Throttle-based updates should only be used with multicopters.',
        DisplayName: 'Harmonic Notch Filter dynamic frequency tracking mode',
        Range: {
            high: '5',
            low: '0',
        },
        User: 'Advanced',
        Values: {
            '0': 'Fixed',
            '1': 'Throttle',
            '2': 'RPM Sensor',
            '3': 'ESC Telemetry',
            '4': 'Dynamic FFT',
            '5': 'Second RPM Sensor',
        },
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter dynamic frequency tracking mode\n    // @Description: Harmonic Notch Filter dynamic frequency tracking mode. Dynamic updates can be throttle, RPM sensor, ESC telemetry or dynamic FFT based. Throttle-based updates should only be used with multicopters.\n    // @Range: 0 5\n    // @Values: 0:Fixed,1:Throttle,2:RPM Sensor,3:ESC Telemetry,4:Dynamic FFT,5:Second RPM Sensor\n    // @User: Advanced',
    },
    INS_HNTC2_OPTS: {
        Bitmask: {
            '0': 'Double notch',
            '1': 'Multi-Source',
            '2': 'Update at loop rate',
            '3': 'EnableOnAllIMUs',
            '4': 'Triple notch',
        },
        Description:
            'Harmonic Notch Filter options. Triple and double-notches can provide deeper attenuation across a wider bandwidth with reduced latency than single notches and are suitable for larger aircraft. Multi-Source attaches a harmonic notch to each detected noise frequency instead of simply being multiples of the base frequency, in the case of FFT it will attach notches to each of three detected noise peaks, in the case of ESC it will attach notches to each of four motor RPM values. Loop rate update changes the notch center frequency at the scheduler loop rate rather than at the default of 200Hz. If both double and triple notches are specified only double notches will take effect.',
        DisplayName: 'Harmonic Notch Filter options',
        RebootRequired: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter options\n    // @Description: Harmonic Notch Filter options. Triple and double-notches can provide deeper attenuation across a wider bandwidth with reduced latency than single notches and are suitable for larger aircraft. Multi-Source attaches a harmonic notch to each detected noise frequency instead of simply being multiples of the base frequency, in the case of FFT it will attach notches to each of three detected noise peaks, in the case of ESC it will attach notches to each of four motor RPM values. Loop rate update changes the notch center frequency at the scheduler loop rate rather than at the default of 200Hz. If both double and triple notches are specified only double notches will take effect.\n    // @Bitmask: 0:Double notch,1:Multi-Source,2:Update at loop rate,3:EnableOnAllIMUs,4:Triple notch\n    // @User: Advanced\n    // @RebootRequired: True',
    },
    INS_HNTC2_REF: {
        Description:
            'A reference value of zero disables dynamic updates on the Harmonic Notch Filter and a positive value enables dynamic updates on the Harmonic Notch Filter.  For throttle-based scaling, this parameter is the reference value associated with the specified frequency to facilitate frequency scaling of the Harmonic Notch Filter. For RPM and ESC telemetry based tracking, this parameter is set to 1 to enable the Harmonic Notch Filter using the RPM sensor or ESC telemetry set to measure rotor speed.  The sensor data is converted to Hz automatically for use in the Harmonic Notch Filter.  This reference value may also be used to scale the sensor data, if required.  For example, rpm sensor data is required to measure heli motor RPM. Therefore the reference value can be used to scale the RPM sensor to the rotor RPM.',
        DisplayName: 'Harmonic Notch Filter reference value',
        Range: {
            high: '1.0',
            low: '0.0',
        },
        RebootRequired: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter reference value\n    // @Description: A reference value of zero disables dynamic updates on the Harmonic Notch Filter and a positive value enables dynamic updates on the Harmonic Notch Filter.  For throttle-based scaling, this parameter is the reference value associated with the specified frequency to facilitate frequency scaling of the Harmonic Notch Filter. For RPM and ESC telemetry based tracking, this parameter is set to 1 to enable the Harmonic Notch Filter using the RPM sensor or ESC telemetry set to measure rotor speed.  The sensor data is converted to Hz automatically for use in the Harmonic Notch Filter.  This reference value may also be used to scale the sensor data, if required.  For example, rpm sensor data is required to measure heli motor RPM. Therefore the reference value can be used to scale the RPM sensor to the rotor RPM.\n    // @User: Advanced\n    // @Range: 0.0 1.0\n    // @RebootRequired: True',
    },
    INS_HNTCH_ATT: {
        Description:
            'Harmonic Notch Filter attenuation in dB. Values greater than 40dB will typically produce a hard notch rather than a modest attenuation of motor noise.',
        DisplayName: 'Harmonic Notch Filter attenuation',
        Range: {
            high: '50',
            low: '5',
        },
        Units: 'dB',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter attenuation\n    // @Description: Harmonic Notch Filter attenuation in dB. Values greater than 40dB will typically produce a hard notch rather than a modest attenuation of motor noise.\n    // @Range: 5 50\n    // @Units: dB\n    // @User: Advanced',
    },
    INS_HNTCH_BW: {
        Description:
            'Harmonic Notch Filter bandwidth in Hz. This is typically set to half the base frequency. The ratio of base frequency to bandwidth determines the notch quality factor and is fixed across harmonics.',
        DisplayName: 'Harmonic Notch Filter bandwidth',
        Range: {
            high: '250',
            low: '5',
        },
        Units: 'Hz',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter bandwidth\n    // @Description: Harmonic Notch Filter bandwidth in Hz. This is typically set to half the base frequency. The ratio of base frequency to bandwidth determines the notch quality factor and is fixed across harmonics.\n    // @Range: 5 250\n    // @Units: Hz\n    // @User: Advanced',
    },
    INS_HNTCH_ENABLE: {
        Description: 'Harmonic Notch Filter enable',
        DisplayName: 'Harmonic Notch Filter enable',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter enable\n    // @Description: Harmonic Notch Filter enable\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    INS_HNTCH_FM_RAT: {
        Description:
            'The minimum ratio below the configured frequency to take throttle based notch filters when flying at a throttle level below the reference throttle. Note that lower frequency notch filters will have more phase lag. If you want throttle based notch filtering to be effective at a throttle up to 30% below the configured notch frequency then set this parameter to 0.7. The default of 1.0 means the notch will not go below the frequency in the FREQ parameter.',
        DisplayName: 'Throttle notch min freqency ratio',
        Range: {
            high: '1.0',
            low: '0.1',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Throttle notch min freqency ratio\n    // @Description: The minimum ratio below the configured frequency to take throttle based notch filters when flying at a throttle level below the reference throttle. Note that lower frequency notch filters will have more phase lag. If you want throttle based notch filtering to be effective at a throttle up to 30% below the configured notch frequency then set this parameter to 0.7. The default of 1.0 means the notch will not go below the frequency in the FREQ parameter.\n    // @Range: 0.1 1.0\n    // @User: Advanced',
    },
    INS_HNTCH_FREQ: {
        Description:
            'Harmonic Notch Filter base center frequency in Hz. This is the center frequency for static notches, the center frequency for Throttle based notches at the reference thrust value, and the minimum limit of center frequency variation for all other notch types. This should always be set lower than half the backend gyro rate (which is typically 1Khz). ',
        DisplayName: 'Harmonic Notch Filter base frequency',
        Range: {
            high: '495',
            low: '10',
        },
        Units: 'Hz',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter base frequency\n    // @Description: Harmonic Notch Filter base center frequency in Hz. This is the center frequency for static notches, the center frequency for Throttle based notches at the reference thrust value, and the minimum limit of center frequency variation for all other notch types. This should always be set lower than half the backend gyro rate (which is typically 1Khz). \n    // @Range: 10 495\n    // @Units: Hz\n    // @User: Advanced',
    },
    INS_HNTCH_HMNCS: {
        Bitmask: {
            '0': '1st harmonic',
            '1': '2nd harmonic',
            '2': '3rd harmonic',
            '3': '4th hamronic',
            '4': '5th harmonic',
            '5': '6th harmonic',
            '6': '7th harmonic',
            '7': '8th harmonic',
        },
        Description:
            'Bitmask of harmonic frequencies to apply Harmonic Notch Filter to. This option takes effect on the next reboot. A value of 0 disables this filter. The first harmonic refers to the base frequency.',
        DisplayName: 'Harmonic Notch Filter harmonics',
        RebootRequired: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter harmonics\n    // @Description: Bitmask of harmonic frequencies to apply Harmonic Notch Filter to. This option takes effect on the next reboot. A value of 0 disables this filter. The first harmonic refers to the base frequency.\n    // @Bitmask: 0:1st harmonic,1:2nd harmonic,2:3rd harmonic,3:4th hamronic,4:5th harmonic,5:6th harmonic,6:7th harmonic,7:8th harmonic\n    // @User: Advanced\n    // @RebootRequired: True',
    },
    INS_HNTCH_MODE: {
        Description:
            'Harmonic Notch Filter dynamic frequency tracking mode. Dynamic updates can be throttle, RPM sensor, ESC telemetry or dynamic FFT based. Throttle-based updates should only be used with multicopters.',
        DisplayName: 'Harmonic Notch Filter dynamic frequency tracking mode',
        Range: {
            high: '5',
            low: '0',
        },
        User: 'Advanced',
        Values: {
            '0': 'Fixed',
            '1': 'Throttle',
            '2': 'RPM Sensor',
            '3': 'ESC Telemetry',
            '4': 'Dynamic FFT',
            '5': 'Second RPM Sensor',
        },
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter dynamic frequency tracking mode\n    // @Description: Harmonic Notch Filter dynamic frequency tracking mode. Dynamic updates can be throttle, RPM sensor, ESC telemetry or dynamic FFT based. Throttle-based updates should only be used with multicopters.\n    // @Range: 0 5\n    // @Values: 0:Fixed,1:Throttle,2:RPM Sensor,3:ESC Telemetry,4:Dynamic FFT,5:Second RPM Sensor\n    // @User: Advanced',
    },
    INS_HNTCH_OPTS: {
        Bitmask: {
            '0': 'Double notch',
            '1': 'Multi-Source',
            '2': 'Update at loop rate',
            '3': 'EnableOnAllIMUs',
            '4': 'Triple notch',
        },
        Description:
            'Harmonic Notch Filter options. Triple and double-notches can provide deeper attenuation across a wider bandwidth with reduced latency than single notches and are suitable for larger aircraft. Multi-Source attaches a harmonic notch to each detected noise frequency instead of simply being multiples of the base frequency, in the case of FFT it will attach notches to each of three detected noise peaks, in the case of ESC it will attach notches to each of four motor RPM values. Loop rate update changes the notch center frequency at the scheduler loop rate rather than at the default of 200Hz. If both double and triple notches are specified only double notches will take effect.',
        DisplayName: 'Harmonic Notch Filter options',
        RebootRequired: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter options\n    // @Description: Harmonic Notch Filter options. Triple and double-notches can provide deeper attenuation across a wider bandwidth with reduced latency than single notches and are suitable for larger aircraft. Multi-Source attaches a harmonic notch to each detected noise frequency instead of simply being multiples of the base frequency, in the case of FFT it will attach notches to each of three detected noise peaks, in the case of ESC it will attach notches to each of four motor RPM values. Loop rate update changes the notch center frequency at the scheduler loop rate rather than at the default of 200Hz. If both double and triple notches are specified only double notches will take effect.\n    // @Bitmask: 0:Double notch,1:Multi-Source,2:Update at loop rate,3:EnableOnAllIMUs,4:Triple notch\n    // @User: Advanced\n    // @RebootRequired: True',
    },
    INS_HNTCH_REF: {
        Description:
            'A reference value of zero disables dynamic updates on the Harmonic Notch Filter and a positive value enables dynamic updates on the Harmonic Notch Filter.  For throttle-based scaling, this parameter is the reference value associated with the specified frequency to facilitate frequency scaling of the Harmonic Notch Filter. For RPM and ESC telemetry based tracking, this parameter is set to 1 to enable the Harmonic Notch Filter using the RPM sensor or ESC telemetry set to measure rotor speed.  The sensor data is converted to Hz automatically for use in the Harmonic Notch Filter.  This reference value may also be used to scale the sensor data, if required.  For example, rpm sensor data is required to measure heli motor RPM. Therefore the reference value can be used to scale the RPM sensor to the rotor RPM.',
        DisplayName: 'Harmonic Notch Filter reference value',
        Range: {
            high: '1.0',
            low: '0.0',
        },
        RebootRequired: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Harmonic Notch Filter reference value\n    // @Description: A reference value of zero disables dynamic updates on the Harmonic Notch Filter and a positive value enables dynamic updates on the Harmonic Notch Filter.  For throttle-based scaling, this parameter is the reference value associated with the specified frequency to facilitate frequency scaling of the Harmonic Notch Filter. For RPM and ESC telemetry based tracking, this parameter is set to 1 to enable the Harmonic Notch Filter using the RPM sensor or ESC telemetry set to measure rotor speed.  The sensor data is converted to Hz automatically for use in the Harmonic Notch Filter.  This reference value may also be used to scale the sensor data, if required.  For example, rpm sensor data is required to measure heli motor RPM. Therefore the reference value can be used to scale the RPM sensor to the rotor RPM.\n    // @User: Advanced\n    // @Range: 0.0 1.0\n    // @RebootRequired: True',
    },
    INS_LOG_BAT_CNT: {
        Description:
            'Number of samples to take when logging streams of IMU sensor readings.  Will be rounded down to a multiple of 32. This option takes effect on the next reboot.',
        DisplayName: 'sample count per batch',
        Increment: '32',
        RebootRequired: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: sample count per batch\n    // @Description: Number of samples to take when logging streams of IMU sensor readings.  Will be rounded down to a multiple of 32. This option takes effect on the next reboot.\n    // @User: Advanced\n    // @Increment: 32\n    // @RebootRequired: True',
    },
    INS_LOG_BAT_LGCT: {
        Description: 'Number of samples to push to count every INS_LOG_BAT_LGIN',
        DisplayName: 'logging count',
        Increment: '1',
        __field_text:
            '\n    // @DisplayName: logging count\n    // @Description: Number of samples to push to count every @PREFIX@BAT_LGIN\n    // @Increment: 1',
    },
    INS_LOG_BAT_LGIN: {
        Description: 'Interval between pushing samples to the AP_Logger log',
        DisplayName: 'logging interval',
        Increment: '10',
        Units: 'ms',
        __field_text:
            '\n    // @DisplayName: logging interval\n    // @Description: Interval between pushing samples to the AP_Logger log\n    // @Units: ms\n    // @Increment: 10',
    },
    INS_LOG_BAT_MASK: {
        Bitmask: {
            '0': 'IMU1',
            '1': 'IMU2',
            '2': 'IMU3',
        },
        Description:
            'Bitmap of which IMUs to log batch data for. This option takes effect on the next reboot.',
        DisplayName: 'Sensor Bitmask',
        RebootRequired: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Sensor Bitmask\n    // @Description: Bitmap of which IMUs to log batch data for. This option takes effect on the next reboot.\n    // @User: Advanced\n    // @Bitmask: 0:IMU1,1:IMU2,2:IMU3\n    // @RebootRequired: True',
    },
    INS_LOG_BAT_OPT: {
        Bitmask: {
            '0': 'Sensor-Rate Logging (sample at full sensor rate seen by AP)',
            '1': 'Sample post-filtering',
            '2': 'Sample pre- and post-filter',
        },
        Description: 'Options for the BatchSampler.',
        DisplayName: 'Batch Logging Options Mask',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Batch Logging Options Mask\n    // @Description: Options for the BatchSampler.\n    // @Bitmask: 0:Sensor-Rate Logging (sample at full sensor rate seen by AP), 1: Sample post-filtering, 2: Sample pre- and post-filter\n    // @User: Advanced',
    },
    INS_TCAL1_ACC1_X: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient X axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_ACC1_Y: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient Y axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_ACC1_Z: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient Z axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_ACC2_X: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient X axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_ACC2_Y: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient Y axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_ACC2_Z: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient Z axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_ACC3_X: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient X axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_ACC3_Y: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient Y axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_ACC3_Z: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient Z axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_ENABLE: {
        Description:
            'Enable the use of temperature calibration parameters for this IMU. For automatic learning set to 2 and also set the INS_TCALn_TMAX to the target temperature, then reboot',
        DisplayName: 'Enable temperature calibration',
        RebootRequired: 'True',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
            '2': 'LearnCalibration',
        },
        __field_text:
            '\n    // @DisplayName: Enable temperature calibration\n    // @Description: Enable the use of temperature calibration parameters for this IMU. For automatic learning set to 2 and also set the INS_TCALn_TMAX to the target temperature, then reboot\n    // @Values: 0:Disabled,1:Enabled,2:LearnCalibration\n    // @User: Advanced\n    // @RebootRequired: True',
    },
    INS_TCAL1_GYR1_X: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient X axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_GYR1_Y: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient Y axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_GYR1_Z: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient Z axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_GYR2_X: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient X axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_GYR2_Y: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient Y axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_GYR2_Z: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient Z axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_GYR3_X: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient X axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_GYR3_Y: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient Y axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_GYR3_Z: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient Z axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_TMAX: {
        Calibration: '1',
        Description:
            'The maximum temperature that the calibration is valid for. This must be at least 10 degrees above TMIN for calibration',
        DisplayName: 'Temperature calibration max',
        Range: {
            high: '80',
            low: '-70',
        },
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Temperature calibration max\n    // @Description: The maximum temperature that the calibration is valid for. This must be at least 10 degrees above TMIN for calibration\n    // @Range: -70 80\n    // @Units: degC\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL1_TMIN: {
        Calibration: '1',
        Description: 'The minimum temperature that the calibration is valid for',
        DisplayName: 'Temperature calibration min',
        Range: {
            high: '80',
            low: '-70',
        },
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Temperature calibration min\n    // @Description: The minimum temperature that the calibration is valid for\n    // @Range: -70 80\n    // @Units: degC\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_ACC1_X: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient X axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_ACC1_Y: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient Y axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_ACC1_Z: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient Z axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_ACC2_X: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient X axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_ACC2_Y: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient Y axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_ACC2_Z: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient Z axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_ACC3_X: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient X axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_ACC3_Y: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient Y axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_ACC3_Z: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient Z axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_ENABLE: {
        Description:
            'Enable the use of temperature calibration parameters for this IMU. For automatic learning set to 2 and also set the INS_TCALn_TMAX to the target temperature, then reboot',
        DisplayName: 'Enable temperature calibration',
        RebootRequired: 'True',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
            '2': 'LearnCalibration',
        },
        __field_text:
            '\n    // @DisplayName: Enable temperature calibration\n    // @Description: Enable the use of temperature calibration parameters for this IMU. For automatic learning set to 2 and also set the INS_TCALn_TMAX to the target temperature, then reboot\n    // @Values: 0:Disabled,1:Enabled,2:LearnCalibration\n    // @User: Advanced\n    // @RebootRequired: True',
    },
    INS_TCAL2_GYR1_X: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient X axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_GYR1_Y: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient Y axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_GYR1_Z: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient Z axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_GYR2_X: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient X axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_GYR2_Y: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient Y axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_GYR2_Z: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient Z axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_GYR3_X: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient X axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_GYR3_Y: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient Y axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_GYR3_Z: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient Z axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_TMAX: {
        Calibration: '1',
        Description:
            'The maximum temperature that the calibration is valid for. This must be at least 10 degrees above TMIN for calibration',
        DisplayName: 'Temperature calibration max',
        Range: {
            high: '80',
            low: '-70',
        },
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Temperature calibration max\n    // @Description: The maximum temperature that the calibration is valid for. This must be at least 10 degrees above TMIN for calibration\n    // @Range: -70 80\n    // @Units: degC\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL2_TMIN: {
        Calibration: '1',
        Description: 'The minimum temperature that the calibration is valid for',
        DisplayName: 'Temperature calibration min',
        Range: {
            high: '80',
            low: '-70',
        },
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Temperature calibration min\n    // @Description: The minimum temperature that the calibration is valid for\n    // @Range: -70 80\n    // @Units: degC\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_ACC1_X: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient X axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_ACC1_Y: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient Y axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_ACC1_Z: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient Z axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_ACC2_X: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient X axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_ACC2_Y: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient Y axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_ACC2_Z: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient Z axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_ACC3_X: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient X axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_ACC3_Y: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient Y axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_ACC3_Z: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient Z axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_ENABLE: {
        Description:
            'Enable the use of temperature calibration parameters for this IMU. For automatic learning set to 2 and also set the INS_TCALn_TMAX to the target temperature, then reboot',
        DisplayName: 'Enable temperature calibration',
        RebootRequired: 'True',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
            '2': 'LearnCalibration',
        },
        __field_text:
            '\n    // @DisplayName: Enable temperature calibration\n    // @Description: Enable the use of temperature calibration parameters for this IMU. For automatic learning set to 2 and also set the INS_TCALn_TMAX to the target temperature, then reboot\n    // @Values: 0:Disabled,1:Enabled,2:LearnCalibration\n    // @User: Advanced\n    // @RebootRequired: True',
    },
    INS_TCAL3_GYR1_X: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient X axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_GYR1_Y: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient Y axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_GYR1_Z: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient Z axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_GYR2_X: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient X axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_GYR2_Y: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient Y axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_GYR2_Z: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient Z axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_GYR3_X: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient X axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_GYR3_Y: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient Y axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_GYR3_Z: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient Z axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_TMAX: {
        Calibration: '1',
        Description:
            'The maximum temperature that the calibration is valid for. This must be at least 10 degrees above TMIN for calibration',
        DisplayName: 'Temperature calibration max',
        Range: {
            high: '80',
            low: '-70',
        },
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Temperature calibration max\n    // @Description: The maximum temperature that the calibration is valid for. This must be at least 10 degrees above TMIN for calibration\n    // @Range: -70 80\n    // @Units: degC\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS_TCAL3_TMIN: {
        Calibration: '1',
        Description: 'The minimum temperature that the calibration is valid for',
        DisplayName: 'Temperature calibration min',
        Range: {
            high: '80',
            low: '-70',
        },
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Temperature calibration min\n    // @Description: The minimum temperature that the calibration is valid for\n    // @Range: -70 80\n    // @Units: degC\n    // @User: Advanced\n    // @Calibration: 1',
    },
};

export const INS4 = {
    INS4_ACCOFFS_X: {
        Calibration: '1',
        Description:
            'Accelerometer offsets of X axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer offsets of X axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer offsets of X axis\n    // @Description: Accelerometer offsets of X axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_ACCOFFS_Y: {
        Calibration: '1',
        Description:
            'Accelerometer offsets of Y axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer offsets of Y axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer offsets of Y axis\n    // @Description: Accelerometer offsets of Y axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_ACCOFFS_Z: {
        Calibration: '1',
        Description:
            'Accelerometer offsets of Z axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer offsets of Z axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer offsets of Z axis\n    // @Description: Accelerometer offsets of Z axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_ACCSCAL_X: {
        Calibration: '1',
        Description: 'Accelerometer scaling of X axis.  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer scaling of X axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer scaling of X axis\n    // @Description: Accelerometer scaling of X axis.  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_ACCSCAL_Y: {
        Calibration: '1',
        Description: 'Accelerometer scaling of Y axis  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer scaling of Y axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer scaling of Y axis\n    // @Description: Accelerometer scaling of Y axis  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_ACCSCAL_Z: {
        Calibration: '1',
        Description: 'Accelerometer scaling of Z axis  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer scaling of Z axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer scaling of Z axis\n    // @Description: Accelerometer scaling of Z axis  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_ACC_CALTEMP: {
        Calibration: '1',
        Description: 'Temperature that the accelerometer was calibrated at',
        DisplayName: 'Calibration temperature for accelerometer',
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Calibration temperature for accelerometer\n    // @Description: Temperature that the accelerometer was calibrated at\n    // @User: Advanced\n    // @Units: degC\n    // @Calibration: 1',
    },
    INS4_ACC_ID: {
        Description: 'Accelerometer sensor ID, taking into account its type, bus and instance',
        DisplayName: 'Accelerometer ID',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer ID\n    // @Description: Accelerometer sensor ID, taking into account its type, bus and instance\n    // @ReadOnly: True\n    // @User: Advanced',
    },
    INS4_GYROFFS_X: {
        Calibration: '1',
        Description: 'Gyro sensor offsets of X axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro offsets of X axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro offsets of X axis\n    // @Description: Gyro sensor offsets of X axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_GYROFFS_Y: {
        Calibration: '1',
        Description: 'Gyro sensor offsets of Y axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro offsets of Y axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro offsets of Y axis\n    // @Description: Gyro sensor offsets of Y axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_GYROFFS_Z: {
        Calibration: '1',
        Description: 'Gyro sensor offsets of Z axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro offsets of Z axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro offsets of Z axis\n    // @Description: Gyro sensor offsets of Z axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_GYR_CALTEMP: {
        Calibration: '1',
        Description: 'Temperature that the gyroscope was calibrated at',
        DisplayName: 'Calibration temperature for gyroscope',
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Calibration temperature for gyroscope\n    // @Description: Temperature that the gyroscope was calibrated at\n    // @User: Advanced\n    // @Units: degC\n    // @Calibration: 1',
    },
    INS4_GYR_ID: {
        Description: 'Gyro sensor ID, taking into account its type, bus and instance',
        DisplayName: 'Gyro ID',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro ID\n    // @Description: Gyro sensor ID, taking into account its type, bus and instance\n    // @ReadOnly: True\n    // @User: Advanced',
    },
    INS4_POS_X: {
        Description:
            'X position of the first IMU Accelerometer in body frame. Positive X is forward of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer X position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer X position\n    // @Description: X position of the first IMU Accelerometer in body frame. Positive X is forward of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS4_POS_Y: {
        Description:
            'Y position of the first IMU accelerometer in body frame. Positive Y is to the right of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer Y position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer Y position\n    // @Description: Y position of the first IMU accelerometer in body frame. Positive Y is to the right of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS4_POS_Z: {
        Description:
            'Z position of the first IMU accelerometer in body frame. Positive Z is down from the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer Z position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer Z position\n    // @Description: Z position of the first IMU accelerometer in body frame. Positive Z is down from the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS4_USE: {
        Description: 'Use first IMU for attitude, velocity and position estimates',
        DisplayName: 'Use first IMU for attitude, velocity and position estimates',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Use first IMU for attitude, velocity and position estimates\n    // @Description: Use first IMU for attitude, velocity and position estimates\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    INS4_TCAL_ACC1_X: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient X axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_ACC1_Y: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient Y axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_ACC1_Z: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient Z axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_ACC2_X: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient X axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_ACC2_Y: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient Y axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_ACC2_Z: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient Z axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_ACC3_X: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient X axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_ACC3_Y: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient Y axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_ACC3_Z: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient Z axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_ENABLE: {
        Description:
            'Enable the use of temperature calibration parameters for this IMU. For automatic learning set to 2 and also set the INS_TCALn_TMAX to the target temperature, then reboot',
        DisplayName: 'Enable temperature calibration',
        RebootRequired: 'True',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
            '2': 'LearnCalibration',
        },
        __field_text:
            '\n    // @DisplayName: Enable temperature calibration\n    // @Description: Enable the use of temperature calibration parameters for this IMU. For automatic learning set to 2 and also set the INS_TCALn_TMAX to the target temperature, then reboot\n    // @Values: 0:Disabled,1:Enabled,2:LearnCalibration\n    // @User: Advanced\n    // @RebootRequired: True',
    },
    INS4_TCAL_GYR1_X: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient X axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_GYR1_Y: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient Y axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_GYR1_Z: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient Z axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_GYR2_X: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient X axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_GYR2_Y: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient Y axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_GYR2_Z: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient Z axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_GYR3_X: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient X axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_GYR3_Y: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient Y axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_GYR3_Z: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient Z axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_TMAX: {
        Calibration: '1',
        Description:
            'The maximum temperature that the calibration is valid for. This must be at least 10 degrees above TMIN for calibration',
        DisplayName: 'Temperature calibration max',
        Range: {
            high: '80',
            low: '-70',
        },
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Temperature calibration max\n    // @Description: The maximum temperature that the calibration is valid for. This must be at least 10 degrees above TMIN for calibration\n    // @Range: -70 80\n    // @Units: degC\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS4_TCAL_TMIN: {
        Calibration: '1',
        Description: 'The minimum temperature that the calibration is valid for',
        DisplayName: 'Temperature calibration min',
        Range: {
            high: '80',
            low: '-70',
        },
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Temperature calibration min\n    // @Description: The minimum temperature that the calibration is valid for\n    // @Range: -70 80\n    // @Units: degC\n    // @User: Advanced\n    // @Calibration: 1',
    },
};

export const INS5 = {
    INS5_ACCOFFS_X: {
        Calibration: '1',
        Description:
            'Accelerometer offsets of X axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer offsets of X axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer offsets of X axis\n    // @Description: Accelerometer offsets of X axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_ACCOFFS_Y: {
        Calibration: '1',
        Description:
            'Accelerometer offsets of Y axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer offsets of Y axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer offsets of Y axis\n    // @Description: Accelerometer offsets of Y axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_ACCOFFS_Z: {
        Calibration: '1',
        Description:
            'Accelerometer offsets of Z axis. This is setup using the acceleration calibration or level operations',
        DisplayName: 'Accelerometer offsets of Z axis',
        Range: {
            high: '3.5',
            low: '-3.5',
        },
        Units: 'm/s/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer offsets of Z axis\n    // @Description: Accelerometer offsets of Z axis. This is setup using the acceleration calibration or level operations\n    // @Units: m/s/s\n    // @Range: -3.5 3.5\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_ACCSCAL_X: {
        Calibration: '1',
        Description: 'Accelerometer scaling of X axis.  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer scaling of X axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer scaling of X axis\n    // @Description: Accelerometer scaling of X axis.  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_ACCSCAL_Y: {
        Calibration: '1',
        Description: 'Accelerometer scaling of Y axis  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer scaling of Y axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer scaling of Y axis\n    // @Description: Accelerometer scaling of Y axis  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_ACCSCAL_Z: {
        Calibration: '1',
        Description: 'Accelerometer scaling of Z axis  Calculated during acceleration calibration routine',
        DisplayName: 'Accelerometer scaling of Z axis',
        Range: {
            high: '1.2',
            low: '0.8',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer scaling of Z axis\n    // @Description: Accelerometer scaling of Z axis  Calculated during acceleration calibration routine\n    // @Range: 0.8 1.2\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_ACC_CALTEMP: {
        Calibration: '1',
        Description: 'Temperature that the accelerometer was calibrated at',
        DisplayName: 'Calibration temperature for accelerometer',
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Calibration temperature for accelerometer\n    // @Description: Temperature that the accelerometer was calibrated at\n    // @User: Advanced\n    // @Units: degC\n    // @Calibration: 1',
    },
    INS5_ACC_ID: {
        Description: 'Accelerometer sensor ID, taking into account its type, bus and instance',
        DisplayName: 'Accelerometer ID',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer ID\n    // @Description: Accelerometer sensor ID, taking into account its type, bus and instance\n    // @ReadOnly: True\n    // @User: Advanced',
    },
    INS5_GYROFFS_X: {
        Calibration: '1',
        Description: 'Gyro sensor offsets of X axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro offsets of X axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro offsets of X axis\n    // @Description: Gyro sensor offsets of X axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_GYROFFS_Y: {
        Calibration: '1',
        Description: 'Gyro sensor offsets of Y axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro offsets of Y axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro offsets of Y axis\n    // @Description: Gyro sensor offsets of Y axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_GYROFFS_Z: {
        Calibration: '1',
        Description: 'Gyro sensor offsets of Z axis. This is setup on each boot during gyro calibrations',
        DisplayName: 'Gyro offsets of Z axis',
        Units: 'rad/s',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro offsets of Z axis\n    // @Description: Gyro sensor offsets of Z axis. This is setup on each boot during gyro calibrations\n    // @Units: rad/s\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_GYR_CALTEMP: {
        Calibration: '1',
        Description: 'Temperature that the gyroscope was calibrated at',
        DisplayName: 'Calibration temperature for gyroscope',
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Calibration temperature for gyroscope\n    // @Description: Temperature that the gyroscope was calibrated at\n    // @User: Advanced\n    // @Units: degC\n    // @Calibration: 1',
    },
    INS5_GYR_ID: {
        Description: 'Gyro sensor ID, taking into account its type, bus and instance',
        DisplayName: 'Gyro ID',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyro ID\n    // @Description: Gyro sensor ID, taking into account its type, bus and instance\n    // @ReadOnly: True\n    // @User: Advanced',
    },
    INS5_POS_X: {
        Description:
            'X position of the first IMU Accelerometer in body frame. Positive X is forward of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer X position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer X position\n    // @Description: X position of the first IMU Accelerometer in body frame. Positive X is forward of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS5_POS_Y: {
        Description:
            'Y position of the first IMU accelerometer in body frame. Positive Y is to the right of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer Y position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer Y position\n    // @Description: Y position of the first IMU accelerometer in body frame. Positive Y is to the right of the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS5_POS_Z: {
        Description:
            'Z position of the first IMU accelerometer in body frame. Positive Z is down from the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.',
        DisplayName: 'IMU accelerometer Z position',
        Increment: '0.01',
        Range: {
            high: '5',
            low: '-5',
        },
        Units: 'm',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: IMU accelerometer Z position\n    // @Description: Z position of the first IMU accelerometer in body frame. Positive Z is down from the origin. Attention: The IMU should be located as close to the vehicle c.g. as practical so that the value of this parameter is minimised. Failure to do so can result in noisy navigation velocity measurements due to vibration and IMU gyro noise. If the IMU cannot be moved and velocity noise is a problem, a location closer to the IMU can be used as the body frame origin.\n    // @Units: m\n    // @Range: -5 5\n    // @Increment: 0.01\n    // @User: Advanced',
    },
    INS5_USE: {
        Description: 'Use first IMU for attitude, velocity and position estimates',
        DisplayName: 'Use first IMU for attitude, velocity and position estimates',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Use first IMU for attitude, velocity and position estimates\n    // @Description: Use first IMU for attitude, velocity and position estimates\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    INS5_TCAL_ACC1_X: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient X axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_ACC1_Y: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient Y axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_ACC1_Z: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 1st order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 1st order temperature coefficient Z axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_ACC2_X: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient X axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_ACC2_Y: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient Y axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_ACC2_Z: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 2nd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 2nd order temperature coefficient Z axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_ACC3_X: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient X axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_ACC3_Y: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient Y axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_ACC3_Z: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Accelerometer 3rd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Accelerometer 3rd order temperature coefficient Z axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_ENABLE: {
        Description:
            'Enable the use of temperature calibration parameters for this IMU. For automatic learning set to 2 and also set the INS_TCALn_TMAX to the target temperature, then reboot',
        DisplayName: 'Enable temperature calibration',
        RebootRequired: 'True',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
            '2': 'LearnCalibration',
        },
        __field_text:
            '\n    // @DisplayName: Enable temperature calibration\n    // @Description: Enable the use of temperature calibration parameters for this IMU. For automatic learning set to 2 and also set the INS_TCALn_TMAX to the target temperature, then reboot\n    // @Values: 0:Disabled,1:Enabled,2:LearnCalibration\n    // @User: Advanced\n    // @RebootRequired: True',
    },
    INS5_TCAL_GYR1_X: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient X axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_GYR1_Y: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient Y axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_GYR1_Z: {
        Calibration: '1',
        Description: 'This is the 1st order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 1st order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 1st order temperature coefficient Z axis\n    // @Description: This is the 1st order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_GYR2_X: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient X axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_GYR2_Y: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient Y axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_GYR2_Z: {
        Calibration: '1',
        Description: 'This is the 2nd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 2nd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 2nd order temperature coefficient Z axis\n    // @Description: This is the 2nd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_GYR3_X: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient X axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient X axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_GYR3_Y: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient Y axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient Y axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_GYR3_Z: {
        Calibration: '1',
        Description: 'This is the 3rd order temperature coefficient from a temperature calibration',
        DisplayName: 'Gyroscope 3rd order temperature coefficient Z axis',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Gyroscope 3rd order temperature coefficient Z axis\n    // @Description: This is the 3rd order temperature coefficient from a temperature calibration\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_TMAX: {
        Calibration: '1',
        Description:
            'The maximum temperature that the calibration is valid for. This must be at least 10 degrees above TMIN for calibration',
        DisplayName: 'Temperature calibration max',
        Range: {
            high: '80',
            low: '-70',
        },
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Temperature calibration max\n    // @Description: The maximum temperature that the calibration is valid for. This must be at least 10 degrees above TMIN for calibration\n    // @Range: -70 80\n    // @Units: degC\n    // @User: Advanced\n    // @Calibration: 1',
    },
    INS5_TCAL_TMIN: {
        Calibration: '1',
        Description: 'The minimum temperature that the calibration is valid for',
        DisplayName: 'Temperature calibration min',
        Range: {
            high: '80',
            low: '-70',
        },
        Units: 'degC',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Temperature calibration min\n    // @Description: The minimum temperature that the calibration is valid for\n    // @Range: -70 80\n    // @Units: degC\n    // @User: Advanced\n    // @Calibration: 1',
    },
};

export const SCHED = {
    SCHED_DEBUG: {
        Description:
            'Set to non-zero to enable scheduler debug messages. When set to show "Slips" the scheduler will display a message whenever a scheduled task is delayed due to too much CPU load. When set to ShowOverruns the scheduled will display a message whenever a task takes longer than the limit promised in the task table.',
        DisplayName: 'Scheduler debug level',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '2': 'ShowSlips',
            '3': 'ShowOverruns',
        },
        __field_text:
            '\n    // @DisplayName: Scheduler debug level\n    // @Description: Set to non-zero to enable scheduler debug messages. When set to show "Slips" the scheduler will display a message whenever a scheduled task is delayed due to too much CPU load. When set to ShowOverruns the scheduled will display a message whenever a task takes longer than the limit promised in the task table.\n    // @Values: 0:Disabled,2:ShowSlips,3:ShowOverruns\n    // @User: Advanced',
    },
    SCHED_LOOP_RATE: {
        Description:
            'This controls the rate of the main control loop in Hz. This should only be changed by developers. This only takes effect on restart. Values over 400 are considered highly experimental.',
        DisplayName: 'Scheduling main loop rate',
        RebootRequired: 'True',
        User: 'Advanced',
        Values: {
            '100': '100Hz',
            '200': '200Hz',
            '250': '250Hz',
            '300': '300Hz',
            '400': '400Hz',
            '50': '50Hz',
        },
        __field_text:
            '\n    // @DisplayName: Scheduling main loop rate\n    // @Description: This controls the rate of the main control loop in Hz. This should only be changed by developers. This only takes effect on restart. Values over 400 are considered highly experimental.\n    // @Values: 50:50Hz,100:100Hz,200:200Hz,250:250Hz,300:300Hz,400:400Hz\n    // @RebootRequired: True\n    // @User: Advanced',
    },
};

export const ACRO = {
    ACRO_RP_RATE_TC: {
        Description:
            'Acro roll and pitch rate control input time constant.  Low numbers lead to sharper response, higher numbers to softer response',
        DisplayName: 'Acro roll/pitch rate control input time constant',
        Increment: '0.01',
        Range: {
            high: '1',
            low: '0',
        },
        Units: 's',
        User: 'Standard',
        Values: {
            '0.05': 'Very Crisp',
            '0.1': 'Crisp',
            '0.15': 'Medium',
            '0.2': 'Soft',
            '0.5': 'Very Soft',
        },
    },
};

export const PILOT = {
    PILOT_Y_RATE_TC: {
        Description:
            'Pilot yaw rate control input time constant.  Low numbers lead to sharper response, higher numbers to softer response',
        DisplayName: 'Pilot yaw rate control input time constant',
        Increment: '0.01',
        Range: {
            high: '1',
            low: '0',
        },
        Units: 's',
        User: 'Standard',
        Values: {
            '0.05': 'Very Crisp',
            '0.1': 'Crisp',
            '0.15': 'Medium',
            '0.2': 'Soft',
            '0.5': 'Very Soft',
        },
    },
};

export const COMPASS = {
    COMPASS_AUTODEC: {
        Description: 'Enable or disable the automatic calculation of the declination based on gps location',
        DisplayName: 'Auto Declination',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Auto Declination\n    // @Description: Enable or disable the automatic calculation of the declination based on gps location\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    COMPASS_AUTO_ROT: {
        Description:
            'When enabled this will automatically check the orientation of compasses on successful completion of compass calibration. If set to 2 then external compasses will have their orientation automatically corrected.',
        DisplayName: 'Automatically check orientation',
        Values: {
            '0': 'Disabled',
            '1': 'CheckOnly',
            '2': 'CheckAndFix',
            '3': 'use same tolerance to auto rotate 45 deg rotations',
        },
        __field_text:
            '\n    // @DisplayName: Automatically check orientation\n    // @Description: When enabled this will automatically check the orientation of compasses on successful completion of compass calibration. If set to 2 then external compasses will have their orientation automatically corrected.\n    // @Values: 0:Disabled,1:CheckOnly,2:CheckAndFix,3:use same tolerance to auto rotate 45 deg rotations',
    },
    COMPASS_CAL_FIT: {
        Description:
            'This controls the fitness level required for a successful compass calibration. A lower value makes for a stricter fit (less likely to pass). This is the value used for the primary magnetometer. Other magnetometers get double the value.',
        DisplayName: 'Compass calibration fitness',
        Increment: '0.1',
        Range: {
            high: '32',
            low: '4',
        },
        User: 'Advanced',
        Values: {
            '16': 'Default',
            '32': 'Relaxed',
            '4': 'Very Strict',
            '8': 'Strict',
        },
        __field_text:
            '\n    // @DisplayName: Compass calibration fitness\n    // @Description: This controls the fitness level required for a successful compass calibration. A lower value makes for a stricter fit (less likely to pass). This is the value used for the primary magnetometer. Other magnetometers get double the value.\n    // @Range: 4 32\n    // @Values: 4:Very Strict,8:Strict,16:Default,32:Relaxed\n    // @Increment: 0.1\n    // @User: Advanced',
    },
    COMPASS_CUS_PIT: {
        Description:
            'Compass mounting position pitch offset. Positive values = pitch up, negative values = pitch down. This parameter is only used when COMPASS_ORIENT/2/3 is set to CUSTOM.',
        DisplayName: 'Custom orientation pitch offset',
        Increment: '1',
        Range: {
            high: '180',
            low: '-180',
        },
        RebootRequired: 'True',
        Units: 'deg',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Custom orientation pitch offset\n    // @Description: Compass mounting position pitch offset. Positive values = pitch up, negative values = pitch down. This parameter is only used when COMPASS_ORIENT/2/3 is set to CUSTOM.\n    // @Range: -180 180\n    // @Units: deg\n    // @Increment: 1\n    // @RebootRequired: True\n    // @User: Advanced',
    },
    COMPASS_CUS_ROLL: {
        Description:
            'Compass mounting position roll offset. Positive values = roll right, negative values = roll left. This parameter is only used when COMPASS_ORIENT/2/3 is set to CUSTOM.',
        DisplayName: 'Custom orientation roll offset',
        Increment: '1',
        Range: {
            high: '180',
            low: '-180',
        },
        RebootRequired: 'True',
        Units: 'deg',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Custom orientation roll offset\n    // @Description: Compass mounting position roll offset. Positive values = roll right, negative values = roll left. This parameter is only used when COMPASS_ORIENT/2/3 is set to CUSTOM.\n    // @Range: -180 180\n    // @Units: deg\n    // @Increment: 1\n    // @RebootRequired: True\n    // @User: Advanced',
    },
    COMPASS_CUS_YAW: {
        Description:
            'Compass mounting position yaw offset. Positive values = yaw right, negative values = yaw left. This parameter is only used when COMPASS_ORIENT/2/3 is set to CUSTOM.',
        DisplayName: 'Custom orientation yaw offset',
        Increment: '1',
        Range: {
            high: '180',
            low: '-180',
        },
        RebootRequired: 'True',
        Units: 'deg',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Custom orientation yaw offset\n    // @Description: Compass mounting position yaw offset. Positive values = yaw right, negative values = yaw left. This parameter is only used when COMPASS_ORIENT/2/3 is set to CUSTOM.\n    // @Range: -180 180\n    // @Units: deg\n    // @Increment: 1\n    // @RebootRequired: True\n    // @User: Advanced',
    },
    COMPASS_DEC: {
        Description: 'An angle to compensate between the true north and magnetic north',
        DisplayName: 'Compass declination',
        Increment: '0.01',
        Range: {
            high: '3.142',
            low: '-3.142',
        },
        Units: 'rad',
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Compass declination\n    // @Description: An angle to compensate between the true north and magnetic north\n    // @Range: -3.142 3.142\n    // @Units: rad\n    // @Increment: 0.01\n    // @User: Standard',
    },
    COMPASS_DEV_ID: {
        Description: 'Compass device id.  Automatically detected, do not set manually',
        DisplayName: 'Compass device id',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass device id\n    // @Description: Compass device id.  Automatically detected, do not set manually\n    // @ReadOnly: True\n    // @User: Advanced',
    },
    COMPASS_DEV_ID2: {
        Description: "Second compass's device id.  Automatically detected, do not set manually",
        DisplayName: 'Compass2 device id',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass2 device id\n    // @Description: Second compass's device id.  Automatically detected, do not set manually\n    // @ReadOnly: True\n    // @User: Advanced",
    },
    COMPASS_DEV_ID3: {
        Description: "Third compass's device id.  Automatically detected, do not set manually",
        DisplayName: 'Compass3 device id',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass3 device id\n    // @Description: Third compass's device id.  Automatically detected, do not set manually\n    // @ReadOnly: True\n    // @User: Advanced",
    },
    COMPASS_DEV_ID4: {
        Description: "Extra 4th compass's device id.  Automatically detected, do not set manually",
        DisplayName: 'Compass4 device id',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass4 device id\n    // @Description: Extra 4th compass's device id.  Automatically detected, do not set manually\n    // @ReadOnly: True\n    // @User: Advanced",
    },
    COMPASS_DEV_ID5: {
        Description: "Extra 5th compass's device id.  Automatically detected, do not set manually",
        DisplayName: 'Compass5 device id',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass5 device id\n    // @Description: Extra 5th compass's device id.  Automatically detected, do not set manually\n    // @ReadOnly: True\n    // @User: Advanced",
    },
    COMPASS_DEV_ID6: {
        Description: "Extra 6th compass's device id.  Automatically detected, do not set manually",
        DisplayName: 'Compass6 device id',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass6 device id\n    // @Description: Extra 6th compass's device id.  Automatically detected, do not set manually\n    // @ReadOnly: True\n    // @User: Advanced",
    },
    COMPASS_DEV_ID7: {
        Description: "Extra 7th compass's device id.  Automatically detected, do not set manually",
        DisplayName: 'Compass7 device id',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass7 device id\n    // @Description: Extra 7th compass's device id.  Automatically detected, do not set manually\n    // @ReadOnly: True\n    // @User: Advanced",
    },
    COMPASS_DEV_ID8: {
        Description: "Extra 8th compass's device id.  Automatically detected, do not set manually",
        DisplayName: 'Compass8 device id',
        ReadOnly: 'True',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass8 device id\n    // @Description: Extra 8th compass's device id.  Automatically detected, do not set manually\n    // @ReadOnly: True\n    // @User: Advanced",
    },
    COMPASS_DIA2_X: {
        Calibration: '1',
        Description:
            'DIA_X in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass2 soft-iron diagonal X component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass2 soft-iron diagonal X component\n    // @Description: DIA_X in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_DIA2_Y: {
        Calibration: '1',
        Description:
            'DIA_Y in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass2 soft-iron diagonal Y component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass2 soft-iron diagonal Y component\n    // @Description: DIA_Y in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_DIA2_Z: {
        Description:
            'DIA_Z in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass2 soft-iron diagonal Z component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass2 soft-iron diagonal Z component\n    // @Description: DIA_Z in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced',
    },
    COMPASS_DIA3_X: {
        Calibration: '1',
        Description:
            'DIA_X in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass3 soft-iron diagonal X component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass3 soft-iron diagonal X component\n    // @Description: DIA_X in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_DIA3_Y: {
        Calibration: '1',
        Description:
            'DIA_Y in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass3 soft-iron diagonal Y component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass3 soft-iron diagonal Y component\n    // @Description: DIA_Y in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_DIA3_Z: {
        Description:
            'DIA_Z in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass3 soft-iron diagonal Z component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass3 soft-iron diagonal Z component\n    // @Description: DIA_Z in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced',
    },
    COMPASS_DIA_X: {
        Calibration: '1',
        Description:
            'DIA_X in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass soft-iron diagonal X component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass soft-iron diagonal X component\n    // @Description: DIA_X in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_DIA_Y: {
        Calibration: '1',
        Description:
            'DIA_Y in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass soft-iron diagonal Y component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass soft-iron diagonal Y component\n    // @Description: DIA_Y in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_DIA_Z: {
        Description:
            'DIA_Z in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass soft-iron diagonal Z component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass soft-iron diagonal Z component\n    // @Description: DIA_Z in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced',
    },
    COMPASS_ENABLE: {
        Description:
            'Setting this to Enabled(1) will enable the compass. Setting this to Disabled(0) will disable the compass. Note that this is separate from COMPASS_USE. This will enable the low level senor, and will enable logging of magnetometer data. To use the compass for navigation you must also set COMPASS_USE to 1.',
        DisplayName: 'Enable Compass',
        RebootRequired: 'True',
        User: 'Standard',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Enable Compass\n    // @Description: Setting this to Enabled(1) will enable the compass. Setting this to Disabled(0) will disable the compass. Note that this is separate from COMPASS_USE. This will enable the low level senor, and will enable logging of magnetometer data. To use the compass for navigation you must also set COMPASS_USE to 1.\n    // @User: Standard\n    // @RebootRequired: True\n    // @Values: 0:Disabled,1:Enabled',
    },
    COMPASS_EXTERN2: {
        Description:
            'Configure second compass so it is attached externally. This is auto-detected on most boards. If set to 0 or 1 then auto-detection by bus connection can override the value. If set to 2 then auto-detection will be disabled.',
        DisplayName: 'Compass2 is attached via an external cable',
        User: 'Advanced',
        Values: {
            '0': 'Internal',
            '1': 'External',
            '2': 'ForcedExternal',
        },
        __field_text:
            '\n    // @DisplayName: Compass2 is attached via an external cable\n    // @Description: Configure second compass so it is attached externally. This is auto-detected on most boards. If set to 0 or 1 then auto-detection by bus connection can override the value. If set to 2 then auto-detection will be disabled.\n    // @Values: 0:Internal,1:External,2:ForcedExternal\n    // @User: Advanced',
    },
    COMPASS_EXTERN3: {
        Description:
            'Configure third compass so it is attached externally. This is auto-detected on most boards. If set to 0 or 1 then auto-detection by bus connection can override the value. If set to 2 then auto-detection will be disabled.',
        DisplayName: 'Compass3 is attached via an external cable',
        User: 'Advanced',
        Values: {
            '0': 'Internal',
            '1': 'External',
            '2': 'ForcedExternal',
        },
        __field_text:
            '\n    // @DisplayName: Compass3 is attached via an external cable\n    // @Description: Configure third compass so it is attached externally. This is auto-detected on most boards. If set to 0 or 1 then auto-detection by bus connection can override the value. If set to 2 then auto-detection will be disabled.\n    // @Values: 0:Internal,1:External,2:ForcedExternal\n    // @User: Advanced',
    },
    COMPASS_EXTERNAL: {
        Description:
            'Configure compass so it is attached externally. This is auto-detected on most boards. Set to 1 if the compass is externally connected. When externally connected the COMPASS_ORIENT option operates independently of the AHRS_ORIENTATION board orientation option. If set to 0 or 1 then auto-detection by bus connection can override the value. If set to 2 then auto-detection will be disabled.',
        DisplayName: 'Compass is attached via an external cable',
        User: 'Advanced',
        Values: {
            '0': 'Internal',
            '1': 'External',
            '2': 'ForcedExternal',
        },
        __field_text:
            '\n    // @DisplayName: Compass is attached via an external cable\n    // @Description: Configure compass so it is attached externally. This is auto-detected on most boards. Set to 1 if the compass is externally connected. When externally connected the COMPASS_ORIENT option operates independently of the AHRS_ORIENTATION board orientation option. If set to 0 or 1 then auto-detection by bus connection can override the value. If set to 2 then auto-detection will be disabled.\n    // @Values: 0:Internal,1:External,2:ForcedExternal\n    // @User: Advanced',
    },
    COMPASS_FLTR_RNG: {
        Description:
            'This sets the range around the average value that new samples must be within to be accepted. This can help reduce the impact of noise on sensors that are on long I2C cables. The value is a percentage from the average value. A value of zero disables this filter.',
        DisplayName: 'Range in which sample is accepted',
        Increment: '1',
        Range: {
            high: '100',
            low: '0',
        },
        Units: '%',
        __field_text:
            '\n    // @DisplayName: Range in which sample is accepted\n    // @Description: This sets the range around the average value that new samples must be within to be accepted. This can help reduce the impact of noise on sensors that are on long I2C cables. The value is a percentage from the average value. A value of zero disables this filter.\n    // @Units: %\n    // @Range: 0 100\n    // @Increment: 1',
    },
    COMPASS_LEARN: {
        Description:
            'Enable or disable the automatic learning of compass offsets. You can enable learning either using a compass-only method that is suitable only for fixed wing aircraft or using the offsets learnt by the active EKF state estimator. If this option is enabled then the learnt offsets are saved when you disarm the vehicle. If InFlight learning is enabled then the compass with automatically start learning once a flight starts (must be armed). While InFlight learning is running you cannot use position control modes.',
        DisplayName: 'Learn compass offsets automatically',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Internal-Learning',
            '2': 'EKF-Learning',
            '3': 'InFlight-Learning',
        },
        __field_text:
            '\n    // @DisplayName: Learn compass offsets automatically\n    // @Description: Enable or disable the automatic learning of compass offsets. You can enable learning either using a compass-only method that is suitable only for fixed wing aircraft or using the offsets learnt by the active EKF state estimator. If this option is enabled then the learnt offsets are saved when you disarm the vehicle. If InFlight learning is enabled then the compass with automatically start learning once a flight starts (must be armed). While InFlight learning is running you cannot use position control modes.\n    // @Values: 0:Disabled,1:Internal-Learning,2:EKF-Learning,3:InFlight-Learning\n    // @User: Advanced',
    },
    COMPASS_MOT2_X: {
        Calibration: '1',
        Description:
            "Multiplied by the current throttle and added to compass2's x-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)",
        DisplayName: 'Motor interference compensation to compass2 for body frame X axis',
        Increment: '1',
        Range: {
            high: '1000',
            low: '-1000',
        },
        Units: 'mGauss/A',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Motor interference compensation to compass2 for body frame X axis\n    // @Description: Multiplied by the current throttle and added to compass2's x-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)\n    // @Range: -1000 1000\n    // @Units: mGauss/A\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1",
    },
    COMPASS_MOT2_Y: {
        Calibration: '1',
        Description:
            "Multiplied by the current throttle and added to compass2's y-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)",
        DisplayName: 'Motor interference compensation to compass2 for body frame Y axis',
        Increment: '1',
        Range: {
            high: '1000',
            low: '-1000',
        },
        Units: 'mGauss/A',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Motor interference compensation to compass2 for body frame Y axis\n    // @Description: Multiplied by the current throttle and added to compass2's y-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)\n    // @Range: -1000 1000\n    // @Units: mGauss/A\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1",
    },
    COMPASS_MOT2_Z: {
        Description:
            "Multiplied by the current throttle and added to compass2's z-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)",
        DisplayName: 'Motor interference compensation to compass2 for body frame Z axis',
        Increment: '1',
        Range: {
            high: '1000',
            low: '-1000',
        },
        Units: 'mGauss/A',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Motor interference compensation to compass2 for body frame Z axis\n    // @Description: Multiplied by the current throttle and added to compass2's z-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)\n    // @Range: -1000 1000\n    // @Units: mGauss/A\n    // @Increment: 1\n    // @User: Advanced",
    },
    COMPASS_MOT3_X: {
        Calibration: '1',
        Description:
            "Multiplied by the current throttle and added to compass3's x-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)",
        DisplayName: 'Motor interference compensation to compass3 for body frame X axis',
        Increment: '1',
        Range: {
            high: '1000',
            low: '-1000',
        },
        Units: 'mGauss/A',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Motor interference compensation to compass3 for body frame X axis\n    // @Description: Multiplied by the current throttle and added to compass3's x-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)\n    // @Range: -1000 1000\n    // @Units: mGauss/A\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1",
    },
    COMPASS_MOT3_Y: {
        Calibration: '1',
        Description:
            "Multiplied by the current throttle and added to compass3's y-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)",
        DisplayName: 'Motor interference compensation to compass3 for body frame Y axis',
        Increment: '1',
        Range: {
            high: '1000',
            low: '-1000',
        },
        Units: 'mGauss/A',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Motor interference compensation to compass3 for body frame Y axis\n    // @Description: Multiplied by the current throttle and added to compass3's y-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)\n    // @Range: -1000 1000\n    // @Units: mGauss/A\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1",
    },
    COMPASS_MOT3_Z: {
        Description:
            "Multiplied by the current throttle and added to compass3's z-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)",
        DisplayName: 'Motor interference compensation to compass3 for body frame Z axis',
        Increment: '1',
        Range: {
            high: '1000',
            low: '-1000',
        },
        Units: 'mGauss/A',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Motor interference compensation to compass3 for body frame Z axis\n    // @Description: Multiplied by the current throttle and added to compass3's z-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)\n    // @Range: -1000 1000\n    // @Units: mGauss/A\n    // @Increment: 1\n    // @User: Advanced",
    },
    COMPASS_MOTCT: {
        Calibration: '1',
        Description:
            'Set motor interference compensation type to disabled, throttle or current.  Do not change manually.',
        DisplayName: 'Motor interference compensation type',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Use Throttle',
            '2': 'Use Current',
        },
        __field_text:
            '\n    // @DisplayName: Motor interference compensation type\n    // @Description: Set motor interference compensation type to disabled, throttle or current.  Do not change manually.\n    // @Values: 0:Disabled,1:Use Throttle,2:Use Current\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_MOT_X: {
        Calibration: '1',
        Description:
            "Multiplied by the current throttle and added to the compass's x-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)",
        DisplayName: 'Motor interference compensation for body frame X axis',
        Increment: '1',
        Range: {
            high: '1000',
            low: '-1000',
        },
        Units: 'mGauss/A',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Motor interference compensation for body frame X axis\n    // @Description: Multiplied by the current throttle and added to the compass's x-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)\n    // @Range: -1000 1000\n    // @Units: mGauss/A\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1",
    },
    COMPASS_MOT_Y: {
        Calibration: '1',
        Description:
            "Multiplied by the current throttle and added to the compass's y-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)",
        DisplayName: 'Motor interference compensation for body frame Y axis',
        Increment: '1',
        Range: {
            high: '1000',
            low: '-1000',
        },
        Units: 'mGauss/A',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Motor interference compensation for body frame Y axis\n    // @Description: Multiplied by the current throttle and added to the compass's y-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)\n    // @Range: -1000 1000\n    // @Units: mGauss/A\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1",
    },
    COMPASS_MOT_Z: {
        Description:
            "Multiplied by the current throttle and added to the compass's z-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)",
        DisplayName: 'Motor interference compensation for body frame Z axis',
        Increment: '1',
        Range: {
            high: '1000',
            low: '-1000',
        },
        Units: 'mGauss/A',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Motor interference compensation for body frame Z axis\n    // @Description: Multiplied by the current throttle and added to the compass's z-axis values to compensate for motor interference (Offset per Amp or at Full Throttle)\n    // @Range: -1000 1000\n    // @Units: mGauss/A\n    // @Increment: 1\n    // @User: Advanced",
    },
    COMPASS_ODI2_X: {
        Calibration: '1',
        Description:
            'ODI_X in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass2 soft-iron off-diagonal X component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass2 soft-iron off-diagonal X component\n    // @Description: ODI_X in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_ODI2_Y: {
        Calibration: '1',
        Description:
            'ODI_Y in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass2 soft-iron off-diagonal Y component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass2 soft-iron off-diagonal Y component\n    // @Description: ODI_Y in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_ODI2_Z: {
        Description:
            'ODI_Z in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass2 soft-iron off-diagonal Z component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass2 soft-iron off-diagonal Z component\n    // @Description: ODI_Z in the compass2 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced',
    },
    COMPASS_ODI3_X: {
        Calibration: '1',
        Description:
            'ODI_X in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass3 soft-iron off-diagonal X component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass3 soft-iron off-diagonal X component\n    // @Description: ODI_X in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_ODI3_Y: {
        Calibration: '1',
        Description:
            'ODI_Y in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass3 soft-iron off-diagonal Y component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass3 soft-iron off-diagonal Y component\n    // @Description: ODI_Y in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_ODI3_Z: {
        Description:
            'ODI_Z in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass3 soft-iron off-diagonal Z component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass3 soft-iron off-diagonal Z component\n    // @Description: ODI_Z in the compass3 soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced',
    },
    COMPASS_ODI_X: {
        Calibration: '1',
        Description:
            'ODI_X in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass soft-iron off-diagonal X component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass soft-iron off-diagonal X component\n    // @Description: ODI_X in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_ODI_Y: {
        Calibration: '1',
        Description:
            'ODI_Y in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass soft-iron off-diagonal Y component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass soft-iron off-diagonal Y component\n    // @Description: ODI_Y in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_ODI_Z: {
        Description:
            'ODI_Z in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]',
        DisplayName: 'Compass soft-iron off-diagonal Z component',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass soft-iron off-diagonal Z component\n    // @Description: ODI_Z in the compass soft-iron calibration matrix: [[DIA_X, ODI_X, ODI_Y], [ODI_X, DIA_Y, ODI_Z], [ODI_Y, ODI_Z, DIA_Z]]\n    // @User: Advanced',
    },
    COMPASS_OFFS_MAX: {
        Description: 'This sets the maximum allowed compass offset in calibration and arming checks',
        DisplayName: 'Compass maximum offset',
        Increment: '1',
        Range: {
            high: '3000',
            low: '500',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass maximum offset\n    // @Description: This sets the maximum allowed compass offset in calibration and arming checks\n    // @Range: 500 3000\n    // @Increment: 1\n    // @User: Advanced',
    },
    COMPASS_OFS2_X: {
        Calibration: '1',
        Description: "Offset to be added to compass2's x-axis values to compensate for metal in the frame",
        DisplayName: 'Compass2 offsets in milligauss on the X axis',
        Increment: '1',
        Range: {
            high: '400',
            low: '-400',
        },
        Units: 'mGauss',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass2 offsets in milligauss on the X axis\n    // @Description: Offset to be added to compass2's x-axis values to compensate for metal in the frame\n    // @Range: -400 400\n    // @Units: mGauss\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1",
    },
    COMPASS_OFS2_Y: {
        Calibration: '1',
        Description: "Offset to be added to compass2's y-axis values to compensate for metal in the frame",
        DisplayName: 'Compass2 offsets in milligauss on the Y axis',
        Increment: '1',
        Range: {
            high: '400',
            low: '-400',
        },
        Units: 'mGauss',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass2 offsets in milligauss on the Y axis\n    // @Description: Offset to be added to compass2's y-axis values to compensate for metal in the frame\n    // @Range: -400 400\n    // @Units: mGauss\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1",
    },
    COMPASS_OFS2_Z: {
        Description: "Offset to be added to compass2's z-axis values to compensate for metal in the frame",
        DisplayName: 'Compass2 offsets in milligauss on the Z axis',
        Increment: '1',
        Range: {
            high: '400',
            low: '-400',
        },
        Units: 'mGauss',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass2 offsets in milligauss on the Z axis\n    // @Description: Offset to be added to compass2's z-axis values to compensate for metal in the frame\n    // @Range: -400 400\n    // @Units: mGauss\n    // @Increment: 1\n    // @User: Advanced",
    },
    COMPASS_OFS3_X: {
        Calibration: '1',
        Description: "Offset to be added to compass3's x-axis values to compensate for metal in the frame",
        DisplayName: 'Compass3 offsets in milligauss on the X axis',
        Increment: '1',
        Range: {
            high: '400',
            low: '-400',
        },
        Units: 'mGauss',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass3 offsets in milligauss on the X axis\n    // @Description: Offset to be added to compass3's x-axis values to compensate for metal in the frame\n    // @Range: -400 400\n    // @Units: mGauss\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1",
    },
    COMPASS_OFS3_Y: {
        Calibration: '1',
        Description: "Offset to be added to compass3's y-axis values to compensate for metal in the frame",
        DisplayName: 'Compass3 offsets in milligauss on the Y axis',
        Increment: '1',
        Range: {
            high: '400',
            low: '-400',
        },
        Units: 'mGauss',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass3 offsets in milligauss on the Y axis\n    // @Description: Offset to be added to compass3's y-axis values to compensate for metal in the frame\n    // @Range: -400 400\n    // @Units: mGauss\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1",
    },
    COMPASS_OFS3_Z: {
        Description: "Offset to be added to compass3's z-axis values to compensate for metal in the frame",
        DisplayName: 'Compass3 offsets in milligauss on the Z axis',
        Increment: '1',
        Range: {
            high: '400',
            low: '-400',
        },
        Units: 'mGauss',
        User: 'Advanced',
        __field_text:
            "\n    // @DisplayName: Compass3 offsets in milligauss on the Z axis\n    // @Description: Offset to be added to compass3's z-axis values to compensate for metal in the frame\n    // @Range: -400 400\n    // @Units: mGauss\n    // @Increment: 1\n    // @User: Advanced",
    },
    COMPASS_OFS_X: {
        Calibration: '1',
        Description: 'Offset to be added to the compass x-axis values to compensate for metal in the frame',
        DisplayName: 'Compass offsets in milligauss on the X axis',
        Increment: '1',
        Range: {
            high: '400',
            low: '-400',
        },
        Units: 'mGauss',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass offsets in milligauss on the X axis\n    // @Description: Offset to be added to the compass x-axis values to compensate for metal in the frame\n    // @Range: -400 400\n    // @Units: mGauss\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_OFS_Y: {
        Calibration: '1',
        Description: 'Offset to be added to the compass y-axis values to compensate for metal in the frame',
        DisplayName: 'Compass offsets in milligauss on the Y axis',
        Increment: '1',
        Range: {
            high: '400',
            low: '-400',
        },
        Units: 'mGauss',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass offsets in milligauss on the Y axis\n    // @Description: Offset to be added to the compass y-axis values to compensate for metal in the frame\n    // @Range: -400 400\n    // @Units: mGauss\n    // @Increment: 1\n    // @User: Advanced\n    // @Calibration: 1',
    },
    COMPASS_OFS_Z: {
        Description: 'Offset to be added to the compass z-axis values to compensate for metal in the frame',
        DisplayName: 'Compass offsets in milligauss on the Z axis',
        Increment: '1',
        Range: {
            high: '400',
            low: '-400',
        },
        Units: 'mGauss',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass offsets in milligauss on the Z axis\n    // @Description: Offset to be added to the compass z-axis values to compensate for metal in the frame\n    // @Range: -400 400\n    // @Units: mGauss\n    // @Increment: 1\n    // @User: Advanced',
    },
    COMPASS_OPTIONS: {
        Bitmask: {
            '0': 'CalRequireGPS',
            '1': 'Allow missing DroneCAN compasses to be automaticaly replaced (calibration still required)',
        },
        Description: 'This sets options to change the behaviour of the compass',
        DisplayName: 'Compass options',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass options\n    // @Description: This sets options to change the behaviour of the compass\n    // @Bitmask: 0:CalRequireGPS\n    // @Bitmask: 1: Allow missing DroneCAN compasses to be automaticaly replaced (calibration still required)\n    // @User: Advanced',
    },
    COMPASS_ORIENT: {
        Description:
            'The orientation of the first external compass relative to the vehicle frame. This value will be ignored unless this compass is set as an external compass. When set correctly in the northern hemisphere, pointing the nose and right side down should increase the MagX and MagY values respectively. Rolling the vehicle upside down should decrease the MagZ value. For southern hemisphere, switch increase and decrease. NOTE: For internal compasses, AHRS_ORIENT is used. The label for each option is specified in the order of rotations for that orientation. Firmware versions 4.2 and prior can use a CUSTOM (100) rotation to set the COMPASS_CUS_ROLL/PIT/YAW angles for Compass orientation. Later versions provide two general custom rotations which can be used, Custom 1 and Custom 2, with CUST_1_ROLL/PIT/YAW or CUST_2_ROLL/PIT/YAW angles.',
        DisplayName: 'Compass orientation',
        User: 'Advanced',
        Values: {
            '0': 'None',
            '1': 'Yaw45',
            '10': 'Yaw90Roll180',
            '100': 'Custom 4.1 and older',
            '101': 'Custom 1',
            '102': 'Custom 2',
            '11': 'Yaw135Roll180',
            '12': 'Pitch180',
            '13': 'Yaw225Roll180',
            '14': 'Yaw270Roll180',
            '15': 'Yaw315Roll180',
            '16': 'Roll90',
            '17': 'Yaw45Roll90',
            '18': 'Yaw90Roll90',
            '19': 'Yaw135Roll90',
            '2': 'Yaw90',
            '20': 'Roll270',
            '21': 'Yaw45Roll270',
            '22': 'Yaw90Roll270',
            '23': 'Yaw135Roll270',
            '24': 'Pitch90',
            '25': 'Pitch270',
            '26': 'Yaw90Pitch180',
            '27': 'Yaw270Pitch180',
            '28': 'Pitch90Roll90',
            '29': 'Pitch90Roll180',
            '3': 'Yaw135',
            '30': 'Pitch90Roll270',
            '31': 'Pitch180Roll90',
            '32': 'Pitch180Roll270',
            '33': 'Pitch270Roll90',
            '34': 'Pitch270Roll180',
            '35': 'Pitch270Roll270',
            '36': 'Yaw90Pitch180Roll90',
            '37': 'Yaw270Roll90',
            '38': 'Yaw293Pitch68Roll180',
            '39': 'Pitch315',
            '4': 'Yaw180',
            '40': 'Pitch315Roll90',
            '42': 'Roll45',
            '43': 'Roll315',
            '5': 'Yaw225',
            '6': 'Yaw270',
            '7': 'Yaw315',
            '8': 'Roll180',
            '9': 'Yaw45Roll180',
        },
        __field_text:
            '\n    // @DisplayName: Compass orientation\n    // @Description: The orientation of the first external compass relative to the vehicle frame. This value will be ignored unless this compass is set as an external compass. When set correctly in the northern hemisphere, pointing the nose and right side down should increase the MagX and MagY values respectively. Rolling the vehicle upside down should decrease the MagZ value. For southern hemisphere, switch increase and decrease. NOTE: For internal compasses, AHRS_ORIENT is used. The label for each option is specified in the order of rotations for that orientation. Firmware versions 4.2 and prior can use a CUSTOM (100) rotation to set the COMPASS_CUS_ROLL/PIT/YAW angles for Compass orientation. Later versions provide two general custom rotations which can be used, Custom 1 and Custom 2, with CUST_1_ROLL/PIT/YAW or CUST_2_ROLL/PIT/YAW angles.\n    // @Values: 0:None,1:Yaw45,2:Yaw90,3:Yaw135,4:Yaw180,5:Yaw225,6:Yaw270,7:Yaw315,8:Roll180,9:Yaw45Roll180,10:Yaw90Roll180,11:Yaw135Roll180,12:Pitch180,13:Yaw225Roll180,14:Yaw270Roll180,15:Yaw315Roll180,16:Roll90,17:Yaw45Roll90,18:Yaw90Roll90,19:Yaw135Roll90,20:Roll270,21:Yaw45Roll270,22:Yaw90Roll270,23:Yaw135Roll270,24:Pitch90,25:Pitch270,26:Yaw90Pitch180,27:Yaw270Pitch180,28:Pitch90Roll90,29:Pitch90Roll180,30:Pitch90Roll270,31:Pitch180Roll90,32:Pitch180Roll270,33:Pitch270Roll90,34:Pitch270Roll180,35:Pitch270Roll270,36:Yaw90Pitch180Roll90,37:Yaw270Roll90,38:Yaw293Pitch68Roll180,39:Pitch315,40:Pitch315Roll90,42:Roll45,43:Roll315,100:Custom 4.1 and older,101:Custom 1,102:Custom 2\n    // @User: Advanced',
    },
    COMPASS_ORIENT2: {
        Description:
            'The orientation of a second external compass relative to the vehicle frame. This value will be ignored unless this compass is set as an external compass. When set correctly in the northern hemisphere, pointing the nose and right side down should increase the MagX and MagY values respectively. Rolling the vehicle upside down should decrease the MagZ value. For southern hemisphere, switch increase and decrease. NOTE: For internal compasses, AHRS_ORIENT is used. The label for each option is specified in the order of rotations for that orientation. Firmware versions 4.2 and prior can use a CUSTOM (100) rotation to set the COMPASS_CUS_ROLL/PIT/YAW angles for Compass orientation. Later versions provide two general custom rotations which can be used, Custom 1 and Custom 2, with CUST_1_ROLL/PIT/YAW or CUST_2_ROLL/PIT/YAW angles.',
        DisplayName: 'Compass2 orientation',
        User: 'Advanced',
        Values: {
            '0': 'None',
            '1': 'Yaw45',
            '10': 'Yaw90Roll180',
            '100': 'Custom 4.1 and older',
            '101': 'Custom 1',
            '102': 'Custom 2',
            '11': 'Yaw135Roll180',
            '12': 'Pitch180',
            '13': 'Yaw225Roll180',
            '14': 'Yaw270Roll180',
            '15': 'Yaw315Roll180',
            '16': 'Roll90',
            '17': 'Yaw45Roll90',
            '18': 'Yaw90Roll90',
            '19': 'Yaw135Roll90',
            '2': 'Yaw90',
            '20': 'Roll270',
            '21': 'Yaw45Roll270',
            '22': 'Yaw90Roll270',
            '23': 'Yaw135Roll270',
            '24': 'Pitch90',
            '25': 'Pitch270',
            '26': 'Yaw90Pitch180',
            '27': 'Yaw270Pitch180',
            '28': 'Pitch90Roll90',
            '29': 'Pitch90Roll180',
            '3': 'Yaw135',
            '30': 'Pitch90Roll270',
            '31': 'Pitch180Roll90',
            '32': 'Pitch180Roll270',
            '33': 'Pitch270Roll90',
            '34': 'Pitch270Roll180',
            '35': 'Pitch270Roll270',
            '36': 'Yaw90Pitch180Roll90',
            '37': 'Yaw270Roll90',
            '38': 'Yaw293Pitch68Roll180',
            '39': 'Pitch315',
            '4': 'Yaw180',
            '40': 'Pitch315Roll90',
            '42': 'Roll45',
            '43': 'Roll315',
            '5': 'Yaw225',
            '6': 'Yaw270',
            '7': 'Yaw315',
            '8': 'Roll180',
            '9': 'Yaw45Roll180',
        },
        __field_text:
            '\n    // @DisplayName: Compass2 orientation\n    // @Description: The orientation of a second external compass relative to the vehicle frame. This value will be ignored unless this compass is set as an external compass. When set correctly in the northern hemisphere, pointing the nose and right side down should increase the MagX and MagY values respectively. Rolling the vehicle upside down should decrease the MagZ value. For southern hemisphere, switch increase and decrease. NOTE: For internal compasses, AHRS_ORIENT is used. The label for each option is specified in the order of rotations for that orientation. Firmware versions 4.2 and prior can use a CUSTOM (100) rotation to set the COMPASS_CUS_ROLL/PIT/YAW angles for Compass orientation. Later versions provide two general custom rotations which can be used, Custom 1 and Custom 2, with CUST_1_ROLL/PIT/YAW or CUST_2_ROLL/PIT/YAW angles.\n    // @Values: 0:None,1:Yaw45,2:Yaw90,3:Yaw135,4:Yaw180,5:Yaw225,6:Yaw270,7:Yaw315,8:Roll180,9:Yaw45Roll180,10:Yaw90Roll180,11:Yaw135Roll180,12:Pitch180,13:Yaw225Roll180,14:Yaw270Roll180,15:Yaw315Roll180,16:Roll90,17:Yaw45Roll90,18:Yaw90Roll90,19:Yaw135Roll90,20:Roll270,21:Yaw45Roll270,22:Yaw90Roll270,23:Yaw135Roll270,24:Pitch90,25:Pitch270,26:Yaw90Pitch180,27:Yaw270Pitch180,28:Pitch90Roll90,29:Pitch90Roll180,30:Pitch90Roll270,31:Pitch180Roll90,32:Pitch180Roll270,33:Pitch270Roll90,34:Pitch270Roll180,35:Pitch270Roll270,36:Yaw90Pitch180Roll90,37:Yaw270Roll90,38:Yaw293Pitch68Roll180,39:Pitch315,40:Pitch315Roll90,42:Roll45,43:Roll315,100:Custom 4.1 and older,101:Custom 1,102:Custom 2\n    // @User: Advanced',
    },
    COMPASS_ORIENT3: {
        Description:
            'The orientation of a third external compass relative to the vehicle frame. This value will be ignored unless this compass is set as an external compass. When set correctly in the northern hemisphere, pointing the nose and right side down should increase the MagX and MagY values respectively. Rolling the vehicle upside down should decrease the MagZ value. For southern hemisphere, switch increase and decrease. NOTE: For internal compasses, AHRS_ORIENT is used. The label for each option is specified in the order of rotations for that orientation. Firmware versions 4.2 and prior can use a CUSTOM (100) rotation to set the COMPASS_CUS_ROLL/PIT/YAW angles for Compass orientation. Later versions provide two general custom rotations which can be used, Custom 1 and Custom 2, with CUST_1_ROLL/PIT/YAW or CUST_2_ROLL/PIT/YAW angles.',
        DisplayName: 'Compass3 orientation',
        User: 'Advanced',
        Values: {
            '0': 'None',
            '1': 'Yaw45',
            '10': 'Yaw90Roll180',
            '100': 'Custom 4.1 and older',
            '101': 'Custom 1',
            '102': 'Custom 2',
            '11': 'Yaw135Roll180',
            '12': 'Pitch180',
            '13': 'Yaw225Roll180',
            '14': 'Yaw270Roll180',
            '15': 'Yaw315Roll180',
            '16': 'Roll90',
            '17': 'Yaw45Roll90',
            '18': 'Yaw90Roll90',
            '19': 'Yaw135Roll90',
            '2': 'Yaw90',
            '20': 'Roll270',
            '21': 'Yaw45Roll270',
            '22': 'Yaw90Roll270',
            '23': 'Yaw135Roll270',
            '24': 'Pitch90',
            '25': 'Pitch270',
            '26': 'Yaw90Pitch180',
            '27': 'Yaw270Pitch180',
            '28': 'Pitch90Roll90',
            '29': 'Pitch90Roll180',
            '3': 'Yaw135',
            '30': 'Pitch90Roll270',
            '31': 'Pitch180Roll90',
            '32': 'Pitch180Roll270',
            '33': 'Pitch270Roll90',
            '34': 'Pitch270Roll180',
            '35': 'Pitch270Roll270',
            '36': 'Yaw90Pitch180Roll90',
            '37': 'Yaw270Roll90',
            '38': 'Yaw293Pitch68Roll180',
            '39': 'Pitch315',
            '4': 'Yaw180',
            '40': 'Pitch315Roll90',
            '42': 'Roll45',
            '43': 'Roll315',
            '5': 'Yaw225',
            '6': 'Yaw270',
            '7': 'Yaw315',
            '8': 'Roll180',
            '9': 'Yaw45Roll180',
        },
        __field_text:
            '\n    // @DisplayName: Compass3 orientation\n    // @Description: The orientation of a third external compass relative to the vehicle frame. This value will be ignored unless this compass is set as an external compass. When set correctly in the northern hemisphere, pointing the nose and right side down should increase the MagX and MagY values respectively. Rolling the vehicle upside down should decrease the MagZ value. For southern hemisphere, switch increase and decrease. NOTE: For internal compasses, AHRS_ORIENT is used. The label for each option is specified in the order of rotations for that orientation. Firmware versions 4.2 and prior can use a CUSTOM (100) rotation to set the COMPASS_CUS_ROLL/PIT/YAW angles for Compass orientation. Later versions provide two general custom rotations which can be used, Custom 1 and Custom 2, with CUST_1_ROLL/PIT/YAW or CUST_2_ROLL/PIT/YAW angles.\n    // @Values: 0:None,1:Yaw45,2:Yaw90,3:Yaw135,4:Yaw180,5:Yaw225,6:Yaw270,7:Yaw315,8:Roll180,9:Yaw45Roll180,10:Yaw90Roll180,11:Yaw135Roll180,12:Pitch180,13:Yaw225Roll180,14:Yaw270Roll180,15:Yaw315Roll180,16:Roll90,17:Yaw45Roll90,18:Yaw90Roll90,19:Yaw135Roll90,20:Roll270,21:Yaw45Roll270,22:Yaw90Roll270,23:Yaw135Roll270,24:Pitch90,25:Pitch270,26:Yaw90Pitch180,27:Yaw270Pitch180,28:Pitch90Roll90,29:Pitch90Roll180,30:Pitch90Roll270,31:Pitch180Roll90,32:Pitch180Roll270,33:Pitch270Roll90,34:Pitch270Roll180,35:Pitch270Roll270,36:Yaw90Pitch180Roll90,37:Yaw270Roll90,38:Yaw293Pitch68Roll180,39:Pitch315,40:Pitch315Roll90,42:Roll45,43:Roll315,100:Custom 4.1 and older,101:Custom 1,102:Custom 2\n    // @User: Advanced',
    },
    COMPASS_PRIO1_ID: {
        Description:
            'Compass device id with 1st order priority, set automatically if 0. Reboot required after change.',
        DisplayName: 'Compass device id with 1st order priority',
        RebootRequired: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass device id with 1st order priority\n    // @Description: Compass device id with 1st order priority, set automatically if 0. Reboot required after change.\n    // @RebootRequired: True\n    // @User: Advanced',
    },
    COMPASS_PRIO2_ID: {
        Description:
            'Compass device id with 2nd order priority, set automatically if 0. Reboot required after change.',
        DisplayName: 'Compass device id with 2nd order priority',
        RebootRequired: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass device id with 2nd order priority\n    // @Description: Compass device id with 2nd order priority, set automatically if 0. Reboot required after change.\n    // @RebootRequired: True\n    // @User: Advanced',
    },
    COMPASS_PRIO3_ID: {
        Description:
            'Compass device id with 3rd order priority, set automatically if 0. Reboot required after change.',
        DisplayName: 'Compass device id with 3rd order priority',
        RebootRequired: 'True',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass device id with 3rd order priority\n    // @Description: Compass device id with 3rd order priority, set automatically if 0. Reboot required after change.\n    // @RebootRequired: True\n    // @User: Advanced',
    },
    COMPASS_SCALE: {
        Description:
            'Scaling factor for first compass to compensate for sensor scaling errors. If this is 0 then no scaling is done',
        DisplayName: 'Compass1 scale factor',
        Range: {
            high: '1.3',
            low: '0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Compass1 scale factor\n    // @Description: Scaling factor for first compass to compensate for sensor scaling errors. If this is 0 then no scaling is done\n    // @User: Standard\n    // @Range: 0 1.3',
    },
    COMPASS_SCALE2: {
        Description:
            'Scaling factor for 2nd compass to compensate for sensor scaling errors. If this is 0 then no scaling is done',
        DisplayName: 'Compass2 scale factor',
        Range: {
            high: '1.3',
            low: '0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Compass2 scale factor\n    // @Description: Scaling factor for 2nd compass to compensate for sensor scaling errors. If this is 0 then no scaling is done\n    // @User: Standard\n    // @Range: 0 1.3',
    },
    COMPASS_SCALE3: {
        Description:
            'Scaling factor for 3rd compass to compensate for sensor scaling errors. If this is 0 then no scaling is done',
        DisplayName: 'Compass3 scale factor',
        Range: {
            high: '1.3',
            low: '0',
        },
        User: 'Standard',
        __field_text:
            '\n    // @DisplayName: Compass3 scale factor\n    // @Description: Scaling factor for 3rd compass to compensate for sensor scaling errors. If this is 0 then no scaling is done\n    // @User: Standard\n    // @Range: 0 1.3',
    },
    COMPASS_TYPEMASK: {
        Bitmask: {
            '0': 'HMC5883',
            '1': 'LSM303D',
            '11': 'DroneCAN',
            '12': 'QMC5883',
            '14': 'MAG3110',
            '15': 'IST8308',
            '16': 'RM3100',
            '17': 'MSP',
            '18': 'ExternalAHRS',
            '2': 'AK8963',
            '3': 'BMM150',
            '4': 'LSM9DS1',
            '5': 'LIS3MDL',
            '6': 'AK09916',
            '7': 'IST8310',
            '8': 'ICM20948',
            '9': 'MMC3416',
        },
        Description:
            'This is a bitmask of driver types to disable. If a driver type is set in this mask then that driver will not try to find a sensor at startup',
        DisplayName: 'Compass disable driver type mask',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass disable driver type mask\n    // @Description: This is a bitmask of driver types to disable. If a driver type is set in this mask then that driver will not try to find a sensor at startup\n    // @Bitmask: 0:HMC5883,1:LSM303D,2:AK8963,3:BMM150,4:LSM9DS1,5:LIS3MDL,6:AK09916,7:IST8310,8:ICM20948,9:MMC3416,11:DroneCAN,12:QMC5883,14:MAG3110,15:IST8308,16:RM3100,17:MSP,18:ExternalAHRS\n    // @User: Advanced',
    },
    COMPASS_USE: {
        Description: 'Enable or disable the use of the compass (instead of the GPS) for determining heading',
        DisplayName: 'Use compass for yaw',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Use compass for yaw\n    // @Description: Enable or disable the use of the compass (instead of the GPS) for determining heading\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    COMPASS_USE2: {
        Description: 'Enable or disable the secondary compass for determining heading.',
        DisplayName: 'Compass2 used for yaw',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Compass2 used for yaw\n    // @Description: Enable or disable the secondary compass for determining heading.\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    COMPASS_USE3: {
        Description: 'Enable or disable the tertiary compass for determining heading.',
        DisplayName: 'Compass3 used for yaw',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: Compass3 used for yaw\n    // @Description: Enable or disable the tertiary compass for determining heading.\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    COMPASS_PMOT1_X: {
        Description: 'Compensation for X axis of motor1',
        DisplayName: 'Compass per-motor1 X',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor1 X\n    // @Description: Compensation for X axis of motor1\n    // @User: Advanced',
    },
    COMPASS_PMOT1_Y: {
        Description: 'Compensation for Y axis of motor1',
        DisplayName: 'Compass per-motor1 Y',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor1 Y\n    // @Description: Compensation for Y axis of motor1\n    // @User: Advanced',
    },
    COMPASS_PMOT1_Z: {
        Description: 'Compensation for Z axis of motor1',
        DisplayName: 'Compass per-motor1 Z',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor1 Z\n    // @Description: Compensation for Z axis of motor1\n    // @User: Advanced',
    },
    COMPASS_PMOT2_X: {
        Description: 'Compensation for X axis of motor2',
        DisplayName: 'Compass per-motor2 X',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor2 X\n    // @Description: Compensation for X axis of motor2\n    // @User: Advanced',
    },
    COMPASS_PMOT2_Y: {
        Description: 'Compensation for Y axis of motor2',
        DisplayName: 'Compass per-motor2 Y',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor2 Y\n    // @Description: Compensation for Y axis of motor2\n    // @User: Advanced',
    },
    COMPASS_PMOT2_Z: {
        Description: 'Compensation for Z axis of motor2',
        DisplayName: 'Compass per-motor2 Z',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor2 Z\n    // @Description: Compensation for Z axis of motor2\n    // @User: Advanced',
    },
    COMPASS_PMOT3_X: {
        Description: 'Compensation for X axis of motor3',
        DisplayName: 'Compass per-motor3 X',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor3 X\n    // @Description: Compensation for X axis of motor3\n    // @User: Advanced',
    },
    COMPASS_PMOT3_Y: {
        Description: 'Compensation for Y axis of motor3',
        DisplayName: 'Compass per-motor3 Y',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor3 Y\n    // @Description: Compensation for Y axis of motor3\n    // @User: Advanced',
    },
    COMPASS_PMOT3_Z: {
        Description: 'Compensation for Z axis of motor3',
        DisplayName: 'Compass per-motor3 Z',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor3 Z\n    // @Description: Compensation for Z axis of motor3\n    // @User: Advanced',
    },
    COMPASS_PMOT4_X: {
        Description: 'Compensation for X axis of motor4',
        DisplayName: 'Compass per-motor4 X',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor4 X\n    // @Description: Compensation for X axis of motor4\n    // @User: Advanced',
    },
    COMPASS_PMOT4_Y: {
        Description: 'Compensation for Y axis of motor4',
        DisplayName: 'Compass per-motor4 Y',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor4 Y\n    // @Description: Compensation for Y axis of motor4\n    // @User: Advanced',
    },
    COMPASS_PMOT4_Z: {
        Description: 'Compensation for Z axis of motor4',
        DisplayName: 'Compass per-motor4 Z',
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: Compass per-motor4 Z\n    // @Description: Compensation for Z axis of motor4\n    // @User: Advanced',
    },
    COMPASS_PMOT_EN: {
        Description: 'This enables per-motor compass corrections',
        DisplayName: 'per-motor compass correction enable',
        User: 'Advanced',
        Values: {
            '0': 'Disabled',
            '1': 'Enabled',
        },
        __field_text:
            '\n    // @DisplayName: per-motor compass correction enable\n    // @Description: This enables per-motor compass corrections\n    // @Values: 0:Disabled,1:Enabled\n    // @User: Advanced',
    },
    COMPASS_PMOT_EXP: {
        Description:
            'This is the exponential correction for the power output of the motor for per-motor compass correction',
        DisplayName: 'per-motor exponential correction',
        Increment: '0.01',
        Range: {
            high: '2',
            low: '0',
        },
        User: 'Advanced',
        __field_text:
            '\n    // @DisplayName: per-motor exponential correction\n    // @Description: This is the exponential correction for the power output of the motor for per-motor compass correction\n    // @Range: 0 2\n    // @Increment: 0.01\n    // @User: Advanced',
    },
};

export const MOT = {
    MOT_PWM_MIN: {
        DisplayName: 'PWM output minimum',
        Description:
            'This sets the min PWM output value in microseconds that will ever be output to the motors',
        Units: 'µs',
        Range: {
            high: '2000',
            low: '0',
        },
        User: 'Advanced',
    },
    MOT_PWM_MAX: {
        DisplayName: 'PWM output maximum',
        Description: 'This sets the max PWM value in microseconds that will ever be output to the motors',
        Units: 'µs',
        Range: {
            high: '2000',
            low: '0',
        },
        User: 'Advanced',
    },
    MOT_SPIN_ARM: {
        DisplayName: 'Motor Spin armed',
        Description:
            'Point at which the motors start to spin expressed as a number from 0 to 1 in the entire output range.  Should be lower than MOT_SPIN_MIN.',
        Range: {
            high: '1',
            low: '0',
        },
        User: 'Advanced',
    },
    MOT_SPIN_MIN: {
        DisplayName: 'Motor Spin minimum',
        Description:
            'Point at which the thrust starts expressed as a number from 0 to 1 in the entire output range.  Should be higher than MOT_SPIN_ARM.',
        Range: {
            high: '1',
            low: '0',
        },
        User: 'Advanced',
    },
    MOT_SPIN_MAX: {
        DisplayName: 'Motor Spin maximum',
        Description:
            'Point at which the thrust saturates expressed as a number from 0 to 1 in the entire output range',
        Range: {
            high: '1',
            low: '0',
        },
        User: 'Advanced',
    },
    MOT_THST_EXPO: {
        DisplayName: 'Thrust Curve Expo',
        Description: 'Motor thrust curve exponent (0.0 for linear to 1.0 for second order curve)',
        Range: {
            high: '1',
            low: '-1',
        },
        User: 'Advanced',
    },
    MOT_THST_HOVER: {
        DisplayName: 'Thrust Hover Value',
        Description: 'Motor thrust needed to hover expressed as a number from 0 to 1',
        Range: {
            high: '0.6875',
            low: '0.125',
        },
        User: 'Advanced',
    },
};

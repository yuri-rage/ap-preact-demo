import { signal, computed, effect } from '@preact/signals';

import { ColumnConfig } from '@/components/numeric-data-grid';
import { loadParams, ParamValue, createParamSignal } from '@/components/param-grid';

/**
 * demo page store
 * consolidates business logic and state management
 * keeps the demo page component clean and easy to understand
 */

/** represents a row of test data in the numeric grid */
export interface DemoData {
    pwm: number;
    thrust: number;
    voltage: number;
    current: number;
}

/** default empty row for the numeric grid */
const EMPTY_ROW: DemoData = {
    pwm: 0,
    thrust: 0,
    voltage: 0,
    current: 0,
};

/** default parameter values for demonstration */
const PARAMS = {
    MOT_PWM_MIN: 1000,
    MOT_PWM_MAX: 2000,
    MOT_THST_HOVER: 0.35,
    COMPASS_DEV_ID: 123456,
    COMPASS_OFS_X: 0,
    COMPASS_AUTO_ROT: 0,
    INS_LOG_BAT_MASK: 0,
} as const;

/** parameters that should be read-only in the param grid */
const READ_ONLY_STATES = {
    MOT_THST_HOVER: true,
} as const;

/** parameters that should not be constrained to their normal ranges */
const CONSTRAINED_STATES = {
    COMPASS_OFS_X: false,
} as const;

/** column configuration for the numeric grid */
export const DEMO_COLUMNS = [
    { field: 'pwm' as const, headerName: 'ESC Signal (μs)', precision: 0 },
    { field: 'thrust' as const, headerName: 'Thrust', precision: 3 },
    { field: 'voltage' as const, headerName: 'Voltage (V)', precision: 3 },
    { field: 'current' as const, headerName: 'Current (A)', precision: 3 },
] satisfies ColumnConfig<DemoData>[];

/** creates an array of empty demo data rows */
const createEmptyRows = (count = 10) =>
    Array(count)
        .fill(null)
        .map(() => ({ ...EMPTY_ROW }));

//** state signals **
/** rows of demo data for the numeric grid */
export const rows = signal<DemoData[]>(createEmptyRows());

/** parameter values for the param grid */
export const paramConfig = signal<ParamValue[]>([]);

/** parameter values for the param grid */
export const params = createParamSignal();

/** loading state for the param grid */
export const isParamGridLoading = signal(true);

/** controls ghost button animation state */
export const isGhostSpinning = signal(false);

//** actions **
/**
 * resets the numeric grid to empty rows
 */
export const resetNumericGrid = () => {
    rows.value = createEmptyRows();
};

/**
 * increments the MOT_PWM_MIN parameter by 1
 * used to demonstrate parameter modification
 */
export const incrementPwmMin = () => {
    params.value.MOT_PWM_MIN += 1;
};

/**
 * initializes parameters by loading them with their configurations
 * sets loading state and handles errors
 */
export const initializeParams = async () => {
    try {
        const result = await loadParams(Object.keys(PARAMS), PARAMS, READ_ONLY_STATES, CONSTRAINED_STATES);
        paramConfig.value = result;
        params.value = Object.fromEntries(
            result.map(param => [param.Name, Number(param.Value)])
        );
        isParamGridLoading.value = false;
    } catch (error) {
        console.error('Failed to load parameters:', error);
        isParamGridLoading.value = false;
    }
};

/**
 * triggers the ghost button animation
 */
export const triggerGhostSpin = () => {
    isGhostSpinning.value = true;
    setTimeout(() => {
        isGhostSpinning.value = false;
    }, 1200);
};

// initialize params immediately when the store is imported
initializeParams().catch((error) => {
    console.error('Failed to initialize params:', error);
});

import { lazy } from 'preact-iso';

/**
 * List of web tools by displayed title.
 *
 * Each local tool should have a component file in the 'routes' folder.
 * Route filename format is {kebab-case-title}.tsx
 * Provide a null component field if the href links to an external site.
 * Works in progress should have the dev field set to true.
 *
 * Each tool should have an icon in the 'assets' folder (png or gif).
 * Icon filename format is icon-{kebab-case-title}.{png,gif}
 */

const LEGACY_URL = 'https://firmware.ardupilot.org/Tools/WebTools';

// TODO: port existing tools if Dev Team agrees
const webToolList = [
    {
        title: 'Web Tools Home',
        href: '/',
    },
    {
        title: 'Log Finder',
        description:
            'Load and sort directories of logs. Logs are sorted by the unique hardware ID of the flight controller. Parameter changes are tracked between logs.',
        href: `${LEGACY_URL}/LogFinder`,
        component: null,
    },
    {
        title: 'UAV Log Viewer',
        description: 'General purpose ArduPilot log review with 3D flight visualization.',
        href: 'https://plot.ardupilot.org/#/',
        component: null,
    },
    {
        title: 'Hardware Report',
        description:
            'Provides an overview of connected hardware from a parameter file or log. Includes visualization for sensor position offsets and health status.',
        href: `${LEGACY_URL}/HardwareReport`,
        component: null,
    },
    {
        title: 'MAGFit',
        description:
            'Calibrate compass from flight log. Fits logged magnetometer data to the world magnetic model providing offsets, iron correction, scale, and motor compensation.',
        href: `${LEGACY_URL}/MAGFit`,
        component: null,
    },
    {
        title: 'Filter Review',
        description:
            "Gyro noise and filter configuration tool. Uses raw or batch IMU logs to show the vehicle's noise profile.",
        href: `${LEGACY_URL}/FilterReview`,
        component: null,
    },
    {
        title: 'PID Review',
        description:
            'Review PID tune in the frequency domain. Step response estimate is generated. Results are split based on parameter changes.',
        href: `${LEGACY_URL}/PIDReview`,
        component: null,
    },
    {
        title: 'Filter Tool',
        description:
            'Bode plot tool for gyro low pass and notch filter setup. Visualizes attenuation and phase lag of filter setup from parameter files.',
        href: `${LEGACY_URL}/FilterTool`,
        component: null,
    },
    {
        title: 'Feature Demo',
        description: 'Showcases some features of Preact-based web tools.',
        dev: true,
    },
    {
        title: 'Thrust Expo',
        description:
            'Use thrust test stand data to analyze motor thrust linearity. Visualizes thrust vs throttle relationship and optimizes MOT_THST_EXPO for linear thrust response.',
        href: '/thrust-expo',
        dev: true,
    },
    {
        title: 'Stream Stats',
        description: 'Message rate analysis for tlogs and bin logs.',
        href: `${LEGACY_URL}/StreamStats`,
        component: null,
        dev: true,
    },
    {
        title: 'Kinematic Tool',
        description: 'A tool to help understanding of attitude control input shaping.',
        href: `${LEGACY_URL}/KinematicTool`,
        component: null,
        dev: true,
    },
    {
        title: 'Geofence Generator',
        description: 'Generates ArduPilot geofences from Open Street Map waterway data.',
        href: `${LEGACY_URL}/GeofenceGenerator`,
        component: null,
        dev: true,
    },
    {
        title: 'Rotation Check',
        description: 'A tool to help understand of rotations.',
        href: `${LEGACY_URL}/RotationCheck`,
        component: null,
        dev: true,
    },
    {
        title: 'SysID',
        description: 'A tool for identifying state-space or transfer function models for UAV dynamics',
        href: `${LEGACY_URL}/SysID`,
        component: null,
        dev: true,
    },
    {
        title: 'Telemetry Dashboard',
        description:
            'Customizable data displays from a MAVLink telemetry stream. Requires a WebSocket server to forward raw binary MAVLink.',
        href: `${LEGACY_URL}/TelemetryDashboard`,
        component: null,
        dev: true,
    },
    {
        title: 'Analytic Tune',
        description: 'A tool for analytically tuning a multirotor or heli using system ID mode data',
        href: `${LEGACY_URL}/AnalyticTune`,
        component: null,
        dev: true,
    },
];

/***** DO NOT MODIFY BELOW THIS LINE WHEN ADDING NEW TOOLS *****/

// convert a string to kebab case
const toKebabCase = (str: string) => {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .trim();
};

const resolveTools = async () => {
    const toolsWithResolvedData = await Promise.all(
        webToolList.map(async (tool) => {
            const kebabCaseTitle = toKebabCase(tool.title);
            // try png, then gif, otherwise null
            const icon = await import(`@/assets/icon-${kebabCaseTitle}.png`).catch(() =>
                import(`@/assets/icon-${kebabCaseTitle}.gif`).catch(() => null)
            );

            // First try to import from a folder structure
            const component = lazy(() =>
                import(`@/routes/${kebabCaseTitle}/${kebabCaseTitle}.tsx`).catch(
                    () => import(`@/routes/${kebabCaseTitle}.tsx`)
                )
            );

            return {
                title: tool.title,
                description: tool.description || '',
                icon: icon?.default || undefined,
                href: tool.href || `/${kebabCaseTitle}`,
                component: tool.component || component,
                dev: tool.dev || false,
            };
        })
    );

    return toolsWithResolvedData;
};

export const webTools = await resolveTools();

export default webTools;

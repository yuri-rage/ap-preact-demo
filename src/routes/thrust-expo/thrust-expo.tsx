import type { ColumnConfig } from '@/components/numeric-data-grid';
import NumericGrid from '@/components/numeric-data-grid';
import ParamGrid from '@/components/param-grid';
import PlotlyPlot from '@/components/plotly-plot';
import ToolTitle from '@/components/tool-title';
import { Button } from '@/components/ui/button';

import {
    type ThrustData,
    thrustPlotData,
    thrustPlotLayout,
    paramConfig,
    params,
    hoverParamConfig,
    hoverParams,
    isParamGridLoading,
    thrustDataRows,
    showExampleData,
    resetAll,
    thrustErrorPlotData,
    thrustErrorPlotLayout,
    thrustExpoPlotData,
    thrustExpoPlotLayout,
    onDataChange,
    linearizedResult,
    optimizedStdDev,
} from './store';

const DATA_COLUMNS = [
    { field: 'pwm' as const, headerName: 'ESC Signal (μs)', precision: 0 },
    { field: 'thrust' as const, headerName: 'Thrust', precision: 3 },
    { field: 'voltage' as const, headerName: 'Voltage (V)', precision: 3 },
    { field: 'current' as const, headerName: 'Current (A)', precision: 3 },
] satisfies ColumnConfig<ThrustData>[];

export const ThrustExpo = () => {
    return (
        <div className='flex min-w-[580px] flex-row flex-wrap gap-3 pb-8'>
            <div className='w-full max-w-screen-xl'>
                <ToolTitle title='ArduPilot Thrust Expo'>
                    This tool estimates thrust linearization using thrust test stand data. Load a parameter
                    file or enter parameters manually. Copy and paste test stand data from a spreadsheet or
                    enter it manually. Current data is optional (for reference only - not used in
                    calculation). Once the plot is generated, adjust MOT_THST_EXPO to improve the linear fit.
                    If the curve is poorly matched at the extremes, do not chase a perfect fit. Rather, focus
                    on midrange throttle linearity.
                </ToolTitle>
                <div className='flex flex-col gap-3 px-3'>
                    <NumericGrid<ThrustData>
                        title='Thrust Data'
                        description='Paste test stand data or drag and drop a CSV or delimited text file.'
                        columns={DATA_COLUMNS}
                        rows={thrustDataRows}
                        onDataChange={onDataChange}
                    />
                    <div className='flex w-full flex-row flex-wrap justify-between gap-3'>
                        <ParamGrid
                            paramConfig={paramConfig}
                            params={params}
                            isLoading={isParamGridLoading.value}
                            description='Manually enter parameters or drag and drop a parameter file.'
                            className='min-w-[550px] flex-1 basis-[550px]'
                            variant='narrow'
                        />
                        <div className='flex min-w-[550px] flex-1 basis-[550px] flex-col'>
                            <div className='flex-none'>
                                <ParamGrid
                                    title='Hover Thrust Estimation'
                                    paramConfig={hoverParamConfig}
                                    params={hoverParams}
                                    isLoading={isParamGridLoading.value}
                                    description='Optional: Enter number of motors and total mass to estimate hover thrust. Use MOT_HOVER_LEARN rather than setting the estimated value explicitly. The learned value may be useful to help validate the generated thrust curve.'
                                    variant='narrow'
                                    suppressToolbar={true}
                                />
                            </div>
                            <div className='flex flex-1 flex-col'>
                                {linearizedResult.value && (
                                    <div className='text-sm pt-3 pl-2'>
                                        <div className='flex flex-col gap-1'>
                                            <div className='font-semibold'>Calculated Values :</div>
                                            <div className={optimizedStdDev.value && Number(linearizedResult.value.std_deviation.toFixed(3)) <= optimizedStdDev.value 
                                                ? 'flex gap-4 text-emerald-600 font-semibold' 
                                                : 'flex gap-4 text-muted-foreground'
                                            }>
                                                <div>MOT_THST_EXPO: {params.value.MOT_THST_EXPO.toFixed(3)}</div>
                                                <div>MOT_THST_HOVER: {hoverParams.value.MOT_THST_HOVER.toFixed(3)}</div>
                                            </div>
                                            <div className={optimizedStdDev.value && Number(linearizedResult.value.std_deviation.toFixed(3)) <= optimizedStdDev.value 
                                                ? 'text-emerald-600 font-semibold' 
                                                : 'text-muted-foreground'
                                            }>
                                                StdDev: {linearizedResult.value.std_deviation.toFixed(3)}
                                                {optimizedStdDev.value && Number(linearizedResult.value.std_deviation.toFixed(3)) <= optimizedStdDev.value && ' (optimal)'}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className='flex flex-1 flex-col justify-end'>
                                    <div className='flex gap-3'>
                                        <Button variant='outline' onClick={showExampleData}>
                                            Show Example
                                        </Button>
                                        <Button variant='outline' onClick={resetAll}>
                                            Reset All
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full max-w-screen-xl flex-col gap-3'>
                <PlotlyPlot
                    className='h-[450px] w-full'
                    data={thrustPlotData.value}
                    layout={thrustPlotLayout.value}
                />

                <PlotlyPlot
                    className='h-[450px] w-full'
                    data={thrustExpoPlotData.value}
                    layout={thrustExpoPlotLayout.value}
                />

                <PlotlyPlot
                    className='h-[450px] w-full'
                    data={thrustErrorPlotData.value}
                    layout={thrustErrorPlotLayout.value}
                />
            </div>
        </div>
    );
};

export default ThrustExpo;

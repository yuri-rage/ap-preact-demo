import { Ghost } from 'lucide-react';

import styles from './ghost-animation.module.css';

import NumericGrid from '@/components/numeric-data-grid';
import ParamGrid from '@/components/param-grid';
import ToolTitle from '@/components/tool-title';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardLegend } from '@/components/ui/card';
import { HelpIcon } from '@/components/ui/help-icon';
import { toast } from 'sonner';

import AppDescription from './app-description';
import ColorSwatches from './color-swatches';
import {
    DemoData,
    DEMO_COLUMNS,
    rows,
    paramConfig,
    params,
    isParamGridLoading,
    resetNumericGrid,
    incrementPwmMin,
    isGhostSpinning,
    triggerGhostSpin,
} from './store';

export const FeatureDemo = () => {
    return (
        <>
            <ToolTitle title='Web Tools Demo Page'>
                <AppDescription />
            </ToolTitle>
            <div className='flex max-w-screen-xl flex-col gap-6 p-3'>
                <Card className='w-fit'>
                    <CardLegend>
                        Button Card <HelpIcon help='A few buttons showing various styles and behaviors' />
                    </CardLegend>
                    <CardContent className='flex flex-row flex-wrap gap-3 p-3 pt-7'>
                        <Button onClick={incrementPwmMin}>Increment MOT_PWM_MIN</Button>
                        <Button variant='destructive' onClick={resetNumericGrid}>
                            Reset Data Grid
                        </Button>
                        <Button
                            variant='outline'
                            size='sm'
                            onClick={() => toast('This is a toast notification')}
                            help='Click here to display a "toast" notification'
                        >
                            Notification
                        </Button>
                        <Button
                            variant='ghost'
                            help='This is a "ghost" button with a silly animation'
                            onClick={triggerGhostSpin}
                            className='overflow-hidden'
                        >
                            <Ghost className={isGhostSpinning.value ? styles.ghostFly : ''} />
                        </Button>
                    </CardContent>
                </Card>
                <ParamGrid
                    title='Parameter Grid'
                    description='Mission Planner-style editable parameter grid. Offers a narrow variant (not shown here) with descriptions as tooltips.'
                    paramConfig={paramConfig}
                    params={params}
                    isLoading={isParamGridLoading.value}
                />
                <NumericGrid<DemoData>
                    title='Numeric Data Grid'
                    description='Customizable column headers and decimal precision + copy/paste, drag/drop, and file operations.'
                    columns={DEMO_COLUMNS}
                    rows={rows}
                />
                <Card>
                    <CardLegend>
                        Theme Colors <HelpIcon help='Shadcn/UI color palette.' />
                    </CardLegend>
                    <CardContent className='p-0 pt-4'>
                        <ColorSwatches />
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default FeatureDemo;

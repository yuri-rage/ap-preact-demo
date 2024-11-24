import type { Layout, Dash, PlotData } from 'plotly.js';

import { memo } from 'preact/compat';
import { Suspense, lazy } from 'preact/compat';

import { cn } from '@/lib/utils';

import { PlotlyErrorBoundary } from '@/components/plotly-error-boundary';
import { useTheme } from '@/components/theme-provider';

// lazy load plotly to reduce initial bundle size
const Plot = lazy(() => import('react-plotly.js'));

interface PlotlyPlotProps {
    data: Partial<PlotData>[];
    layout: Partial<Layout>;
    className?: string;
}

interface VerticalLineConfig {
    x: number;
    yMin?: number;
    yMax: number;
    color?: string;
    width?: number;
    dash?: Dash;
}

interface VerticalAnnotationConfig {
    x: number;
    label: string;
    yref?: 'paper' | 'y';
    xshift?: number;
    yshift?: number;
    y?: number;
    textAngle?: string;
    xanchor?: 'left' | 'center' | 'right';
    yanchor?: 'top' | 'middle' | 'bottom';
}

interface HorizontalLineConfig {
    y: number;
    xMin?: number;
    xMax?: number;
    color?: string;
    width?: number;
    dash?: Dash;
}

// create a vertical marker line (for use in shapes[])
export const createVerticalLine = ({
    x,
    yMin = 0,
    yMax,
    color = 'gray',
    width = 0.75,
    dash = 'dot',
}: VerticalLineConfig): Partial<Layout['shapes']>[number] => ({
    type: 'line',
    x0: x,
    x1: x,
    y0: yMin,
    y1: yMax,
    line: { color, width, dash },
});

// create a vertical annotation (for use in annotations[])
export const createVerticalAnnotation = ({
    x,
    label,
    yref = 'paper',
    xshift = -3,
    yshift = -15,
    y = 1,
    textAngle = '-90',
    xanchor = 'right',
    yanchor = 'top',
}: VerticalAnnotationConfig): Partial<Layout['annotations']>[number] => ({
    text: label,
    x,
    xshift,
    yshift,
    y,
    yref,
    textangle: textAngle,
    xanchor,
    yanchor,
    showarrow: false,
});

// create a horizontal marker line (for use in shapes[])
export const createHorizontalLine = ({
    y,
    xMin = 0,
    xMax = 100,
    color = 'gray',
    width = 0.75,
    dash = 'dot',
}: HorizontalLineConfig): Partial<Layout['shapes']>[number] => ({
    type: 'line',
    x0: xMin,
    x1: xMax,
    y0: y,
    y1: y,
    line: { color, width, dash },
});

// loading animation for suspense fallback
const LoadingPlot = ({ className }: { className?: string }) => (
    <div className={cn('flex h-full w-full items-center justify-center rounded-xl bg-muted/20', className)}>
        <div className='animate-pulse'>Loading plot...</div>
    </div>
);

const PlotlyPlot = memo(({ data, layout, className }: PlotlyPlotProps) => {
    const { theme } = useTheme();

    const bgColor = theme === 'dark' ? '#09090b' : '#ffffff';
    const fgColor = theme === 'dark' ? '#fafafa' : '#18181b';
    const gridColor = theme === 'dark' ? '#27272a' : '#e4e4e7';
    const borderColor = theme === 'dark' ? '#a1a1aa' : '#18181b';

    // default layout settings (all can be overridden by user)
    const defaultLayout: Partial<Layout> = {
        paper_bgcolor: bgColor,
        plot_bgcolor: bgColor,
        font: { color: fgColor },
        legend: {
            itemclick: false,
            itemdoubleclick: false,
        },
        margin: { b: 42, l: 55, r: 10, t: 30 },
        xaxis: {
            gridcolor: gridColor,
            zeroline: false,
            showline: true,
            linecolor: borderColor,
            mirror: true,
        } as any,
        yaxis: {
            gridcolor: gridColor,
            zeroline: false,
            showline: true,
            linecolor: borderColor,
            mirror: true,
        } as any,
        showlegend: true,
    };

    // deep merge the layout objects
    const mergedLayout = {
        ...defaultLayout,
        ...layout,
        // properly merge nested objects
        font: { ...defaultLayout.font, ...layout.font },
        legend: { ...defaultLayout.legend, ...layout.legend },
        margin: { ...defaultLayout.margin, ...layout.margin },
        xaxis: { ...defaultLayout.xaxis, ...layout.xaxis },
        yaxis: { ...defaultLayout.yaxis, ...layout.yaxis },
    };

    // default data settings (all can be overridden by user)
    const mergedData: Partial<PlotData>[] = data.map((d) => ({
        type: 'scatter' as const,
        mode: 'lines' as const,
        ...d,
    }));

    return (
        <PlotlyErrorBoundary>
            <Suspense fallback={<LoadingPlot className={className} />}>
                <Plot
                    data={mergedData}
                    layout={mergedLayout}
                    useResizeHandler={true}
                    className={cn('h-full w-full', className)}
                    config={{ displaylogo: false }}
                />
            </Suspense>
        </PlotlyErrorBoundary>
    );
});

// use Object.defineProperty instead of direct assignment for displayName
Object.defineProperty(PlotlyPlot, 'displayName', {
    value: 'PlotlyPlot',
});

export default PlotlyPlot;

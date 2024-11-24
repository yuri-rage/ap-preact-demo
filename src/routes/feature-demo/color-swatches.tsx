import { memo } from 'preact/compat';

interface ColorSwatchProps {
    name: string;
}

const ColorSwatch = memo(({ name }: ColorSwatchProps) => {
    // map of color names to their tailwind classes
    const colorClasses: Record<string, string> = {
        background: 'bg-background',
        foreground: 'bg-foreground',
        card: 'bg-card',
        'card-foreground': 'bg-card-foreground',
        popover: 'bg-popover',
        'popover-foreground': 'bg-popover-foreground',
        primary: 'bg-primary',
        'primary-foreground': 'bg-primary-foreground',
        secondary: 'bg-secondary',
        'secondary-foreground': 'bg-secondary-foreground',
        muted: 'bg-muted',
        'muted-foreground': 'bg-muted-foreground',
        accent: 'bg-accent',
        'accent-foreground': 'bg-accent-foreground',
        destructive: 'bg-destructive',
        'destructive-foreground': 'bg-destructive-foreground',
        border: 'bg-border',
        input: 'bg-input',
        ring: 'bg-ring',
        'chart-1': 'bg-chart-1',
        'chart-2': 'bg-chart-2',
        'chart-3': 'bg-chart-3',
        'chart-4': 'bg-chart-4',
        'chart-5': 'bg-chart-5',
    };

    return (
        <div 
            className={`relative m-1 h-24 w-24 ${colorClasses[name]}`} 
            title={name}
        >
            <span className='absolute left-1 top-1 text-xs text-black'>{name}</span>
            <span className='absolute bottom-1 left-1 text-xs text-white'>{name}</span>
        </div>
    );
});

const THEME_COLORS = [
    'background',
    'foreground',
    'card',
    'card-foreground',
    'popover',
    'popover-foreground',
    'primary',
    'primary-foreground',
    'secondary',
    'secondary-foreground',
    'muted',
    'muted-foreground',
    'accent',
    'accent-foreground',
    'destructive',
    'destructive-foreground',
    'border',
    'input',
    'ring',
    'chart-1',
    'chart-2',
    'chart-3',
    'chart-4',
    'chart-5',
] as const;

export const ColorSwatches = () => (
    <div className='flex flex-wrap gap-2 p-4'>
        {THEME_COLORS.map((color) => (
            <ColorSwatch 
                key={color} 
                name={color}
            />
        ))}
    </div>
);

export default ColorSwatches; 
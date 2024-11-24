import { useSignal } from '@preact/signals';
import * as React from 'react';

import { cn } from '@/lib/utils';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = React.forwardRef<
    React.Ref<any>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>
>(({ children, delayDuration = 50, ...props }, ref) => {
    // ttOpen signal is a workaround, see: https://github.com/preactjs/preact/issues/3805
    // is minimally invasive with little risk of breaking change
    const ttOpen = useSignal(false);

    return (
        <TooltipPrimitive.Root
            open={ttOpen.value}
            onOpenChange={(open) => (ttOpen.value = open)}
            delayDuration={delayDuration}
            ref={ref}
            {...props}
        >
            {children}
        </TooltipPrimitive.Root>
    );
});

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
    React.Ref<any>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            ref={ref as React.Ref<any>}
            sideOffset={sideOffset}
            className={cn(
                'z-50 max-w-[75vw] overflow-hidden rounded-md bg-primary px-3 py-1.5 text-[0.9rem] text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-muted dark:text-secondary-foreground',
                className
            )}
            {...props}
        />
    </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

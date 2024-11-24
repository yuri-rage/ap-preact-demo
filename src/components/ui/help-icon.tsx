import { CircleHelp, LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

/**
 * provides a question circle icon with a tooltip that displays help text
 * @requires TooltipProvider - must be wrapped in a TooltipProvider component from @/components/ui/tooltip
 * @example
 * <TooltipProvider>
 *   <HelpIcon help="This is help text" />
 * </TooltipProvider>
 */
interface HelpIconProps {
    help: string;
    className?: string;
    icon?: LucideIcon;
    onClick?: () => void;
}

export const HelpIcon = ({ help, className, icon: Icon = CircleHelp, onClick }: HelpIconProps) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Icon
                    className={cn('inline-block scale-75 cursor-pointer focus:outline-none', className)}
                    aria-label='Help information'
                    onClick={onClick}
                />
            </TooltipTrigger>
            <TooltipContent>{help}</TooltipContent>
        </Tooltip>
    );
};

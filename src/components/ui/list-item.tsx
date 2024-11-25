import React from 'preact/compat';

import { cn } from '@/lib/utils';

import { NavigationMenuLink } from '@/components/ui/navigation-menu';

export const ListItem = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<'a'> & { onClick?: () => void; icon?: string }
>(({ className, title, children, onClick, icon, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    onClick={onClick}
                    {...props}
                >
                    <div className='flex items-center gap-3'>
                        <div className='flex min-h-[4rem] w-16 flex-shrink-0 items-center'>
                            {icon && <img src={icon} alt='' className='h-full w-full' />}
                        </div>
                        <div className='flex min-h-[4rem] flex-col justify-center gap-1'>
                            <div className='text-sm font-medium'>{title}</div>
                            <p className='text-sm text-muted-foreground'>{children}</p>
                        </div>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    );
});

ListItem.displayName = 'ListItem';

export default ListItem;

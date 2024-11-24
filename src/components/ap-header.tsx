import { useScrollDirection } from '@/hooks/use-scroll-direction';
import webTools from '@/utils/webtools';

import { Button } from '@/components/ui/button';
import ListItem from '@/components/ui/list-item';
import { ModeToggle } from '@/components/ui/mode-toggle';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import apLogo from '@/assets/ardupilot.png';
import githubLogo from '@/assets/github-logo.svg';
import apIcon from '@/assets/icon-ardupilot.png';

export function APHeader() {
    const isScrollingUp = useScrollDirection();
    const mainTools = webTools.filter((tool) => !tool.dev && tool.href !== '/');
    const devTools = webTools.filter((tool) => tool.dev);

    return (
        <header
            className={`sticky top-0 z-50 w-full max-w-screen-xl border-b bg-background/70 p-3 backdrop-blur-sm transition-transform duration-300 ${
                isScrollingUp ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <a href='/' className='flex-shrink-0'>
                        <img src={apLogo} className='h-9' alt='ArduPilot Logo' />
                    </a>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Web Tools</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className='grid max-h-[calc(100vh-4rem)] w-[550px] gap-2 overflow-y-auto p-4'>
                                        {mainTools.map((tool) => (
                                            <ListItem
                                                key={tool.title}
                                                href={tool.href}
                                                title={tool.title}
                                                icon={tool.icon}
                                            >
                                                {tool.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Works in Progress</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className='grid max-h-[calc(100vh-4rem)] w-[550px] gap-2 overflow-y-auto p-4'>
                                        {devTools.map((tool) => (
                                            <ListItem
                                                key={tool.title}
                                                href={tool.href}
                                                title={tool.title}
                                                icon={tool.icon}
                                            >
                                                {tool.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <a href='feature-demo' className='text-sm font-semibold hover:underline'>
                        Feature Demo
                    </a>
                </div>

                <div className='flex items-center gap-1'>
                    <Button variant='ghost' size='icon'>
                        <a
                            href='https://www.ardupilot.org'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='ArduPilot Home'
                        >
                            <img src={apIcon} className='h-5' alt='ArduPilot' />
                        </a>
                    </Button>
                    <Button variant='ghost' size='icon'>
                        <a
                            href='https://github.com/ArduPilot/WebTools'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='GitHub repository'
                        >
                            <img src={githubLogo} className='h-5 w-5 dark:invert' alt='GitHub' />
                        </a>
                    </Button>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}

export default APHeader;

import webTools from '@/utils/webtools';

import ToolTitle from '@/components/tool-title';
import { Card, CardContent } from '@/components/ui/card';

export const Home = () => {
    const mainTools = webTools.filter((tool) => !tool.dev && tool.href !== '/');

    return (
        <>
            <ToolTitle title='ArduPilot Web Tools'>
                A number of web-based tools for ArduPilot log and parameter review. These tools operate on the
                client side; no data is uploaded to any server at any time. Many of the tools have a "Open In"
                button - this allows a log that has been opened in one tool to be transferred to another. The
                selected tool will be opened in a new tab and the log loaded.
            </ToolTitle>
            <div className='flex flex-col gap-3 p-3'>
                {mainTools.map((link) => (
                    <a href={link.href}>
                        <Card className='max-w-screen-xl items-center border-none p-3 shadow-none transition duration-300 ease-in-out hover:bg-accent'>
                            <CardContent className='items-top flex gap-3 p-0'>
                                <div className='h-24 w-36 flex-shrink-0'>
                                    {link.icon && (
                                        <img src={link.icon} alt={link.title} className='h-full w-full' />
                                    )}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='text-xl font-semibold text-primary'>{link.title}</div>
                                    <span className='text-muted-foreground transition duration-300 ease-in-out'>
                                        {link.description}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Home;

/**
 * use ToolTitle at the top of every web tool
 */

export const ToolTitle = ({ title, children }: { title: string; children?: React.ReactNode }) => {
    return (
        <div className='flex max-w-screen-xl flex-col gap-4 p-3 pb-6'>
            <span className='text-3xl font-semibold'>{title}</span>
            <div className='text-muted-foreground'>{children}</div>
        </div>
    );
};

export default ToolTitle;

import { useSignal } from '@preact/signals';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

interface FilePickerProps {
    onFileChange: (file: File) => void;
    accept?: string;
    label?: string;
    help?: string;
    className?: string;
}

export const FilePicker = ({
    onFileChange,
    accept = '.txt,.param,.parm',
    label = 'Choose file',
    help = 'Load file contents',
    className,
}: FilePickerProps) => {
    const fileName = useSignal<string>('No file chosen');

    const handleFileChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];

        if (!file) {
            fileName.value = 'No file chosen';
            return;
        }

        fileName.value = file.name;
        onFileChange(file);
        // reset the input so the same file can be selected again
        input.value = '';
    };

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div className={cn('flex flex-row items-center gap-2', className)}>
                    <Button onClick={() => document.getElementById('file-picker')?.click()}>{label}</Button>
                    <span className='text-sm font-semibold text-muted-foreground'>
                        {fileName}
                        <Input
                            id='file-picker'
                            type='file'
                            accept={accept}
                            onChange={handleFileChange}
                            className='absolute inset-0 cursor-pointer opacity-0'
                        />
                    </span>
                </div>
            </TooltipTrigger>
            <TooltipContent>{help}</TooltipContent>
        </Tooltip>
    );
};

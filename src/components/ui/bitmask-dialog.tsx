import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface BitmaskDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    options: Record<string, string>;
    value: number;
    onChange: (value: number) => void;
}

export function BitmaskDialog({ open, onOpenChange, title, options, value, onChange }: BitmaskDialogProps) {
    const handleCheckboxChange = (bitValue: number, checked: boolean) => {
        const newValue = checked
            ? value | (1 << bitValue) // set bit
            : value & ~(1 << bitValue); // clear bit
        onChange(newValue);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    {Object.entries(options).map(([bit, description]) => {
                        const bitValue = parseInt(bit);
                        const isChecked = (value & (1 << bitValue)) !== 0;

                        return (
                            <div key={bit} className='flex items-center space-x-2'>
                                <Checkbox
                                    id={`bit-${bit}`}
                                    checked={isChecked}
                                    onCheckedChange={(checked) =>
                                        handleCheckboxChange(bitValue, checked as boolean)
                                    }
                                />
                                <Label htmlFor={`bit-${bit}`} className='text-sm'>
                                    {description}
                                </Label>
                            </div>
                        );
                    })}
                </div>
            </DialogContent>
        </Dialog>
    );
}

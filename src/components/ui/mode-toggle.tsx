import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    return (
        <Button
            className='scale-[115%]'
            variant='ghost'
            size='iconsm'
            onClick={toggleTheme}
            aria-label='Toggle theme'
        >
            {theme === 'dark' ? <Moon /> : <Sun />}
        </Button>
    );
};

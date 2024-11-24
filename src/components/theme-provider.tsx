import { ComponentChildren } from 'preact'
import { createContext, useContext, useEffect } from 'preact/compat'
import { signal, type Signal } from '@preact/signals'

type Theme = 'dark' | 'light'

interface ThemeProviderProps {
    children: ComponentChildren
    storageKey?: string
}

interface ThemeProviderState {
    theme: Signal<Theme>
    setTheme: (theme: Theme) => void
}

interface ThemeContextValue {
    theme: Theme
    themeSignal: Signal<Theme>
    setTheme: (theme: Theme) => void
}

const getInitialTheme = (storageKey: string): Theme => {
    // check local storage first
    const storedTheme = localStorage.getItem(storageKey)
    if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme
    }

    // fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
}

const createThemeState = (storageKey: string): ThemeProviderState => {
    const theme = signal<Theme>(getInitialTheme(storageKey))

    return {
        theme,
        setTheme: (newTheme: Theme) => {
            localStorage.setItem(storageKey, newTheme)
            theme.value = newTheme
        }
    }
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export const ThemeProvider = ({
    children,
    storageKey = 'vite-ui-theme',
    ...props
}: ThemeProviderProps) => {
    const state = createThemeState(storageKey)

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(state.theme.value)
    }, [state.theme.value])

    return (
        <ThemeProviderContext.Provider {...props} value={state}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeProviderContext)

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }

    return {
        theme: context.theme.value,
        themeSignal: context.theme,
        setTheme: context.setTheme
    }
}

export default ThemeProvider

import '@/style.css';

import { signal } from '@preact/signals';
import { render } from 'preact';
import { lazy, Route, ErrorBoundary, LocationProvider, Router } from 'preact-iso';

import webTools from '@/utils/webtools';

import APHeader from '@/components/ap-header';
import ThemeProvider from '@/components/theme-provider';
import Spinner from '@/components/ui/spinner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';

const NotFound = lazy(() => import('@/routes/_404'));
const loading = signal(true);

const App = () => {
    return (
        <ThemeProvider>
            <TooltipProvider>
                <APHeader />
                {/* loading spinner animation */}
                {loading.value && <Spinner />}
                <div className={loading.value ? 'hidden' : ''} aria-live='polite'>
                    <LocationProvider>
                        <ErrorBoundary>
                            <Router
                                onLoadStart={() => (loading.value = true)}
                                onLoadEnd={() => (loading.value = false)}
                            >
                                {/* routes are dynamically generated */}
                                {/**** edit utils/webtools.ts to add new tools ****/}
                                {webTools.map((tool) => (
                                    <Route key={tool.title} path={tool.href} component={tool.component} />
                                ))}

                                <NotFound default />
                            </Router>
                        </ErrorBoundary>
                    </LocationProvider>
                </div>
            </TooltipProvider>
            <Toaster />
        </ThemeProvider>
    );
};

render(<App />, document.getElementById('app'));

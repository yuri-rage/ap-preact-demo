import { Component, ErrorInfo } from 'preact';

interface Props {
    children: preact.ComponentChildren;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class PlotlyErrorBoundary extends Component<Props, State> {
    state = { hasError: false };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Plotly error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='rounded-md bg-red-50 p-4 text-sm text-red-500 dark:bg-red-950 dark:text-red-400'>
                    Failed to render plot. Please try refreshing the page.
                </div>
            );
        }

        return this.props.children;
    }
}

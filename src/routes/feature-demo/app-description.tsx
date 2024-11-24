const LINK_STYLES = 'text-blue-700 hover:underline font-semibold';

const AppDescription = () => {
    return (
        <div className='space-y-2 text-sm'>
            <p>This application is built using the following technologies:</p>
            <ul className='list-inside list-disc space-y-1 pl-4'>
                <li>
                    <a href='https://preactjs.com/' className={LINK_STYLES}>
                        Preact
                    </a>{' '}
                    +{' '}
                    <a href='https://www.typescriptlang.org/' className={LINK_STYLES}>
                        TypeScript
                    </a>{' '}
                    for the frontend
                </li>
                <li>
                    <a href='https://github.com/preactjs/preact-iso' className={LINK_STYLES}>
                        preact-iso
                    </a>{' '}
                    for single-page app routing
                </li>
                <li>
                    <a href='https://ui.shadcn.com/' className={LINK_STYLES}>
                        Shadcn/UI
                    </a>{' '}
                    and{' '}
                    <a href='https://tailwindcss.com/' className={LINK_STYLES}>
                        Tailwind CSS
                    </a>{' '}
                    for UI components and styling
                </li>
                <li>
                    <a href='https://www.ag-grid.com/' className={LINK_STYLES}>
                        AG Grid Community
                    </a>{' '}
                    for data grid components
                </li>
                <li>
                    <a href='https://plotly.com/javascript/react/' className={LINK_STYLES}>
                        React Plotly.js
                    </a>{' '}
                    for chart components
                </li>
                <li>
                    <a href='https://vitejs.dev/' className={LINK_STYLES}>
                        Vite
                    </a>{' '}
                    to manage the build process and dev server
                </li>
            </ul>
            <p>
                Development requires only{' '}
                <a href='https://nodejs.org/' className={LINK_STYLES}>
                    Node.js
                </a>
                , with all other dependencies rather transparently managed through{' '}
                <a href='https://docs.npmjs.com/' className={LINK_STYLES}>
                    npm (Node Package Manager)
                </a>
                . There are no git submodules, so the project is essentially self-contained.
            </p>
            <p>
                Generated output is a standard static HTML/CSS/JS application that can be hosted on nearly any
                web server without the need for additional back-end services.
            </p>
            <p>
                Preact offers React's functionality in a lighter package, with built-in{' '}
                <a href='https://preactjs.com/guide/v10/signals/' className={LINK_STYLES}>
                    signals
                </a>{' '}
                for more easily managing state. Despite the many project files (mostly boilerplate), this
                framework excels in creating reusable, feature-rich components with good separation of
                concerns. TypeScript helps catch errors during development and improves readability.
            </p>
            <p>
                Plotly.js is by far the heaviest of the included libraries, but it offers the most flexibility
                over alternatives like Chart.js.
            </p>
            <p>
                The{' '}
                <a href='thrust-expo' className={LINK_STYLES}>
                    Thrust Expo
                </a>{' '}
                tool has been ported to this new framework as a fully featured example. Additionally, the
                entire site is color themed - click on the sun/moon icon in the upper right to toggle between
                light and dark themes. Additional themes are easily added via <code>src/style.css</code>.
            </p>
        </div>
    );
};

export default AppDescription;

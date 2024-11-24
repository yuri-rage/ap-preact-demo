# ArduPilot Web Tools Preact Demo

Developed as an educational experience (for Yuri) and proof of concept to explore the possibility of using modern web technologies over pure HTML/JS/CSS. Temporarily hosted at https://demo.yurirage.com.

While the project may look daunting due to the number of files and `npm` managed dependencies, many of the files are generated/boilerplate without much need for modification or maintenance. The core files are in the `src` directory, with top level components in `src/routes`, and underlying UI in `src/components`.

There are references throughout to React, but any React-specific components are transparently managed via Vite and `preact-compat`.

### Workflow Note

Admittedly, I made heavy use of [Cursor AI](https://www.cursor.com/) to speed development (as evidenced by the `.cursorrules` file), but I review most all generated code and make significant edits. I find this workflow helpful, especially for web development, as AI tools have proven pretty good at generating web app code, and I learn a lot from the output, even when it requires tweaking.

## Tech Stack

-   **[Preact](https://preactjs.com/) + [TypeScript](https://www.typescriptlang.org/)** - Core frontend framework
-   **[preact-iso](https://github.com/preactjs/preact-iso)** - Single-page app routing
-   **[Shadcn/UI](https://ui.shadcn.com/) & [Tailwind CSS](https://tailwindcss.com/)** - UI components and styling
-   **[AG Grid Community](https://www.ag-grid.com/)** - Data grid components
-   **[React Plotly.js](https://plotly.com/javascript/react/)** - Chart components
-   **[Vite](https://vitejs.dev/)** - Build process and dev server

## Example Implementation

The [Thrust Expo tool](https://demo.yurirage.com/thrust-expo) has been fully implemented as a comprehensive example. The [Feature Demo page](https://demo.yurirage.com/feature-demo) includes additional examples. Remaining Web Tool links are to the existing ArduPilot tools for sake of having a fairly complete landing page and navbar.

## Development Setup

The project requires only [Node.js](https://nodejs.org/) for development. All other dependencies are managed through [npm (Node Package Manager)](https://docs.npmjs.com/). The project is self-contained with no git submodules.

### Prerequisites

-   Install [Node.js](https://nodejs.org/) (LTS version recommended)
-   Verify installation:

```bash
node --version
npm --version
```

### Development Environment

-   Clone the repository:

```bash
git clone https://github.com/yuri-rage/ap-preact-demo.git
cd ap-preact-demo
```

-   Install dependencies:

```bash
npm install
```

-   Start the development server:

```bash
npm run dev
```

-   The application will be available at `http://localhost:5173/` and will automatically update as you make changes.

## Deployment

The application builds to a standard static HTML/CSS/JS bundle that can be hosted on nearly any web server without additional backend services.

-   To build for local preview:

```bash
npm run preview
```

-   To build for production:

```bash
npm run build
```

-   The static site can be found in the `dist` folder.

The site is currently hosted via GitHub Pages on a custom domain (https://demo.yurirage.com). The `public/CNAME` file is configured to point to that domain. Deployment is handled via the Node.js `gh-pages` package. To deploy under this configuration, the following commands are used to update the `gh-pages` branch and push to the remote repository:

```bash
# one-time setup
git checkout --orphan gh-pages
git rm -rf .
git commit --allow-empty -m "initial gh-pages commit"
git push origin gh-pages
git checkout master

# run for each build/deployment
npm run build
npm run deploy
```

Because the site is a single-page app with client-side routing, some special handling is required to ensure that routes are correctly handled by the server. This is handled by a [Cloudflare Worker](https://developers.cloudflare.com/workers/) script that redirects all requests to the index.html file, except for static files. The script is included in `/cloudflare-worker.js` as an example, but must be deployed to Cloudflare to take effect. Other servers may require similar.

## Key Features

-   **Preact Signals**: Built-in [signals](https://preactjs.com/guide/v10/signals/) for state management (more easily managed than React's `useState` and related hooks)
-   **Component Architecture**: Most top level components are only a few lines of code, focused on layout and UI, with most business logic delegated to reusable child components and/or "stores" to manage data and behavior.
-   **Type Safety**: TypeScript integration reduces errors and improves maintainability
-   **Theming**: Built-in light/dark mode theming system (configurable via `src/style.css`); easily extended

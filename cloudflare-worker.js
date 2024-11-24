/**
 * Cloudflare Worker to redirect all requests to the index.html file, except for static files.
 * This is necessary because the site is a single-page app with client-side routing,
 * so URLs like `https://demo.yurirage.com/thrust-expo` will not be served without
 * redirecting through index.html.
 */

export default {
    async fetch(request) {
        const url = new URL(request.url);

        // let static files pass through
        if (url.pathname.match(/\.(js|css|png|jpg|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
            return fetch(request);
        }

        // otherwise, return the index.html content (that handles client-side routing)
        const response = await fetch(`${url.origin}/index.html`);
        return new Response(response.body, {
            headers: {
                ...response.headers,
                'Content-Type': 'text/html',
                'Cache-Control': 'no-cache',
            },
            status: 200,
        });
    },
};

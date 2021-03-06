# olliejt-starter-routify

A Svelte project using [Routify](https://github.com/sveltech/routify) to manage routes, SSR, Service Worker and more...

## Author

Project lead dev: Ollie Taylor ([OllieJT](https://github.com/OllieJT)) ==> [contact@olliejt.com](mailto:contact@olliejt.com)

## Get started

```zsh
npx degit github:OllieJT/olliejt-starter-routify YOUR_PROJECT_NAME
```

### npm scripts

| Syntax        | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `dev`         | Development (port 5000)                                                   |
| `dev:nollup`  | Development with crazy fast rebuilds (port 5000)                          |
| `dev:dynamic` | Development with dynamic imports                                          |
| `build`       | Build a bundled app with SSR + prerendering and dynamic imports           |
| `serve`       | Run after a build to preview. Serves SPA on 5000 and SSR on 5005          |
| `deploy:*`    | Deploy to netlify or now                                                  |
| `export`      | Create static pages from content in dist folder (used by `npm run build`) |
| `format`      | Format all files in /src with prettier                                    |

### SSR and pre-rendering

SSR and pre-rendering are included in the default build process.

`npm run deploy:(now|netlify)` will deploy the app with SSR and prerendering included.

To render async data, call the `$ready()` helper whenever your data is ready.

If \$ready() is present, rendering will be delayed till the function has been called.

Otherwise it will be rendered instantly.

See [src/pages/example/api/[showId].svelte](https://github.com/sveltech/routify-starter/blob/master/src/pages/example/api/%5BshowId%5D.svelte) for an example.

### Production

-   For SPA or SSR apps please make sure that url rewrite is enabled on the server.
-   For SPA redirect to `__dynamic.html`.
-   For SSR redirect to the lambda function or express server.

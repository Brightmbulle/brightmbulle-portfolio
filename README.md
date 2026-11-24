# Bright Mbulle | Portfolio

Personal portfolio of Bright Mbulle, Full Stack Developer and UI/UX Designer.
A plain HTML, CSS and JavaScript site hosted on **Cloudflare Pages**.

Live: https://brightmbulle.pages.dev

## Run locally

```bash
npm install
npm run dev        # builds dist/ and serves it at http://localhost:8788
```

## Deploy

```bash
npx wrangler login # first time only
npm run deploy     # builds dist/ and uploads it to the "brightmbulle" Pages project
```

## How the hosting is set up

| File | Purpose |
|---|---|
| `wrangler.jsonc` | Pages project name (`brightmbulle`) and output folder (`dist/`) |
| `scripts/build.mjs` | Copies only the files the site needs into `dist/`; original design files (SVG/PNG/JPG sources) stay in the repo but are never uploaded |
| `_headers` | Security headers and browser caching rules |
| `404.html` | Page shown for unknown URLs |

After editing `assets/css/styles.css` or `assets/js/main.js`, bump the `?v=` tag on its link in
`index.html` so visitors get the new version right away.

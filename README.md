# Bright Mbulle | Portfolio

Personal portfolio of Bright Mbulle, Full Stack Developer and UI/UX Designer.
A plain HTML, CSS and JavaScript site hosted on **Cloudflare Workers** as static assets.

Live: https://brightmbulle.<account-subdomain>.workers.dev

## Run locally

```bash
npm install
npm run dev        # http://localhost:8787
```

## Deploy

```bash
npx wrangler login # first time only
npm run deploy
```

## How the hosting is set up

| File | Purpose |
|---|---|
| `wrangler.jsonc` | Worker name (`brightmbulle`) and static assets settings |
| `.assetsignore` | Files kept in the repo but never uploaded (tooling, original design files) |
| `_headers` | Security headers and browser caching rules |
| `404.html` | Page shown for unknown URLs |

After editing `assets/css/styles.css` or `assets/js/main.js`, bump the `?v=` tag on its link in
`index.html` so visitors get the new version right away.

# Galexia

The galexia.agency website: Nuxt 4, prerendered to static files and served by Cloudflare Workers static assets. Blog, legal, portfolio and testimonial content comes from the browser WordPress CMS at `cms.galexia.agency` ([`@joebailey26/static-wordpress`](https://github.com/joebailey26/static-wordpress)), loaded at build time by [`@joebailey26/nuxt-static-wordpress`](https://github.com/joebailey26/static-wordpress/tree/master/packages/nuxt). The forms post to the Worker in `worker/`, which checks Cloudflare Turnstile and emails the submission.

## Setup

Node 24.18.0 (`.nvmrc`) and pnpm 10.11.1. The `@joebailey26` packages come from GitHub Packages, which needs a token with `read:packages` even for public packages:

```powershell
$env:GITHUB_PACKAGES_TOKEN = gh auth token   # after: gh auth refresh -s read:packages
pnpm install
$env:CMS_API_URL = 'https://cms.galexia.agency'
$env:CMS_BUILD_TOKEN = '<the CMS build token>'
pnpm dev
```

`pnpm generate` writes `.output/public`; `pnpm exec wrangler dev` serves it with the forms Worker (put `TURNSTILE_SECRET_KEY` in `.dev.vars`). Checks: `pnpm lint:scripts`, `pnpm lint:styles`, `pnpm typecheck` (`nuxt typecheck` for the app, then `worker/tsconfig.json` for the forms Worker, its tests and `cms/worker.ts`, which needs `cms/` installed), `pnpm test:forms`.

## Content

`cms/cms.config.json` maps WordPress categories to sections: `blog` (`/blog/<slug>/`), `legal` (`/legal/<slug>/`), and `portfolio` and `testimonials`, which have no pages of their own (the home page carousel and the footer). Portfolio posts use the **Website URL** field and appear only when it is set; any post's **Meta description** field overrides its excerpt as the page description. Location pages (`/locations/<town>/`) are listed in `app/utils/locations.ts`.

The content was imported from the old `blog.galexia.agency` WordPress backup with `static-wordpress import --archive <backup.zip> --rename-meta _yoast_wpseo_metadesc=seo_description --fetch-missing true`. See `cms/README.md`.

## Images

Raster images live in `public/img/` and render through `<SiteImage>`, which asks Cloudflare Image Transformations (`/cdn-cgi/image/`) for AVIF/WebP at 1x and 2x. CMS images in posts get a `srcset` the same way. Transformations are on only for the `master` Workers Builds build (`/cdn-cgi/image` does not exist in `nuxt dev`, `wrangler dev` or preview URLs); set `IMAGE_TRANSFORMATIONS=true` or `false` to override. Enable Transformations on the `galexia.agency` zone and allow `cms.galexia.agency` as a source.

## Forms

`useForm(name)` (in `app/composables/useForm.ts`) keeps a draft in localStorage, enables submit once the browser's validation passes and Turnstile has a token, and posts to `/api/forms/<name>`: `contact`, `lead-questionnaire`, `email-checkup`, `brand-identity` or `seo`. The Worker verifies the Turnstile token (action = form name, hostname = the request's) and emails every field to `FORMS_TO` through the `FORMS_EMAIL` Send Email binding, with the visitor's address as Reply-To.

## Deployment (Cloudflare Workers Builds)

- **Site**: build command `pnpm build`, deploy command `pnpm exec wrangler deploy`, preview command `pnpm exec wrangler preview`. Variables: `NODE_VERSION=24.18.0`, `GITHUB_PACKAGES_TOKEN`, `CMS_API_URL`, `CMS_BUILD_TOKEN`, `TURNSTILE_SITE_KEY`. Worker secret: `TURNSTILE_SECRET_KEY`.
- **CMS**: root `/cms`, see `cms/README.md`. Publishing in the CMS triggers a production site build.

Until DNS moves off Netlify, `netlify.toml` tells Netlify to skip every build, so galexia.agency keeps serving its last Netlify deploy; delete it with the Netlify site after the cutover. `public/_headers` and `public/_redirects` carry over the security headers and redirects from Netlify. `sitemap.xml` is generated from the prerendered pages, excluding the pages the Netlify sitemap excluded.

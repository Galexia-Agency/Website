# galexia.agency CMS

The browser WordPress CMS at `cms.galexia.agency` runs [`@joebailey26/static-wordpress`](https://github.com/joebailey26/static-wordpress/tree/master/packages/cms); its README covers the editor, synchronisation, imports, deployment and limits. This folder holds what belongs to this site:

- `cms.config.json`: sections `blog`, `legal`, `portfolio` and `testimonials` (WordPress categories of the same slugs), and the fields `link` (portfolio website URL) and `seo_description`.
- `worker.mjs`: the Worker entry, `createCms(config)`.
- `wrangler.jsonc`: production D1 `galexia-cms` and R2 `galexia-cms-files`; previews use `galexia-cms-preview` and `galexia-cms-preview-files`, with website builds disabled.
- `access-policy.json`: the Access allowlist.

## Local setup

```powershell
$env:GITHUB_PACKAGES_TOKEN = gh auth token
pnpm --dir cms install --frozen-lockfile
pnpm --dir cms run runtime
Copy-Item cms/.dev.vars.example cms/.dev.vars
pnpm --dir cms run db:local
pnpm --dir cms run dev
```

## Workers Builds

Root `/cms`, build command `pnpm run build:ci`, deploy command `pnpm run deploy:production`, Preview command `pnpm run deploy:preview`, watch path `cms/**`. Variables: `NODE_VERSION=24.18.0`, `GITHUB_PACKAGES_TOKEN`. Worker secrets: `CMS_BUILD_TOKEN` (a separate one in Previews) and `CF_BUILD_API_TOKEN` (production only).

## Importing the old blog

```powershell
pnpm --dir cms run import --archive <Galexia-Blog backup>.zip --rename-meta _yoast_wpseo_metadesc=seo_description --fetch-missing true
```

This writes `cms/migration/galexia-content.zip` (59 published posts: blog 36, legal 8, portfolio 6, testimonials 9; 18 drafts; 364 media files) and `migration-report.json`. Import the ZIP with **Import migration/backup** in the editor, review every section, then **Sync now**.

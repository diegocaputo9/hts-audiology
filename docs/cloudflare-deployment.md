# Cloudflare Pages deployment

This repository produces a static export, requiring no database or Node.js server in production.

1. Open Workers & Pages in the intended Cloudflare account.
2. Create a Pages application and import `diegocaputo9/hts-audiology`. Authorize Cloudflare to access this private repository.
3. Select `main`, the Next.js Static HTML Export preset, build command `npm run build`, and output directory `out`. The repository root is the build root. Use Node.js 22 or newer.
4. Deploy. Check the generated `pages.dev` address and direct route loads such as `/hearing/` and `/assessment/`.
5. Confirm `_headers` rules are applied to responses, especially CSP, referrer policy, frame restrictions, and MIME-sniffing prevention. Verify the site and optional map work under the production CSP.
6. Use preview deployments for review. Before making this the live clinic site, confirm the checklist in `launch-notes.md`, update `metadataBase` and Open Graph URLs in `src/app/layout.tsx` to the intended domain, and remove the two review-only noindex controls only when ready for public indexing.
7. Add the existing domain through Cloudflare's custom-domain flow. Coordinate DNS with the practice so the current site and email are not disrupted. No domain or DNS changes have been made by this build.

`wrangler.toml` supplies the Pages output directory for CLI deployment if preferred. Do not put Cloudflare tokens in source control.

Sources checked November 14, 2026:
- [Cloudflare: deploy a static Next.js site](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Cloudflare: custom response headers](https://developers.cloudflare.com/pages/configuration/headers/)

The included private Sites preview is independent from deployment into the client's own Cloudflare account.

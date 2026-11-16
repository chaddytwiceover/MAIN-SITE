# Vercel deployment

Vercel hosts this Next.js application. Name.com is the domain registrar. No Apache configuration, static-export postbuild, FTP upload, or IONOS workflow is required.

## Project settings

Connect `chaddytwiceover/MAIN-SITE` in Vercel with:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Root directory | Repository root |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | Framework default; disable any `out` override |
| Production branch | `main` |
| Node.js | 22.x or a compatible supported version |

These are expected settings, not a claim that the remote project was changed. Vercel's Git integration handles deployments. Existing GitHub CI runs build, lint, type checks, tests, and CodeQL.

## Local verification

```sh
npm ci
npm run lint
npm run typecheck
npm test -- --runInBand
npm run build
npm run preview
```

Open http://localhost:3003. `npm start` uses port 3000. Both commands serve the production `.next/` build. Do not set `output: 'export'` or restore the old `out/` postbuild scripts.

Check the homepage, lab catalog, each game page, socials, notes, guestbook, pricing, robots.txt, sitemap.xml, and an unknown route. Test game input, fullscreen entry/exit, and mobile orientation separately; a successful build does not validate external game availability or gameplay.

## Domain at Name.com

The repository's current primary domain is `twiceover.dev`, with `www.twiceover.dev` redirected to it in `vercel.json`.

1. Add both names to the Vercel project's Domains settings.
2. Use the exact DNS record values Vercel displays for that project.
3. If Name.com manages the authoritative DNS, update those records there. If nameservers point elsewhere, update the records with that DNS provider.
4. Preserve unrelated mail and verification records.
5. Wait for Vercel to report valid configuration and HTTPS availability, then verify both names.

The domain does not need to transfer registrars. This repository change does not edit DNS or Vercel account settings.

## Response headers and redirects

`vercel.json` carries the former Apache response headers, including the iframe allowlist for the lab games, and the www-to-apex redirect. These platform settings apply on Vercel; local `next start` does not emulate `vercel.json` headers or redirects. Verify them on a Vercel preview/production deployment before declaring the migration live.

## Troubleshooting

- An error mentioning `out/lab` or `.htaccess` means the obsolete postbuild command is still running. Confirm the deployment uses the updated commit and `npm run build`.
- An output-directory error can indicate an old `out` override in Vercel project settings. Use the Next.js framework default.
- A wrong page after deployment requires checking Vercel's deployed commit and production domain assignment.
- A blocked game iframe requires checking the deployed CSP frame-src list, the game URL, and the game's own embedding policy.

References: [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [custom domains](https://vercel.com/docs/domains/set-up-custom-domain), [Git integration](https://vercel.com/docs/git).

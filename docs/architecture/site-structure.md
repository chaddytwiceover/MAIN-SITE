# Site architecture

The site uses the Next.js App Router on Vercel. Current content pages are prerendered; there is no application database.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Minimalist bento homepage with introduction, featured games, latest note, and social links |
| `/lab/` | Lab catalog |
| `/lab/[slug]/` | Playable game embed and project details |
| `/whatever/` | Notes and build updates |
| `/socials/` | Social profiles and contact links |
| `/guestbook/` | Email-based guestbook invitation |
| `/pricing/` | Services and pricing |

`src/app/robots.ts` generates `robots.txt`; `src/app/sitemap.ts` generates the sitemap. Static files live in `public/`.

## Content

`src/lib/lab-projects.ts` is the single game registry, used by the homepage, lab catalog, and generated game routes. Update its tags, status, metadata, or embed URLs there.

`src/lib/posts.ts` holds notes. The homepage selects the most recent entry by date.

## Components and styles

Route files are Server Components by default. Interactive pages use client components for animations and game controls. Shared components live in `src/components/`; reduced-motion support lives in `src/lib/useSafeAnimation.ts`.

Homepage styling is scoped through `src/app/home.module.css`. Shared CSS and the homepage navigation/footer palette are in `src/app/globals.css`. The animated Three.js background is disabled on the homepage and game player routes.

## Build and hosting

1. `npm ci` installs the locked dependencies.
2. `npm run build` creates the Next.js production build in `.next/`.
3. `npm run preview` serves that build locally on port 3003.
4. GitHub Actions runs build, lint, type checks, tests, and CodeQL.
5. Vercel's Git integration handles preview and production deployments.

The app uses trailing slashes and unoptimized images, as configured in `next.config.js`. `vercel.json` contains production response headers and the www redirect. The domain remains registered at Name.com. Deployment details are in [the deployment guide](../deployment.md).

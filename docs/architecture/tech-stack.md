# Tech stack

The site uses Next.js 16, React 19, TypeScript, and Node.js 22 or later. `package.json` declares compatible versions; `package-lock.json` records the installed dependency tree.

## Application

- Next.js App Router, with `output: 'export'` and `trailingSlash: true`.
- React Server Components for static content; client components for interactions.
- TypeScript with strict checks and `@/` mapped to `src/`.
- Lab metadata in `src/lib/lab-projects.ts`; notes in `src/lib/posts.ts`.

## Presentation

- Tailwind CSS v4 through `@tailwindcss/postcss` and `postcss.config.mjs`.
- Scoped CSS Modules for the bento homepage, plus shared `src/app/globals.css`.
- Framer Motion for page transitions and interactive elements.
- Three.js for the background on supporting pages; disabled on the homepage and game routes.
- Local system font stacks with no external font download requirement.

## Quality checks

- ESLint flat configuration in `eslint.config.mjs`.
- TypeScript configuration in `tsconfig.json`.
- Jest, jsdom, and React Testing Library for game player behavior.
- GitHub Actions for build, lint, type checks, tests, and CodeQL.

## Hosting

The production build exports to `out/` for IONOS / Apache. No Next.js server is needed in production. `npm start` and `npm run preview` use `scripts/static-preview.mjs` to serve an existing export locally.

`scripts/copy-htaccess.mjs` copies Apache configuration. `scripts/lab-deployment.mjs` validates game frames, writes the deployed revision manifest, and can verify a live deployment.

`public/demos/` contains standalone local games; the lab registry also points to externally hosted Vercel game builds. `.github/workflows/` and `.deploy-now/` retain the IONOS deployment setup.

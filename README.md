# chaddytwiceover

My corner of the internet: games, experiments, notes, and social links.

Live site: [twiceover.dev](https://twiceover.dev)

The Contact Sheet portfolio uses Next.js App Router, React, TypeScript, Tailwind CSS, and locally served Anton and IBM Plex Mono. The site deploys to Vercel using its Next.js integration; the domain is registered with Name.com. See `package.json` for dependency versions.

## Local development

Use Node.js 22 or later (`.nvmrc`) and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). On Windows, installing dependencies in a OneDrive-synced folder may take longer than in a local, unsynced folder.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server on port 3000 |
| `npm run build` | Next.js production build in `.next/` |
| `npm run preview` | Serve the production build on port 3003 |
| `npm start` | Serve the production build on port 3000 |
| `npm run typecheck` | TypeScript checks |
| `npm run lint` | ESLint using `eslint.config.mjs` |
| `npm test -- --runInBand` | Component tests |

Build before using the preview server. Set `PORT` to override its default port.

## Where to edit

- `src/app/page.tsx` and `src/components/ProjectFrames.tsx`: featured game, paired stills, and selected work.
- `src/app/globals.css`: Contact Sheet layout, typography, responsive frame controls, and game shell.
- `src/lib/lab-projects.ts`: project order, captions, responsive image dimensions, launch labels, and embed URLs.
- `src/lib/posts.ts`: notes displayed on `/whatever`.
- `src/app/socials/page.tsx`: the four profile destinations.
- `src/components/`: shared navigation, project presentation, and the iframe game player.
- `public/contact/`: matched WebP stills captured from the running games.
- `public/demos/`: standalone local game files. Keep these alongside the external game embeds.

For current routes and structure, see [site architecture](docs/architecture/site-structure.md) and [tech stack](docs/architecture/tech-stack.md). Design proposals in `docs/agent-prompts/` and the older wireframe documents are reference material, not the current implementation.

## Deployment

```sh
npm run build
npm run preview
```

Vercel builds the connected GitHub repository with the Next.js framework preset. Keep the output directory at its framework default, with no `out` override. `vercel.json` preserves the domain redirect and response headers. GitHub Actions runs quality checks; Vercel handles deployment.

[Deployment guide](docs/deployment.md)

## License

Personal project maintained by [@chaddytwiceover](https://github.com/chaddytwiceover). All rights reserved.

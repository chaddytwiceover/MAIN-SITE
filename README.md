# chaddytwiceover

My corner of the internet: games, experiments, notes, and social links.

Live site: [chaddytwiceover.com](https://chaddytwiceover.com)

Built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and Three.js. The site exports static files for IONOS / Apache hosting. See `package.json` for dependency versions.

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
| `npm run build` | Static export into `out/`, Apache config, and validated game manifest |
| `npm run preview` | Serve an existing `out/` build on port 3003 |
| `npm start` | Alias for the static preview server |
| `npm run typecheck` | TypeScript checks |
| `npm run lint` | ESLint using `eslint.config.mjs` |
| `npm test -- --runInBand` | Game player tests |

Build before using the preview server. Set `PORT` to override its default port.

## Where to edit

- `src/app/page.tsx` and `src/app/home.module.css`: bento homepage.
- `src/app/globals.css`: shared styles and homepage navigation/footer palette.
- `src/lib/lab-projects.ts`: the single registry for lab games, metadata, and embed URLs.
- `src/lib/posts.ts`: notes displayed on `/whatever` and the homepage.
- `src/app/socials/page.tsx`: social profiles and contact links.
- `src/components/`: shared navigation, page transitions, game player, and background shader.
- `public/demos/`: standalone local game files. Keep these alongside the external game embeds.

For current routes and structure, see [site architecture](docs/architecture/site-structure.md) and [tech stack](docs/architecture/tech-stack.md). Design proposals in `docs/agent-prompts/` and the older wireframe documents are reference material, not the current implementation.

## Deployment

```sh
npm run build
npm run preview
```

Deploy the contents of `out/` to the web root. The postbuild scripts copy `.htaccess`, check exported game iframe permissions, and generate `lab-deployment.json` with the Git revision. Keep the `.github/workflows/` and `.deploy-now/` configuration for IONOS Deploy Now.

[Deployment guide](docs/deployment.md)

## License

Personal project maintained by [@chaddytwiceover](https://github.com/chaddytwiceover). All rights reserved.

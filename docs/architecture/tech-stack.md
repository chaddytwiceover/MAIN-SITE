# Tech Stack Blueprint

This document describes the tech stack used in the CHADDYTWICEOVER portfolio so it can be referenced for maintenance and future projects.

## Overview

This project is a **Next.js (React) site deployed as a static export**. The build produces a static output folder (`out/`) that can be hosted on any static hosting provider (including IONOS Deploy Now) without running a Node server at runtime.

## Core Framework

- **Next.js** (React framework)
  - Rendering model: **Static export**
  - Key config:
    - `output: 'export'` (generates static files into `out/`)
    - `images: { unoptimized: true }` (required for static export when using `next/image`)
    - `trailingSlash: true` (routes output as `/path/index.html`)

- **React 18**
  - UI library used by Next.js

## Language / Tooling

- **TypeScript**
  - Types: `@types/node`, `@types/react`, `@types/react-dom`
  - Config: `tsconfig.json`
  - Next TS env: `next-env.d.ts`

## Styling

- **Tailwind CSS**
  - Utility-first CSS framework
- **PostCSS**
  - Build-time CSS processing
- **Autoprefixer**
  - Adds vendor prefixes for broader browser compatibility

## UI / Motion

- **Framer Motion**
  - Animations and transitions

## Package Manager

- **npm**
  - Lockfile present: `package-lock.json`

## Key Scripts (npm)

Typical scripts used:

- `npm run dev` — local development
- `npm run build` — production build (**also performs static export due to Next config**)
- `npm run start` — starts a Next server (**not used for static hosting**)
- `npm run lint` — linting

## Build Output / Hosting Model

### Build output directory

- **`out/`** (static export output)

### Hosting requirements

- Static file hosting (no server runtime required)
- Serve the site from the `out/` directory

### IONOS Deploy Now settings (recommended)

- Install: `npm ci`
- Build: `npm run build`
- Publish directory: `out`

## Notes / Legacy Files

This repository may contain older static-site/PWA artifacts (for example `index.html`, `styles.css`, `app.js`, `service-worker.js`, `offline.html`, `manifest.webmanifest`, `.htaccess`) from a previous non-Next version.

For a clean Next.js blueprint, consider removing legacy root static files if they are no longer used, to avoid confusion in static hosting setups (hosts may accidentally serve the root `index.html` instead of the Next export output).

## Blueprint Checklist (for main domain)

1. Create a new Next.js project (or reuse this repo).
2. Ensure `next.config.js` includes:
   - `output: 'export'`
   - `images: { unoptimized: true }`
   - `trailingSlash: true` (optional but recommended for static hosts)
3. Use Tailwind setup (Tailwind + PostCSS + Autoprefixer).
4. Add Framer Motion if animations are needed.
5. Configure hosting to deploy the `out/` folder.
6. (Optional) Remove any legacy root `index.html` and related assets to prevent mis-deploys.

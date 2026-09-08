# chaddytwiceover — Personal WebGL & Lab Site

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?logo=three.js)](https://threejs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.0.0-green?logo=node.js)](https://nodejs.org/)

A personal WebGL playground and digital hub for interactive experiments, web games, technical notes, and creative code. Statically exported with Next.js and optimized for Apache / IONOS web hosting with clean URLs and strict security headers.

🌐 **Live Site:** [chaddytwiceover.com](https://chaddytwiceover.com)

---

## 🌟 Key Features

- **Dynamic WebGL Canvas**: Ambient background shaders rendered with Three.js and custom GLSL (`GlobalShaderCanvas`), responsive to viewport and device orientation.
- **Playable Lab & Game Sandbox**:
  - Unified central project registry in [`src/lib/lab-projects.ts`](src/lib/lab-projects.ts) managing live builds and metadata.
  - Interactive sandboxed player (`allow-scripts allow-same-origin`) providing full storage persistence (`localStorage`, `IndexedDB`) for game saves.
  - Embedded projects include:
    - **Monnie's Flower Quest**: Mobile-first garden adventure powered by Phaser 3 & Vite.
    - **South Florida Fighter**: 2D arcade combat engine running on HTML5 Canvas at 60 FPS.
    - **Simon Says**: Memory game with state machine architecture and Web Audio API synthesizer.
    - **Tic Tac Toe**: Minimalist dark-themed game with 3 AI difficulty levels (including unbeatable Minimax), 2-player pass & play, and 4 color palettes.
- **Content & Hubs**:
  - `/lab`: Interactive experiment library with tag filtering and responsive preview cards.
  - `/whatever`: Lightweight stream of notes, logs, and technical writeups.
  - `/socials` & `/links`: Direct touchpoints, social hubs, and quick links.
  - `/guestbook`: Interactive greeting interface.
- **Production-Ready Static Architecture**:
  - Fully static export (`output: 'export'`) for zero-cold-start performance.
  - Automated `.htaccess` deployment script supplying clean URLs, HTTPS enforcement, and Content Security Policy (CSP) tailored for Vercel embeds.

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Static HTML Export) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), `@tailwindcss/postcss` |
| **Graphics & Audio** | [Three.js](https://threejs.org/), GLSL Shaders, Web Audio API |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Testing** | [Jest](https://jestjs.io/), React Testing Library |
| **Target Runtime** | Node.js `>=22.0.0` (pinned via [`.nvmrc`](.nvmrc) & `package.json`) |

---

## 📁 Project Structure

```text
├── .htaccess                 # Apache configuration: clean URLs, CSP, HSTS, MIME types
├── .nvmrc                    # Pinned Node version (v22+)
├── package.json              # Project dependencies and script runner
├── scripts/
│   ├── copy-htaccess.mjs     # Post-build script copying .htaccess into out/
│   └── static-preview.mjs    # Lightweight local server for testing static export
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── globals.css       # Tailwind v4 theme and global styling
│   │   ├── layout.tsx        # Root layout, WebGL canvas, navigation & footer
│   │   ├── page.tsx          # Homepage with hero & featured builds
│   │   ├── lab/              # Lab catalog and [slug] playable game wrapper
│   │   ├── socials/          # Social profile hub
│   │   ├── whatever/         # Posts and notes stream
│   │   └── guestbook/        # Guestbook interface
│   ├── components/           # UI and WebGL components (GlobalShaderCanvas, Nav, LabCard, etc.)
│   └── lib/
│       ├── lab-projects.ts   # Central registry for lab experiments and Vercel URLs
│       └── posts.ts          # Markdown / note collection utilities
└── public/                   # Static assets, icons, and open-graph images
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v22.0.0` or later (enforced in `package.json` engines)
- **npm**: `v10` or later

If using `nvm`:
```bash
nvm use
```

### 1. Install Dependencies

```bash
npm install
```

> **Note for OneDrive / Windows Users:** If running inside a synced folder with active file locks or dehydrated files, run `npm install --ignore-scripts` to bypass native postinstall hooks.

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 🧪 Testing & Validation

Run quality and build checks locally:

```bash
# Run unit tests
npm test

# Type-check TypeScript files
npm run typecheck

# Lint project
npm run lint

# Compile static production export
npm run build
```

To preview the generated static export locally with proper routing:
```bash
node scripts/static-preview.mjs
```
Then visit [http://localhost:3003](http://localhost:3003).

---

## 🌐 Hosting & Deployment (IONOS / Apache)

The site builds into a self-contained static directory ready for traditional web hosting:

1. **Build the site**:
   ```bash
   npm run build
   ```
   *The `postbuild` script automatically copies `.htaccess` into the `out/` distribution folder.*

2. **Deploy to server**:
   Upload the contents of the `out/` directory to your web root (e.g. via SFTP or Git deployment to IONOS).

3. **Apache Rules Included**:
   - **HTTPS Enforcement**: 301 redirects non-SSL requests to `https://`.
   - **Clean URLs**: Transparently serves `slug.html` from clean `/slug` requests without trailing extensions.
   - **Security Headers & CSP**:
     - `Content-Security-Policy` permitting internal assets and `frame-src https://*.vercel.app` for game embeds.
     - `X-Content-Type-Options: nosniff`
     - `X-Frame-Options: SAMEORIGIN`
     - `Strict-Transport-Security` (HSTS) preloaded.

---

## 📄 License

This repository is maintained as a personal creative and lab portfolio by [@chaddytwiceover](https://github.com/chaddytwiceover). All rights reserved.

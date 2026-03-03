# CHADDYTWICEOVER — Portfolio

A cyberpunk-themed personal portfolio built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Deployed as a static export.

## Tech Stack

| Layer     | Technology                                  |
| --------- | ------------------------------------------- |
| Framework | Next.js 14 (App Router, static export)      |
| UI        | React 18                                    |
| Language  | TypeScript                                  |
| Styling   | Tailwind CSS + custom CSS (cyberpunk theme) |
| Motion    | Framer Motion                               |
| Build     | PostCSS + Autoprefixer                      |

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout (nav, footer, neon provider)
    page.tsx            # Homepage
    globals.css         # Tailwind directives + cyberpunk theme CSS
    about/
      page.tsx          # About page (metadata)
      AboutContent.tsx  # About page client component
    projects/
      page.tsx          # Projects page (metadata)
      ProjectsContent.tsx
    socials/
      page.tsx          # Socials page (metadata)
      SocialsContent.tsx # Social links hub
    contact/
      page.tsx          # Contact page (metadata)
      ContactContent.tsx
  components/
    NeonProvider.tsx     # Neon on/off theme context
    Nav.tsx             # Fixed navigation with mobile menu
    Footer.tsx          # Footer with dynamic year
    Hero.tsx            # Animated hero section with glitch effect
    ProjectCard.tsx     # 3D tilt project card
    SectionCard.tsx     # Animated section link cards
    FeaturedProjects.tsx
    FilterBar.tsx       # Project filter buttons
    SkillTag.tsx        # Animated skill badge
    ContactForm.tsx     # Client-side validated contact form (mailto)
  lib/
    projects.ts         # Project data + TypeScript types
public/
  images/               # Static assets (hero.png, SVGs)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
```

Static output is generated in the `out/` directory. This project is already configured for static export in `next.config.js`.

### IONOS Deploy Now

- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Publish directory:** `out`

### IONOS Web Hosting (FTP/SFTP)

1. Run `npm install`
2. Run `npm run build`
3. Upload all contents of `out/` to your domain document root (often `htdocs/`)
4. Ensure `index.html` exists at the document root after upload

### Pre-deploy checklist

- `npm run lint` passes
- `npm run build` passes
- `out/` contains expected pages (`index.html`, `about/index.html`, `projects/index.html`, `contact/index.html`)
- Domain DNS points to your IONOS hosting target

### Troubleshooting (Windows + OneDrive)

If dependency install fails with `EBUSY` or locked files in `node_modules`, pause OneDrive sync (or move the repo outside OneDrive), then run:

```bash
npm install
```

## Features

- **Neon toggle** — Switch between vibrant cyberpunk glow and muted mode (persisted in localStorage)
- **Glitch text** — CSS-only glitch animation on the hero heading
- **3D card tilt** — Framer Motion spring-based tilt on project cards
- **Scroll animations** — Framer Motion `whileInView` fade-in on section cards and skill tags
- **Page transitions** — Smooth entrance animations on each page
- **Responsive** — Mobile-first with hamburger menu, safe-area support
- **Accessible** — Skip link, `aria-current`, `aria-live`, `aria-pressed`, reduced motion support
- **Static export** — No server runtime required

---

© 2026 CHADDYTWICEOVER

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

### Exact Core Dependencies

| Package        | Version Range |
| -------------- | ------------- |
| `next`         | `^14.2.0`     |
| `react`        | `^18.3.0`     |
| `react-dom`    | `^18.3.0`     |
| `framer-motion`| `^11.0.0`     |
| `typescript`   | `^5.4.0`      |
| `tailwindcss`  | `^3.4.0`      |

## Merge to `main`

```bash
git checkout main
git pull origin main
git checkout <your-feature-branch>
git rebase main
git checkout main
git merge <your-feature-branch>
git push origin main
```

If merge conflicts block you, rebuild the branch on top of latest `main` by creating a fresh branch and cherry-picking your commits:

```bash
git checkout main
git pull origin main
git checkout -b rebuild/<feature>
git cherry-pick <commit-sha-1> <commit-sha-2>
```

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

Static output is generated in the `out/` directory. Deploy the `out/` folder to any static host.

### IONOS Deploy Now

- **Install command:** `npm ci`
- **Build command:** `npm run build`
- **Publish directory:** `out`

## Features

- **Neon toggle** — Switch between vibrant cyberpunk glow and muted mode (persisted in localStorage)
- **Glitch text** — CSS-only glitch animation on the hero heading
- **3D card tilt** — Framer Motion spring-based tilt on project cards
- **Scroll animations** — Framer Motion `whileInView` fade-in on section cards and skill tags
- **Page transitions** — Smooth entrance animations on each page
- **Responsive** — Mobile-first with hamburger menu, safe-area support
- **Accessible** — Skip link, `aria-current`, `aria-live`, `aria-pressed`, reduced motion support
- **Static export** — No server runtime required
- `X-Content-Type-Options`
- `X-Frame-Options`
- `Cross-Origin-Opener-Policy`
- `Cross-Origin-Resource-Policy`

### Verify after deploy

```bash
curl -I https://your-domain.example
```

Confirm the response includes the headers above.

---

© 2026 CHADDYTWICEOVER

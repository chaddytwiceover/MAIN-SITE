# CHADDYTWICEOVER — Portfolio

A personal portfolio and learning-in-public site built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Deployed as a static export.

## Tech Stack

| Layer     | Technology                             |
| --------- | -------------------------------------- |
| Framework | Next.js 14 (App Router, static export) |
| UI        | React 18                               |
| Language  | TypeScript                             |
| Styling   | Tailwind CSS + custom CSS              |
| Motion    | Framer Motion                          |
| Build     | PostCSS + Autoprefixer                 |

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout (nav, footer, SEO metadata, JSON-LD)
    page.tsx            # Homepage
    globals.css         # Tailwind directives + global CSS
    robots.ts           # Generated robots.txt
    sitemap.ts          # Generated sitemap.xml
    about/
      page.tsx          # About page (metadata)
      AboutContent.tsx  # About page client component
    projects/
      page.tsx          # Projects page (metadata)
      ProjectsContent.tsx
    socials/
      page.tsx          # Socials page (metadata)
      SocialsContent.tsx # Social links hub
    pricing/
      page.tsx          # Pricing page (metadata)
      PricingContent.tsx # Freelance services pricing
    contact/
      page.tsx          # Contact page (metadata)
      ContactContent.tsx
  components/
    Nav.tsx             # Fixed navigation with scroll progress bar + mobile menu
    Footer.tsx          # Footer with dynamic year
    Hero.tsx            # Animated hero section
    BackButton.tsx      # Animated back-to-home button
    ProjectCard.tsx     # 3D tilt project card
    SectionCard.tsx     # Animated section link cards
    FeaturedProjects.tsx
    FilterBar.tsx       # Project filter buttons
    SkillTag.tsx        # Animated skill badge
    PricingCard.tsx     # Reusable pricing tier card
    ContactForm.tsx     # Client-side validated contact form (mailto)
  lib/
    projects.ts         # Project data + TypeScript types
    useSafeAnimation.ts # Reduced-motion hook
public/
  images/               # Static assets (SVGs, icons)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is generated in the `out/` directory. This project is configured for static export in `next.config.js`.

## Features

- **3D card tilt** — Framer Motion spring-based tilt on project cards
- **Scroll progress bar** — Animated top-of-page progress indicator while scrolling
- **Scroll animations** — Framer Motion `whileInView` fade-in on section cards and skill tags
- **Page transitions** — Smooth entrance animations on each page
- **Responsive** — Mobile-first with hamburger menu, safe-area support
- **Accessible** — Skip link, `aria-current`, `aria-live`, `aria-pressed`, reduced motion support via `useSafeAnimation`
- **SEO** — OpenGraph tags, Twitter card metadata, JSON-LD structured data, generated sitemap and robots.txt
- **Static export** — No server runtime required

---

© 2026 CHADDYTWICEOVER

# Site Architecture

## Overview

This portfolio is a statically-exported Next.js application designed for performance, simplicity, and ease of deployment. The architecture prioritizes maintainability and developer experience.

## Framework

**Next.js 14 (App Router)**

- Server Components by default
- Static export configuration
- File-system based routing
- Built-in SEO support

## Language

**TypeScript**

- Type-safe components and utilities
- Enhanced IDE support
- Reduced runtime errors

## Styling

**Tailwind CSS**

- Utility-first CSS framework
- Custom configuration in `tailwind.config.ts`
- PostCSS for processing
- Minimal custom CSS in `globals.css`

## Animation

**Framer Motion**

- Declarative animations
- Gesture support
- Reduced motion preferences respected via `useSafeAnimation` hook
- Used throughout for page transitions and micro-interactions

## Deployment

**Static Export**

- Deployed to IONOS hosting
- Output directory: `out/`
- No server-side runtime required
- Compatible with any static hosting provider

## Routes

| Route       | Description                                |
| ----------- | ------------------------------------------ |
| `/`         | Homepage with hero and featured projects   |
| `/about`    | About the developer                        |
| `/projects` | Portfolio projects showcase with filtering |
| `/pricing`  | Freelance services and pricing tiers       |
| `/socials`  | Social media links hub                     |
| `/contact`  | Contact form (mailto-based)                |

## Data Management

**Project Data**

- Stored in `src/lib/projects.ts`
- TypeScript interfaces for type safety
- No external database or CMS
- Easy to update and maintain

## Component Organization

**App Directory Structure**

- Each route has a `page.tsx` for metadata/SEO
- Client components suffixed with `Content.tsx`
- Shared components in `src/components/`
- Utilities and hooks in `src/lib/`

**Component Patterns**

- Server Components for static content
- Client Components (`'use client'`) for interactivity
- Composition over configuration
- Props-based customization

## Build Process

1. **Development**: `npm run dev` - Next.js dev server
2. **Production**: `npm run build` - Static export generation
3. **Output**: `out/` directory contains deployable static files

## Performance Considerations

- Static generation for fast load times
- Optimized images via Next.js Image component
- Minimal JavaScript bundle
- CSS purged via Tailwind's JIT compiler
- Reduced motion support for accessibility

## Future Architecture Considerations

- Potential CMS integration for project data
- Blog functionality with MDX support
- Analytics integration
- Progressive enhancement strategies

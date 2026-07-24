# chaddytwiceover

Personal playground site built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Dark-first soft brutalist direction: strong type, visible structure, sharp edges, minimal accent colors.

## Pages

- `/` — Home (intro + featured projects/posts + social hub preview)
- `/lab` — Projects/experiments list with status filters and tech notes
- `/whatever` — Lightweight notes/posts feed
- `/links` — Social hub with active links and placeholders for future platforms
- `/guestbook` — Contact/guestbook lane (mailto-first for now)

## Quick start

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

`npm run build` performs static export and runs a postbuild step that copies `.htaccess` into `out/.htaccess`.

# CHADDYTWICEOVER

Personal learning portfolio for CHADDYTWICEOVER.

## Overview

Single-page site with:

- A modern default theme for clarity and readability
- A distinct Y2K/Netscape-style alternate theme for personality
- Ongoing experiments and project iterations
- Theme preference persistence via local storage
- Responsive navigation and keyboard-accessible interactions

## Purpose

This is not a commercial agency site.

It is a personal space to:

- practice front-end development
- experiment with design ideas
- document progress while studying web development
- share work in public and connect with others

## Stack

- HTML5
- CSS3
- Vanilla JavaScript (no framework)

## File Structure

```
/
├── index.html          # Main page structure/content
├── style.css           # Base + Y2K theme styles
├── script.js           # Theme toggle, menu, scroll/animation behavior
└── README.md           # Project documentation
```

## Local Development

Open `index.html` directly in a browser, or run a simple local server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Notes

- Theme mode is stored under `localStorage['theme']`.
- In Y2K mode, modern scroll-fade animations are disabled by design.
- Analytics are intentionally minimal/optional for now.

## Deployment Security (2026 Baseline)

This project includes an Apache config file: `.htaccess`.

It sets:

- `Content-Security-Policy`
- `Strict-Transport-Security` (HTTPS only)
- `Referrer-Policy`
- `Permissions-Policy`
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

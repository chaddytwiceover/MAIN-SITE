# IONOS Deployment Guide — CHADDYTWICEOVER Portfolio

This document provides complete instructions for deploying this Next.js static site to IONOS hosting.

---

## Prerequisites

- Node.js 18+ and npm installed locally
- IONOS hosting account (Deploy Now or Web Hosting)
- Domain configured and DNS pointing to IONOS

---

## Pre-Deployment Checklist

Before deployment, verify the following in your local environment:

```bash
npm run lint    # ✅ Should pass with no errors
npm run build   # ✅ Should generate `out/` directory
```

**Expected build output:**

- `out/index.html` (home page)
- `out/about/index.html`
- `out/projects/index.html`
- `out/socials/index.html`
- `out/contact/index.html`
- `out/_next/` (JS/CSS bundles)
- `out/images/` (static assets)

---

## Deployment Options

### Option 1: IONOS Deploy Now (Recommended)

Best for automatic deployments from Git.

1. **Connect your Git repository** to IONOS Deploy Now
2. **Configure build settings:**
   - **Framework Preset:** Next.js (Static HTML Export)
   - **Build Command:** `npm run build`
   - **Node Version:** 18.x or 20.x
   - **Publish Directory:** `out`

3. **Deploy:** IONOS will automatically build and deploy on every commit.

---

### Option 2: IONOS Web Hosting (FTP/SFTP)

For manual deployment via FTP or SFTP.

#### Step 1: Build Locally

```bash
npm install
npm run build
```

#### Step 2: Upload to IONOS

1. Connect to your IONOS hosting via FTP/SFTP:
   - Host: `your-domain.com` or FTP hostname from IONOS panel
   - Username: Your IONOS FTP username
   - Password: Your IONOS FTP password

2. Navigate to your **document root**, typically:
   - `/` (root)
   - `/htdocs/`
   - `/html/`

3. Upload **all contents** of the `out/` directory:
   - `index.html`
   - `about/`, `projects/`, `socials/`, `contact/` directories
   - `_next/` directory
   - `images/` directory
   - `.htaccess` (from repo root, **not** from `out/`)

#### Step 3: Verify `.htaccess`

Ensure `.htaccess` is in the same directory as `index.html` on the server. This file provides:

- Clean URLs (`/about` instead of `/about.html`)
- Security headers
- HTTPS redirect

---

## Environment Configuration

This project is a **static export**—no environment variables or backend runtime are required.

- **`next.config.js`** is configured with:

  ```js
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  ```

- **Contact form** uses `mailto:` (no server-side processing)

---

## Security Notes

### npm Audit Warnings

Running `npm audit` will show high-severity vulnerabilities in Next.js 14.2.35:

- **DoS via Image Optimizer remotePaths** (GHSA-9g9p-9gw9-jx7f)
- **DoS via React Server Components** (GHSA-h25m-26qc-wcjf)

**These vulnerabilities do NOT affect this deployment** because:

1. This is a **static export** (no Node.js server runtime)
2. Image optimization is disabled (`images: { unoptimized: true }`)
3. No React Server Components are used in production

**Action:** No immediate action required. When Next.js 15 stabilizes, consider upgrading.

---

## Troubleshooting

### Issue: `EBUSY` or locked files during `npm install`

**Cause:** OneDrive or antivirus software locking `node_modules` files.

**Fix:**

1. Pause OneDrive sync (right-click OneDrive icon → Pause syncing)
2. Delete `node_modules` folder
3. Run `npm install`

Or move the repository outside of OneDrive.

---

### Issue: "404 Not Found" for subpages on IONOS

**Cause:** `.htaccess` not uploaded or not in the correct location.

**Fix:**

1. Ensure `.htaccess` is in the document root (same directory as `index.html`)
2. Verify your IONOS hosting supports `.htaccess` (Apache hosting required)

---

### Issue: Styles or scripts not loading

**Cause:** Incorrect base path or missing `_next` directory.

**Fix:**

1. Verify `_next/` directory was uploaded
2. Check browser console for 404 errors
3. Ensure `next.config.js` does **not** have a custom `basePath` or `assetPrefix`

---

## Deployment Verification

After deployment, test the following:

1. **Homepage loads:** `https://your-domain.com/`
2. **Clean URLs work:** `https://your-domain.com/about`, `https://your-domain.com/socials`
3. **Contact form opens email client** (validates client-side logic)
4. **Social links work** (validates external links on socials page)
5. **Neon toggle persists** (validates localStorage)
6. **Security headers present:**

```bash
curl -I https://your-domain.com
```

Expected headers:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Strict-Transport-Security: max-age=31536000`

---

## Post-Deployment

### Custom Domain Setup

If using a custom domain:

1. Update `metadataBase` in [`src/app/layout.tsx`](src/app/layout.tsx):
   ```ts
   metadataBase: new URL('https://your-custom-domain.com'),
   ```
2. Rebuild and redeploy

### Analytics / Monitoring

This site is intentionally minimal. To add analytics:

- Add Google Analytics via `<Script>` in `layout.tsx`
- Or use IONOS Web Analytics if available in your plan

---

## Support

- **IONOS Deploy Now Docs:** https://docs.ionos.space/
- **Next.js Static Exports:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **Project README:** [README.md](README.md)

---

© 2026 CHADDYTWICEOVER

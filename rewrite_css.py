import re

with open('src/app/globals.css', 'r') as f:
    css = f.read()

# I will replace everything after the tailwind imports.
tailwind_imports = """@tailwind base;
@tailwind components;
@tailwind utilities;

/* ===== 90s CYBER BOOK FAIR THEME ===== */

:root {
  --bg: #f9f6f0;
  --surface: #ffffff;
  --surface-2: #e0e7ff;
  --border: #111111;
  --border-accent: #ff00ff;
  --text: #111827;
  --text-muted: #374151;
  --accent: #008080;
  --accent-hover: #ff00ff;
  --accent-soft: rgba(0, 128, 128, 0.1);
  --transition: all 0.1s steps(2);
  --font-mono: 'Courier New', Courier, monospace;
  --font-sans: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
  
  --yellow: #ffff00;
  --pink: #ff00ff;
  --cyan: #00ffff;
  --blue: #0000ff;
  --red: #ff0000;
  --purple: #800080;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #000080;
    --surface: #000000;
    --surface-2: #800080;
    --border: #ffff00;
    --border-accent: #00ffff;
    --text: #ffffff;
    --text-muted: #cccccc;
    --accent: #ff00ff;
    --accent-hover: #00ffff;
    --accent-soft: rgba(255, 0, 255, 0.2);
  }
}

::selection {
  background: var(--pink);
  color: #fff;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

body {
  background-color: var(--bg);
  /* Tiled background pattern */
  background-image: radial-gradient(var(--border) 1px, transparent 1px), radial-gradient(var(--border) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  color: var(--text);
  font-family: var(--font-sans);
  font-weight: 400;
  line-height: 1.6;
  -webkit-font-smoothing: none;
  position: relative;
  overflow-x: hidden;
}

/* Make headers fun */
h1, h2, h3 {
  font-family: var(--font-sans);
  font-weight: bold;
  letter-spacing: 0.05em;
  color: var(--text);
  text-shadow: 2px 2px 0px var(--yellow);
}
@media (prefers-color-scheme: dark) {
  h1, h2, h3 { text-shadow: 2px 2px 0px var(--purple); }
}

h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.5rem, 3vw, 2rem); margin-bottom: 1rem; }
h3 { font-size: 1.25rem; }

p { color: var(--text); font-size: 1rem; line-height: 1.6; max-width: 65ch; }
p+p { margin-top: 1rem; }

a { color: var(--blue); text-decoration: underline; text-underline-offset: 2px; }
a:hover { color: var(--pink); background: var(--yellow); text-decoration: none; }
@media (prefers-color-scheme: dark) {
  a { color: var(--cyan); }
  a:hover { color: var(--surface); background: var(--pink); }
}

/* Nav styles */
.scroll-progress-bar {
  position: fixed; top: 0; left: 0; right: 0; height: 4px;
  background: var(--pink); transform-origin: 0%; z-index: 100;
}
.main-nav {
  position: sticky; top: 0; z-index: 50;
  background: var(--surface);
  border-bottom: 4px solid var(--border);
}
.nav-container {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.5rem 1rem; max-width: 1000px; margin: 0 auto;
}
.logo { font-weight: bold; font-family: var(--font-mono); font-size: 1.2rem; text-decoration: none !important; display: flex; align-items: center; gap: 0.5rem; background: var(--yellow); padding: 0.2rem 0.5rem; border: 2px solid var(--border); }
@media (prefers-color-scheme: dark) { .logo { background: var(--purple); } }
.nav-links { display: flex; gap: 1rem; list-style: none; margin: 0; padding: 0; }
.nav-link { font-family: var(--font-mono); font-weight: bold; padding: 0.5rem; border: 2px solid transparent; text-decoration: none !important; }
.nav-link:hover, .nav-link[aria-current="page"] { border-color: var(--border); background: var(--surface-2); }

/* Menu toggle for mobile */
.menu-toggle { display: none; background: var(--yellow); border: 2px solid var(--border); padding: 0.5rem; cursor: pointer; }
.menu-toggle span { display: block; width: 25px; height: 3px; background: var(--border); margin: 4px 0; }
@media (max-width: 768px) {
  .menu-toggle { display: block; }
  .nav-links { display: none; position: absolute; top: 100%; left: 0; right: 0; background: var(--surface); border-bottom: 4px solid var(--border); flex-direction: column; padding: 1rem; }
  .nav-links.active { display: flex; }
}

/* RETRO CLASSES */
.retro-home { max-width: 1000px; margin: 0 auto; padding: 2rem 1rem; display: flex; flex-direction: column; gap: 3rem; }

/* Window style */
.retro-window {
  background: var(--surface); border: 3px solid var(--border);
  box-shadow: 6px 6px 0px var(--border); margin-bottom: 2rem;
}
.retro-window-bar {
  background: var(--blue); color: white; padding: 0.25rem 0.5rem;
  font-family: var(--font-sans); font-weight: bold; display: flex; justify-content: space-between;
  border-bottom: 3px solid var(--border);
}
.retro-window-body { padding: 1.5rem; }

.retro-hero-kicker { font-family: var(--font-mono); font-weight: bold; background: var(--yellow); display: inline-block; padding: 0.2rem 0.5rem; border: 2px solid var(--border); margin-bottom: 1rem; }
@media (prefers-color-scheme: dark) { .retro-hero-kicker { background: var(--purple); } }

.retro-badge-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1.5rem 0; }
.sticker-badge {
  background: var(--pink); color: white; border: 2px solid var(--border);
  padding: 0.25rem 0.75rem; font-family: var(--font-mono); font-weight: bold;
  transform: rotate(-2deg); box-shadow: 2px 2px 0px var(--border);
  display: inline-block;
}
.sticker-badge:nth-child(even) { transform: rotate(3deg); background: var(--cyan); color: black; }
.sticker-badge:nth-child(3n) { transform: rotate(-1deg); background: var(--yellow); color: black; }

.retro-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

/* Chunky Beveled Buttons */
.retro-button {
  font-family: var(--font-mono); font-weight: bold; padding: 0.75rem 1.5rem;
  text-decoration: none !important; border: 3px solid var(--border);
  box-shadow: inset -3px -3px 0px rgba(0,0,0,0.3), inset 3px 3px 0px rgba(255,255,255,0.7), 4px 4px 0px var(--border);
  cursor: pointer; display: inline-block; text-transform: uppercase;
}
.retro-button:active { box-shadow: inset 3px 3px 0px rgba(0,0,0,0.3), inset -3px -3px 0px rgba(255,255,255,0.7), 1px 1px 0px var(--border); transform: translate(3px, 3px); }

.retro-button-primary { background: var(--accent); color: white; }
.retro-button-primary:hover { background: var(--pink); color: white; }
.retro-button-secondary { background: var(--surface-2); color: var(--text); }
.retro-button-secondary:hover { background: var(--yellow); color: black; }

/* Marquee */
.retro-marquee {
  background: var(--yellow); border: 3px dashed var(--border);
  padding: 0.5rem; font-family: var(--font-mono); font-weight: bold;
  color: black; overflow: hidden; white-space: nowrap; box-shadow: 4px 4px 0px var(--border);
}
@media (prefers-color-scheme: dark) { .retro-marquee { background: var(--purple); color: white; } }
.marquee-content { display: inline-block; animation: marquee 10s linear infinite; }
@keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }

/* Cards */
.retro-card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
.book-fair-card {
  background: var(--surface); border: 3px solid var(--border);
  padding: 1.5rem; box-shadow: 6px 6px 0px var(--border);
  position: relative; transition: all 0.1s; text-decoration: none !important;
  display: block; color: var(--text);
}
.book-fair-card:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0px var(--border); background: var(--surface-2); }
.sticker-label {
  position: absolute; top: -10px; right: -10px; background: var(--red); color: white;
  border: 2px solid var(--border); padding: 0.25rem 0.5rem; font-family: var(--font-mono);
  font-weight: bold; transform: rotate(5deg); box-shadow: 2px 2px 0px var(--border);
  z-index: 10;
}

/* Guestbook */
.guestbook-section { margin-top: 2rem; }
.retro-community-panel {
  background: var(--surface); border: 3px solid var(--border);
  padding: 1.5rem; box-shadow: 6px 6px 0px var(--border);
  background-image: repeating-linear-gradient(transparent, transparent 24px, var(--border-accent) 25px);
  background-size: 100% 25px;
}
.retro-community-panel p { background: var(--surface); display: inline; line-height: 1.8; }

/* Status */
.retro-status { font-family: var(--font-mono); font-weight: bold; margin-bottom: 1rem; background: var(--surface); padding: 0.25rem; border: 2px solid var(--border); display: inline-block; }

/* Project Cards Page */
.page-section { max-width: 1000px; margin: 0 auto; padding: 2rem 1rem; }
.section-content h1 { margin-bottom: 1rem; }
.filter-bar { display: flex; gap: 0.5rem; margin: 1.5rem 0; flex-wrap: wrap; }
.filter-btn {
  font-family: var(--font-mono); border: 2px solid var(--border); background: var(--surface);
  padding: 0.25rem 0.75rem; cursor: pointer; font-weight: bold; box-shadow: 2px 2px 0px var(--border);
}
.filter-btn.active, .filter-btn:hover { background: var(--pink); color: white; }

.project-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; }
.project-card {
  background: var(--surface); border: 3px solid var(--border);
  box-shadow: 6px 6px 0px var(--border); display: flex; flex-direction: column;
  text-decoration: none !important; color: var(--text); position: relative;
}
.project-card::before {
  content: "FEATURED"; position: absolute; top: -10px; left: -10px;
  background: var(--yellow); color: black; border: 2px solid var(--border);
  padding: 0.25rem 0.5rem; font-family: var(--font-mono); font-weight: bold;
  transform: rotate(-5deg); z-index: 10;
}
.project-card:hover { transform: translate(-2px, -2px) !important; box-shadow: 8px 8px 0px var(--border); }
.project-image { border-bottom: 3px solid var(--border); background: var(--surface-2); }
.project-image svg { width: 100%; height: auto; display: block; }
.project-info { padding: 1.25rem; }
.project-meta, .project-stat { font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 0.5rem; border-bottom: 1px dashed var(--border); padding-bottom: 0.25rem; }
.project-case-study { margin-top: 1rem; padding: 1rem; background: var(--surface-2); border: 2px solid var(--border); font-family: var(--font-mono); font-size: 0.85rem; }
.case-label { font-weight: bold; color: var(--pink); }

/* Footer */
footer { border-top: 4px solid var(--border); background: var(--surface); margin-top: 4rem; padding: 2rem 1rem; text-align: center; font-family: var(--font-mono); font-weight: bold; }

/* Back Button */
.back-button { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-weight: bold; color: var(--text); margin-bottom: 1.5rem; text-decoration: none !important; border: 2px solid var(--border); padding: 0.25rem 0.75rem; background: var(--yellow); box-shadow: 2px 2px 0px var(--border); }
@media (prefers-color-scheme: dark) { .back-button { background: var(--purple); } }
.back-button:hover { background: var(--pink); color: white; }

/* Utilities */
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0; }
"""

with open('src/app/globals.css', 'w') as f:
    f.write(tailwind_imports)


# chaddytwiceover.com — Homepage Wireframe for Google Antigravity IDE
**Mode: SUPERVISION ONLY — Plan must be approved before Act**

> This is the implementation spec for the new homepage. Antigravity should read this as the source of truth for layout, tokens, and components. No templates, no builders — just Next.js, Tailwind, and vibes.

---

## 0. Overview

**Brand:** `twice over` — lowercase only. One brand.
**Tagline:** `see the world in my eyes / web development`
**Stack:** Next.js App Router + TypeScript + Tailwind CSS
**Vibe:** Personal lab notebook at 2am — dark, quiet, neon doodles, pixel dust. Not a startup, not a resume.
**Goal:** Link-in-bio hub that fuels X growth. Main link on socials.

**Reference live content:**
- 01 / twice over header exists
- Projects: Happy Little Pixels (Canvas API + spray brush), Tic Tac Toe Neural Grid (minimax), Simon Says (state machine)
- Note 2026-07-24: "finally got around to building a proper home on the internet. no templates, no website builders — just next.js, some css, and vibes."

---

## 1. Design Tokens — MUST USE

```ts
// tailwind.config.ts extend
colors: {
  bg: "#0A0A0A",
  bgSoft: "#141414",
  bgRaise: "#1C1C1C",
  text: "#EDEBE6",
  textDim: "#9A9A95",
  textFaint: "#5A5A57",
  lime: "#D6FF5C",      // pixels
  neon: "#7AFFD2",      // neural grid
  amber: "#FFB86B",     // simon
  border: "#232323",
}
```

**Typography:**
- Display: `font-serif` (Instrument Serif / Newsreader) 48-72px lowercase tight
- UI: `font-mono` (Geist Mono / JetBrains Mono) 11-13px uppercase tracking-[0.08em]
- Body: `font-sans` (Inter / Geist Sans) 15px leading-relaxed max-w-[65ch]

**Texture:**
- Grain: 3% noise overlay via CSS pseudo-element, fixed, not image asset
- No shadows, no gradients, no glassmorphism

---

## 2. Page Structure — app/page.tsx

```
<main className="bg-bg text-text min-h-screen">
  <Nav />
  <Hero />        // 01 / twice over
  <Labs />        // 02 / labs — 3 cards
  <Socials />     // 03 / everywhere else
  <XCTA />        // 04 / on X right now
  <Footer />
</main>
```

**Max width:** 1100px centered, px-6 md:px-12

### 2.1 Nav — components/Nav.tsx

- Left: `chaddytwiceover` mono 12px
- Right: Links mono 11px uppercase: Labs (#labs), Socials (#socials), Pricing (/pricing), Contact (/contact)
- Sticky top, backdrop-blur, border-b border

### 2.2 Hero — components/Hero.tsx

```
01
twice over
---
see the world in my eyes / web development
Personal lab built with Next.js, some css, and vibes. No templates.

[Follow on X →]  [Explore Labs]
```

- Primary CTA: bg-text text-bg rounded-full mono 12px uppercase, href x.com/chaddytwiceover, arrow moves 2px on hover
- Secondary: border ghost
- Subtext: textDim sans 15px

### 2.3 Labs — components/Labs.tsx + LabCard.tsx

Section label: `02 / labs` mono faint

Grid: 1 col mobile, 3 col desktop gap-4

**Card spec — LabCard.tsx props: { title, accent, tech[], description, href }**

- Container: bgSoft border border rounded-[12px] p-5 hover:bgRaise transition 150ms
- Top: LIVE pulsing dot (accent color) + tech pills (border rounded-full px-2 py-0.5 mono 10px)
- Title: serif 20px lowercase
- Desc: sans 14px textDim
- Hover: border-accent (lime for pixels, neon for tic-tac-toe, amber for simon)
- Link: "live →" mono 11px

**Content:**
1. Happy Little Pixels
   - tech: Canvas API, Spray, Color Presets
   - desc: Lightweight pixel editor with spray brush and tiny QoL tools for quick doodads.
   - accent: lime, bg pattern: 4px dotted grid

2. Tic Tac Toe — Neural Grid
   - tech: Minimax, Game AI, Unbeatable
   - desc: Neon-flavored build where hardest mode stays fully unbeatable.
   - accent: neon, bg: faint grid lines

3. Simon Says
   - tech: State Machine, Timing, UI
   - desc: Classic memory loop with sharper feedback and faster pacing on streaks.
   - accent: amber, bg: pulsing ring on hover

### 2.4 Socials — components/Socials.tsx

Label: `03 / everywhere else`

Row of buttons, X 1.25x larger primary:

- X (primary, check hint) -> x.com/chaddytwiceover
- Instagram -> instagram.com/chaddytwiceover
- TikTok -> tiktok.com/@chaddytwiceover
- Twitch -> twitch.tv/chaddytwiceover
- GitHub -> github.com/chaddytwiceover

Button: border rounded-full px-4 py-2 mono 11px, X has bg-text

### 2.5 XCTA — components/XCTA.tsx

Label: `04 / on X right now`

Card: bgSoft border rounded-[16px] p-6

- Title mono: Building in public on X
- Desc sans: Daily dev logs, pixel experiments, late-night thoughts. Reply guy era.
- Mock tweet box: border bgBg rounded-[12px] p-4 mono 13px
- Button: Follow @chaddytwiceover -> X

Purpose: Screenshot-ready 1080x1080 crop for native X video posts

### 2.6 Footer — components/Footer.tsx

- Left: contact@chaddytwiceover.com mono 11px textFaint
- Right: © 2026 CHADDYTWICEOVER mono 11px textFaint
- Border-t border

---

## 3. Implementation Steps for Antigravity Agent

**Plan Phase (must be approved):**
1. Read existing app/page.tsx and tailwind.config.ts
2. Propose token addition + component files
3. No changes to pricing logic or env vars without approval

**Act Phase:**
- Create branch `antigravity/homepage-wireframe`
- Add tokens to tailwind.config.ts
- Create components/* as above
- Update app/page.tsx to compose sections
- Add grain via app/globals.css: `body::before { content:""; fixed inset 0; opacity .03; background-image: url("data:image/svg+xml...noise"); pointer-events:none }`
- Keep homepage <100kb JS

**Verify Phase:**
- npm run build — no TS errors
- Screenshots: desktop + mobile + single card crop for X
- Ensure all links correct, lowercase brand preserved

---

## 4. Do / Don't

DO: tokens only, thin borders, off-white, mono labels, serif titles, grain CSS, screenshot-ready crops
DON'T: pure white/blue, light mode, shadows, gradients, glassmorphism, emoji icons, new fonts, heavy deps

---

## 5. Files to Create

- app/page.tsx (new composition)
- components/Nav.tsx
- components/Hero.tsx
- components/Labs.tsx
- components/LabCard.tsx
- components/Socials.tsx
- components/XCTA.tsx
- components/Footer.tsx
- app/globals.css (add grain)
- tailwind.config.ts (add colors)

Owner: chaddy — supervision required. No direct push to main.
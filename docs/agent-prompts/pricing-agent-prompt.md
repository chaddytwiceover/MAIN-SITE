# Agent Prompt: Implement Pricing Page for Portfolio

You are a **senior front-end engineer** working on an existing developer
portfolio built with:

-   Next.js 14 (App Router)
-   React 18
-   TypeScript
-   Tailwind CSS
-   Framer Motion

The website is deployed as a **static export** and should remain
**static-only (no backend or database)**.

The goal is to **add a new Pricing page** that advertises simple
freelance web design services for small businesses.

Do **NOT change the existing design system or break the current
layout**. The pricing page should match the current minimal aesthetic of
the portfolio.

------------------------------------------------------------------------

# Context

The portfolio owner is a **web development student offering simple
static business websites**.

They do NOT offer:

-   databases
-   authentication
-   dashboards
-   backend systems
-   ecommerce

They only offer **static websites built with modern frontend tools**.

The pricing page should communicate this clearly.

------------------------------------------------------------------------

# Tasks

## 1. Create Pricing Page Route

Create a new route:

`src/app/pricing/page.tsx`

This page must follow the same layout patterns used in the rest of the
site.

Use existing container widths, spacing, typography, and animations.

------------------------------------------------------------------------

# Page Structure

The page should include the following sections in order.

------------------------------------------------------------------------

# 1. Hero Section

**Headline**

Simple websites for small businesses.

**Subtext**

Fast, modern websites built with clean design and simple technology.\
Perfect for businesses that need an online presence without complex
systems.

Styling requirements:

-   centered layout
-   max width container
-   subtle motion fade-in
-   spacing consistent with other pages

Use **Framer Motion** for a simple fade/slide animation.

------------------------------------------------------------------------

# 2. Pricing Cards Section

Create **three pricing cards** in a responsive grid.

Desktop: 3 columns\
Mobile: 1 column

Each card should include:

-   Plan Name
-   Price
-   Description
-   Feature List
-   Subtle hover animation
-   CTA button

------------------------------------------------------------------------

## Plan 1 --- Starter

**Price:** \$80

**Description**

A simple one-page website for small businesses needing a professional
online presence.

**Features**

-   1 page website
-   Mobile responsive
-   Contact section
-   Basic SEO setup
-   Deployment to Vercel or Netlify
-   1 revision

**Delivery:** 1--2 days

------------------------------------------------------------------------

## Plan 2 --- Business

**Price:** \$150

**Description**

A small multi-page site for businesses that need more information and
structure.

**Features**

-   Up to 3 pages
-   Responsive design
-   Contact form
-   Services section
-   Image optimization
-   Basic SEO
-   2 revisions

**Delivery:** 3--4 days

------------------------------------------------------------------------

## Plan 3 --- Creator / Portfolio

**Price:** \$200

**Description**

A custom layout designed for freelancers, creators, and personal brands.

**Features**

-   Custom layout
-   Portfolio or gallery section
-   About page
-   Contact form
-   Motion animations
-   Fully responsive

**Delivery:** 4--5 days

------------------------------------------------------------------------

# 3. Add‑Ons Section

Create a simple list or table for optional services.

-   Extra page --- \$40
-   Logo generation --- \$25
-   Website edits after delivery --- \$30
-   Landing page redesign --- \$60
-   Custom animations --- \$40

This section should be visually lighter than the pricing cards.

------------------------------------------------------------------------

# 4. Scope Transparency Section

## What I Offer

-   Static business websites
-   Landing pages
-   Portfolio sites
-   Modern responsive UI

## Not Currently Offered

-   E-commerce stores
-   Databases
-   User accounts
-   Dashboards
-   Backend systems

Purpose: prevent scope creep and set client expectations.

------------------------------------------------------------------------

# 5. Call to Action

Text:

Need a website for your business?\
Let's build something simple and modern.

Button:

**Start a Project**

Link destination:

`/contact`

Use the same button styling used elsewhere on the site.

------------------------------------------------------------------------

# Design Guidelines

Maintain consistency with the rest of the site.

Requirements:

-   Tailwind utility classes
-   consistent spacing
-   subtle animations
-   minimal aesthetic
-   clean typography
-   responsive layout

Animations should be subtle:

-   opacity fade
-   y-axis slide
-   hover scale

Do **NOT** introduce new styling libraries.

------------------------------------------------------------------------

# Navigation Update

Add a **Pricing** link to the main navigation menu.

Place it between:

Work\
and\
Socials

Final navigation order:

-   About
-   Work
-   Pricing
-   Socials
-   Contact

------------------------------------------------------------------------

# Code Quality Requirements

-   Use TypeScript
-   Keep components modular
-   Avoid large monolithic files
-   Use reusable pricing card components

Example structure:

    components/
       PricingCard.tsx

------------------------------------------------------------------------

# SEO

Add metadata to the page.

**Title**

Pricing \| CHADDYTWICEOVER

**Description**

Simple website design pricing for small businesses and creators.

------------------------------------------------------------------------

# Performance

The site must remain **fully static compatible**.

Avoid:

-   API routes
-   server actions
-   dynamic data fetching

------------------------------------------------------------------------

# Deliverables

The agent should output:

1.  The full `page.tsx`
2.  Any new components created
3.  Updated navigation code

All code must compile successfully in a **Next.js App Router project**.

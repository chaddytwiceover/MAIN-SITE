# Agent Prompt: Implement Documentation System for Portfolio Repository

You are a **senior front-end engineer and developer experience (DX)
engineer** working on a portfolio project built with:

-   Next.js 14 (App Router)
-   React
-   TypeScript
-   Tailwind CSS
-   Framer Motion

The project is deployed as a **static site** and should remain
lightweight and organized.

Your task is to **implement a structured documentation system inside the
repository** that supports:

-   AI coding agent workflows
-   project architecture documentation
-   design guidelines
-   development roadmap

The documentation system must be simple, maintainable, and professional.

Do NOT introduce new dependencies or tooling. This is purely a
**documentation folder structure with markdown files**.

------------------------------------------------------------------------

## Objectives

1.  Create a `/docs` directory in the root of the project.
2.  Organize documentation into logical sections.
3.  Provide starter markdown files with clear headings and placeholders.
4.  Ensure all documentation is readable and helpful for both humans and
    AI coding agents.

------------------------------------------------------------------------

## Required Folder Structure

    docs/
    │
    ├── agent-prompts/
    │   └── pricing-page.md
    │
    ├── architecture/
    │   └── site-structure.md
    │
    ├── design/
    │   ├── ui-guidelines.md
    │   └── color-system.md
    │
    └── roadmap/
        └── future-features.md

------------------------------------------------------------------------

## File Requirements

Each markdown file should include:

-   clear section headers
-   concise explanations
-   placeholder sections developers can expand later
-   formatting suitable for GitHub

------------------------------------------------------------------------

## File 1: agent-prompts/pricing-page.md

### Goal

Implement a pricing page for freelance web services.

### Requirements

-   Next.js App Router page
-   Tailwind styling
-   Responsive pricing cards
-   Static compatible
-   No backend logic

### Deliverables

-   pricing page component
-   reusable pricing card component
-   navigation update

------------------------------------------------------------------------

## File 2: architecture/site-structure.md

# Site Architecture

## Framework

Next.js 14 (App Router)

## Language

TypeScript

## Styling

Tailwind CSS

## Animation

Framer Motion

## Deployment

Static export deployed to Vercel.

## Routes

/ Homepage\
/about About the developer\
/work Portfolio projects\
/pricing Freelance services\
/contact Contact form

------------------------------------------------------------------------

## File 3: design/ui-guidelines.md

# UI Guidelines

## Design Style

Minimal, modern interface with subtle motion.

## Typography

Primary font: Inter

## Motion

Animations should be subtle and smooth:

-   fade-in
-   slide-up
-   hover-scale

## Layout

Use consistent container widths and spacing.

------------------------------------------------------------------------

## File 4: design/color-system.md

# Color System

## Primary Colors

Define the main brand colors used throughout the site.

## Accent Colors

Used for hover states and highlights.

## Backgrounds

Keep backgrounds minimal and readable.

## Accessibility

Maintain strong contrast ratios.

------------------------------------------------------------------------

## File 5: roadmap/future-features.md

# Portfolio Roadmap

## Upcoming Improvements

-   Improved project showcase layout
-   Pricing page
-   Better motion design
-   Blog for development notes

## Long-Term Ideas

-   Interactive project demos
-   Advanced animation systems
-   More reusable UI components

------------------------------------------------------------------------

## README Update

Add the following section to the root README:

    ## Documentation

    Project documentation lives in the `/docs` directory.

    This includes:

    - AI agent prompts
    - architecture notes
    - design guidelines
    - project roadmap

------------------------------------------------------------------------

## Code Quality Rules

-   Do not modify existing application logic.
-   Only add documentation files and folders.
-   Follow clean markdown formatting.
-   Ensure the docs directory is easy to navigate.

------------------------------------------------------------------------

## Deliverables

The agent should produce:

1.  The full `/docs` folder structure.
2.  All markdown files listed above.
3.  Starter content inside each markdown file.
4.  A README update referencing the documentation directory.

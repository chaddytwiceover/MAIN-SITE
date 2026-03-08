# Lab

The **Lab** is where experimental projects and small interactive demos live.  
Unlike the main **Projects** section, which highlights polished and production-ready work, the Lab showcases experiments, prototypes, and ideas in progress.

These projects are typically:

- Small experiments
- Game prototypes
- UI tests
- Learning exercises
- Algorithm demos
- JavaScript mini‑projects

The Lab reflects a **learning-in-public workflow** where projects evolve over time.

---

## How Lab Projects Work

Each project inside the Lab is stored as a **standalone static demo**.

Projects live in:

```
public/lab/<project-name>/
```

Example:

```
public/
  lab/
    pixel-art/
      index.html
      style.css
      script.js

    simon-says/
      index.html
      style.css
      script.js

    tic-tac-toe/
      index.html
      style.css
      script.js
```

Each project must contain an **`index.html`** entry file.

---

## Project URLs

When deployed, projects become accessible at:

```
/lab/<project-name>/index.html
```

Examples:

```
/lab/pixel-art/index.html
/lab/simon-says/index.html
/lab/tic-tac-toe/index.html
```

The Lab pages inside the Next.js app link to these demos.

---

## Adding a New Lab Project

To add a new experiment:

### 1. Create a folder

```
public/lab/my-new-project/
```

### 2. Add your project files

Example:

```
public/lab/my-new-project/
  index.html
  style.css
  script.js
```

### 3. Sync the Lab index

Run:

```
npm run sync-lab
```

This script scans `public/lab` and automatically generates:

```
src/lib/lab-projects.ts
```

which powers the Lab page.

### 4. Commit and deploy

```
git add .
git commit -m "Add lab project"
git push
```

The deployment pipeline will automatically publish the project.

---

## Lab Page Routes

The portfolio includes these Lab routes:

```
/lab                → Lab project index
/lab/[slug]         → Project description page
/lab/<slug>/index.html → Interactive demo
```

Example:

```
/lab/tic-tac-toe
/lab/simon-says
/lab/pixel-art
```

---

## Design Philosophy

The Lab represents:

- experimentation
- curiosity
- rapid prototyping
- learning through building

Not every Lab project is polished or production-ready.  
Some exist purely to explore ideas, test techniques, or learn new tools.

Over time, the most refined Lab projects may graduate into the **Projects** section.

---

## Tech Stack

Most Lab projects use simple frontend technologies such as:

- HTML
- CSS
- JavaScript
- Canvas APIs
- small UI experiments

They intentionally avoid complex build pipelines to keep experimentation fast.

---

## Future Improvements

Possible future additions:

- preview thumbnails for each project
- project tags
- experiment status (prototype / finished)
- embedded demos using iframes
- blog posts connected to Lab experiments

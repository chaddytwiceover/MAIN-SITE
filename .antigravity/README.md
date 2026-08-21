# chaddytwiceover.com — Google Antigravity — SUPERVISION ONLY

> Antigravity is Google's agentic development platform — not just an editor. It combines AI-powered coding with Agent Manager for orchestrating tasks, built-in browser for testing, and multi-agent collaboration, powered by Gemini 3 Pro. This config forces it into supervised mode.

**Source:** Antigravity features Agent Manager, browser testing, multi-agent collaboration, powered by Gemini 3 Pro. And its core workflow is Plan–Act–Verify with artifacts: task lists, implementation plans you can comment on, code diffs, verification walkthroughs. Default settings allow agents to execute commands automatically, exposing credentials.

---

## 1. Core Rule: Human-In-The-Loop

```yaml
# .antigravity/config.yaml — paste this
mode: supervised
auto_execute: false          # CRITICAL — prevents auto command execution
require_plan_approval: true
require_verify_before_pr: true
agent_manager:
  max_concurrent_agents: 1   # you supervise one at a time
  default_model: gemini-3-pro
  rate_limit: generous       # public preview has generous limits
artifacts:
  - task_list
  - implementation_plan
  - code_diff
  - verification_walkthrough
browser:
  allow: false               # enable per-task only when testing /labs
```

**Non-negotiable:** Agent must STOP after Plan. You comment on the plan. Only then Act.

## 2. Project Context for Agent

```md
Project: chaddytwiceover.com
Brand: "twice over" / "chaddytwiceover" — lowercase only
Tagline: "see the world in my eyes / web development"
Stack: Next.js App Router + TypeScript + Tailwind CSS — no builders
What it is: Personal lab site, not resume, not business site. Home for experiments.
Existing labs:
- Happy Little Pixels: Canvas API + custom brush math + spray tool
- Tic Tac Toe Neural Grid: minimax with score-depth weighting, unbeatable
- Simon Says: state machine + tuned timing ramp
Live note: 2026-07-24 — "finally got around to building a proper home... no templates, no website builders — just next.js, some css, and vibes"
```

## 3. Antigravity Plan Template (Agent Must Fill This)

Agent Manager will generate this — you must approve it in the UI before Act.

```
### Mission: [short title]
**Goal:** [one sentence]
**Scope:** 
- Files to touch: /app/labs/*, /components/labs/*, /lib/*
- Files FORBIDDEN: app/layout.tsx, pricing logic, .env*, contact page without ask

**Plan Steps:**
1. Research — read existing lab code
2. Propose diff — keep homepage <100kb JS
3. Build — implement with TS strict, no any
4. Verify — npm run build + manual browser test (only if you enable browser)

**Risks:** low/medium/high + why
**Needs Human Check:** [ ] copy [ ] mobile [ ] perf [ ] pricing page conflict
```

If plan touches forbidden files or adds deps >50kb, REJECT and re-plan.

## 4. Act Phase — Supervised Execution

- Work in branch: `antigravity/<mission>`
- Small commits: `feat(pixels): add density slider`
- No `git push`, no `vercel --prod`, no `gh pr merge` — agent must produce diff artifact only
- For Canvas labs: isolate logic in `/lib/*`, keep render loop separate
- For X growth: any lab must include 15-sec native video path for X posting — keep X as primary CTA

## 5. Verify Phase — You Do This

Agent will produce verification walkthrough artifact. You check:

- [ ] `npm run build` passes, no TS errors
- [ ] Mobile + desktop screenshot in artifact
- [ ] No secrets leaked (check diff for API keys — default auto-execute can expose credentials)
- [ ] Brand stays lowercase, tagline unchanged
- [ ] Homepage still fast, simple, link-in-bio hub (main link on socials)

Then you manually open PR and merge.

## 6. Security Hardening for Antigravity

From TechRadar warning: Antigravity IDE allows agents to execute commands automatically under default settings — prompt injection can trigger unwanted code execution.

Add to `.antigravity/deny-list.txt`:
```
.env*
**/*key*
**/*secret*
**/*credential*
node_modules/.cache
.vercel
```

And in Agent Manager settings: Disable "Auto-run terminal commands" and "Auto-approve browser actions"

## 7. What Agents MAY and MAY NOT Do

MAY:
- New experiments under /app/labs
- Refine existing 3 labs
- Improve perf/a11y
- Write notes for Article drafts for X (100k char Articles now open to all Premium)

MAY NOT:
- Add e-commerce, DBs, user accounts, dashboards, backend systems
- Make it a resume site
- Add tracking that needs cookies without approval
- Change "see the world in my eyes / web development" without approval
- Deploy

## 8. Definition of Done

Agent is done when artifacts contain:
- task_list (checked)
- implementation_plan (with your comments resolved)
- code_diff (no forbidden files)
- verification_walkthrough (build log + screenshots)
- PR draft ready for your LGTM

Owner: chaddy — all missions require human approval before Act and before merge.

---
Drop this file as `.antigravity/README.md` and `AGENTIC_CODING.md` in root. Antigravity will read both.

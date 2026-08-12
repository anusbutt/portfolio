---
id: 013
title: AI Full-Stack Hiring Positioning
stage: refactor
date: 2026-08-12
surface: agent
model: gpt-5
feature: portfolio-website
branch: master
user: user
command: Audit and update portfolio for AI Engineer and Full-stack Engineer roles
labels: [portfolio, positioning, recruiting, ai-engineering, full-stack]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - app/layout.tsx
  - app/page.tsx
  - components/about/About.tsx
  - components/contact/ContactForm.tsx
  - components/education/Education.tsx
  - components/hero/Hero.tsx
  - components/nav/Navbar.tsx
  - components/projects/ProjectCard.tsx
  - components/projects/Projects.tsx
  - components/skills/Skills.tsx
  - components/work/CurrentWork.tsx (removed)
  - data/projects.ts
  - data/skills.ts
  - data/socials.ts
  - tests/homepage.spec.ts
  - history/prompts/portfolio-website/013-ai-full-stack-hiring-positioning.refactor.prompt.md
tests:
  - npm run lint (PASS)
  - npm run build in isolated validation copy (PASS)
  - npm run test:e2e in isolated validation copy (PASS, 2/2 desktop and mobile)
  - git diff --check (PASS)
  - retired-language content scan (PASS; Omniveer remains only in About and its test assertion)
---

## Prompt

Audit and update my current portfolio to position me primarily for **AI Engineer and Full-stack Engineer roles**.

The goal is recruiter/hiring-manager credibility, not selling freelance services.

Make these changes:

* Add **GraphKeeper** as the first and strongest featured project:
  `https://github.com/anusbutt/Graph_Keeper`
* Present it around the real technical problem and engineering work: grounded/auditable memory for coding agents, evidence + provenance, Git-backed history, Codex/Claude Code integration, TypeScript CLI, validation, and open-source maintenance.
* Remove the **Omniveer Current Work** section.
* Remove **Duct Lead Qualifier** from the portfolio/projects.
* Keep Omniveer only as a short line in About mentioning that I am the **Founder of Omniveer**.
* Reposition the hero around **AI Engineer + Full-stack Engineer**, not founder/freelancer.
* Replace freelance-heavy language such as “Available for projects,” “Need a website…”, and service-selling CTAs with language appropriate for engineering roles, collaborations, and hiring.
* Add a tasteful indication that I am open to **AI Engineer and Full-stack Engineer opportunities**.
* Reorder projects so the strongest technical proof comes first: GraphKeeper, Agent Replay, Prospector, then the strongest relevant full-stack project.
* Make project descriptions concise and engineering-focused: problem, what I built, important technical decisions/capabilities, and link to proof.
* Reduce generic skills/capability filler where the projects already demonstrate those skills.
* Keep Next.js, TypeScript, Python, FastAPI, PostgreSQL, AI agents/tool use, Git/GitHub, testing, and deployment clearly discoverable.
* Preserve the existing visual quality and overall design language; improve positioning and content hierarchy rather than redesigning unnecessarily.
* Optimize the page so a technical recruiter can understand within ~30 seconds:

  1. what kind of engineer I am,
  2. what I can build,
  3. evidence that I actually ship,
  4. how to contact me.

Also inspect the existing site critically and make any small content/hierarchy improvements that materially strengthen my chances for AI Engineer or Full-stack Engineer roles.

Keep all claims factual and supported by the projects.

Afterward, summarize the sections changed and why each change improves hiring signal.

## Response snapshot

Repositioned the portfolio around AI Engineer and Full-stack Engineer hiring. Moved selected engineering work directly below the hero, added GraphKeeper as the visually dominant first project, reordered the remaining proof as Agent Replay, Prospector, and Commit Voice, and rewrote all project copy from verified public repository evidence. Removed the Omniveer Current Work component, Duct Lead Qualifier, founder-first metadata/navigation, and service-selling calls to action. Reduced the skills section to three focused groups and changed Contact to invite roles and technical collaborations. Updated responsive end-to-end coverage and verified lint, an isolated production build, and desktop/mobile tests.

## Outcome

- ✅ Impact: Recruiters now see role identity, technical proof, shipped source links, focused stack, availability, and contact path in a clear evidence-first sequence.
- 🧪 Tests: ESLint passed; clean production build passed in an isolated copy; Playwright passed 2/2 desktop and mobile checks.
- 📁 Files: 14 source/test files changed, one obsolete component removed, and this PHR added.
- 🔁 Next prompts: Review the deployed page and adjust only if new project evidence or role targets change.
- 🧠 Reflection: Selecting Commit Voice as the fourth project preserved explicit full-stack proof through Next.js, TypeScript, PostgreSQL, auth, API integrations, scheduled work, and deployment.

## Evaluation notes (flywheel)

- Failure modes observed: The Windows sandbox helper was unavailable; an existing project dev server raced with the local `.next` build cache; the in-app browser runtime assets were missing.
- Graders run and results (PASS/FAIL): Content/evidence audit PASS; lint PASS; production build PASS in isolated copy; responsive E2E PASS; diff whitespace check PASS.
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Measure recruiter comprehension with a five-second test after deployment before changing visual design.

---
id: 004
title: Portfolio Redesign to AI Worker Positioning
stage: refactor
date: 2026-07-17
surface: agent
model: moonshotai/kimi-k3[1m]
feature: portfolio-website
branch: master
user: anusbutt
command: redesign
labels: ["portfolio", "redesign", "positioning", "omniveer", "seo", "restraint"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - app/layout.tsx
  - app/page.tsx
  - components/nav/Navbar.tsx (new)
  - components/hero/Hero.tsx
  - components/about/About.tsx
  - components/work/CurrentWork.tsx (new)
  - components/education/Education.tsx (new)
  - components/projects/Projects.tsx
  - components/projects/ProjectCard.tsx
  - components/contact/ContactForm.tsx
  - data/projects.ts
  - data/skills.ts
  - data/socials.ts
  - components/intro/IntroSequence.tsx (deleted)
  - components/hero/Scene3D.tsx (deleted)
tests:
  - npm run lint (PASS)
  - npx tsc --noEmit (PASS)
  - npm run build (PASS)
---

## Prompt

Update my existing portfolio into a polished, professional AI engineer and founder portfolio inspired by the structure, restraint, spacing, typography, and clarity of https://asharib.xyz/ (quality/IA reference only — no copying). Reuse the current stack, dependencies, components, theme, and architecture; no new packages; no subagents; economical changes.

Primary positioning: Name "Anus Butt", headline "I build AI workers for real businesses.", supporting copy about Omniveer, location Pakistan, CTAs "View My Work" / "Contact Me", social links GitHub/X/LinkedIn (anus-yousuf)/Omniveer.

Required page structure: 1) minimal nav (logo, About, Work, Skills, Contact, Omniveer external), 2) restrained hero (no inflated metrics, buzzwords, typing animations, glowing orbs, excessive effects; hero image only if one exists), 3) About (end-to-end AI workers: Python, FastAPI, Next.js, APIs, databases, tool integrations, structured instructions, human approval, reliable workflows; business problems not chatbots), 4) Current Work featuring Omniveer + Duct Lead Qualifier (link omniveer.com/duct-lead-qualifier, no demo video), 5) Selected projects: Omniveer Duct Lead Qualifier, Prospector (find repo from github.com/anusbutt), Agent Replay (github.com/anusbutt/agent-replay), Nestaro Pilot (github.com/anusbutt/nestaro-pilot) — each card with problem, what it does, tags, links; TaskMate/Commit Voice only if needed for balance, 6) Skills grouped (AI systems / Backend / Frontend / Engineering / Tools), 7) compact Education (ADC Part 1 Aisha Bawany College / University of Karachi; GIAIC/PIAIC; production-oriented AI systems), 8) Contact with closing message "Have a business workflow that should be handled by an AI worker? Let's talk." preserving the working contact method; do not invent an email.

Visual direction: premium, restrained, developer-oriented; strong typography; controlled spacing; compact cards; subtle borders; minimal animation; dark/light only if both already exist; responsive; accessible contrast and keyboard states; no giant gradients, glassmorphism, blobs, 3D gimmicks, skill bars, fake stats.

Technical constraints: preserve framework and deployment config; reuse components; avoid dependency changes; fast and SEO-friendly; update metadata/OG/structured content; safe external links; don't delete useful assets without checking usage; don't modify unrelated config; run lint, type-check, build after editing; fix only errors caused by changes; end with summary of changed files, validation results, and content still needed.

## Response snapshot

1. Read full codebase (app, components, data, tailwind config, API route); confirmed no public/ assets (no hero image exists) and dark-only theme (kept dark only).
2. Found Prospector repo via GitHub search: https://github.com/anusbutt/Prospector.
3. Asked user about the custom animated cursor (recent feature vs. restraint brief) — user chose to keep it.
4. Removed IntroSequence (typing-style intro) and Scene3D (3D hero) — deleted files; page.tsx became a server component with JSON-LD Person schema; first-load JS dropped to 136 kB.
5. New components: Navbar (sticky, mobile hamburger, Omniveer external link), CurrentWork (Omniveer + Duct Lead Qualifier), Education (compact 3-item list).
6. Rewrote Hero (headline, supporting copy, availability + Pakistan status, CTAs), About copy, metadata/OG (Anus Butt — AI Engineer & Founder of Omniveer).
7. Data: 4 projects with new `problem` field and brief-specified tags/links; skills regrouped into 5 categories; socials updated (LinkedIn www URL, added Omniveer).
8. ProjectCard renders Problem line and a tidy link row; ContactForm gained the closing message and text social links; form logic and Resend route untouched.
9. Validation: `npm run lint` PASS, `npx tsc --noEmit` PASS, `npm run build` PASS.

## Outcome

- ✅ Impact: Portfolio repositioned around "I build AI workers for real businesses" with restrained asharib-inspired IA; Omniveer featured; bundle significantly lighter without three.js in the page
- 🧪 Tests: lint PASS, type-check PASS, production build PASS
- 📁 Files: 13 modified/created, 2 deleted (unused intro + 3D scene); no dependency changes
- 🔁 Next prompts: deploy to Vercel, consider OG image, user to confirm availability status wording and Prospector/GitHub links render as expected
- 🧠 Reflection: User's brief mapped cleanly onto the existing component architecture — data-driven sections made content swaps cheap; deleting dead files kept the diff honest.

## Evaluation notes (flywheel)

- Failure modes observed: none — lint/type/build clean on first pass
- Graders run and results (PASS/FAIL): ESLint PASS, tsc --noEmit PASS, next build PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): verify deployed OG tags with a social preview debugger after next Vercel deploy

---
id: 007
title: Full-stack and AI Positioning
stage: refactor
date: 2026-07-18
surface: agent
model: gpt-5
feature: portfolio-website
branch: master
user: anusbutt
command: frontend-design
labels: ["portfolio", "positioning", "full-stack", "ai-engineering", "playwright", "navbar"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .gitignore
  - app/layout.tsx
  - app/page.tsx
  - components/about/About.tsx
  - components/contact/ContactForm.tsx
  - components/hero/Hero.tsx
  - components/nav/Navbar.tsx
  - components/skills/Skills.tsx
  - data/skills.ts
  - package.json
  - package-lock.json
  - playwright.config.ts
  - public/Gemini_Generated_Image_6yaihi6yaihi6yai.jpg
  - tests/homepage.spec.ts
  - history/prompts/portfolio-website/007-full-stack-ai-positioning.refactor.prompt.md
tests:
  - npm run lint (PASS)
  - npm run build (PASS; includes TypeScript validation)
  - npm run test:e2e (PASS; desktop Edge 1440x1000 and mobile Edge 390x844)
  - Playwright screenshot review of hero, capabilities, and contact at both viewports (PASS)
---

## Prompt

first add my picture in the navbar. which is in public folder and $frontend-design Update my portfolio positioning so it clearly presents me as both a full-stack developer and an AI engineer.

Do not redesign the site. Preserve the current visual system, structure, animations, functionality, and strong Omniveer positioning.

Update the copy strategically:

Hero heading:
"I build full-stack web systems and practical AI products for real businesses."

Hero description:
"From production-ready websites and dashboards to AI workflows, APIs, databases, and business automation—built end to end with Next.js, Python, FastAPI, and PostgreSQL."

Hero tags:
- Full-stack web systems
- AI-powered products
- Business automation

About heading:
"Building complete digital products from interface to infrastructure."

About copy:
"I build full-stack websites, dashboards, internal tools, SaaS products, and AI-integrated systems. I work across the full product surface—from responsive Next.js interfaces and backend APIs to databases, automation, deployment, and the AI layer when it adds real value."

Contact heading:
"Need a website, software system, or AI-powered workflow?"

Contact copy:
"Tell me what you are building, where the current process slows down, and what a successful result should look like. I can help turn it into a complete, production-ready system."

Also review the capabilities section and make sure full-stack website development is presented as a first-class service, not merely a supporting skill.

Do not invent clients, metrics, testimonials, or experience. Run lint and build afterward, then use Playwright to verify the desktop and mobile layouts.

## Response snapshot

Added the supplied portrait to the existing navbar identity mark with `next/image` and a face-focused crop. Updated the hero, About, Contact, metadata, structured data, and capabilities copy to position full-stack development and AI engineering as equal first-class services while preserving the current design, interactions, and Omniveer section. Added `@playwright/test` as a development-only dependency plus a focused desktop/mobile responsive test using system Edge. Lint, production build, both Playwright projects, overflow assertions, and screenshot review all passed.

## Outcome

- ✅ Impact: The portfolio now clearly leads with full-stack web systems and practical AI products while retaining the existing Omniveer-focused visual system.
- 🧪 Tests: ESLint, optimized Next.js build, desktop Playwright, mobile Playwright, horizontal-overflow assertions, and focused screenshot review all passed.
- 📁 Files: Visible copy, metadata, capability data, navbar identity, Playwright configuration/tests, package manifests, and one prompt history record were updated or added.
- 🔁 Next prompts: Commit and push the positioning update when ready.
- 🧠 Reflection: Treating full-stack development as the first capability category made the service hierarchy clear without requiring structural or visual redesign.

## Evaluation notes (flywheel)

- Failure modes observed: The first Playwright run connected to a stale local preview; the next run exposed two ambiguous selectors. The stale process was scoped and stopped, selectors were tightened, and the final desktop/mobile run passed.
- Graders run and results (PASS/FAIL): ESLint PASS; Next.js build PASS; Playwright desktop PASS; Playwright mobile PASS; screenshot review PASS.
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Validate the new positioning with real portfolio visitors before changing any additional hierarchy.

---
id: 001
title: Portfolio Constitution Spec Plan Tasks
stage: spec
date: 2026-06-23
surface: agent
model: openrouter/owl-alpha
feature: portfolio-website
branch: main
user: anusbutt
command: init
labels: ["portfolio", "constitution", "spec", "plan", "tasks", "sdd"]
links:
  spec: specs/portfolio-website/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - specs/portfolio-website/spec.md
  - specs/portfolio-website/plan.md
  - specs/portfolio-website/tasks.md
tests:
  - none (artifact creation only, no code yet)
---

## Prompt

You are a senior AI engineer and developer building a personal portfolio website.

You follow Spec-Driven Development (SDD) strictly in this order:
constitution.md → spec.md → plan.md → tasks.md → implementation

CRITICAL RULE: If anything is missing or unclear at any stage, UPDATE THE ARTIFACT FIRST, then implement. Never implement something not captured in the artifacts.

---

## PERSON
- Name: Anus Yousuf
- Title: AI Agent & RAG Chatbot Developer
- Location: Karachi, Pakistan
- GitHub: github.com/anusbutt
- LinkedIn: linkedin.com/in/anus-yousuf
- X: @iamanusbutt
- Bio: "I build agentic AI systems that automate real business workflows"
- About: "Self-taught AI engineer from Karachi building agentic systems in public. I specialize in the 10-80-10 model — 10% direction, 80% agent builds, 10% validation. Currently building a vertical AI agent agency starting with home service businesses."

## STACK
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber + Drei
- Resend (contact form)

## DESIGN
- Background: #0a0a0a
- Primary text: #ffffff
- Accent: #f97316 (orange, used sparingly)
- No stock photos, no AI brain graphics, no generic templates
- No progress bars for skills
- Mobile responsive always
- Reduced motion respected

## INTRO SEQUENCE
Plays on first load, loops until user scrolls:
- Pure black screen
- Text slam sequence (Framer Motion):
  * "Still doing it manually?" — white, bold, slams in
  * Cut to: "There's an agent for that." — orange accent
  * Cut to: AI avatar video (8 sec, HeyGen — use placeholder for now)
  * "I build them. Scroll down." — white
- Avatar dissolves into 3D scene
- Scroll triggers portfolio sections

## 3D SCENE
- React Three Fiber
- Floating geometric shapes (not brain, not generic)
- Orange accent lighting on dark background
- Ambient rotation, responds to mouse movement
- Dissolves when user scrolls past hero

## SECTIONS
1. Hero — name, title, two CTAs: "See My Work" + "Contact Me"
2. Projects — 2 column card grid, stack tags, GitHub links
3. Skills — tag cloud by category, no progress bars
4. About — short paragraph, first person
5. Contact — Resend form (name, email, message)

## PROJECTS
1. Commit Voice — Automated GitHub-to-social-media pipeline — Next.js, Eve, NeonDB, Slack — github.com/anusbutt/commit-voice
2. Nestaro Pilot — Autonomous multi-channel AI employee with HITL approval — FastAPI, Claude API, Gmail, WhatsApp, Instagram, Odoo
3. Sparkflow Lead Agent — AI lead capture agent for home services — FastAPI, Claude API, NeonDB, Next.js
4. RAG Chatbot — Physical AI & Humanoid Robotics textbook chatbot — Cohere, Qdrant, OpenRouter, FastAPI, Docusaurus

## SKILLS
- Languages: Python, TypeScript
- Frameworks: FastAPI, Next.js
- AI: Claude API, OpenRouter, Cohere, Qdrant, LangChain
- Infrastructure: NeonDB, Vercel, Docker, SQLModel

## CONTACT FORM
- Resend API route at app/api/contact/route.ts
- Fields: name, email, message
- Environment variable: RESEND_API_KEY

## RULES
- Write all four artifacts before writing a single line of code
- After each component is built, check against constitution.md before moving on
- For HeyGen avatar use a placeholder video with comment: "REPLACE WITH HEYGEN AVATAR URL"
- Do not skip phases
- Do not start implementation before all artifacts exist

## Response snapshot

Created all four SDD artifacts for the Anus Yousuf portfolio website:

1. **constitution.md** — 6 core principles (Clarity, Mobile-First, Performance, Accessibility, No Secrets, Smallest Viable Change), design constraints, tech standards, code quality, security
2. **spec.md** — 5 user stories (P1: Intro+Hero, Projects; P2: Skills+About, Contact; P3: 3D Scene), 12 functional requirements, 4 key entities, 6 success criteria
3. **plan.md** — Technical context (Next.js 14, TypeScript, Tailwind, Framer Motion, RTF, Resend), project structure, 6 key decisions with rationale, API contract, NFRs, risk analysis
4. **tasks.md** — 41 tasks across 8 phases (Setup, Foundational, US1-US5, Polish), with parallel opportunities and MVP strategy

No code written yet. All artifacts ready for implementation to begin.

## Outcome

- ✅ Impact: All 4 SDD artifacts created. Clear roadmap from constitution through task list. Implementation can now begin incrementally.
- 🧪 Tests: No tests yet — artifacts only. Testing will begin with implementation.
- 📁 Files: constitution.md, spec.md, plan.md, tasks.md
- 🔁 Next prompts: User should approve artifacts, then implementation begins (Phase 1: Setup — initialize Next.js project)
- 🧠 Reflection: Clean separation of concerns. Spec has well-prioritized user stories. Tasks are actionable with clear checkpoints. Plan captures key architectural decisions with rationale.

## Evaluation notes (flywheel)

- Failure modes observed: none yet — artifacts phase only
- Graders run and results (PASS/FAIL): none yet
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Begin implementation starting with Phase 1 (Setup) — initialize Next.js project

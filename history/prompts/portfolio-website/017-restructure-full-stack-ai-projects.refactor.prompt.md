---
id: 017
title: Restructure Full-stack AI Projects
stage: refactor
date: 2026-08-13
surface: agent
model: GPT-5
feature: portfolio-website
branch: master
user: portfolio-owner
command: Update portfolio Selected Work positioning
labels: [portfolio, projects, full-stack-ai, positioning]
links:
  spec: specs/portfolio-website/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - data/projects.ts
  - components/projects/Projects.tsx
  - components/projects/ProjectCard.tsx
  - tests/homepage.spec.ts
  - history/prompts/portfolio-website/017-restructure-full-stack-ai-projects.refactor.prompt.md
tests:
  - npm run lint (PASS)
  - npm run build (PASS)
  - npm run test:e2e (PASS, desktop-edge and mobile-edge)
  - git diff --check (PASS)
  - Playwright screenshot inspection at 1440x1000 and 390x844 (PASS)
---

## Prompt

Update my portfolio at `anasbutt.site` to better position me as a **Full-stack AI Engineer**.

Restructure the **Selected Work / Projects** section instead of just adding more cards.

Use this order:

1. **GraphKeeper** — make this the flagship project
   Repo: https://github.com/anusbutt/Graph_Keeper
   Position it around durable, auditable memory for coding agents, evidence-backed claims, Git-native storage, and agent reliability.

2. **TaskMate**
   Repo: https://github.com/anusbutt/taskmate
   Position it as a full-stack AI task manager where users can create, update, complete, and delete tasks through natural language. Highlight Next.js, FastAPI, PostgreSQL, auth, AI agents, and MCP/tool actions.

3. **Omniveer Duct Lead Qualifier**
   Keep it, but make the description concise and focused on applied AI automation for real business workflows.

4. **RAG-Powered Interactive Robotics Textbook**
   Repo: https://github.com/anusbutt/Physical-AI-Humanoid-Robotics-Textbook
   Do not frame me primarily as a robotics engineer. Focus on the engineering: RAG, embeddings, Qdrant/vector search, source-grounded answers, citations, FastAPI, and deployed interactive learning.

5. **Agent Replay**
   Keep it and emphasize AI-agent debugging, observability, and verification.

Remove **Nestaro Pilot** from the main portfolio. Move **Prospector** to a smaller “More Projects” section if appropriate.

Keep the design minimal and consistent with the current portfolio. Improve hierarchy rather than adding clutter. For each main project, prefer concise copy, clear tech tags, GitHub/demo links where available, and a screenshot or visual only if it genuinely improves the card.

Also update any introductory project-section copy so it reflects **AI agents, full-stack AI systems, developer tooling, RAG, and production automation** rather than mainly lead-generation/business automation.

Do not redesign the entire site or change unrelated sections.

## Response snapshot

Restructured Selected Work into five ordered primary projects with GraphKeeper as the visually distinct flagship, added verified live/source links and concise engineering-focused copy, moved Prospector into a compact More Projects row, removed Nestaro from main work, and updated responsive acceptance coverage. No dependencies or project screenshots were added.

## Outcome

- ✅ Impact: Portfolio now foregrounds Full-stack AI engineering across agent memory, agentic products, applied automation, RAG, and observability.
- 🧪 Tests: Lint, production build, desktop/mobile Playwright tests, diff checks, and screenshot review passed.
- 📁 Files: Four application/test files changed plus this PHR.
- 🔁 Next prompts: Review and deploy the focused portfolio update when ready.
- 🧠 Reflection: Existing editorial rows were retained; hierarchy improved through ordering, copy, restrained flagship emphasis, and a smaller secondary-project treatment.

## Evaluation notes (flywheel)

- Failure modes observed: The first e2e run exposed a stale page-wide assertion that conflicted with restoring the Omniveer project; it was correctly narrowed to the contact section. The in-app browser had no available instance, so passing Playwright screenshots were inspected directly.
- Graders run and results (PASS/FAIL): ESLint PASS; Next.js build/type check PASS; Playwright desktop PASS; Playwright mobile PASS; visual screenshot review PASS.
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Gather hiring-manager feedback on whether the flagship copy communicates agent reliability within one scan.

---
id: 003
title: Portfolio Deploy to GitHub and Vercel
stage: green
date: 2026-06-23
surface: agent
model: openrouter/owl-alpha
feature: portfolio-website
branch: master
user: anusbutt
command: deploy
labels: ["portfolio", "deploy", "github", "vercel", "resend"]
links:
  spec: specs/portfolio-website/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - app/api/contact/route.ts
  - .gitignore
tests:
  - none (deployment verification)
---

## Prompt

User requested: commit, push to GitHub repo (github.com/anusbutt/portfolio), deploy to Vercel, and set contact form email to buttanus3@gmail.com.

## Response snapshot

1. Updated `to` email in `app/api/contact/route.ts` to `buttanus3@gmail.com`
2. Created `.gitignore` (node_modules, .next, .env.local, .vercel, etc.)
3. Committed all 34 files to git
4. Authenticated GitHub CLI via browser (gh auth login --web)
5. Pushed to `https://github.com/anusbutt/portfolio`
6. Deployed to Vercel via `vercel --yes`
7. Build succeeded on Vercel — production deployment live at:
   https://portfolio-2hwq110j8-anus-butts-projects.vercel.app (aliased to https://portfolio-eta-gray-51.vercel.app)

## Outcome

- ✅ Impact: Portfolio live on Vercel, code on GitHub
- 🧪 Tests: Vercel build passed (TypeScript ✓, Next.js ✓, all routes)
- 📁 Files: route.ts (email update), .gitignore (new)
- 🔁 Next prompts: Add RESEND_API_KEY to Vercel env vars, replace avatar placeholder, test contact form live
- 🔴 Error handling: First push attempt failed (SSH key not set up), then HTTPS failed (no credentials). Fixed by authenticating `gh auth login` and using `gh auth setup-git`.

## Evaluation notes (flywheel)

- Failure modes observed: SSH and HTTPS git auth both failed initially — resolved via gh CLI auth
- Graders run and results (PASS/FAIL): Vercel build PASS, deployment PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Add RESEND_API_KEY to Vercel environment variables for contact form to work in production

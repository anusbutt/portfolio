# Portfolio Architecture Refactor Tasks

Tasks are ordered. Each task records its objective, affected files, dependency, and
validation so another session can resume without reconstructing the plan.

## Phase 0 — SDD gate

- [x] **T001 — Write fresh SDD artifacts**
  - Objective: Define final-state requirements, architecture, risks, and acceptance checks.
  - Files: `spec.md`, `plan.md`, `tasks.md`, `PROGRESS.md`.
  - Depends on: repository audit.
  - Validation: all three artifacts agree on scope; no application code changed.

## Phase 1 — Source and content migration

- [x] **T002 — Create the `src/` boundaries**
  - Objective: Move App Router, components, data, and server utility code into the
    planned source tree with minimal behavior changes.
  - Files: `src/app/**`, `src/components/**`, `src/content/**`, `src/server/**`,
    `tsconfig.json`, `tailwind.config.ts`.
  - Depends on: T001.
  - Validation: no root source duplicates; import scan and typecheck pass.

- [x] **T003 — Centralize canonical content**
  - Objective: Move profile, project, skill, social, and education values into typed
    content modules and update all consumers.
  - Files: `src/content/*.ts`, sections, layout, structured data.
  - Depends on: T002.
  - Validation: current five primary projects plus Prospector render in order; no
    duplicated identity constants outside content.

## Phase 2 — Tooling and dependency modernization

- [x] **T004 — Select and apply supported package versions**
  - Objective: Verify the supported Next.js/React pair and update package manifests;
    remove unused Three/R3F packages.
  - Files: `package.json`, `package-lock.json`, `next.config.*`.
  - Depends on: T002.
  - Validation: clean `npm ci`, dependency import audit, build.

- [x] **T005 — Replace legacy lint and scripts**
  - Objective: Add flat ESLint config and predictable scripts for lint, typecheck, e2e,
    and the composite check.
  - Files: `eslint.config.mjs`, `package.json`, Playwright config.
  - Depends on: T004.
  - Validation: each script runs with a clear exit code; `npm run lint` passes.

## Phase 3 — Secure contact boundary

- [x] **T006 — Implement runtime contact validation and abuse protection**
  - Objective: Add unknown-input validation, honeypot handling, bounded in-memory
    limiter, and error taxonomy.
  - Files: `src/server/contact/validation.ts`, `src/server/contact/rate-limit.ts`,
    `src/app/api/contact/route.ts`.
  - Depends on: T002.
  - Validation: malformed, invalid, oversized, honeypot, and repeated requests return
    expected statuses without sending mail.

- [x] **T007 — Isolate the email adapter and configuration**
  - Objective: Keep Resend server-only, move from/to/site URL to environment variables,
    and make provider/configuration failures generic to clients.
  - Files: `src/server/contact/service.ts`, `src/server/email/resend.ts`, `.env.example`.
  - Depends on: T006.
  - Validation: missing config is `503`, provider failure is `502`, success has stable
    response shape, no secret is bundled.

## Phase 4 — Server/client and SEO boundaries

- [x] **T008 — Reduce unnecessary client boundaries**
  - Objective: Keep page, layout, static sections, and content server-rendered; retain
    only navigation/form/cursor and small motion islands.
  - Files: `src/app/page.tsx`, `src/components/**`.
  - Depends on: T003, T007.
  - Validation: source audit of `"use client"`; build; reduced-motion and JS-off behavior.

- [x] **T009 — Add metadata routes and correct public asset naming**
  - Objective: Add metadataBase/canonical/Open Graph/Twitter, robots, sitemap, and fix
    the double-extension logo reference.
  - Files: `src/app/layout.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`, `public/*`.
  - Depends on: T003.
  - Validation: build plus route/content checks for metadata, robots, and sitemap.

## Phase 5 — Public project quality

- [x] **T010 — Add README, CI, and public-repo completeness**
  - Objective: Replace template documentation, add CI, and include only appropriate
    governance files.
  - Files: `README.md`, `.github/workflows/ci.yml`, `.editorconfig`, `LICENSE` as
    justified, and tracked guidance updates.
  - Depends on: T005, T009.
  - Validation: documentation review; CI commands match local scripts.

- [x] **T011 — Expand browser and API acceptance tests**
  - Objective: Cover current content hierarchy, mobile nav, overflow, metadata routes,
    contact errors, and form input preservation without redesigning the test suite.
  - Files: `tests/e2e/**`, any focused test helpers.
  - Depends on: T007, T009.
  - Validation: Playwright on desktop/mobile and relevant route checks.

## Phase 6 — Final validation and review

- [x] **T012 — Run the complete verification matrix**
  - Objective: Execute clean install, lint, typecheck, build, check, e2e, secret scan,
    and internal-link/unused-source review.
  - Files: `PROGRESS.md`, evidence/log files if needed.
  - Depends on: T002–T011.
  - Validation: record exact commands and results; failures remain explicit.

- [x] **T013 — Final architectural review and handoff**
  - Objective: Review the final tree as a public repository, remove only clearly stale
    in-scope files, update progress, and report tradeoffs.
  - Files: `PROGRESS.md`, any final scoped cleanup files.
  - Depends on: T012.
  - Validation: acceptance checklist complete or limitations documented.

## Dependency graph

```text
T001 → T002 → T003 ─┐
          ├→ T004 → T005 ─┐
          ├→ T006 → T007 ─┼→ T008 → T009 → T010 → T011 → T012 → T013
          └────────────────┘
```

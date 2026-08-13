# Portfolio Architecture Refactor Plan

## 1. Scope and dependencies

### In scope

Incrementally migrate the existing portfolio into `src/`, centralize its current
content, isolate the contact server boundary, modernize project tooling, add SEO and
public-repository documentation, and validate the unchanged visual experience.

### Out of scope

Visual redesign, new features such as 3D, auth, CMS, analytics, external rate limiting,
or a wholesale component rewrite.

### External dependencies

- Next.js/React and npm registry: framework and package compatibility.
- Resend: contact email delivery, configured by the site owner.
- Vercel: production hosting and environment variables.
- GitHub Actions: CI execution and browser dependencies.
- Microsoft Edge/Playwright Chromium availability: local browser validation.

## 2. Target architecture

```text
public/
src/
  app/
    api/contact/route.ts
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
  components/
    sections/       # server-rendered section shells
    layout/         # navigation/footer
    ui/             # focused reusable primitives
    client/         # small state/effect islands
  content/
    profile.ts
    projects.ts
    skills.ts
    socials.ts
    education.ts
  server/contact/
    validation.ts
    rate-limit.ts
    service.ts
  server/email/
    resend.ts
tests/e2e/
.github/workflows/ci.yml
```

The existing design components move with minimal semantic changes. The server
section shells import canonical content and render it; motion is delegated to small
client wrappers rather than turning every section into a client boundary.

## 3. Ordered implementation map

| Step | Requirement | Concrete changes | Validation |
|---|---|---|---|
| 1 | R1, R3 | Add `src/` tree, move content and app/component files, update alias and Tailwind content globs | Typecheck, import scan, homepage smoke test |
| 2 | R5 | Verify stable package versions, remove unused 3D packages, add flat ESLint and scripts | `npm ci`, lint, typecheck |
| 3 | R4 | Add runtime validator, bounded in-memory limiter, contact service, server-only Resend adapter, env docs | Unit-level route checks and API/browser behavior |
| 4 | R2 | Convert static sections to Server Components and retain only focused client islands | Build plus source boundary audit |
| 5 | R6 | Add canonical profile metadata, robots, sitemap, rename logo, add safe site URL helper | Build and route/content assertions |
| 6 | R7 | Replace README, add CI and appropriate public-repo files, update Playwright config/tests | Markdown/config review and CI-equivalent local commands |
| 7 | All | Run final checks, inspect generated output, update progress and report limitations | Full validation matrix |

## 4. Migration details and compatibility risks

### Files to add

- `src/content/*` canonical content modules.
- `src/server/contact/*` and `src/server/email/*` server boundary modules.
- `src/app/robots.ts`, `src/app/sitemap.ts`.
- `eslint.config.mjs`, `.github/workflows/ci.yml`, `PROGRESS.md`, and relevant docs.
- Additional focused tests for contact validation/limiting if the chosen test setup
  supports them without adding unnecessary dependencies.

### Files to change

- `package.json` and lockfile, `tsconfig.json`, `next.config.*`, Tailwind config,
  Playwright config, `.env.example`.
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`.
- Existing sections, navigation, cursor, and form after migration.
- README and tracked project guidance where it describes stale structure.

### Files to remove or relocate

- Root `app/`, `components/`, `data/`, and `lib/` after their contents are migrated.
- `.eslintrc.json` after flat config is in place.
- Unused 3D packages and the misspelled duplicate-extension asset name.
- No SDD/history/evidence/graph file is removed without a separate rationale.

### Compatibility risks

1. A major Next.js/React upgrade may change lint, metadata, or font behavior. Verify
   the exact supported pair first and use the lockfile.
2. Moving the alias to `src/*` can leave stale imports. Use a complete import scan and
   TypeScript build before deleting root duplicates.
3. Making sections server-rendered can change animation timing. Preserve the existing
   visual transition through small client wrappers and test reduced motion.
4. In-memory rate limiting is per instance and resets on deploy. Document this
   intentional low-traffic portfolio tradeoff; a managed limiter is a future option.
5. `metadataBase` depends on an environment URL. Use a deterministic default and
   document the deployment override.

## 5. Behavior preservation strategy

- Keep current copy, project order, URLs, section IDs, color tokens, spacing language,
  and mobile menu behavior.
- Keep the custom cursor as an optional desktop-only client island and preserve the
  coarse-pointer fallback.
- Keep form field names, validation limits, success text, and error-state input
  preservation while improving server validation and configuration.
- Keep `framer-motion` only where it materially supports existing entrance/cursor
  behavior; do not add a new motion system.

## 6. Validation gates

1. After migration: imports, typecheck, and no duplicate root source.
2. After tooling/dependency update: clean install, lint, typecheck, and build.
3. After contact refactor: malformed-body, validation, limiter, missing-config, and
   provider-error checks, plus form preservation in the browser.
4. After SEO/docs/CI: metadata route and source scans, README/config review.
5. Final: `npm ci`, lint, typecheck, build, `check`, e2e, responsive overflow, mobile
   navigation, anchor links, robots, sitemap, and secret scan.

## 7. Operational readiness

- Log only server-side error categories and request correlation context that contains
  no message body or secret.
- Return `429` with `Retry-After` for limiter rejection and generic `5xx` responses for
  configuration/provider failures.
- Vercel environment variables are the production source of truth.
- Roll back through the previous Git/Vercel deployment if the contact provider or build
  fails.
- CI is the required merge gate; no deployment automation is added in this task.

## 8. Architectural decision checkpoint

The framework/tooling upgrade, `src/` migration, and server/client boundary are
cross-cutting decisions with long-term consequences and multiple viable options.
They should be offered as one grouped ADR after implementation validation rather than
created automatically.

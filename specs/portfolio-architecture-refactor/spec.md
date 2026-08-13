# Portfolio Architecture Refactor Specification

**Feature**: `portfolio-architecture-refactor`  
**Status**: Implemented and validated  
**Date**: 2026-08-13  
**Source**: `Codex Prompt — Portfolio Architecture Refactor with Pure SDD.md`

## 1. Context and current-state findings

The repository is a working Next.js portfolio on the `refactor/full-stack-ai-projects`
branch. Its current visual identity is a dark, editorial portfolio with white text,
orange accents, grid texture, responsive navigation, project hierarchy, skills,
education, social links, and a Resend-backed contact form. The refactor must preserve
that identity and the current content hierarchy.

The audit found:

- App Router files and reusable components currently live at repository root.
- Portfolio content is split across `data/` and component-local constants.
- Several whole sections are Client Components only to use Framer Motion.
- The contact route casts `request.json()` directly, hard-codes sender/recipient
  values, and has no abuse protection.
- Tooling uses Next 14's legacy `.eslintrc.json` and `next lint` script.
- There are no `robots.ts`, `sitemap.ts`, CI workflow, or professional README.
- `public/logo.png.png` is a suspiciously named asset referenced by metadata and nav.
- React Three Fiber/Three dependencies are installed but not used by the current app.
- Existing GraphKeeper evidence records five primary projects and Prospector as a
  secondary project; those entries are authoritative for the content migration.
- The baseline lint/typecheck command exceeded the two-minute execution budget before
  returning a result; this is not considered a pass.

## 2. Scope

### In scope

1. Move the application to a clear `src/` App Router structure without changing the
   rendered design or portfolio content unless correctness, accessibility, security,
   or maintainability requires it.
2. Establish a canonical server-safe content layer for profile, projects, skills,
   socials, and education.
3. Reduce client JavaScript to focused islands for navigation, form state, cursor,
   and viewport animation behavior. Static section shells and data rendering remain
   Server Components.
4. Refactor the contact endpoint into route → validation → abuse protection →
   application function → Resend adapter, with predictable errors and environment
   configuration.
5. Modernize dependencies and tooling to a currently supported stable Next.js/React
   stack after verifying exact versions from authoritative package sources.
6. Add App Router metadata, canonical URL handling, `robots.ts`, and `sitemap.ts`.
7. Add a useful quality gate, CI, responsive/accessibility tests, and repository
   documentation.
8. Audit public-repository hygiene and secret-like content without publishing
   credentials or deleting useful project history blindly.

### Out of scope

- A visual redesign, new portfolio sections, new projects, new 3D experience, or a
  replacement animation system.
- A database, authentication system, external rate-limit service, CMS, analytics
  integration, or generic email relay.
- Rewriting working visual components solely to make the diff larger.
- Deleting `.specify/`, `history/`, `evidence/`, or `graph/` without an explicit
  public-repository policy decision and evidence review.
- Production deployment or changing Vercel project settings.

## 3. Functional requirements

### R1 — Repository architecture

- The final application uses `src/app`, `src/components`, `src/content`, and
  `src/server` boundaries.
- The contact route is at `src/app/api/contact/route.ts`.
- Existing imports use the `@/` alias and the alias resolves to `src/*`.
- Component names and existing section IDs remain stable unless a correctness fix
  requires a change.

### R2 — Server-first rendering

- `src/app/page.tsx`, static section components, content modules, layout, and SEO
  routes are Server Components.
- Client Components are limited to browser state/effects: mobile menu, contact form,
  custom cursor, and small viewport animation wrappers where needed.
- No Redux, dependency injection, repository layer, or other enterprise abstraction is
  introduced.
- Static portfolio text is present in the server-rendered HTML.
- `prefers-reduced-motion` disables or minimizes nonessential motion.

### R3 — Canonical content

- A single content module owns identity/metadata values used by layout, hero, footer,
  and structured data.
- Projects preserve the current five primary projects and Prospector as secondary,
  including links, descriptions, problem statements, and technology lists.
- Skills, socials, and education move into the same canonical content boundary.
- No secret, API key, or deployment-only value is stored in content modules.

### R4 — Contact boundary

- The route accepts only a JSON object with `name`, `email`, `message`, and an
  optional honeypot field; unknown or malformed JSON returns a predictable `400`.
- Server validation trims and bounds fields, validates email syntax, and never trusts
  a TypeScript cast as runtime validation.
- A honeypot submission is rejected without sending mail.
- A lightweight per-process, bounded-window limiter prevents repeated submissions from
  one IP. The implementation must fail closed for the limiter's own malformed input
  but must not crash the route.
- Sender address, recipient address, and public site URL are environment-driven;
  `RESEND_API_KEY` remains server-only.
- Missing configuration returns a generic `503` response and logs diagnostic detail
  only on the server.
- Resend failures return a generic `502` response; validation returns `400`; a
  limited request returns `429` with `Retry-After`; success returns `200` with the
  same stable success shape.
- The endpoint sends only the portfolio contact message and cannot be used to choose
  arbitrary recipients, sender addresses, or headers.

### R5 — Tooling and dependencies

- `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`,
  `npm run test:e2e`, and `npm run check` are available.
- ESLint uses flat config and does not depend on the removed `next lint` command.
- TypeScript remains strict with no unjustified `any`.
- Unused React Three Fiber, Drei, and Three packages are removed because the current
  app does not use them and reintroducing a 3D feature is out of scope.
- Package upgrades are deliberate, lockfile-backed, and verified against the chosen
  Next.js/React compatibility range.

### R6 — Metadata and public assets

- `metadataBase`, canonical URL, title, description, Open Graph, Twitter card, and
  icon references are valid for the configured site URL.
- `src/app/robots.ts` and `src/app/sitemap.ts` are present and use the canonical site
  URL.
- The double-extension logo asset is renamed to a deliberate filename and all
  references are updated.
- No untrusted content is injected into the page as HTML.

### R7 — Repository hygiene and documentation

- README explains purpose, architecture, stack, setup, environment variables,
  commands, tests, deployment, and important decisions without template boilerplate.
- `.env.example` documents every required variable with safe placeholders and no
  live secret.
- A CI workflow runs clean install, lint, typecheck, build, and the browser checks
  where the runner supports them.
- Add only open-source completeness files that make sense for this portfolio. A
  permissive license is included only if the repository's public intent supports it;
  private agent history remains clearly separated from production source.

## 4. Acceptance criteria

- [ ] The final source tree has the planned `src/` boundaries and no stale duplicate
      application/content tree remains.
- [ ] The homepage preserves current headings, project order, section IDs, links,
      dark/orange design, responsive navigation, and contact interaction.
- [ ] Static content is server-rendered and client boundaries are limited and
      explainable.
- [ ] Contact requests with non-object JSON, missing fields, invalid email, oversized
      fields, honeypot input, repeated IP submissions, missing configuration, and
      provider failure follow the specified error taxonomy.
- [ ] No secret-like value is tracked or emitted to the client bundle.
- [ ] `npm ci`, `npm run lint`, `npm run typecheck`, `npm run build`, `npm run check`,
      and `npm run test:e2e` are run and results are recorded.
- [ ] Metadata, favicon, robots, sitemap, internal anchors, mobile layout, and
      horizontal-overflow checks pass.
- [ ] README, CI, environment documentation, and progress report describe the final
      architecture and intentional tradeoffs.

## 5. Error and compatibility constraints

The refactor must not expose whether an email address is configured, leak provider
errors, or accept arbitrary Resend fields. If the production site URL is unavailable
at build time, metadata and sitemap generation must use a documented safe default and
remain deterministic. If a browser does not support a motion API, the content and
navigation remain usable. If an external email provider is unavailable, the form
retains user input and reports a retryable generic error.

## 6. Definition of done

The repository is considered done when the implementation, documentation, CI, and
verification results satisfy all acceptance criteria, the final review finds no clear
stale architecture or secret exposure, and `PROGRESS.md` records remaining intentional
limitations.

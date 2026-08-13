# Anus Butt Portfolio

Personal portfolio for Anus Butt, an AI engineer and full-stack engineer building auditable agent systems, developer tools, and production web applications.

Live site: https://anusbutt.com

## Architecture

This is a server-first Next.js App Router application.

- `src/app` contains the page, layout, metadata routes, and contact route.
- `src/components` contains server-rendered sections plus small client islands for navigation, the form, and the custom cursor.
- `src/content` is the canonical typed source for profile, projects, skills, socials, and education.
- `src/server` contains the contact validation, in-memory abuse limiter, application function, and Resend adapter.
- `tests` contains Playwright browser and API acceptance checks.

The refactor preserves the existing dark editorial visual identity and project hierarchy. Unused React Three Fiber/Three packages were removed because the current portfolio does not render a 3D scene.

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Resend, and Playwright.

## Local setup

Requirements: Node.js 20.9 or newer and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

On PowerShell, copy the environment file with:

```powershell
Copy-Item .env.example .env.local
```

The contact form remains safe but unavailable until the Resend variables are configured. The sender must be verified with Resend.

## Environment variables

- `NEXT_PUBLIC_SITE_URL` — canonical public site URL.
- `RESEND_API_KEY` — server-only Resend API key.
- `CONTACT_FROM_EMAIL` — verified Resend sender address.
- `CONTACT_TO_EMAIL` — fixed portfolio inbox destination.

Never expose `RESEND_API_KEY` to client code or commit `.env.local`.

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm run test:e2e
npm run check
```

`npm run check` runs lint, typecheck, and the production build. Playwright starts the local app on port 3100 for browser tests.

## Deployment

Deploy the repository to Vercel with the four environment variables configured in the project settings. Pushes to the main branch can use the included GitHub Actions checks as the merge gate. The contact limiter is intentionally an in-memory, per-instance guard suitable for low-volume portfolio traffic; a managed limiter would be the next step if abuse volume grows.

## Contributing and security

Small fixes should preserve the current visual identity, accessibility, strict typing, and server/client boundaries. See `CONTRIBUTING.md` for the lightweight contribution workflow and `SECURITY.md` for reporting vulnerabilities.
# Implementation Plan: Anus Yousuf Portfolio Website

**Branch**: `001-portfolio-website` | **Date**: 2026-06-23 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/portfolio-website/spec.md`

## Summary

Build a dark-themed personal portfolio website for Anus Yousuf using Next.js 14 App Router. The site features an intro text-slam animation sequence, an interactive 3D hero scene (React Three Fiber), project showcase, skills tag cloud, about section, and a Resend-powered contact form. Mobile-first responsive design with strict accessibility and performance requirements.

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode)
**Primary Dependencies**: Next.js 14 (App Router), React 18, Tailwind CSS 3.4, Framer Motion 11, React Three Fiber 8, Drei 9, Resend 2.0, Three.js 0.160
**Storage**: N/A (static content, no database. Resend handles email delivery)
**Testing**: Manual verification against acceptance scenarios (no formal test framework for this portfolio)
**Target Platform**: Web — deployed to Vercel, works on all modern browsers (Chrome, Firefox, Safari, Edge)
**Project Type**: Web application (Next.js full-stack with API route)
**Performance Goals**: LCP <3s on 4G, ≥90 Lighthouse scores, 60fps animations, ≥30fps 3D scene
**Constraints**: No stock photos, no AI brain graphics, no progress bars, reduced motion support, WCAG AA
**Scale/Scope**: Single-page portfolio with 6 sections, 4 project cards, ~20 skill tags, 1 API route

## Constitution Check

| Principle | Status | Notes |
|-----------|--------|-------|
| Clarity Over Cleverness | ✅ Pass | Straightforward component architecture, no unnecessary abstractions |
| Mobile-First | ✅ Pass | Tailwind mobile-first breakpoints, responsive grid |
| Performance as Feature | ✅ Pass | Lazy-loaded 3D, optimized images, no render-blocking resources |
| Accessibility | ✅ Pass | Semantic HTML, ARIA labels, keyboard nav, reduced motion |
| No Secrets in Code | ✅ Pass | RESEND_API_KEY in .env, .env.example provided |
| Smallest Viable Change | ✅ Pass | Tasks are incremental and independently testable |

## Project Structure

### Documentation (this feature)

```text
specs/portfolio-website/
├── spec.md               # Feature specification (user stories, requirements)
├── plan.md               # This file (architecture and technical decisions)
└── tasks.md              # Actionable task list (/sp.tasks output)
```

### Source Code (repository root)

```text
portfolio/
├── app/
│   ├── layout.tsx        # Root layout (fonts, metadata, global styles)
│   ├── page.tsx          # Main page (composes all sections)
│   ├── globals.css       # Global CSS (Tailwind imports, CSS variables)
│   └── api/
│       └── contact/
│           └── route.ts  # Resend contact form API route
├── components/
│   ├── intro/
│   │   └── IntroSequence.tsx    # Text-slam intro animation
│   ├── hero/
│   │   ├── Hero.tsx             # Hero section (name, title, CTAs)
│   │   └── Scene3D.tsx          # React Three Fiber 3D scene
│   ├── projects/
│   │   ├── Projects.tsx         # Projects section container
│   │   └── ProjectCard.tsx      # Individual project card
│   ├── skills/
│   │   └── Skills.tsx           # Skills tag cloud section
│   ├── about/
│   │   └── About.tsx            # About section with bio
│   ├── contact/
│   │   └── ContactForm.tsx      # Contact form with Resend integration
│   └── ui/
│       └── SectionHeading.tsx   # Reusable section heading component
├── data/
│   ├── projects.ts              # Project data (4 projects)
│   ├── skills.ts                # Skills data (by category)
│   └── socials.ts               # Social links data
├── lib/
│   └── resend.ts                # Resend client configuration
├── public/
│   └── avatar-placeholder.mp4   # Placeholder for HeyGen avatar video
├── .env.example                 # Environment variable template
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration (custom colors)
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

**Structure Decision**: Single Next.js web application using App Router. Components organized by section/feature. Data separated into `data/` directory for easy content updates. API route for contact form in `app/api/contact/`. No backend server needed — Resend handles email via API.

## Key Decisions & Rationale

### 1. Next.js App Router over Pages Router
**Decision**: Use App Router (Next.js 14)
**Rationale**: App Router is the future of Next.js. Server Components by default reduce client JS. Simpler data fetching patterns. Better streaming support.
**Trade-off**: Slightly newer patterns, but well-documented.

### 2. React Three Fiber for 3D (Lazy Loaded)
**Decision**: Use RTF + Drei, dynamically imported with `next/dynamic` and `ssr: false`
**Rationale**: RTF is the standard React wrapper for Three.js. Drei provides useful abstractions (Float, OrbitControls). Lazy loading prevents blocking initial render.
**Trade-off**: 3D adds bundle size, but lazy loading mitigates this. Fallback for no-WebGL.

### 3. Framer Motion for Animations
**Decision**: Framer Motion for all UI animations (intro sequence, scroll transitions)
**Rationale**: Declarative API, excellent React integration, built-in `useReducedMotion()` hook, layout animations, AnimatePresence for exit animations.
**Trade-off**: Adds ~30kb to bundle, but worth it for animation quality and DX.

### 4. Resend for Contact Form
**Decision**: Resend API with Next.js API route
**Rationale**: Simple API, generous free tier (3000 emails/month), React Email support if needed later, well-documented.
**Trade-off**: Requires API key, but that's standard for email services.

### 5. Data in Static Files vs Database
**Decision**: Static TypeScript data files (`data/` directory)
**Rationale**: Portfolio content changes infrequently. No need for a database. Static files are simpler, faster, and free.
**Trade-off**: Requires code change to update content, but that's acceptable for a portfolio.

### 6. No CSS-in-JS (Tailwind Only)
**Decision**: Tailwind CSS utility classes only, no styled-components or emotion
**Rationale**: Tailwind is already in the stack. Zero runtime CSS-in-JS overhead. Smaller bundle. Consistent design tokens.
**Trade-off**: Some verbosity in className strings, but Tailwind's design system enforces consistency.

## Interfaces & API Contracts

### Contact Form API

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required, 1-100 chars)",
  "email": "string (required, valid email)",
  "message": "string (required, 1-2000 chars)"
}
```

**Success Response** (200):
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Error Responses**:
- `400` — Validation error (missing/invalid fields)
- `500` — Server error (Resend failure, missing API key)

**Validation Rules**:
- `name`: Required, 1-100 characters
- `email`: Required, valid email format
- `message`: Required, 1-2000 characters

## Non-Functional Requirements

### Performance
- LCP <3s on 4G
- Lazy load 3D scene (dynamic import, ssr: false)
- Optimize all images (next/image)
- No render-blocking JS in critical path
- Target ≥90 Lighthouse Performance score

### Reliability
- Contact form handles API errors gracefully
- 3D scene has fallback for no-WebGL
- Form preserves data on error
- Form prevents double-submission

### Security
- RESEND_API_KEY in environment variable (never in code)
- Input validation server-side
- No XSS vectors (React escapes by default)
- Rate limiting: Client-side debounce + server-side consideration

### Accessibility
- Semantic HTML (section, nav, main, form, label)
- ARIA labels on interactive elements
- Keyboard navigable
- Color contrast ≥ WCAG AA
- `prefers-reduced-motion` respected everywhere

## Data Management

### Source of Truth
- Project data: `data/projects.ts`
- Skills data: `data/skills.ts`
- Social links: `data/socials.ts`

### Schema Evolution
Data is static TypeScript — no migration needed. Content updates are direct file edits.

## Operational Readiness

### Deployment
- Vercel (Next.js native hosting)
- Environment variables configured in Vercel dashboard
- Automatic deployments on push to main

### Monitoring
- Vercel Analytics (optional, can be added later)
- Resend dashboard for email delivery tracking

### Rollback
- Git-based — revert to previous commit, Vercel auto-deploys

## Risk Analysis

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| 3D scene performance on low-end devices | Medium | Medium | Lazy load, fallback for no-WebGL, reduced motion disables 3D |
| Resend API key expiry/rotation | Low | High | Document key rotation in README, monitor Resend dashboard |
| Avatar video placeholder looks unprofessional | Medium | Low | Use a clean placeholder (colored div with initials), replace with HeyGen later |
| Intro sequence annoying on repeat visits | Medium | Low | Use sessionStorage to skip intro on return visits |

## Complexity Tracking

No constitution violations. All choices align with the principles.

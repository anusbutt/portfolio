# Anus Yousuf Portfolio Constitution

## Core Principles

### I. Clarity Over Cleverness
Code must be readable and self-documenting. Prefer explicit, straightforward implementations. Every component and function should have a single, obvious purpose. Complex abstractions must be justified with a comment explaining why a simpler approach was insufficient.

### II. Mobile-First, Always
Every UI component must be designed mobile-first. Responsive breakpoints are progressive enhancements, not afterthoughts. Touch targets, font sizes, and spacing must work on small screens before being adapted for larger viewports.

### III. Performance as a Feature
The portfolio must load fast and run smooth. Lazy load heavy dependencies (3D scene, animations). Respect `prefers-reduced-motion`. Optimize images and assets. No render-blocking resources in the critical path. Target: <3s LCP on 4G.

### IV. Accessibility is Non-Negotiable
Semantic HTML, proper ARIA labels, keyboard navigation, sufficient color contrast (WCAG AA minimum). The site must be usable without JavaScript where possible. Screen reader friendly. Focus management for interactive elements.

### V. No Secrets in Code
All API keys, tokens, and sensitive configuration must live in environment variables (`.env`). Never hardcode credentials. The `.env.example` file documents required variables without exposing values.

### VI. Smallest Viable Change
Each commit and PR should be the smallest change that delivers value and passes checks. No unrelated refactors. No "while I'm here" changes. If it's not in the spec, it doesn't get built.

## Design Constraints

- **Background**: `#0a0a0a` (pure dark)
- **Primary text**: `#ffffff` (white)
- **Accent**: `#f97316` (orange, used sparingly — max 10% of visual weight)
- **No stock photos, no AI brain graphics, no generic templates**
- **No progress bars for skills** — use tag cloud instead
- **Reduced motion**: All animations must respect `prefers-reduced-motion: reduce`

## Technology Standards

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS (no custom CSS files unless absolutely necessary)
- **Animations**: Framer Motion (with reduced motion support)
- **3D**: React Three Fiber + Drei (lazy loaded, dissolves on scroll)
- **Email**: Resend API for contact form
- **Deployment**: Vercel (implied by Next.js)

## Code Quality Standards

- **TypeScript**: Strict mode enabled. No `any` types without justification comment.
- **Components**: Functional components with explicit prop types (interfaces, not type aliases for props)
- **File naming**: PascalCase for components, camelCase for utilities, kebab-case for page routes
- **Imports**: Use `@/` path alias for src-relative imports
- **Error handling**: All API routes must have try/catch with proper HTTP status codes
- **Loading states**: All async operations must have loading/error states

## Security Requirements

- Environment variables for all secrets (RESEND_API_KEY)
- Input validation on contact form (server-side)
- Rate limiting consideration for API routes
- No eval(), no dangerouslySetInnerHTML without sanitization
- Content Security Policy headers recommended

## Governance

This constitution supersedes all other practices. Amendments require documentation and approval. All code changes must verify compliance with these principles. Complexity must be justified — when in doubt, choose the simpler approach.

**Version**: 1.0.0 | **Ratified**: 2026-06-23 | **Last Amended**: 2026-06-23

# Tasks: Anus Yousuf Portfolio Website

**Input**: Design documents from `/specs/portfolio-website/`
**Prerequisites**: plan.md ✅, spec.md ✅

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Next.js 14 project with TypeScript and Tailwind CSS
- [ ] T002 [P] Configure Tailwind with custom colors (#0a0a0a, #ffffff, #f97316) in tailwind.config.ts
- [ ] T003 [P] Create .env.example with RESEND_API_KEY placeholder
- [ ] T004 [P] Create project directory structure (components/, data/, lib/, app/api/)
- [ ] T005 Install dependencies: framer-motion, @react-three/fiber, @react-three/drei, three, resend

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [ ] T006 Create app/globals.css with Tailwind imports and CSS variables for colors
- [ ] T007 Create app/layout.tsx with metadata, font imports, and global structure
- [ ] T008 Create data/projects.ts with 4 project entries (Commit Voice, Nestaro Pilot, Sparkflow Lead Agent, RAG Chatbot)
- [ ] T009 [P] Create data/skills.ts with skills organized by category (Languages, Frameworks, AI, Infrastructure)
- [ ] T010 [P] Create data/socials.ts with GitHub, LinkedIn, X links
- [ ] T011 Create lib/resend.ts with Resend client initialization
- [ ] T012 Create app/api/contact/route.ts with POST handler (validation + Resend send)
- [ ] T013 Create components/ui/SectionHeading.tsx reusable heading component

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 — First Impression & Hero (Priority: P1) 🎯 MVP

**Goal**: Intro sequence plays on first load, hero section displays name/title/CTAs, scroll transitions work

**Independent Test**: Load page → intro plays → scroll → hero visible with name, title, two CTAs

- [ ] T014 [P] [US1] Create components/intro/IntroSequence.tsx — text slam animation with Framer Motion ("Still doing it manually?" → "There's an agent for that." → avatar placeholder → "I build them. Scroll down."), exits on scroll, respects prefers-reduced-motion
- [ ] T015 [P] [US1] Create components/hero/Hero.tsx — name "Anus Yousuf", title "AI Agent & RAG Chatbot Developer", two CTAs ("See My Work" → #projects, "Contact Me" → #contact)
- [ ] T016 [P] [US1] Create components/hero/Scene3D.tsx — React Three Fiber canvas with floating geometric shapes, orange accent lighting, ambient rotation, mouse movement response (dynamically imported, ssr: false)
- [ ] T017 [US1] Compose hero section integrating Hero.tsx and Scene3D.tsx with proper layout (3D as background, text overlay)
- [ ] T018 [US1] Wire up scroll-based transition: intro exits → hero + 3D scene visible → scroll past hero → 3D dissolves
- [ ] T019 [US1] Add sessionStorage logic to skip intro on return visits

**Checkpoint**: US1 complete — intro and hero work independently

---

## Phase 4: User Story 2 — Projects Showcase (Priority: P1) 🎯 MVP

**Goal**: 4 project cards in responsive 2-column grid with descriptions, tags, GitHub links

**Independent Test**: Navigate to #projects → see 4 cards with title, description, tech tags, GitHub links

- [ ] T020 [P] [US2] Create components/projects/ProjectCard.tsx — card with project name, description, tech stack tags, GitHub link (opens in new tab)
- [ ] T021 [US2] Create components/projects/Projects.tsx — section container with 2-column grid (1-col on mobile), maps data/projects.ts through ProjectCard
- [ ] T022 [US2] Add scroll-triggered entrance animation to project cards (staggered fade-in)

**Checkpoint**: US2 complete — projects section works independently

---

## Phase 5: User Story 3 — Skills & About (Priority: P2)

**Goal**: Skills tag cloud by category, about section with bio and social links

**Independent Test**: Navigate to #skills → see tag cloud by category. Navigate to #about → see bio paragraph + social links.

- [ ] T023 [P] [US3] Create components/skills/Skills.tsx — tag cloud layout, skills grouped by category, NO progress bars, tags styled with subtle borders/background
- [ ] T024 [P] [US3] Create components/about/About.tsx — first-person bio paragraph, social links (GitHub, LinkedIn, X) with icons
- [ ] T025 [US3] Add scroll-triggered entrance animation to skills and about sections

**Checkpoint**: US3 complete — skills and about sections work independently

---

## Phase 6: User Story 4 — Contact Form (Priority: P2)

**Goal**: Working contact form with validation, Resend integration, success/error states

**Independent Test**: Fill form → submit → message sent via Resend → success message shown

- [ ] T026 [US4] Create components/contact/ContactForm.tsx — name, email, message fields with labels, client-side validation, loading state, success/error feedback
- [ ] T027 [US4] Implement form submission handler (fetch POST to /api/contact)
- [ ] T028 [US4] Add double-submission prevention (disable button during submit)
- [ ] T029 [US4] Wire up API route validation: return 400 for missing/invalid fields, 500 for server errors

**Checkpoint**: US4 complete — contact form works end-to-end

---

## Phase 7: User Story 5 — 3D Scene Polish (Priority: P3)

**Goal**: 3D scene is polished with proper lighting, smooth interaction, and graceful fallback

**Independent Test**: 3D scene renders at ≥30fps, responds to mouse, dissolves on scroll, fallback works without WebGL

- [ ] T030 [US5] Polish Scene3D.tsx: add proper ambient + point lighting (orange accent), smooth mouse-follow with lerp
- [ ] T031 [US5] Add dissolve/fade-out animation when scrolling past hero (opacity transition via Framer Motion)
- [ ] T032 [US5] Add WebGL detection fallback — show static gradient background if WebGL unavailable
- [ ] T033 [US5] Ensure 3D scene is dynamically imported with ssr: false to avoid SSR issues

**Checkpoint**: US5 complete — 3D scene is polished and resilient

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements across all sections

- [ ] T034 [P] Compose app/page.tsx — assemble all sections in order: IntroSequence, Hero (with Scene3D), Projects, Skills, About, ContactForm
- [ ] T035 [P] Add smooth scroll behavior and section anchor links
- [ ] T036 [P] Add scroll-triggered section entrance animations (fade/slide up)
- [ ] T037 Verify responsive design: test at 320px, 768px, 1024px, 1440px, 2560px
- [ ] T038 Verify prefers-reduced-motion: skip intro, reduce animations, disable 3D motion
- [ ] T039 Verify accessibility: semantic HTML, ARIA labels, keyboard navigation, color contrast
- [ ] T040 Run Lighthouse audit and address any issues below 90 score
- [ ] T041 Add loading states and error boundaries where applicable

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Setup — BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational completion
  - US1 and US2 can proceed in parallel (P1 priority)
  - US3, US4, US5 can proceed in parallel after Foundational
- **Polish (Phase 8)**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (P1)**: After Foundational — No story dependencies
- **US2 (P1)**: After Foundational — No story dependencies
- **US3 (P2)**: After Foundational — No story dependencies
- **US4 (P2)**: After Foundational — Depends on T012 (API route) from Foundational
- **US5 (P3)**: After Foundational — Enhances T016 from US1

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel
- US1 and US2 can be worked on simultaneously after Foundational
- US3, US4, US5 can run in parallel after Foundational

---

## Implementation Strategy

### MVP First (US1 + US2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: US1 (Intro + Hero)
4. Complete Phase 4: US2 (Projects)
5. **STOP and VALIDATE**: Test intro → hero → projects flow
6. Deploy to Vercel for early feedback

### Incremental Delivery

1. Add US3 → Skills + About → Validate
2. Add US4 → Contact Form → Validate
3. Add US5 → 3D Polish → Validate
4. Polish phase → Final validation → Launch

# Feature Specification: Anus Yousuf Portfolio Website

**Feature Branch**: `001-portfolio-website`
**Created**: 2026-06-23
**Status**: Draft
**Input**: User description: "Build a personal portfolio website for Anus Yousuf — AI Agent & RAG Chatbot Developer from Karachi, Pakistan. Next.js 14, TypeScript, Tailwind CSS, Framer Motion, React Three Fiber. Dark theme (#0a0a0a bg, white text, orange accent). Intro text-slam sequence, 3D scene, hero, projects, skills, about, contact form with Resend."

## User Scenarios & Testing *(mandatory)*

### User Story 1 — First Impression & Hero (Priority: P1)

A visitor lands on the portfolio and immediately understands who Anus is and what he does. The intro sequence plays, the hero section is clear, and CTAs guide them to explore or get in touch.

**Why this priority**: This is the entry point. Without it, no other section matters — if the first impression fails, the user leaves.

**Independent Test**: Load the page in a browser. Verify the intro text-slam sequence plays, the hero shows name + title + two CTAs, and scrolling past the hero transitions smoothly into content.

**Acceptance Scenarios**:

1. **Given** the page is loading for the first time, **When** the user visits the site, **Then** a full-screen intro sequence plays with text slam animations ("Still doing it manually?" → "There's an agent for that." → avatar placeholder → "I build them. Scroll down.")
2. **Given** the intro sequence is playing, **When** the user scrolls, **Then** the intro exits and the portfolio sections become visible
3. **Given** the hero section is visible, **When** the user views it, **Then** they see "Anus Yousuf" as the name, "AI Agent & RAG Chatbot Developer" as the title, and two CTAs: "See My Work" and "Contact Me"
4. **Given** the user prefers reduced motion, **When** the page loads, **Then** the intro sequence is skipped and the hero is shown immediately
5. **Given** the user is on mobile, **When** they view the hero, **Then** all elements are readable and properly spaced

---

### User Story 2 — Projects Showcase (Priority: P1)

A visitor can browse Anus's projects with clear descriptions, tech stacks, and GitHub links. Each project card is informative and visually distinct.

**Why this priority**: Projects are the core proof of skill. Recruiters and clients want to see what you've built.

**Independent Test**: Navigate to the Projects section. Verify all 4 project cards render with title, description, tech stack tags, and GitHub links.

**Acceptance Scenarios**:

1. **Given** the Projects section is visible, **When** the user views it, **Then** they see a 2-column grid of project cards (1 column on mobile)
2. **Given** a project card, **When** the user reads it, **Then** they see the project name, description, and tech stack tags
3. **Given** a project card with a GitHub link, **When** the user clicks the link, **Then** it opens the GitHub repo in a new tab
4. **Given** the user is on mobile, **When** they view the projects, **Then** cards stack in a single column

---

### User Story 3 — Skills & About (Priority: P2)

A visitor can quickly scan Anus's technical skills organized by category and read a short about section.

**Why this priority**: Skills provide a quick overview of capabilities. The about section adds personality and context.

**Independent Test**: Navigate to Skills and About sections. Verify skills are displayed as tag cloud by category (no progress bars), and the about section shows a first-person paragraph.

**Acceptance Scenarios**:

1. **Given** the Skills section is visible, **When** the user views it, **Then** they see skill tags organized by category (Languages, Frameworks, AI, Infrastructure)
2. **Given** the Skills section, **When** the user inspects it, **Then** there are NO progress bars or percentage indicators
3. **Given** the About section is visible, **When** the user reads it, **Then** they see a first-person paragraph about Anus
4. **Given** the About section, **When** the user views it, **Then** it includes links to GitHub, LinkedIn, and X (Twitter)

---

### User Story 4 — Contact Form (Priority: P2)

A visitor can send a message via the contact form. The form validates inputs and sends via Resend API.

**Why this priority**: The contact form is the conversion point — it's how opportunities come in.

**Independent Test**: Fill out and submit the contact form. Verify the message is sent via Resend and the user gets success/error feedback.

**Acceptance Scenarios**:

1. **Given** the Contact section is visible, **When** the user views it, **Then** they see name, email, and message fields with a submit button
2. **Given** the form is empty, **When** the user clicks submit, **Then** validation errors are shown for required fields
3. **Given** the form has valid data, **When** the user submits, **Then** a loading state is shown and the message is sent via Resend API
4. **Given** the message sends successfully, **When** the API responds, **Then** a success message is displayed
5. **Given** the API returns an error, **When** the response arrives, **Then** an error message is displayed and the form data is preserved

---

### User Story 5 — 3D Scene (Priority: P3)

A visitor sees an interactive 3D scene with floating geometric shapes and orange accent lighting in the hero area.

**Why this priority**: The 3D scene adds visual polish and differentiation, but the site works without it.

**Independent Test**: Load the page and verify the 3D scene renders with floating shapes, responds to mouse movement, and dissolves on scroll.

**Acceptance Scenarios**:

1. **Given** the hero section is visible, **When** the user views it, **Then** a 3D canvas with floating geometric shapes is rendered
2. **Given** the 3D scene is active, **When** the user moves their mouse, **Then** the scene responds to mouse movement
3. **Given** the 3D scene is active, **When** the user scrolls past the hero, **Then** the 3D scene dissolves/fades out
4. **Given** the user is on a low-power device or WebGL is unavailable, **When** the page loads, **Then** the site still works with a fallback (static or no 3D)

---

### Edge Cases

- What happens when the Resend API key is not configured? → Show a user-friendly error, log server-side
- What happens on very narrow screens (<320px)? → Content should not overflow, use `min-w-0` and text truncation
- What happens when JavaScript is disabled? → Core content (hero text, projects, skills, about) should still be visible; 3D scene and animations gracefully degrade
- What happens when the avatar video fails to load? → Show a placeholder (static image or colored div with initials)
- What happens when the user submits the form multiple times rapidly? → Disable submit button during submission to prevent duplicates

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display an intro text-slam animation sequence on first load that exits on scroll
- **FR-002**: System MUST display a hero section with name, title, and two CTAs ("See My Work" anchors to Projects, "Contact Me" anchors to Contact)
- **FR-003**: System MUST display 4 project cards in a responsive 2-column grid with title, description, tech stack tags, and GitHub links
- **FR-004**: System MUST display skills as a tag cloud organized by category with NO progress bars
- **FR-005**: System MUST display an About section with first-person bio and social links
- **FR-006**: System MUST provide a contact form with name, email, and message fields that submits via Resend API
- **FR-007**: System MUST render an interactive 3D scene using React Three Fiber that responds to mouse movement and dissolves on scroll
- **FR-008**: System MUST respect `prefers-reduced-motion` — skip intro animation, reduce/remove 3D motion
- **FR-009**: System MUST be fully responsive (mobile, tablet, desktop)
- **FR-010**: System MUST use the specified color palette (#0a0a0a background, #ffffff text, #f97316 accent)
- **FR-011**: System MUST lazy-load the 3D scene to avoid blocking initial render
- **FR-012**: System MUST use semantic HTML and meet WCAG AA accessibility standards

### Key Entities

- **Project**: name (string), description (string), techStack (string[]), githubUrl (string)
- **SkillCategory**: name (string), skills (string[])
- **ContactMessage**: name (string), email (string), message (string)
- **SocialLink**: platform (string), url (string), label (string)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Page loads with Largest Contentful Paint (LCP) under 3 seconds on 4G connection
- **SC-002**: All sections are visible and functional on viewports from 320px to 2560px wide
- **SC-003**: Contact form successfully sends messages via Resend API with <2s response time
- **SC-004**: Site scores ≥90 on Lighthouse Performance, Accessibility, and Best Practices
- **SC-005**: Intro sequence plays smoothly at 60fps on mid-range devices
- **SC-006**: 3D scene renders at ≥30fps on devices with WebGL support

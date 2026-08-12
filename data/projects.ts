export interface Project {
  name: string;
  problem: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  websiteUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "GraphKeeper",
    problem:
      "Coding agents lose context between sessions, leaving durable conclusions difficult to verify or safely update.",
    description:
      "Built and maintain an open-source TypeScript CLI for grounded, auditable agent memory. It stores append-only claims with evidence and provenance beside the code, protects history with Git validation, and ships repository integrations for Codex and Claude Code.",
    techStack: [
      "TypeScript CLI",
      "AI agent memory",
      "Evidence & provenance",
      "Git",
      "Codex",
      "Claude Code",
      "Validation",
      "Testing",
    ],
    githubUrl: "https://github.com/anusbutt/Graph_Keeper",
    featured: true,
  },
  {
    name: "Agent Replay",
    problem:
      "AI agent failures are difficult to reproduce, explain, and retest without replaying real-world side effects.",
    description:
      "Built a flight recorder and time-travel debugger that captures agent execution, analyzes failures, and forks a run from the failing step with sandboxed tool calls to verify a fix. The system spans a Python SDK, FastAPI, PostgreSQL, and a Next.js dashboard.",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "AI evaluation",
      "Docker",
    ],
    githubUrl: "https://github.com/anusbutt/agent-replay",
    websiteUrl: "https://agent-replay-phi.vercel.app/",
  },
  {
    name: "Prospector",
    problem:
      "AI-assisted research and outreach can fabricate details or act before a human has reviewed the result.",
    description:
      "Built a Python CLI that researches public company sources, scores evidence deterministically, produces citation-validated drafts, and sends only human-approved notes. Safety guarantees, dry-run defaults, and duplicate-send protection are enforced in code and tests.",
    techStack: [
      "Python CLI",
      "AI tool use",
      "Evidence validation",
      "Human approval",
      "API integrations",
      "Testing",
    ],
    githubUrl: "https://github.com/anusbutt/Prospector",
  },
  {
    name: "Commit Voice",
    problem:
      "Turning shipped code into accurate, reviewable release content is repetitive and prone to unsupported claims.",
    description:
      "Built a Next.js application that ingests GitHub commits on a schedule, generates drafts from verified commit details, stores review state in PostgreSQL, and publishes approved posts through platform APIs. Includes authentication, a review dashboard, and Vercel deployment.",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AI agents",
      "GitHub API",
      "Authentication",
      "Vercel",
    ],
    githubUrl: "https://github.com/anusbutt/commit-voice",
  },
];

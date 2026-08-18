export interface Project {
  name: string;
  problem: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  websiteUrl?: string;
  websiteLabel?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "GraphKeeper",
    problem:
      "Coding agents lose durable context, and opaque summaries make remembered claims difficult to trust.",
    description:
      "Built and maintain a Git-native memory layer for coding agents. Evidence-backed claims, explicit provenance, append-only corrections, and repository validation make project knowledge durable, auditable, and safer to reuse across sessions.",
    techStack: [
      "TypeScript CLI",
      "Agent memory",
      "Evidence & provenance",
      "Git-native storage",
      "Codex",
      "Claude Code",
    ],
    githubUrl: "https://github.com/anusbutt/Graph_Keeper",
    websiteUrl: "https://www.npmjs.com/package/graphkeeper",
    websiteLabel: "View npm package",
    featured: true,
  },
  {
    name: "Irha Beauty",
    problem:
      "Beauty brands need an elegant storefront that turns product discovery into effortless checkout.",
    description:
      "Built and shipped a full-stack e-commerce experience for Irha Beauty with category browsing, product detail pages, cart, wishlist, and account flows, all in a refined nature-inspired design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "E-commerce"],
    websiteUrl: "https://www.irhapk.com",
    websiteLabel: "View site",
  },
  {
    name: "Omniveer Duct Lead Qualifier",
    problem:
      "Service businesses lose ready-to-book leads when repetitive qualification waits on a human reply.",
    description:
      "Built an applied AI workflow that responds to inbound duct-cleaning leads, gathers job details, checks fit and availability, and moves qualified conversations toward booking—with human takeover for exceptions.",
    techStack: [
      "AI agents",
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Workflow automation",
    ],
    websiteUrl: "https://www.omniveer.com/lead-qualification-agent",
    websiteLabel: "View case study",
  },
  {
    name: "RAG-Powered Interactive Robotics Textbook",
    problem:
      "Static learning content cannot answer follow-up questions without losing source context.",
    description:
      "Built and deployed an interactive textbook with a RAG assistant that embeds and retrieves course content from Qdrant, returns source-grounded answers with lesson citations, and serves the experience through Docusaurus and FastAPI.",
    techStack: [
      "RAG",
      "Cohere embeddings",
      "Qdrant",
      "FastAPI",
      "Docusaurus",
      "Source citations",
    ],
    githubUrl:
      "https://github.com/anusbutt/Physical-AI-Humanoid-Robotics-Textbook",
    websiteUrl:
      "https://anusbutt.github.io/Physical-AI-Humanoid-Robotics-Textbook/",
  },
  {
    name: "Agent Replay",
    problem:
      "AI agent failures are difficult to reproduce, explain, and retest without replaying real-world side effects.",
    description:
      "Built an agent observability and verification system that records execution, traces failures, and forks runs from the failing step with sandboxed tool calls to test a fix. It spans a Python SDK, FastAPI/PostgreSQL backend, and Next.js debugging dashboard.",
    techStack: [
      "Python SDK",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "Agent observability",
      "Replay & verification",
    ],
    githubUrl: "https://github.com/anusbutt/agent-replay",
    websiteUrl: "https://agent-replay-phi.vercel.app/",
  },
];

export const moreProjects: Project[] = [
  {
    name: "TaskMate",
    problem:
      "Task apps still make users translate intent into manual form and list operations.",
    description:
      "Built a full-stack AI task manager where authenticated users create, update, complete, and delete tasks through natural language. A Next.js client and FastAPI/PostgreSQL backend orchestrate an AI agent whose MCP tools execute scoped task actions.",
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "JWT auth",
      "AI agents",
      "MCP tools",
    ],
    githubUrl: "https://github.com/anusbutt/taskmate",
    websiteUrl: "https://evolution-of-todo-coral.vercel.app/",
  },
  {
    name: "Prospector",
    problem:
      "AI-assisted research and outreach can fabricate details or act before a human has reviewed the result.",
    description:
      "An evidence-grounded Python CLI for company research, citation-validated drafting, and approval-gated outreach.",
    techStack: ["Python CLI", "AI tool use", "Evidence validation", "Human approval"],
    githubUrl: "https://github.com/anusbutt/Prospector",
  },
];
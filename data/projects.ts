export interface Project {
  name: string;
  problem: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  websiteUrl?: string;
}

export const projects: Project[] = [
  {
    name: "Omniveer Duct Lead Qualifier",
    problem:
      "Duct-cleaning companies lose inbound leads when nobody responds fast enough.",
    description:
      "An AI lead qualification system for duct-cleaning companies. It talks with incoming leads, gathers job details, qualifies intent, supports the booking workflow, stores leads in a dashboard, and emails the owner.",
    techStack: [
      "AI Agents",
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Business Automation",
    ],
    websiteUrl: "https://www.omniveer.com/duct-lead-qualifier",
  },
  {
    name: "Prospector",
    problem:
      "Manual outbound research and personalization do not scale.",
    description:
      "A human-in-the-loop AI outbound system that discovers companies, researches each business, drafts personalized emails, waits for approval, and then sends outreach.",
    techStack: [
      "AI Agents",
      "Python",
      "Email Automation",
      "Human Approval",
      "Lead Generation",
    ],
    githubUrl: "https://github.com/anusbutt/Prospector",
  },
  {
    name: "Agent Replay",
    problem:
      "AI agent failures are hard to reproduce and debug after the fact.",
    description:
      "A flight recorder and time-travel debugger for AI agents. It records agent execution, helps reproduce failures, and supports verifying fixes.",
    techStack: ["Python", "Agent Observability", "Debugging", "Developer Tools"],
    githubUrl: "https://github.com/anusbutt/agent-replay",
  },
  {
    name: "Nestaro Pilot",
    problem:
      "Small businesses have work scattered across communication and business tools.",
    description:
      "An autonomous AI employee concept for small businesses that coordinates work across communication and business tools while keeping sensitive actions behind human approval.",
    techStack: ["Python", "Claude Code", "MCP", "Human-in-the-loop", "Automation"],
    githubUrl: "https://github.com/anusbutt/nestaro-pilot",
  },
];

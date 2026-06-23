export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  websiteUrl?: string;
}

export const projects: Project[] = [
  {
    name: "Nestaro Pilot",
    description:
      "Autonomous multi-channel AI employee with HITL approval for customer interactions across email and messaging platforms.",
    techStack: ["FastAPI", "Claude API", "Gmail", "WhatsApp", "Instagram", "Odoo"],
    websiteUrl: "https://nestaro-pilot.vercel.app/",
    githubUrl: "https://github.com/anusbutt/nestaro-pilot",
  },
  {
    name: "Commit Voice",
    description:
      "Automated GitHub-to-social-media pipeline with human review via Slack dashboard.",
    techStack: ["Next.js", "Eve", "NeonDB", "Slack"],
    githubUrl: "https://github.com/anusbutt/commit-voice",
  },
  {
    name: "RAG Chatbot",
    description:
      "Physical AI & Humanoid Robotics textbook chatbot powered by retrieval-augmented generation.",
    techStack: ["Cohere", "Qdrant", "OpenRouter", "FastAPI", "Docusaurus"],
    githubUrl: "https://github.com/anusbutt/rag-chatbot",
  },
  {
    name: "Sparkflow",
    description:
      "Home services business website with service listings, booking flow, and AI-powered lead capture agent.",
    techStack: ["Next.js", "FastAPI", "Claude API", "NeonDB"],
    websiteUrl: "https://sparkflowcleaningservices.com",
  },
  {
    name: "irhapk",
    description:
      "Full-stack ecommerce website with product catalog, cart, checkout, and order management system.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    websiteUrl: "https://irhapk.com",
  },
  {
    name: "AI Integrated Taskmate",
    description:
      "AI-powered task management app that intelligently organizes, prioritizes, and tracks your daily workflow.",
    techStack: ["Next.js", "TypeScript", "OpenAI", "Prisma"],
    websiteUrl: "https://evolution-of-todo-coral.vercel.app",
    githubUrl: "https://github.com/anusbutt/taskmate",
  },
];

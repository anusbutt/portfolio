export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Full-stack Web",
    skills: [
      "Production websites",
      "SaaS products",
      "Dashboards",
      "Internal tools",
      "Next.js",
      "React",
      "Responsive interfaces",
    ],
  },
  {
    name: "Backend & Data",
    skills: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "Supabase", "API integrations"],
  },
  {
    name: "Applied AI",
    skills: [
      "AI agents",
      "Tool use",
      "MCP",
      "Prompt engineering",
      "Human approval",
      "Guardrails",
    ],
  },
  {
    name: "Product Engineering",
    skills: [
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Spec-driven development",
      "Testing",
      "Deployment",
    ],
  },
  {
    name: "Tools",
    skills: ["Claude Code", "OpenAI Codex", "OpenRouter"],
  },
];

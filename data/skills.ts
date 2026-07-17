export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI Systems",
    skills: [
      "AI agents",
      "Tool use",
      "MCP",
      "Prompt and context engineering",
      "Human-in-the-loop workflows",
      "Guardrails",
      "Structured instructions",
    ],
  },
  {
    name: "Backend",
    skills: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "Supabase"],
  },
  {
    name: "Frontend",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    name: "Engineering",
    skills: [
      "Git",
      "GitHub",
      "API integrations",
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

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Product Engineering",
    skills: ["Next.js", "TypeScript", "React", "Testing", "Deployment"],
  },
  {
    name: "Backend & Data",
    skills: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "API integrations"],
  },
  {
    name: "AI & Developer Tools",
    skills: ["AI agents", "Tool use", "Codex", "Claude Code", "Git & GitHub"],
  },
];

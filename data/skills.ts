export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript"],
  },
  {
    name: "Frameworks",
    skills: ["FastAPI", "Next.js"],
  },
  {
    name: "AI Agent Development",
    skills: [
      "Claude API",
      "Eve Agent Framework",
      "OpenRouter",
      "Cohere",
      "Qdrant",
      "LangChain",
    ],
  },
  {
    name: "Infrastructure",
    skills: ["NeonDB", "Vercel", "Docker", "SQLModel"],
  },
];

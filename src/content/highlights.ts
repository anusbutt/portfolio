export type HighlightIcon =
  | "open-source"
  | "hackathons"
  | "certifications"
  | "projects"
  | "ai-engineering"
  | "full-stack"
  | "community"
  | "building";

export interface Highlight {
  title: string;
  value: string;
  description: string;
  icon: HighlightIcon;
}

export const highlights: Highlight[] = [
  {
    title: "Open Source",
    value: "10+",
    description: "contributions",
    icon: "open-source",
  },
  {
    title: "Hackathons",
    value: "4",
    description: "participations",
    icon: "hackathons",
  },
  {
    title: "Certifications",
    value: "3",
    description: "completed",
    icon: "certifications",
  },
  {
    title: "Projects",
    value: "Builds",
    description: "Production & open-source builds",
    icon: "projects",
  },
  {
    title: "AI Engineering",
    value: "AI",
    description: "Agents, LLM tooling & automation",
    icon: "ai-engineering",
  },
  {
    title: "Full-Stack",
    value: "Stack",
    description: "Next.js, TypeScript, Python & APIs",
    icon: "full-stack",
  },
  {
    title: "Community",
    value: "Open",
    description: "Open-source engineering and knowledge sharing",
    icon: "community",
  },
  {
    title: "Building",
    value: "Now",
    description: "GraphKeeper + Omniveer",
    icon: "building",
  },
];
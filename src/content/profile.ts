export interface Profile {
  name: string;
  title: string;
  shortTitle: string;
  description: string;
  location: string;
  availability: string;
  siteUrl: string;
  sameAs: string[];
}

export const profile: Profile = {
  name: "Anus Butt",
  title: "AI Engineer & Full-stack Engineer",
  shortTitle: "AI Engineer + Full-stack Engineer",
  description:
    "AI engineer and full-stack engineer building auditable agent systems, developer tools, and production web applications with TypeScript, Python, FastAPI, and PostgreSQL.",
  location: "Karachi, Pakistan",
  availability: "Open to AI & full-stack roles",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://anusbutt.com",
  sameAs: [
    "https://github.com/anusbutt",
    "https://x.com/iamanusbutt",
    "https://www.linkedin.com/in/anus-yousuf/",
  ],
};
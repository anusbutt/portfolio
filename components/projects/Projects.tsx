"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { moreProjects, projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="01 / Selected full-stack AI work"
          title="AI systems, built end to end."
          description="AI agents, full-stack products, developer tooling, RAG, and production automation—engineered from interface to infrastructure."
        />

        <div className="mt-14 border-b border-white/[0.09] lg:mt-20" aria-label="Selected projects">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[minmax(12rem,0.45fr)_minmax(0,1.55fr)] md:gap-12 lg:mt-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              More projects
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-stone-500">
              Smaller tools and focused product experiments.
            </p>
          </div>

          <div className="border-b border-white/[0.09]">
            {moreProjects.map((project) => (
              <article
                key={project.name}
                data-project-tier="more"
                className="grid gap-4 border-t border-white/[0.09] py-7 sm:grid-cols-[minmax(10rem,0.45fr)_minmax(0,1.55fr)] sm:gap-8"
              >
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-stone-200">
                    {project.name}
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-10 items-center text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 transition-colors hover:text-accent"
                    >
                      View source <span className="ml-2" aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>

                <div>
                  <p className="text-sm leading-7 text-stone-400">{project.description}</p>
                  <ul
                    className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.12em] text-stone-600"
                    aria-label={`${project.name} technologies`}
                  >
                    {project.techStack.map((tech) => (
                      <li key={tech} className="before:mr-2 before:text-accent before:content-['/']">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

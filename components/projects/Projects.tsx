"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 / Selected projects"
          title="Systems built around concrete problems."
          description="A selection of AI products and developer tools spanning lead operations, outbound research, agent debugging, and business automation."
        />

        <div className="mt-14 border-b border-white/[0.09] lg:mt-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

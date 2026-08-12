"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="01 / Selected engineering work"
          title="Shipped systems, with the code to prove it."
          description="Open-source AI infrastructure, agent debugging, evidence-grounded automation, and a production full-stack application."
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

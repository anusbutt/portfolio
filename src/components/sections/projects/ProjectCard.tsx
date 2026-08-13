import type { Project } from "@/content/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      data-project-tier="main"
      className={`group relative grid gap-6 border-t py-9 transition-colors md:grid-cols-[3rem_minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-8 md:py-11 lg:grid-cols-[4rem_minmax(16rem,0.75fr)_minmax(20rem,1.25fr)] lg:gap-12 ${
        project.featured
          ? "border-accent/60 bg-accent/[0.045] px-5 py-11 sm:px-7 md:py-14"
          : "border-white/[0.09]"
      }`}
    >
      <span className="text-xs font-semibold tabular-nums tracking-[0.16em] text-stone-600">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        {project.featured && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Flagship project
          </p>
        )}
        <h3 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-stone-100 transition-colors group-hover:text-accent md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-4 text-sm leading-6 text-stone-500">
          <span className="font-semibold uppercase tracking-[0.12em] text-stone-600">Problem</span><br />
          <span className="mt-2 inline-block text-stone-400">{project.problem}</span>
        </p>
      </div>

      <div className="flex flex-col">
        <p className="text-base leading-7 text-stone-400 md:text-[1.05rem] md:leading-8">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.12em] text-stone-500" aria-label={`${project.name} technologies`}>
          {project.techStack.map((tech) => (
            <li key={tech} className="before:mr-2 before:text-accent before:content-['/']">{tech}</li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-stone-200 transition-colors hover:text-accent"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            {project.websiteLabel ?? "View live project"}{" "}
            <span className="transition-transform group-hover/link:translate-x-1" aria-hidden="true">↗</span>
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-stone-400 transition-colors hover:text-accent"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View source &amp; docs{" "}
            <span className="transition-transform group-hover/link:translate-x-1" aria-hidden="true">↗</span>
          </a>
        )}
        </div>
      </div>
    </article>
  );
}
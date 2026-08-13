import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/content/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-white/[0.07] bg-surface px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 / Core stack"
          title="The tools behind the work."
          description="A focused stack reflected in the projects above—not a catalogue of generic capabilities."
        />

        <div className="mt-14 grid border-l border-t border-white/[0.09] sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.name}
              className="border-b border-r border-white/[0.09] p-6 sm:p-7"
            >
              <span className="text-xs tabular-nums text-stone-700">{String(catIndex + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-stone-200">
                {category.name}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm leading-5 text-stone-400"
                  >
                    <span className="mt-[0.4rem] h-1 w-1 shrink-0 bg-accent/70" aria-hidden="true" />{skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
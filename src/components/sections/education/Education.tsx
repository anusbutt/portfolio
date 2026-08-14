import SectionHeading from "@/components/ui/SectionHeading";
import { educationItems } from "@/content/education";

export default function Education() {
  return (
    <section id="education" className="border-b border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="05 / Education" title="Learning grounded in building." />
        <ul className="mt-12 border-b border-white/[0.09] md:mt-16">
          {educationItems.map((item) => (
            <li key={item} className="grid gap-3 border-t border-white/[0.09] py-5 text-stone-400 sm:grid-cols-[2.5rem_1fr] sm:items-start sm:py-6">
              <span className="mt-2 h-1.5 w-1.5 bg-accent" aria-hidden="true" />
              <span className="max-w-3xl leading-7">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
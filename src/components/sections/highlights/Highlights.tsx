import SectionHeading from "@/components/ui/SectionHeading";
import { highlights } from "@/content/highlights";
import HighlightCard from "./HighlightCard";

export default function Highlights() {
  return (
    <section id="highlights" className="border-b border-white/[0.07] bg-surface px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02 / Highlights"
          title="The signal behind the work."
          description="A compact view of the practice, projects, and systems I keep building in public."
        />

        <div className="mt-14 grid border-l border-t border-white/[0.09] sm:grid-cols-2 lg:mt-20 lg:grid-cols-4" aria-label="Portfolio highlights">
          {highlights.map((highlight, index) => (
            <HighlightCard key={highlight.title} highlight={highlight} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
import type { Highlight, HighlightIcon } from "@/content/highlights";

function HighlightIcon({ icon }: { icon: HighlightIcon }) {
  const paths: Record<HighlightIcon, string> = {
    "open-source": "M8 9l-3 3 3 3m8-6l3 3-3 3m-5 2l2-10",
    hackathons: "M8 21h8M12 17v4m-5-8V4h10v5a5 5 0 01-10 0zm0-5H4v2a3 3 0 003 3m10-5h3v2a3 3 0 01-3 3",
    certifications: "M12 3l2.2 4.45 4.92.72-3.56 3.47.84 4.9L12 15.2l-4.4 2.34.84-4.9-3.56-3.47 4.92-.72L12 3z",
    projects: "M4 7h16M4 12h16M4 17h16M7 4h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z",
    "ai-engineering": "M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48l2.12 2.12m0-12.72l-2.12 2.12M7.76 16.24l-2.12 2.12M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    "full-stack": "M4 5h16v10H4V5zm4 14h8m-4-4v4",
    community: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8zm6-3a3 3 0 110-6m4 15v-2a4 4 0 00-3-3.87",
    building: "M5 20V9l7-5 7 5v11M3 20h18M9 20v-5h6v5M9 9h.01M15 9h.01",
  };

  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={paths[icon]} />
    </svg>
  );
}

export default function HighlightCard({ highlight, index }: { highlight: Highlight; index: number }) {
  return (
    <article className="group flex min-h-64 flex-col justify-between border-b border-r border-white/[0.09] p-6 transition-colors hover:border-accent/40 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/[0.12] text-stone-500 transition-colors group-hover:border-accent/50 group-hover:text-accent">
          <HighlightIcon icon={highlight.icon} />
        </span>
        <span className="text-xs tabular-nums tracking-[0.16em] text-stone-700">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold tracking-[-0.025em] text-stone-100 transition-colors group-hover:text-accent">
          {highlight.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-stone-400">
          <span className="mr-2 text-2xl font-semibold tracking-[-0.04em] text-stone-200">
            {highlight.value}
          </span>
          {highlight.description}
        </p>
      </div>
    </article>
  );
}
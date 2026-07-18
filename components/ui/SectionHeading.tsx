interface SectionHeadingProps {
  title: string;
  id?: string;
  eyebrow?: string;
  description?: string;
}

export default function SectionHeading({
  title,
  id,
  eyebrow,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] md:items-end md:gap-12">
      <div>
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
        )}
        <h2
          id={id}
          className="text-balance text-3xl font-semibold tracking-[-0.035em] text-stone-100 sm:text-4xl md:text-5xl"
        >
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-xl text-sm leading-7 text-stone-400 md:justify-self-end md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}


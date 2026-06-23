interface SectionHeadingProps {
  title: string;
  id?: string;
}

export default function SectionHeading({ title, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="text-3xl font-bold tracking-tight text-white md:text-4xl"
    >
      {title}
    </h2>
  );
}

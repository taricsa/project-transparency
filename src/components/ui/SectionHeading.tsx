interface SectionHeadingProps {
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
}

export function SectionHeading({
  title,
  description,
  as: Tag = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <Tag
        id={id}
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        <span className="border-b-4 border-primary pb-1">{title}</span>
      </Tag>
      {description ? (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/80">
          {description}
        </p>
      ) : null}
    </div>
  );
}

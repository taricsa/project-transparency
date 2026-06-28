import { CitationsInline } from "@/components/ui/Citation";

interface CalloutBoxProps {
  title: string;
  summary: string;
  details: string[];
  citations: number[];
}

export function CalloutBox({
  title,
  summary,
  details,
  citations,
}: CalloutBoxProps) {
  return (
    <article className="rounded-lg border-l-4 border-accent bg-card p-6 shadow-sm ring-1 ring-muted">
      <h2 className="text-xl font-semibold text-foreground">
        {title}
        <CitationsInline ids={citations} />
      </h2>
      <p className="mt-3 font-medium text-foreground/90">{summary}</p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/80">
        {details.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

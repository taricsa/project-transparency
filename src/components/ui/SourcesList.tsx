import { sources } from "@/content/sources";

interface SourcesListProps {
  citationIds: number[];
}

export function SourcesList({ citationIds }: SourcesListProps) {
  const uniqueIds = [...new Set(citationIds)].sort((a, b) => a - b);
  const entries = uniqueIds
    .map((id) => sources.find((source) => source.id === id))
    .filter((source): source is (typeof sources)[number] => Boolean(source));

  if (entries.length === 0) return null;

  return (
    <section aria-labelledby="sources-heading" className="mt-16 border-t border-muted pt-10">
      <h2 id="sources-heading" className="text-lg font-semibold text-foreground">
        Sources
      </h2>
      <ol className="mt-4 space-y-2 text-sm text-foreground/75">
        {entries.map((source) => (
          <li key={source.id} id={`source-${source.id}`}>
            <span className="font-medium text-accent">[{source.id}]</span>{" "}
            {source.label}
          </li>
        ))}
      </ol>
    </section>
  );
}

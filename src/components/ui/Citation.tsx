import { getSourceLabel } from "@/content/sources";

interface CitationProps {
  ids: number[];
}

export function Citation({ ids }: CitationProps) {
  const uniqueIds = [...new Set(ids)];

  return (
    <sup className="ml-0.5 inline-flex gap-0.5 text-[0.65em] font-medium text-accent">
      {uniqueIds.map((id) => (
        <a
          key={id}
          href={`#source-${id}`}
          className="underline-offset-2 hover:underline"
          aria-label={`Citation ${id}: ${getSourceLabel(id)}`}
        >
          [{id}]
        </a>
      ))}
    </sup>
  );
}

interface CitationsInlineProps {
  ids: number[];
}

export function CitationsInline({ ids }: CitationsInlineProps) {
  return <Citation ids={ids} />;
}

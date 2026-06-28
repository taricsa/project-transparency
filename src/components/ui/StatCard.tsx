import { CitationsInline } from "@/components/ui/Citation";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  citations?: number[];
}

export function StatCard({
  value,
  label,
  description,
  citations,
}: StatCardProps) {
  return (
    <article className="rounded-lg border border-muted bg-card p-5 shadow-sm">
      <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
        {value}
        {citations?.length ? <CitationsInline ids={citations} /> : null}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-foreground/70">
        {label}
      </p>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-foreground/80">
          {description}
        </p>
      ) : null}
    </article>
  );
}

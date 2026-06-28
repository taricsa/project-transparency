import type { ChemicalEntry } from "@/lib/types";
import { CitationsInline } from "@/components/ui/Citation";

interface ChemicalCardProps {
  entry: ChemicalEntry;
}

export function ChemicalCard({ entry }: ChemicalCardProps) {
  return (
    <article
      id={entry.id}
      className="flex h-full flex-col rounded-lg border border-muted bg-card p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold text-foreground">
        {entry.name}
        <CitationsInline ids={entry.citations} />
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        {entry.summary}
      </p>

      {entry.stats.length > 0 ? (
        <dl className="mt-5 grid grid-cols-2 gap-3">
          {entry.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-md bg-background px-3 py-2 ring-1 ring-muted"
            >
              <dt className="text-lg font-bold text-accent">
                {stat.value}
                {stat.citations?.length ? (
                  <CitationsInline ids={stat.citations} />
                ) : null}
              </dt>
              <dd className="mt-1 text-xs text-foreground/70">{stat.label}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-foreground/80">
        {entry.details.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

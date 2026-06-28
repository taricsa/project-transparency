import type { BrandEntry } from "@/lib/types";
import { CitationsInline } from "@/components/ui/Citation";

interface BrandCardProps {
  brand: BrandEntry;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-muted bg-card p-6 shadow-sm">
      <header>
        <h2 className="text-xl font-semibold text-foreground">
          {brand.name}
          <CitationsInline ids={brand.citations} />
        </h2>
        <p className="mt-1 text-sm font-medium text-accent">{brand.tagline}</p>
      </header>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
        {brand.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${brand.name} features`}>
        {brand.badges.map((badge) => (
          <li
            key={badge}
            className="rounded-full bg-primary/25 px-3 py-1 text-xs font-medium text-foreground"
          >
            {badge}
          </li>
        ))}
      </ul>
    </article>
  );
}

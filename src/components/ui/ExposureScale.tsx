import type { ExposureStat } from "@/lib/types";
import { CitationsInline } from "@/components/ui/Citation";

interface ExposureScaleProps {
  stats: ExposureStat[];
}

export function ExposureScale({ stats }: ExposureScaleProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-lg bg-primary/20 p-5 ring-1 ring-primary/30"
          >
            <p className="text-3xl font-bold text-foreground">
              {stat.value}
              <CitationsInline ids={stat.citations} />
            </p>
            <p className="mt-1 font-semibold text-foreground">{stat.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              {stat.description}
            </p>
          </article>
        ))}
      </div>

      <div
        className="relative h-3 overflow-hidden rounded-full bg-muted"
        role="img"
        aria-label="Lifetime exposure timeline visualization"
      >
        <div className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-primary via-accent to-accent/80" />
      </div>
      <p className="text-center text-xs text-foreground/60">
        Visual scale: cumulative tissue contact across reproductive years
      </p>
    </div>
  );
}

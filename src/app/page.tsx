import Link from "next/link";
import { TeenChecklist } from "@/components/checklist/TeenChecklist";
import { CitationsInline } from "@/components/ui/Citation";
import { ExposureScale } from "@/components/ui/ExposureScale";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SourcesList } from "@/components/ui/SourcesList";
import {
  biologicalBaseline,
  exposureStats,
  homeCtas,
  homeHero,
  padPodLexicon,
} from "@/content/home";
import { buildPageMetadata, homePageMeta } from "@/lib/metadata";

export const metadata = buildPageMetadata(homePageMeta);

const allCitations = [
  ...padPodLexicon.citations,
  ...biologicalBaseline.citations,
  ...exposureStats.flatMap((stat) => stat.citations),
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section aria-labelledby="hero-heading" className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          v1.0.0 · Canadian teens
        </p>
        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          {homeHero.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-foreground/80">
          {homeHero.subtitle}
        </p>
      </section>

      <section aria-labelledby="lexicon-heading">
        <SectionHeading
          id="lexicon-heading"
          title={padPodLexicon.title}
        />
        {padPodLexicon.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="mb-4 max-w-3xl text-base leading-relaxed text-foreground/85"
          >
            {paragraph}
            {paragraph === padPodLexicon.paragraphs[0] ? (
              <CitationsInline ids={padPodLexicon.citations} />
            ) : null}
          </p>
        ))}
      </section>

      <section aria-labelledby="baseline-heading">
        <SectionHeading
          id="baseline-heading"
          title={biologicalBaseline.title}
        />
        {biologicalBaseline.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 40)}
            className="mb-4 max-w-3xl text-base leading-relaxed text-foreground/85"
          >
            {paragraph}
            {index === biologicalBaseline.paragraphs.length - 1 ? (
              <CitationsInline ids={biologicalBaseline.citations} />
            ) : null}
          </p>
        ))}
      </section>

      <section aria-labelledby="exposure-heading">
        <SectionHeading
          id="exposure-heading"
          title="The Exposure Scale"
          description="Over a lifetime, the numbers add up — and adolescent development is a especially sensitive window."
        />
        <ExposureScale stats={exposureStats} />
      </section>

      <TeenChecklist />

      <section aria-labelledby="explore-heading">
        <SectionHeading id="explore-heading" title="Keep exploring" />
        <div className="grid gap-4 sm:grid-cols-2">
          {homeCtas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className="group rounded-lg border border-muted bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                {cta.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/75">{cta.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <SourcesList citationIds={allCitations} />
    </div>
  );
}

import { TeenChecklist } from "@/components/checklist/TeenChecklist";
import { BrandCard } from "@/components/ui/BrandCard";
import { CitationsInline } from "@/components/ui/Citation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SourcesList } from "@/components/ui/SourcesList";
import { brands, guideIntro, guidePageMeta } from "@/content/brands";
import { checklistItems } from "@/content/checklist";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata(guidePageMeta);

const allCitations = [
  ...brands.flatMap((brand) => brand.citations),
  ...checklistItems.flatMap((item) => item.citations),
  81,
  82,
  85,
];

export default function GuidePage() {
  return (
    <div className="space-y-12">
      <header>
        <SectionHeading
          as="h1"
          title={guideIntro.title}
          description={guideIntro.description}
        />
        <p className="mt-4 max-w-3xl rounded-lg bg-primary/15 p-4 text-sm leading-relaxed text-foreground/85">
          {guideIntro.healthCanadaNote}
          <CitationsInline ids={[81, 82]} />
        </p>
      </header>

      <section aria-labelledby="brands-heading">
        <SectionHeading
          id="brands-heading"
          title="Verified options in Canada"
          description="Static reference cards — always confirm current packaging before you buy."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

      <TeenChecklist />

      <SourcesList citationIds={allCitations} />
    </div>
  );
}

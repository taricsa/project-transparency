import { ChemicalCard } from "@/components/ui/ChemicalCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SourcesList } from "@/components/ui/SourcesList";
import { chemicals, sciencePageMeta } from "@/content/chemicals";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata(sciencePageMeta);

const allCitations = chemicals.flatMap((entry) => entry.citations);

export default function SciencePage() {
  return (
    <div className="space-y-10">
      <header>
        <SectionHeading
          as="h1"
          title={sciencePageMeta.title}
          description={sciencePageMeta.description}
        />
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {chemicals.map((entry) => (
          <ChemicalCard key={entry.id} entry={entry} />
        ))}
      </div>

      <SourcesList citationIds={allCitations} />
    </div>
  );
}

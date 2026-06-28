import { CalloutBox } from "@/components/ui/CalloutBox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SourcesList } from "@/components/ui/SourcesList";
import { regulations, regulationsPageMeta } from "@/content/regulations";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata(regulationsPageMeta);

const allCitations = regulations.flatMap((section) => section.citations);

export default function RegulationsPage() {
  return (
    <div className="space-y-10">
      <header>
        <SectionHeading
          as="h1"
          title={regulationsPageMeta.title}
          description={regulationsPageMeta.description}
        />
      </header>

      <div className="space-y-6">
        {regulations.map((section) => (
          <CalloutBox
            key={section.id}
            title={section.title}
            summary={section.summary}
            details={section.details}
            citations={section.citations}
          />
        ))}
      </div>

      <SourcesList citationIds={allCitations} />
    </div>
  );
}

import { ShareButton } from "@/components/ui/ShareButton";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-muted bg-card pb-safe">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground/70">
            Open-source educational resource. Not medical advice.
          </p>
          <ShareButton />
        </div>
        <p className="text-xs leading-relaxed text-foreground/60">
          Content references publicly available research and Canadian regulatory
          frameworks including Health Canada medical device classifications. Always
          consult a healthcare provider for personal medical decisions.
        </p>
      </div>
    </footer>
  );
}

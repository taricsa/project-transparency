"use client";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

const PAGE_SHARE: Record<
  string,
  { title: string; text: string }
> = {
  "/": {
    title: "[Project-Transparency] — Pad/Pod Lexicon",
    text: "Peer-level science on menstrual product safety for Canadian teens.",
  },
  "/science": {
    title: "[Project-Transparency] — Chemical Glossary",
    text: "PFAS, VOCs, phthalates, and heavy metals in period products.",
  },
  "/regulations": {
    title: "[Project-Transparency] — Canadian Regulations",
    text: "Health Canada rules, labeling gaps, and workplace mandates.",
  },
  "/guide": {
    title: "[Project-Transparency] — Safe Brand Guide",
    text: "Verified menstrual product options for the Canadian market.",
  },
};

export function ShareButton() {
  const pathname = usePathname();
  const [status, setStatus] = useState<string | null>(null);

  const share = useCallback(async () => {
    const page = PAGE_SHARE[pathname] ?? PAGE_SHARE["/"];
    const shareUrl = `${window.location.origin}${pathname}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: page.title,
          text: page.text,
          url: shareUrl,
        });
        setStatus("Shared!");
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        setStatus("Link copied!");
      } else {
        setStatus("Sharing not supported");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setStatus("Could not share");
    }

    window.setTimeout(() => setStatus(null), 2500);
  }, [pathname]);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={share}
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        Share
      </button>
      {status ? (
        <span role="status" className="text-xs text-foreground/70">
          {status}
        </span>
      ) : null}
    </div>
  );
}

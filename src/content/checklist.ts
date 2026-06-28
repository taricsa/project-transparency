import type { ChecklistItem } from "@/lib/types";

export const checklistItems: ChecklistItem[] = [
  {
    id: "avoid-scented",
    title: "Avoid scented options",
    summary:
      "Steer clear of fragrances to eliminate complex mixtures containing hidden VOCs and phthalate fixatives.",
    details:
      "Scented pads and tampons often use undisclosed fragrance formulas that can include volatile solvents and phthalate-based fixatives. Unscented isn't just a preference — it's a way to cut exposure to chemical mixtures you can't read on the label.",
    citations: [90],
  },
  {
    id: "organic-topsheet",
    title: "Expose the \"organic topsheet\" trick",
    summary:
      "Verify that both the top cover and the absorbent inner core are fully organic — not just the layer you see.",
    details:
      "Some products advertise an organic cotton topsheet while the absorbent core still contains synthetic polymers or chlorine-bleached pulp. Read the full materials list and look for certifications that cover the entire product, not just one layer.",
    citations: [64, 65, 92],
  },
  {
    id: "certifications",
    title: "Look up certifications",
    summary:
      "Search for GOTS and OEKO-TEX labels — they test for different things and both matter.",
    details:
      "Global Organic Textile Standard (GOTS) requires a minimum of 95% certified organic fibers for the \"Organic\" grade, or 70% for \"Made with Organic.\" OEKO-TEX Standard 100 screens for 100+ substances and applies strict Total Fluorine limits to catch hidden PFAS.",
    citations: [69, 70, 71, 75, 76, 77, 78],
  },
  {
    id: "hygiene",
    title: "Follow smart hygiene practices",
    summary:
      "Change internal products every 4–6 hours using the lowest absorbency you need.",
    details:
      "Shorter wear times reduce continuous exposure to any contaminants present and lower Toxic Shock Syndrome (TSS) risk. Match absorbency to your flow — higher absorbency isn't safer if you don't need it.",
    citations: [56, 98],
  },
];

export const checklistHeading = {
  title: "Your Product Safety Checklist",
  description:
    "Tap each item to learn why it matters. Your progress saves locally on this device.",
};

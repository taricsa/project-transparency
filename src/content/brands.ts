import type { BrandEntry } from "@/lib/types";

export const brands: BrandEntry[] = [
  {
    id: "natracare",
    name: "Natracare",
    tagline: "Organic cotton, chlorine-free",
    description:
      "100% organic cotton with totally chlorine-free (TCF) bleaching. Zero petroleum plastics or synthetic superabsorbent polymers (SAPs).",
    badges: ["Organic cotton", "TCF", "No SAPs", "No petroleum plastics"],
    citations: [86],
  },
  {
    id: "joni",
    name: "joni",
    tagline: "Bamboo viscose, clean formula",
    description:
      "Viscose from organic bamboo, free from formaldehyde, dioxins, and titanium dioxide.",
    badges: ["Organic bamboo", "No formaldehyde", "No dioxins"],
    citations: [86],
  },
  {
    id: "marlow",
    name: "Marlow",
    tagline: "Organic core, plant-based applicator",
    description:
      "100% organic cotton cores with compact bio-applicators derived from sugarcane.",
    badges: ["Organic cotton core", "Sugarcane applicator"],
    citations: [86],
  },
  {
    id: "diva-nixit",
    name: "Diva & Nixit",
    tagline: "Medical-grade silicone reusables",
    description:
      "100% medical-grade silicone cups and discs. Only 15 menstrual cups are approved by Health Canada due to strict ISO 10993 biocompatibility and mucosal reactivity validations — compared to 200+ brands registered in the US.",
    badges: ["Medical-grade silicone", "Reusable", "HC-approved cups"],
    citations: [81, 82, 86],
  },
];

export const guideIntro = {
  title: "Safe Brand Screening",
  description:
    "A static reference layer of verified options widely available in the Canadian market. Always check current packaging and certifications — labels change.",
  healthCanadaNote:
    "Health Canada has approved only 15 menstrual cups under strict ISO 10993 testing, while the US has 200+ registered brands. Fewer approvals can mean tighter material safety review — but it also means fewer vetted options on Canadian shelves.",
};

export const guidePageMeta = {
  title: "Safe Brand Guide",
  description:
    "Verified menstrual product options for the Canadian market — cups, pads, and tampons with cleaner material profiles.",
  ogTitle: "Safe Brand Guide",
  ogMetric: "4 verified brands",
  path: "/guide",
};

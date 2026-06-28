import type { RegulationSection } from "@/lib/types";

export const regulations: RegulationSection[] = [
  {
    id: "medical-device-divide",
    title: "The Medical Device Divide",
    summary:
      "Health Canada doesn't treat all period products the same — classification determines how closely they're regulated.",
    details: [
      "Tampons, reusable cups, discs, and scented pads are regulated as Class II medical devices, requiring more rigorous pre-market review.",
      "Unscented disposable pads and liners are Class I devices — a lower tier with fewer pre-market requirements.",
      "The product type you choose can mean different safety scrutiny before it ever reaches a store shelf.",
    ],
    citations: [55],
  },
  {
    id: "transparency-gap",
    title: "The Transparency Gap",
    summary:
      "In Canada, you often can't read a full ingredient list on the box — unlike cosmetics or products sold in some US states.",
    details: [
      "Unlike cosmetics, complete ingredient lists are not legally mandated on Canadian period product packaging.",
      "Manufacturers are permitted to use vague terms like \"absorbent material\" or \"adhesive\" without disclosing specific chemicals.",
      "New York and California have passed strict mandatory disclosure state laws — creating a sharp contrast with Canada's labeling rules.",
    ],
    citations: [57, 58, 59],
  },
  {
    id: "workplace-mandate",
    title: "Workplace Access Context",
    summary:
      "A 2023 federal mandate expanded who encounters these products — and why product quality in shared spaces matters.",
    details: [
      "Effective December 15, 2023, all federally regulated workplaces in Canada must provide clean menstrual products in toilet rooms.",
      "This expands public demographics exposed to whatever chemical profiles those supplied products carry — making transparency and safer sourcing a collective issue, not just a personal shopping choice.",
    ],
    citations: [62],
  },
];

export const regulationsPageMeta = {
  title: "Canadian Regulatory Analysis",
  description:
    "How Health Canada classifies period products, where labeling falls short, and what changed in 2023.",
  ogTitle: "Canadian Regulations",
  ogMetric: "Class I vs II split",
  path: "/regulations",
};

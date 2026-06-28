import type { ExposureStat, HomeSection } from "@/lib/types";

export const homeHero = {
  title: "Your body. Your products. Real talk.",
  subtitle:
    "[Project-Transparency] is an open-source guide for Canadian teens navigating menstrual product choices — no corporate spin, just peer-level science you can actually use.",
};

export const padPodLexicon: HomeSection = {
  id: "pad-pod-lexicon",
  title: "The Pad/Pod Lexicon",
  paragraphs: [
    "If you've ever searched for \"pods\" instead of pads, you're not alone. Adolescents frequently use \"pods\" as a colloquialism, a typo, or shorthand when looking up menstrual pads — and the same searches often surface insertable cups and discs too.",
    "Knowing what you're actually buying matters. Pads and liners sit externally; cups and discs are internal. Each type has a different contact surface, wear time, and exposure profile — so the label on the box isn't just marketing, it's your first clue about what's touching your body.",
  ],
  citations: [2],
};

export const biologicalBaseline: HomeSection = {
  id: "biological-baseline",
  title: "Why Contact Matters: Your Biological Baseline",
  paragraphs: [
    "The vulvovaginal region has an extremely thin, non-keratinized stratified squamous epithelium with rich vascularization. That means the tissue barrier is delicate and highly absorptive compared to skin on your arms or legs.",
    "Internally placed products and topical substances applied in this area can pass directly into systemic circulation, completely bypassing first-pass hepatic metabolism — the liver filter that normally breaks down many chemicals when you swallow them. What touches this tissue can reach your bloodstream faster than you'd expect.",
  ],
  citations: [3],
};

export const exposureStats: ExposureStat[] = [
  {
    value: "11,000–17,000",
    label: "Single-use products over a lifetime",
    description:
      "The average person uses between 11,000 and 17,000 disposable menstrual products across their reproductive years.",
    citations: [5, 6],
  },
  {
    value: "~1,800 days",
    label: "Direct tissue exposure",
    description:
      "That adds up to roughly 1,800 days of continuous contact between product materials and sensitive tissue — making chemical exposure during adolescent development especially critical for future reproductive health.",
    citations: [7, 8],
  },
];

export const homeCtas = [
  {
    href: "/science",
    title: "Explore the Chemical Glossary",
    description: "PFAS, VOCs, phthalates, and heavy metals — what testing has found.",
  },
  {
    href: "/guide",
    title: "Browse Safer Brand Options",
    description: "Verified picks widely available across Canada.",
  },
];

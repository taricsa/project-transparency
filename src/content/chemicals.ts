import type { ChemicalEntry } from "@/lib/types";

export const chemicals: ChemicalEntry[] = [
  {
    id: "pfas",
    name: "Per- and Polyfluoroalkyl Substances (PFAS)",
    summary:
      "Forever chemicals linked to water-repellent coatings — found in a significant share of period underwear and reusable pads, sometimes at extremely high concentrations.",
    details: [
      "Independent testing revealed PFAS in approximately 33% of period underwear and 25% of reusable pads.",
      "Some reusable textiles reached total fluorine concentrations up to 77,000 ppm — far above background levels.",
      "The $1.4 million class-action lawsuit Spencer, et al. v. Knix Wear Inc. penalized false \"PFAS-free\" advertising claims, showing that marketing labels don't always match lab results.",
    ],
    stats: [
      { value: "33%", label: "Period underwear with PFAS", citations: [11] },
      { value: "25%", label: "Reusable pads with PFAS", citations: [12] },
      { value: "77,000 ppm", label: "Peak total fluorine found", citations: [14, 15] },
    ],
    citations: [11, 12, 14, 15, 16, 17],
  },
  {
    id: "vocs",
    name: "Volatile Organic Compounds (VOCs)",
    summary:
      "Industrial solvents and fragrance carriers detected at high rates in conventional disposable pads — with massive differences between brands.",
    details: [
      "Global testing discovered xylene in 100%, toluene in 81%, and methylene chloride in 18% of evaluated conventional disposable pads.",
      "VOC concentrations varied by up to 6,000-fold between commercial brands — evidence that residues stem from manufacturing and quality-control choices, not unavoidable environmental contamination.",
    ],
    stats: [
      { value: "100%", label: "Pads with xylene", citations: [21] },
      { value: "81%", label: "Pads with toluene", citations: [22] },
      { value: "18%", label: "Pads with methylene chloride", citations: [23] },
      { value: "6,000×", label: "Brand-to-brand variance", citations: [24] },
    ],
    citations: [20, 21, 22, 23, 24],
  },
  {
    id: "phthalates",
    name: "Phthalate Esters",
    summary:
      "Plasticizers that can leach from product materials under body-temperature, moist conditions — with reproductive effects at surprisingly low doses.",
    details: [
      "Plasticizers like dibutyl phthalate (DBP) leach out under physiological conditions typical of menstrual product use.",
      "Environmental exposures ranging from 20 to 200 µg/kg/day can trigger non-linear reproductive toxicities that match endocrine receptor activation ranges — the low-dose paradox means \"small amounts\" aren't automatically safe.",
    ],
    stats: [
      { value: "20–200 µg/kg/day", label: "Environmental exposure range", citations: [39] },
      { value: "Non-linear", label: "Reproductive toxicity response", citations: [40, 41] },
    ],
    citations: [27, 28, 39, 40, 41],
  },
  {
    id: "heavy-metals",
    name: "Heavy Metals",
    summary:
      "A landmark 2024 UC Berkeley study found lead in every tampon tested — with different metal profiles in organic vs. non-organic products.",
    details: [
      "Lead was detected in 100% of tested tampons at a mean concentration of 120 ppb, alongside cadmium (6.74 ppb) and arsenic (2.56 ppb).",
      "Organic tampons exhibited higher concentrations of arsenic, while non-organic tampons had higher lead — a reminder that \"organic\" on the label doesn't automatically mean lower overall contaminant load.",
    ],
    stats: [
      { value: "100%", label: "Tampons with detectable lead", citations: [45] },
      { value: "120 ppb", label: "Mean lead concentration", citations: [48] },
      { value: "6.74 ppb", label: "Mean cadmium", citations: [46] },
      { value: "2.56 ppb", label: "Mean arsenic", citations: [47] },
    ],
    citations: [44, 45, 46, 47, 48, 52],
  },
];

export const sciencePageMeta = {
  title: "Toxicology & Chemical Glossary",
  description:
    "A scannable directory of known contaminants in menstrual products — PFAS, VOCs, phthalates, and heavy metals.",
  ogTitle: "Chemical Glossary",
  ogMetric: "4 contaminant classes",
  path: "/science",
};

export type CitationRef = number;

export interface ChemicalStat {
  value: string;
  label: string;
  citations?: CitationRef[];
}

export interface ChemicalEntry {
  id: string;
  name: string;
  summary: string;
  details: string[];
  stats: ChemicalStat[];
  citations: CitationRef[];
}

export interface RegulationSection {
  id: string;
  title: string;
  summary: string;
  details: string[];
  citations: CitationRef[];
}

export interface BrandEntry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badges: string[];
  citations: CitationRef[];
}

export interface ChecklistItem {
  id: string;
  title: string;
  summary: string;
  details: string;
  citations: CitationRef[];
}

export interface HomeSection {
  id: string;
  title: string;
  paragraphs: string[];
  citations: CitationRef[];
}

export interface ExposureStat {
  value: string;
  label: string;
  description: string;
  citations: CitationRef[];
}

export interface SourceEntry {
  id: CitationRef;
  label: string;
}

export interface PageMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogMetric?: string;
  path: string;
}

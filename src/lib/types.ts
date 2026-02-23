/* ── Pre-filter: integration vs innovation ── */

export interface PreFilterOption {
  value: "integration" | "innovation";
  label: string;
  description: string;
}

export interface PreFilterQuestion {
  id: number;
  text: string;
  options: PreFilterOption[];
}

/* ── Classification questions: 3-option (O / A / T) ── */

export type ClassLevel = "O" | "A" | "T";

export interface ClassOption {
  value: ClassLevel;
  label: string;
  description: string;
}

export interface ClassQuestion {
  id: number;
  text: string;
  options: ClassOption[];
}

/* ── Scenario questions grouped by dimension ── */

export interface Dimension {
  id: string;
  name: string;
  subtitle: string;
  questions: ClassQuestion[];
}

/* ── Results ── */

export type Classification = "optimisation" | "adjacency" | "transformation";

export type GapDirection = "aligned" | "under-classified" | "over-classified";

export interface DimensionClassification {
  dimension: Dimension;
  classification: Classification;
  scores: { O: number; A: number; T: number };
}

export interface GapResult {
  approved: Classification;
  actual: Classification;
  gapSize: 0 | 1 | 2;
  gapDirection: GapDirection;
  approvedScores: { O: number; A: number; T: number };
  actualScores: { O: number; A: number; T: number };
  dimensionResults: DimensionClassification[];
}

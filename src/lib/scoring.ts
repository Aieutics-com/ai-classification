import type {
  ClassLevel,
  Classification,
  GapDirection,
  GapResult,
  DimensionClassification,
} from "./types";
import { APPROVED_QUESTIONS } from "./approved-data";
import { DIMENSIONS } from "./scenario-data";

/* ── Answer maps ── */

export type PreFilterAnswers = Record<number, "integration" | "innovation" | undefined>;
export type ClassAnswers = Record<number, ClassLevel | undefined>;

/* ── Pre-filter ── */

export function evaluatePreFilter(answers: PreFilterAnswers): "integration" | "innovation" {
  let integration = 0;
  let innovation = 0;
  for (const v of Object.values(answers)) {
    if (v === "integration") integration++;
    if (v === "innovation") innovation++;
  }
  return integration > innovation ? "integration" : "innovation";
}

/* ── Classification from O/A/T answers ── */

const LEVEL_SCORE: Record<ClassLevel, number> = { O: 1, A: 2, T: 3 };

function averageScore(answers: ClassAnswers, questionIds: number[]): number {
  let sum = 0;
  let count = 0;
  for (const id of questionIds) {
    const v = answers[id];
    if (v) {
      sum += LEVEL_SCORE[v];
      count++;
    }
  }
  return count > 0 ? sum / count : 1;
}

function scoreToClassification(avg: number): Classification {
  if (avg <= 1.5) return "optimisation";
  if (avg <= 2.5) return "adjacency";
  return "transformation";
}

function countLevels(answers: ClassAnswers, questionIds: number[]): { O: number; A: number; T: number } {
  const counts = { O: 0, A: 0, T: 0 };
  for (const id of questionIds) {
    const v = answers[id];
    if (v) counts[v]++;
  }
  return counts;
}

/* ── Approved classification ── */

export function classifyApproved(answers: ClassAnswers): {
  classification: Classification;
  scores: { O: number; A: number; T: number };
} {
  const ids = APPROVED_QUESTIONS.map((q) => q.id);
  return {
    classification: scoreToClassification(averageScore(answers, ids)),
    scores: countLevels(answers, ids),
  };
}

/* ── Actual classification (all 10 scenario questions) ── */

export function classifyActual(answers: ClassAnswers): {
  classification: Classification;
  scores: { O: number; A: number; T: number };
  dimensionResults: DimensionClassification[];
} {
  const allIds = DIMENSIONS.flatMap((d) => d.questions.map((q) => q.id));

  const dimensionResults: DimensionClassification[] = DIMENSIONS.map((dim) => {
    const dimIds = dim.questions.map((q) => q.id);
    return {
      dimension: dim,
      classification: scoreToClassification(averageScore(answers, dimIds)),
      scores: countLevels(answers, dimIds),
    };
  });

  return {
    classification: scoreToClassification(averageScore(answers, allIds)),
    scores: countLevels(answers, allIds),
    dimensionResults,
  };
}

/* ── Gap computation ── */

const CLASS_RANK: Record<Classification, number> = {
  optimisation: 1,
  adjacency: 2,
  transformation: 3,
};

export function computeGap(
  approvedAnswers: ClassAnswers,
  scenarioAnswers: ClassAnswers
): GapResult {
  const approved = classifyApproved(approvedAnswers);
  const actual = classifyActual(scenarioAnswers);

  const diff = CLASS_RANK[actual.classification] - CLASS_RANK[approved.classification];
  const gapSize = Math.abs(diff) as 0 | 1 | 2;

  let gapDirection: GapDirection = "aligned";
  if (diff > 0) gapDirection = "under-classified";
  if (diff < 0) gapDirection = "over-classified";

  return {
    approved: approved.classification,
    actual: actual.classification,
    gapSize,
    gapDirection,
    approvedScores: approved.scores,
    actualScores: actual.scores,
    dimensionResults: actual.dimensionResults,
  };
}

/* ── Gap narratives ── */

export interface GapNarrative {
  label: string;
  summary: string;
  implications: string[];
}

export function getGapNarrative(result: GapResult): GapNarrative {
  const { approved, actual, gapSize, gapDirection } = result;

  if (gapDirection === "aligned") {
    if (approved === "optimisation") {
      return {
        label: "Aligned",
        summary:
          "Your initiative's requirements match how it was approved. This is genuine optimisation: bounded scope, clear metrics, manageable timeline. Proceed with standard operational governance.",
        implications: [
          "Timeline and resourcing are likely appropriate.",
          "Keep scope tight — the risk is scope creep into adjacency territory.",
          "Success metrics (efficiency, cost, speed) should work.",
        ],
      };
    }
    if (approved === "adjacency") {
      return {
        label: "Aligned",
        summary:
          "Your initiative's requirements match its approved framing. This is an adjacency: cross-functional, moderately complex, requiring coordination but not wholesale restructuring. Ensure cross-functional governance is in place.",
        implications: [
          "Cross-functional steering is appropriate and necessary.",
          "Watch for decision-right ambiguity between functions.",
          "The timeline (6-18 months) should hold if stakeholder alignment is maintained.",
        ],
      };
    }
    return {
      label: "Aligned",
      summary:
        "Your initiative's requirements match its approved framing. This is a genuine transformation: multi-year, structurally disruptive, requiring executive sponsorship and patient capital. This is rare — most organisations under-classify.",
      implications: [
        "Executive sponsorship and dedicated governance are in place — protect them.",
        "Success metrics should reflect organisational capability, not just efficiency.",
        "Expect the initiative to be politically contested. That is normal for transformation.",
      ],
    };
  }

  if (gapDirection === "under-classified") {
    if (gapSize === 1) {
      const approvedLabel = approved === "optimisation" ? "an optimisation" : "an adjacency";
      const actualLabel = actual === "adjacency" ? "an adjacency" : "a transformation";
      return {
        label: "Moderate Under-Classification",
        summary: `Your initiative was approved as ${approvedLabel}, but it actually requires ${actualLabel}. This is a one-step misclassification. The most likely symptoms: the timeline will overrun, stakeholders who should have been engaged from the start will surface as blockers midway through, and the success metrics will not capture what the initiative actually delivers.`,
        implications: [
          "The approved timeline is likely 30-50% too short.",
          "Governance needs to expand — additional stakeholders should be at the table now.",
          "Success metrics need revisiting before the pilot concludes.",
          "The fix is political, not technical: reclassify with the people who approved it.",
        ],
      };
    }
    return {
      label: "Critical Under-Classification",
      summary:
        "Your initiative was approved as an optimisation, but it actually requires transformation. This is the most common — and most costly — AI failure pattern. The initiative will deliver technically but fail organisationally. The timeline is wrong by a factor of 3-4x. The governance structure cannot absorb the decisions this initiative requires. The success metrics measure the wrong things.",
      implications: [
        "The approved timeline (3-6 months) should be 18-48 months.",
        "Single-function governance cannot handle cross-organisational change.",
        "Efficiency metrics will show success while the initiative fails structurally.",
        "This is not a course correction — it requires going back to the approving body and reframing entirely.",
        "Without reclassification, expect the initiative to stall after the pilot.",
      ],
    };
  }

  // Over-classified
  if (gapSize === 1) {
    const approvedLabel = approved === "transformation" ? "a transformation" : "an adjacency";
    const actualLabel = actual === "adjacency" ? "an adjacency" : "an optimisation";
    return {
      label: "Over-Classification",
      summary: `Your initiative was approved as ${approvedLabel}, but it actually requires ${actualLabel}. This is less dangerous than under-classification, but it creates its own problems: governance overhead slows down what should be faster execution, and exploration processes are applied where deployment discipline would be more effective.`,
      implications: [
        "Governance is heavier than necessary — consider simplifying.",
        "The timeline can likely be compressed.",
        "The team may be over-thinking what is essentially a bounded problem.",
        "Reallocate the surplus governance budget to adoption and change management.",
      ],
    };
  }
  return {
    label: "Significant Over-Classification",
    summary:
      "Your initiative was framed as a transformation but is actually an optimisation. This means innovation theatre: extensive governance, steering committees, and strategic framing applied to what is essentially a process improvement. Strip back the governance, assign a single owner, and deploy.",
    implications: [
      "The transformation governance is wasting resources and slowing delivery.",
      "A single owner with operational authority would be more effective than a steering committee.",
      "Redeploy the programme structure to where it is actually needed.",
      "Deliver this as a 3-6 month project, not an 18+ month programme.",
    ],
  };
}

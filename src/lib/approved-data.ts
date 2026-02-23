import type { ClassQuestion } from "./types";

export const APPROVED_SECTION = {
  heading: "How your organisation set this up",
  subtext:
    "These questions are about what was approved — the business case, the timeline, the governance structure. Answer based on what was written down, not what you believe.",
};

export const APPROVED_QUESTIONS: ClassQuestion[] = [
  {
    id: 101,
    text: "What timeline was approved for this initiative?",
    options: [
      {
        value: "O",
        label: "3-6 months",
        description:
          "A short implementation cycle with measurable results expected within two quarters.",
      },
      {
        value: "A",
        label: "6-18 months",
        description:
          "A medium-term programme with phased milestones and cross-functional coordination.",
      },
      {
        value: "T",
        label: "18+ months",
        description:
          "A long-term strategic programme. The timeline reflects structural change, not just delivery.",
      },
    ],
  },
  {
    id: 102,
    text: "What metrics define success in the business case?",
    options: [
      {
        value: "O",
        label: "Efficiency gains",
        description:
          "Speed, cost reduction, error rate, throughput. The existing process gets measurably better.",
      },
      {
        value: "A",
        label: "New outcomes",
        description:
          "New revenue streams, cross-functional outcomes, or capabilities that did not exist before.",
      },
      {
        value: "T",
        label: "Organisational repositioning",
        description:
          "Competitive positioning, market repositioning, or a fundamental shift in organisational capability.",
      },
    ],
  },
  {
    id: 103,
    text: "Who governs the initiative?",
    options: [
      {
        value: "O",
        label: "Single function or IT",
        description:
          "The initiative sits within one department. Standard operational oversight and reporting.",
      },
      {
        value: "A",
        label: "Cross-functional steering group",
        description:
          "Multiple functions are represented. A dedicated steering committee coordinates across boundaries.",
      },
      {
        value: "T",
        label: "C-suite with dedicated programme",
        description:
          "Executive sponsorship with a dedicated programme office, distinct budget, and transformation governance.",
      },
    ],
  },
  {
    id: 104,
    text: "What was the mandate?",
    options: [
      {
        value: "O",
        label: "Improve a specific process",
        description:
          "Make this process faster, cheaper, or more accurate. The scope is bounded and well-defined.",
      },
      {
        value: "A",
        label: "Extend into a neighbouring domain",
        description:
          "Use AI to reach into a new customer segment, workflow, or business area adjacent to what exists.",
      },
      {
        value: "T",
        label: "Redesign how the function operates",
        description:
          "Fundamentally change how this part of the organisation works — capabilities, structures, incentives.",
      },
    ],
  },
];

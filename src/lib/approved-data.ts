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
        example:
          "e.g. 'We'll have the chatbot live by Q3.'",
      },
      {
        value: "A",
        label: "6-18 months",
        description:
          "A medium-term programme with phased milestones and cross-functional coordination.",
        example:
          "e.g. 'Phase 1 is a pilot with marketing; Phase 2 extends to customer service by next year.'",
      },
      {
        value: "T",
        label: "18+ months",
        description:
          "A long-term strategic programme. The timeline reflects structural change, not just delivery.",
        example:
          "e.g. 'This is a 2-year programme to rebuild how we handle customer intelligence across all regions.'",
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
          "Speed, cost savings, error reduction. The existing process gets measurably better.",
        example:
          "e.g. 'We expect to cut report preparation time by 60%' or 'Reduce manual errors in order processing by 80%.'",
      },
      {
        value: "A",
        label: "New outcomes",
        description:
          "New revenue, new customer segments reached, or capabilities the team didn't have before.",
        example:
          "e.g. 'We'll be able to predict which customers are about to churn — something we couldn't do at all before.'",
      },
      {
        value: "T",
        label: "Organisational repositioning",
        description:
          "Competitive positioning, market repositioning, or a fundamental shift in organisational capability.",
        example:
          "e.g. 'Success means we've fundamentally changed how the commercial team operates — from reactive to predictive.'",
      },
    ],
  },
  {
    id: 103,
    text: "Who is responsible for overseeing this initiative?",
    options: [
      {
        value: "O",
        label: "One department or IT",
        description:
          "It sits within one team. Standard reporting to the usual manager or director.",
        example:
          "e.g. The Head of Marketing owns it. Updates go in the regular monthly review.",
      },
      {
        value: "A",
        label: "Cross-functional steering group",
        description:
          "Multiple functions are represented. A dedicated steering committee coordinates across boundaries.",
        example:
          "e.g. There's a steering committee with representatives from Marketing, IT, and Finance that meets biweekly.",
      },
      {
        value: "T",
        label: "C-suite with dedicated programme",
        description:
          "Executive sponsorship with a dedicated programme office, distinct budget, and transformation governance.",
        example:
          "e.g. The CEO sponsors it. There's a dedicated programme manager and a separate budget line.",
      },
    ],
  },
  {
    id: 104,
    text: "What were you asked to achieve with this initiative?",
    options: [
      {
        value: "O",
        label: "Improve a specific process",
        description:
          "Make this process faster, cheaper, or more accurate. The scope is bounded and well-defined.",
        example:
          "e.g. 'Make the monthly close faster' or 'Automate the first round of candidate screening.'",
      },
      {
        value: "A",
        label: "Extend into a neighbouring domain",
        description:
          "Use AI to reach into a new customer segment, workflow, or business area adjacent to what exists.",
        example:
          "e.g. 'Use AI to reach small business customers — a segment we've never actively served' or 'Bring customer feedback into product decisions in real time.'",
      },
      {
        value: "T",
        label: "Redesign how the function operates",
        description:
          "Fundamentally change how this part of the organisation works — capabilities, structures, incentives.",
        example:
          "e.g. 'Redesign how the entire supply chain planning function works' or 'Shift from a product-led to a data-led commercial model.'",
      },
    ],
  },
];

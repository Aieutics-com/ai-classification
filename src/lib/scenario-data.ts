import type { Dimension } from "./types";

export const SCENARIO_SECTION = {
  heading: "What the initiative actually requires",
  subtext:
    "Now answer based on what you have observed — what the initiative needs to succeed, regardless of what was approved.",
};

export const DIMENSIONS: Dimension[] = [
  {
    id: "structural-impact",
    name: "Structural Impact",
    subtitle: "How much does the organisation actually need to change?",
    questions: [
      {
        id: 201,
        text: "What changes about the day-to-day work?",
        options: [
          {
            value: "O",
            label: "Same work, faster",
            description:
              "The same work happens faster or with fewer errors. No one's job description changes.",
          },
          {
            value: "A",
            label: "Some workflows change",
            description:
              "Some workflows are different. A few roles have new responsibilities, but most people would recognise their jobs.",
          },
          {
            value: "T",
            label: "Work is fundamentally different",
            description:
              "The work itself is fundamentally different. Job descriptions, team structures, and reporting lines have changed or need to.",
          },
        ],
      },
      {
        id: 202,
        text: "What happens to existing processes?",
        options: [
          {
            value: "O",
            label: "AI slots into existing process",
            description:
              "Existing processes stay the same — the AI slots into a specific step.",
          },
          {
            value: "A",
            label: "Some processes are redesigned",
            description:
              "Some processes are redesigned. Others remain, but connect differently.",
          },
          {
            value: "T",
            label: "Most processes are being rebuilt",
            description:
              "Most processes in this area are being rebuilt. The old workflow does not accommodate what the AI enables.",
          },
        ],
      },
    ],
  },
  {
    id: "authority-decisions",
    name: "Authority & Decision Rights",
    subtitle: "Who gains or loses decision-making power?",
    questions: [
      {
        id: 203,
        text: "Who makes decisions about this area of work now vs. before?",
        options: [
          {
            value: "O",
            label: "Same people, better information",
            description:
              "Same people, same decisions, better information. The AI informs but does not change who decides.",
          },
          {
            value: "A",
            label: "Some decision-making has shifted",
            description:
              "Some decision-making has shifted. New people have input; some previous decision-makers have a reduced role.",
          },
          {
            value: "T",
            label: "Authority has fundamentally changed",
            description:
              "Decision-making authority has fundamentally changed. New roles exist, accountability lines are different.",
          },
        ],
      },
      {
        id: 204,
        text: "If a senior leader objected to this initiative, what would happen?",
        options: [
          {
            value: "O",
            label: "Easy to accommodate",
            description:
              "It would be easy to accommodate — the initiative does not threaten anyone's domain.",
          },
          {
            value: "A",
            label: "Negotiation required",
            description:
              "There would be negotiation. Some stakeholders benefit, others need to be brought along.",
          },
          {
            value: "T",
            label: "Political conflict",
            description:
              "It would trigger a political conflict. The initiative requires changes that some leaders actively resist.",
          },
        ],
      },
    ],
  },
  {
    id: "reversibility",
    name: "Reversibility",
    subtitle:
      "If the AI were removed tomorrow, what would need to change?",
    questions: [
      {
        id: 205,
        text: "If the AI capability were removed tomorrow, what would happen?",
        options: [
          {
            value: "O",
            label: "Revert easily",
            description:
              "We would go back to the old way. Slower, but all processes and people are still there.",
          },
          {
            value: "A",
            label: "Painful but possible",
            description:
              "Some roles have shifted and some decisions are made differently. We could revert, but it would take significant reorganisation.",
          },
          {
            value: "T",
            label: "Reverting is not realistic",
            description:
              "We have restructured around this capability. The old way of working no longer exists.",
          },
        ],
      },
      {
        id: 206,
        text: "How much of your team's current skill set depends on the AI capability continuing?",
        options: [
          {
            value: "O",
            label: "Very little",
            description:
              "Very little. Everyone could do their job without it — they did before.",
          },
          {
            value: "A",
            label: "Some new skills",
            description:
              "Some people have developed new skills specifically for this. Reverting means retraining or reassigning.",
          },
          {
            value: "T",
            label: "Skill base has shifted",
            description:
              "We have hired for new roles, retrained existing staff, and retired old competencies. The skill base has shifted.",
          },
        ],
      },
    ],
  },
  {
    id: "stakeholder-reach",
    name: "Stakeholder Reach",
    subtitle: "How many teams, functions, or levels are involved?",
    questions: [
      {
        id: 207,
        text: "How many teams or functions are affected by this initiative?",
        options: [
          {
            value: "O",
            label: "One team or function",
            description:
              "One team or function. The impact is contained.",
          },
          {
            value: "A",
            label: "2-3 functions",
            description:
              "2-3 functions. The initiative crosses departmental boundaries.",
          },
          {
            value: "T",
            label: "Multiple divisions",
            description:
              "Multiple divisions. The initiative touches how the organisation operates at a structural level.",
          },
        ],
      },
      {
        id: 208,
        text: "Who needs to agree for the initiative to succeed?",
        options: [
          {
            value: "O",
            label: "One decision-maker",
            description:
              "One decision-maker and their team. Standard operational approval.",
          },
          {
            value: "A",
            label: "3-5 stakeholders across functions",
            description:
              "3-5 stakeholders across functions. Cross-functional alignment is required.",
          },
          {
            value: "T",
            label: "C-suite sponsorship required",
            description:
              "C-suite sponsorship, plus buy-in from leaders whose domains are being restructured.",
          },
        ],
      },
    ],
  },
  {
    id: "capability-requirements",
    name: "Capability Requirements",
    subtitle: "What new skills, roles, or systems does this need?",
    questions: [
      {
        id: 209,
        text: "What new skills does the organisation need for this initiative?",
        options: [
          {
            value: "O",
            label: "Minimal — a few training sessions",
            description:
              "Minimal. Existing staff learn to use a new tool — a few training sessions.",
          },
          {
            value: "A",
            label: "Moderate — some new roles",
            description:
              "Moderate. Some new roles or significant upskilling. External expertise needed for setup but not ongoing.",
          },
          {
            value: "T",
            label: "Substantial — new disciplines",
            description:
              "Substantial. New disciplines, new roles, new ways of evaluating performance. The talent profile of the team changes.",
          },
        ],
      },
      {
        id: 210,
        text: "What infrastructure or systems changes does the initiative require?",
        options: [
          {
            value: "O",
            label: "Connects to existing systems",
            description:
              "The AI connects to existing systems. No new infrastructure.",
          },
          {
            value: "A",
            label: "Some new systems or integrations",
            description:
              "Some new systems or integrations. Data governance or access policies need updating.",
          },
          {
            value: "T",
            label: "New architecture and governance",
            description:
              "New data architecture, new governance frameworks, new evaluation systems. The technical foundation is changing.",
          },
        ],
      },
    ],
  },
];

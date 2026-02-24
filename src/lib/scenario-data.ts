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
            example:
              "e.g. The finance team uses AI to reconcile invoices, but everyone's role is identical to last year.",
          },
          {
            value: "A",
            label: "Some workflows change",
            description:
              "Some workflows are different. A few roles have new responsibilities, but most people would recognise their jobs.",
            example:
              "e.g. The customer service team now triages differently — AI handles Tier 1, humans handle escalations. Some people shifted from answering calls to training the AI.",
          },
          {
            value: "T",
            label: "Work is fundamentally different",
            description:
              "The work itself is fundamentally different. Job descriptions, team structures, and reporting lines have changed or need to.",
            example:
              "e.g. The marketing analytics team no longer exists as a separate group — their work is embedded in every campaign team, and three new 'AI strategist' roles were created.",
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
            example:
              "e.g. The approval workflow is the same 5 steps — AI just auto-fills step 2 instead of someone doing it manually.",
          },
          {
            value: "A",
            label: "Some processes are redesigned",
            description:
              "Some processes are redesigned. Others remain, but connect differently.",
            example:
              "e.g. The lead qualification process was redesigned: AI now scores leads before a human reviews them, which changed the handoff between marketing and sales.",
          },
          {
            value: "T",
            label: "Most processes are being rebuilt",
            description:
              "Most processes in this area are being rebuilt. The old workflow does not accommodate what the AI enables.",
            example:
              "e.g. The old campaign planning process (brief, agency, review, launch) has been replaced entirely by an AI-assisted continuous optimisation loop.",
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
              "Same people make the same decisions — the AI gives them better data to work with.",
            example:
              "e.g. The regional director still approves pricing — now they have an AI-generated recommendation, but the final call hasn't moved.",
          },
          {
            value: "A",
            label: "Some decision-making has shifted",
            description:
              "Some decision-making has shifted. New people have input; some previous decision-makers have a reduced role.",
            example:
              "e.g. Campaign budget allocation used to require VP approval. Now the AI recommends allocations and the marketing manager can approve up to a threshold.",
          },
          {
            value: "T",
            label: "Authority has fundamentally changed",
            description:
              "Decision-making authority has fundamentally changed. New roles exist, accountability lines are different.",
            example:
              "e.g. Inventory decisions that used to sit with country managers are now made centrally by a new AI-enabled planning team.",
          },
        ],
      },
      {
        id: 204,
        text: "If a senior leader objected to this initiative, what would happen?",
        hint: "Think about what has actually happened — or what you believe would realistically happen — not what should happen in theory.",
        options: [
          {
            value: "O",
            label: "Easy to accommodate",
            description:
              "It would be easy to accommodate — the initiative does not threaten anyone's domain.",
            example:
              "e.g. If the CFO said 'I don't want AI in invoice processing,' we'd simply stop. No one else is affected.",
          },
          {
            value: "A",
            label: "Negotiation required",
            description:
              "There would be negotiation. Some stakeholders benefit, others need to be brought along.",
            example:
              "e.g. If the Head of Sales pushed back, we'd need to negotiate — their team provides the data that marketing's AI tool depends on.",
          },
          {
            value: "T",
            label: "Political conflict",
            description:
              "It would trigger a political conflict. The initiative requires changes that some leaders actively resist.",
            example:
              "e.g. When the VP of Operations raised concerns, it escalated to the CEO. The initiative requires their division to restructure, and they're resisting.",
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
            example:
              "e.g. We'd go back to the spreadsheet. It would take longer, but we know how.",
          },
          {
            value: "A",
            label: "Painful but possible",
            description:
              "Some roles have shifted and some decisions are made differently. We could revert, but it would take significant reorganisation.",
            example:
              "e.g. We'd struggle — two people were reassigned when the AI took over their old tasks. We'd need to hire or retrain to go back.",
          },
          {
            value: "T",
            label: "Reverting is not realistic",
            description:
              "We have restructured around this capability. The old way of working no longer exists.",
            example:
              "e.g. We can't go back. The old team structure doesn't exist. The skills we'd need to do it the old way have left the organisation.",
          },
        ],
      },
      {
        id: 206,
        text: "How much has your team's expertise changed because of the AI?",
        options: [
          {
            value: "O",
            label: "Very little",
            description:
              "Everyone could do their job without it — they did before.",
            example:
              "e.g. Everyone could do their job tomorrow without the AI. They'd just be slower.",
          },
          {
            value: "A",
            label: "Some new skills",
            description:
              "Some people have developed new skills specifically for this. Reverting means retraining or reassigning.",
            example:
              "e.g. Two analysts were retrained to manage AI outputs instead of running reports. They'd need retraining to go back.",
          },
          {
            value: "T",
            label: "Skill base has shifted",
            description:
              "We have hired for new roles, retrained existing staff, and retired old competencies. The skill base has shifted.",
            example:
              "e.g. We hired a prompt engineering lead and an AI ethics officer. We retired three legacy analyst roles. The team's skill profile is fundamentally different.",
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
            example:
              "e.g. Just the procurement team.",
          },
          {
            value: "A",
            label: "2-3 functions",
            description:
              "2-3 functions. The initiative crosses departmental boundaries.",
            example:
              "e.g. Marketing, Sales, and Customer Service all needed to adjust.",
          },
          {
            value: "T",
            label: "Multiple divisions",
            description:
              "Multiple divisions. The initiative touches how the organisation operates at a structural level.",
            example:
              "e.g. Every commercial function, plus IT, HR (for new roles), and Legal (for data governance).",
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
            example:
              "e.g. The Head of Finance approved it. That was enough.",
          },
          {
            value: "A",
            label: "3-5 stakeholders across functions",
            description:
              "3-5 stakeholders across functions. Cross-functional alignment is required.",
            example:
              "e.g. We needed sign-off from Marketing, IT, and the Data Protection Officer.",
          },
          {
            value: "T",
            label: "C-suite sponsorship required",
            description:
              "C-suite sponsorship, plus buy-in from leaders whose domains are being restructured.",
            example:
              "e.g. The CEO had to sponsor it. The Heads of Sales, Operations, and HR all needed to agree because their teams are being restructured.",
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
            example:
              "e.g. A half-day workshop on how to use the new dashboarding tool.",
          },
          {
            value: "A",
            label: "Moderate — some new roles",
            description:
              "Moderate. Some new roles or significant upskilling. External expertise needed for setup but not ongoing.",
            example:
              "e.g. We hired a data analyst and sent two marketers on a 'working with AI' certification.",
          },
          {
            value: "T",
            label: "Substantial — new disciplines",
            description:
              "Substantial. New disciplines, new roles, new ways of evaluating performance. The talent profile of the team changes.",
            example:
              "e.g. We created an entirely new 'AI & Insights' department. Performance reviews now include AI literacy criteria.",
          },
        ],
      },
      {
        id: 210,
        text: "What changes to your technology or data setup does this initiative need?",
        options: [
          {
            value: "O",
            label: "Minimal — connects to what we have",
            description:
              "The AI connects to tools and systems we already have. No new setup needed.",
            example:
              "e.g. The AI plugs into our existing CRM. Nothing else changed.",
          },
          {
            value: "A",
            label: "Some new tools or data connections",
            description:
              "We needed new tools, new data connections, or had to update rules about who can access what data.",
            example:
              "e.g. We had to connect two databases that weren't linked before, and create a new access policy for the marketing team to see sales data.",
          },
          {
            value: "T",
            label: "Major systems overhaul",
            description:
              "We're building new systems, creating new rules for how data is managed, and changing how we evaluate whether things are working.",
            example:
              "e.g. We built a new data lake, hired a data governance lead, and replaced our reporting stack. The old systems couldn't support what the AI needs.",
          },
        ],
      },
    ],
  },
];

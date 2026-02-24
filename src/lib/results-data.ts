/* ── Authored copy for results page sections ── */

export interface DimensionReflectionData {
  reflection: string;
  reflectionPrompt: string;
  actionPrompts: string[];
}

/**
 * Per-dimension reflections, self-reflection prompts, and action steps.
 * Shown when a dimension's actual classification exceeds the approved classification.
 */
export const DIMENSION_REFLECTIONS: Record<string, DimensionReflectionData> = {
  "structural-impact": {
    reflection:
      "This dimension suggests the initiative requires more organisational change than was approved. Day-to-day work and existing processes are shifting further than the governance structure anticipates. When structural impact is under-classified, teams absorb the disruption informally — and that informal adaptation is invisible to leadership until it breaks.",
    reflectionPrompt:
      "If someone asked your team to describe their jobs today versus six months ago, how much has changed that was never formally acknowledged?",
    actionPrompts: [
      "Map which workflows have already changed informally because of this initiative. If people are doing things differently but their job descriptions have not been updated, the structural impact is real — it is just unacknowledged.",
      "Identify which process changes were assumed to be temporary but have become permanent. These are the clearest indicators that the initiative has outgrown its approved classification.",
      "Present the structural changes to whoever approved the initiative. Not as a problem — as evidence that the initiative is working. It is simply working at a different scale than was anticipated.",
    ],
  },
  "authority-decisions": {
    reflection:
      "Decision-making power has shifted — or needs to shift — more than the approval assumed. When authority changes are under-classified, decisions stall because the people who need to make them do not have the mandate, and the people with the mandate do not understand the operational reality. This is where initiatives become politically contested.",
    reflectionPrompt:
      "Who is currently making decisions about this initiative that they did not make a year ago? Were they formally given that authority, or did they assume it because no one else would?",
    actionPrompts: [
      "Document who actually makes decisions about this initiative today versus who was originally designated. If the decision-makers have changed informally, formalise the change before it creates a governance crisis.",
      "Identify any senior stakeholder whose authority is reduced by this initiative. Their resistance is not irrational — it is structural. Engage them directly rather than working around them.",
      "Schedule a conversation with the initiative's sponsor to explicitly discuss whether decision rights need to be reassigned. Ambiguous authority slows everything down.",
    ],
  },
  reversibility: {
    reflection:
      "The organisation has become more dependent on this AI capability than the approval anticipated. Skills have shifted, roles have changed, or the old way of working has atrophied. When reversibility is under-classified, the organisation has made a commitment it has not formally acknowledged — which means it has not resourced the dependency appropriately.",
    reflectionPrompt:
      "If this AI capability disappeared tomorrow, how long would it take your team to return to the previous way of working — and do the people who approved it know the answer?",
    actionPrompts: [
      "Assess honestly: could your team revert to the pre-AI process within a week? If not, document what has changed and present it to leadership. The dependency is a fact — it should be a managed fact.",
      "Identify which skills your team had before this initiative that have since atrophied. Skill decay is the clearest sign that the initiative has created structural dependency.",
      "If new roles were created or people were retrained specifically for this initiative, flag this to whoever controls the budget. The investment is already larger than what was approved — the question is whether it is being managed.",
    ],
  },
  "stakeholder-reach": {
    reflection:
      "More teams, functions, or leadership levels are affected than the approval assumed. When stakeholder reach is under-classified, cross-functional dependencies surface as surprises. Teams that were never consulted become blockers. Alignment that should have been built at the start must be retrofitted mid-execution.",
    reflectionPrompt:
      "How many teams or functions have been affected by this initiative that were not part of the original plan? What did it cost to bring them on board after the fact?",
    actionPrompts: [
      "List every team or function that has been involved in or affected by this initiative — including those brought in reactively. Compare this list to the stakeholder scope in the original approval. The gap is the under-classification.",
      "For each stakeholder who was brought in late, estimate the delay their late involvement caused. This is the cost of under-classifying stakeholder reach — and it is the argument for reclassification.",
      "If more than three functions are involved, propose a cross-functional steering mechanism. Single-function governance cannot coordinate cross-organisational change.",
    ],
  },
  "capability-requirements": {
    reflection:
      "The initiative requires more new skills, roles, or systems than the approval anticipated. When capability requirements are under-classified, the organisation tries to deliver a complex initiative with a simple team structure. The gap shows up as delays, quality issues, and people being stretched beyond their competence — not because they are incapable, but because the work has changed faster than the team has been allowed to adapt.",
    reflectionPrompt:
      "What skills does your team need today that no one on the team had when this initiative was approved? Were those gaps filled, or are people improvising?",
    actionPrompts: [
      "Audit the skills gap: list the capabilities this initiative actually requires versus what was available when it was approved. If the gap was filled by informal learning or heroic effort, it is not sustainable.",
      "If new tools, data connections, or systems were needed that were not in the original plan, document the actual technology footprint. The infrastructure reality should match the governance classification.",
      "Propose a capability investment plan that matches the actual classification, not the approved one. This is not scope creep — it is honest accounting of what the initiative requires to succeed.",
    ],
  },
};

export const COI_COPY = {
  heading: "The Cost of Ignoring",
  intro:
    "Most organisations calculate ROI for their AI initiatives. Few calculate the COI — the Cost of Ignoring — what each misclassified dimension is quietly costing them.",
  body: "Every dimension where the actual requirement exceeds the approved classification is a compounding risk. The gap does not close on its own. It widens — because the initiative continues to evolve while the governance stays frozen at the original approval.",
};

export const CTA_COPY = {
  heading: "What This Diagnostic Doesn't Tell You",
  body: `This tool reveals where your AI initiative's classification does not match its reality. It does not tell you how to close the gap — because the answer depends on your organisation's politics, your stakeholder landscape, and how far along the initiative has progressed.

Reclassification is not a technical exercise. It is a political one. The people who approved the initiative at its current classification may resist acknowledging that it requires more governance, more time, or more investment. That resistance is itself a data point about the initiative's complexity.`,
  callout:
    "If your diagnostic shows a gap of two levels or more, a structured conversation can help you decide how to present the reclassification case to the people who need to hear it.",
  contact: {
    name: "Alexandra N.",
    title: "Founder, Aieutics",
    subtitle: "Executive coaching & strategic transformation",
    website: "aieutics.com",
    email: "hello@aieutics.com",
  },
};

export const ATTRIBUTION =
  "Developed by Aieutics from the AI Classification Problem framework, based on patterns observed across corporate innovation programmes, executive coaching, and strategic transformation engagements.";

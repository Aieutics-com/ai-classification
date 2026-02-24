import type { PreFilterQuestion } from "./types";

export const PREFILTER_QUESTIONS: PreFilterQuestion[] = [
  {
    id: 1,
    text: "Which better describes what your team is doing with AI?",
    options: [
      {
        value: "integration",
        label: "Using an existing product or service",
        description:
          "We are adopting a tool or platform that already exists. We are connecting it to how we work today.",
        example:
          "e.g. Adding an AI writing assistant to your marketing team's workflow, or using an AI-powered forecasting feature inside your existing ERP.",
      },
      {
        value: "innovation",
        label: "Something new or adapted",
        description:
          "We are building, adapting, or combining capabilities where the application, workflow, or use case does not yet exist.",
        example:
          "e.g. Building a custom recommendation engine for a client segment no one has targeted before, or combining internal data sources in a way the organisation hasn't done.",
      },
    ],
  },
  {
    id: 2,
    text: "What is the primary goal?",
    options: [
      {
        value: "integration",
        label: "Do existing work better",
        description:
          "Do what we already do, faster, cheaper, or more accurately. The work itself does not change.",
        example:
          "e.g. Automating monthly report generation that currently takes 3 days, or reducing manual data entry errors in invoicing.",
      },
      {
        value: "innovation",
        label: "Enable new work or decisions",
        description:
          "Enable work, decisions, or capabilities that were not possible — or not practical — before.",
        example:
          "e.g. Using AI to identify customer churn signals that no one was tracking before, or enabling real-time pricing decisions that were previously made quarterly.",
      },
    ],
  },
  {
    id: 3,
    text: "What changes about how people work?",
    options: [
      {
        value: "integration",
        label: "Same people, same jobs, better tool",
        description:
          "Everyone keeps their current role. The AI replaces or accelerates a specific task within existing workflows.",
        example:
          "e.g. The sales team uses an AI tool to draft proposals faster, but their role, targets, and reporting line stay the same.",
      },
      {
        value: "innovation",
        label: "Roles or decision processes change",
        description:
          "Some roles, responsibilities, or decision-making processes need to change for the initiative to work.",
        example:
          "e.g. A new 'AI Operations' role is created, or the marketing team now makes decisions that used to require data science approval.",
      },
    ],
  },
];

export const INTEGRATION_RESULT = {
  heading: "This is integration, not innovation",
  description:
    "Your initiative deploys an existing capability into existing processes. This is legitimate, valuable work — but it requires deployment discipline, not innovation governance.",
  implications: [
    "Resource it as a deployment project with a clear owner, fixed timeline, and adoption metrics.",
    "Skip the discovery workshops. You are not exploring — you are rolling out.",
    "The risk is over-governance, not under-governance. Keep it lean.",
    "If adoption stalls, the problem is change management, not technology.",
  ],
};

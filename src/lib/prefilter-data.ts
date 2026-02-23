import type { PreFilterQuestion } from "./types";

export const PREFILTER_QUESTIONS: PreFilterQuestion[] = [
  {
    id: 1,
    text: "Which better describes the technology you are deploying?",
    options: [
      {
        value: "integration",
        label: "Existing product or API",
        description:
          "We are using an existing product, platform, or API. The capability already exists — we are connecting it to our processes.",
      },
      {
        value: "innovation",
        label: "Something new or adapted",
        description:
          "We are building, adapting, or combining capabilities where the application, workflow, or use case does not yet exist.",
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
      },
      {
        value: "innovation",
        label: "Enable new work or decisions",
        description:
          "Enable work, decisions, or capabilities that were not possible — or not practical — before.",
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
      },
      {
        value: "innovation",
        label: "Roles or decision processes change",
        description:
          "Some roles, responsibilities, or decision-making processes need to change for the initiative to work.",
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

/**
 * Experience Data
 *
 * Work history rendered by the "experience" section on the home page.
 * Ordered newest first. Each role carries a short `summary` shown by
 * default, with the full `highlights` behind a disclosure.
 */

export interface ExperienceRole {
  company: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
}

export const experience: ExperienceRole[] = [
  {
    company: "ADOFLABS",
    title: "Applied Researcher",
    period: "Jul 2026 – Sep 2026",
    summary:
      "built a real-time evaluation layer for AI voice agents that scores phone-call turns during live conversations, tracking sentiment and escalation risk.",
    highlights: [
      "Researched and prototyped a real-time evaluation layer for AI voice agents that scores phone-call turns during live conversations, tracks sentiment and escalation risk, and surfaces potentially at-risk interactions before a call ends.",
      "Built a concurrent evaluation pipeline using Pipecat, Twilio, Groq (STT/LLM/TTS), and WebSockets, running evaluation alongside response generation: achieved approximately 3-second scoring latency during real phone-call tests.",
      "Designed a modular score_turn() contract returning an LLM-based sentiment score in [-1, +1], escalation classification, and confidence. Defined evaluation categories including human-agent requests, repeated complaints, and neutral interactions, with prompt rules to distinguish explicit escalation requests from repeated frustration.",
      "Implemented a WebSocket dashboard for per-turn scores and escalation alerts; wrote unit and integration tests against live Groq endpoints and a real WebSocket server. Defined four key metrics: sentiment trajectory, goal-completion probability, escalation triggers, and time-to-recovery.",
    ],
  },
  {
    company: "ADOFLABS",
    title: "Software Engineer",
    period: "Jan 2026 – Jul 2026",
    summary:
      "engineered a full-stack Employee Intelligence Platform with employee-scoring, flight-risk, and pay-fairness engines.",
    highlights: [
      "Engineered a full-stack Employee Intelligence Platform using Node.js, Express.js, PostgreSQL, Prisma, Next.js, React, and TypeScript, separating routes, services, repositories, business engines, middleware, and backend jobs.",
      "Developed employee-scoring, flight-risk, and pay-fairness engines with configurable weighted scoring, normalization, percentile analysis, risk thresholds, keyword detection, and severity classification.",
      "Implemented JWT/RBAC, company-level access isolation, Zod validation, rate limiting, bcrypt, and AES-256-GCM encryption. Added tamper-evident SHA-256 hash-chained audit logs, versioned configuration, approval workflows, and scheduled background jobs.",
    ],
  },
];

export function getAllExperience(): ExperienceRole[] {
  return experience;
}

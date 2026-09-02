/**
 * Content objects for the Work Experience discipline pathway pages.
 * Rendered through the shared PathwayPage template
 * (src/components/PathwayPage.tsx) via the dynamic
 * /simulation-based-work-experience/:slug route.
 *
 * DRAFT CONTENT NOTICE: situations, artefacts and competencies below are
 * generic, illustrative descriptions of each discipline's professional
 * scope — drafted from the short pathway blurbs in the approved
 * spec docs, not from real simulation content. No standards-body alignment
 * (PMBOK, BABOK, PRINCE2 etc.), no completion times, no pass rates and no
 * employer claims are included, consistent with what has been confirmed.
 * Review and replace with real per-discipline content before this is
 * treated as final copy.
 */

export interface PathwayContent {
  slug: string;
  name: string;
  accent: string;
  tagline: string;
  intro: string;
  situations: string[];
  artefacts: string[];
  competencies: string[];
  status: "Open now" | "In development";
}

export const pathways: Record<string, PathwayContent> = {
  "product-management": {
    slug: "product-management",
    name: "Product Management",
    accent: "#A34411",
    tagline: "Define the problem, weigh the trade-offs and decide what gets built.",
    intro:
      "Work through the kind of ambiguity a product manager is actually handed: incomplete evidence, competing stakeholder opinions and a decision that has to be made anyway.",
    situations: [
      "Assess an opportunity and define the problem worth solving",
      "Prioritise a roadmap against fixed capacity",
      "Recommend a trade-off to a sceptical stakeholder",
      "Write a product decision record justifying a call made under uncertainty",
    ],
    artefacts: ["Opportunity assessment", "Product strategy", "Prioritisation rationale", "Product decision record"],
    competencies: ["Problem framing", "Prioritisation", "Stakeholder communication", "Decision-making under uncertainty"],
    status: "In development",
  },
  "project-management": {
    slug: "project-management",
    name: "Project Management",
    accent: "#0E6E7D",
    tagline: "Plan delivery, control risk and report honestly when the plan slips.",
    intro:
      "Hold delivery together when the plan, the dependencies and the sponsor all move at once — and produce the record that shows how you handled it.",
    situations: [
      "Initiate a project inherited without a charter",
      "Replan a delivery slipping against a fixed milestone",
      "Take a change request through governance",
      "Report status to a sponsor when the news is bad",
    ],
    artefacts: ["Project charter", "Delivery plan", "RAID log", "Governance report", "Recovery plan"],
    competencies: ["Planning and scheduling", "Risk management", "Stakeholder reporting", "Change control"],
    status: "In development",
  },
  "business-analysis": {
    slug: "business-analysis",
    name: "Business Analysis",
    accent: "#1F7A3D",
    tagline: "Find the real problem, structure the requirements, evaluate the options.",
    intro:
      "Get underneath what people ask for and define what the organisation actually needs — then structure and justify it well enough that someone else can build it.",
    situations: [
      "Elicit and reconcile conflicting requirements",
      "Model a current state and design a future state",
      "Appraise options and support a business case",
      "Trace requirements through to delivery",
    ],
    artefacts: ["Requirements catalogue", "Process maps", "Gap analysis", "Options appraisal", "Traceability matrix"],
    competencies: ["Requirements elicitation", "Process modelling", "Options analysis", "Structured documentation"],
    status: "In development",
  },
  "virtual-administrative-assistant": {
    slug: "virtual-administrative-assistant",
    name: "Virtual Administrative Assistant",
    accent: "#7A5C0C",
    tagline: "Hold the diary, protect the detail and keep decisions moving.",
    intro:
      "Keep an executive, a diary and a dozen competing priorities under control from anywhere — and leave a clean record of what was decided and why.",
    situations: [
      "Triage a backlog of correspondence and rebuild a diary",
      "Prepare and minute a meeting, then drive the actions",
      "Rebuild an itinerary after travel disruption",
      "Manage competing priorities for an executive",
    ],
    artefacts: ["Prioritised inbox plan", "Meeting minutes", "Action tracker", "Weekly operations report"],
    competencies: ["Prioritisation", "Written communication", "Attention to detail", "Stakeholder coordination"],
    status: "In development",
  },
};

export const pathwayList = Object.values(pathways);

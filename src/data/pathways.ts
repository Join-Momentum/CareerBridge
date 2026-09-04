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

export interface PathwaySituation {
  ref: string;
  title: string;
  body: string;
}

export interface PathwayArtefactItem {
  ref: string;
  name: string;
}

export interface PathwayAssessCriterion {
  n: string;
  title: string;
  body: string;
}

export interface PathwayJourneyStage {
  phase: "Join" | "Prove" | "Progress";
  ordinal: string;
  title: string;
  body: string;
  items: string[];
}

export interface PathwayFAQItem {
  q: string;
  a: string;
}

export interface PathwayAudience {
  title: string;
  body: string;
}

/**
 * Full per-pathway page content, sourced from the real reference page for
 * that discipline. Only populated once a discipline's own reference page
 * has been supplied — until then PathwayPage falls back to the shorter
 * generic fields above rather than inventing this level of detail.
 */
export interface PathwayRich {
  badge: string;
  heroHeadline: string;
  heroLede: string;
  who: PathwayAudience[];
  experienceLede: string[];
  processHeading: string;
  process: { n: string; title: string; body: string }[];
  situationsIntro: string;
  situationsRich: PathwaySituation[];
  jtbd: string[];
  artefactsRich: PathwayArtefactItem[];
  competenciesLede: string;
  assessmentLede: string;
  assessment: PathwayAssessCriterion[];
  assessmentClosing: string;
  journey: PathwayJourneyStage[];
  costSubLede: string;
  faqRich: PathwayFAQItem[];
  ctaLede: string;
}

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
  rich?: PathwayRich;
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
    competencies: [
      "Discovery",
      "Strategic thinking",
      "User focus",
      "Prioritisation",
      "Evidence-based decision-making",
      "Stakeholder management",
      "Commercial awareness",
      "Communication",
    ],
    status: "In development",
    rich: {
      badge: "Founding Cohort 2026 · Applications open",
      heroHeadline: "Prove Your Product Management Capability Through Workplace Simulations",
      heroLede:
        "Product roles are won on judgement, not vocabulary. Complete assessed workplace simulations where you define the problem, weigh the trade-offs, choose what gets built and defend the decision — then publish the evidence.",
      who: [
        { title: "Aspiring product managers", body: "You understand the frameworks but have never had to apply them to a live problem with real constraints." },
        { title: "Business analysts and delivery professionals", body: "You want to demonstrate outcome ownership and prioritisation judgement, not only requirements and delivery." },
        { title: "Founders, marketers and designers moving into product", body: "You have adjacent experience and need evidence that translates into product language." },
        { title: "Practising product managers", body: "You want assessed evidence of discovery, strategy and trade-off decisions beyond what your current role puts in writing." },
      ],
      experienceLede: [
        "Each simulation opens with a workplace scenario: an organisation, a product, a set of stakeholders with competing interests and a situation that needs a decision. The organisations, products and people are fictional or representative. The professional problem is not.",
        "You are given a brief and a defined set of Jobs to Be Done. You work through the evidence available to you, decide what matters, produce the work outputs a product manager would actually produce, and submit them for competency-based assessment.",
        "There is rarely one correct answer. The assessment looks at the quality of your reasoning, the fit between your evidence and your conclusion, and how clearly you communicate a decision somebody else has to act on.",
      ],
      processHeading: "How each simulation runs",
      process: [
        { n: "01", title: "Read the brief", body: "You receive a workplace scenario, the product management context, the stakeholders and a defined set of Jobs to Be Done." },
        { n: "02", title: "Do the work", body: "You analyse the information, make professional decisions and produce the work outputs the role actually produces. The AI Simulation Assistant is available throughout." },
        { n: "03", title: "Get assessed", body: "You submit your work for AI and rubric-based competency assessment, and receive competency-level scoring, developmental feedback, a Readiness Score and an AI Voice Debrief." },
        { n: "04", title: "Own the evidence", body: "Your artefact is editable, partner-agnostic and yours to publish, edit and share — without a time limit." },
      ],
      situationsIntro:
        "Representative examples of the professional situations covered in this pathway. Organisations, stakeholders and data within simulations may be fictional, synthetic or representative of real professional environments.",
      situationsRich: [
        { ref: "Situation PM-01", title: "The feature nobody uses", body: "A feature launched last quarter has poor adoption and a vocal minority of supporters. You have usage data, support tickets and two conflicting internal opinions. Decide whether to invest, iterate or retire — and make the case." },
        { ref: "Situation PM-02", title: "Two stakeholders, one quarter", body: "Sales has committed to an enterprise capability. Support wants work that would reduce ticket volume. Engineering capacity covers roughly one of them. Prioritise, justify the trade-off and communicate the decision to the party who did not get their way." },
        { ref: "Situation PM-03", title: "A vague executive ambition", body: "An executive sponsor wants the product to “do something with AI”. Convert an ambition into a defined user and business problem, an opportunity assessment, a testable hypothesis and a recommendation on whether to proceed." },
        { ref: "Situation PM-04", title: "Discovery in an unfamiliar segment", body: "The organisation is considering an adjacent customer segment it does not understand. Plan the discovery, structure stakeholder and user interviews, synthesise what you learn and define the outcome you would commit to." },
      ],
      jtbd: [
        "Define the user problem and the business problem separately, then connect them",
        "Plan and structure stakeholder and user interviews",
        "Assess an opportunity and size it against available evidence",
        "Set a product vision and a strategy that follows from it",
        "Define the outcome and the measures that will show it has been achieved",
        "Prioritise competing work and record the reasoning",
        "Make and communicate a roadmap decision under constraint",
        "Shape and order a product backlog",
        "Write hypotheses and design an experiment to test them",
        "Analyse product performance and decide what it implies",
        "Communicate a recommendation to stakeholders who disagree",
        "Make an explicit product trade-off and own it in writing",
      ],
      artefactsRich: [
        { ref: "PM-01", name: "Product vision" },
        { ref: "PM-02", name: "Problem statement" },
        { ref: "PM-03", name: "Opportunity assessment" },
        { ref: "PM-04", name: "Product strategy" },
        { ref: "PM-05", name: "Prioritisation rationale" },
        { ref: "PM-06", name: "Product roadmap" },
        { ref: "PM-07", name: "User story map" },
        { ref: "PM-08", name: "Product backlog" },
        { ref: "PM-09", name: "Experiment plan" },
        { ref: "PM-10", name: "Success metrics" },
        { ref: "PM-11", name: "Stakeholder recommendation" },
        { ref: "PM-12", name: "Product decision record" },
      ],
      competenciesLede:
        "Competencies are scored at competency level against defined rubrics, so your portfolio shows where you are strong and where you are still developing.",
      assessmentLede:
        "AI-powered competency assessment using expert-designed or expert-validated rubrics. Assessment is applied consistently against defined criteria, and completing a simulation does not guarantee a pass.",
      assessment: [
        { n: "Criterion 01", title: "Is the problem actually defined?", body: "Rubrics look for a problem statement grounded in the evidence in the brief, with the user problem and the business problem distinguished rather than merged." },
        { n: "Criterion 02", title: "Does the decision follow from the evidence?", body: "Prioritisation and trade-off outputs are assessed on whether the reasoning is traceable — not on whether you reached the option the scenario author preferred." },
        { n: "Criterion 03", title: "Could a stakeholder act on this?", body: "Communication outputs are assessed for clarity, structure and whether a reader who was not in your head could act on the recommendation." },
      ],
      assessmentClosing:
        "You receive competency-level scoring, detailed developmental feedback, a Readiness Score and an AI Voice Debrief for every completed simulation.",
      journey: [
        {
          phase: "Join",
          ordinal: "Stage 1 of 3",
          title: "Apply free for this pathway",
          body: "Submit a free application and select Product Management as your primary discipline. Programme access is free and carries no obligation to purchase credits.",
          items: ["Free application", "Founding Cohort 2026", "No obligation to purchase credits"],
        },
        {
          phase: "Prove",
          ordinal: "Stage 2 of 3",
          title: "Complete assessed product management simulations",
          body: "Work through realistic professional briefs, produce the work outputs the discipline is judged on and submit them for competency-based assessment.",
          items: ["Realistic workplace scenarios", "Defined Jobs to Be Done", "Competency scoring and developmental feedback"],
        },
        {
          phase: "Progress",
          ordinal: "Stage 3 of 3",
          title: "Publish the evidence",
          body: "Your assessed product management artefacts become part of a digital career portfolio you own, edit and share.",
          items: ["Portfolio artefacts", "Digital credentials", "CV and LinkedIn evidence support"],
        },
      ],
      costSubLede:
        "You can apply to the Product Management pathway, create your account and access the programme at no cost. Credits are required when you use AI-powered simulation, evaluation and portfolio-generation features.",
      faqRich: [
        { q: "Do I need existing product management experience to apply?", a: "No. The pathway is designed for people building evidence of product capability, including those moving from analysis, delivery, design, marketing or founder roles. You should be comfortable reading a business brief and writing in a professional register." },
        { q: "Will I work with real product data or a real company?", a: "No. Organisations, products, stakeholders and data within simulations may be fictional, synthetic or representative of real professional environments. The scenarios are built to behave like real product situations, but you are not performing work for an actual employer or client." },
        { q: "Is there a single correct answer to a product simulation?", a: "Usually not. Product simulations are assessed on the quality of your reasoning and the fit between your evidence and your conclusion. Two participants can reach different recommendations and both score well if each is properly argued." },
        { q: "Do I need to know a specific framework or tool?", a: "No specific commercial tool is required. Work outputs are produced as professional documents rather than inside a particular product-management platform, so the artefacts stay portable and partner-agnostic." },
        { q: "Can I combine this with another pathway?", a: "Yes, subject to available simulations. Business Analysis and Project Management are common companions — participants often use them to show they can define a problem, decide what to build and see it delivered." },
      ],
      ctaLede:
        "Applications for the Product Management pathway are open to the 2026 founding cohort. Programme access is free; AI usage requires credits.",
    },
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
    competencies: [
      "Planning",
      "Organisation",
      "Risk management",
      "Governance",
      "Stakeholder communication",
      "Decision-making",
      "Delivery control",
      "Leadership",
    ],
    status: "In development",
    rich: {
      badge: "Founding Cohort 2026 · Applications open",
      heroHeadline: "Build Evidence of Your Project Management Capability",
      heroLede:
        "Anybody can describe a methodology. Complete assessed workplace simulations where the schedule slips, the dependency moves and the steering group wants an answer — and produce the delivery artefacts that show how you handled it.",
      who: [
        { title: "Aspiring project managers", body: "You may hold a qualification such as a recognised project management certification but have not yet run a delivery of your own." },
        { title: "Project coordinators and administrators", body: "You support delivery and need evidence that you can own planning, risk and governance rather than assist with them." },
        { title: "Career changers with organising experience", body: "You have coordinated complex work in another sector and need it expressed in project language." },
        { title: "Practising project managers", body: "You want assessed evidence of recovery, change control and governance judgement that your current organisation does not document." },
      ],
      experienceLede: [
        "Each simulation places you inside a delivery that is already in motion, or one that has to be started properly under pressure. You receive the brief, the constraints, the stakeholders and the state of the plan.",
        "You produce the artefacts a project manager is judged on: the charter, the plan, the RAID log, the change request, the report that goes to the steering group. These are working documents, not templates filled in for their own sake.",
        "Several simulations deliberately introduce a change after you have planned. What is assessed is how you re-plan, what you escalate, what you decide yourself, and how honestly you report it.",
      ],
      processHeading: "How each simulation runs",
      process: [
        { n: "01", title: "Read the brief", body: "You receive a workplace scenario, the project management context, the stakeholders and a defined set of Jobs to Be Done." },
        { n: "02", title: "Do the work", body: "You analyse the information, make professional decisions and produce the work outputs the role actually produces. The AI Simulation Assistant is available throughout." },
        { n: "03", title: "Get assessed", body: "You submit your work for AI and rubric-based competency assessment, and receive competency-level scoring, developmental feedback, a Readiness Score and an AI Voice Debrief." },
        { n: "04", title: "Own the evidence", body: "Your artefact is editable, partner-agnostic and yours to publish, edit and share — without a time limit." },
      ],
      situationsIntro:
        "Representative examples of the professional situations covered in this pathway. Organisations, stakeholders and data within simulations may be fictional, synthetic or representative of real professional environments.",
      situationsRich: [
        { ref: "Situation PJ-01", title: "Initiating a project that has already started", body: "Work has been underway for six weeks with no charter, no agreed scope and three people who each believe they are the sponsor. Establish control: define scope, confirm governance and get a plan agreed." },
        { ref: "Situation PJ-02", title: "The dependency that moved", body: "A supplier confirms a four-week slip on a component that sits on the critical path. Assess the impact, produce options, raise change control and replan without pretending the date is still achievable." },
        { ref: "Situation PJ-03", title: "The report that has to say red", body: "The project is behind and the sponsor has told the board it is on track. Produce the governance report, state the position accurately, and frame the escalation and the ask." },
        { ref: "Situation PJ-04", title: "Closure when it did not go to plan", body: "Funding is withdrawn mid-delivery. Close the project properly: hand over what exists, secure the benefits that can still be realised, and produce lessons learned that are usable rather than diplomatic." },
      ],
      jtbd: [
        "Initiate a project and establish its governance",
        "Define and agree scope, and defend it when it is challenged",
        "Break the work down and build a credible schedule",
        "Identify, assess and manage risks and issues",
        "Map and manage dependencies across teams and suppliers",
        "Track budget and demonstrate cost awareness",
        "Report status to a governance forum accurately",
        "Raise, assess and process change control",
        "Plan and run stakeholder engagement",
        "Build a recovery plan when delivery is off track",
        "Escalate proportionately and at the right moment",
        "Close a project and capture usable lessons",
      ],
      artefactsRich: [
        { ref: "PJ-01", name: "Project charter" },
        { ref: "PJ-02", name: "Delivery plan" },
        { ref: "PJ-03", name: "Work breakdown structure" },
        { ref: "PJ-04", name: "RAID log" },
        { ref: "PJ-05", name: "Stakeholder map" },
        { ref: "PJ-06", name: "Communications plan" },
        { ref: "PJ-07", name: "Governance report" },
        { ref: "PJ-08", name: "Change request" },
        { ref: "PJ-09", name: "Recovery plan" },
        { ref: "PJ-10", name: "Lessons-learned report" },
        { ref: "PJ-11", name: "Closure report" },
      ],
      competenciesLede:
        "Competencies are scored at competency level against defined rubrics, so your portfolio shows where you are strong and where you are still developing.",
      assessmentLede:
        "AI-powered competency assessment using expert-designed or expert-validated rubrics. Assessment is applied consistently against defined criteria, and completing a simulation does not guarantee a pass.",
      assessment: [
        { n: "Criterion 01", title: "Is the plan actually deliverable?", body: "Schedules and breakdowns are assessed for internal consistency — whether dependencies, sequencing and effort hold together, not whether the document looks complete." },
        { n: "Criterion 02", title: "Is the risk response proportionate?", body: "Rubrics look at whether identified risks are scored and responded to sensibly, and whether escalation is triggered at a defensible threshold." },
        { n: "Criterion 03", title: "Does the report tell the truth clearly?", body: "Governance outputs are assessed on accuracy, the clarity of the ask, and whether a board member could make a decision from the document alone." },
      ],
      assessmentClosing:
        "You receive competency-level scoring, detailed developmental feedback, a Readiness Score and an AI Voice Debrief for every completed simulation.",
      journey: [
        {
          phase: "Join",
          ordinal: "Stage 1 of 3",
          title: "Apply free for this pathway",
          body: "Submit a free application and select Project Management as your primary discipline. Programme access is free and carries no obligation to purchase credits.",
          items: ["Free application", "Founding Cohort 2026", "No obligation to purchase credits"],
        },
        {
          phase: "Prove",
          ordinal: "Stage 2 of 3",
          title: "Complete assessed project management simulations",
          body: "Work through realistic professional briefs, produce the work outputs the discipline is judged on and submit them for competency-based assessment.",
          items: ["Realistic workplace scenarios", "Defined Jobs to Be Done", "Competency scoring and developmental feedback"],
        },
        {
          phase: "Progress",
          ordinal: "Stage 3 of 3",
          title: "Publish the evidence",
          body: "Your assessed project management artefacts become part of a digital career portfolio you own, edit and share.",
          items: ["Portfolio artefacts", "Digital credentials", "CV and LinkedIn evidence support"],
        },
      ],
      costSubLede:
        "You can apply to the Project Management pathway, create your account and access the programme at no cost. Credits are required when you use AI-powered simulation, evaluation and portfolio-generation features.",
      faqRich: [
        { q: "Do I need a project management certification to apply?", a: "No. A recognised certification is welcome but not required, and this programme is not a certification course. It is designed to produce evidence of applied capability, which is often what a qualification on its own does not demonstrate." },
        { q: "Does this replace a professional qualification?", a: "No. This is applied work experience delivered through simulation, assessed against competency rubrics. It complements a professional qualification by showing what you can do with it; it does not award one." },
        { q: "Which methodology do the simulations use?", a: "Scenarios cover a range of delivery contexts rather than teaching a single methodology. You are assessed on the appropriateness of your approach to the situation in front of you and on the quality of the artefacts you produce." },
        { q: "Will I need specific project software?", a: "No. Artefacts are produced as professional documents you can edit and keep, rather than inside a particular scheduling or portfolio tool." },
        { q: "Can I show these artefacts to an employer?", a: "Yes. Portfolio artefacts are editable and partner-agnostic, and portfolio hosting and editing of artefacts you have already generated are not time-limited." },
      ],
      ctaLede:
        "Applications for the Project Management pathway are open to the 2026 founding cohort. Programme access is free; AI usage requires credits.",
    },
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
    competencies: [
      "Analytical thinking",
      "Requirements engineering",
      "Process analysis",
      "Stakeholder engagement",
      "Communication",
      "Critical thinking",
      "Facilitation",
      "Solution evaluation",
    ],
    status: "In development",
    rich: {
      badge: "Founding Cohort 2026 · Applications open",
      heroHeadline: "Demonstrate Your Business Analysis Skills Through Applied Work",
      heroLede:
        "Business analysis is judged on the quality of your questions and the structure of your thinking. Complete assessed workplace simulations where stakeholders disagree, the process is undocumented and the requirement everyone asked for is the wrong one.",
      who: [
        { title: "Aspiring business analysts", body: "You have studied the discipline and need applied work that shows you can run elicitation and structure requirements." },
        { title: "Operations, service and process professionals", body: "You already improve how work gets done and need it expressed as analysis evidence." },
        { title: "Career changers and returners", body: "You need recent, assessed, dateable evidence of analytical work to sit alongside earlier experience." },
        { title: "Developing analysts", body: "You want assessed evidence across the full lifecycle rather than the narrow slice your current role happens to cover." },
      ],
      experienceLede: [
        "Each simulation gives you an organisation with a problem it has usually mis-stated. Your first job is normally to work out what is actually being asked, and what evidence would settle it.",
        "You plan and structure elicitation, model how work is done now, design how it could be done instead, and set out options with enough rigour that somebody could choose between them.",
        "Requirements outputs are assessed for structure, testability and traceability. A requirement that cannot be tested, or cannot be traced back to a business need, is treated as incomplete however well it is written.",
      ],
      processHeading: "How each simulation runs",
      process: [
        { n: "01", title: "Read the brief", body: "You receive a workplace scenario, the business analysis context, the stakeholders and a defined set of Jobs to Be Done." },
        { n: "02", title: "Do the work", body: "You analyse the information, make professional decisions and produce the work outputs the role actually produces. The AI Simulation Assistant is available throughout." },
        { n: "03", title: "Get assessed", body: "You submit your work for AI and rubric-based competency assessment, and receive competency-level scoring, developmental feedback, a Readiness Score and an AI Voice Debrief." },
        { n: "04", title: "Own the evidence", body: "Your artefact is editable, partner-agnostic and yours to publish, edit and share — without a time limit." },
      ],
      situationsIntro:
        "Representative examples of the professional situations covered in this pathway. Organisations, stakeholders and data within simulations may be fictional, synthetic or representative of real professional environments.",
      situationsRich: [
        { ref: "Situation BA-01", title: "A process nobody can explain", body: "Customer onboarding runs across three teams, each of which describes it differently and none of which has documented it. Elicit, reconcile and model the current state — then identify where the time and the failures actually are." },
        { ref: "Situation BA-02", title: "The requirement everybody asked for", body: "Stakeholders have arrived with a solution: a new system. Establish whether the underlying problem justifies it, elicit the real requirements, and prioritise them when two senior stakeholders want incompatible things." },
        { ref: "Situation BA-03", title: "Buy, build or change the process", body: "A capability gap has been confirmed. Produce a future-state design, a gap analysis and an options appraisal with enough evidence and enough honesty about assumptions to support a business case." },
        { ref: "Situation BA-04", title: "Requirements that failed acceptance", body: "Delivered functionality has been rejected by the business. Trace the failure back through acceptance criteria and the requirements catalogue, identify where definition broke down, and put the traceability right." },
      ],
      jtbd: [
        "Define the problem separately from the proposed solution",
        "Analyse stakeholders and plan how to engage each of them",
        "Plan and conduct requirements elicitation",
        "Model and validate the current state",
        "Design a future state that addresses the defined problem",
        "Model process and identify where value is lost",
        "Carry out gap analysis between current and future state",
        "Assess options against defined criteria",
        "Support a business case with structured evidence",
        "Prioritise requirements when stakeholders conflict",
        "Maintain traceability from business need to requirement",
        "Write testable acceptance criteria",
        "Identify and articulate the benefits being pursued",
      ],
      artefactsRich: [
        { ref: "BA-01", name: "Problem statement" },
        { ref: "BA-02", name: "Stakeholder map" },
        { ref: "BA-03", name: "Interview plan" },
        { ref: "BA-04", name: "Requirements catalogue" },
        { ref: "BA-05", name: "User stories" },
        { ref: "BA-06", name: "Acceptance criteria" },
        { ref: "BA-07", name: "Current-state process map" },
        { ref: "BA-08", name: "Future-state process map" },
        { ref: "BA-09", name: "Gap analysis" },
        { ref: "BA-10", name: "Options appraisal" },
        { ref: "BA-11", name: "Business case" },
        { ref: "BA-12", name: "Requirements traceability matrix" },
      ],
      competenciesLede:
        "Competencies are scored at competency level against defined rubrics, so your portfolio shows where you are strong and where you are still developing.",
      assessmentLede:
        "AI-powered competency assessment using expert-designed or expert-validated rubrics. Assessment is applied consistently against defined criteria, and completing a simulation does not guarantee a pass.",
      assessment: [
        { n: "Criterion 01", title: "Is the problem separated from the solution?", body: "Rubrics check whether you have defined the business need independently of the solution that stakeholders arrived with." },
        { n: "Criterion 02", title: "Are the requirements testable and traceable?", body: "Requirements outputs are assessed for structure, unambiguity, testability and a maintained link back to the business need." },
        { n: "Criterion 03", title: "Is the options appraisal genuinely comparable?", body: "Options work is assessed on consistent criteria, stated assumptions and whether a decision maker could choose between the options as presented." },
      ],
      assessmentClosing:
        "You receive competency-level scoring, detailed developmental feedback, a Readiness Score and an AI Voice Debrief for every completed simulation.",
      journey: [
        {
          phase: "Join",
          ordinal: "Stage 1 of 3",
          title: "Apply free for this pathway",
          body: "Submit a free application and select Business Analysis as your primary discipline. Programme access is free and carries no obligation to purchase credits.",
          items: ["Free application", "Founding Cohort 2026", "No obligation to purchase credits"],
        },
        {
          phase: "Prove",
          ordinal: "Stage 2 of 3",
          title: "Complete assessed business analysis simulations",
          body: "Work through realistic professional briefs, produce the work outputs the discipline is judged on and submit them for competency-based assessment.",
          items: ["Realistic workplace scenarios", "Defined Jobs to Be Done", "Competency scoring and developmental feedback"],
        },
        {
          phase: "Progress",
          ordinal: "Stage 3 of 3",
          title: "Publish the evidence",
          body: "Your assessed business analysis artefacts become part of a digital career portfolio you own, edit and share.",
          items: ["Portfolio artefacts", "Digital credentials", "CV and LinkedIn evidence support"],
        },
      ],
      costSubLede:
        "You can apply to the Business Analysis pathway, create your account and access the programme at no cost. Credits are required when you use AI-powered simulation, evaluation and portfolio-generation features.",
      faqRich: [
        { q: "Is this aligned to a particular BA body of knowledge?", a: "Simulations use widely recognised business analysis practice — elicitation, modelling, traceability, options appraisal — but the programme is not an accredited course in any specific body of knowledge and does not award a professional qualification." },
        { q: "Do I need to model in a specific notation?", a: "Process outputs should be clear and readable. Recognised notation is welcomed where you are comfortable with it, and guidance is available within the simulation, but assessment focuses on whether the model accurately represents the process and exposes the problem." },
        { q: "How is a written requirement assessed?", a: "Against rubric criteria covering structure, unambiguity, testability and traceability to a stated business need, alongside the overall coherence of the catalogue." },
        { q: "Is Business Analysis a good first pathway?", a: "It is a common starting point because the competencies — problem definition, stakeholder engagement, structured analysis — carry into product and delivery work. Many participants then add Product Management or Project Management." },
        { q: "Will my process maps be usable in my portfolio?", a: "Yes. Artefacts are editable and partner-agnostic, and remain available in your portfolio without a time limit." },
      ],
      ctaLede:
        "Applications for the Business Analysis pathway are open to the 2026 founding cohort. Programme access is free; AI usage requires credits.",
    },
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

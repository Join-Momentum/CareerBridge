import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AccessLine, AccessModelFull } from "@/components/AccessModel";
import { DisclosureShort, DisclosureFull } from "@/components/NonEmploymentDisclosure";
import { PortfolioRecord, SimulationEnvironmentRecord } from "@/components/records";
import JoinProveProgress from "@/components/work-experience/JoinProveProgress";
import PathwayCards, { PathwayCardsHeader } from "@/components/work-experience/PathwayCards";
import WorkExperienceFAQ from "@/components/work-experience/WorkExperienceFAQ";
import { Reveal, StaggerGrid, cardVariant, ArrowIcon } from "@/components/simulation/Motion";

// ── Static data ───────────────────────────────────────────────

const GAP_LADDER = [
  { step: "Stage 01", title: "Learning about the work", body: "Courses, qualifications and certificates. Necessary, and widely held." },
  { step: "Stage 02", title: "Claiming capability", body: "A CV bullet, a profile summary, a line in a cover letter. Unverifiable." },
  { step: "Stage 03", title: "Demonstrating capability", body: "Doing the work under realistic conditions and being assessed on it." },
  { step: "Stage 04", title: "Producing verifiable evidence", body: "Assessed work outputs, published as portfolio evidence you can share.", live: true },
];

const WHAT_IT_MEANS_BODY = [
  "You receive workplace scenarios, professional briefs and defined Jobs to Be Done. You analyse information, make decisions, solve problems, produce professional work outputs and submit your work for competency-based assessment.",
  "This is not passive theoretical training. You develop practical experience and produce evidence demonstrating what you can do, how you approached the work and how you performed.",
  "Organisations, roles, projects, stakeholders and workplace situations within simulations may be fictional, synthetic or representative of real professional environments. The scenarios are built to behave like professional practice — they are not work performed for an actual employer or client.",
];

const STEPS = [
  { n: "01", title: "Read the brief", body: "A workplace scenario, a professional brief and a defined set of Jobs to Be Done. The work, not just a course about the work." },
  { n: "02", title: "Do the work", body: "Analyse the information, make the decisions, solve the problem and produce professional work outputs, with an AI Simulation Assistant available throughout." },
  { n: "03", title: "Get assessed", body: "Submit your work for AI and rubric-based competency assessment. Receive competency-level scoring, developmental feedback, a Readiness Score and an AI Voice Debrief." },
  { n: "04", title: "Own the evidence", body: "Keep an editable, partner-agnostic artefact, publish it to your digital career portfolio and receive a credential for the completed simulation." },
];

const IS_LIST = [
  "Applied work experience through simulation",
  "Practical and evidence-focused",
  "Based on realistic professional scenarios",
  "Assessed using defined competency rubrics",
  "Designed to produce portfolio evidence",
];

const IS_NOT_LIST = [
  "Employment",
  "A paid role",
  "An internship",
  "An apprenticeship",
  "A placement",
  "A guaranteed job",
  "Passive theoretical training",
  "A guaranteed pass",
];

const BENEFIT_GROUPS = [
  {
    label: "In every activated simulation",
    items: [
      "A full workplace scenario brief",
      "Defined Jobs to Be Done",
      "A structured task set",
      "Simulation guidance and assistance",
      "An AI Simulation Assistant",
      "Work submission",
    ],
  },
  {
    label: "Assessment and feedback",
    items: [
      "AI and rubric-based competency assessment",
      "Competency-level scoring",
      "Detailed developmental feedback",
      "A Readiness Score",
      "An AI Voice Debrief",
    ],
  },
  {
    label: "Evidence and support",
    items: [
      "An editable, partner-agnostic portfolio artefact",
      "Portfolio evidence publication",
      "Credential issuance",
      "CV evidence-generation support",
      "LinkedIn evidence-generation support",
      "Career Bridge office hours",
      "Programme support",
      "Career Bridge community on Circle",
    ],
  },
];

const WHO_FOR = [
  { title: "Aspiring professionals", body: "Entering a discipline and needing evidence to enter it with." },
  { title: "Graduates", body: "Qualified, with little applied work to point to." },
  { title: "Career changers", body: "Capable in one field, unproven in the next." },
  { title: "Career returners", body: "Experienced, but with a gap that needs recent evidence." },
  { title: "Developing professionals", body: "In role, and building evidence beyond what the job documents." },
  { title: "Professionals proving a new discipline", body: "Established in one area, demonstrating capability in another." },
  { title: "Anyone qualified but unproven", body: "Holding certificates that describe knowledge rather than applied capability." },
];

const COMBOS = [
  { nodes: ["Business Analysis", "Product Management"], note: "Add outcome ownership and prioritisation to analytical depth." },
  { nodes: ["Project Management", "Business Analysis"], note: "Move from delivering the work to defining the problem." },
  { nodes: ["Virtual Administrative Assistant", "Project Coordination"], note: "Build from operational support into delivery ownership." },
  { nodes: ["Cyber Threat Intelligence", "Cyber Governance and Risk"], note: "Extend analytical intelligence work into governance and risk." },
];

// ── Page ─────────────────────────────────────────────────────

export default function SimulationBasedWorkExperiencePage() {
  return (
    <main id="main">
      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center bg-ink overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.18] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full bg-accent-teal/[0.06] blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent-teal/[0.04] blur-[120px] pointer-events-none" />

        <div className="relative page-container pt-44 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-accent-teal" />
                <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.25em]">
                  Simulation-Based Work Experience
                </span>
              </div>
              <h1 className="text-[clamp(3rem,6.5vw,5.5rem)] font-bold text-white leading-[0.98] tracking-[-0.03em] mb-8">
                Build Experience.<br />Prove Your Skills.<br />Progress Your Career.
              </h1>
              <p className="text-lg md:text-xl text-white/50 leading-[1.6] max-w-xl mb-10">
                Complete realistic workplace simulations, receive AI-powered competency assessment and build a
                verifiable digital career portfolio that demonstrates what you can do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#pathways"
                  className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-8 py-4 tracking-[0.12em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200"
                >
                  Explore Work Experience Pathways
                  <ArrowIcon />
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-8 py-4 tracking-[0.12em] border border-white/25 text-white hover:border-white/50 transition-colors duration-200"
                >
                  How the Programme Works
                </a>
              </div>
              <div className="flex flex-col gap-5 max-w-md">
                <DisclosureShort dark />
                <AccessLine dark />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <PortfolioRecord />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE EVIDENCE GAP
      ════════════════════════════════════════ */}
      <section id="evidence-gap" className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">The evidence gap</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[0.95] tracking-[-0.025em] max-w-2xl mb-6">
              Talent is not always missing. Sometimes, the evidence is.
            </h2>
            <p className="text-base text-white/45 leading-[1.75] max-w-2xl">
              Qualifications, certificates and CV claims describe capability. They do not always prove it. Most
              people are asked to demonstrate what they can do at the exact moment they have nothing to show for it.
            </p>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {GAP_LADDER.map(({ step, title, body, live }) => (
              <motion.div key={step} variants={cardVariant}>
                <div className={`h-full p-8 flex flex-col gap-4 ${live ? "bg-white/[0.06]" : "bg-ink"}`}>
                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">{step}</span>
                  <h3 className={`text-base font-bold leading-snug ${live ? "text-accent-teal" : "text-white"}`}>
                    {title}
                  </h3>
                  <p className="text-sm text-white/45 leading-[1.7]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>

          <Reveal delay={0.15}>
            <p className="text-base text-white/40 leading-[1.7] max-w-xl mt-10">
              Most career support stops at stage two. This programme starts at stage three.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT IT MEANS
      ════════════════════════════════════════ */}
      <section id="what" className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">What it means</span>
            </div>
            <h2 className="text-4xl md:text-[3rem] font-bold text-ink leading-[1.02] tracking-[-0.025em] max-w-md mb-5">
              The work, not just a course about the work.
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-md mb-6">
              Career Bridge Foundation provides applied work experience through realistic professional simulations.
            </p>
            <div className="flex flex-col gap-5">
              {WHAT_IT_MEANS_BODY.map((body, i) => (
                <p key={i} className="text-base text-slate leading-[1.75]">{body}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SimulationEnvironmentRecord />
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          JOIN · PROVE · PROGRESS
      ════════════════════════════════════════ */}
      <section id="journey" className="bg-warm-grey py-28 px-6 border-y border-subtle">
        <div className="max-w-6xl mx-auto">
          <JoinProveProgress />
        </div>
      </section>

      {/* ════════════════════════════════════════
          INSIDE A SIMULATION — 4 steps
      ════════════════════════════════════════ */}
      <section id="how" className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Inside a simulation</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] max-w-2xl mb-6">
              How each assessed workplace simulation works
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">
              Programme access is free. Credits are required from the point you begin the AI-powered simulation,
              evaluation and evidence-generation experience.
            </p>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle">
            {STEPS.map(({ n, title, body }) => (
              <motion.div key={n} variants={cardVariant}>
                <div className="group bg-white p-10 h-full flex flex-col gap-8 hover:bg-warm-grey transition-colors duration-300">
                  <span className="text-[3.5rem] font-bold text-ink/[0.06] font-mono leading-none select-none">{n}</span>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-ink uppercase tracking-[0.1em] mb-3">{title}</h3>
                    <p className="text-sm text-slate leading-[1.75]">{body}</p>
                  </div>
                  <div className="w-6 h-px bg-accent-teal group-hover:w-10 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          AVAILABLE PATHWAYS
      ════════════════════════════════════════ */}
      <section id="pathways" className="relative bg-ink py-28 px-6 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-accent-teal/[0.06] blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <PathwayCardsHeader />
          <PathwayCards />
        </div>
      </section>

      {/* ════════════════════════════════════════
          BUILD YOUR OWN EXPERIENCE PATHWAY
      ════════════════════════════════════════ */}
      <section id="combine" className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Multidisciplinary evidence</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] max-w-2xl mb-6">
              Build your own experience pathway
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">
              You are not permanently restricted to one discipline. Subject to available simulations, you can
              complete assessed workplace simulations across multiple pathways and progressively build
              multidisciplinary evidence.
            </p>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMBOS.map(({ nodes, note }) => (
              <motion.div key={nodes.join("→")} variants={cardVariant}>
                <div className="p-6 bg-warm-grey border border-subtle h-full">
                  <div className="flex items-center flex-wrap gap-3 mb-3 text-slate">
                    {nodes.map((node, i) => (
                      <span key={node} className="flex items-center gap-3">
                        <span className="text-sm font-medium text-ink">{node}</span>
                        {i < nodes.length - 1 && <ArrowIcon />}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate leading-[1.7]">{note}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>

          <p className="text-sm text-slate leading-[1.75] mt-8 max-w-xl">
            Access to any pathway depends on the simulations available at the time.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT PARTICIPANTS RECEIVE
      ════════════════════════════════════════ */}
      <section id="receive" className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">What participants receive</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[0.95] tracking-[-0.025em] max-w-2xl mb-5">
              Everything an activated simulation includes
            </h2>
            <p className="text-base text-white/45 leading-[1.75] max-w-2xl">
              Assessment is AI-powered, using expert-designed or expert-validated competency rubrics.
            </p>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {BENEFIT_GROUPS.map(({ label, items }) => (
              <motion.div key={label} variants={cardVariant}>
                <div className="bg-ink p-8 h-full">
                  <h3 className="text-xs font-bold text-white uppercase tracking-[0.1em] mb-5">{label}</h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-white/50 leading-[1.6] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-teal"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHO IT'S FOR
      ════════════════════════════════════════ */}
      <section id="who" className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Who it is for</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] max-w-2xl">
              Designed for people who need evidence, not another certificate
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle border border-subtle">
            {WHO_FOR.map(({ title, body }) => (
              <motion.div key={title} variants={cardVariant}>
                <div className="bg-white p-7 h-full">
                  <h3 className="text-sm font-bold text-ink mb-2 leading-snug">{title}</h3>
                  <p className="text-xs text-slate leading-[1.6]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACCESS AND CREDITS
      ════════════════════════════════════════ */}
      <section id="cost" className="bg-warm-grey py-28 px-6 border-y border-subtle">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Access and credits</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] max-w-2xl mb-6">
              What it costs, stated plainly
            </h2>
            <p className="font-serif text-2xl md:text-3xl font-semibold text-ink mb-3">
              Programme access is free. AI usage requires credits.
            </p>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">
              You can apply, create your account and access the programme at no cost. Credits are required when you
              use AI-powered simulation, evaluation and portfolio-generation features.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <AccessModelFull />
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT IT IS / IS NOT
      ════════════════════════════════════════ */}
      <section id="isnot" className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Clarity</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em]">
              What this programme is, and what it is not.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="border-2 border-accent-teal p-8 md:p-10 h-full">
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent-teal mb-6">It is</p>
                <ul className="space-y-4">
                  {IS_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-ink leading-relaxed border-t border-subtle pt-4 first:border-0 first:pt-0">
                      <span className="mt-1 text-accent-teal font-bold shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-subtle bg-warm-grey p-8 md:p-10 h-full">
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate mb-6">It is not</p>
                <ul className="space-y-4">
                  {IS_NOT_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-slate leading-relaxed border-t border-subtle pt-4 first:border-0 first:pt-0">
                      <span className="mt-1 text-slate/60 font-bold shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section id="faq" className="bg-warm-grey py-28 px-6 border-y border-subtle">
        <div className="max-w-4xl mx-auto">
          <WorkExperienceFAQ />
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROGRAMME DISCLOSURE
      ════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <Reveal className="max-w-2xl mx-auto">
          <DisclosureFull />
        </Reveal>
      </section>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section id="apply-cta" className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-accent-teal/[0.07] blur-[130px] pointer-events-none" />

        <Reveal className="relative max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
          <p className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.25em]">Join · Prove · Progress</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95] tracking-[-0.025em]">
            Stop telling employers what you can do. Start proving it.
          </h2>
          <p className="text-base text-white/45 leading-[1.75] max-w-xl">
            Explore the pathways, choose a discipline and apply. Programme access is free; AI usage requires credits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#pathways"
              className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200"
            >
              Explore Work Experience Pathways
              <ArrowIcon />
            </a>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] border border-white/25 text-white hover:border-white/50 transition-colors duration-200"
            >
              Apply Free
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

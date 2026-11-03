import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AccessLine, AccessModelFull } from "@/components/AccessModel";
import { DisclosureShort, DisclosureFull } from "@/components/NonEmploymentDisclosure";
import { SimulationEnvironmentRecord } from "@/components/records";
import JoinProveProgress from "@/components/work-experience/JoinProveProgress";
import CreditPacks from "@/components/work-experience/CreditPacks";
import PathwayCards, { PathwayCardsHeader } from "@/components/work-experience/PathwayCards";
import WorkExperienceFAQ from "@/components/work-experience/WorkExperienceFAQ";
import { Reveal, StaggerGrid, cardVariant, ArrowIcon } from "@/components/simulation/Motion";

// ── Static data ───────────────────────────────────────────────

const GAP_LADDER = [
  { step: "Stage 01", title: "Learning about the work", body: "Courses, qualifications and certificates. Valuable, but they describe the work rather than demonstrate it." },
  { step: "Stage 02", title: "Claiming capability", body: "A CV bullet point or an interview answer. Assertion, offered without anything an employer can inspect." },
  { step: "Stage 03", title: "Demonstrating capability", body: "Doing the work in a realistic professional situation, making the decisions and producing the outputs." },
  { step: "Stage 04", title: "Producing verifiable evidence", body: "Assessed work outputs, competency scoring and developmental feedback, published as a portfolio others can examine.", live: true },
];

const WHAT_IT_MEANS_BODY = [
  "Each simulation places you inside a workplace scenario with a professional brief and a set of defined Jobs to Be Done. You analyse the information available, weigh incomplete or competing evidence, make professional decisions, and produce the work outputs a practitioner would actually be expected to deliver.",
  "Your submitted work is then assessed against defined competency rubrics, scored at competency level and returned with developmental feedback. What you produced becomes an editable artefact in a digital career portfolio you own and can share.",
  "This is not passive theoretical training. Participants develop practical experience and produce evidence demonstrating what they can do, how they approached the work and how they performed.",
  "Organisations, roles, projects, stakeholders and workplace situations within simulations may be fictional, synthetic or representative of real professional environments. The scenarios are built to behave like professional practice — they are not work performed for an actual employer or client.",
];

const STEPS = [
  { n: "01", title: "Read the brief", body: "You receive the workplace scenario, the context, the stakeholders and the defined Jobs to Be Done — the same way work arrives in a professional role." },
  { n: "02", title: "Do the work", body: "Work through the structured task set, using simulation guidance and the AI Simulation Assistant when you need it. Analyse, decide, and produce the outputs." },
  { n: "03", title: "Get assessed", body: "Submit your work for AI-powered competency assessment using expert-designed or expert-validated rubrics aligned to recognised professional standards. Receive competency-level scoring, developmental feedback, a Readiness Score and an AI Voice Debrief." },
  { n: "04", title: "Own the evidence", body: "Your work becomes an editable, partner-agnostic portfolio artefact. Publish it, issue your credential, and use the built-in CV and LinkedIn evidence support." },
];

const RECEIVES = [
  { name: "Workplace scenario brief", note: "The full situation, context and stakeholders you are working within." },
  { name: "Defined Jobs to Be Done", note: "Explicit professional responsibilities, not open-ended exercises." },
  { name: "Structured task set", note: "A sequenced set of tasks with simulation guidance and assistance." },
  { name: "AI Simulation Assistant", note: "Support while you work, without doing the thinking for you." },
  { name: "Competency assessment", note: "AI-powered assessment using expert-designed or expert-validated rubrics." },
  { name: "Competency-level scoring", note: "Results broken down by individual competency, not a single grade." },
  { name: "Developmental feedback", note: "Detailed written feedback on how you approached and performed the work." },
  { name: "Readiness Score", note: "An indicator of demonstrated readiness against the simulation's competencies." },
  { name: "AI Voice Debrief", note: "A spoken debrief of your performance, as a practitioner would receive." },
  { name: "Editable portfolio artefact", note: "Partner-agnostic and yours to refine — the work output stays with you." },
  { name: "Evidence publication", note: "Publish completed work into your digital career portfolio." },
  { name: "Digital credential", note: "A credential issued on completion of an assessed simulation." },
  { name: "CV evidence support", note: "Help turning assessed work into specific, defensible CV content." },
  { name: "LinkedIn evidence support", note: "Help presenting your evidence on professional networks." },
  { name: "Office hours, support and community", note: "Career Bridge office hours, programme support and the Career Bridge community on Circle." },
];

const WHO_FOR = [
  "Aspiring professionals",
  "Graduates",
  "Career changers",
  "Career returners",
  "Developing professionals",
  "Professionals seeking evidence of capability in a new discipline",
  "People who hold qualifications but lack credible evidence of applied experience",
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

const COMBOS = [
  { nodes: ["Project Management", "Business Analysis", "Product Management"], note: "Delivery to definition to direction." },
  { nodes: ["Virtual Administrative Assistant", "Project Coordination", "Project Management"], note: "Operational support into delivery ownership." },
  { nodes: ["Business Analysis", "Product Management"], note: "From requirements to outcomes and prioritisation." },
  { nodes: ["Cyber Threat Intelligence", "Cyber Governance and Risk"], note: "From analysis to organisational risk decisions." },
];

const SPECIMEN_ITEMS = [
  "Workplace scenario brief and context pack",
  "Four defined Jobs to Be Done",
  "Structured task set and guidance",
  "Work submitted for competency assessment",
  "Editable portfolio artefact",
];

const SPECIMEN_SCORES = [
  { label: "Evidence-based decisions", pct: 72 },
  { label: "Prioritisation", pct: 58 },
  { label: "Stakeholder communication", pct: 80 },
];

/**
 * Hero visual: a workplace simulation brief rendered as an object rather
 * than a dashboard mockup. Single-use (hero only), so kept local rather
 * than promoted to a shared component — reuses the same colour tokens as
 * records/RecordCard.tsx for visual consistency with the record cards
 * used elsewhere on this page and on the pathway pages.
 */
const SimulationBriefSpecimen = () => (
  <div
    role="img"
    aria-label="Illustration of a workplace simulation brief, showing a reference code, a scenario title, the structure of an assessed simulation, and an example of competency scoring applied to communication, prioritisation and decision-making."
    className="bg-white text-[#00335A] border border-[#CFDCE4] rounded-[6px] overflow-hidden shadow-[0_18px_40px_-28px_rgba(0,26,48,0.65)]"
  >
    <div className="flex items-center justify-between gap-3 bg-[#EAF0F4] border-b border-[#CFDCE4] px-4 py-3 font-mono text-xs tracking-[0.08em] uppercase text-[#3E5D77]">
      <span>Simulation brief</span>
      <span>REF · SIM-PM-014</span>
    </div>
    <div className="p-6">
      <p className="font-serif text-[clamp(1.125rem,0.5vw+1rem,1.375rem)] leading-snug text-[#00335A] mb-5">
        Retention is falling and two teams disagree about why.
      </p>
      <ul className="space-y-2.5 mb-6">
        {SPECIMEN_ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-[#3E5D77] leading-snug">
            <span className="text-[#00518F] shrink-0">▸</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#3E5D77] mb-3">Competency structure</p>
      <div className="space-y-3">
        {SPECIMEN_SCORES.map(({ label, pct }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-xs text-[#3E5D77] w-[9.5rem] shrink-0">{label}</span>
            <span className="flex-1 h-1.5 bg-[#EAF0F4] rounded-full overflow-hidden">
              <span className="block h-full bg-[#00518F] rounded-full" style={{ width: `${pct}%` }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

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
                Build experience.<br />Prove your skills.<br />Progress your career.
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
              <SimulationBriefSpecimen />
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
              Talent is not always missing.<br />Sometimes, the evidence is.
            </h2>
            <p className="text-base text-white/45 leading-[1.75] max-w-2xl">
              Qualifications, certificates and CV claims describe potential. They rarely show how someone framed a
              problem, what they decided under pressure, or the quality of the work they produced. Most people are
              asked to prove capability using documents that were never designed to prove anything.
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
              You are not watching someone else solve a problem. You are handed the situation and asked what you
              would do.
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
      <section id="journey" className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
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
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Inside one simulation</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] max-w-2xl mb-6">
              Four steps, every time.
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">
              One credit activates one complete workplace simulation, and the structure does not change between
              disciplines, so the evidence stays comparable.
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
              Participants are not permanently restricted to one discipline. Subject to available simulations, you
              can complete assessed workplace simulations across multiple professional pathways and progressively
              build multidisciplinary evidence — the way real careers actually move.
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
            Access to any pathway depends on the simulations available at the time. Some disciplines shown above
            are illustrative of how pathways can be combined and may not all be released.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT PARTICIPANTS RECEIVE
      ════════════════════════════════════════ */}
      <section id="receive" className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">What participants receive</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] max-w-2xl mb-5">
              Everything included in an activated simulation
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">
              One credit activates one complete workplace simulation. Each includes all of the following.
            </p>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle border border-subtle">
            {RECEIVES.map(({ name, note }) => (
              <motion.div key={name} variants={cardVariant}>
                <div className="bg-white p-7 h-full">
                  <h3 className="text-sm font-bold text-ink mb-2 leading-snug">{name}</h3>
                  <p className="text-xs text-slate leading-[1.6]">{note}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHO IT'S FOR
      ════════════════════════════════════════ */}
      <section id="who" className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Who this is for</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-[1.05] tracking-[-0.02em] mb-5">
              Designed for people who need to show, not tell.
            </h2>
            <p className="text-base text-white/40 leading-[1.7] max-w-md">
              If you have the capability but nothing an employer can inspect, the programme is built for you.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {WHO_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3 border-t border-white/10 text-sm text-white/60 leading-relaxed">
                  <span className="text-accent-teal shrink-0 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
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

          <CreditPacks className="mt-16 pt-14 border-t border-subtle" />
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
          <p className="text-sm text-white/40 leading-[1.7] max-w-xl -mt-2">
            Founding Cohort 2026 credit packs start at Builder (3 credits), with reduced Africa Access pricing in
            supported African markets.{" "}
            <a href="#cost" className="text-accent-teal hover:text-accent-teal/80 transition-colors duration-200">
              See credit packs and pricing for your region
            </a>
            .
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

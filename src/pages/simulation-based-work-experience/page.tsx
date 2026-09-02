import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AccessLine, AccessPanels } from "@/components/AccessModel";
import { DisclosureShort, DisclosureFull } from "@/components/NonEmploymentDisclosure";
import { Reveal, StaggerGrid, cardVariant, ArrowIcon, MediaPlaceholder, ease } from "@/components/simulation/Motion";

// ── Static data ───────────────────────────────────────────────

const GAP_LADDER = [
  { step: "Stage 01", title: "Learning about the work", body: "Courses, qualifications and certificates. Valuable, but they describe the work rather than demonstrate it." },
  { step: "Stage 02", title: "Claiming capability", body: "A CV bullet point or an interview answer. Assertion, offered without anything an employer can inspect." },
  { step: "Stage 03", title: "Demonstrating capability", body: "Doing the work in a realistic professional situation, making the decisions and producing the outputs." },
  { step: "Stage 04", title: "Producing verifiable evidence", body: "Assessed work outputs, competency scoring and developmental feedback, published as a portfolio others can examine.", live: true },
];

const WHAT_IT_MEANS = [
  { lead: null, body: "Each simulation places you inside a workplace scenario with a professional brief and a set of defined Jobs to Be Done. You analyse the information available, weigh incomplete or competing evidence, make professional decisions, and produce the work outputs a practitioner would actually be expected to deliver." },
  { lead: null, body: "Your submitted work is then assessed against defined competency rubrics, scored at competency level and returned with developmental feedback. What you produced becomes an editable artefact in a digital career portfolio you own and can share." },
  { lead: "This is not passive theoretical training.", body: "Participants develop practical experience and produce evidence demonstrating what they can do, how they approached the work and how they performed." },
];

const JOURNEY = [
  { n: "01", phase: "Join", mode: "Free", title: "Apply", body: "Explore the pathways, submit a free application and choose a primary discipline." },
  { n: "02", phase: "Join", mode: "Free", title: "Qualify", body: "Your application is reviewed and validated. There is no charge to be considered." },
  { n: "03", phase: "Join", mode: "Free", title: "Onboard", body: "Create your account, complete programme paperwork and access the platform at no cost." },
  { n: "04", phase: "Prove", mode: "Uses credits", title: "Simulate", body: "Begin AI-powered workplace simulations. This is the point at which credits become necessary." },
  { n: "05", phase: "Prove", mode: "Uses credits", title: "Evaluate", body: "Submitted work is processed and evaluated by AI-powered competency assessment using expert-designed or expert-validated rubrics." },
  { n: "06", phase: "Progress", mode: "Uses credits", title: "Build evidence", body: "AI-powered portfolio generation turns your assessed work into editable artefacts and published evidence." },
  { n: "07", phase: "Progress", mode: "Free", title: "Progress", body: "Share your digital career portfolio with employers, recruiters and professional networks." },
];

const STEPS = [
  { n: "01", title: "Read the brief", body: "A realistic scenario from the role. Context and constraints — no hand-holding." },
  { n: "02", title: "Do the work", body: "Produce the artefacts the job actually produces. No hints. No lectures." },
  { n: "03", title: "Get assessed", body: "Submit your work for AI-powered competency assessment using expert-designed or expert-validated rubrics." },
  { n: "04", title: "Own the evidence", body: "Artefacts, scores, commentary, credential — all yours to keep and share." },
];

const WHY = [
  {
    title: "Real scenarios.",
    body: "Not exercises. The actual kind of work hiring managers ask to see — produced under realistic conditions.",
  },
  {
    title: "Rubric-based assessment.",
    body: "AI-powered competency assessment using rubrics designed or validated by named senior practitioners.",
  },
  {
    title: "Yours to keep.",
    body: "Work artefacts, rubric scores, assessor commentary, and a digital credential. All yours, permanently.",
  },
];

const CB_ADDS = [
  { title: "Named practitioners on every rubric", body: "Their names are attached to the standard your work is measured against." },
  { title: "Multidisciplinary evidence", body: "Build assessed work across more than one professional pathway over time." },
  { title: "Consultant office hours", body: "Sessions per cohort where offered. Optional — drop in when useful." },
  { title: "Verified portfolio bundle", body: "Artefacts, scores, commentary, validation, credential — assembled for you." },
  { title: "Cohort community", body: "Candidates and coach-partners alongside you through every sprint." },
  { title: "Social enterprise mission", body: "Career Bridge operates as a Community Interest Company for public benefit." },
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
  { name: "Office hours, support and community", note: "Programme support and a participant community, where offered." },
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

const PATHWAYS = [
  { slug: "product-management", name: "Product Management", body: "Define the problem, weigh the trade-offs and decide what gets built.", status: "In development" },
  { slug: "project-management", name: "Project Management", body: "Plan delivery, control risk and report honestly when the plan slips.", status: "In development" },
  { slug: "business-analysis", name: "Business Analysis", body: "Find the real problem, structure the requirements, evaluate the options.", status: "In development" },
  { slug: "virtual-administrative-assistant", name: "Virtual Administrative Assistant", body: "Hold the diary, protect the detail and keep decisions moving.", status: "In development" },
];

const COMBOS = [
  { nodes: ["Project Management", "Business Analysis", "Product Management"], note: "Delivery to definition to direction." },
  { nodes: ["Virtual Administrative Assistant", "Project Coordination", "Project Management"], note: "Operational support into delivery ownership." },
  { nodes: ["Business Analysis", "Product Management"], note: "From requirements to outcomes and prioritisation." },
  { nodes: ["Cyber Threat Intelligence", "Cyber Governance and Risk"], note: "From analysis to organisational risk decisions." },
];

const FAQS = [
  {
    q: "Is the programme free?",
    a: "Programme access is free. AI usage requires credits. There is no application fee and no programme-access fee. Credits are required when you begin using AI-powered simulation, evaluation and portfolio-generation features.",
  },
  {
    q: "Is this a job or an internship?",
    a: "No. This is work experience delivered through simulation. It is not employment, a paid role, an internship, an apprenticeship or a job placement.",
  },
  {
    q: "Is this aligned to an external professional framework?",
    a: "No formal alignment to an external standards body or framework is currently claimed for any pathway. Assessment uses rubrics that are expert-designed or expert-validated for the discipline.",
  },
  {
    q: "Does participation guarantee employment?",
    a: "No. Participation does not guarantee employment, interviews, recruitment outcomes or earnings. The programme enables participants to practise professional work, demonstrate applied capability and build credible evidence of what they can do.",
  },
  {
    q: "What happens after I am accepted?",
    a: "You complete onboarding and programme paperwork and get access to the platform, all at no cost. You then decide whether you want to begin AI-powered workplace simulations, which is the point at which credits are required. If you choose not to continue, nothing is owed.",
  },
  {
    q: "Do I have to buy credits to be accepted?",
    a: "No. Applying or being accepted does not create an obligation to purchase credits. Acceptance and programme access are free; credits become relevant only when you choose to begin AI-powered simulation and evaluation.",
  },
  {
    q: "What if I never buy credits?",
    a: "You keep your free programme access. You can explore the platform and the available pathways; you simply will not have run any AI-powered simulations, so there will be no assessed work or portfolio evidence to show.",
  },
  {
    q: "Can I complete simulations in more than one discipline?",
    a: "Yes. Participants are not permanently restricted to one discipline. Subject to the simulations available at the time, you may complete assessed workplace simulations across multiple pathways and progressively build multidisciplinary evidence.",
  },
  {
    q: "What support is available?",
    a: "Participants receive simulation guidance and the AI Simulation Assistant while working, plus access to office hours, programme support and the participant community, where offered.",
  },
];

// ── Page ─────────────────────────────────────────────────────

export default function SimulationBasedWorkExperiencePage() {
  return (
    <>
      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center bg-ink overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.18] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full bg-accent-teal/[0.06] blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent-teal/[0.04] blur-[120px] pointer-events-none" />

        <div className="relative page-container pt-44 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
                className="flex items-center gap-4 mb-12"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease }}
                  className="w-10 h-px bg-accent-teal origin-left"
                />
                <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.25em]">
                  Career Bridge Foundation
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1
                  variants={{ hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } }}
                  className="text-[clamp(3.5rem,7.5vw,6.5rem)] font-bold text-white leading-[0.9] tracking-[-0.03em]"
                >
                  Work Experience.
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-10">
                <motion.h1
                  variants={{ hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } }}
                  className="text-[clamp(3.5rem,7.5vw,6.5rem)] font-bold text-accent-teal leading-[0.9] tracking-[-0.03em]"
                >
                  Through Simulation.
                </motion.h1>
              </div>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                className="text-xl md:text-2xl font-light text-white/50 leading-[1.5] max-w-xl mb-5"
              >
                Build experience. Prove your skills. Progress your career.
              </motion.p>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                className="text-sm text-white/25 leading-[1.9] max-w-md mb-10"
              >
                Complete realistic workplace simulations, receive AI-powered competency assessment and build a
                verifiable digital career portfolio that demonstrates what you can do.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                className="flex flex-col gap-5 max-w-md"
              >
                <DisclosureShort dark />
                <AccessLine dark />
              </motion.div>
            </motion.div>

            <Reveal delay={0.7} className="hidden lg:block">
              <MediaPlaceholder label="Campaign imagery" type="image" aspect="tall" light={false} src="/image2.png" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE EVIDENCE GAP
      ════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">The evidence gap</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] max-w-2xl">
              Talent is not always missing. Sometimes, the evidence is.
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle border border-subtle">
            {GAP_LADDER.map(({ step, title, body, live }) => (
              <motion.div key={step} variants={cardVariant}>
                <div className={`h-full p-8 flex flex-col gap-4 ${live ? "bg-warm-grey" : "bg-white"}`}>
                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate">{step}</span>
                  <h3 className={`text-base font-bold leading-snug ${live ? "text-accent-teal" : "text-ink"}`}>
                    {title}
                  </h3>
                  <p className="text-sm text-slate leading-[1.7]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT IT MEANS
      ════════════════════════════════════════ */}
      <section className="bg-warm-grey py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">What it means</span>
            </div>
            <h2 className="text-4xl md:text-[3rem] font-bold text-ink leading-[1.02] tracking-[-0.025em] max-w-md">
              The work, not just a course about the work.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5">
            {WHAT_IT_MEANS.map(({ lead, body }, i) => (
              <p key={i} className="text-base text-slate leading-[1.75]">
                {lead && <strong className="text-ink">{lead} </strong>}
                {body}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          JOIN · PROVE · PROGRESS — the seven-stage journey
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">The programme journey</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[0.95] tracking-[-0.025em] mb-5">
              Join. Prove. Progress.
            </h2>
            <p className="text-base text-white/40 leading-[1.7] max-w-2xl">
              Seven stages, grouped into the three that matter. Apply, qualify and onboard at no cost; credits are
              required from the point you begin using AI-powered functionality.
            </p>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {JOURNEY.map(({ n, phase, mode, title, body }) => (
              <motion.div key={n} variants={cardVariant}>
                <div className="p-6 bg-white/[0.03] border border-white/[0.08] h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-white/30">{n}</span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/40 border border-white/[0.12] rounded-sm px-2 py-1">
                      {phase}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/40 leading-[1.65] mb-5">{body}</p>
                  <p className={`mt-auto text-[10px] font-medium uppercase tracking-[0.12em] ${mode === "Free" ? "text-accent-teal" : "text-white/50"}`}>
                    {mode}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW IT WORKS — 4 steps
      ════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">The process</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em]">
              Four steps.<br />One portfolio.
            </h2>
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
          WHY IT WORKS
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-accent-teal/[0.06] blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Why it matters</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[0.95] tracking-[-0.025em]">
              Why work experience<br />through simulation works.
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WHY.map(({ title, body }) => (
              <motion.div key={title} variants={cardVariant}>
                <div className="relative h-full p-8 md:p-10 bg-white/[0.03] border border-white/[0.08] group hover:bg-white/[0.07] hover:border-accent-teal/25 transition-all duration-500 cursor-default">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="block w-2 h-2 rounded-full bg-accent-teal mb-8" />
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">{title}</h3>
                  <p className="text-sm text-white/45 leading-[1.85]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT IT IS / IS NOT
      ════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Clarity</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em]">
              What the programme is, and is not.
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
          WHAT CAREER BRIDGE ADDS
      ════════════════════════════════════════ */}
      <section className="bg-warm-grey py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">The difference</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] max-w-2xl">
              What Career Bridge adds.
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-px bg-subtle">
            {CB_ADDS.map(({ title, body }) => (
              <motion.div key={title} variants={cardVariant}>
                <div className="bg-white p-10 h-[170px] flex flex-col justify-between group hover:bg-warm-grey transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xs font-bold text-ink uppercase tracking-[0.1em]">{title}</h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shrink-0 mt-0.5 ml-4" />
                  </div>
                  <p className="text-sm text-slate leading-[1.75]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT PARTICIPANTS RECEIVE
      ════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">What participants receive</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] max-w-2xl mb-6">
              Everything included in an activated simulation.
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
      <section className="relative bg-ink py-28 px-6 overflow-hidden">
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
                  <span className="text-accent-teal shrink-0 mt-0.5">✓</span>
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
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Access and credits</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] max-w-2xl mb-6">
              What is free, and what uses credits.
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">
              <strong className="text-ink">Programme access is free. AI usage requires credits.</strong> You can
              apply, create your account and access the programme at no cost. Credits are required when you use
              AI-powered simulation, evaluation and portfolio-generation features.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <AccessPanels />
          </Reveal>

          <Reveal delay={0.2}>
            <Link to="/how-it-works" className="link-animated inline-flex items-center gap-2 mt-12 text-sm font-medium">
              See the full access model
              <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PATHWAYS
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-accent-teal/[0.06] blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Pathways</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[0.95] tracking-[-0.025em]">
              Available now.
            </h2>
          </Reveal>

          {/* Featured pathway card */}
          <Reveal delay={0.1} className="mb-10">
            <div className="relative border border-accent-teal/25 bg-white/[0.03] shadow-[0_0_80px_rgba(13,148,136,0.08)] hover:shadow-[0_0_130px_rgba(13,148,136,0.16)] transition-shadow duration-700 group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/80 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
                <MediaPlaceholder
                  label="Pathway imagery"
                  type="image"
                  aspect="square"
                  light={false}
                  className="lg:aspect-auto lg:h-full min-h-[200px]"
                  src="CT1.jpg"
                />

                <div className="p-8 md:p-12 flex flex-col justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-2 h-2 rounded-full bg-accent-teal" />
                      <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">
                        Open now · Founding cohort
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em] mb-4">
                      Cyber Threat Intelligence
                    </h3>
                    <p className="text-sm text-white/40 leading-[1.8] max-w-lg">
                      Turn uncertain information into assessed intelligence someone can act on. Realistic scenario,
                      expert-designed rubrics, digital credential.
                    </p>
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mt-6">Powered by Evidentize</p>
                  </div>
                  <Link
                    to="/portfolio-simulations/cyber-threat-intelligence"
                    className="self-start inline-flex items-center gap-2.5 text-[11px] font-medium uppercase px-8 py-4 tracking-[0.12em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200 whitespace-nowrap"
                  >
                    Explore the pathway
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* In development */}
          <Reveal delay={0.2}>
            <p className="text-[10px] font-medium uppercase text-white/25 tracking-[0.25em] mb-5">In development</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
              {PATHWAYS.map(({ slug, name, body, status }) => (
                <Link
                  key={slug}
                  to={`/simulation-based-work-experience/${slug}`}
                  className="group p-6 bg-ink border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300"
                >
                  <p className="text-[10px] text-white/25 uppercase tracking-[0.15em] mb-3">{status}</p>
                  <p className="text-sm font-medium text-white/60 group-hover:text-white/85 transition-colors duration-300 mb-2">
                    {name}
                  </p>
                  <p className="text-xs text-white/30 leading-[1.6]">{body}</p>
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Combine pathways */}
          <Reveal delay={0.3} className="mt-14">
            <p className="text-[10px] font-medium uppercase text-white/25 tracking-[0.25em] mb-5">
              Build your own experience pathway
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMBOS.map(({ nodes, note }) => (
                <div key={nodes.join("→")} className="p-6 bg-white/[0.03] border border-white/[0.08]">
                  <div className="flex items-center flex-wrap gap-3 mb-3">
                    {nodes.map((node, i) => (
                      <span key={node} className="flex items-center gap-3">
                        <span className="text-sm font-medium text-white/70">{node}</span>
                        {i < nodes.length - 1 && <ArrowIcon />}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-white/30 leading-[1.7]">{note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/25 leading-[1.7] mt-5 max-w-xl">
              Available pathways depend on the simulations currently offered. Participants are not permanently
              restricted to one discipline.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Questions</span>
            </div>
            <h2 className="text-4xl md:text-[3rem] font-bold text-ink leading-[0.95] tracking-[-0.025em]">
              Questions, answered plainly.
            </h2>
          </Reveal>

          <StaggerGrid className="flex flex-col divide-y divide-subtle border-t border-b border-subtle">
            {FAQS.map(({ q, a }) => (
              <motion.div key={q} variants={cardVariant}>
                <div className="py-8">
                  <h3 className="text-lg font-bold text-ink mb-3 leading-snug">{q}</h3>
                  <p className="text-sm text-slate leading-[1.75] max-w-2xl">{a}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-accent-teal/[0.07] blur-[130px] pointer-events-none" />

        <Reveal className="relative max-w-2xl mx-auto mb-14">
          <DisclosureFull />
        </Reveal>

        <Reveal className="relative max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95] tracking-[-0.025em]">
            Stop telling employers<br />
            <span className="text-accent-teal">what you can do.</span>
          </h2>
          <AccessLine dark className="text-center mx-auto" />
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/portfolio-simulations/cyber-threat-intelligence"
              className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200"
            >
              Explore Work Experience Pathways
              <ArrowIcon />
            </Link>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] border border-white/25 text-white hover:border-white/50 transition-colors duration-200"
            >
              Apply Free
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

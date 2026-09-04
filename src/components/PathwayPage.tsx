import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { PathwayContent } from "@/data/pathways";
import { AccessLine, AccessPanels, AccessModelFull } from "@/components/AccessModel";
import { DisclosureShort, DisclosureFull } from "@/components/NonEmploymentDisclosure";
import { Reveal, StaggerGrid, cardVariant, ArrowIcon, ease } from "@/components/simulation/Motion";
import { PathwayRecord, type PathwaySlug } from "@/components/records";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtiCheckoutButton, CtiCheckoutOverlays, CtiPricingCard } from "@/components/work-experience/CtiCheckout";

/**
 * Shared template for every Work Experience discipline pathway page.
 * One template, one content object per discipline (src/data/pathways.ts) —
 * see the dynamic route in src/pages/simulation-based-work-experience/PathwaySlugPage.tsx.
 *
 * A pathway with a full `rich` content object (currently only Product
 * Management, sourced from its own reference page) renders through
 * RichPathwayPage below. Every other pathway falls back to
 * SimplePathwayPage, the shorter generic layout this template originally
 * shipped with — rather than inventing Product-Management-level detail
 * for disciplines that haven't had their own reference page supplied yet.
 */

const PATHWAY_NAV: { slug: PathwaySlug; name: string; cue: string }[] = [
  { slug: "product-management", name: "Product Management", cue: "#A34411" },
  { slug: "project-management", name: "Project Management", cue: "#0E6E7D" },
  { slug: "business-analysis", name: "Business Analysis", cue: "#1F7A3D" },
  { slug: "cyber-threat-intelligence", name: "Cyber Threat Intelligence", cue: "#5B3A9E" },
  { slug: "virtual-administrative-assistant", name: "Virtual Administrative Assistant", cue: "#7A5C0C" },
];

const pathwayHref = (slug: PathwaySlug) => `/simulation-based-work-experience/${slug}`;

/**
 * Same three benefit groups as the programme hub page
 * (src/pages/simulation-based-work-experience/page.tsx) — kept as a local
 * copy here rather than a shared import since the wording is fixed and
 * this is the only other place it's used.
 */
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

export default function PathwayPage({ data }: { data: PathwayContent }) {
  return data.rich ? <RichPathwayPage data={data} /> : <SimplePathwayPage data={data} />;
}

// ════════════════════════════════════════════════════════════
// RICH — full per-discipline page, built from a real reference page
// ════════════════════════════════════════════════════════════

function RichPathwayPage({ data }: { data: PathwayContent }) {
  const { slug, name, accent, competencies } = data;
  const rich = data.rich!;
  const isCti = slug === "cyber-threat-intelligence";

  return (
    <>
      {isCti && <CtiCheckoutOverlays />}

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center bg-ink overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.18] pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none"
          style={{ backgroundColor: `${accent}14` }}
        />

        <div className="relative page-container pt-44 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px" style={{ backgroundColor: accent }} />
                <span className="text-[11px] font-medium uppercase tracking-[0.25em]" style={{ color: accent }}>
                  Work experience pathway · {name}
                </span>
              </div>
              <span
                className="inline-flex w-fit items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/70 border border-white/20 rounded-full px-3 py-1.5 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                {rich.badge}
              </span>
              <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold text-white leading-[1.02] tracking-[-0.02em] mb-6">
                {rich.heroHeadline}
              </h1>
              <p className="text-lg md:text-xl text-white/50 leading-[1.6] max-w-xl mb-10">{rich.heroLede}</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                {isCti ? (
                  <CtiCheckoutButton className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-8 py-4 tracking-[0.12em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200" />
                ) : (
                  <Link
                    to="/apply"
                    className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-8 py-4 tracking-[0.12em] text-white transition-colors duration-200"
                    style={{ backgroundColor: accent }}
                  >
                    Apply Free
                  </Link>
                )}
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-8 py-4 tracking-[0.12em] border border-white/25 text-white hover:border-white/50 transition-colors duration-200"
                >
                  What you will do
                </a>
              </div>
              <div className="flex flex-col gap-5 max-w-md">
                <DisclosureShort dark />
                <AccessLine dark />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <PathwayRecord slug={slug as PathwaySlug} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHO THIS PATHWAY IS FOR
      ════════════════════════════════════════ */}
      <section id="who" className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                Who this pathway is for
              </span>
            </div>
            <h2 className="text-4xl md:text-[3rem] font-bold text-ink leading-[0.98] tracking-[-0.025em] max-w-2xl">
              Built for people proving {name.toLowerCase()} capability
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-subtle border border-subtle">
            {rich.who.map(({ title, body }) => (
              <motion.div key={title} variants={cardVariant}>
                <div className="bg-white p-8 h-full">
                  <h3 className="text-sm font-bold text-ink mb-2 leading-snug">{title}</h3>
                  <p className="text-sm text-slate leading-[1.65]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT YOU WILL EXPERIENCE
      ════════════════════════════════════════ */}
      <section id="experience" className="bg-warm-grey py-28 px-6 border-y border-subtle">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                What you will experience
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-ink leading-[1.05] tracking-[-0.02em] mb-6">
              Realistic {name.toLowerCase()} work, under realistic conditions
            </h2>
            <div className="flex flex-col gap-5">
              {rich.experienceLede.map((p, i) => (
                <p key={i} className="text-base text-slate leading-[1.75]">{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] mb-5" style={{ color: accent }}>
              {rich.processHeading}
            </p>
            <div className="flex flex-col divide-y divide-subtle border-t border-b border-subtle">
              {rich.process.map(({ n, title, body }) => (
                <div key={n} className="py-6 flex gap-5">
                  <span className="text-xs font-mono text-slate shrink-0 pt-0.5">Step {n}</span>
                  <div>
                    <h3 className="text-sm font-bold text-ink mb-1.5">{title}</h3>
                    <p className="text-sm text-slate leading-[1.65]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          REPRESENTATIVE SITUATIONS
      ════════════════════════════════════════ */}
      <section id="situations" className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                Representative workplace situations
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-ink leading-[1.05] tracking-[-0.02em] max-w-2xl mb-5">
              The kinds of situations you will be put in
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">{rich.situationsIntro}</p>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-px bg-subtle border border-subtle">
            {rich.situationsRich.map(({ ref, title, body }) => (
              <motion.div key={ref} variants={cardVariant}>
                <div className="bg-white p-8 h-full">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate mb-3 block">{ref}</span>
                  <h3 className="text-base font-bold text-ink mb-2 leading-snug">{title}</h3>
                  <p className="text-sm text-slate leading-[1.7]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          JOBS TO BE DONE + ARTEFACTS
      ════════════════════════════════════════ */}
      <section id="work" className="bg-warm-grey py-28 px-6 border-y border-subtle">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] mb-5" style={{ color: accent }}>
              Representative Jobs to Be Done
            </p>
            <h2 className="text-2xl font-bold text-ink leading-snug mb-6">What you will actually be asked to do</h2>
            <ul className="space-y-3">
              {rich.jtbd.map((item, i) => (
                <li key={item} className="flex items-start gap-4 text-sm text-ink font-sans leading-relaxed border-t border-subtle pt-3 first:border-0 first:pt-0">
                  <span className="text-xs font-mono text-slate shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] mb-5" style={{ color: accent }}>
              Work outputs and portfolio artefacts
            </p>
            <h2 className="text-2xl font-bold text-ink leading-snug mb-3">What you will produce</h2>
            <p className="text-sm text-slate leading-[1.7] mb-6 max-w-md">
              Each artefact is editable, partner-agnostic and yours to keep. Generating an artefact uses AI-powered
              portfolio functionality and therefore requires credits; once generated, hosting and editing are not
              time-limited.
            </p>
            <div className="grid grid-cols-2 gap-px bg-subtle border border-subtle">
              {rich.artefactsRich.map(({ ref, name: artefactName }) => (
                <div key={ref} className="bg-white p-4">
                  <span className="text-[10px] font-mono text-slate block mb-1">{ref}</span>
                  <span className="text-sm font-medium text-ink leading-snug">{artefactName}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          COMPETENCIES
      ════════════════════════════════════════ */}
      <section id="competencies" className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                Competencies
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-ink leading-[1.05] tracking-[-0.02em] max-w-2xl mb-5">
              What your evidence can demonstrate
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">{rich.competenciesLede}</p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-2">
            {competencies.map((item) => (
              <span key={item} className="text-sm font-sans font-medium text-ink bg-warm-grey border border-subtle rounded-sm px-4 py-2">
                {item}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ASSESSMENT
      ════════════════════════════════════════ */}
      <section id="assessment" className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                Assessment
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-white leading-[1.05] tracking-[-0.02em] max-w-2xl mb-5">
              How your {name.toLowerCase()} work is assessed
            </h2>
            <p className="text-base text-white/45 leading-[1.75] max-w-2xl">{rich.assessmentLede}</p>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {rich.assessment.map(({ n, title, body }) => (
              <motion.div key={n} variants={cardVariant}>
                <div className="h-full p-8 bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em]" style={{ color: accent }}>
                    {n}
                  </span>
                  <h3 className="text-base font-bold text-white mt-3 mb-3 leading-snug">{title}</h3>
                  <p className="text-sm text-white/45 leading-[1.7]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>

          <Reveal delay={0.15}>
            <p className="text-base text-white/40 leading-[1.7] max-w-xl">{rich.assessmentClosing}</p>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT YOU RECEIVE
      ════════════════════════════════════════ */}
      <section className="bg-ink py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                What you receive
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-white leading-[1.05] tracking-[-0.02em]">
              Included in every activated simulation
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {BENEFIT_GROUPS.map(({ label, items }) => (
              <motion.div key={label} variants={cardVariant}>
                <div className="bg-ink p-8 h-full">
                  <h3 className="text-xs font-bold text-white uppercase tracking-[0.1em] mb-5">{label}</h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-white/50 leading-[1.6] pl-4 relative">
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
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
          JOURNEY
      ════════════════════════════════════════ */}
      <section id="journey" className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                The journey
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-ink leading-[1.05] tracking-[-0.02em]">
              Join. Prove. Progress.
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rich.journey.map((stage) => (
              <motion.div key={stage.phase} variants={cardVariant}>
                <div className="h-full flex flex-col bg-warm-grey border border-subtle border-t-[3px] p-8" style={{ borderTopColor: accent }}>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate mb-4">
                    <span className="font-semibold" style={{ color: accent }}>{stage.phase}</span> · {stage.ordinal}
                  </p>
                  <h3 className="text-lg font-bold text-ink mb-3 leading-snug">{stage.title}</h3>
                  <p className="text-sm text-slate leading-[1.7] mb-5">{stage.body}</p>
                  <ul className="mt-auto space-y-2.5 pt-5 border-t border-subtle">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-slate leading-relaxed">
                        <span className="w-1 h-1 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: accent }} />
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
          ACCESS AND CREDITS
      ════════════════════════════════════════ */}
      <section id="cost" className="bg-warm-grey py-28 px-6 border-y border-subtle">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                Access and credits
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-ink leading-[1.05] tracking-[-0.02em] max-w-2xl mb-6">
              What it costs, stated plainly
            </h2>
            <p className="font-serif text-2xl md:text-3xl font-semibold text-ink mb-3">
              Programme access is free. AI usage requires credits.
            </p>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">{rich.costSubLede}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <AccessModelFull />
          </Reveal>
        </div>
      </section>

      {isCti && (
        <section id="pricing" className="relative bg-ink py-28 px-6 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-teal/[0.06] blur-[120px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <Reveal className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-accent-teal" />
                <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Founding cohort pricing</span>
              </div>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-white leading-[1.05] tracking-[-0.02em] max-w-2xl">
                A verified work portfolio, priced for the first 20.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <Reveal delay={0.05} className="lg:col-span-1 flex flex-col gap-5">
                <p className="text-sm text-white/50 leading-[1.85]">
                  The founding cohort is the first to run on this format. Twenty places at $299. After the founding
                  cohort, the price for the same portfolio is $599.
                </p>
                <p className="text-sm text-white/50 leading-[1.85]">
                  This sits alongside the free programme access described above — applying, being considered and
                  onboarding cost nothing. This specific verified portfolio product is the paid, fixed-scope option.
                </p>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-2">
                <CtiPricingCard />
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section id="faq" className="bg-white py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                Questions
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink leading-tight tracking-[-0.02em] mb-4">
              {name} questions
            </h2>
            <p className="text-sm text-slate leading-relaxed">
              Programme-wide questions are answered on the{" "}
              <Link to="/simulation-based-work-experience#faq" className="link-animated">
                programme overview page
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion type="single" collapsible>
              {rich.faqRich.map((item, i) => (
                <AccordionItem key={item.q} value={`pw-faq-${i}`} className="border-subtle">
                  <AccordionTrigger className="font-serif text-base font-semibold text-ink hover:no-underline py-6 text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-slate leading-relaxed font-sans">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DISCLOSURE + CTA
      ════════════════════════════════════════ */}
      <section className="bg-warm-grey py-20 px-6 border-y border-subtle">
        <Reveal className="max-w-2xl mx-auto">
          <DisclosureFull />
        </Reveal>
      </section>

      <section id="apply-cta" className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />

        <Reveal className="relative max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em]" style={{ color: accent }}>
            Join · Prove · Progress
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em]">
            Stop telling employers what you can do. Start proving it.
          </h2>
          <p className="text-base text-white/45 leading-[1.75] max-w-xl">{rich.ctaLede}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            {isCti ? (
              <CtiCheckoutButton className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200" />
            ) : (
              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] text-white transition-colors duration-200"
                style={{ backgroundColor: accent }}
              >
                Apply Free
              </Link>
            )}
            <Link
              to="/simulation-based-work-experience#pathways"
              className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] border border-white/25 text-white hover:border-white/50 transition-colors duration-200"
            >
              View all pathways
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════════
          PATHNAV
      ════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate mb-2">All pathways</p>
            <h2 className="text-xl font-bold text-ink leading-snug">Explore the other work experience pathways</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-subtle border border-subtle">
            {PATHWAY_NAV.map((p) => {
              const current = p.slug === slug;
              return (
                <Link
                  key={p.slug}
                  to={pathwayHref(p.slug)}
                  aria-current={current ? "page" : undefined}
                  className={`bg-white p-5 border-t-[3px] transition-colors duration-200 ${current ? "" : "hover:bg-warm-grey"}`}
                  style={{ borderTopColor: p.cue }}
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate block mb-1.5">
                    Pathway
                  </span>
                  <span className={`text-sm leading-snug ${current ? "font-bold text-ink" : "font-medium text-slate"}`}>
                    {p.name}
                  </span>
                </Link>
              );
            })}
          </div>
          <Link to="/simulation-based-work-experience" className="link-animated inline-flex items-center gap-2 mt-8 text-sm font-medium">
            Back to the programme overview
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}

// ════════════════════════════════════════════════════════════
// SIMPLE — generic fallback for pathways without a supplied reference page
// ════════════════════════════════════════════════════════════

const STEPS = [
  { n: "01", title: "Read the brief", body: "A realistic scenario from the role. Context and constraints — no hand-holding." },
  { n: "02", title: "Do the work", body: "Produce the artefacts the job actually produces. No hints. No lectures." },
  { n: "03", title: "Get assessed", body: "Submit your work for AI-powered competency assessment using expert-designed or expert-validated rubrics." },
  { n: "04", title: "Own the evidence", body: "Artefacts, scores, commentary, credential — all yours to keep and share." },
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
    q: "Does participation guarantee employment?",
    a: "No. Participation does not guarantee employment, interviews, recruitment outcomes or earnings. The pathway enables you to practise professional work, demonstrate applied capability and build credible evidence of what you can do.",
  },
];

function SimplePathwayPage({ data }: { data: PathwayContent }) {
  const { name, accent, tagline, intro, situations, artefacts, competencies, status } = data;

  return (
    <>
      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative bg-ink overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.18] pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[150px] pointer-events-none"
          style={{ backgroundColor: `${accent}14` }}
        />

        <div className="relative page-container pt-40 pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
              className="mb-8"
            >
              <Link
                to="/simulation-based-work-experience"
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35 hover:text-white/60 transition-colors duration-200"
              >
                ← Work Experience
              </Link>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                {status}
              </span>
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-white leading-[0.98] tracking-[-0.02em] max-w-3xl mb-6"
            >
              {name}
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              className="text-xl md:text-2xl font-light text-white/50 leading-[1.5] max-w-2xl mb-5"
            >
              {tagline}
            </motion.p>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              className="text-sm text-white/30 leading-[1.9] max-w-xl mb-10"
            >
              {intro}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              className="flex flex-col gap-5 max-w-md"
            >
              <DisclosureShort dark />
              <AccessLine dark />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CONTENT IN DEVELOPMENT NOTICE
      ════════════════════════════════════════ */}
      {status === "In development" && (
        <section className="bg-warm-grey border-t border-b border-subtle">
          <div className="page-container py-6">
            <p className="text-sm text-slate font-sans leading-relaxed max-w-2xl">
              <strong className="text-ink">This pathway is in development.</strong> The situations, artefacts and
              competencies below describe the kind of work the pathway will cover and may change before it opens.
            </p>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════
          SITUATIONS
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                What you'll be asked to do
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-ink leading-[1.05] tracking-[-0.02em] max-w-2xl">
              Workplace situations, not exercises.
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-px bg-subtle border border-subtle">
            {situations.map((situation, i) => (
              <motion.div key={situation} variants={cardVariant}>
                <div className="bg-white p-8 h-full flex items-start gap-5">
                  <span className="text-xs font-mono text-slate shrink-0 pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-base text-ink leading-relaxed font-sans">{situation}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ARTEFACTS + COMPETENCIES
      ════════════════════════════════════════ */}
      <section className="bg-warm-grey py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] mb-5" style={{ color: accent }}>
              What you'll produce
            </p>
            <ul className="space-y-3">
              {artefacts.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-ink font-sans leading-relaxed border-t border-subtle pt-3 first:border-0 first:pt-0">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2.5" style={{ backgroundColor: accent }} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] mb-5" style={{ color: accent }}>
              Competencies assessed
            </p>
            <div className="flex flex-wrap gap-2">
              {competencies.map((item) => (
                <span
                  key={item}
                  className="text-sm font-sans font-medium text-ink bg-white border border-subtle rounded-sm px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ backgroundColor: accent }} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]" style={{ color: accent }}>
                The process
              </span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-ink leading-[1.05] tracking-[-0.02em]">
              Four steps. One portfolio.
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle">
            {STEPS.map(({ n, title, body }) => (
              <motion.div key={n} variants={cardVariant}>
                <div className="bg-white p-8 h-full flex flex-col gap-6">
                  <span className="text-3xl font-bold text-ink/[0.08] font-mono leading-none select-none">{n}</span>
                  <div>
                    <h3 className="text-xs font-bold text-ink uppercase tracking-[0.1em] mb-2">{title}</h3>
                    <p className="text-sm text-slate leading-[1.7]">{body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ACCESS AND CREDITS
      ════════════════════════════════════════ */}
      <section className="bg-warm-grey py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] mb-5" style={{ color: accent }}>
              Access and credits
            </p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-ink leading-[1.05] tracking-[-0.02em] mb-6 max-w-2xl">
              What is free, and what uses credits.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <AccessPanels />
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink leading-tight tracking-[-0.02em]">
              Questions, answered plainly.
            </h2>
          </Reveal>
          <StaggerGrid className="flex flex-col divide-y divide-subtle border-t border-b border-subtle">
            {FAQS.map(({ q, a }) => (
              <motion.div key={q} variants={cardVariant}>
                <div className="py-7">
                  <h3 className="text-base font-bold text-ink mb-2 leading-snug">{q}</h3>
                  <p className="text-sm text-slate leading-[1.75]">{a}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />

        <Reveal className="relative max-w-2xl mx-auto mb-12">
          <DisclosureFull />
        </Reveal>

        <Reveal className="relative max-w-2xl mx-auto flex flex-col items-center gap-7 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em]">
            Ready to prove what you can do?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] text-white transition-colors duration-200"
              style={{ backgroundColor: accent }}
            >
              Apply Free
            </Link>
            <Link
              to="/simulation-based-work-experience"
              className="inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] border border-white/25 text-white hover:border-white/50 transition-colors duration-200"
            >
              All Pathways
              <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

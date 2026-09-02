import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { PathwayContent } from "@/data/pathways";
import { AccessLine, AccessPanels } from "@/components/AccessModel";
import { DisclosureShort, DisclosureFull } from "@/components/NonEmploymentDisclosure";
import { Reveal, StaggerGrid, cardVariant, ArrowIcon, ease } from "@/components/simulation/Motion";

/**
 * Shared template for every Work Experience discipline pathway page.
 * One template, one content object per discipline (src/data/pathways.ts) —
 * see the dynamic route in src/pages/simulation-based-work-experience/PathwaySlugPage.tsx.
 */

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

export default function PathwayPage({ data }: { data: PathwayContent }) {
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

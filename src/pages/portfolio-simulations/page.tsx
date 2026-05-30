import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";

// ── Animation primitives ──────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerGrid({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

// ── Media placeholder ─────────────────────────────────────────
// One animation only: a teal scan line that sweeps top → bottom on repeat,
// plus staggered-breathing corner brackets that pulse in sequence.

function MediaPlaceholder({
  label,
  type = "image",
  aspect = "video",
  light = false,
  className = "",
  src,
}: {
  label: string;
  type?: "image" | "video";
  aspect?: "video" | "square" | "tall";
  light?: boolean;
  className?: string;
  /** Path to a file in /public, e.g. "/hero.jpg" or "/walkthrough.mp4" */
  src?: string;
}) {
  const bg = light ? "bg-ink/[0.04] border-ink/[0.07]" : "bg-white/[0.04] border-white/[0.08]";
  const cb = light ? "border-accent-teal/40" : "border-accent-teal/55";
  const tc = light ? "text-ink/22" : "text-white/18";
  const is = light ? "rgba(15,23,42,0.16)" : "rgba(255,255,255,0.13)";
  const aspectClass = aspect === "video" ? "aspect-video" : aspect === "square" ? "aspect-square" : "aspect-[3/4]";

  const corners = [
    "top-4 left-4 border-t border-l",
    "top-4 right-4 border-t border-r",
    "bottom-4 left-4 border-b border-l",
    "bottom-4 right-4 border-b border-r",
  ];

  return (
    <div className={`relative overflow-hidden border ${bg} ${aspectClass} ${className}`}>
      {/* ── Real media (when src is supplied) ── */}
      {src && type === "image" && (
        <img
          src={src}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {src && type === "video" && (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* ── Placeholder (shown when no src) ── */}
      {!src && (
        <>
          {/* Scan line */}
          <motion.div
            animate={{ top: ["-2px", "100%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 0.8 }}
            className={`absolute left-0 right-0 h-px z-10 pointer-events-none ${
              light
                ? "bg-gradient-to-r from-transparent via-accent-teal/50 to-transparent"
                : "bg-gradient-to-r from-transparent via-accent-teal/70 to-transparent"
            }`}
          />

          {/* Corner brackets */}
          {corners.map((pos, i) => (
            <motion.div
              key={pos}
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
              className={`absolute w-5 h-5 ${pos} ${cb}`}
            />
          ))}

          {/* Icon + label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 select-none">
            {type === "video" ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={is} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill={is} stroke="none" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={is} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            )}
            <p className={`text-[9px] font-medium uppercase tracking-[0.22em] ${tc} text-center max-w-[140px] leading-[1.9]`}>
              {label}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

// ── Static data ───────────────────────────────────────────────

const STEPS = [
  { n: "01", title: "Read the brief", body: "A realistic scenario from the role. Context and constraints — no hand-holding." },
  { n: "02", title: "Do the work", body: "Produce the artefacts the job actually produces. No hints. No lectures." },
  { n: "03", title: "Get assessed", body: "Rubrics designed by named senior practitioners. Scored against what employers look for." },
  { n: "04", title: "Own the result", body: "Artefacts, scores, commentary, credential — all yours to keep and share." },
];

const WHY = [
  {
    title: "Real scenarios.",
    body: "Not exercises. The actual kind of work hiring managers ask to see — produced under realistic conditions.",
  },
  {
    title: "Expert assessment.",
    body: "Rubrics designed and validated by named senior practitioners. Not AI alone. The rubric is the product.",
  },
  {
    title: "Yours to keep.",
    body: "Work artefacts, rubric scores, assessor commentary, and a digital credential. All yours, permanently.",
  },
];

const CB_ADDS = [
  { title: "Named practitioners on every rubric", body: "Their names appear on your portfolio. They're accountable for the standard." },
  { title: "National framework alignment", body: "Cyber pathways align to the UK Cyber Security Council's Cyber Career Framework." },
  { title: "Consultant office hours", body: "Two 60-minute sessions per cohort. Optional — drop in when useful." },
  { title: "Verified portfolio bundle", body: "Artefacts, scores, commentary, validation, credential — assembled for you." },
  { title: "Cohort community", body: "Candidates and coach-partners alongside you through every sprint." },
  { title: "Social enterprise mission", body: "Every portfolio sold funds future free pathways for candidates who can't pay." },
];

const COMING = [
  { name: "Incident Response", when: "Month 5 · 2026" },
  { name: "Cyber Security Management", when: "Later 2026" },
  { name: "Cyber Governance & Risk", when: "Later 2026" },
];

// ── Page ─────────────────────────────────────────────────────

export default function PortfolioSimulationsPage() {
  return (
    <>
      {/* ════════════════════════════════════════
          HERO — split: copy left · image placeholder right
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center bg-ink overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.18] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full bg-accent-teal/[0.06] blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent-teal/[0.04] blur-[120px] pointer-events-none" />

        <div className="relative page-container pt-44 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">

            {/* Copy */}
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
                  Portfolio
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-10">
                <motion.h1
                  variants={{ hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } }}
                  className="text-[clamp(3.5rem,7.5vw,6.5rem)] font-bold text-accent-teal leading-[0.9] tracking-[-0.03em]"
                >
                  Simulations.
                </motion.h1>
              </div>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                className="text-xl md:text-2xl font-light text-white/50 leading-[1.5] max-w-xl mb-5"
              >
                The work, not a course about the work.
              </motion.p>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                className="text-sm text-white/25 leading-[1.9] max-w-md"
              >
                A realistic version of the job. Real artefacts. Expert-validated rubrics.
                A verified portfolio you own and share.
              </motion.p>
            </motion.div>

            {/* ── IMAGE PLACEHOLDER — hero visual ── */}
            <Reveal delay={0.7} className="hidden lg:block">
              <MediaPlaceholder
                label="Campaign imagery"
                type="image"
                aspect="tall"
                light={false}
                src="/image2.png"
              />
            </Reveal>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] text-white/20 uppercase tracking-[0.4em]">Scroll</span>
          <motion.div
            animate={{ opacity: [0.3, 0.08, 0.3], scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-14 bg-gradient-to-b from-white/25 to-transparent origin-top"
          />
        </motion.div>
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

          {/* ── VIDEO PLACEHOLDER — process walkthrough ── */}
          {/* <Reveal delay={0.1} className="mt-6">
            <MediaPlaceholder
              label="Video — See how a simulation works"
              type="video"
              aspect="video"
              light={true}
              src="1.mp4"
            />
          </Reveal> */}
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY IT WORKS — glass cards on dark
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
              Why portfolio<br />simulations work.
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
          WHAT IT ISN'T — bold editorial rows
      ════════════════════════════════════════ */}
      <section className="bg-warm-grey py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Clarity</span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em]">
              What it isn&apos;t.
            </h2>
          </Reveal>

          <StaggerGrid className="flex flex-col gap-px">
            {[
              { label: "Not a course", body: "No curriculum, no instructor delivering content, no lectures." },
              { label: "Not a test", body: "Open-ended and realistic — there's no single right answer to tick." },
              { label: "Not a guaranteed pass", body: "If you don't meet the bar, you keep the feedback. That's what makes it credible." },
            ].map(({ label, body }) => (
              <motion.div key={label} variants={cardVariant}>
                <div className="bg-white flex flex-col md:flex-row md:items-center gap-4 md:gap-12 p-8 md:p-10 group hover:border-l-2 hover:border-accent-teal hover:pl-[calc(2rem-2px)] md:hover:pl-[calc(2.5rem-2px)] transition-all duration-300">
                  <span className="text-2xl md:text-3xl font-bold text-ink/[0.1] uppercase tracking-[-0.01em] md:min-w-56 shrink-0 group-hover:text-ink/20 transition-colors duration-300">
                    {label}.
                  </span>
                  <p className="text-sm text-slate leading-[1.75]">{body}</p>
                  <div className="md:ml-auto shrink-0 w-1.5 h-1.5 rounded-full bg-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT CB ADDS — 6-item grid
      ════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
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
          PATHWAYS — featured + coming soon
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

          {/* Featured pathway card — image placeholder + copy side by side */}
          <Reveal delay={0.1} className="mb-10">
            <div className="relative border border-accent-teal/25 bg-white/[0.03] shadow-[0_0_80px_rgba(13,148,136,0.08)] hover:shadow-[0_0_130px_rgba(13,148,136,0.16)] transition-shadow duration-700 group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/80 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
                {/* ── IMAGE PLACEHOLDER — CTI pathway visual ── */}
                <MediaPlaceholder
                  label="Pathway imagery"
                  type="image"
                  aspect="square"
                  light={false}
                  className="lg:aspect-auto lg:h-full min-h-[200px]"
                  src="CT1.jpg"
                />

                {/* Copy */}
                <div className="p-8 md:p-12 flex flex-col justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-2 h-2 rounded-full bg-accent-teal" />
                      <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">
                        Open now · Founding cohort · $299
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em] mb-4">
                      Cyber Threat Intelligence
                    </h3>
                    <p className="text-sm text-white/40 leading-[1.8] max-w-lg">
                      Two-week simulation. Expert-validated rubrics. Named-consultant assessment.
                      Digital credential. Aligned to the UK Cyber Security Council&apos;s Cyber Career Framework.
                    </p>
                  </div>
                  <Link
                    to="/portfolio-simulations/cyber-threat-intelligence"
                    className="self-start inline-flex items-center gap-2.5 text-[11px] font-medium uppercase px-8 py-4 tracking-[0.12em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200 whitespace-nowrap"
                  >
                    Explore the pathway
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Coming soon */}
          <Reveal delay={0.2}>
            <p className="text-[10px] font-medium uppercase text-white/25 tracking-[0.25em] mb-5">Opening through 2026</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.04]">
              {COMING.map(({ name, when }) => (
                <div key={name} className="p-6 bg-ink border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300">
                  <p className="text-[10px] text-white/25 uppercase tracking-[0.15em] mb-2">{when}</p>
                  <p className="text-sm font-medium text-white/50">{name}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-40 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-accent-teal/[0.07] blur-[130px] pointer-events-none" />

        <Reveal className="relative max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95] tracking-[-0.025em]">
            Ready to prove<br />
            <span className="text-accent-teal">what you can do?</span>
          </h2>
          <p className="text-base text-white/35 leading-[1.8] max-w-sm">
            The Cyber Threat Intelligence pathway is open now, with founding cohort places at $299.
          </p>
          <Link
            to="/portfolio-simulations/cyber-threat-intelligence"
            className="inline-flex items-center gap-3 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200"
          >
            Explore the pathway
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            Powered by Evidentize · UK Cyber Security Council Cyber Career Framework
          </p>
        </Reveal>
      </section>
    </>
  );
}

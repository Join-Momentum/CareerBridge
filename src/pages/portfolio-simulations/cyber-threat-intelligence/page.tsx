import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const itemVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

// ── Media placeholder ─────────────────────────────────────────
// One animation: teal scan line sweeps top → bottom on loop.
// Corner brackets breathe in staggered sequence.

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

const PORTFOLIO_ITEMS = [
  {
    n: "01",
    title: "The artefacts you produced.",
    body: "Intelligence assessments, triage logs, analyst briefings — written by you in response to real scenarios. The pieces you show a hiring manager when they say 'show me your work.'",
  },
  {
    n: "02",
    title: "Rubric scores on every competency.",
    body: "Your work scored against what CTI employers actually look for. Where you're strong, where you're developing, where the gaps are. No mystery grades.",
  },
  {
    n: "03",
    title: "Named-expert validation.",
    body: "Rubrics designed by senior practitioners with UK defence intelligence backgrounds. Their names appear on your portfolio. That's the trust layer.",
  },
  {
    n: "04",
    title: "A digital credential, via Certifier.",
    body: "Shareable and verifiable. Drops straight into LinkedIn, email signatures, and your portfolio site.",
  },
  {
    n: "05",
    title: "UK Cyber Security Council alignment.",
    body: "Designed in alignment with the Cyber Career Framework specialism in CTI — institutional grounding you can't manufacture yourself.",
  },
];

const TIMELINE = [
  {
    label: "Week 0 — Onboarding",
    sub: "Day after enrolment",
    body: "Pack, platform access, cohort window confirmed. Scenario briefs sent the day the cohort opens.",
  },
  {
    label: "Weeks 1 & 2 — The work",
    sub: null,
    body: "2–3 scenario-based simulations at your own pace. Real artefacts. No instruction. No lectures. The work is yours.",
  },
  {
    label: "During the cohort — Office hours",
    sub: "Optional",
    body: "Two 60-minute consultant-led sessions. Clarify context, pressure-test your thinking. They don't give you answers — they sharpen your reasoning.",
  },
  {
    label: "End of week 2 — Portfolio delivery",
    sub: null,
    body: "Artefacts, rubric scores, assessor commentary, named-expert validation, digital credential — issued at cohort close.",
  },
];

const FOR_YOU = [
  "You've done the learning and need to prove you can do the work.",
  "You're switching into CTI from an adjacent field.",
  "You're early or mid-career in cyber and want to move up.",
  "You'd rather be assessed honestly than told you passed.",
  "You can commit two weeks of real focused work.",
];

const NOT_FOR_YOU = [
  "You need to be taught CTI from scratch. Try a structured programme first.",
  "You want a guaranteed pass or a guaranteed job.",
  "You can't commit two focused weeks.",
  "You want a fast certificate without doing the work.",
];

const FEATURES = [
  "All 2–3 scenarios",
  "Rubric-scored portfolio bundle",
  "Two consultant office hours",
  "Digital credential via Certifier",
  "Named-expert validation",
  "Closing feedback session",
  "Founding cohort badge",
];

const FAQS = [
  {
    q: "Is this accredited?",
    a: "The portfolio aligns to the UK Cyber Security Council's Cyber Career Framework specialism in CTI. It isn't a formal academic qualification — it's a verified work portfolio designed to be what employers ask for when they say \"show me your work.\"",
  },
  {
    q: "Will I get a job at the end?",
    a: "We don't promise jobs. We promise verified proof of capability. What we give you is a portfolio you can put in front of a hiring manager that says, credibly, \"I can do this work.\"",
  },
  {
    q: "How is the work scored?",
    a: "Your artefacts are scored against the expert-designed rubric using hybrid AI-assisted scoring and expert review. The rubric is the source of truth — the named consultants are the trust layer.",
  },
  {
    q: "What if I don't pass?",
    a: "You keep everything you produced. You can re-take the same cohort at a discounted rate. We don't issue the credential until you meet the bar, but the artefacts and feedback are always yours.",
  },
  {
    q: "Who are the named consultants?",
    a: "Senior practitioners with UK defence intelligence backgrounds — previous roles including intelligence leadership in the British Army and MoD-adjacent work. Named with written permission.",
  },
  {
    q: "How much time does it take?",
    a: "15–25 hours of focused work across two weeks. Self-paced — two weekends and evenings works. No live mandatory sessions beyond optional office hours.",
  },
  {
    q: "Is this just AI grading me?",
    a: "No. The rubric is designed by named senior practitioners. AI assists with applying the rubric at scale, but the rubric itself is human and expert-grade. The AI marks; the named experts wrote the marking scheme.",
  },
  {
    q: "Why isn't there training included?",
    a: "Because that's not the product. We sell verified proof of capability. If you need to learn CTI from scratch, take a structured programme first; come back when you want to prove what you've learned.",
  },
  {
    q: "I have a question that isn't here.",
    a: "Email support@careerbridgefoundation.zohodesk.eu — we'll respond within 48 hours.",
  },
];

// ── Sub-components ────────────────────────────────────────────

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-px bg-accent-teal" />
      <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">{children}</span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="7" fill="#0d9488" opacity="0.12" />
      <path d="M3.5 7.5l2.5 2.5 4.5-5" stroke="#0d9488" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M3 3l8 8M11 3L3 11" stroke="#dc2626" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function CtaButton({ className }: { className?: string }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/auth/signup?redirect=/portfolio-simulations/cyber-threat-intelligence")}
      className={className}
    >
      <span className="sm:hidden">Claim your place · $299</span>
      <span className="hidden sm:inline">Claim a founding cohort place · $299</span>
    </button>
  );
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-subtle last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-8 group"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-ink leading-[1.5] flex-1 group-hover:text-accent-teal transition-colors duration-200">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl font-light text-accent-teal shrink-0 leading-none"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-slate leading-[1.85]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────

export default function CtiPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════
          HERO — copy left · portfolio sample right
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center bg-ink overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.18] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-accent-teal/[0.07] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-teal/[0.04] blur-[100px] pointer-events-none" />

        <div className="relative page-container pt-44 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-center">

            {/* Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
                className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 border border-accent-teal/30 bg-accent-teal/[0.08]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                <span className="text-[11px] font-medium text-accent-teal tracking-[0.18em] uppercase">
                  Founding cohort · 20 places · $299
                </span>
              </motion.div>

              <div className="overflow-hidden mb-2">
                <motion.h1
                  variants={{ hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } }}
                  className="text-[clamp(2.8rem,6vw,5.5rem)] font-bold text-white leading-[0.92] tracking-[-0.025em]"
                >
                  Verified Cyber
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-2">
                <motion.h1
                  variants={{ hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } }}
                  className="text-[clamp(2.8rem,6vw,5.5rem)] font-bold text-white leading-[0.92] tracking-[-0.025em]"
                >
                  Threat Intelligence
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-10">
                <motion.h1
                  variants={{ hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } }}
                  className="text-[clamp(2.8rem,6vw,5.5rem)] font-bold text-accent-teal leading-[0.92] tracking-[-0.025em]"
                >
                  Work Portfolio.
                </motion.h1>
              </div>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                className="text-lg md:text-xl font-light text-white/50 leading-[1.6] max-w-xl mb-10"
              >
                Two weeks. Real scenarios. Expert-validated rubrics. A portfolio you own and share.
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              >
                <CtaButton className="inline-flex items-center gap-2 text-[11px] font-medium uppercase px-8 py-4 tracking-[0.1em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200" />
              </motion.div>

              <motion.p
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, ease } } }}
                className="mt-5 text-xs text-white/25 leading-[1.7]"
              >
                20 founding cohort places. After they&apos;re gone, the next cohort opens at $599.
              </motion.p>
            </motion.div>

            {/* ── IMAGE PLACEHOLDER — portfolio sample preview ── */}
            <Reveal delay={0.7} className="hidden lg:block">
              <MediaPlaceholder
                label="Portfolio sample · Artefact preview"
                type="image"
                aspect="tall"
                light={false}
                src="/cti1.png"
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
          WHAT THIS IS
      ════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <SectionLabel>What this is, and what it isn&apos;t</SectionLabel>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] max-w-2xl">
              You can already learn CTI.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <Reveal delay={0.05}>
              <div className="flex flex-col gap-5">
                <p className="text-base text-slate leading-[1.85]">
                  There&apos;s no shortage of courses, certifications, and tutorials competing for your time and money.
                </p>
                <p className="text-base text-slate leading-[1.85]">
                  What you can&apos;t easily get is proof.
                </p>
                <p className="text-base text-slate leading-[1.85]">
                  The question employers actually ask in interviews is some version of{" "}
                  <em className="text-ink font-medium">&ldquo;show me your work.&rdquo;</em>{" "}
                  If you can&apos;t put a real intelligence assessment in front of them — assessed against a credible standard, signed off by someone whose name carries weight — you&apos;re in the same pile as everyone else.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-6">
                <p className="text-base text-slate leading-[1.85]">
                  The Verified CTI Work Portfolio is the bit that comes after the learning. You do the work. We assess it. You walk away with a verified portfolio you actually own.
                </p>
                <div className="border-l-2 border-accent-teal pl-6">
                  <p className="text-base font-medium text-ink leading-[1.75]">
                    Two weeks. Deliberately uncomfortable. The closest thing to the job without already being in it.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT YOU WALK AWAY WITH
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-accent-teal/[0.05] blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <SectionLabel>Your portfolio</SectionLabel>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[0.95] tracking-[-0.025em]">
              What you walk away with.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Numbered items */}
            <StaggerGrid className="flex flex-col gap-px">
              {PORTFOLIO_ITEMS.map(({ n, title, body }) => (
                <motion.div key={n} variants={itemVariant}>
                  <div className="relative bg-white/[0.03] border border-white/[0.07] p-8 md:p-10 flex gap-6 md:gap-10 group hover:bg-white/[0.06] hover:border-accent-teal/20 transition-all duration-400">
                    <div className="absolute top-0 left-0 w-0 h-px bg-accent-teal/60 group-hover:w-full transition-all duration-700" />
                    <span className="text-xs font-bold text-accent-teal tracking-[0.2em] shrink-0 mt-0.5 w-7">{n}</span>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
                      <p className="text-sm text-white/45 leading-[1.8]">{body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerGrid>

            {/* ── IMAGE PLACEHOLDER — portfolio bundle preview ── */}
            <Reveal delay={0.2} className="lg:sticky lg:top-28">
              <MediaPlaceholder
                label="Portfolio bundle · Visual preview"
                type="image"
                aspect="tall"
                light={false}
                src="/cti2.png"
              />
            </Reveal>
          </div>

          {/* Consultant placeholder */}
          <Reveal delay={0.25} className="mt-6">
            <div className="border border-dashed border-white/10 bg-white/[0.02] p-8">
              <p className="text-[10px] font-semibold uppercase text-white/20 tracking-[0.2em] mb-2">Expert validation — placeholder</p>
              <p className="text-sm text-white/25 italic leading-[1.75]">
                Named consultant profiles — Senior Intelligence Analyst, Lead Cyber Threat Practitioner — added once written permission is confirmed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MID-PAGE CTA — glass bar
      ════════════════════════════════════════ */}
      <section className="bg-warm-grey py-10 md:py-16 px-4 sm:px-6">
        <Reveal className="max-w-6xl mx-auto">
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-8 p-5 sm:p-8 md:p-10 bg-ink border border-subtle overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/60 to-transparent" />
            <div className="min-w-0">
              <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-1">Ready to start?</h2>
              <p className="text-xs font-light text-white/45 leading-[1.6]">20 founding cohort places at $299. After that, $599.</p>
            </div>
            <CtaButton className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-medium uppercase px-5 sm:px-8 py-3 sm:py-4 tracking-[0.1em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200" />
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════════
          TIMELINE — animated dots
      ════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <SectionLabel>The format</SectionLabel>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em]">
              How it works.
            </h2>
          </Reveal>

          <StaggerGrid className="relative flex flex-col">
            <div className="absolute left-[1.0625rem] top-4 bottom-10 w-px bg-subtle hidden md:block" />

            {TIMELINE.map(({ label, sub, body }, i) => (
              <motion.div key={i} variants={itemVariant}>
                <div className="relative flex gap-8 md:gap-12 pb-12 last:pb-0">
                  <div className="shrink-0 w-9 h-9 rounded-full border border-accent-teal bg-white flex items-center justify-center z-10 relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-teal" />
                  </div>
                  <div className="flex-1 pt-1.5">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-sm font-bold text-ink">{label}</h3>
                      {sub && (
                        <span className="text-[10px] font-medium text-accent-teal uppercase tracking-[0.15em]">{sub}</span>
                      )}
                    </div>
                    <p className="text-sm text-slate leading-[1.8]">{body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>

          <Reveal delay={0.2} className="mt-12 pt-8 border-t border-subtle">
            <p className="text-sm font-medium text-ink/40 italic leading-[1.75]">
              The candidate produces the work alone. That&apos;s the point.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EXPERT DESIGN
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-accent-teal/[0.06] blur-[90px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <SectionLabel>Expert design</SectionLabel>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[0.95] tracking-[-0.025em] max-w-xl">
              Who designed the rubric.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <Reveal delay={0.05}>
              <div className="flex flex-col gap-5">
                <p className="text-base font-semibold text-white leading-[1.6]">
                  The rubric is the product. If the rubric is weak, the credential is worthless.
                </p>
                <p className="text-sm text-white/50 leading-[1.85]">
                  Designed and validated by named senior practitioners with UK defence intelligence backgrounds. Previous roles include intelligence leadership in the British Army and MoD-adjacent work.
                </p>
                <div className="border-l-2 border-accent-teal pl-5 mt-2">
                  <p className="text-sm text-white/45 leading-[1.8]">
                    The AI scores against the rubric — but the rubric is human, expert-validated, and named. That&apos;s what distinguishes Career Bridge from AI-only tools.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-4">
                {["Senior Intelligence Analyst", "Lead Cyber Threat Practitioner"].map((name) => (
                  <div key={name} className="bg-white/[0.03] border border-dashed border-white/10 p-6 flex gap-5 items-start hover:border-white/20 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/[0.06] shrink-0 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-white/30 tracking-[0.15em] mb-1">{name}</p>
                      <p className="text-xs text-white/20 italic leading-[1.6]">Profile added once written permission confirmed.</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOR / NOT FOR
      ════════════════════════════════════════ */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <SectionLabel>Suitability</SectionLabel>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em]">
              Is this for you?
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-px bg-subtle">
            <motion.div variants={itemVariant}>
              <div className="bg-white p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent-teal" />
                  <h3 className="text-xs font-bold text-ink uppercase tracking-[0.1em]">This is for you if</h3>
                </div>
                <ul className="flex flex-col gap-5">
                  {FOR_YOU.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate leading-[1.75]">
                      <CheckIcon /><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariant}>
              <div className="bg-warm-grey p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
                  <h3 className="text-xs font-bold text-ink uppercase tracking-[0.1em]">This is not for you if</h3>
                </div>
                <ul className="flex flex-col gap-5">
                  {NOT_FOR_YOU.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate leading-[1.75]">
                      <CrossIcon /><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PRICING — card + credential placeholder
      ════════════════════════════════════════ */}
      <section id="pricing" className="relative bg-ink py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-teal/[0.06] blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[0.95] tracking-[-0.025em]">
              $299. First 20 places.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Explanation text */}
            <Reveal delay={0.05} className="lg:col-span-1 flex flex-col gap-5">
              <p className="text-sm text-white/50 leading-[1.85]">
                The founding cohort is the first to run on this format. Twenty places at $299.
                After the founding cohort, the price for the same portfolio is $599.
              </p>
              <p className="text-sm text-white/50 leading-[1.85]">
                The deal: you get a verified portfolio at half price. We get the case studies that make the next cohort easier to sell. Honest exchange.
              </p>

              {/* ── IMAGE PLACEHOLDER — digital credential preview ── */}
              <MediaPlaceholder
                label="Digital credential · Certifier preview"
                type="image"
                aspect="video"
                light={false}
                className="mt-2"
                src="/CTI2.jpg"
              />
            </Reveal>

            {/* Pricing card */}
            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="relative bg-white/[0.04] border border-accent-teal/30 p-8 md:p-10 shadow-[0_0_80px_rgba(13,148,136,0.1)]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/80 to-transparent" />

                <div className="mb-6">
                  <p className="text-[11px] font-semibold uppercase text-accent-teal tracking-[0.2em] mb-4">Founding cohort place</p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-6xl font-bold text-white tracking-[-0.03em]">$299</span>
                  </div>
                  <p className="text-xs text-white/25 mt-2">USD. Local-currency-equivalent at checkout via Stripe.</p>
                </div>

                <div className="h-px bg-white/[0.08] my-6" />

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                      <CheckIcon /><span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="h-px bg-white/[0.08] mb-6" />

                <CtaButton className="w-full flex items-center justify-center text-[11px] font-medium uppercase py-4 tracking-[0.1em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200" />
                <p className="text-xs text-center text-white/20 mt-3">Founding cohort places remaining: [X of 20]</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section id="faq" className="bg-white py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-14">
            <SectionLabel>Common questions</SectionLabel>
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em]">
              FAQs.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-subtle">
              {FAQS.map((item, i) => (
                <FaqItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  open={faqOpen === i}
                  onToggle={() => setFaqOpen(faqOpen === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CLOSING CTA
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-40 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-accent-teal/[0.08] blur-[130px] pointer-events-none" />

        <Reveal className="relative max-w-2xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95] tracking-[-0.025em]">
            20 places.<br />
            <span className="text-accent-teal">A portfolio you own.</span>
          </h2>
          <CtaButton className="inline-flex items-center gap-2 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] bg-accent-teal text-white hover:bg-accent-teal/90 transition-colors duration-200" />
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            Powered by Evidentize · UK Cyber Security Council Cyber Career Framework
          </p>
        </Reveal>
      </section>
    </>
  );
}

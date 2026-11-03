import { Reveal, StaggerGrid, cardVariant } from "@/components/simulation/Motion";
import { motion } from "framer-motion";

const GROUPS = [
  {
    phase: "Join",
    num: "1",
    steps: [
      { n: "01", title: "Apply", tag: "Free", body: "Explore the pathways, submit a free application and choose a primary discipline." },
      { n: "02", title: "Qualify", tag: "Free", body: "Your application is reviewed and validated. There is no charge to be considered." },
      { n: "03", title: "Onboard", tag: "Free", body: "Create your account, complete programme paperwork and access the platform at no cost." },
    ],
  },
  {
    phase: "Prove",
    num: "2",
    steps: [
      { n: "04", title: "Simulate", tag: "Credits", body: "Begin AI-powered workplace simulations. This is the point at which credits become necessary." },
      { n: "05", title: "Evaluate", tag: "Credits", body: "Submitted work is processed and evaluated by AI-powered competency assessment using expert-designed or expert-validated rubrics." },
    ],
  },
  {
    phase: "Progress",
    num: "3",
    steps: [
      { n: "06", title: "Build evidence", tag: "Credits", body: "AI-powered portfolio generation turns your assessed work into editable artefacts and published evidence." },
      { n: "07", title: "Progress", tag: "Free", body: "Share your digital career portfolio with employers, recruiters and professional networks." },
    ],
  },
];

/**
 * Seven stages of the programme journey, grouped into Join / Prove /
 * Progress. Assumes a dark (bg-ink) ancestor — the page provides the
 * section background and dot-pattern, matching how PathwayCards and
 * WorkExperienceFAQ each assume their own section's ground rather than
 * setting it themselves.
 */
const JoinProveProgress = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <Reveal className="mb-14">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-px bg-accent-teal" />
        <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">
          The programme journey
        </span>
      </div>
      <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[0.95] tracking-[-0.025em] mb-6">
        Join. Prove. Progress.
      </h2>
      <p className="text-base text-white/45 leading-[1.75] max-w-2xl">
        Seven stages, grouped into the three that matter. Apply, qualify and onboard at no cost; credits are
        required from the point you begin using AI-powered functionality.
      </p>
    </Reveal>

    <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      {GROUPS.map((group) => (
        <motion.div key={group.phase} variants={cardVariant}>
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50 mb-6">
            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 text-white/70 text-[10px] font-mono">
              {group.num}
            </span>
            {group.phase}
          </p>
          <ol className="flex flex-col divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
            {group.steps.map((step) => (
              <li key={step.n} className="py-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-white/30">{step.n}</span>
                  <span className="text-sm font-bold text-white">{step.title}</span>
                  <span
                    className={`ml-auto text-[9px] font-medium uppercase tracking-[0.12em] rounded-full px-2 py-0.5 border ${
                      step.tag === "Free"
                        ? "text-accent-teal border-accent-teal/40"
                        : "text-white/60 border-white/25"
                    }`}
                  >
                    {step.tag}
                  </span>
                </div>
                <p className="text-sm text-white/45 leading-[1.65]">{step.body}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      ))}
    </StaggerGrid>

    <Reveal delay={0.15}>
      <p className="text-sm text-white/40 leading-[1.7] max-w-2xl mt-10 pt-8 border-t border-white/[0.08]">
        <strong className="text-white/70">Programme access is free. AI usage requires credits.</strong> The tags
        above show exactly where each applies.
      </p>
    </Reveal>
  </div>
);

export default JoinProveProgress;

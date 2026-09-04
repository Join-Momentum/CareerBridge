import { motion } from "framer-motion";
import { Reveal, StaggerGrid, cardVariant } from "@/components/simulation/Motion";

const STAGES = [
  {
    phase: "Join",
    ordinal: "Stage 1 of 3",
    title: "Apply free and choose a pathway",
    body: "Explore the available work experience pathways, submit a free application and select a primary discipline. Tell us about your background, your goals and what you want to prove.",
    items: ["No application fee", "No programme-access fee", "No obligation to purchase credits if selected"],
  },
  {
    phase: "Prove",
    ordinal: "Stage 2 of 3",
    title: "Complete assessed workplace simulations",
    body: "Begin AI-powered workplace simulations, work through realistic professional briefs and submit your work outputs for competency-based assessment.",
    items: [
      "Workplace scenario and defined Jobs to Be Done",
      "AI and rubric-based competency assessment",
      "Competency scoring, developmental feedback and a Readiness Score",
    ],
  },
  {
    phase: "Progress",
    ordinal: "Stage 3 of 3",
    title: "Publish verifiable career evidence",
    body: "Completed and assessed work becomes evidence: a growing digital career portfolio you can share with employers, recruiters and professional networks.",
    items: [
      "Editable, partner-agnostic portfolio artefacts",
      "Digital credentials and evidence publication",
      "CV and LinkedIn evidence support",
    ],
  },
];

/**
 * Three-stage "Join. Prove. Progress." narrative cards — distinct from the
 * seven-stage journey grid already on this page (Apply/Qualify/Onboard/
 * Simulate/Evaluate/Build Evidence/Progress). This is the higher-level,
 * three-act version of the same journey.
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
      <h2 className="text-4xl md:text-[3.5rem] font-bold text-ink leading-[0.95] tracking-[-0.025em] mb-6">
        Join. Prove. Progress.
      </h2>
      <p className="text-base text-slate leading-[1.75] max-w-2xl">
        Three stages, in order. Each one produces something the next one uses.
      </p>
    </Reveal>

    <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {STAGES.map((stage) => (
        <motion.div key={stage.phase} variants={cardVariant}>
          <div className="h-full flex flex-col bg-white border border-subtle border-t-[3px] border-t-accent-teal p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate mb-4">
              <span className="text-accent-teal font-semibold">{stage.phase}</span> · {stage.ordinal}
            </p>
            <h3 className="text-lg font-bold text-ink mb-3 leading-snug">{stage.title}</h3>
            <p className="text-sm text-slate leading-[1.7] mb-5">{stage.body}</p>
            <ul className="mt-auto space-y-2.5 pt-5 border-t border-subtle">
              {stage.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-slate leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-accent-teal shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </StaggerGrid>
  </div>
);

export default JoinProveProgress;

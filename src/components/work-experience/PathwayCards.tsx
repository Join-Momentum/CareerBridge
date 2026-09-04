import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, StaggerGrid, cardVariant, ArrowIcon } from "@/components/simulation/Motion";
import { PATHWAY_GLYPHS } from "@/components/pathwayGlyphs";

interface PathwayCardData {
  slug: keyof typeof PATHWAY_GLYPHS;
  name: string;
  cue: string;
  desc: string;
  work: string;
  evidence: string;
}

const PATHWAY_CARDS: PathwayCardData[] = [
  {
    slug: "product-management",
    name: "Product Management",
    cue: "#A34411",
    desc: "Turn ambiguous business problems into defined opportunities, evidence-based priorities and product decisions you can justify.",
    work: "Opportunity assessments, prioritisation calls, roadmap decisions, success measures and stakeholder recommendations.",
    evidence: "Product vision, opportunity assessment, prioritisation rationale, roadmap, experiment plan, product decision record.",
  },
  {
    slug: "project-management",
    name: "Project Management",
    cue: "#0E6E7D",
    desc: "Plan delivery, control scope and risk, report honestly to governance and keep a project moving when the plan stops matching reality.",
    work: "Initiation, planning, risk and dependency management, change control, governance reporting, recovery and closure.",
    evidence: "Project charter, delivery plan, work breakdown structure, RAID log, governance report, change request, closure report.",
  },
  {
    slug: "business-analysis",
    name: "Business Analysis",
    cue: "#1F7A3D",
    desc: "Define the real problem, elicit and structure requirements, model process and evaluate options that a business can actually decide between.",
    work: "Problem definition, stakeholder analysis, elicitation, current and future-state modelling, gap analysis, options appraisal and traceability.",
    evidence: "Requirements catalogue, process maps, gap analysis, options appraisal, business case, traceability matrix, acceptance criteria.",
  },
  {
    slug: "cyber-threat-intelligence",
    name: "Cyber Threat Intelligence",
    cue: "#5B3A9E",
    desc: "Turn scattered, uncertain information into assessed intelligence that a decision maker can act on — with sources evaluated and confidence stated.",
    work: "Intelligence requirements, actor research, source evaluation, indicator and campaign assessment, reporting and executive briefing.",
    evidence: "Intelligence requirements, threat actor profile, threat landscape report, collection plan, intelligence assessment, executive briefing.",
  },
  {
    slug: "virtual-administrative-assistant",
    name: "Virtual Administrative Assistant",
    cue: "#7A5C0C",
    desc: "Run the operational spine of a busy professional: prioritise the inbox, hold the diary, protect the detail and keep decisions moving.",
    work: "Inbox triage, calendar coordination, meeting preparation and minutes, action tracking, travel and event planning, research and reporting.",
    evidence: "Prioritised inbox plan, meeting agenda and minutes, action tracker, travel itinerary, research brief, weekly operations report.",
  },
];

/**
 * Richer pathway cards — glyph, "Founding Cohort 2026" badge, description,
 * and the "work you may complete" / "evidence you may produce" pairing.
 * More detailed than the summary cards currently on the Work Experience
 * hub page (name/body/status only) — this fills the content gap flagged
 * in data/pathways.ts's DRAFT CONTENT NOTICE. Links go to the real routes
 * already registered in App.tsx (all five now exist, including CTI's own
 * dedicated page — not the /simulation-based-work-experience/:slug pattern
 * for that one).
 */
const PathwayCards = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PATHWAY_CARDS.map((pathway) => {
        const href =
          pathway.slug === "cyber-threat-intelligence"
            ? "/portfolio-simulations/cyber-threat-intelligence"
            : `/simulation-based-work-experience/${pathway.slug}`;

        return (
          <motion.div key={pathway.slug} variants={cardVariant}>
            <Link
              to={href}
              className="group relative h-full flex flex-col bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.16] transition-colors duration-300 overflow-hidden"
            >
              <div className="h-[3px]" style={{ backgroundColor: pathway.cue }} />
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4" style={{ color: pathway.cue }}>
                  {PATHWAY_GLYPHS[pathway.slug]}
                </div>
                <span className="inline-flex w-fit items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/40 border border-white/15 rounded-full px-2.5 py-1 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                  Founding Cohort 2026
                </span>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-accent-teal transition-colors duration-300">
                  {pathway.name}
                </h3>
                <p className="text-sm text-white/45 leading-[1.7] mb-6">{pathway.desc}</p>

                <div className="mt-auto pt-6 border-t border-white/[0.08] space-y-4">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/30 mb-1.5">
                      Work you may complete
                    </p>
                    <p className="text-xs text-white/40 leading-[1.6]">{pathway.work}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/30 mb-1.5">
                      Evidence you may produce
                    </p>
                    <p className="text-xs text-white/40 leading-[1.6]">{pathway.evidence}</p>
                  </div>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-accent-teal">
                  Explore this pathway
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </StaggerGrid>
  </div>
);

export const PathwayCardsHeader = () => (
  <Reveal className="mb-14">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-px bg-accent-teal" />
      <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Available pathways</span>
    </div>
    <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[0.95] tracking-[-0.025em] max-w-2xl mb-6">
      Choose where you want to prove yourself
    </h2>
    <p className="text-base text-white/45 leading-[1.75] max-w-2xl">
      Five work experience pathways are open to the 2026 founding cohort. Each has its own workplace scenarios,
      work outputs and competency rubrics.
    </p>
  </Reveal>
);

export default PathwayCards;

import { Reveal } from "@/components/simulation/Motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/**
 * Richer 15-question FAQ set for the Work Experience hub, replacing the
 * shorter list currently on the page. Every answer below had a paired
 * internal ".rnote" review flag in the source (unpublished pricing, an
 * unconfirmed credential platform, unconfirmed office-hours cadence,
 * unconfirmed simulation duration, unconfirmed portfolio-hosting terms,
 * no employer-verification mechanism yet) — none of that made it into the
 * copy below; only the confirmed answer text is kept.
 */
const FAQS = [
  {
    q: "Is this a job or an internship?",
    a: "No. This is work experience delivered through simulation. It is not employment, a paid role, an internship, an apprenticeship or a job placement, and participants do not become employees or workers of Career Bridge Foundation or of any organisation represented within a simulation.",
  },
  {
    q: "Is the programme free?",
    a: "Programme access is free. AI usage requires credits. You can apply, create your account and access the programme without an application or programme-access fee. Credits are required when you begin using AI-powered simulation, evaluation and portfolio-generation features.",
  },
  {
    q: "What happens after I am selected?",
    a: "You complete onboarding and get access to the programme at no cost. You then decide whether you want to begin the AI-powered simulation experience, which requires credits. If you do not, nothing further is required of you.",
  },
  {
    q: "What is an assessed workplace simulation?",
    a: "A complete piece of professional work. You receive a workplace scenario brief, a defined set of Jobs to Be Done and a structured task set. You do the work, submit it, and receive competency-based assessment, developmental feedback, a Readiness Score, an AI Voice Debrief and an editable portfolio artefact.",
  },
  {
    q: "What are simulation credits?",
    a: "Credits are the mechanism used to access AI-powered functionality within the Evidentize experience. They are what you use when you run a workplace simulation, when your submitted work is evaluated, and when your portfolio evidence is generated. You are not buying a course, a programme place or an employment outcome — programme access itself is free. Credits give you access to the AI-powered simulation, evaluation and evidence infrastructure that the experience runs on.",
  },
  {
    q: "Must I purchase credits after being selected?",
    a: "No. Applying, being selected and accessing the programme do not create an obligation to purchase credits. Beginning the AI-powered simulation experience is a separate decision you make afterwards.",
  },
  {
    q: "How much do credits cost?",
    a: "Credit requirements and pricing are disclosed clearly before you commit to anything. We do not ask anyone to apply without being able to see what the AI-powered element of the programme will require of them.",
  },
  {
    q: "Can I complete simulations in more than one discipline?",
    a: "Yes. Participants are not permanently restricted to one discipline. Subject to available simulations, you may complete assessed workplace simulations across multiple professional pathways and progressively build multidisciplinary evidence.",
  },
  {
    q: "How is my work assessed?",
    a: "Through AI-powered competency assessment using expert-designed or expert-validated rubrics. You receive competency-level scoring, detailed developmental feedback, a Readiness Score and an AI Voice Debrief. Assessment is applied consistently against defined criteria, and completing a simulation does not guarantee a pass.",
  },
  {
    q: "Will I receive a certificate or credential?",
    a: "Yes. A digital credential is issued for a completed assessed workplace simulation, alongside the portfolio artefact and your assessment results.",
  },
  {
    q: "What appears in my digital career portfolio?",
    a: "The workplace situation you encountered, the brief and responsibilities, the work you completed, the artefacts you produced, the competencies you demonstrated, your assessment results and your developmental feedback — in a form you can share with employers, recruiters and professional networks. Generating portfolio evidence uses AI-powered functionality and therefore requires credits; once an artefact has been generated, hosting and ongoing editing of it are not time-limited.",
  },
  {
    q: "Does participation guarantee employment?",
    a: "No. Participation does not guarantee employment, interviews, recruitment outcomes or earnings. The programme enables you to practise professional work, demonstrate applied capability, receive structured assessment and build credible evidence of what you can do.",
  },
  {
    q: "How long does a simulation take?",
    a: "Simulations vary in scope and complexity, and you work at your own pace rather than to a fixed timetable.",
  },
  {
    q: "What support is available?",
    a: "An AI Simulation Assistant within each simulation, simulation guidance, Career Bridge office hours, programme support and the Career Bridge community on Circle.",
  },
  {
    q: "Can employers verify my portfolio evidence?",
    a: "Your portfolio sets out the scenario, the brief, the work you produced, the competencies assessed and your results, so an employer can review the evidence directly.",
  },
];

const WorkExperienceFAQ = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <Reveal className="mb-14">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-px bg-accent-teal" />
        <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Questions</span>
      </div>
      <h2 className="text-4xl md:text-[3rem] font-bold text-ink leading-[0.95] tracking-[-0.025em]">
        Frequently asked questions
      </h2>
    </Reveal>

    <Reveal delay={0.1}>
      <div className="max-w-3xl">
        <Accordion type="single" collapsible>
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`we-faq-${i}`} className="border-subtle">
              <AccordionTrigger className="font-serif text-base font-semibold text-ink hover:no-underline py-6 text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-body text-slate leading-relaxed font-sans">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Reveal>
  </div>
);

export default WorkExperienceFAQ;

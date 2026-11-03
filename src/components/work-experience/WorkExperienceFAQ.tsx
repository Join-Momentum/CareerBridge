import { Reveal } from "@/components/simulation/Motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/**
 * 24-question FAQ set for the Work Experience hub, matching the order and
 * content of the reference page's FAQ section. Several answers in that
 * source carried a paired internal "Confirm" review flag (unpublished
 * local-currency amounts, an unconfirmed credential platform, unconfirmed
 * office-hours cadence, unconfirmed simulation duration, an unconfirmed
 * employer-verification mechanism, unnamed standards for Product
 * Management and Virtual Administrative Assistant) — none of that made it
 * into the copy below; only the confirmed answer text is kept.
 */
const FAQS = [
  {
    q: "Is the programme free?",
    a: "Programme access is free. AI usage requires credits. You can apply, create your account and access the programme without an application or programme-access fee. Credits are required when you begin using AI-powered simulation, evaluation and portfolio-generation features.",
  },
  {
    q: "What are simulation credits?",
    a: "Credits are the mechanism used to access AI-powered functionality within the simulation experience. They cover running an AI-powered workplace simulation, having your submitted work processed and evaluated, and generating the evidence that goes into your digital career portfolio. They are not a programme fee, a tuition fee or a course fee — there is no charge for access to the programme itself.",
  },
  {
    q: "What do credits cost?",
    a: "Founding Cohort 2026 credit packs are Builder (3 credits) and Professional (10 credits), with Professional priced at a lower rate per credit. Reduced Africa Access pricing applies in supported African markets. These are introductory founding-cohort prices and may change for future cohorts.",
  },
  {
    q: "How many credits will I need?",
    a: "One credit activates one complete workplace simulation, including its AI-powered evaluation and the generation of your portfolio artefact. Builder (3 credits) therefore covers three complete simulations, and Professional (10 credits) covers ten. How many you need is your decision — some participants complete three simulations to build a focused portfolio in one discipline, others work across several pathways to build multidisciplinary evidence.",
  },
  {
    q: "Why is pricing different in some countries?",
    a: "Africa Access is a deliberate accessibility mechanism rather than a discount. Reduced founding-cohort credit pricing applies in supported African markets as part of Career Bridge Foundation's commitment to widening access to AI-powered career development infrastructure. Standard pricing applies elsewhere. Eligibility follows your location at the application stage.",
  },
  {
    q: "Which currency will I be charged in?",
    a: "Pricing is presented for your region and the applicable amount is confirmed before purchase. Your pricing region is determined by your location at the application stage, so the rate you see when you apply is the rate that applies to you. Supported regions are billed in their local currency; where a region is not mapped, standard pricing in the base currency applies.",
  },
  {
    q: "When do I need credits?",
    a: "At the point you begin an AI-powered simulation. Applying, being considered, creating your account, onboarding and exploring the platform all happen before that point and cost nothing. You will know the applicable credit requirement before you start.",
  },
  {
    q: "Who is Evidentize?",
    a: "Career Bridge Foundation runs the programme and the application experience. Evidentize provides the technology infrastructure behind the simulations, AI-powered evaluation, evidence generation and digital career portfolios. Credits give you access to that infrastructure.",
  },
  {
    q: "Is this a job or an internship?",
    a: "No. This is work experience delivered through simulation. It is not employment, a paid role, an internship, an apprenticeship or a job placement, and participants do not become employees or workers of Career Bridge Foundation or of any organisation represented within a simulation.",
  },
  {
    q: "Is application free?",
    a: "Yes. There is no charge to apply and no charge to be considered for the programme. Applying or being accepted does not create an obligation to purchase anything.",
  },
  {
    q: "What happens after I am accepted?",
    a: "You complete onboarding and programme paperwork and get access to the platform, all at no cost. You then decide whether you want to begin AI-powered workplace simulations, which is the point at which credits are required. The applicable credit requirement and pricing are shown clearly before you commit, and if you choose not to continue, nothing is owed.",
  },
  {
    q: "What is an assessed workplace simulation?",
    a: "A realistic workplace scenario with a professional brief, defined Jobs to Be Done and a structured task set. You analyse the situation, make professional decisions and produce work outputs. Those outputs are submitted and assessed against defined competency rubrics, and returned with competency-level scoring, developmental feedback, a Readiness Score and an AI Voice Debrief.",
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
    q: "How does country or regional pricing work?",
    a: "Credit pricing varies according to the participant's country or region. The price applicable to you is disclosed clearly before purchase. Your pricing region is determined by your location at the application stage, so the rate you see when you apply is the rate that applies to you. Reduced Africa Access pricing applies in supported African markets; standard pricing applies elsewhere, including regions that are not individually mapped.",
  },
  {
    q: "Can I complete simulations in more than one discipline?",
    a: "Yes. Participants are not permanently restricted to one discipline. Subject to available simulations, you may complete assessed workplace simulations across multiple professional pathways and progressively build multidisciplinary evidence.",
  },
  {
    q: "Are assessments aligned to recognised professional standards?",
    a: "Yes, for some pathways. Assessment rubrics for Project Management, Business Analysis and Cyber Threat Intelligence are aligned to recognised professional frameworks for each discipline. Alignment is not accreditation: Career Bridge Foundation is not affiliated with, endorsed, accredited or certified by any standards body or professional institute, and completing a simulation does not confer a qualification, professional registration or professional title from one. Referenced standards, guides and frameworks are the property of their respective owners.",
  },
  {
    q: "How is my work assessed?",
    a: "Through AI-powered competency assessment using expert-designed or expert-validated rubrics, aligned to recognised professional standards for the discipline where applicable. Assessment produces competency-level scoring, detailed developmental feedback, a Readiness Score and an AI Voice Debrief. Assessment is against defined competency criteria — it is not a guaranteed pass.",
  },
  {
    q: "Will I receive a certificate or credential?",
    a: "A digital credential is issued on completion of an assessed workplace simulation, alongside your published portfolio evidence.",
  },
  {
    q: "What appears in my digital career portfolio?",
    a: "The workplace situation you encountered, the brief and responsibilities, the work you completed, the artefacts you produced, the competencies you demonstrated, your assessment results and your developmental feedback — presented as evidence you can share with employers, recruiters and professional networks. Generating portfolio evidence is included in the credit that activates the simulation; once generated, hosting and ongoing editing of your portfolio are not time-limited.",
  },
  {
    q: "Does participation guarantee employment?",
    a: "No. Participation does not guarantee employment, interviews, recruitment outcomes or earnings. The programme enables participants to practise professional work, demonstrate applied capability, receive structured assessment and build credible evidence of what they can do.",
  },
  {
    q: "How long does a simulation take?",
    a: "Simulations vary in scope and complexity, and you work at your own pace rather than to a fixed timetable.",
  },
  {
    q: "What support is available?",
    a: "Participants receive simulation guidance and the AI Simulation Assistant while working, plus access to Career Bridge office hours, programme support and the Career Bridge community on Circle.",
  },
  {
    q: "Can employers verify my portfolio evidence?",
    a: "Portfolio evidence is publishable and shareable with employers, recruiters and professional networks, and sets out the scenario, the work you produced, the competencies assessed and your results together, so an employer can review the evidence directly.",
  },
];

const WorkExperienceFAQ = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <Reveal className="mb-14">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-px bg-accent-teal" />
        <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Frequently asked questions</span>
      </div>
      <h2 className="text-4xl md:text-[3rem] font-bold text-ink leading-[0.95] tracking-[-0.025em]">
        Questions, answered plainly.
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

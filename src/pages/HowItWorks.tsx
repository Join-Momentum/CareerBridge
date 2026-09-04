import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { AccessLine, AccessPanels } from "@/components/AccessModel";
import { DisclosureShort, DisclosureFull } from "@/components/NonEmploymentDisclosure";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AccessModelRecord } from "@/components/records";

/* ─── DATA ─────────────────────────────────────────────────────── */

const journey = [
  {
    num: "01",
    phase: "Join",
    mode: "Free",
    title: "Apply",
    text: "Choose a career pathway and submit an application. There is no application fee and no programme-access fee.",
  },
  {
    num: "02",
    phase: "Join",
    mode: "Free",
    title: "Qualify",
    text: "We review your application against the pathway criteria. Selection is not automatic, and applying does not mean you have been accepted.",
  },
  {
    num: "03",
    phase: "Join",
    mode: "Free",
    title: "Onboard",
    text: "Selected applicants complete onboarding and programme paperwork, create their account and get access to the programme.",
  },
  {
    num: "04",
    phase: "Prove",
    mode: "Uses credits",
    title: "Simulate",
    text: "You work through realistic workplace briefs and produce professional outputs. Credits are required from the point you begin AI-powered simulation.",
  },
  {
    num: "05",
    phase: "Prove",
    mode: "Uses credits",
    title: "Evaluate",
    text: "Your submitted work is evaluated against defined competency rubrics using AI-powered evaluation, and you receive competency-level feedback.",
  },
  {
    num: "06",
    phase: "Progress",
    mode: "Uses credits",
    title: "Build Evidence",
    text: "Your assessed work becomes portfolio artefacts, demonstrated competencies and career evidence, generated through AI-powered portfolio functionality.",
  },
  {
    num: "07",
    phase: "Progress",
    mode: "Free",
    title: "Progress",
    text: "You publish and share verifiable career evidence with employers, recruiters and professional networks.",
  },
];

const creditSteps = [
  { n: "01", title: "Read the brief", body: "A realistic scenario from the role. Context and constraints — no hand-holding." },
  { n: "02", title: "Do the work", body: "Produce the artefacts the job actually produces. No hints. No lectures." },
  { n: "03", title: "Get assessed", body: "Submit your work for AI-powered competency assessment using expert-designed or expert-validated rubrics." },
  { n: "04", title: "Own the evidence", body: "Artefacts, scores, commentary, credential — all yours to keep and share." },
];

const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Safeguarding",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 3v18" />
        <rect x="4" y="8" width="4" height="7" />
        <rect x="16" y="5" width="4" height="10" />
      </svg>
    ),
    label: "Governance",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    label: "Accountability",
  },
];

const faqs = [
  {
    q: "Is the programme free?",
    a: "Programme access is free. AI usage requires credits. You can apply, create your account and access the programme without an application or programme-access fee. Credits are required when you begin using AI-powered simulation, evaluation and portfolio-generation features.",
  },
  {
    q: "What are simulation credits?",
    a: "Credits are the mechanism used to access AI-powered functionality within the simulation experience — running a workplace simulation, having your submitted work evaluated, and generating your portfolio evidence. Credits give you access to that AI-powered infrastructure. You are not buying a course, a programme place or an employment outcome.",
  },
  {
    q: "When exactly do I need credits?",
    a: "At the point you begin the AI-powered simulation experience. Applying, being considered, creating your account, accessing the programme and completing onboarding all happen before that point and are free.",
  },
  {
    q: "Does applying mean I have been accepted?",
    a: "No. Applications are reviewed against the criteria for the pathway you chose, and selection is not automatic. Applying does not mean you have been accepted, and being accepted is not an offer of employment.",
  },
  {
    q: "Do I have to buy credits if I am selected?",
    a: "No. Being selected does not create an obligation to purchase credits. If you decide not to begin the AI-powered simulation experience, nothing further is required of you.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

const HowItWorks = () => {
  return (
    <PageTransition>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        <div className="page-container flex relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-0.5 bg-accent-teal" />
              <p className="text-label font-sans uppercase text-accent-teal">How It Works</p>
            </div>

            <h1 className="font-serif text-hero-sm md:text-[3.5rem] lg:text-hero font-semibold text-warm-white leading-[1.1] max-w-4xl mb-8 text-balance">
              From application to verifiable career evidence
            </h1>

            <div className="w-12 h-0.5 bg-accent-teal mb-8" />

            <p className="text-body-lg text-cool leading-relaxed max-w-2xl mb-10 font-sans">
              Seven stages, in order. Three of them happen before you spend anything, and we tell you exactly where
              that changes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/simulation-based-work-experience" className="btn-primary-light">
                Explore Pathways
              </Link>
              <a href="#access" className="btn-secondary-light">
                What Uses Credits
              </a>
            </div>

            <div className="flex flex-col gap-5 max-w-xl">
              <DisclosureShort dark />
              <AccessLine dark />
            </div>
          </AnimatedSection>
          <AccessModelRecord className="hidden md:block "/>
        </div>
      </section>

      {/* ── THE SEVEN-STAGE JOURNEY ─────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle" id="journey">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Join. Prove. Progress.</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-2xl leading-tight">
              The journey, stage by stage
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-16 font-sans">
              Join, Prove and Progress is the shape of the programme. These seven stages are what happens inside it.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {journey.map((stage) => (
              <StaggerItem key={stage.num}>
                <div className="card h-full flex flex-col">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="mono-number text-sm">{stage.num}</span>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.1em] text-slate border border-subtle px-2.5 py-1 rounded-sm">
                      {stage.phase}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-3 leading-snug">{stage.title}</h3>
                  <p className="text-sm text-slate leading-relaxed font-sans mb-6">{stage.text}</p>
                  <p
                    className={`mt-auto text-[10px] font-sans font-semibold uppercase tracking-[0.1em] ${
                      stage.mode === "Free" ? "text-accent-teal" : "text-ink"
                    }`}
                  >
                    {stage.mode}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── ACCESS AND CREDITS ──────────────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle" id="access">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Access And Credits</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-2xl leading-tight">
              What is free, and what uses credits.
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-14 font-sans">
              <strong className="text-ink">Programme access is free. AI usage requires credits.</strong> You can
              apply, create your account and access the programme at no cost. Credits are required when you use
              AI-powered simulation, evaluation and portfolio-generation features.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <AccessPanels />
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT CREDITS ENABLE ──────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="page-container relative z-10 section-spacing">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-0.5 bg-accent-teal" />
              <p className="text-label font-sans uppercase text-accent-teal">What Credits Enable</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-warm-white mb-6 max-w-2xl leading-tight">
              The infrastructure your evidence runs on
            </h2>
            <p className="text-body text-cool leading-relaxed max-w-content mb-14 font-sans">
              Credits give you access to the AI-powered simulation, evaluation and evidence infrastructure provided
              by Evidentize, the technology platform behind the programme.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {creditSteps.map((step) => (
              <StaggerItem key={step.n}>
                <div className="bg-ink-light border border-white/10 p-8 h-full flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent-teal mb-4 block">
                    Step {step.n}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-warm-white mb-3 leading-snug">{step.title}</h3>
                  <p className="text-sm text-cool leading-relaxed font-sans">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── ACCESS MODEL AT A GLANCE ─────────────────────────────────── */}
      {/* <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto border border-subtle bg-white">
              <div className="flex items-center justify-between px-6 md:px-8 py-4 bg-warm-grey border-b border-subtle">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-slate">
                  Access Model
                </span>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-slate">
                  At A Glance
                </span>
              </div>
              <div className="px-6 md:px-8 pt-8 pb-4">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink leading-snug mb-3">
                  Programme access is free.
                  <br />
                  AI usage requires credits.
                </h3>
                <p className="text-sm text-slate font-sans">No surprises · no hidden commercial mechanics</p>
              </div>
              <ul className="px-6 md:px-8 pb-6">
                {journey.map((stage) => (
                  <li
                    key={stage.num}
                    className="flex items-center justify-between py-3 border-t border-subtle first:border-0"
                  >
                    <span className="text-sm font-sans text-ink">{stage.title}</span>
                    <span
                      className={`text-xs font-sans font-semibold uppercase tracking-[0.1em] ${
                        stage.mode === "Free" ? "text-accent-blue" : "text-slate"
                      }`}
                    >
                      {stage.mode === "Free" ? "Free" : "Credits"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* ── GOVERNANCE & SAFEGUARDS ─────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <div className="section-label-center">Accountability</div>
              <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 leading-tight">
                Governance &amp; Safeguards
              </h2>
              <p className="text-body text-slate leading-relaxed font-sans mb-16">
                All activities operate within defined governance, safeguarding, and accountability frameworks to
                ensure alignment with public benefit obligations.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-subtle border border-subtle">
                {pillars.map((pillar) => (
                  <div key={pillar.label} className="bg-warm-white flex flex-col items-center justify-center py-12 px-6">
                    <div className="text-cool/40 mb-4">{pillar.icon}</div>
                    <span className="text-label font-sans uppercase text-slate">{pillar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Questions</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-16 max-w-2xl leading-tight">
              Access and credits, answered
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-3xl bg-warm-white border border-subtle rounded-sm px-6 md:px-8">
              <Accordion type="single" collapsible>
                {faqs.map((item, i) => (
                  <AccordionItem key={item.q} value={`item-${i}`} className="border-subtle">
                    <AccordionTrigger className="font-serif text-lg font-semibold text-ink hover:no-underline py-6">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-body text-slate leading-relaxed font-sans">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────────── */}
      <section className="bg-warm-white border-t border-subtle">
        <div className="page-container py-16 md:py-24">
          <AnimatedSection>
            <DisclosureFull className="mb-12" />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="section-label mb-3">Next Steps</div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink leading-snug">
                  Stop telling employers what you can do. Start proving it.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link to="/simulation-based-work-experience" className="btn-primary">
                  Explore Work Experience
                </Link>
                <Link to="/apply" className="btn-secondary">
                  Apply Free
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default HowItWorks;

import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

/* ─── DATA ─────────────────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    title: "Entry & Eligibility Control",
    text: "Access is managed through structured application and screening processes to confirm suitability and ensure safeguarding and eligibility requirements are met.",
  },
  {
    num: "02",
    title: "Structured Engagement & Contribution",
    text: "Approved participants engage in defined activities aligned to real-world contexts under supervision.",
  },
  {
    num: "03",
    title: "Supervised Practice & Oversight",
    text: "Capability is observed in practice through structured oversight and feedback mechanisms.",
  },
  {
    num: "04",
    title: "Capability Evidence & Review",
    text: "Outputs and performance indicators are documented and evaluated to inform readiness decisions.",
  },
  {
    num: "05",
    title: "Progression or Referral",
    text: "Based on assessed readiness and contextual availability, individuals may progress into further practice or external pathways. Progression is not guaranteed.",
  },
];

const pillars = [
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "Safeguarding" 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 3v18"/>
        <rect x="4" y="8" width="4" height="7"/>
        <rect x="16" y="5" width="4" height="10"/>
      </svg>
    ),
    label: "Governance" 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
    label: "Accountability" 
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

const HowItWorks = () => {
  return (
    <PageTransition>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        {/* Blueprint grid pattern */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        <div className="page-container relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
          <AnimatedSection>
            {/* Accent line + Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-0.5 bg-accent-teal" />
              <p className="text-label font-sans uppercase text-accent-teal">
                Operating Model
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-hero-sm md:text-[3.5rem] lg:text-hero font-semibold text-warm-white leading-[1.1] max-w-4xl mb-8 text-balance">
              A governed operating model for workforce readiness and evidence-based progression.
            </h1>

            {/* Accent line */}
            <div className="w-12 h-0.5 bg-accent-teal mb-8" />

            {/* Subline */}
            <p className="text-body-lg text-cool leading-relaxed max-w-2xl font-sans">
              Career Bridge operates as workforce activation infrastructure. Our approach prioritises structure, accountability, and documented evidence over informal participation or unverified outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OPERATING WORKFLOW ──────────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">The Process</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-2xl leading-tight">
              Our Operating Workflow
            </h2>
            
            {/* Intro box */}
            <div className="border-l-2 border-subtle pl-6 mb-20 max-w-2xl">
              <p className="text-body text-slate leading-relaxed font-sans">
                The workflow below describes how Career Bridge governs participation, contribution, assessment, and progression.
              </p>
            </div>
          </AnimatedSection>

          {/* Vertical Timeline */}
          <StaggerContainer className="relative max-w-3xl">
            {/* Central vertical line */}
            <div className="absolute left-[31px] md:left-[39px] top-0 bottom-0 w-px bg-subtle" />

            {steps.map((step, i) => (
              <StaggerItem key={step.num}>
                <div className="relative flex gap-8 md:gap-12 mb-12 last:mb-0">
                  {/* Step number badge */}
                  <div className="relative z-10 flex flex-col items-center shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 border border-subtle bg-warm-white flex flex-col items-center justify-center">
                      <span className="mono-number text-sm text-cool/60 mb-1">
                        {step.num}
                      </span>
                      <div className="w-6 h-0.5 bg-accent-teal" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 pb-8 border-b border-subtle last:border-0">
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink mb-4 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-body text-slate leading-relaxed font-sans">
                      {step.text}
                    </p>
                    
                    {/* Final step note */}
                    {i === steps.length - 1 && (
                      <p className="mt-4 text-md font-medium text-warning font-bold font-sans">
                        Note: Progression is not guaranteed and remains contingent on readiness and availability.
                      </p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── GOVERNANCE & SAFEGUARDS ────────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <div className="section-label-center">Accountability</div>
              <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 leading-tight">
                Governance &amp; Safeguards
              </h2>
              <p className="text-body text-slate leading-relaxed font-sans mb-16">
                All activities operate within defined governance, safeguarding, and accountability frameworks to ensure alignment with public benefit obligations.
              </p>
            </div>

            {/* Pillars */}
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-subtle border border-subtle">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.label}
                    className="bg-warm-white flex flex-col items-center justify-center py-12 px-6"
                  >
                    <div className="text-cool/40 mb-4">
                      {pillar.icon}
                    </div>
                    <span className="text-label font-sans uppercase text-slate">
                      {pillar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────────── */}
      <section className="bg-warm-white border-t border-subtle">
        <div className="page-container py-16 md:py-24">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="section-label mb-3">Next Steps</div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink leading-snug">
                  Ready to begin?
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link to="/apply" className="btn-primary">
                  Apply to the Career Bridge Pathway
                </Link>
                <Link to="/partners" className="btn-secondary">
                  Partner with Career Bridge
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

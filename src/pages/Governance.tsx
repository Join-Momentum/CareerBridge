import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

/* ─── DATA ─────────────────────────────────────────────────────── */

const governanceItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: "Director Responsibilities",
    text: "Defined accountabilities for organisational leadership.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "Decision-Making Processes",
    text: "Documented procedures for organisational decisions.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Oversight Mechanisms",
    text: "Structured review and monitoring frameworks.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Risk Management",
    text: "Procedures for identifying and managing operational risks.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

const Governance = () => {
  return (
    <PageTransition>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        <div className="page-container relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
          <AnimatedSection>
            {/* Accent line + Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-0.5 bg-accent-teal" />
              <p className="text-label font-sans uppercase text-accent-teal">
                Public Benefit
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-hero-sm md:text-[3.5rem] lg:text-hero font-semibold text-warm-white leading-[1.1] max-w-4xl text-balance">
              Governance, accountability, and public benefit commitment.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LEGAL STATUS ───────────────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Registration</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-8 leading-tight">
              Legal Status
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-12 font-sans">
              Career Bridge Foundation is registered in England and Wales as a Community Interest Company (CIC).
            </p>
          </AnimatedSection>

          {/* Registration Card */}
          <AnimatedSection delay={0.1}>
            <div className="registration-card max-w-xl">
              <div className="registration-item">
                <div className="registration-label">Registration Number</div>
                <div className="registration-value">[Insert Number]</div>
              </div>
              <div className="registration-item">
                <div className="registration-label">Jurisdiction</div>
                <div className="registration-value">England and Wales</div>
              </div>
              <div className="registration-item">
                <div className="registration-label">Status</div>
                <div className="registration-value">Active Community Interest Company</div>
              </div>
            </div>
            
            <p className="text-body text-slate leading-relaxed mt-8 font-sans">
              We operate in accordance with CIC regulations and public benefit obligations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── GOVERNANCE STRUCTURE ───────────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Oversight</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-16 leading-tight">
              Governance Structure
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {governanceItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-warm-white border border-subtle p-8 md:p-10 h-full">
                  <div className="text-cool/40 mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-body text-slate leading-relaxed font-sans">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── SAFEGUARDING ───────────────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Protection</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 leading-tight">
              Safeguarding
            </h2>
            <div className="border-l-[3px] border-accent-teal pl-6 max-w-content">
              <p className="text-body text-slate leading-relaxed font-sans">
                Career Bridge maintains safeguarding policies and controls designed to protect participants, partners, and stakeholders.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── DATA PROTECTION ────────────────────────────────────────── */}
      <section className="section-spacing-sm bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Privacy</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 leading-tight">
              Data Protection
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content font-sans">
              We operate in compliance with applicable data protection legislation, including UK GDPR requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BOUNDARIES ─────────────────────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Important Notice</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-8 leading-tight">
              Boundaries &amp; Limitations
            </h2>
            
            <div className="notice-box max-w-2xl">
              <p className="text-body text-slate leading-relaxed font-sans">
                Career Bridge does not guarantee employment, income, or specific outcomes. Participation is structured, time-bound, and subject to review at defined decision points.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Governance;

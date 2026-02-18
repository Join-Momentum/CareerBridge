import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

/* ─── DATA ─────────────────────────────────────────────────────── */

const applicationSteps = [
  {
    num: "01",
    title: "Submit Application",
    text: "Complete the application form with your details and relevant background information.",
  },
  {
    num: "02",
    title: "Initial Review",
    text: "Your application will be reviewed against eligibility criteria and programme capacity.",
  },
  {
    num: "03",
    title: "Assessment & Screening",
    text: "Eligible applicants undergo structured assessment including safeguarding checks.",
  },
  {
    num: "04",
    title: "Pathway Decision",
    text: "Based on assessment outcomes, a decision is made regarding pathway entry and alignment.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

const Apply = () => {
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
                Join the Pathway
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-hero-sm md:text-[3.5rem] lg:text-hero font-semibold text-warm-white leading-[1.1] max-w-4xl mb-8 text-balance">
              Apply to Career Bridge
            </h1>

            {/* Accent line */}
            <div className="w-12 h-0.5 bg-accent-teal mb-8" />

            {/* Subline */}
            <p className="text-body-lg text-cool leading-relaxed max-w-2xl font-sans">
              Entry to the Career Bridge pathway is managed through a structured application and assessment process.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ────────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">The Process</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-16 leading-tight">
              Application Process
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {applicationSteps.map((step) => (
              <StaggerItem key={step.num}>
                <div className="h-full">
                  <div className="mono-number text-2xl mb-4">{step.num}</div>
                  <h3 className="font-serif text-lg font-semibold text-ink mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-body text-slate leading-relaxed font-sans">
                    {step.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Important Notice */}
          <AnimatedSection delay={0.2}>
            <div className="notice-box max-w-2xl">
              <p className="text-body text-slate leading-relaxed font-sans">
                <strong className="text-ink">Please note:</strong> Not all applications result in acceptance. Entry is based on eligibility, readiness indicators, and programme capacity. Career Bridge does not guarantee employment or specific outcomes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── APPLICATION CTA ────────────────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="section-label">Get Started</div>
              <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 leading-tight">
                Request Application Information
              </h2>
              <p className="text-body text-slate leading-relaxed mb-10 font-sans">
                Applications are currently managed via email. To receive information about the application process and eligibility requirements, please contact us using the button below.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:apply@careerbridge.org?subject=Application%20Information%20Request"
                  className="btn-primary"
                >
                  Request Application Information
                </a>
                <Link to="/contact" className="btn-secondary">
                  General Enquiries
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ─────────────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">What to Expect</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-8 leading-tight">
              Eligibility Considerations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              <div className="border-l-[3px] border-accent-teal pl-6">
                <h3 className="font-serif text-lg font-semibold text-ink mb-3">
                  We Consider
                </h3>
                <ul className="space-y-2 text-body text-slate font-sans">
                  <li>• Readiness to engage in structured activities</li>
                  <li>• Commitment to professional development</li>
                  <li>• Alignment with programme objectives</li>
                  <li>• Ability to meet safeguarding requirements</li>
                </ul>
              </div>
              
              <div className="border-l-[3px] border-subtle pl-6">
                <h3 className="font-serif text-lg font-semibold text-ink mb-3">
                  We Assess
                </h3>
                <ul className="space-y-2 text-body text-slate font-sans">
                  <li>• Current circumstances and availability</li>
                  <li>• Background and experience context</li>
                  <li>• Programme suitability and fit</li>
                  <li>• Capacity for supervised practice</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 dot-pattern pointer-events-none" />

        <div className="page-container relative z-10 py-20 md:py-28">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-display-sm md:text-display font-semibold text-warm-white mb-6 leading-tight">
                Questions about applying?
              </h2>
              <p className="text-body-lg text-cool leading-relaxed mb-10 font-sans">
                If you have questions about the application process or eligibility, please get in touch.
              </p>
              <Link to="/contact" className="btn-primary-light">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Apply;

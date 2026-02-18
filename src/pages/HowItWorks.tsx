import { Link } from "react-router-dom";
import { Shield, Scale, ClipboardCheck, FileText, Users, Eye, CheckCircle, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

/* ─── DATA ─────────────────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    title: "Entry & Eligibility Control",
    text: "Access is managed through structured application and screening processes to confirm suitability and ensure safeguarding and eligibility requirements are met.",
    Icon: FileText,
  },
  {
    num: "02",
    title: "Structured Engagement & Contribution",
    text: "Approved participants engage in defined activities aligned to real-world contexts under supervision.",
    Icon: Users,
  },
  {
    num: "03",
    title: "Supervised Practice & Oversight",
    text: "Capability is observed in practice through structured oversight and feedback mechanisms.",
    Icon: Eye,
  },
  {
    num: "04",
    title: "Capability Evidence & Review",
    text: "Outputs and performance indicators are documented and evaluated to inform readiness decisions.",
    Icon: ClipboardCheck,
  },
  {
    num: "05",
    title: "Progression or Referral",
    text: "Based on assessed readiness and contextual availability, individuals may progress into further practice or external pathways. Progression is not guaranteed.",
    Icon: ArrowRight,
  },
];

const pillars = [
  { Icon: Shield, label: "Safeguarding" },
  { Icon: Scale, label: "Governance" },
  { Icon: CheckCircle, label: "Accountability" },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

const HowItWorks = () => {
  return (
    <PageTransition>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary">
        {/* Fine blueprint grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary-foreground) / 1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary-foreground) / 1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="page-container relative z-10 py-24 md:py-36">
          <AnimatedSection>
            <p className="section-label text-primary-foreground/40 mb-6">Operating Model</p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground leading-tight max-w-3xl mb-6">
              A governed operating model for workforce readiness and evidence-based progression.
            </h1>
            <div className="w-10 h-px bg-accent mb-8" />
            <p className="text-base md:text-lg text-primary-foreground/65 leading-relaxed max-w-2xl font-sans">
              Career Bridge operates as workforce activation infrastructure. Our approach prioritises structure, accountability, and documented evidence over informal participation or unverified outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OPERATING WORKFLOW ──────────────────────────────────────── */}
      <section className="section-spacing section-divider bg-background">
        <div className="page-container">
          <AnimatedSection>
            <p className="section-label">The Process</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 max-w-2xl leading-snug">
              Our Operating Workflow
            </h2>
            {/* Intro with left accent */}
            <div className="border-l-2 border-border pl-5 mb-16 max-w-2xl">
              <p className="text-muted-foreground font-sans leading-relaxed">
                The workflow below describes how Career Bridge governs participation, contribution, assessment, and progression.
              </p>
            </div>
          </AnimatedSection>

          {/* Vertical timeline */}
          <StaggerContainer className="relative max-w-2xl">
            {/* Continuous vertical line */}
            <div className="absolute left-[27px] top-10 bottom-10 w-px bg-border" />

            {steps.map((step, i) => (
              <StaggerItem key={step.num}>
                <div className="flex gap-6 mb-10 last:mb-0 relative">
                  {/* Step badge */}
                  <div className="relative z-10 w-14 h-14 border border-border bg-background flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground/50 font-sans leading-none mb-0.5">
                      {step.num}
                    </span>
                    <step.Icon
                      size={16}
                      strokeWidth={1.5}
                      className="text-accent"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-1 pb-2 border-b border-border flex-1 last:border-b-0">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                      {step.text}
                    </p>
                    {/* Final step note */}
                    {i === steps.length - 1 && (
                      <p className="mt-3 text-xs font-medium text-accent font-sans tracking-wide">
                        Note: Progression is not guaranteed and is subject to assessed readiness.
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
      <section className="section-spacing section-divider bg-muted">
        <div className="page-container">
          <AnimatedSection>
            <p className="section-label text-center">Accountability</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-6 max-w-2xl mx-auto leading-snug">
              Governance &amp; Safeguards
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed text-center max-w-2xl mx-auto mb-14">
              All activities operate within defined governance, safeguarding, and accountability frameworks to ensure alignment with public benefit obligations.
            </p>

            {/* Pillars row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0 border border-border bg-background max-w-lg mx-auto">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.label}
                  className={`flex-1 flex flex-col items-center justify-center py-8 px-6 gap-3 w-full ${
                    i < pillars.length - 1 ? "border-b sm:border-b-0 sm:border-r border-border" : ""
                  }`}
                >
                  <pillar.Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-muted-foreground/50"
                  />
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans">
                    {pillar.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────────────── */}
      <section className="section-divider bg-background">
        <div className="page-container py-16 md:py-20">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="section-label mb-2">Next Steps</p>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                  Ready to begin?
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 bg-accent text-accent-foreground font-medium text-sm tracking-wide hover:bg-accent/90 transition-colors font-sans"
                >
                  Apply to the Pathway
                </Link>
                <Link
                  to="/partners"
                  className="inline-flex items-center justify-center px-7 py-3 border border-primary text-primary font-medium text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors font-sans"
                >
                  Partner with Us
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

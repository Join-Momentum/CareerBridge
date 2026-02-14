import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const HowItWorks = () => {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="section-spacing bg-card">
        <div className="page-container">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                A governed operating model for workforce readiness and evidence-based progression.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Career Bridge operates as workforce activation infrastructure. Our approach prioritises structure, accountability, and documented evidence over informal participation or unverified outcomes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OPERATING WORKFLOW */}
      <section className="section-spacing">
        <div className="page-container">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Operating Workflow
            </h2>
            <p className="text-muted-foreground mb-12">
              The workflow below describes how Career Bridge governs participation, contribution, assessment, and progression.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-6 max-w-3xl">
            {[
              {
                step: 1,
                title: "Entry & Eligibility Control",
                text: "Access is managed through structured application and screening processes to confirm suitability and ensure safeguarding and eligibility requirements are met.",
              },
              {
                step: 2,
                title: "Structured Engagement & Contribution",
                text: "Approved participants engage in defined activities aligned to real-world contexts under supervision.",
              },
              {
                step: 3,
                title: "Supervised Practice & Oversight",
                text: "Capability is observed in practice through structured oversight and feedback mechanisms.",
              },
              {
                step: 4,
                title: "Capability Evidence & Review",
                text: "Outputs and performance indicators are documented and evaluated to inform readiness decisions.",
              },
              {
                step: 5,
                title: "Progression or Referral",
                text: "Based on assessed readiness and contextual availability, individuals may progress into further practice or external pathways. Progression is not guaranteed.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex gap-5 p-6 rounded-lg border border-border bg-card card-hover">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* GOVERNANCE & SAFEGUARDS */}
      <section className="section-spacing bg-card">
        <div className="page-container">
          <AnimatedSection>
            <div className="max-w-3xl p-8 rounded-lg border border-border bg-background">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Governance & Safeguards</h2>
              <p className="text-muted-foreground leading-relaxed">
                All activities operate within defined governance, safeguarding, and accountability frameworks to ensure alignment with public benefit obligations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default HowItWorks;

import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const Governance = () => {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="section-spacing bg-card">
        <div className="page-container">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight max-w-3xl">
              Governance, accountability, and public benefit commitment.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* LEGAL STATUS */}
      <section className="section-spacing">
        <div className="page-container max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Legal Status</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Career Bridge Foundation is registered in England and Wales as a Community Interest Company (CIC).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Registration Number: [Insert Number]
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We operate in accordance with CIC regulations and public benefit obligations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="page-container"><div className="h-px bg-border" /></div>

      {/* GOVERNANCE STRUCTURE */}
      <section className="section-spacing">
        <div className="page-container max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Governance Structure</h2>
          </AnimatedSection>
          <StaggerContainer className="space-y-3">
            {[
              "Defined director responsibilities",
              "Documented decision-making processes",
              "Oversight mechanisms",
              "Risk management procedures",
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
                  <div className="w-2 h-2 rounded-full gradient-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="page-container"><div className="h-px bg-border" /></div>

      {/* SAFEGUARDING */}
      <section className="section-spacing">
        <div className="page-container max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Safeguarding</h2>
            <p className="text-muted-foreground leading-relaxed">
              Career Bridge maintains safeguarding policies and controls designed to protect participants, partners, and stakeholders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="page-container"><div className="h-px bg-border" /></div>

      {/* DATA PROTECTION */}
      <section className="section-spacing">
        <div className="page-container max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              We operate in compliance with applicable data protection legislation, including UK GDPR requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="page-container"><div className="h-px bg-border" /></div>

      {/* BOUNDARIES */}
      <section className="section-spacing">
        <div className="page-container max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Boundaries</h2>
            <p className="text-muted-foreground leading-relaxed">
              Career Bridge does not guarantee employment, income, or specific outcomes. Participation is structured, time-bound, and subject to review at defined decision points.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Governance;

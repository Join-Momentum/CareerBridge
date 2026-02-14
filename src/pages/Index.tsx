import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const Index = () => {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="section-spacing bg-card">
        <div className="page-container">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Workforce Activation & Capability Evidence
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Career Bridge Foundation is a Community Interest Company operating structured, evidence-based pathways that support individuals to demonstrate real-world capability and progress through readiness-aligned opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all"
                >
                  Apply to the Career Bridge Pathway
                </Link>
                <Link
                  to="/partners"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-secondary text-secondary-foreground border border-primary font-medium text-sm hover:bg-muted transition-all"
                >
                  Partner with Career Bridge
                </Link>
              </div>
            </div>
          </AnimatedSection>
          {/* Abstract pattern */}
          <div className="mt-12 h-px bg-border" />
          <div className="mt-8 grid grid-cols-4 gap-4 opacity-20">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="h-1 rounded-full gradient-primary" style={{ width: `${30 + Math.random() * 70}%` }} />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section-spacing">
        <div className="page-container">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Workforce Activation Infrastructure
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Career Bridge operates structured readiness pathways designed to address barriers to workforce participation and capability development. Our focus is on contribution, evidence, and responsible progression.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Workforce Activation Protocols",
                text: "We design structured pathways that move individuals from exclusion or underutilisation into practical contribution under defined standards and expectations.",
              },
              {
                title: "Practical Capability Development",
                text: "Participants engage in real-world activities and supervised tasks that reflect professional environments rather than simulated or purely academic exercises.",
              },
              {
                title: "Capability Evidence & Validation",
                text: "Outputs and performance indicators are reviewed through structured evaluation processes to ensure readiness is demonstrated through evidence.",
              },
              {
                title: "Talent Pipeline & Delivery Partnerships",
                text: "We collaborate with employers and delivery partners to support readiness-assessed talent pathways aligned to public benefit objectives.",
              },
            ].map((block, i) => (
              <StaggerItem key={i}>
                <div className="p-6 rounded-lg border border-border bg-card card-hover">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{block.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CAREER READINESS BLUEPRINT */}
      <section className="section-spacing bg-card">
        <div className="page-container">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              A structured pathway from potential to proven readiness.
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-12 leading-relaxed">
              The Career Readiness Blueprint defines the staged framework through which individuals may progress from entry and assessment through structured contribution, capability evidence, and progression into appropriate next-step opportunities.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-4 max-w-2xl">
            {[
              "Entry & Application",
              "Baseline Assessment",
              "Structured Contribution",
              "Pathway Alignment",
              "Practice & Increased Responsibility",
              "Supervised Practice",
              "Progression Outcomes",
            ].map((stage, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm font-medium text-foreground">{stage}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3}>
            <p className="text-sm text-muted-foreground mt-8 italic">
              Progression is based on demonstrated readiness and assessed outputs, not time served or credentials held.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-spacing">
        <div className="page-container">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              A Community Interest Company operating for public benefit.
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-12 leading-relaxed">
              Career Bridge Foundation is a social enterprise organisation established to address barriers to workforce participation and readiness. We operate structured, evidence-based pathways that enable individuals to demonstrate real-world capability while supporting organisations with readiness-assessed talent aligned to public benefit outcomes.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-3">Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A workforce ecosystem where capability is evidenced, access is fair, and opportunity is aligned to readiness.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-3">Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To design and operate practical readiness pathways that support individuals to progress through contribution, evidence, and supervised practice while serving the public interest.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-3">Commitment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We operate with clear governance, safeguarding, and accountability to ensure responsible and transparent delivery.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;

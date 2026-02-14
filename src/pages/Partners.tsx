import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const Partners = () => {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="section-spacing bg-card">
        <div className="page-container">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                Structured collaboration for responsible workforce activation.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Career Bridge works with delivery partners, employers, and institutions to support readiness-assessed talent pathways and responsible workforce engagement.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PARTNER TYPES */}
      <section className="section-spacing">
        <div className="page-container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Delivery Partners",
                text: "Organisations supporting structured contribution and supervised practice environments.",
              },
              {
                title: "Employers & Institutions",
                text: "Entities seeking readiness-assessed individuals aligned to defined role expectations.",
              },
              {
                title: "Ecosystem Collaborators",
                text: "Strategic collaborators contributing expertise, supervision, or programme infrastructure.",
              },
            ].map((type, i) => (
              <StaggerItem key={i}>
                <div className="p-6 rounded-lg border border-border bg-card card-hover h-full">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{type.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{type.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PARTNERSHIP PRINCIPLES */}
      <section className="section-spacing bg-card">
        <div className="page-container">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
              Partnership Principles
            </h2>
          </AnimatedSection>
          <StaggerContainer className="space-y-3 max-w-2xl">
            {[
              "Clear scope definition",
              "Defined responsibilities",
              "Safeguarding compliance",
              "Evidence-based evaluation",
              "Public benefit alignment",
            ].map((principle, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background">
                  <div className="w-2 h-2 rounded-full gradient-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{principle}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3}>
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all"
              >
                Partner with Career Bridge
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Partners;

import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

/* ─── DATA ─────────────────────────────────────────────────────── */

const whatWeDo = [
  {
    num: "01",
    title: "Workforce Activation Protocols",
    text: "We design structured pathways that move individuals from exclusion or underutilisation into practical contribution under defined standards and expectations.",
  },
  {
    num: "02",
    title: "Practical Capability Development",
    text: "Participants engage in real-world activities and supervised tasks that reflect professional environments rather than simulated or purely academic exercises.",
  },
  {
    num: "03",
    title: "Capability Evidence & Validation",
    text: "Outputs and performance indicators are reviewed through structured evaluation processes to ensure readiness is demonstrated through evidence.",
  },
  {
    num: "04",
    title: "Talent Pipeline & Delivery Partnerships",
    text: "We collaborate with employers and delivery partners to support readiness-assessed talent pathways aligned to public benefit objectives.",
  },
];

const stages = [
  "Entry & Application",
  "Baseline Assessment",
  "Structured Contribution",
  "Pathway Alignment",
  "Practice & Increased Responsibility",
  "Supervised Practice",
  "Progression Outcomes",
];

const pillars = [
  {
    label: "Vision",
    text: "A workforce ecosystem where capability is evidenced, access is fair, and opportunity is aligned to readiness.",
  },
  {
    label: "Mission",
    text: "To design and operate practical readiness pathways that support individuals to progress through contribution, evidence, and supervised practice while serving the public interest.",
  },
  {
    label: "Commitment",
    text: "We operate with clear governance, safeguarding, and accountability to ensure responsible and transparent delivery.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

const Index = () => {
  return (
    <PageTransition>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary">
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

        {/* Subtle corner geometry */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] border border-primary-foreground/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[280px] h-[280px] border border-primary-foreground/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="page-container relative z-10 py-24 md:py-36">
          <AnimatedSection>
            {/* Eyebrow */}
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/50 mb-8">
              Career Bridge Foundation &mdash; Community Interest Company
            </p>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight max-w-3xl mb-6">
              Workforce Activation &amp; Capability Evidence
            </h1>

            {/* Thin rule */}
            <div className="w-12 h-px bg-accent mb-8" />

            {/* Subline */}
            <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mb-10 font-sans">
              Career Bridge Foundation is a Community Interest Company operating structured, evidence-based pathways that support individuals to demonstrate real-world capability and progress through readiness-aligned opportunities.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-sm bg-accent text-accent-foreground font-medium text-sm tracking-wide hover:bg-accent/90 transition-colors"
              >
                Apply to the Career Bridge Pathway
              </Link>
              <Link
                to="/partners"
                className="inline-flex items-center justify-center px-7 py-3 rounded-sm border border-primary-foreground/30 text-primary-foreground/80 font-medium text-sm tracking-wide hover:border-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Partner with Career Bridge
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT WE DO ──────────────────────────────────────────────── */}
      <section className="section-spacing section-divider bg-background">
        <div className="page-container">
          <AnimatedSection>
            <p className="section-label">Our Work</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 max-w-2xl leading-snug">
              Workforce Activation Infrastructure
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-14 font-sans">
              Career Bridge operates structured readiness pathways designed to address barriers to workforce participation and capability development. Our focus is on contribution, evidence, and responsible progression.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {whatWeDo.map((block) => (
              <StaggerItem key={block.num}>
                <div className="bg-background p-8 h-full">
                  <span className="block text-xs font-bold tracking-widest text-muted-foreground/60 mb-4 font-sans">
                    {block.num}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3 leading-snug">
                    {block.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {block.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CAREER READINESS BLUEPRINT ──────────────────────────────── */}
      <section className="section-spacing section-divider bg-muted">
        <div className="page-container">
          <AnimatedSection>
            <p className="section-label">The Framework</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 max-w-2xl leading-snug">
              A structured pathway from potential to proven readiness.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-14 font-sans">
              The Career Readiness Blueprint defines the staged framework through which individuals may progress from entry and assessment through structured contribution, capability evidence, and progression into appropriate next-step opportunities.
            </p>
          </AnimatedSection>

          {/* Vertical timeline */}
          <StaggerContainer className="relative max-w-xl">
            {/* Vertical rule */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

            {stages.map((stage, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-5 mb-6 last:mb-0 relative">
                  {/* Step circle */}
                  <div className="relative z-10 w-10 h-10 rounded-full border-2 border-border bg-background flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-foreground font-sans">{i + 1}</span>
                  </div>
                  {/* Label */}
                  <div className="pt-2">
                    <span className="text-sm font-medium text-foreground font-sans">{stage}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Closing callout */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 max-w-xl border-l-2 border-accent pl-5">
              <p className="text-sm italic text-muted-foreground font-sans">
                Progression is based on demonstrated readiness and assessed outputs, not time served or credentials held.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section className="section-spacing section-divider bg-background">
        <div className="page-container">
          <AnimatedSection>
            <p className="section-label">About Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 max-w-2xl leading-snug">
              A Community Interest Company operating for public benefit.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-14 font-sans">
              Career Bridge Foundation is a social enterprise organisation established to address barriers to workforce participation and readiness. We operate structured, evidence-based pathways that enable individuals to demonstrate real-world capability while supporting organisations with readiness-assessed talent aligned to public benefit outcomes.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((item) => (
              <StaggerItem key={item.label}>
                <div className="border-l-2 border-accent pl-6 py-2">
                  <h3 className="font-serif text-base font-semibold text-foreground mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </PageTransition>
  );
};

export default Index;

import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -12, 0],
      rotate: [0, 3, -3, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const Index = () => {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="section-spacing bg-card relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large gradient orb top-right */}
          <FloatingShape
            className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-[0.07] gradient-primary blur-3xl"
            delay={0}
          />
          {/* Smaller orb bottom-left */}
          <FloatingShape
            className="absolute bottom-0 -left-16 w-[280px] h-[280px] rounded-full opacity-[0.05] gradient-primary blur-2xl"
            delay={2}
          />
          {/* Grid pattern */}
          <div className="absolute top-12 right-12 w-48 h-48 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle, hsl(203 96% 36%) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />
          {/* Diagonal lines */}
          <svg className="absolute bottom-16 right-1/4 opacity-[0.06]" width="120" height="120" viewBox="0 0 120 120">
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={i} x1={0} y1={i * 24} x2={120} y2={i * 24} stroke="currentColor" strokeWidth="1" className="text-primary" />
            ))}
          </svg>
        </div>

        <div className="page-container relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              {/* Accent bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="h-1 rounded-full gradient-primary mb-8"
              />
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

          {/* Abstract data-viz pattern */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-end gap-1.5 h-16 opacity-15"
            >
              {Array.from({ length: 32 }).map((_, i) => {
                const height = 8 + Math.sin(i * 0.5) * 20 + Math.random() * 24;
                return (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.03, ease: "easeOut" }}
                    className="flex-1 rounded-t-sm gradient-primary"
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section-spacing relative overflow-hidden">
        {/* Subtle cross-hatch pattern */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-8 left-8 w-32 h-32 opacity-[0.03] border border-primary rounded-lg rotate-12" />
          <div className="absolute top-16 left-16 w-32 h-32 opacity-[0.03] border border-accent rounded-lg rotate-12" />
        </div>

        <div className="page-container relative z-10">
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
                <div className="group p-6 rounded-lg border border-border bg-card card-hover relative overflow-hidden">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-[0.06] gradient-primary rounded-bl-[40px]" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{block.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CAREER READINESS BLUEPRINT */}
      <section className="section-spacing bg-card relative overflow-hidden">
        {/* Vertical dotted line accent */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(to bottom, hsl(203 96% 36%), hsl(203 96% 36%) 4px, transparent 4px, transparent 12px)`,
          }}
        />

        <div className="page-container relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              A structured pathway from potential to proven readiness.
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-12 leading-relaxed">
              The Career Readiness Blueprint defines the staged framework through which individuals may progress from entry and assessment through structured contribution, capability evidence, and progression into appropriate next-step opportunities.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-3 max-w-2xl">
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
                <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background group card-hover">
                  <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-foreground">{stage}</span>
                  </div>
                  {/* Progress indicator */}
                  <div className="hidden sm:block w-24 h-1 rounded-full bg-border overflow-hidden">
                    <motion.div
                      className="h-full gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${((i + 1) / 7) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
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
      <section className="section-spacing relative overflow-hidden">
        {/* Abstract circles */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingShape
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-primary opacity-[0.04]"
            delay={1}
          />
          <FloatingShape
            className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border border-accent opacity-[0.06]"
            delay={3}
          />
        </div>

        <div className="page-container relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              A Community Interest Company operating for public benefit.
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-12 leading-relaxed">
              Career Bridge Foundation is a social enterprise organisation established to address barriers to workforce participation and readiness. We operate structured, evidence-based pathways that enable individuals to demonstrate real-world capability while supporting organisations with readiness-assessed talent aligned to public benefit outcomes.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Vision", text: "A workforce ecosystem where capability is evidenced, access is fair, and opportunity is aligned to readiness." },
              { title: "Mission", text: "To design and operate practical readiness pathways that support individuals to progress through contribution, evidence, and supervised practice while serving the public interest." },
              { title: "Commitment", text: "We operate with clear governance, safeguarding, and accountability to ensure responsible and transparent delivery." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="p-6 rounded-lg border border-border bg-card card-hover relative overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 gradient-primary" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
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

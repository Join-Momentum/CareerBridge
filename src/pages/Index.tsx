import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { ChevronDown } from "lucide-react";
import TwoPathwaysSection from "@/components/TwoPathwaysSection";

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
      <section className="relative min-h-screen flex items-center bg-ink overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-warm-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-warm-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-warm-white/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="page-container relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
          <AnimatedSection>
            {/* Accent line + Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-0.5 bg-accent-teal" />
              <p className="text-label font-sans uppercase text-accent-teal">
                Workforce Activation Infrastructure
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-hero-sm md:text-hero font-semibold text-warm-white leading-[1.1] max-w-4xl mb-8 text-balance">
              Workforce Activation &amp; Capability Evidence
            </h1>

            {/* Subline */}
            <p className="text-body-lg text-cool leading-relaxed max-w-2xl mb-12 font-sans">
              Career Bridge Foundation is a Community Interest Company operating structured, evidence-based pathways that support individuals to demonstrate real-world capability and progress through readiness-aligned opportunities.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply" className="btn-primary-light">
                Apply to the Career Bridge Pathway
              </Link>
              <Link to="/partners" className="btn-secondary-light">
                Partner with Career Bridge
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-cool/40"
          >
            <ChevronDown size={24} strokeWidth={1.5} />
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE DO ──────────────────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Our Work</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-2xl leading-tight">
              Workforce Activation Infrastructure
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-16 font-sans">
              Career Bridge operates structured readiness pathways designed to address barriers to workforce participation and capability development. Our focus is on contribution, evidence, and responsible progression.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-subtle">
            {whatWeDo.map((block) => (
              <StaggerItem key={block.num}>
                <div className="bg-warm-white p-8 md:p-12 h-full group">
                  <div className="flex items-start gap-6">
                    <span className="mono-number text-xl font-medium">
                      {block.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold text-ink mb-4 leading-snug group-hover:text-accent-teal transition-colors duration-300">
                        {block.title}
                      </h3>
                      <p className="text-body text-slate leading-relaxed font-sans">
                        {block.text}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CAREER READINESS BLUEPRINT ──────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">The Framework</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-3xl leading-tight">
              A structured pathway from potential to proven readiness.
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-16 font-sans">
              The Career Readiness Blueprint defines the staged framework through which individuals may progress from entry and assessment through structured contribution, capability evidence, and progression into appropriate next-step opportunities.
            </p>
          </AnimatedSection>

          {/* Horizontal stepped process (desktop) / Vertical (mobile) */}
          <div className="relative">
            {/* Desktop: Horizontal layout */}
            <div className="hidden lg:block">
              <StaggerContainer className="relative">
                {/* Connection line */}
                <div className="absolute top-6 left-0 right-0 h-px bg-subtle" />
                
                <div className="grid grid-cols-7 gap-4">
                  {stages.map((stage, i) => (
                    <StaggerItem key={i}>
                      <div className={`relative ${i % 2 === 0 ? 'pt-0' : 'pt-16'}`}>
                        {/* Step number circle */}
                        <div className="relative z-10 w-12 h-12 rounded-full border-2 border-subtle bg-warm-white flex items-center justify-center mx-auto mb-4">
                          <span className="font-mono text-sm font-medium text-ink">{i + 1}</span>
                        </div>
                        {/* Label */}
                        <p className="text-sm font-sans font-medium text-ink text-center leading-snug">
                          {stage}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>

            {/* Mobile: Vertical timeline */}
            <div className="lg:hidden">
              <StaggerContainer className="relative max-w-md">
                {/* Vertical line */}
                <div className="absolute left-6 top-2 bottom-2 w-px bg-subtle" />

                {stages.map((stage, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-6 mb-6 last:mb-0 relative">
                      {/* Step circle */}
                      <div className="relative z-10 w-12 h-12 rounded-full border-2 border-subtle bg-warm-white flex items-center justify-center shrink-0">
                        <span className="font-mono text-sm font-medium text-ink">{i + 1}</span>
                      </div>
                      {/* Label */}
                      <div className="pt-3">
                        <span className="text-body font-sans font-medium text-ink">{stage}</span>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Callout */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 max-w-2xl border-l-2 border-accent-teal pl-6">
              <p className="text-body italic text-slate font-sans">
                Progression is based on demonstrated readiness and assessed outputs, not time served or credentials held.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">About Us</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-3xl leading-tight">
              A Community Interest Company operating for public benefit.
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-16 font-sans">
              Career Bridge Foundation is a social enterprise organisation established to address barriers to workforce participation and readiness. We operate structured, evidence-based pathways that enable individuals to demonstrate real-world capability while supporting organisations with readiness-assessed talent aligned to public benefit outcomes.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((item) => (
              <StaggerItem key={item.label}>
                <div className="border-l-[3px] border-accent-teal pl-6 py-2">
                  <h3 className="font-serif text-lg font-semibold text-ink mb-3">
                    {item.label}
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
      
      {/* ── TWO PATHWAYS ─────────────────────────────────────────────── */}
      <TwoPathwaysSection />

      {/* ── CTA SECTION ─────────────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 dot-pattern pointer-events-none" />

        <div className="page-container relative z-10 py-20 md:py-28">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-display-sm md:text-display font-semibold text-warm-white mb-8 leading-tight">
                Begin your pathway.
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/apply" className="btn-primary-light">
                  Apply to the Career Bridge Pathway
                </Link>
                <Link to="/partners" className="btn-secondary-light">
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

export default Index;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const pathways = [
  {
    title: "Individual Talent Pathways",
    text: "Structured readiness pathways supporting individuals through contribution, supervised practice, and capability evidence aligned to professional standards.",
    cta: "Explore Talent Pathways",
    href: "/apply",
    tag: "Pathway Track",
    num: "01",
  },
  {
    title: "Enterprise Capability & Partnerships",
    text: "Career Bridge collaborates with employers, public sector organisations, and ecosystem partners to supply readiness-assessed talent aligned to digital transformation and workforce modernisation priorities.",
    cta: "Explore Enterprise Partnerships",
    href: "/partners",
    tag: "Partnership Track",
    num: "02",
  },
];

const TwoPathwaysSection = () => {
  return (
    <section className="section-spacing bg-warm-white border-t border-subtle">
      <div className="page-container">
        <AnimatedSection>
          {/* Accent line + label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-0.5 bg-accent-teal" />
            <p className="text-label font-sans uppercase text-accent-teal">
              Two Operating Tracks
            </p>
          </div>

          {/* Title */}
          <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-3xl leading-tight text-balance">
            Two Pathways. One Workforce Activation Engine.
          </h2>

          {/* Optional supporting line (kept minimal + institutional) */}
          <p className="text-body text-slate leading-relaxed max-w-content mb-14 font-sans">
            Career Bridge operates two structured tracks—one designed to govern individual readiness progression, and one designed to support enterprise-aligned delivery partnerships.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {pathways.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="group h-full"
              >
                <div className="relative h-full bg-warm-white border border-subtle overflow-hidden">
                  {/* subtle corner accent */}
                  <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-accent-teal/70 via-accent-teal/0 to-accent-teal/0 opacity-70" />

                  {/* inner padding */}
                  <div className="p-8 md:p-10 h-full flex flex-col">
                    {/* top row: number + tag */}
                    <div className="flex items-start justify-between gap-6 mb-8">
                      <div className="flex items-center gap-4">
                        <span className="mono-number text-xl font-medium">
                          {item.num}
                        </span>
                        <span className="text-xs font-sans uppercase tracking-wide text-slate border border-subtle px-3 py-1">
                          {item.tag}
                        </span>
                      </div>

                      {/* tiny accent indicator */}
                      <div className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent-teal/80" />
                      </div>
                    </div>

                    {/* content */}
                    <h3 className="font-serif text-2xl font-semibold text-ink mb-4 leading-snug group-hover:text-accent-teal transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-body text-slate leading-relaxed font-sans mb-10 max-w-[60ch]">
                      {item.text}
                    </p>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link
                        to={item.href}
                        className="inline-flex items-center gap-3 font-sans text-sm font-medium text-ink border-b border-transparent group-hover:border-accent-teal transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/50"
                      >
                        <span className="group-hover:text-accent-teal transition-colors duration-300">
                          {item.cta}
                        </span>

                        <motion.span
                          aria-hidden="true"
                          initial={{ x: 0, opacity: 0.75 }}
                          whileHover={{ x: 4, opacity: 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="text-accent-teal"
                        >
                          <ArrowRight size={16} strokeWidth={1.75} />
                        </motion.span>
                      </Link>

                      {/* subtle divider line */}
                      <div className="mt-6 h-px w-full bg-subtle" />

                      {/* micro-detail line */}
                      <p className="mt-5 text-xs font-sans text-slate leading-relaxed">
                        Structured scope • Defined standards • Evidence-based progression
                      </p>
                    </div>
                  </div>

                  {/* hover border accent (very subtle) */}
                  <div className="pointer-events-none absolute inset-0 border border-accent-teal/0 group-hover:border-accent-teal/30 transition-colors duration-300" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TwoPathwaysSection;
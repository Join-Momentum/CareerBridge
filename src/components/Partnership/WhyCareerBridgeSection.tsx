import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import AbstractParallax from "../AbstractParallax";

const whyCareerBridge = [
  "Structured eligibility screening",
  "Evidence-based progression decisions",
  "Public benefit alignment",
  "Safeguarding & governance controls",
  "Pipeline-based, not ad hoc recruitment",
];

export const WhyCareerBridgeSection = () => {
  return (
    <section className="section-spacing bg-warm-grey border-t border-subtle">
        <AbstractParallax />
      <div className="page-container">
        <AnimatedSection>
          <div className="section-label">Rationale</div>
          <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-3xl leading-tight text-balance">
            Why Career Bridge
          </h2>
          <p className="text-body text-slate leading-relaxed max-w-content mb-12 font-sans">
            An operating model designed around governance, supervised contribution, and documented readiness decisions.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {whyCareerBridge.map((item, idx) => (
            <StaggerItem key={item}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-warm-white border border-subtle p-8 md:p-10 group h-full"
              >
                {/* top row */}
                <div className="flex items-start justify-between gap-6 mb-7">
                  <span className="mono-number text-xl font-medium">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center group-hover:border-accent-teal/40 transition-colors duration-300">
                    <ShieldCheck size={16} strokeWidth={1.8} className="text-accent-teal" />
                  </div>
                </div>

                <p className="text-body text-slate leading-relaxed font-sans">
                  {item}
                </p>

                {/* subtle bottom line */}
                <div className="mt-8 h-px w-full bg-subtle" />
                <p className="mt-4 text-xs font-sans text-slate/90">
                  Defined controls • Documented standards • Responsible progression
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
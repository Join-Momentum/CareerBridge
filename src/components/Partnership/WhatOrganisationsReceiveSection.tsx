import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import AbstractParallax from "@/components/AbstractParallax";

const items = [
  "Access to readiness-assessed talent",
  "Structured pilot engagements",
  "Supervised contribution environments",
  "Capability evidence aligned to role requirements",
  "Alignment to Microsoft digital skills frameworks (where applicable)",
];

const WhatOrganisationsReceiveSection = () => {
  return (
    <section className="relative section-spacing bg-warm-white border-t border-subtle overflow-hidden">
      {/* abstract motion background */}
      <AbstractParallax />

      <div className="page-container relative z-10">
        <AnimatedSection>
          <div className="section-label">For Organisations</div>
          <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-3xl leading-tight text-balance">
            What organisations receive
          </h2>
          <p className="text-body text-slate leading-relaxed max-w-content mb-14 font-sans">
            Structured engagement outputs designed to support readiness-assessed participation and role-aligned evidence.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item) => (
            <StaggerItem key={item}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative bg-warm-white border border-subtle p-8 md:p-9 group"
              >
                {/* top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent-teal/30" />

                <div className="flex items-start gap-5">
                  <div className="mt-1 w-9 h-9 rounded-full border border-subtle flex items-center justify-center shrink-0 group-hover:border-accent-teal/40 transition-colors duration-300">
                    <Check size={16} strokeWidth={2} className="text-accent-teal" />
                  </div>

                  <p className="text-body text-slate leading-relaxed font-sans">
                    {item}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhatOrganisationsReceiveSection;
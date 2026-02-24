import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export const PublicSectorAlignmentSection = () => {
  return (
    <section className="section-spacing bg-warm-white border-t border-subtle">
      <div className="page-container">
        <AnimatedSection>
          <div className="section-label">Alignment</div>
          <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-3xl leading-tight text-balance">
            Public sector alignment
          </h2>

          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative bg-warm-white border border-subtle p-8 md:p-10 overflow-hidden"
          >
            {/* accent edge */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-teal" />

            {/* subtle texture layer (optional class you already use elsewhere) */}
            <div className="absolute inset-0 dot-pattern pointer-events-none opacity-[0.12]" />

            <div className="relative z-10">
              <p className="text-body text-slate leading-relaxed font-sans max-w-[75ch]">
                Career Bridge’s workforce activation model aligns with current UK Government digital transformation initiatives and Microsoft-supported certification expansion efforts designed to strengthen public sector digital capability.
              </p>

              {/* micro note line: keeps it grounded, non-claiming */}
              <div className="mt-8 h-px w-full bg-subtle" />
              <p className="mt-4 text-xs font-sans text-slate/90">
                Alignment only • No partnership claims • Evidence-based model
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { PublicSectorAlignmentSection } from "@/components/Partnership/PublicSectorAlignmentSection";
import { WhyCareerBridgeSection } from "@/components/Partnership/WhyCareerBridgeSection";
import  WhatOrganisationsReceiveSection  from "@/components/Partnership/WhatOrganisationsReceiveSection";
import AbstractParallax from "@/components/AbstractParallax";
import { Button } from "@/components/ui/button";

/* ─── DATA ─────────────────────────────────────────────────────── */

const partnerTypes = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
    title: "Delivery Partners",
    text: "Organisations supporting structured contribution and supervised practice environments.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: "Employers & Institutions",
    text: "Entities seeking readiness-assessed individuals aligned to defined role expectations.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="12" cy="5" r="3"/>
        <path d="M12 8v14"/>
        <circle cx="5" cy="19" r="3"/>
        <circle cx="19" cy="19" r="3"/>
        <path d="M5 16v-3h14v3"/>
      </svg>
    ),
    title: "Ecosystem Collaborators",
    text: "Strategic collaborators contributing expertise, supervision, or programme infrastructure.",
  },
];

const principles = [
  { num: "01", text: "Clear scope definition" },
  { num: "02", text: "Defined responsibilities" },
  { num: "03", text: "Safeguarding compliance" },
  { num: "04", text: "Evidence-based evaluation" },
  { num: "05", text: "Public benefit alignment" },
];

const Partners = () => {
  return (
    <PageTransition>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        <div className="page-container flex flex-col gap-10 justify-between relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
          <AnimatedSection>
            {/* Accent line + Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-0.5 bg-accent-teal" />
              <p className="text-label font-sans uppercase text-accent-teal">
                Collaboration
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-hero-sm md:text-[3.5rem] lg:text-hero font-semibold text-warm-white leading-[1.1] max-w-4xl mb-8 text-balance">
              Workforce Capability Supply for Digital Transformation
            </h1>

            {/* Accent line */}
            <div className="w-12 h-0.5 bg-accent-teal mb-8" />

            {/* Subline */}
            <p className="text-body-lg text-cool leading-relaxed max-w-2xl font-sans">
              Career Bridge works with delivery partners, employers, and institutions to support readiness-assessed talent pathways and responsible workforce engagement.
            </p>
          </AnimatedSection>
          <AnimatedSection className="flex justify-center items-end w-[18rem] mt-10 md:mt-0">
            <Link to="/contact" className="btn-primary-light">
                Enquire About Partnership
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <AbstractParallax />

      {/* ── PARTNER TYPES ──────────────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Who We Work With</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-16 leading-tight">
              Partner Types
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {partnerTypes.map((type) => (
              <StaggerItem key={type.title}>
                <div className="card card-hover h-full">
                  <div className="text-cool/40 mb-6">
                    {type.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4 leading-snug">
                    {type.title}
                  </h3>
                  <p className="text-body text-slate leading-relaxed font-sans">
                    {type.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <WhatOrganisationsReceiveSection />
      <WhyCareerBridgeSection />
      <PublicSectorAlignmentSection />

      {/* ── PARTNERSHIP PRINCIPLES ─────────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Our Standards</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-16 leading-tight">
              Partnership Principles
            </h2>
          </AnimatedSection>

          <StaggerContainer className="max-w-2xl">
            {principles.map((principle, i) => (
              <StaggerItem key={principle.num}>
                <div className={`flex items-center gap-6 py-5 ${i < principles.length - 1 ? 'border-b border-subtle' : ''}`}>
                  <span className="mono-number text-lg">
                    {principle.num}
                  </span>
                  <span className="text-body font-sans font-medium text-ink">
                    {principle.text}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 dot-pattern pointer-events-none" />

        <div className="page-container relative z-10 py-20 md:py-28">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-display-sm md:text-display font-semibold text-warm-white mb-6 leading-tight">
                Partner with Career Bridge
              </h2>
              <p className="text-body-lg text-cool leading-relaxed mb-10 font-sans">
                Organisations aligned with our mission and standards are invited to explore collaboration.
              </p>
              <Link to="/contact" className="btn-primary-light">
                Enquire About Partnership
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Partners;

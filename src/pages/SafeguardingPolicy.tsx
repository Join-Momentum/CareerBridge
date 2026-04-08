import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const SafeguardingPolicy = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="page-container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-0.5 bg-accent-teal" />
            <p className="text-label font-sans uppercase text-accent-teal">Policy</p>
          </div>
          <h1 className="font-serif text-hero-sm md:text-[3.5rem] font-semibold text-warm-white leading-[1.1] max-w-3xl">
            Safeguarding Policy
          </h1>
          <p className="text-body-sm ml-3 text-cool leading-relaxed max-w-2xl font-sans">Effective Date: 14th February 2026</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Content */}
    <section className="section-spacing bg-warm-white border-t border-subtle">
      <div className="page-container max-w-content">
        <AnimatedSection className="pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Statement of Commitment
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans">
            Career Bridge Foundation is committed to safeguarding and promoting the welfare of:
          </p>
          <ul className="space-y-3 mb-10 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Children and young people</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Vulnerable adults</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">All programme participants</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            We adopt a zero-tolerance approach to abuse, exploitation, harassment or misconduct.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Safeguarding Lead
          </h2>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans font-medium">
            Career Bridge Foundation
          </p>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans font-medium">
            Named Safeguarding Lead: Nneka Mba
          </p>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans">
            Email: <a href="mailto:outreach@careerbridgefoundation.com">outreach@careerbridgefoundation.com</a> 
          </p>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans">
            The Safeguarding Lead is responsible for receiving, recording and managing safeguarding concerns.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Scope
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            The policy applies to:
          </p>
          <ul className="space-y-3 mb-8 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Directors</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Staff</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Volunteers</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Contractors</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Mentors</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Programme participants</span>
            </li>
          </ul>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Reporting Procedure
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            All safeguarding concerns must be reported promply to the Safeguarding Lead.
          </p>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            Concerns will be:
          </p>
          <ul className="space-y-3 mb-8 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Documented</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Assessed</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Escalated to appropriate authorities where necessary</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed font-sans">
            Confidentiality will be maintained subject to legal safeguarding obligations
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Online Delivery Safeguards
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            Where services are delivered via digital platforms including community platforms and video conferencing tools:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Moderation standards apply</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Inappropriate conduct may result in removal</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Safeguarding reporting channels remain active</span>
            </li>
          </ul>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Safer Recruitment
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            Where working directly with minors or vulnerable adults:
          </p>
          <ul className="space-y-3 mb-8 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">DBS checks may be required</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">References may be obtained</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Clear role boundaries will be established</span>
            </li>
          </ul>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default SafeguardingPolicy;

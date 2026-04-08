import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const DataProtection = () => (
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
            Data Protection Statement
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
            Accountability
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans">
            Career Bridge Foundation CIC is responsible for ensuring compliance with UK GDPR.
          </p>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans">
            <span className="font-medium">Data Protection Lead:</span> Victor Sonde
          </p>
          <p className="text-body text-slate leading-relaxed font-sans">
            <span className="font-medium">ICO Application Reference:</span> C1883991 (registration pending confirmation)
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Responsibilities
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            All directors, staff and volunteers must:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Use approved systems only</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Protect confidential information</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Avoid unauthorised disclosure</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Report suspected data breaches immediately</span>
            </li>
          </ul>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Data Breach Procedure
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            In the event of a data breach:
          </p>
          <ol className="space-y-4 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-accent-teal text-white rounded-full mr-4 mt-1 flex-shrink-0 flex items-center justify-center text-sm font-medium">1</span>
              <span className="text-body text-slate leading-relaxed font-sans">Immediate internal notification to the Data Protection Lead</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-accent-teal text-white rounded-full mr-4 mt-1 flex-shrink-0 flex items-center justify-center text-sm font-medium">2</span>
              <span className="text-body text-slate leading-relaxed font-sans">Risk assessment within 24 hours</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-accent-teal text-white rounded-full mr-4 mt-1 flex-shrink-0 flex items-center justify-center text-sm font-medium">3</span>
              <span className="text-body text-slate leading-relaxed font-sans">ICO notification within 72 hours if legally required</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-accent-teal text-white rounded-full mr-4 mt-1 flex-shrink-0 flex items-center justify-center text-sm font-medium">4</span>
              <span className="text-body text-slate leading-relaxed font-sans">Communication to affected individuals where appropriate</span>
            </li>
          </ol>
          <p className="text-body text-slate leading-relaxed mt-8 font-sans">
            All breaches are documented and reviewed.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Our Commitment
          </h2>
          <p className="text-body text-slate leading-relaxed font-sans">
            Career Bridge Foundation is committed to providing fair, transparent and professional services. All complaints are taken seriously.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            How to Submit a Complaint
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            Complaints should be submitted in writing to:
          </p>
          <div className="bg-slate/5 p-6 rounded-lg mb-8">
            <p className="text-body text-slate font-sans mb-2">
              <span className="font-medium">Email:</span> <a href="mailto:outreach@careerbridgefoundation.com">outreach@careerbridgefoundation.com</a>
            </p>
            <p className="text-body text-slate font-sans mb-4">
              <span className="font-medium">Subject Line:</span> Formal Complaint - [Brief Description]
            </p>
            <p className="text-body text-slate font-sans mb-4 font-medium">
              Please include:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
                <span className="text-body text-slate font-sans">Your name and contact details</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
                <span className="text-body text-slate font-sans">Date(s) of the incident</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
                <span className="text-body text-slate font-sans">Detailed description of the complaint</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
                <span className="text-body text-slate font-sans">Supporting documentation where applicable</span>
              </li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Process
          </h2>
          <ul className="space-y-4 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans"><span className="font-medium">Acknowledgement:</span> Within 5 working days</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans"><span className="font-medium">Investigation:</span> Conducted by senior leadership</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans"><span className="font-medium">Response:</span> Written response within 14 working days</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed mt-8 font-sans">
            If additional time is required, the complainant will be informed.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Escalation
          </h2>
          <p className="text-body text-slate leading-relaxed mb-10 font-sans">
            If a complaint remains unresolved, it may be escalated to relevant regulatory bodies where applicable.
          </p>
          <Link to="/" className="btn-secondary">Return to Home</Link>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default DataProtection;

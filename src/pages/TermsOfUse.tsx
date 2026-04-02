import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const TermsOfUse = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="page-container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-0.5 bg-accent-teal" />
            <p className="text-label font-sans uppercase text-accent-teal">Legal</p>
          </div>
          <h1 className="font-serif text-hero-sm md:text-[3.5rem] font-semibold text-warm-white leading-[1.1] max-w-3xl">
            Terms of Use
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
            Acceptance of Terms
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans">
            By accessing this website or participating in any Career Bridge Foundation programme, you agree to these Terms of Use.
          </p>
          <p className="text-body text-slate leading-relaxed font-sans">
            If you do not agree, you must not use our services.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Nature of Services
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            Career Bridge Foundation provides:
          </p>
          <ul className="space-y-3 mb-10 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Workforce activation programmes</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Structured development pathways</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Simulation-based learning</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Micro-task contribution opportunities</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Community and mentoring services</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans">
            Participation does not constitute employment unless explicitly confirmed in writing
          </p>
          <p className="text-body text-slate leading-relaxed font-sans">
            We do not guarantee employment outcomes
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Eligibility
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            Participant must:
          </p>
          <ul className="space-y-3 mb-8 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Provide accurate and truthful information</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Meet eligibility criteria where specified</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Conduct themselves professionally</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed font-sans">
            We have the right to verify submitted information.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Intellectual Property
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans">
            All frameworks, methodologies, simulations, templates, content and branding remain the intellectual property of Career Bridge Foundation unless otherwise stated.
          </p>
          <p className="text-body text-slate leading-relaxed font-sans">
            Unauthorised copying, redistribution, resale or reproduction is prohibited.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Community Conduct
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            Participants must:
          </p>
          <ul className="space-y-3 mb-8 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Act respectfully and professionally</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Maintain confidentiality</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Avoid harassment, discrimination, or misconduct</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Comply with safeguarding requirements</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed font-sans">Breach may result in suspension or permanent removal</p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Micro-Task Contributions
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            Where participants complete micro-tasks:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Terms will clearly be defined in advance</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Payment (if applicable) will be specified</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Contributions do not create employment status</span>
            </li>
          </ul>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Limitation of Liability
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans">
            To the fullest extent permitted by law, Career Bridge Foundation shall not be liable for indirect or consequential losses.
          </p>
          <p className="text-body text-slate leading-relaxed font-sans">
            Nothing in these terms limits liability for fraud or negligence causing injury.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pt-8">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Governing Law
          </h2>
          <p className="text-body text-slate leading-relaxed mb-10 font-sans">
            These terms are governed by the laws of England and Wales
          </p>
          <Link to="/" className="btn-secondary">Return to Home</Link>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default TermsOfUse;

import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => (
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
            Privacy Policy
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
            Introduction
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans">
            Career Bridge Foundation Community Interest Company ("Career Bridge Foundation", "we", "our", "us") is committed to protecting and respecting your privacy.
          </p>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            We process personal data in accordance with:
          </p>
          <ul className="space-y-3 mb-10 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">UK General Data Protection Regulation (UK GDPR)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Data Protection Act 2018</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            This Privacy Policy explains how we collect, use, store and protect personal data when you:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Visit our website</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Apply to our programmes</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Participate in workforce activation pathways</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Submit simulation or assessment data</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Engage in micro-task contributions</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Join our community platforms</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Contact us</span>
            </li>
          </ul>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Who We Are
          </h2>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans font-medium">
            Career Bridge Foundation
          </p>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans font-medium">
            Community Interest Company (CIC)
          </p>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans">
            Registered in England and Wales
          </p>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans">
            Registration Number: 16939467
          </p>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans font-medium">
            Registered Office:
          </p>
          <p className="text-body text-slate leading-relaxed mb-2 font-sans">
            13 Freeland Park
          </p>
          <p className="text-body text-slate leading-relaxed mb-2 font-sans">
            Wareham Road
          </p>
          <p className="text-body text-slate leading-relaxed mb-2 font-sans">
            Poole
          </p>
          <p className="text-body text-slate leading-relaxed mb-2 font-sans">
            Dorset
          </p>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            BH16 6FH, United Kingdom
          </p>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans">
            <span className="font-medium">Data Protection Lead:</span> Victor Sonde
          </p>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans">
            <span className="font-medium">Contact Email:</span> hello@careerbridgefoundation.com
          </p>
          <p className="text-body text-slate leading-relaxed font-sans">
            <span className="font-medium">ICO Registration Status:</span> Registration submitted. Application Reference C1883991. Confirmation pending.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Personal Data We Collect
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            We may collect and process the following categories of personal data:
          </p>
          
          <h3 className="text-lg md:text-xl font-serif font-semibold text-ink mb-4">Identity Data</h3>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            Full name, date of birth, nationality, and identification details where required.
          </p>
          
          <h3 className="text-lg md:text-xl font-serif font-semibold text-ink mb-4">Contact Data</h3>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            Email address, phone number, and postal address.
          </p>
          
          <h3 className="text-lg md:text-xl font-serif font-semibold text-ink mb-4">Professional and Educational Data</h3>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            CVs, LinkedIn profiles, qualifications, employment history, portfolio evidence, certifications.
          </p>
          
          <h3 className="text-lg md:text-xl font-serif font-semibold text-ink mb-4">Programme and Simulation Data</h3>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            Applications, assessment submissions, AI-generated evaluations, simulation outputs, performance metrics, certification records, and micro-task contributions.
          </p>
          
          <h3 className="text-lg md:text-xl font-serif font-semibold text-ink mb-4">Technical Data</h3>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            IP address, browser type, cookies, device identifiers, and usage analytics.
          </p>
          
          <h3 className="text-lg md:text-xl font-serif font-semibold text-ink mb-4">Safeguarding Information</h3>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            Information disclosed in connection with safeguarding or welfare concerns where applicable.
          </p>
          
          <p className="text-body text-slate leading-relaxed font-sans">
            We collect only data necessary for legitimate organisational purposes.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Lawful Basis for Processing
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            We rely on one or more of the following lawful bases:
          </p>
          <ul className="space-y-3 mb-8 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Consent</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Contractual necessity</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Legitimate interests</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Legal obligation</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed font-sans">
            Where consent is relied upon, it may be withdrawn at any time.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            How We Use Personal Data
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            We use personal data to:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Assess and process programme applications</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Deliver training and simulation services</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Issue certifications and credentials</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Facilitate micro-task participation</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Provide community access and mentoring</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Communicate relevant updates and opportunities</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Improve programme quality and effectiveness</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Comply with safeguarding and legal obligations</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed mt-8 font-sans">We do not sell personal data.</p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Data Sharing
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            We may share personal data with:
          </p>
          <ul className="space-y-3 mb-8 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Approved technology providers including Zoho, Circle, Jotform, Make.com, Brevo and ClickUp</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Delivery or enterprise partners where required for programme execution</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Regulatory authorities where legally required</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed font-sans">
            All processors are expected to maintain appropriate UK GDPR standards.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            International Transfers
          </h2>
          <p className="text-body text-slate leading-relaxed font-sans">
            Where data is transferred outside the United Kingdom, appropriate safeguards are implemented in accordance with UK GDPR requirements.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Data Retention
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            Personal data is retained only as long as necessary to:
          </p>
          <ul className="space-y-3 mb-8 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Deliver services</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Maintain certification records</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Meet compliance obligations</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Protect safeguarding interests</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed font-sans">
            Retention schedules are reviewed periodically.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Data Security
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            We implement appropriate technical and organisational measures including:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Role-based access controls</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Secure cloud-based systems</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Internal accountability procedures</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Restricted access to personal data</span>
            </li>
          </ul>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Your Rights
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans font-medium">
            Under UK GDPR, you have the right to:
          </p>
          <ul className="space-y-3 mb-10 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Access your personal data</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Rectify inaccurate information</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Request erasure where legally applicable</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Restrict or object to processing</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Data portability</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Lodge a complaint with the Information Commissioner's Office</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed font-sans">
            <span className="font-medium">ICO Website:</span> {" "}
            <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-accent-teal hover:underline">
              https://www.ico.org.uk
            </a>
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-16 md:mt-20 pt-8">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Policy Updates
          </h2>
          <p className="text-body text-slate leading-relaxed mb-10 font-sans">
            This Privacy Policy may be updated periodically. The latest version will always be published on our website.
          </p>
          <Link to="/" className="btn-secondary">Return to Home</Link>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default PrivacyPolicy;

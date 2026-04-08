import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const ComplaintsProcedure = () => (
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
            Complaints Procedure
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
            Purpose
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans">
            Career Bridge Foundation is committed to delivering services fairly, transparently and professionally.
          </p>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans">
            We recognise that complaints provide valuable feedback and an opportunity to improve.
          </p>
          <p className="text-body text-slate leading-relaxed font-sans">
            This procedure outlines how complaints are handled in a consistent, impartial and timely manner.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Scope
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans font-medium">
            This procedure applies to complaints made by:
          </p>
          <ul className="space-y-3 ml-4 mb-8">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Programme participants</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Applicants</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Micro-task contributors</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Mentors or volunteers</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Enterprise or delivery partners</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Members of the public</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed font-sans">
            This procedure does not replace formal safeguarding or whistleblowing procedures, which may apply where appropriate.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            What Is a Complaint?
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans font-medium">
            A complaint is defined as:
          </p>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            An expression of dissatisfaction about the standard of service, action, decision, or behaviour of Career Bridge Foundation, its representatives, or delivery partners.
          </p>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans font-medium">
            This may include concerns relating to:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Programme delivery</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Assessment or certification decisions</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Micro-task allocations or payments</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Conduct of staff or mentors</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Data handling</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Communication standards</span>
            </li>
          </ul>
        </AnimatedSection>

        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            How to Submit a Complaint
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans font-medium">
            Complaints must be submitted in writing to:
          </p>
          <div className="bg-slate/5 p-6 rounded-lg mb-8">
            <p className="text-body text-slate font-sans mb-2">
              <span className="font-medium">Email:</span> <a href="mailto:outreach@careerbridgefoundation.com">outreach@careerbridgefoundation.com</a>
            </p>
            <p className="text-body text-slate font-sans">
              <span className="font-medium">Subject Line:</span> Formal Complaint
            </p>
          </div>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans font-medium">
            The complaint should include:
          </p>
          <ul className="space-y-3 ml-4 mb-8">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Full name</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Contact details</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Clear description of the issue</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Relevant dates</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Any supporting evidence</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed font-sans">
            Anonymous complaints will be reviewed at the discretion of leadership but may limit the ability to investigate fully.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Complaints Process
          </h2>
          
          <h3 className="text-body-lg text-ink font-serif font-semibold mb-6 text-[1.4rem]">Stage 1 – Acknowledgement</h3>
          <ul className="space-y-3 ml-4 mb-8">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Complaint acknowledged within 5 working days</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Confirmation that investigation has commenced</span>
            </li>
          </ul>

          <h3 className="text-body-lg text-ink font-serif font-semibold mb-6 text-[1.4rem]">Stage 2 – Investigation</h3>
          <ul className="space-y-3 ml-4 mb-8">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Complaint reviewed by a senior member of leadership</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Relevant documentation and evidence assessed</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Individuals involved may be contacted for clarification</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            Investigations are conducted impartially and confidentially.
          </p>

          <h3 className="text-body-lg text-ink font-serif font-semibold mb-6 text-[1.4rem]">Stage 3 – Outcome</h3>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans">
            A formal written response will be provided within 14 working days of acknowledgement.
          </p>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans">
            If additional time is required due to complexity, the complainant will be informed with a revised timeline.
          </p>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans font-medium">
            The outcome may include:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Explanation of findings</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Corrective action</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Apology where appropriate</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Policy or process improvement</span>
            </li>
          </ul>
        </AnimatedSection>

        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Escalation
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans font-medium">
            If the complainant remains dissatisfied:
          </p>
          <ul className="space-y-3 ml-4 mb-8">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">They may request an internal review by a Director not previously involved in the investigation.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">A final response will be issued within 14 working days of the escalation request.</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans font-medium">
            Where relevant, the complainant may escalate externally to:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Information Commissioner's Office (for data protection matters)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Appropriate regulatory or funding bodies</span>
            </li>
          </ul>
        </AnimatedSection>

        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Safeguarding Concerns
          </h2>
          <p className="text-body text-slate leading-relaxed mb-6 font-sans">
            If a complaint includes safeguarding concerns, it will immediately be referred to:
          </p>
          <div className="bg-slate/5 p-6 rounded-lg mb-6">
            <p className="text-body text-slate font-sans mb-2">
              <span className="font-medium">Safeguarding Lead:</span> Nneka Mba
            </p>
            <p className="text-body text-slate font-sans">
              <span className="font-medium">Email:</span> <a href="mailto:outreach@careerbridgefoundation.com">outreach@careerbridgefoundation.com</a>
            </p>
          </div>
          <p className="text-body text-slate leading-relaxed font-sans">
            Safeguarding matters may override standard complaint timelines.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Confidentiality
          </h2>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans">
            All complaints will be handled confidentially and in accordance with our Privacy Policy.
          </p>
          <p className="text-body text-slate leading-relaxed font-sans">
            Information will be shared only on a need-to-know basis.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20 border-b border-subtle">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Record Keeping
          </h2>
          <p className="text-body text-slate leading-relaxed mb-4 font-sans font-medium">
            All complaints are:
          </p>
          <ul className="space-y-3 ml-4 mb-6">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Logged securely</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Reviewed for patterns or systemic issues</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-accent-teal rounded-full mr-4 mt-2.5 flex-shrink-0" />
              <span className="text-body text-slate leading-relaxed font-sans">Used to improve organisational processes</span>
            </li>
          </ul>
          <p className="text-body text-slate leading-relaxed font-sans">
            Records are retained in line with data protection requirements.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-16 md:mt-20 pb-16 md:pb-20">
          <div className="mb-6 w-12 h-0.5 bg-gradient-to-r from-accent-teal to-transparent" />
          <h2 className="font-serif text-ink text-[2.4rem] md:text-[2.8rem] font-semibold tracking-tight mb-8 leading-tight">
            Protection from Retaliation
          </h2>
          <p className="text-body text-slate leading-relaxed mb-8 font-sans">
            Career Bridge Foundation will not tolerate retaliation against any individual who raises a complaint in good faith.
          </p>
          <Link to="/" className="btn-secondary">Return to Home</Link>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default ComplaintsProcedure;

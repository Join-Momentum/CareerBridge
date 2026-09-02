import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, StaggerGrid, cardVariant, ArrowIcon, ease } from "@/components/simulation/Motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ─── DATA ─────────────────────────────────────────────────────────
   Package names (Proof Sponsor / Pathway Partner / Challenge Partner)
   are the SPONSOR-REDESIGN-DIRECTION doc's own recommendation, but
   OPEN-DECISIONS #1 records this as formally unresolved. Treat as a
   placeholder pending sign-off, not final commercial naming.
   ────────────────────────────────────────────────────────────────── */

const PROOF_GAP = [
  {
    title: "Participants build the proof",
    body: "They work realistic scenarios based on workplace decisions and deliverables, in a named discipline.",
  },
  {
    title: "Sponsors fund the proof",
    body: "Sponsorship covers the AI-powered simulation, evaluation and portfolio generation that completion requires.",
  },
  {
    title: "The evidence is verifiable",
    body: "Artefacts, evaluation records and a digital career portfolio a participant can take to an employer.",
  },
];

const FUNDING_FLOW = [
  { tag: "Free", title: "Join", body: "Applying, creating an account and accessing the programme costs a participant nothing." },
  { tag: "Sponsored", title: "Complete", body: "Sponsorship funds the AI-powered simulations and evaluation a participant needs to work through a pathway to the end." },
  { tag: "Sponsored", title: "Evidence", body: "Submitted work is evaluated and turned into workplace artefacts — the record of what the participant decided and delivered." },
  { tag: "Outcome", title: "Prove", body: "Artefacts land in a verifiable digital career portfolio the participant takes into the employment market." },
];

const JOURNEY = [
  { n: "01", tag: "Free", title: "Select", body: "Participants are selected or referred into a defined Career Bridge cohort." },
  { n: "02", tag: "Free", title: "Prepare", body: "They receive onboarding, expectations, pathway guidance and access to the platform." },
  { n: "03", tag: "Sponsored", title: "Practise", body: "They complete realistic simulations across a chosen professional discipline." },
  { n: "04", tag: "Sponsored", title: "Evaluate", body: "Submitted work receives AI-powered evaluation against the pathway's criteria." },
  { n: "05", tag: "Sponsored", title: "Evidence", body: "Workplace artefacts are generated and published to a digital career portfolio." },
  { n: "06", tag: "Free", title: "Progress", body: "Career Bridge reports engagement, completion, feedback and agreed progression indicators." },
];

const PACKAGES = [
  {
    tier: "Package 01",
    name: "Proof Sponsor",
    body: "Fund participants through simulation, evaluation and portfolio evidence.",
    items: [
      "Funded participation for an agreed number of participants",
      "A discipline pathway of the participant's choosing",
      "AI-powered evaluation of submitted work",
      "Portfolio evidence generated for each participant",
      "Cohort onboarding and participation support",
      "End-of-cohort completion and evidence report",
      "Sponsor recognition",
    ],
    featured: false,
  },
  {
    tier: "Package 02",
    name: "Pathway Partner",
    body: "Choose the discipline and the participant group, and bring your practitioners into the cohort.",
    items: [
      "Everything in Proof Sponsor",
      "A named discipline pathway",
      "A defined participant group — community, region or institution",
      "Practitioner office hours, clinics and career conversations",
      "Industry insight sessions",
      "Pathway enhancement: contextualised scenarios and additional simulations",
      "Discipline-level reporting, including competencies demonstrated",
    ],
    featured: true,
  },
  {
    tier: "Package 03",
    name: "Challenge Partner",
    body: "Co-design the work itself, including cross-disciplinary organisational challenges.",
    items: [
      "Everything in Pathway Partner",
      "Co-designed simulation experiences",
      "Cross-disciplinary challenges spanning multiple pathways",
      "Multi-cohort, multi-discipline or multi-region programmes",
      "Sustained practitioner involvement",
      "Reporting designed around your objectives",
      "Strategic review cycle",
    ],
    featured: false,
  },
];

const SHAPE = [
  {
    title: "Discipline sponsorship",
    body: "Support a named discipline where your organisation has a workforce-development, talent-pipeline or social-impact interest.",
    detail: "Product Management, Project Management, Business Analysis, Cyber Threat Intelligence, Virtual Administrative Assistant. Other disciplines can be discussed where there is a clear sector or employer need.",
  },
  {
    title: "Practitioner office hours",
    body: "Fund or contribute practitioner-led sessions that add developmental value inside the cohort.",
    detail: "Office hours and discipline-specific clinics, group mentoring and career conversations, expert feedback on participant work, industry insight sessions. Practitioner involvement is developmental. It is not recruitment, work-shadowing, an interview route, or privileged access to participants.",
  },
  {
    title: "Pathway enhancement",
    body: "Add depth around a discipline beyond the core simulation set.",
    detail: "Discipline-specific learning support, additional simulation experiences, contextualised scenarios drawn from your sector, skills-development sessions. Scope is agreed at design stage and reflected in pathway-level reporting.",
  },
  {
    title: "Co-design",
    body: "Work with Career Bridge and Evidentize to design the workplace scenarios participants encounter.",
    detail: "Realistic workplace and industry-specific problems, discipline-specific and cross-functional scenarios, community, regional or sector challenges, multi-disciplinary organisational challenges. Career Bridge retains editorial control of learning design, assessment criteria and quality — a partner shapes the scenario, not the standard.",
  },
];

const CHALLENGE_ROWS = [
  { disc: "Product", task: "Defines the proposition and prioritises the release" },
  { disc: "Project", task: "Sequences delivery, manages dependencies and risk" },
  { disc: "Business Analysis", task: "Maps current-state process and specifies requirements" },
  { disc: "Cyber Threat Intel", task: "Assesses the threat surface the migration opens" },
  { disc: "Virtual Admin", task: "Runs coordination, documentation and stakeholder logistics" },
];

const PILLARS = [
  { title: "Workforce readiness", body: "Help people develop practical capability before entering or progressing within the workplace." },
  { title: "Social impact", body: "Create measurable opportunities for people who need access to experience and career support." },
  { title: "Early talent engagement", body: "Build relationships with emerging professionals through appropriate practitioner involvement and industry insight." },
  { title: "Employer brand", body: "Demonstrate a practical commitment to skills development and employability." },
  { title: "Sector-aligned capability", body: "Support pathways and scenarios connected to the roles and disciplines relevant to your organisation." },
];

const REPORT_FIGURES = [
  { num: "24", label: "Participants funded" },
  { num: "19", label: "Completed the pathway" },
  { num: "96", label: "Simulations completed" },
  { num: "71", label: "Portfolios generated" },
];

const COMPLETION_STEPS = [
  "Onboarded and enrolled in a named discipline pathway within a named cohort.",
  "Completed all required tasks in the minimum number of simulations defined for that pathway. The minimum is published before the cohort opens and is not changed during it.",
  "Each of those simulations was submitted for AI-powered evaluation and returned an evaluation record.",
  "At least one workplace artefact was published to the participant's digital career portfolio.",
  "All of the above within the cohort window, or an extension agreed and recorded before it closed.",
];

const SCENARIOS = [
  {
    tier: "Proof Sponsor",
    title: "Community Talent Sponsor",
    body: "A regional foundation funds participants from a defined community through to completion. Participants choose from the open pathways. The foundation receives completion, artefact and portfolio figures for the group it funded, reported against the objectives it set at design stage.",
  },
  {
    tier: "Pathway Partner",
    title: "Product Management Pathway Partner",
    body: "A technology employer funds a Product Management cohort and contributes monthly practitioner office hours. Its product managers run clinics and career conversations. Reporting covers completions plus the competencies participants demonstrated. No recruitment access is implied or offered.",
  },
  {
    tier: "Challenge Partner",
    title: "Multi-Disciplinary Transformation Partner",
    body: "A sector body co-designs a realistic organisational challenge spanning all five disciplines. Participants work different aspects of the same scenario. The body receives cross-disciplinary reporting on how the cohort handled a problem shaped by its sector.",
  },
  {
    tier: "Challenge Partner",
    title: "Strategic Workforce Partner",
    body: "A public-sector organisation supports multiple cohorts across several disciplines and regions, works with Career Bridge on programme design and practitioner involvement, and agrees a reporting framework and review cycle for the duration.",
  },
];

const PROCESS = [
  { n: "Step 01", title: "Start a conversation", body: "Tell us about your organisation, the people you want to support, and the impact you intend." },
  { n: "Step 02", title: "Design the programme", body: "Agree participant groups, disciplines, practitioner involvement, funding, reporting and timescales." },
  { n: "Step 03", title: "Deliver the experience", body: "Career Bridge runs the cohort. Participants complete simulations, receive evaluation and build portfolio evidence." },
  { n: "Step 04", title: "Review the outcomes", body: "Receive the agreed report and use the findings to shape future cohorts or partnerships." },
];

const FAQS = [
  {
    q: "If programme access is free, what does sponsorship fund?",
    a: "Programme access is free — applying, creating an account and accessing the programme costs a participant nothing. Sponsorship funds the AI-powered simulation, evaluation and portfolio generation that lets a participant complete the experience and finish with evidence. It is the difference between having a place on the programme and finishing with proof of what you can do.",
  },
  {
    q: "How is sponsorship money applied?",
    a: "Part funds the AI-powered infrastructure participants use, which is provided by Evidentize. The rest funds cohort delivery, participant support, practitioner involvement and reporting. How this is set, and the arrangements behind it, are set out in full for prospective sponsors during due diligence.",
  },
  {
    q: "Can we review your governance and commercial arrangements?",
    a: "Yes. Governance documentation, our conflict-of-interest policy, the commercial basis between Career Bridge and Evidentize, and our related-party arrangements are available to prospective sponsors as part of due diligence, and to any body entitled to them.",
  },
  {
    q: "What counts as a completed work experience?",
    a: "A participant completes when they have been onboarded to a named pathway, completed all required tasks in the minimum number of simulations for that pathway, had each submitted for AI-powered evaluation, published at least one artefact to their portfolio, and done so within the cohort window. The full definition is published above.",
  },
  {
    q: "Are sponsored and self-funded participants treated differently?",
    a: "No. Both follow the same programme, the same evaluation requirements and the same evidence expectations. Sponsorship removes a financial barrier to completing. It does not create a different standard.",
  },
  {
    q: "Does sponsorship guarantee recruitment access?",
    a: "No. Sponsorship does not guarantee hiring, interviews or recruitment access. Practitioner involvement is developmental. Any employer-brand or engagement activity is optional and subject to a separate agreement.",
  },
  {
    q: "Sponsorship is not an investment — what does that mean?",
    a: "Sponsorship is a funding arrangement with Career Bridge Foundation for cohort delivery. It is not an investment and does not confer equity or ownership in any organisation.",
  },
  {
    q: "What are credits?",
    a: "Credits are the operational mechanism by which AI-powered functionality is made available to a participant. Sponsors fund participation and completion; credits are how that funding reaches the participant's simulations and evaluations. Volumes are agreed at design stage.",
  },
];

const ORG_TYPES = ["Employer", "Foundation or charity", "University or education provider", "Professional body", "Public-sector organisation", "Training provider", "Other"];
const INTERESTS = ["Funded participation", "Discipline pathway", "Practitioner office hours", "Pathway enhancement", "Co-designed simulations", "Cross-disciplinary challenge", "Not sure yet"];
const PACKAGE_OPTIONS = ["Proof Sponsor", "Pathway Partner", "Challenge Partner", "Exploring options"];

const inputClass =
  "w-full px-4 py-3 border border-subtle bg-warm-white text-ink font-sans text-body focus:border-accent-teal focus:outline-none transition-colors";
const selectClass = `${inputClass} appearance-none cursor-pointer`;
const selectBg = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
  backgroundPosition: "right 1rem center",
  backgroundSize: "1.25rem",
  backgroundRepeat: "no-repeat",
} as const;

/* ─── COMPONENT ─────────────────────────────────────────────────── */

const SponsorACohort = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    organisation: "",
    jobTitle: "",
    workEmail: "",
    organisationType: "",
    sponsorshipInterest: "",
    participantAudience: "",
    partnershipPackage: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Reuses the existing /api/tickets submission path (same as Contact.tsx)
    // rather than a second backend integration. That endpoint's contract only
    // has fullName/email/organization/enquiryType/message, so the sponsor-
    // specific fields are appended to the message body.
    const payload = {
      fullName: formData.fullName,
      email: formData.workEmail,
      organization: formData.organisation,
      enquiryType: "partnership",
      message: [
        formData.message,
        "",
        "--- Sponsorship enquiry details ---",
        `Job title: ${formData.jobTitle}`,
        `Organisation type: ${formData.organisationType}`,
        `Sponsorship interest: ${formData.sponsorshipInterest}`,
        `Preferred package: ${formData.partnershipPackage}`,
        `Approximate participant audience: ${formData.participantAudience || "Not specified"}`,
      ].join("\n"),
    };

    try {
      const response = await fetch("https://careerbridge-backend-1mo7.onrender.com/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Thank you. The Career Bridge partnerships team will be in touch with next steps." });
        setFormData({
          fullName: "",
          organisation: "",
          jobTitle: "",
          workEmail: "",
          organisationType: "",
          sponsorshipInterest: "",
          participantAudience: "",
          partnershipPackage: "",
          message: "",
          consent: false,
        });
      } else {
        setStatus({ type: "error", message: data.error || "Your enquiry could not be sent. Please try again, or email outreach@careerbridgefoundation.com." });
      }
    } catch (error) {
      console.error("Sponsorship enquiry submission error:", error);
      setStatus({ type: "error", message: "Network error. Please try again, or email outreach@careerbridgefoundation.com." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative bg-ink overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.14] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-accent-teal/[0.06] blur-[150px] pointer-events-none" />

        <div className="relative page-container pt-40 pb-24">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">
                Career Bridge sponsorship and partnership
              </span>
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
              className="text-[clamp(3rem,7vw,6rem)] font-bold text-white leading-[0.95] tracking-[-0.02em] mb-6"
            >
              Fund the proof.
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              className="text-lg md:text-xl text-white/50 leading-[1.6] max-w-2xl mb-10"
            >
              Career Bridge programme access is free. Sponsorship funds the AI-powered simulation, evaluation and
              portfolio generation that lets a participant complete realistic work experience and finish with
              evidence of what they can actually do.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a href="#enquiry" className="inline-flex items-center justify-center gap-2 text-[11px] font-medium uppercase px-8 py-4 tracking-[0.12em] bg-accent-teal text-ink hover:bg-accent-teal/90 transition-colors duration-200">
                Become a Sponsor
              </a>
              <a href="#funds" className="inline-flex items-center justify-center gap-2 text-[11px] font-medium uppercase px-8 py-4 tracking-[0.12em] border border-white/25 text-white hover:border-white/50 transition-colors duration-200">
                See What Sponsorship Funds
              </a>
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
              className="text-sm text-white/30 leading-relaxed max-w-xl"
            >
              Structured pathways, realistic workplace simulations, AI-powered evaluation, practitioner involvement
              and verifiable portfolio evidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THE PROOF GAP
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">The proof gap</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-ink leading-[1.05] tracking-[-0.02em] max-w-2xl mb-6">
              Joining is free. Finishing is what employers can see.
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">
              Aspiring professionals can complete courses and still have nothing an employer can examine. Career
              Bridge already removes the cost of joining a structured programme. What stands between a participant
              and usable evidence is completing the AI-powered work. That is the gap sponsorship closes.
            </p>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-px bg-subtle border border-subtle">
            {PROOF_GAP.map(({ title, body }) => (
              <motion.div key={title} variants={cardVariant}>
                <div className="bg-white p-8 h-full">
                  <h3 className="text-lg font-bold text-ink mb-3 leading-snug">{title}</h3>
                  <p className="text-sm text-slate leading-[1.75]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT SPONSORSHIP FUNDS
      ════════════════════════════════════════ */}
      <section id="funds" className="bg-warm-grey py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">What sponsorship funds</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-ink leading-[1.05] tracking-[-0.02em]">
              From free access to funded completion.
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle border border-subtle mb-10">
            {FUNDING_FLOW.map(({ tag, title, body }) => (
              <motion.div key={title} variants={cardVariant}>
                <div className={`p-7 h-full ${tag === "Free" ? "bg-white" : "bg-white"}`}>
                  <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-accent-teal mb-3 block">{tag}</span>
                  <h3 className="text-base font-bold text-ink mb-2">{title}</h3>
                  <p className="text-sm text-slate leading-[1.6]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>

          <Reveal delay={0.1}>
            <div className="notice-box max-w-3xl">
              <p className="text-sm text-slate leading-relaxed font-sans">
                <strong className="text-ink">How this works operationally.</strong> AI-powered functionality is made
                available through simulation credits. Sponsors fund participation and completion; credits are the
                mechanism by which that funding reaches a participant's simulations and evaluations. Volumes are
                agreed at design stage, before any commitment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PARTICIPANT JOURNEY
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">The participant journey</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-[1.05] tracking-[-0.02em]">
              What a funded participant actually does.
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {JOURNEY.map(({ n, tag, title, body }) => (
              <motion.div key={n} variants={cardVariant}>
                <div className="p-6 bg-white/[0.03] border border-white/[0.08] h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-white/30">{n}</span>
                    <span className={`text-[10px] font-medium uppercase tracking-[0.12em] ${tag === "Free" ? "text-accent-teal" : "text-white/50"}`}>
                      {tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/40 leading-[1.65]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PARTNERSHIP PACKAGES
      ════════════════════════════════════════ */}
      <section id="packages" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Partnership packages</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-ink leading-[1.05] tracking-[-0.02em] mb-6">
              Three ways to partner.
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">
              The packages differ by what you shape, not only by how many participants you fund. Each includes
              everything below it.
            </p>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PACKAGES.map(({ tier, name, body, items, featured }) => (
              <motion.div key={name} variants={cardVariant}>
                <div className={`h-full flex flex-col p-8 border ${featured ? "bg-ink border-ink" : "bg-white border-subtle"}`}>
                  <span className={`text-[10px] font-medium uppercase tracking-[0.15em] mb-4 ${featured ? "text-accent-teal" : "text-slate"}`}>
                    {tier}
                  </span>
                  <h3 className={`text-xl font-bold mb-3 ${featured ? "text-white" : "text-ink"}`}>{name}</h3>
                  <p className={`text-sm leading-[1.6] mb-6 ${featured ? "text-white/50" : "text-slate"}`}>{body}</p>
                  <ul className={`space-y-3 mt-2 border-t pt-6 ${featured ? "border-white/10" : "border-subtle"}`}>
                    {items.map((item) => (
                      <li key={item} className={`flex items-start gap-2.5 text-sm leading-relaxed ${featured ? "text-white/70" : "text-slate"}`}>
                        <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${featured ? "bg-accent-teal" : "bg-accent-teal"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#enquiry"
                    className={`mt-8 inline-flex items-center justify-center gap-2 text-[11px] font-medium uppercase px-6 py-3.5 tracking-[0.1em] transition-colors duration-200 ${
                      featured ? "bg-accent-teal text-ink hover:bg-accent-teal/90" : "border border-ink text-ink hover:bg-ink hover:text-white"
                    }`}
                  >
                    Discuss {name}
                  </a>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>

          <Reveal delay={0.15}>
            <p className="text-sm text-slate leading-relaxed max-w-2xl mt-10 border-l-2 border-accent-teal pl-5">
              Final scope, participant numbers, delivery format, reporting, branding and engagement opportunities are
              agreed with each partner. No pricing is published; funding is discussed at design stage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WAYS TO SHAPE A PROGRAMME
      ════════════════════════════════════════ */}
      <section className="bg-warm-grey py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Ways to shape a programme</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-ink leading-[1.05] tracking-[-0.02em] mb-4">
              Beyond funding participants.
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">
              Available at Pathway Partner level and above.
            </p>
          </Reveal>

          <Accordion type="single" collapsible className="max-w-3xl">
            {SHAPE.map((item, i) => (
              <AccordionItem key={item.title} value={`shape-${i}`} className="border-subtle bg-white px-6 mb-3">
                <AccordionTrigger className="font-serif text-lg font-semibold text-ink hover:no-underline py-6">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-body text-slate leading-relaxed font-sans">
                  <p className="mb-3">{item.body}</p>
                  <p className="text-sm text-slate/90 leading-relaxed">{item.detail}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CROSS-DISCIPLINARY CHALLENGES
      ════════════════════════════════════════ */}
      <section id="challenges" className="relative bg-ink py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Cross-disciplinary challenges</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-[1.05] tracking-[-0.02em] max-w-2xl">
              Real organisations do not work in silos.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <p className="text-base text-white/45 leading-[1.75] mb-5">
                At Challenge Partner level, a co-designed organisational challenge can span every discipline at once.
                Each participant works the aspect their role would actually own, against the same scenario,
                constraints and timeline.
              </p>
              <p className="text-base text-white/45 leading-[1.75] mb-6">
                Each participant produces the artefacts their role would produce and is evaluated against their own
                discipline's criteria. The evidence in their portfolio shows not only that they can do the work, but
                that they can do it inside something that behaves like an organisation.
              </p>
              <div className="border-l-2 border-accent-teal/50 pl-5">
                <p className="text-sm text-white/40 leading-relaxed">
                  Career Bridge retains editorial control of learning design, assessment criteria and quality. A
                  partner shapes the scenario, not the standard.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-white/[0.08] bg-white/[0.03]">
                <div className="p-6 border-b border-white/[0.08]">
                  <span className="inline-block text-[10px] font-medium uppercase tracking-[0.15em] text-accent-teal bg-accent-teal/10 border border-accent-teal/25 rounded-full px-3 py-1 mb-3">
                    Illustrative scenario
                  </span>
                  <p className="text-lg font-bold text-white leading-snug">
                    A regional retailer is replacing its customer platform.
                  </p>
                </div>
                {CHALLENGE_ROWS.map((row, i) => (
                  <div key={row.disc} className={`flex gap-4 p-5 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}>
                    <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-accent-teal w-28 shrink-0 pt-0.5">
                      {row.disc}
                    </span>
                    <span className="text-sm text-white/45 leading-relaxed">{row.task}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY ORGANISATIONS SPONSOR
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Sponsor value</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-ink leading-[1.05] tracking-[-0.02em]">
              Why organisations sponsor Career Bridge.
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-subtle border border-subtle">
            {PILLARS.map(({ title, body }) => (
              <motion.div key={title} variants={cardVariant}>
                <div className="bg-white p-6 h-full">
                  <h3 className="text-sm font-bold text-ink mb-2 leading-snug">{title}</h3>
                  <p className="text-xs text-slate leading-[1.6]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          IMPACT AND REPORTING
      ════════════════════════════════════════ */}
      <section id="impact" className="bg-warm-grey py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Impact and reporting</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-ink leading-[1.05] tracking-[-0.02em] mb-4">
              See exactly what your funding produced.
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">
              Sponsors receive an agreed report at the end of each cohort. Below is a sample of that report and the
              definition behind its headline number.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white border border-subtle mb-10">
              <div className="flex flex-wrap items-center justify-between gap-3 p-6 bg-ink">
                <div>
                  <p className="text-base font-bold text-white">Sample end-of-cohort report</p>
                  <p className="text-xs text-white/40 mt-1">Illustrative extract, based on a 24-participant pilot structure</p>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent-teal bg-accent-teal/10 border border-accent-teal/25 rounded-full px-3 py-1.5 shrink-0">
                  Illustrative figures
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-subtle">
                {REPORT_FIGURES.map(({ num, label }) => (
                  <div key={label} className="p-6">
                    <p className="text-4xl font-bold text-ink font-mono">{num}</p>
                    <p className="text-sm text-slate mt-2">{label}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-warm-grey border-t border-subtle">
                <p className="text-xs text-slate leading-relaxed">
                  These figures illustrate the shape and level of detail of a Career Bridge cohort report. They are
                  not results from a delivered cohort. Every published figure is drawn from verified cohort data and
                  reported against the objectives agreed with the sponsor.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-white border border-subtle">
              <div className="p-6 bg-ink">
                <p className="text-base font-bold text-white">
                  What counts as a completed simulation-based work experience
                </p>
              </div>
              <div className="p-6 md:p-8">
                <ol className="space-y-4 mb-6">
                  {COMPLETION_STEPS.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-accent-teal/10 text-accent-teal text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
                <p className="text-sm text-slate leading-relaxed border-t border-subtle pt-5">
                  <strong className="text-ink">
                    Completion rate is calculated against participants funded, not participants active.
                  </strong>{" "}
                  Completion is a participation measure, not a quality measure — evaluation outcomes are reported
                  separately. Every funded participant appears in exactly one status, and the statuses sum to the
                  funded total.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EXAMPLE SCENARIOS
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Example scenarios</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-ink leading-[1.05] tracking-[-0.02em] mb-4">
              What sponsorship could look like.
            </h2>
            <p className="text-base text-slate leading-[1.75] max-w-2xl">
              Four illustrative shapes. Final scope, numbers and funding are agreed with each partner.
            </p>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCENARIOS.map(({ tier, title, body }) => (
              <motion.div key={title} variants={cardVariant}>
                <div className="border border-subtle p-8 h-full">
                  <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-accent-teal mb-4 block">{tier}</span>
                  <h3 className="text-lg font-bold text-ink mb-3 leading-snug">{title}</h3>
                  <p className="text-sm text-slate leading-[1.7]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>

          <Reveal delay={0.15}>
            <p className="text-sm text-slate leading-relaxed max-w-2xl mt-8 border-l-2 border-accent-teal pl-5">
              Illustrative concepts, not published packages. No pricing or participant numbers are implied.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TRANSPARENCY
      ════════════════════════════════════════ */}
      <section id="transparency" className="bg-warm-grey py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">Transparency</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-ink leading-[1.05] tracking-[-0.02em]">
              How Career Bridge and Evidentize work together.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Reveal>
              <div className="bg-white border border-subtle p-8 h-full">
                <p className="text-[11px] font-medium uppercase tracking-[0.13em] text-accent-teal mb-3">Programme operator</p>
                <h3 className="text-lg font-bold text-ink mb-3">Career Bridge Foundation</h3>
                <p className="text-sm text-slate leading-[1.7]">
                  A Community Interest Company. It designs the cohorts, selects and supports participants, sets the
                  assessment standards, and holds the relationship with sponsors.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-white border border-subtle p-8 h-full">
                <p className="text-[11px] font-medium uppercase tracking-[0.13em] text-accent-teal mb-3">Technology infrastructure</p>
                <h3 className="text-lg font-bold text-ink mb-3">Evidentize</h3>
                <p className="text-sm text-slate leading-[1.7]">
                  The platform behind the experience. It runs the simulations, powers AI-powered evaluation, and
                  generates the digital career portfolios.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="notice-box max-w-3xl">
              <p className="text-sm text-slate leading-relaxed font-sans">
                Career Bridge Foundation sets the assessment standards and holds the relationship with sponsors.
                Evidentize provides the technology that runs the experience. Governance documentation, our
                conflict-of-interest policy and the commercial basis between the two organisations are available to
                prospective sponsors as part of due diligence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW PARTNERSHIP WORKS
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent-teal" />
              <span className="text-[11px] font-medium uppercase text-accent-teal tracking-[0.2em]">How partnership works</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-[1.05] tracking-[-0.02em]">
              From funding to measurable evidence.
            </h2>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({ n, title, body }) => (
              <motion.div key={n} variants={cardVariant}>
                <div className="pt-6 border-t-2 border-accent-teal/40">
                  <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent-teal mb-3 block">{n}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/40 leading-[1.65]">{body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-ink leading-tight tracking-[-0.02em]">
              Sponsorship questions, answered.
            </h2>
          </Reveal>

          <Accordion type="single" collapsible>
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border-subtle">
                <AccordionTrigger className="font-serif text-base font-semibold text-ink hover:no-underline py-5 text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-body text-slate leading-relaxed font-sans">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════ */}
      <section className="relative bg-ink py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />
        <Reveal className="relative max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em]">
            Help more people finish with proof.
          </h2>
          <p className="text-base text-white/40 leading-relaxed max-w-lg">
            Start a conversation about funding participation, a discipline pathway, practitioner involvement or a
            co-designed programme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a href="#enquiry" className="inline-flex items-center justify-center gap-2 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] bg-accent-teal text-ink hover:bg-accent-teal/90 transition-colors duration-200">
              Request the Partnership Brief
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-[11px] font-medium uppercase px-10 py-4 tracking-[0.12em] border border-white/25 text-white hover:border-white/50 transition-colors duration-200">
              Book a Partnership Conversation
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════════
          ENQUIRY FORM
      ════════════════════════════════════════ */}
      <section id="enquiry" className="bg-warm-grey py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-teal mb-5">Enquire</p>
            <h2 className="text-2xl md:text-3xl font-bold text-ink leading-tight tracking-[-0.02em] mb-5">
              Start a partnership conversation
            </h2>
            <p className="text-base text-slate leading-[1.7] mb-8">
              Tell us about your organisation and what you would like your sponsorship to achieve. We will respond
              with next steps.
            </p>
            <div className="space-y-5 text-sm text-slate leading-relaxed">
              <p>
                Prefer email? Write to{" "}
                <a href="mailto:outreach@careerbridgefoundation.com" className="text-ink font-medium hover:text-accent-teal transition-colors">
                  outreach@careerbridgefoundation.com
                </a>
              </p>
              <p>
                Governance documentation, the conflict-of-interest policy and the commercial basis between Career
                Bridge and Evidentize are available to prospective sponsors as part of due diligence.
              </p>
              <p>We only ask for organisational contact details. Enquiries are handled through our support desk.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-white border border-subtle p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-label font-sans uppercase text-slate mb-2">
                    Full name <span className="text-accent-teal">*</span>
                  </label>
                  <input id="fullName" name="fullName" type="text" required value={formData.fullName} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="organisation" className="block text-label font-sans uppercase text-slate mb-2">
                    Organisation <span className="text-accent-teal">*</span>
                  </label>
                  <input id="organisation" name="organisation" type="text" required value={formData.organisation} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-label font-sans uppercase text-slate mb-2">
                    Job title <span className="text-accent-teal">*</span>
                  </label>
                  <input id="jobTitle" name="jobTitle" type="text" required value={formData.jobTitle} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="workEmail" className="block text-label font-sans uppercase text-slate mb-2">
                    Work email <span className="text-accent-teal">*</span>
                  </label>
                  <input id="workEmail" name="workEmail" type="email" required value={formData.workEmail} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="organisationType" className="block text-label font-sans uppercase text-slate mb-2">
                    Organisation type <span className="text-accent-teal">*</span>
                  </label>
                  <select id="organisationType" name="organisationType" required value={formData.organisationType} onChange={handleChange} className={selectClass} style={selectBg}>
                    <option value="">Select an option</option>
                    {ORG_TYPES.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="sponsorshipInterest" className="block text-label font-sans uppercase text-slate mb-2">
                    Sponsorship interest <span className="text-accent-teal">*</span>
                  </label>
                  <select id="sponsorshipInterest" name="sponsorshipInterest" required value={formData.sponsorshipInterest} onChange={handleChange} className={selectClass} style={selectBg}>
                    <option value="">Select an option</option>
                    {INTERESTS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="partnershipPackage" className="block text-label font-sans uppercase text-slate mb-2">
                    Preferred package <span className="text-accent-teal">*</span>
                  </label>
                  <select id="partnershipPackage" name="partnershipPackage" required value={formData.partnershipPackage} onChange={handleChange} className={selectClass} style={selectBg}>
                    <option value="">Select an option</option>
                    {PACKAGE_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="participantAudience" className="block text-label font-sans uppercase text-slate mb-2">
                    Approximate participant audience <span className="text-cool">(Optional)</span>
                  </label>
                  <input id="participantAudience" name="participantAudience" type="text" value={formData.participantAudience} onChange={handleChange} className={inputClass} placeholder="e.g. around 30 participants" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-label font-sans uppercase text-slate mb-2">
                  Message <span className="text-accent-teal">*</span>
                </label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us about your priorities, the participants you'd like to support, and any timescales." />
              </div>

              <div className="flex items-start gap-3 border-t border-subtle pt-6">
                <input id="consent" name="consent" type="checkbox" required checked={formData.consent} onChange={handleChange} className="mt-1 w-4 h-4 accent-accent-teal shrink-0" />
                <label htmlFor="consent" className="text-sm text-slate leading-relaxed font-sans">
                  I agree that Career Bridge may use these details to respond to my sponsorship enquiry.{" "}
                  <span className="text-cool">You can ask us to delete them at any time.</span>
                </label>
              </div>

              {status.message && (
                <div className={`p-4 rounded-sm font-sans text-sm ${status.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                  {status.message}
                </div>
              )}

              <div className="pt-2">
                <button type="submit" className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default SponsorACohort;

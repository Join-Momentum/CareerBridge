import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { ChevronDown, Check, ArrowRight } from "lucide-react";
import TwoPathwaysSection from "@/components/TwoPathwaysSection";
import { AccessLine, AccessPanels } from "@/components/AccessModel";
import { DisclosureShort, DisclosureFull } from "@/components/NonEmploymentDisclosure";
import CohortStrip from "@/components/CohortStrip";
import { PortfolioRecord } from "@/components/records";
import TwoAudiencesSection from "@/components/TwoAudiencesSection";

/* ─── DATA ─────────────────────────────────────────────────────── */

const evidenceGaps = [
  {
    num: "01",
    text: "Knowledge is often present, but professional evidence of applying it is not.",
  },
  {
    num: "02",
    text: "Qualifications describe what somebody has studied. They do not always demonstrate applied capability.",
  },
  {
    num: "03",
    text: "Claims on a CV are difficult for an employer to verify.",
  },
  {
    num: "04",
    text: "Employers struggle to assess potential when there is no work-based evidence to look at.",
  },
  {
    num: "05",
    text: "Many opportunities require prior experience, so the people who need experience most cannot obtain it.",
  },
  {
    num: "06",
    text: "Capable people are filtered out early — not because they cannot do the work, but because nothing shows that they can.",
  },
];

const journeyStages = [
  {
    phase: "Join",
    num: "1",
    title: "Choose a pathway and apply",
    text: "Choose a career pathway and apply to access structured simulation-based work experience. Programme access is free.",
    items: ["No application fee", "No programme-access fee", "No obligation to purchase credits if selected"],
  },
  {
    phase: "Prove",
    num: "2",
    title: "Complete realistic workplace scenarios",
    text: "Complete realistic workplace scenarios, produce professional outputs and receive competency-based assessment and feedback.",
    items: [
      "Workplace scenario and defined Jobs to Be Done",
      "AI and rubric-based competency assessment",
      "Competency scoring, developmental feedback and a Readiness Score",
    ],
  },
  {
    phase: "Progress",
    num: "3",
    title: "Publish verifiable career evidence",
    text: "Publish completed work as verifiable digital career evidence that can support your career development.",
    items: [
      "Editable, partner-agnostic portfolio artefacts",
      "Digital credentials and evidence publication",
      "CV and LinkedIn evidence support",
    ],
  },
];

const pathways = [
  {
    name: "Product Management",
    text: "Define the problem, weigh the trade-offs and decide what gets built.",
    accent: "#A34411",
    status: "In development",
    href: "/simulation-based-work-experience/product-management",
  },
  {
    name: "Project Management",
    text: "Plan delivery, control risk and report honestly when the plan slips.",
    accent: "#0E6E7D",
    status: "In development",
    href: "/simulation-based-work-experience/project-management",
  },
  {
    name: "Business Analysis",
    text: "Find the real problem, structure the requirements, evaluate the options.",
    accent: "#1F7A3D",
    status: "In development",
    href: "/simulation-based-work-experience/business-analysis",
  },
  {
    name: "Cyber Threat Intelligence",
    text: "Turn uncertain information into assessed intelligence someone can act on.",
    accent: "#5B3A9E",
    status: "Open now",
    href: "/simulation-based-work-experience/cyber-threat-intelligence",
  },
  {
    name: "Virtual Administrative Assistant",
    text: "Hold the diary, protect the detail and keep decisions moving.",
    accent: "#7A5C0C",
    status: "In development",
    href: "/simulation-based-work-experience/virtual-administrative-assistant",
  },
];

const evidenceStages = [
  {
    num: "01",
    title: "Realistic scenario",
    text: "Participants enter a representative professional situation with an organisation, stakeholders and a problem that needs a decision.",
  },
  {
    num: "02",
    title: "Workplace brief",
    text: "Participants receive the context, the constraints and a defined set of Jobs to Be Done.",
  },
  {
    num: "03",
    title: "Professional output",
    text: "Participants analyse the information, make decisions and produce the work artefacts the discipline actually produces.",
  },
  {
    num: "04",
    title: "Competency assessment",
    text: "Submitted work is evaluated using defined competency rubrics and AI-powered assessment, with competency-level scoring and developmental feedback.",
  },
  {
    num: "05",
    title: "Verifiable portfolio",
    text: "The participant publishes their artefacts, assessment results and demonstrated competencies as career evidence.",
  },
];

const artefacts = [
  "Product strategies and roadmaps",
  "Project plans and RAID logs",
  "Requirements and process models",
  "Cyber threat intelligence assessments",
  "Executive-support plans and operational documents",
  "Stakeholder communications",
  "Decision records",
  "Readiness Scores",
  "Digital credentials",
  "Verifiable portfolio evidence",
];

const usualRoute = [
  "Attend training",
  "Receive a certificate",
  "Add the claim to a CV",
  "Ask an employer to trust the claim",
];

const careerBridgeRoute = [
  "Enter a realistic workplace scenario",
  "Complete defined professional work",
  "Submit the outputs for assessment",
  "Receive competency-level feedback",
  "Publish verifiable evidence",
  "Show employers what was actually demonstrated",
];

const missionItems = [
  "Reduce barriers to practical career experience",
  "Help people demonstrate capability",
  "Support fairer access to career progression",
  "Develop evidence-based workforce pathways",
  "Work with communities and institutions",
  "Operate with governance, safeguarding and accountability",
];

const combos = [
  { from: "Business Analysis", to: "Product Management", note: "Add outcome ownership and prioritisation to analytical depth." },
  { from: "Project Management", to: "Business Analysis", note: "Move from delivering the work to defining the problem." },
  { from: "Virtual Administrative Assistant", to: "Project Coordination", note: "Build from operational support into delivery ownership." },
  { from: "Cyber Threat Intelligence", to: "Cyber Governance and Risk", note: "Extend analytical intelligence work into governance and risk." },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

const Index = () => {
  return (
    <PageTransition>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-ink overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-warm-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-warm-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-warm-white/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="page-container flex  relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-0.5 bg-accent-teal" />
              <p className="text-label font-sans uppercase text-accent-teal">
                Evidence-based career development
              </p>
            </div>

            <h1 className="font-serif text-hero-sm md:text-hero font-semibold text-warm-white leading-[1.1] max-w-4xl mb-8 text-balance">
              Turn Career Potential Into Verifiable Proof
            </h1>

            <p className="text-body-lg text-cool leading-relaxed max-w-2xl mb-10 font-sans">
              Career Bridge Foundation helps people build practical experience, demonstrate applied capability and
              create verifiable career evidence through realistic workplace simulations, AI-powered evaluation and
              digital career portfolios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/simulation-based-work-experience" className="btn-primary-light">
                Explore Work Experience
              </Link>
              <Link to="/partners" className="btn-secondary-light">
                Partner With Career Bridge
              </Link>
            </div>

            <div className="flex flex-col gap-5 max-w-xl">
              <CohortStrip/>
            </div>
          </AnimatedSection>
          <PortfolioRecord className="hidden md:block "/>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-cool/40"
          >
            <ChevronDown size={24} strokeWidth={1.5} />
          </motion.div>
        </div>
      </section>

      {/* ── THE PROBLEM ─────────────────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">The Problem</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-2xl leading-tight">
              Capability is often present. The evidence is missing.
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-16 font-sans">
              Aspiring professionals, graduates, career changers and returners face the same credibility gap. They
              are asked to demonstrate what they can do at the exact moment they have nothing to show for it.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle">
            {evidenceGaps.map((gap) => (
              <StaggerItem key={gap.num}>
                <div className="bg-warm-white p-8 h-full">
                  <div className="flex items-start gap-5">
                    <span className="mono-number text-lg font-medium">{gap.num}</span>
                    <p className="text-body text-slate leading-relaxed font-sans">{gap.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── JOIN · PROVE · PROGRESS ─────────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Join. Prove. Progress.</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-2xl leading-tight">
              We turn potential into demonstrable career evidence.
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-16 font-sans">
              One framework, three stages. Each stage produces something the next one uses.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {journeyStages.map((stage) => (
              <StaggerItem key={stage.phase}>
                <div className="card border-t-[3px] border-accent-teal h-full flex flex-col">
                  <p className="text-label font-sans font-semibold uppercase text-accent-teal mb-5 flex items-center gap-2">
                    <span className="mono-number text-accent-teal">{stage.num}</span>
                    {stage.phase}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-4 leading-snug">{stage.title}</h3>
                  <p className="text-body text-slate leading-relaxed font-sans mb-6">{stage.text}</p>
                  <ul className="space-y-2 mt-auto pt-4 border-t border-subtle">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate font-sans leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="mt-10">
              <Link to="/how-it-works" className="link-animated inline-flex items-center gap-2 text-sm font-medium">
                See how it works in detail
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </Link>
            </p>
        </div>
      </section>

      {/* ── WORK EXPERIENCE PATHWAYS ────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Our Flagship Participant Programme</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-2xl leading-tight">
              Simulation-Based Work Experience
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-16 font-sans">
              Complete realistic professional scenarios, respond to workplace briefs, produce portfolio-ready outputs
              and demonstrate how you apply your knowledge.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
            {pathways.map((pathway) => (
              <StaggerItem key={pathway.name}>
                <Link
                  to={pathway.href}
                  className="group block h-full bg-warm-white border border-subtle p-6 hover:border-ink/30 transition-colors duration-300"
                  style={{ borderTopWidth: "3px", borderTopColor: pathway.accent }}
                >
                  <p
                    className="text-[10px] font-sans font-semibold uppercase tracking-[0.1em] mb-4"
                    style={{ color: pathway.accent }}
                  >
                    {pathway.status}
                  </p>
                  <h3 className="font-serif text-base font-semibold text-ink mb-3 leading-snug">{pathway.name}</h3>
                  <p className="text-sm text-slate leading-relaxed font-sans mb-6">{pathway.text}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-sans font-medium text-ink group-hover:text-accent-teal transition-colors duration-300">
                    Explore
                    <ArrowRight size={13} strokeWidth={1.75} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.15}>
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
              <DisclosureShort className="flex-1" />
              <div className="flex-1">
                <AccessLine />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link to="/simulation-based-work-experience" className="btn-primary">
                Explore Work Experience Pathways
              </Link>
              <Link to="/apply" className="btn-secondary">
                Apply Free
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── HOW EVIDENCE IS CREATED ─────────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">How Evidence Is Created</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-16 max-w-2xl leading-tight">
              From workplace challenge to verifiable evidence.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-subtle">
            {evidenceStages.map((stage) => (
              <StaggerItem key={stage.num}>
                <div className="bg-warm-white p-6 md:p-7 h-full">
                  <span className="mono-number text-sm mb-4 block">Stage {stage.num}</span>
                  <h3 className="font-serif text-base font-semibold text-ink mb-3 leading-snug">{stage.title}</h3>
                  <p className="text-sm text-slate leading-relaxed font-sans">{stage.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── WHAT PARTICIPANTS BUILD ─────────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">What Participants Build</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-2xl leading-tight">
              Real work outputs, not course completions.
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-16 font-sans">
              Outputs vary by discipline and by simulation. These are examples of what participants can produce and
              publish as career evidence.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {artefacts.map((item, i) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-4 border border-subtle border-l-[3px] border-l-accent-teal p-5">
                  <span className="mono-number text-xs shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-sans font-medium text-ink leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── ACCESS AND CREDITS ──────────────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Access And Credits</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-2xl leading-tight">
              What is free, and what uses credits.
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-6 font-sans">
              <strong className="text-ink">Programme access is free. AI usage requires credits.</strong> You can
              apply, create your account and access the programme at no cost. Credits are required when you use
              AI-powered simulation, evaluation and portfolio-generation features.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <AccessPanels />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Link to="/how-it-works" className="link-animated inline-flex items-center gap-2 mt-12 text-sm font-sans font-medium">
              See the full access model
              <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TWO PATHWAYS (who we support) ───────────────────────────── */}
      <TwoAudiencesSection/>

      {/* ── WHY THE MODEL IS DIFFERENT ──────────────────────────────── */}
      <section className="section-spacing bg-warm-white border-t border-subtle">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Why The Model Is Different</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-2xl leading-tight">
              Evidence beyond certificates and CV claims.
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-16 font-sans">
              Training and qualifications do their job well. They establish what somebody has learned. What they
              cannot do is show an employer how that knowledge holds up when it is applied. Career Bridge is the
              evidence layer between the two.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <AnimatedSection>
              <div className="card bg-warm-grey h-full">
                <h3 className="text-label font-sans font-semibold uppercase text-slate mb-6">The usual route</h3>
                <ul className="space-y-3">
                  {usualRoute.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-body text-slate font-sans leading-relaxed">
                      <span className="mono-number text-xs shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="card border-2 border-accent-teal h-full">
                <h3 className="text-label font-sans font-semibold uppercase text-accent-teal mb-6">
                  With Career Bridge
                </h3>
                <ul className="space-y-3">
                  {careerBridgeRoute.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-body text-slate font-sans leading-relaxed">
                      <span className="mono-number text-xs text-accent-teal shrink-0 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MULTIDISCIPLINARY EVIDENCE ──────────────────────────────── */}
      <section className="section-spacing bg-warm-grey border-t border-subtle" id="combine">
        <div className="page-container">
          <AnimatedSection>
            <div className="section-label">Multidisciplinary Evidence</div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-ink mb-6 max-w-2xl leading-tight">
              Build evidence across disciplines
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-content mb-16 font-sans">
              Participants are not permanently restricted to one discipline. Evidence can be built progressively
              across related professional areas.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {combos.map((combo) => (
              <StaggerItem key={combo.from + combo.to}>
                <div className="card h-full">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-body font-sans font-semibold text-ink">{combo.from}</span>
                    <ArrowRight className="w-4 h-4 text-accent-teal shrink-0" />
                    <span className="text-body font-sans font-semibold text-ink">{combo.to}</span>
                  </div>
                  <p className="text-sm text-slate font-sans leading-relaxed">{combo.note}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.15}>
            <p className="text-body text-slate leading-relaxed max-w-content mt-8 font-sans">
              Available pathways depend on the simulations currently offered.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SOCIAL-ENTERPRISE PURPOSE ───────────────────────────────── */}
      <section className="section-spacing bg-ink border-t border-subtle">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-0.5 bg-accent-teal" />
                <p className="text-label font-sans uppercase text-accent-teal">Our Purpose</p>
              </div>
              <h2 className="font-serif text-display-sm md:text-display font-semibold text-warm-white mb-6 leading-tight">
                Career evidence should not depend on who already has access.
              </h2>
              <p className="text-body text-cool leading-relaxed mb-10 font-sans">
                Career Bridge Foundation is the public-facing name of Career Bridge CIC, a Community Interest Company
                registered in England and Wales.
              </p>
              <ul className="space-y-3">
                {missionItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body text-cool font-sans leading-relaxed border-t border-warm-white/10 pt-3 first:border-0 first:pt-0">
                    <Check size={16} strokeWidth={2} className="text-accent-teal shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="registration-card !bg-ink-light !border-warm-white/10">
                <div className="registration-item !border-warm-white/10">
                  <p className="registration-label">Public-facing name</p>
                  <p className="registration-value !text-warm-white">Career Bridge Foundation</p>
                </div>
                <div className="registration-item !border-warm-white/10">
                  <p className="registration-label">Registered entity</p>
                  <p className="registration-value !text-warm-white">Career Bridge CIC</p>
                </div>
                <div className="registration-item !border-warm-white/10">
                  <p className="registration-label">Legal form</p>
                  <p className="registration-value !text-warm-white">Community Interest Company</p>
                </div>
                <div className="registration-item !border-warm-white/10">
                  <p className="registration-label">Jurisdiction</p>
                  <p className="registration-value !text-warm-white">England and Wales</p>
                </div>
                <div className="registration-item !border-warm-white/10">
                  <p className="registration-label">Company number</p>
                  <p className="registration-value !text-warm-white">16939467</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Link to="/governance" className="btn-secondary-light !py-3 !px-5 !text-[11px]">
                    Governance
                  </Link>
                  <Link to="/contact" className="btn-secondary-light !py-3 !px-5 !text-[11px]">
                    Contact
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CURRENT OPPORTUNITY CTA ─────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        <div className="absolute inset-0 dot-pattern pointer-events-none" />
        <div className="page-container relative z-10 py-20 md:py-28">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-0.5 bg-accent-teal" />
              <p className="text-label font-sans uppercase text-accent-teal">Join · Prove · Progress</p>
            </div>
            <h2 className="font-serif text-display-sm md:text-display font-semibold text-warm-white mb-6 max-w-2xl leading-tight">
              Ready to build evidence of what you can do?
            </h2>
            <p className="text-body-lg text-cool leading-relaxed max-w-2xl mb-10 font-sans">
              Explore available simulation-based work experience pathways and apply to join the Career Bridge
              Foundation programme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/simulation-based-work-experience" className="btn-primary-light">
                Explore Available Pathways
              </Link>
              <Link to="/apply" className="btn-secondary-light">
                Apply Free
              </Link>
            </div>
            <div className="flex flex-col gap-5 max-w-xl">
              <DisclosureShort dark />
              <AccessLine dark />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PARTNERSHIP CTA ──────────────────────────────────────────── */}
      <section className="bg-warm-grey border-t border-subtle">
        <div className="page-container py-16 md:py-24">
          <AnimatedSection>
            <div className="section-label">For Organisations</div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink mb-6 max-w-2xl leading-snug">
              Build evidence-led talent pathways with Career Bridge.
            </h2>
            <p className="text-body text-slate leading-relaxed max-w-2xl mb-10 font-sans">
              Partner with us to deliver simulation-based career development, competency assessment and verifiable
              portfolio evidence for your workforce, learners or community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/partners" className="btn-primary">
                Partner With Career Bridge
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact The Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;

import { Check } from "lucide-react";

/**
 * Shared "programme access is free, AI usage requires credits" components.
 * Canonical wording — do not paraphrase. Reused across Home, How It Works,
 * and the Work Experience programme pages so the access model reads
 * identically everywhere it appears.
 */

const FREE_ITEMS = [
  "Applying to the programme",
  "Being considered and assessed for selection",
  "Creating your account",
  "Accessing and exploring the programme",
  "Onboarding, if you are selected",
];

const CREDIT_ITEMS = [
  "AI-powered workplace simulations",
  "AI-powered evaluation of your submitted work",
  "Processing and evaluation of submitted evidence",
  "AI-powered portfolio generation",
  "Other AI-powered activities within the simulation experience",
];

/**
 * UNRESOLVED — credit requirements and pricing are not published anywhere.
 * The previous model published three claims that are now removed and must
 * be re-confirmed under the credit model before anything is republished:
 * (a) "one Assessment Credit activates one complete simulation", (b)
 * "packages start with three simulations", (c) regional pricing bands.
 * Do not add any quantity or price to COST_LIST or CREDITS_PANEL below
 * until approved figures are supplied.
 */
const COST_LIST = [
  "There is no application fee and no programme-access fee.",
  "You can create an account, access the programme and explore it at no cost.",
  "Credits are required when you use AI-powered functionality: simulation, evaluation and portfolio generation.",
  "Credits give you access to the AI-powered infrastructure that runs the simulations, evaluates your work and generates your career evidence.",
  "Credit requirements and pricing are disclosed before you commit to anything.",
  "Applying, or being selected, does not create an obligation to purchase credits.",
  "This is simulation-based work experience. It is not employment and it is not a training course with a course fee.",
];

export const AccessLine = ({ dark = false, className = "" }: { dark?: boolean; className?: string }) => (
  <p className={`text-sm md:text-body leading-relaxed max-w-xl font-sans ${dark ? "text-cool" : "text-slate"} ${className}`}>
    <strong className={dark ? "text-warm-white" : "text-ink"}>Programme access is free. AI usage requires credits.</strong>{" "}
    Apply, join and explore at no cost. Use credits when you are ready to begin AI-powered simulations and evaluation.
  </p>
);

/** Detailed free/credits cost breakdown — the numbered list plus the "what credits enable" panel. */
export const AccessBreakdown = ({ className = "" }: { className?: string }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 ${className}`}>
    <div>
      <p className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-1 leading-none">Free</p>
      <p className="text-label font-sans uppercase text-slate mb-8">Programme access</p>
      <ul className="space-y-4">
        {COST_LIST.map((item, i) => (
          <li key={item} className="flex items-start gap-4 pt-4 border-t border-subtle first:border-0 first:pt-0">
            <span className="mono-number text-xs shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-body text-slate leading-relaxed font-sans">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="card h-fit">
      <h3 className="font-serif text-xl font-semibold text-ink mb-4 leading-snug">What credits enable</h3>
      <p className="text-body text-slate leading-relaxed font-sans mb-4">
        Credits give you access to the AI-powered infrastructure used to run your simulations, evaluate your work
        and generate the evidence in your digital career portfolio.
      </p>
      <p className="text-body text-slate leading-relaxed font-sans">
        You are not buying a course, a programme place or an employment outcome. You are using AI-powered
        simulation, evaluation and evidence infrastructure.
      </p>
    </div>
  </div>
);

const CREDIT_STEPS = [
  {
    n: "01",
    title: "Read the brief",
    body: "A workplace scenario, a professional brief and a defined set of Jobs to Be Done. The work, not just a course about the work.",
  },
  {
    n: "02",
    title: "Do the work",
    body: "Analyse the information, make the decisions, solve the problem and produce professional work outputs, with an AI Simulation Assistant available throughout.",
  },
  {
    n: "03",
    title: "Get assessed",
    body: "Submit your work for AI and rubric-based competency assessment. Receive competency-level scoring, developmental feedback, a Readiness Score and an AI Voice Debrief.",
  },
  {
    n: "04",
    title: "Own the evidence",
    body: "Keep an editable, partner-agnostic artefact, publish it to your digital career portfolio and receive a credential for the completed simulation.",
  },
];

/**
 * "What credits enable" — dark-ground section: eyebrow, headline, four
 * numbered steps and a closing Career Bridge / Evidentize attribution line.
 * Always ink content (no light variant supplied) — wrap in a dark section
 * when using; text colours resolve via the sitewide accent/cool cascade
 * once nested under a bg-ink/bg-ink-light/bg-ink-deep ancestor.
 *
 * Note: a shorter, differently-worded version of this same section already
 * exists built directly into HowItWorks.tsx's hero (a prior request). This
 * export uses the fuller copy as pasted here; reconciling the two into one
 * source of truth is a separate follow-up, not done automatically.
 */
export const AccessInfrastructure = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <div className="flex items-center gap-4 mb-8">
      <div className="w-10 h-0.5 bg-accent-teal" />
      <p className="text-label font-sans uppercase text-accent-teal">What Credits Enable</p>
    </div>
    <h2 className="font-serif text-display-sm md:text-display font-semibold text-warm-white mb-6 max-w-2xl leading-tight">
      The infrastructure your evidence runs on
    </h2>
    <p className="text-body text-cool leading-relaxed max-w-content mb-14 font-sans">
      Credits give you access to the AI-powered simulation, evaluation and evidence infrastructure provided by
      Evidentize, the technology platform behind the programme.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {CREDIT_STEPS.map((step) => (
        <div key={step.n} className="bg-ink-light border border-white/10 p-8 h-full flex flex-col">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent-teal mb-4 block">
            Step {step.n}
          </span>
          <h3 className="font-serif text-lg font-semibold text-warm-white mb-3 leading-snug">{step.title}</h3>
          <p className="text-sm text-cool leading-relaxed font-sans">{step.body}</p>
        </div>
      ))}
    </div>

    <p className="text-body text-cool leading-relaxed max-w-content font-sans">
      Career Bridge Foundation owns the programme and the application experience. Evidentize provides the
      technology infrastructure that supports simulations, AI-powered evaluation, evidence generation and digital
      career portfolios.
    </p>
  </div>
);

export const AccessPanels = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    <div className="card border-t-[3px] border-accent-teal">
      <p className="text-label font-sans font-semibold uppercase text-accent-teal mb-4">
        Free access
      </p>
      <h3 className="font-serif text-xl font-semibold text-ink mb-6 leading-snug">
        No fee to apply, join or explore
      </h3>
      <ul className="space-y-3">
        {FREE_ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check size={16} strokeWidth={2} className="text-accent-teal mt-1 shrink-0" />
            <span className="text-body text-slate leading-relaxed font-sans">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="card border-t-[3px] border-ink">
      <p className="text-label font-sans font-semibold uppercase text-ink mb-4">
        Credit-based AI usage
      </p>
      <h3 className="font-serif text-xl font-semibold text-ink mb-6 leading-snug">
        Credits unlock AI-powered functionality
      </h3>
      <ul className="space-y-3">
        {CREDIT_ITEMS.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check size={16} strokeWidth={2} className="text-ink mt-1 shrink-0" />
            <span className="text-body text-slate leading-relaxed font-sans">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

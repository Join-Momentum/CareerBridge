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

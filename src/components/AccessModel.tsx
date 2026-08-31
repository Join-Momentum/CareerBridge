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

export const AccessLine = ({ dark = false, className = "" }: { dark?: boolean; className?: string }) => (
  <p className={`text-sm md:text-body leading-relaxed max-w-xl font-sans ${dark ? "text-cool" : "text-slate"} ${className}`}>
    <strong className={dark ? "text-warm-white" : "text-ink"}>Programme access is free. AI usage requires credits.</strong>{" "}
    Apply, join and explore at no cost. Use credits when you are ready to begin AI-powered simulations and evaluation.
  </p>
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

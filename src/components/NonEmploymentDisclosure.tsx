import { Info } from "lucide-react";

/**
 * Shared non-employment disclosure. Short form sits beside every Apply CTA;
 * full form sits immediately before each page's final CTA. Wording is fixed —
 * do not reword when reusing.
 */

export const DisclosureShort = ({ dark = false, className = "" }: { dark?: boolean; className?: string }) => (
  <div
    className={`flex gap-3 items-start p-5 md:p-6 border rounded-sm max-w-xl ${
      dark ? "bg-warm-white/5 border-warm-white/15" : "notice-box"
    } ${className}`}
  >
    <Info size={18} strokeWidth={1.8} className="text-accent-teal shrink-0 mt-0.5" />
    <p className={`text-sm leading-relaxed font-sans ${dark ? "text-cool" : "text-slate"}`}>
      <strong className={dark ? "text-warm-white" : "text-ink"}>
        This is work experience delivered through simulation.
      </strong>{" "}
      It is not employment, a paid role, internship, apprenticeship or job placement.
    </p>
  </div>
);

export const DisclosureFull = ({ className = "" }: { className?: string }) => (
  <div className={`notice-box max-w-3xl ${className}`}>
    <p className="text-label font-sans font-semibold uppercase text-cool mb-2 flex items-center gap-2">
      <Info size={16} strokeWidth={1.8} />
      Programme disclosure — please read before applying
    </p>
    <div className="space-y-4">
      <p className="text-body text-ink font-medium leading-relaxed font-sans">
        Career Bridge Foundation uses recruitment technology to administer applications to its Simulation-Based Work
        Experience Programme. Opportunities may therefore appear within systems or channels normally used to
        advertise vacancies. However, this programme is not a job vacancy, paid role, internship, apprenticeship,
        placement or offer of employment.
      </p>
      <p className="text-body text-slate leading-relaxed font-sans">
        Participants do not become employees or workers of Career Bridge Foundation or organisations represented
        within simulated scenarios. Organisations, roles, projects, stakeholders and workplace situations within
        simulations may be fictional, synthetic or representative of real professional environments.
      </p>
      <p className="text-body text-slate leading-relaxed font-sans">
        Participation does not guarantee employment, interviews, recruitment outcomes or earnings. The programme
        enables participants to practise professional work, demonstrate applied capability, receive structured
        assessment and build credible evidence of what they can do.
      </p>
    </div>
  </div>
);

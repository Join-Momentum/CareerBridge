import { Link } from "react-router-dom";

/**
 * Inline founding-cohort notice strip — sits within page content (e.g.
 * below a hero's CTAs), distinct from the full-width AnnouncementBanner.
 * Pure markup + CSS, dark-ground only (translucent white fill, light text).
 * Colours are the exact values from the supplied spec, not the site's
 * nearest existing tokens.
 */
const CohortStrip = ({ className = "" }: { className?: string }) => (
  <div
    className={`mt-8 max-w-[36rem] flex flex-wrap items-center gap-x-6 gap-y-3 rounded-[3px] border border-[#17547F] border-l-4 border-l-[#C7A24A] bg-white/5 px-6 py-4 ${className}`}
  >
    <p className="m-0 text-sm text-[#CFE2EE]">
      <strong>Applications are now open</strong> for our 2026 founding cohort across five career pathways. Programme
      access is free; AI usage requires credits.
    </p>
    <Link
      to="/simulation-based-work-experience#pathways"
      className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-accent-teal hover:text-warm-white transition-colors duration-200"
    >
      View Open Pathways
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
        <path d="M5 12h13M13 6l6 6-6 6" />
      </svg>
    </Link>
  </div>
);

export default CohortStrip;

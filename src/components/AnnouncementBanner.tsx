import { forwardRef } from "react";
import { Link } from "react-router-dom";

interface AnnouncementBannerProps {
  onClose: () => void;
}

/**
 * Dismissible top announcement bar. Visibility lives in Layout's
 * in-memory state only (no storage) — dismissing hides it for the
 * current page session, and it returns on the next full reload.
 */
const AnnouncementBanner = forwardRef<HTMLDivElement, AnnouncementBannerProps>(({ onClose }, ref) => {
  return (
    <div ref={ref} className="fixed top-0 left-0 right-0 z-[60] bg-ink border-b border-white/10">
      <div className="page-container py-3 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-sans text-warm-white/90 leading-snug">
            <strong className="text-accent-teal font-semibold">Founding Cohort 2026:</strong>{" "}
            Applications are open across five career pathways.
          </p>
          <Link
            to="/simulation-based-work-experience"
            className="w-fit text-sm font-sans font-medium text-accent-teal hover:text-warm-white underline underline-offset-4 transition-colors duration-200"
          >
            Explore Pathways →
          </Link>
        </div>
        <button
          onClick={onClose}
          aria-label="Dismiss announcement"
          className="shrink-0 w-8 h-8 flex items-center justify-center border border-white/25 text-warm-white/70 hover:text-warm-white hover:border-white/50 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
});

AnnouncementBanner.displayName = "AnnouncementBanner";

export default AnnouncementBanner;

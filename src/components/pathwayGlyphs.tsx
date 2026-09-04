import { ReactNode } from "react";

/**
 * The five per-pathway monoline glyphs, shared between PathwayRecord and
 * PathwayCards so both read from one source rather than duplicating SVGs.
 * Keyed by the same slugs used throughout (data/pathways.ts, records/PathwayRecord.tsx).
 */
export const PATHWAY_GLYPHS: Record<
  "product-management" | "project-management" | "business-analysis" | "cyber-threat-intelligence" | "virtual-administrative-assistant",
  ReactNode
> = {
  "product-management": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 2 3 7v10l9 5 9-5V7z" />
      <path d="M3 7l9 5 9-5" />
      <path d="M12 12v10" />
    </svg>
  ),
  "project-management": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 5h7v4H3z" />
      <path d="M9 12h7v4H9z" />
      <path d="M14 19h7v-4" />
      <path d="M6.5 9v10h2.5" />
    </svg>
  ),
  "business-analysis": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.2 15.2 21 21" />
      <path d="M8 10.5h5M10.5 8v5" />
    </svg>
  ),
  "cyber-threat-intelligence": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 2.5 4.5 5.5v6c0 5 3.2 8.5 7.5 10 4.3-1.5 7.5-5 7.5-10v-6z" />
      <path d="M9.2 12.2l2 2 3.6-4" />
    </svg>
  ),
  "virtual-administrative-assistant": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M7.5 3v3M16.5 3v3" />
      <path d="M7.5 13h4M7.5 16h7" />
    </svg>
  ),
};

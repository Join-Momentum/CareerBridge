import { ReactNode } from "react";
import RecordCard from "./RecordCard";

export type PathwaySlug =
  | "product-management"
  | "project-management"
  | "business-analysis"
  | "cyber-threat-intelligence"
  | "virtual-administrative-assistant";

interface PathwayRecordData {
  name: string;
  tabRef: string;
  cueColor: string;
  artefactTypes: number;
  competencies: number;
}

/**
 * Variant D data, per pathway. --pcue and the artefact/competency counts
 * are the exact values from the supplied spec table. Shared across all
 * five: Simulation environment = 25+ scenarios · Programme access = Free ·
 * AI usage = Credits · Cohort = Founding 2026.
 */
const PATHWAY_DATA: Record<PathwaySlug, PathwayRecordData> = {
  "product-management": { name: "Product Management", tabRef: "PM · 2026", cueColor: "#A34411", artefactTypes: 12, competencies: 8 },
  "project-management": { name: "Project Management", tabRef: "PJ · 2026", cueColor: "#0E6E7D", artefactTypes: 11, competencies: 8 },
  "business-analysis": { name: "Business Analysis", tabRef: "BA · 2026", cueColor: "#1F7A3D", artefactTypes: 12, competencies: 8 },
  "cyber-threat-intelligence": { name: "Cyber Threat Intelligence", tabRef: "CTI · 2026", cueColor: "#5B3A9E", artefactTypes: 10, competencies: 8 },
  "virtual-administrative-assistant": { name: "Virtual Administrative Assistant", tabRef: "VA · 2026", cueColor: "#7A5C0C", artefactTypes: 12, competencies: 9 },
};

// The spec's own example glyph (Product Management's monoline icon, already
// used on that pathway's card) — the only one supplied. The other four
// pathways' glyphs are not yet available; pass `glyph` explicitly for those
// until the real per-pathway icons are supplied, rather than inventing ones.
const PRODUCT_MANAGEMENT_GLYPH = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M12 2 3 7v10l9 5 9-5V7z" />
    <path d="M3 7l9 5 9-5" />
    <path d="M12 12v10" />
  </svg>
);

const DEFAULT_GLYPHS: Partial<Record<PathwaySlug, ReactNode>> = {
  "product-management": PRODUCT_MANAGEMENT_GLYPH,
};

/**
 * Variant D — Pathway record.
 * Used on: all 5 pathway page heroes. Same structure, different data and
 * cue colour per pathway.
 */
const PathwayRecord = ({
  slug,
  glyph,
  className = "",
}: {
  slug: PathwaySlug;
  /** Overrides the default glyph. Required for every pathway except Product Management until its real icon is supplied. */
  glyph?: ReactNode;
  className?: string;
}) => {
  const data = PATHWAY_DATA[slug];
  const resolvedGlyph = glyph ?? DEFAULT_GLYPHS[slug];

  return (
    <RecordCard
      className={className}
      surface="ink"
      glyph={resolvedGlyph}
      cueColor={data.cueColor}
      tabLeft="Pathway"
      tabRight={data.tabRef}
      title={data.name}
      meta="Assessed workplace simulations"
      rows={[
        { k: "Simulation environment", v: "25+ scenarios" },
        { k: "Portfolio artefacts", v: `${data.artefactTypes} types` },
        { k: "Competencies assessed", v: String(data.competencies) },
        { k: "Programme access", v: "Free" },
        { k: "AI usage", v: "Credits" },
        { k: "Cohort", v: "Founding 2026" },
      ]}
      foot={{ stamp: "Open", text: "Programme access is free. AI usage requires credits." }}
    />
  );
};

export default PathwayRecord;

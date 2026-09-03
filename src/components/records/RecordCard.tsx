import { ReactNode } from "react";

export interface RecordRow {
  k: string;
  v: ReactNode;
}

export interface RecordFoot {
  stamp: string;
  text: string;
}

export interface RecordCardProps {
  tabLeft: string;
  tabRight: string;
  title: ReactNode;
  titleAs?: "h2" | "h3" | "h4";
  meta: string;
  rows: RecordRow[];
  foot?: RecordFoot;
  glyph?: ReactNode;
  cueColor?: string;
  /** Only affects the caption's colour (readable on dark vs light grounds) — the card itself is always white. */
  surface?: "ink" | "paper";
  note?: string;
  className?: string;
}

/**
 * "Record" — the code-only hero visual used across the site (portfolio
 * record, access model at a glance, simulation environment, pathway
 * record). Pure markup + CSS, no image asset, so it reflows on mobile,
 * stays sharp at any resolution and remains readable to screen readers.
 * Colours are the exact hex values from the supplied spec
 * (code-only-visuals.html), not the site's nearest existing tokens —
 * this component is deliberately pixel-precise to that file rather than
 * reusing close-but-not-identical sitewide tokens.
 */
const RecordCard = ({
  tabLeft,
  tabRight,
  title,
  titleAs = "h2",
  meta,
  rows,
  foot,
  glyph,
  cueColor,
  surface = "ink",
  note,
  className = "",
}: RecordCardProps) => {
  const Title = titleAs;

  return (
    <div className={className}>
      <div className="bg-white text-[#00335A] border border-[#CFDCE4] rounded-[6px] overflow-hidden shadow-[0_18px_40px_-28px_rgba(0,26,48,0.65)]">
        {/* Tab */}
        <div className="flex items-center justify-between gap-3 bg-[#EAF0F4] border-b border-[#CFDCE4] px-4 py-3 font-mono text-xs tracking-[0.08em] uppercase text-[#3E5D77]">
          <span>{tabLeft}</span>
          <span>{tabRight}</span>
        </div>

        {/* Body */}
        <div className="p-6">
          {glyph && (
            <div className="mb-4" style={{ color: cueColor }}>
              {glyph}
            </div>
          )}
          <Title className="font-serif text-[clamp(1.125rem,0.5vw+1rem,1.375rem)] leading-snug text-[#00335A] mb-2">
            {title}
          </Title>
          <p className="font-mono text-xs tracking-[0.05em] text-[#3E5D77] mb-4">{meta}</p>
          <ul className="list-none m-0 p-0">
            {rows.map((row, i) => (
              <li
                key={i}
                className={`flex items-baseline justify-between gap-4 py-[0.55rem] text-sm ${
                  i > 0 ? "border-t border-[#CFDCE4]" : ""
                }`}
              >
                <span className="text-[#3E5D77]">{row.k}</span>
                <span className="font-mono font-medium tracking-[0.02em] text-right">{row.v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Foot */}
        {foot && (
          <div className="flex items-center gap-3 border-t border-[#CFDCE4] bg-[#E2EFF9] px-6 py-4 text-sm">
            <span className="shrink-0 font-mono text-xs font-semibold tracking-[0.12em] uppercase text-[#00518F] border-[1.5px] border-[#00518F] rounded-[2px] px-2 py-1">
              {foot.stamp}
            </span>
            <span>{foot.text}</span>
          </div>
        )}
      </div>

      {note && (
        <p
          className={`font-mono text-xs tracking-[0.06em] uppercase text-center mt-3 ${
            surface === "ink" ? "text-[#9BB8CC]" : "text-[#3E5D77]"
          }`}
        >
          {note}
        </p>
      )}
    </div>
  );
};

export default RecordCard;

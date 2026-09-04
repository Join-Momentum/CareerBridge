import { useState } from "react";
import { Reveal } from "@/components/simulation/Motion";

/**
 * "Founding Cohort 2026 credit packs" — shared across the Work Experience
 * hub and every pathway page, since credit packs are programme-wide, not
 * per-discipline.
 *
 * Confirmed founding-cohort amounts are held in USD only — no FX rate has
 * been approved for any of the region's local currencies, so pricing is
 * always shown in USD with a note on which regions bill locally instead.
 * This mirrors the reference page's own pricing engine (CB_PRICING /
 * cbRenderPricing) exactly: region picks a pricing tier (standard vs
 * Africa Access), the pack amounts shown are always the USD figure, and
 * the currency note explains whether that matches your billing currency.
 */

type Currency = "USD";

interface Pack {
  id: string;
  name: string;
  credits: number;
  perCredit: Record<Currency, number>;
  total: Record<Currency, number>;
  note: string;
}

interface Tier {
  label: string;
  packs: Pack[];
}

interface Region {
  code: string;
  name: string;
  tier: "standard" | "africa";
  currency: string;
}

const BASE_CURRENCY: Currency = "USD";

const PACK_NOTES = {
  builder: "Three complete workplace simulations, each with AI-powered evaluation and portfolio generation.",
  professional: "Ten complete workplace simulations, at a lower rate per simulation.",
};

const TIERS: Record<"standard" | "africa", Tier> = {
  standard: {
    label: "Standard pricing",
    packs: [
      { id: "builder", name: "Builder", credits: 3, perCredit: { USD: 29.99 }, total: { USD: 89.97 }, note: PACK_NOTES.builder },
      { id: "professional", name: "Professional", credits: 10, perCredit: { USD: 24.9 }, total: { USD: 249.0 }, note: PACK_NOTES.professional },
    ],
  },
  africa: {
    label: "Africa Access pricing",
    packs: [
      { id: "builder", name: "Builder", credits: 3, perCredit: { USD: 14.99 }, total: { USD: 44.97 }, note: PACK_NOTES.builder },
      { id: "professional", name: "Professional", credits: 10, perCredit: { USD: 12.4 }, total: { USD: 124.0 }, note: PACK_NOTES.professional },
    ],
  },
};

const REGIONS: Region[] = [
  { code: "GB", name: "United Kingdom", tier: "standard", currency: "GBP" },
  { code: "US", name: "United States", tier: "standard", currency: "USD" },
  { code: "CA", name: "Canada", tier: "standard", currency: "CAD" },
  { code: "NG", name: "Nigeria", tier: "africa", currency: "NGN" },
  { code: "GH", name: "Ghana", tier: "africa", currency: "GHS" },
  { code: "RW", name: "Rwanda", tier: "africa", currency: "RWF" },
  { code: "OTHER", name: "Elsewhere", tier: "standard", currency: "USD" },
];

const formatMoney = (amount: number, currency: string) => {
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
};

const CreditPacks = ({ className = "" }: { className?: string }) => {
  const [regionCode, setRegionCode] = useState(REGIONS[0].code);
  const region = REGIONS.find((r) => r.code === regionCode) ?? REGIONS[0];
  const tier = TIERS[region.tier];
  const isBaseCurrency = region.currency === BASE_CURRENCY;

  return (
    <Reveal className={className}>
      <h3 className="font-serif text-2xl font-semibold text-ink mb-6">Founding Cohort 2026 credit packs</h3>

      <div className="flex flex-wrap items-end justify-between gap-4 mb-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cb-region" className="text-label font-sans uppercase text-slate">
            Show pricing for
          </label>
          <select
            id="cb-region"
            value={regionCode}
            onChange={(e) => setRegionCode(e.target.value)}
            className="bg-white border border-subtle text-sm text-ink px-3 py-2 rounded-sm font-sans"
          >
            {REGIONS.map((r) => (
              <option key={r.code} value={r.code}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
        <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent-teal border border-accent-teal/40 rounded-full px-3 py-1.5">
          {tier.label}
        </span>
      </div>

      <p className="text-sm text-slate leading-relaxed font-sans mb-6 max-w-2xl">
        Your pricing region is determined by your location at the application stage, so the rate you see when you
        apply is the rate that applies to you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {tier.packs.map((pack, i) => (
          <div key={pack.id} className={`card border-t-[3px] ${i === 0 ? "border-accent-teal" : "border-ink"}`}>
            <p
              className={`text-label font-sans font-semibold uppercase mb-3 ${i === 0 ? "text-accent-teal" : "text-ink"}`}
            >
              {pack.credits} credits
            </p>
            <h4 className="font-serif text-lg font-semibold text-ink mb-2">{pack.name}</h4>
            <p className="font-serif text-3xl font-semibold text-ink mb-1">
              {formatMoney(pack.total[BASE_CURRENCY], BASE_CURRENCY)}
            </p>
            <p className="text-xs text-slate mb-4">
              {formatMoney(pack.perCredit[BASE_CURRENCY], BASE_CURRENCY)} per credit
            </p>
            <p className="text-sm text-slate leading-relaxed font-sans">{pack.note}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-slate leading-relaxed font-sans max-w-2xl mb-3">
        {isBaseCurrency
          ? `Shown in ${BASE_CURRENCY}. The price applicable to you is confirmed before purchase.`
          : `You will be billed in ${region.currency}. Amounts are shown in ${BASE_CURRENCY} here; your local amount is confirmed before purchase.`}
      </p>

      {region.tier === "africa" && (
        <p className="text-sm text-slate leading-relaxed font-sans max-w-2xl mb-3">
          <strong className="text-ink">Africa Access.</strong> Reduced founding-cohort credit pricing is available
          in supported African markets, as part of Career Bridge Foundation&rsquo;s commitment to widening access
          to AI-powered career development infrastructure.
        </p>
      )}

      <p className="text-sm text-slate leading-relaxed font-sans max-w-2xl mb-3">
        <strong className="text-ink">Founding cohort pricing.</strong> These introductory credit prices apply to
        the founding cohort and may change for future cohorts.
      </p>

      <p className="text-sm text-slate leading-relaxed font-sans max-w-2xl mb-3">
        <strong className="text-ink">One credit activates one complete workplace simulation</strong>, including its
        AI-powered evaluation and the generation of your portfolio artefact. Builder therefore covers three
        complete simulations and Professional covers ten. Credit packs are not a definition of programme length —
        you choose how many simulations you complete.
      </p>

      <p className="text-sm text-slate leading-relaxed font-sans max-w-2xl">
        <strong className="text-ink">Career Bridge Foundation and Evidentize.</strong> Career Bridge Foundation
        runs the Simulation-Based Work Experience Programme and the application experience. Evidentize provides
        the technology infrastructure behind the simulations, AI-powered evaluation, evidence generation and
        digital career portfolios. Credits give you access to that infrastructure.
      </p>
    </Reveal>
  );
};

export default CreditPacks;

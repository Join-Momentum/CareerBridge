import { Reveal } from "@/components/simulation/Motion";

/**
 * "Founding Cohort 2026 credit packs" — shared across the Work Experience
 * hub and every pathway page, since credit packs are programme-wide, not
 * per-discipline.
 *
 * UNRESOLVED — the reference page's credit-pack pricing table is populated
 * by a region-selector script that isn't included in any of the supplied
 * markup (js-region, js-total, js-per all render "—" placeholders in the
 * static HTML). No actual dollar amount, per-region rate or Africa Access
 * discount figure has been supplied anywhere, so none is invented here.
 * Supply the real per-region amounts and I will build the interactive
 * region picker + live pricing table; until then this states pack names,
 * credit counts and the pricing mechanism only, with no numbers.
 */
const CreditPacks = ({ className = "" }: { className?: string }) => (
  <Reveal className={className}>
    <h3 className="font-serif text-2xl font-semibold text-ink mb-6">Founding Cohort 2026 credit packs</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="card border-t-[3px] border-accent-teal">
        <p className="text-label font-sans font-semibold uppercase text-accent-teal mb-3">3 credits</p>
        <h4 className="font-serif text-lg font-semibold text-ink mb-3">Builder</h4>
        <p className="text-sm text-slate leading-relaxed font-sans">
          Three complete workplace simulations, each with AI-powered evaluation and portfolio generation.
        </p>
      </div>
      <div className="card border-t-[3px] border-ink">
        <p className="text-label font-sans font-semibold uppercase text-ink mb-3">10 credits</p>
        <h4 className="font-serif text-lg font-semibold text-ink mb-3">Professional</h4>
        <p className="text-sm text-slate leading-relaxed font-sans">
          Ten complete workplace simulations, at a lower rate per simulation than Builder.
        </p>
      </div>
    </div>
    <p className="text-sm text-slate leading-relaxed font-sans max-w-2xl mb-3">
      <strong className="text-ink">Africa Access.</strong> Reduced founding-cohort credit pricing is available in
      supported African markets, as part of Career Bridge Foundation&rsquo;s commitment to widening access to
      AI-powered career development infrastructure. Standard pricing applies elsewhere. Your pricing region is
      determined by your location at the application stage.
    </p>
    <p className="text-sm text-slate leading-relaxed font-sans max-w-2xl mb-3">
      One credit activates one complete workplace simulation, including its AI-powered evaluation and the
      generation of your portfolio artefact. Credit packs are not a definition of programme length — you choose
      how many simulations you complete. These are introductory founding-cohort prices and may change for future
      cohorts.
    </p>
    <p className="text-sm text-slate leading-relaxed font-sans max-w-2xl">
      <strong className="text-ink">Career Bridge Foundation and Evidentize.</strong> Career Bridge Foundation runs
      the Simulation-Based Work Experience Programme and the application experience. Evidentize provides the
      technology infrastructure behind the simulations, AI-powered evaluation, evidence generation and digital
      career portfolios. Credits give you access to that infrastructure.
    </p>
  </Reveal>
);

export default CreditPacks;

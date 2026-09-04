import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/simulation/Motion";

interface AudienceGroup {
  label: string;
  items: string[];
}

interface AudiencePanelProps {
  pcue: string;
  eyebrow: string;
  title: string;
  groups: AudienceGroup[];
  outcome: string;
  cta: { label: string; href: string };
  footnote?: ReactNode;
}

const AudiencePanel = ({ pcue, eyebrow, title, groups, outcome, cta, footnote }: AudiencePanelProps) => (
  <div
    className="h-full flex flex-col bg-white border border-[#CFDCE4] rounded-[3px] p-8 md:p-12"
    style={{ borderTop: `5px solid ${pcue}` }}
  >
    <p className="font-mono text-xs tracking-[0.16em] uppercase mb-4" style={{ color: pcue }}>
      {eyebrow}
    </p>
    <h3 className="font-serif font-medium text-[clamp(1.375rem,1vw+1.1rem,1.875rem)] leading-[1.1] tracking-[-0.015em] text-ink mb-4">
      {title}
    </h3>

    {groups.map((group) => (
      <div key={group.label}>
        <p className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-[#3E5D77] mt-6 mb-3">
          {group.label}
        </p>
        <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
          {group.items.map((item) => (
            <li key={item} className="m-0">
              <span className="inline-block border border-[#CFDCE4] bg-[#F7F9FA] rounded-full px-[0.8rem] py-[0.35rem] text-sm text-ink">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ))}

    <p className="mt-auto pt-6 border-t border-[#CFDCE4] text-[1.0625rem] leading-relaxed text-ink">{outcome}</p>

    <Link
      to={cta.href}
      className="inline-flex items-center justify-center gap-2 font-sans font-bold text-[1.0625rem] leading-[1.2] px-[1.6rem] py-[0.9rem] rounded-[3px] border-2 border-transparent min-h-[48px] bg-accent-blue text-white hover:bg-[#00518F] transition-colors duration-200 mt-6 self-start no-underline"
    >
      {cta.label}
    </Link>

    {footnote}
  </div>
);

/**
 * "Two audiences, one evidence layer" — the homepage #who section.
 * Colours (--pcue per panel) are the exact hex values from the supplied
 * spec, not the site's nearest existing tokens. Not wired into any page.
 *
 * Route correction: the organisations panel's CTA in the spec pointed at
 * /for-organisations, which isn't a route in this app -- the actual page
 * is /partners (the nav item was relabelled "For Organisations" earlier,
 * but the route itself was never renamed). Linked to /partners instead so
 * the button isn't broken on arrival.
 */
const TwoAudiencesSection = ({ className = "" }: { className?: string }) => (
  <section id="who" className={`py-16 md:py-[5.5rem] bg-warm-white ${className}`}>
    <div className="mx-auto max-w-[74rem] px-5 md:px-10">
      <div className="max-w-[46rem] mb-12">
        <p className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.14em] uppercase text-accent-blue mb-4">
          <span className="w-7 h-0.5 bg-accent-blue shrink-0" />
          Who we support
        </p>
        <h2 className="font-serif font-medium text-[clamp(1.875rem,2.2vw+1.2rem,3rem)] leading-[1.1] tracking-[-0.015em] text-ink m-0">
          Two audiences, one evidence layer.
        </h2>
      </div>

      <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8">
        <Reveal className="h-full">
          <AudiencePanel
            pcue="#0060AD"
            eyebrow="For individuals"
            title="Build practical experience and credible evidence of applied capability."
            groups={[
              {
                label: "Who this is for",
                items: [
                  "Aspiring professionals",
                  "Graduates",
                  "Career changers",
                  "Career returners",
                  "Developing professionals",
                  "Professionals entering new disciplines",
                ],
              },
            ]}
            outcome="Complete assessed workplace simulations, receive competency-based feedback and publish verifiable career evidence you own and control."
            cta={{ label: "Explore Work Experience", href: "/simulation-based-work-experience" }}
          />
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <AudiencePanel
            pcue="#0E6E7D"
            eyebrow="For organisations"
            title="Evidence-led talent development, capability validation and partnership."
            groups={[
              {
                label: "Who this is for",
                items: [
                  "Employers",
                  "Recruiters",
                  "Academic institutions",
                  "Community organisations",
                  "Workforce-development programmes",
                  "Training and coaching organisations",
                  "Public-sector organisations",
                  "Social-impact partners",
                ],
              },
              {
                label: "Potential partnership outcomes",
                items: [
                  "Simulation-based talent development",
                  "Competency assessment",
                  "Evidence-led employability programmes",
                  "Talent discovery",
                  "Digital career portfolios",
                  "Cohort delivery",
                  "Community workforce initiatives",
                  "Institution-aligned career pathways",
                ],
              },
            ]}
            outcome="Partnership scope is agreed case by case. We do not operate an open talent pool, and we do not currently offer employers on-demand access to a pipeline of readiness-assessed candidates."
            cta={{ label: "Explore Partnerships", href: "/partners" }}
            // Spec's .rnote read as an internal review instruction to the
            // implementer ("Confirm which partnership outcomes are currently
            // deliverable... should be removed from this list before
            // publication"), not public copy -- kept out of the rendered
            // output rather than shipped as visible page text. Whoever wires
            // this section in should resolve that review before publishing.
          />
        </Reveal>
      </div>
    </div>
  </section>
);

export default TwoAudiencesSection;

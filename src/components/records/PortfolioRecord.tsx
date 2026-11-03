import RecordCard from "./RecordCard";

/**
 * Variant A — Portfolio record.
 * Used on: "/" hero and "/simulation-based-work-experience" hero. Identical
 * on both. Content is illustrative — not a real participant record — which
 * is why the caption below the card must stay in place.
 */
const PortfolioRecord = ({ className = "" }: { className?: string }) => (
  <RecordCard
    className={className}
    surface="ink"
    tabLeft="Portfolio record"
    tabRight="CBF·BA·04"
    title="Options appraisal — customer onboarding"
    meta="Business Analysis · Assessed workplace simulation"
    rows={[
      { k: "Workplace situation", v: "Scenario brief" },
      { k: "Jobs to Be Done", v: "Defined" },
      { k: "Work output", v: "Options appraisal" },
      {
        k: "Competencies",
        v: (
          <>
            Solution evaluation
            <br />
            Analytical thinking
          </>
        ),
      },
      { k: "Assessment", v: "Rubric-based" },
      { k: "Developmental feedback", v: "Issued" },
    ]}
    foot={{ stamp: "Assessed", text: "Published to the participant’s digital career portfolio." }}
    note="Illustrative portfolio record · not participant data"
  />
);

export default PortfolioRecord;

import RecordCard from "./RecordCard";

/**
 * Variant B — Access model at a glance.
 * Used on: "/how-it-works" hero. One instance.
 */
const AccessModelRecord = ({ className = "" }: { className?: string }) => (
  <RecordCard
    className={className}
    surface="ink"
    tabLeft="Access model"
    tabRight="At a glance"
    title="Programme access is free. AI usage requires credits."
    meta="No surprises · no hidden commercial mechanics"
    rows={[
      { k: "Apply", v: "Free" },
      { k: "Qualify", v: "Free" },
      { k: "Onboard", v: "Free" },
      { k: "Simulate", v: "Credits" },
      { k: "Evaluate", v: "Credits" },
      { k: "Build evidence", v: "Credits" },
      { k: "Progress", v: "Free" },
    ]}
  />
);

export default AccessModelRecord;

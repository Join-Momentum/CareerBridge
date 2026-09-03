import RecordCard from "./RecordCard";

/**
 * Variant C — Simulation environment.
 * Used on: "/simulation-based-work-experience", "What it means" section
 * (the second record on that page). Sits on a paper (light) ground, unlike
 * variants A/B/D which sit on ink.
 */
const SimulationEnvironmentRecord = ({ className = "" }: { className?: string }) => (
  <RecordCard
    className={className}
    surface="paper"
    titleAs="h3"
    tabLeft="Simulation environment"
    tabRight="Per discipline"
    title="25+ workplace simulations in each initial discipline"
    meta="Different situations · responsibilities · competencies · levels of complexity"
    rows={[
      { k: "You are given", v: "A brief" },
      { k: "You must", v: "Decide" },
      { k: "You produce", v: "Work outputs" },
      { k: "You receive", v: "Assessment" },
      { k: "You keep", v: "The evidence" },
    ]}
  />
);

export default SimulationEnvironmentRecord;

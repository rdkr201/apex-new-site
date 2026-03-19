import { motion } from "framer-motion";

interface WorkflowStep {
  label: string;
}

interface Workflow {
  title: string;
  steps: WorkflowStep[];
}

const workflows: Workflow[] = [
  {
    title: "Research Pipeline",
    steps: [
      { label: "Ingest" },
      { label: "Parse" },
      { label: "Enrich" },
      { label: "Analyse" },
      { label: "Signal" },
    ],
  },
  {
    title: "Signal Generation",
    steps: [
      { label: "Data Stream" },
      { label: "Feature Extract" },
      { label: "Model Run" },
      { label: "Validate" },
      { label: "Emit" },
    ],
  },
  {
    title: "Trade Execution",
    steps: [
      { label: "Signal In" },
      { label: "Risk Check" },
      { label: "Optimise" },
      { label: "Route" },
      { label: "Execute" },
    ],
  },
];

const FlowDiagram = ({ workflow, index }: { workflow: Workflow; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="border-b border-border py-10 last:border-b-0"
  >
    <h3 className="mb-6 font-mono text-xs tracking-widest text-muted-foreground uppercase">
      {workflow.title}
    </h3>
    <div className="flex items-center gap-2">
      {workflow.steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="border border-border bg-secondary px-4 py-2.5 font-mono text-xs text-foreground">
            {step.label}
          </div>
          {i < workflow.steps.length - 1 && (
            <div className="font-mono text-xs text-primary/60">→</div>
          )}
        </div>
      ))}
    </div>
  </motion.div>
);

const WorkflowsTab = () => {
  return (
    <div className="mx-auto min-h-[calc(100vh-3.5rem)] max-w-5xl px-6 pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-mono text-lg font-light tracking-tightest text-foreground">
          Agentic Workflows
        </h2>
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          End-to-end automation across research, signal generation, and execution.
        </p>
      </motion.div>

      <div className="mt-12">
        {workflows.map((workflow, i) => (
          <FlowDiagram key={workflow.title} workflow={workflow} index={i} />
        ))}
      </div>
    </div>
  );
};

export default WorkflowsTab;

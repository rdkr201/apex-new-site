import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

interface Workflow {
  title: string;
  steps: string[];
}

const workflows: Workflow[] = [
  {
    title: "Research",
    steps: ["Ingest", "Parse", "Enrich", "Analyse", "Signal"],
  },
  {
    title: "Multi-Asset",
    steps: ["Data Stream", "Feature Extract", "Model Run", "Validate", "Emit"],
  },
  {
    title: "Equities",
    steps: ["Signal In", "Risk Check", "Optimise", "Route", "Execute"],
  },
  {
    title: "Quant",
    steps: ["Data Feed", "Transform", "Backtest", "Optimise", "Deploy"],
  },
  {
    title: "Credit",
    steps: ["Source", "Screen", "Assess", "Price", "Monitor"],
  },
];

const WorkflowsTab = () => {
  return (
    <div>
      <HeroSection
        accentLine="Agentic Workflows"
        headline="End-to-end automation"
        subtitle="From research to execution. Every step orchestrated by domain-native AI agents."
      />

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] divide-y divide-border px-6 lg:px-10">
          {workflows.map((workflow, wi) => (
            <motion.div
              key={workflow.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: wi * 0.15 }}
              className="py-12"
            >
              <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {workflow.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {workflow.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="border border-border bg-secondary/50 px-5 py-3 font-mono text-xs tracking-wide text-foreground transition-colors hover:border-primary/30">
                      {step}
                    </div>
                    {i < workflow.steps.length - 1 && (
                      <span className="font-mono text-sm text-primary/40">→</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowsTab;

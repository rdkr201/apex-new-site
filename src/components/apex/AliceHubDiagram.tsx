import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type TabId } from "./TabNavigation";

const inputGroups = [
  {
    label: "Public Data",
    items: ["SEC EDGAR", "News / Web Data", "Market Data"],
  },
  {
    label: "Enterprise Data",
    items: ["SharePoint", "Microsoft 365", "Internal Documents"],
  },
  {
    label: "Financial Providers",
    items: ["S&P Capital IQ", "Bloomberg", "FactSet"],
  },
  {
    label: "Proprietary Data",
    items: ["Internal Datasets", "Alternative Data"],
  },
];

const outputs = ["Insights", "Reports", "Models", "Dashboards", "Signals"];

interface AliceHubDiagramProps {
  onTabChange: (tab: TabId) => void;
}

const AliceHubDiagram = ({ onTabChange }: AliceHubDiagramProps) => {
  return (
    <section className="relative overflow-hidden border-t border-border py-24">
      {/* Section header */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            System Architecture
          </p>
          <h2 className="mt-3 font-mono text-3xl font-light tracking-tightest text-foreground md:text-4xl">
            One Intelligence Layer
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-mono text-sm text-muted-foreground">
            ALICE sits at the center — unifying every data source, powering every output.
          </p>
        </motion.div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Desktop layout */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
            {/* Left: Inputs */}
            <div className="grid grid-cols-2 gap-4">
              {inputGroups.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * gi }}
                  className="space-y-2"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary/70">
                    {group.label}
                  </span>
                  <div className="space-y-1.5">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-md border border-border bg-secondary/40 px-3 py-2 font-mono text-[11px] text-foreground/80"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center: ALICE node + flow lines */}
            <div className="relative flex flex-col items-center gap-6">
              {/* Inbound flow indicator */}
              <div className="flex items-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50">
                  <div className="h-full w-full animate-[flowRight_2s_linear_infinite] bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50">
                  ingest
                </span>
              </div>

              {/* ALICE core */}
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-6 rounded-full bg-primary/10 blur-xl animate-pulse" />
                <div className="absolute -inset-3 rounded-full border border-primary/20" />
                <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-primary/40 bg-card">
                  <span className="font-mono text-lg font-medium text-primary">
                    ALICE
                  </span>
                  <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                    Intelligence Layer
                  </span>
                </div>
              </div>

              {/* Outbound flow indicator */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50">
                  output
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-primary/50 to-transparent">
                  <div className="h-full w-full animate-[flowRight_2s_linear_infinite] bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>
              </div>
            </div>

            {/* Right: Outputs */}
            <div className="flex flex-col items-start gap-2">
              <span className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary/70">
                Value Outputs
              </span>
              {outputs.map((output, i) => (
                <motion.div
                  key={output}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="w-full max-w-[200px] rounded-md border border-primary/20 bg-primary/5 px-4 py-2.5 font-mono text-[11px] text-primary/90"
                >
                  {output}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile layout — vertical */}
          <div className="flex flex-col items-center gap-8 lg:hidden">
            {/* Inputs */}
            <div className="grid w-full grid-cols-2 gap-3">
              {inputGroups.map((group) => (
                <div key={group.label} className="space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary/70">
                    {group.label}
                  </span>
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-md border border-border bg-secondary/40 px-2.5 py-1.5 font-mono text-[10px] text-foreground/80"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Arrow down */}
            <div className="flex flex-col items-center gap-1">
              <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-primary/50" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50">
                ingest
              </span>
            </div>

            {/* ALICE */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-xl animate-pulse" />
              <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full border border-primary/40 bg-card">
                <span className="font-mono text-base font-medium text-primary">ALICE</span>
                <span className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-muted-foreground">
                  Intelligence Layer
                </span>
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50">
                output
              </span>
              <div className="h-8 w-px bg-gradient-to-b from-primary/50 to-muted-foreground/30" />
            </div>

            {/* Outputs */}
            <div className="grid w-full grid-cols-3 gap-2">
              {outputs.map((output) => (
                <div
                  key={output}
                  className="rounded-md border border-primary/20 bg-primary/5 px-3 py-2 text-center font-mono text-[10px] text-primary/90"
                >
                  {output}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => onTabChange("Data & Intelligence")}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      </div>

      {/* Animated flow keyframes */}
      <style>{`
        @keyframes flowRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default AliceHubDiagram;

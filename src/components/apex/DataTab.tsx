import { motion } from "framer-motion";

const stats = [
  { value: "<10ms", label: "Ingestion Latency" },
  { value: "20+ yrs", label: "Historical Depth" },
  { value: "∞", label: "Schema Flexibility" },
];

const DataTab = () => {
  return (
    <div className="mx-auto min-h-[calc(100vh-3.5rem)] max-w-5xl px-6 pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-mono text-lg font-light tracking-tightest text-foreground">
          Data & Intelligence
        </h2>
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          Big Data Architecture as a Service. Ingest everything. Query anything.
        </p>
      </motion.div>

      {/* Transformation visual */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 flex flex-col items-center gap-6 md:flex-row md:gap-4"
      >
        <div className="flex-1 border border-border bg-secondary p-6">
          <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Unstructured
          </div>
          <div className="mt-4 space-y-2">
            {["PDFs, filings, transcripts", "News feeds, social signals", "Proprietary datasets, alt data"].map(
              (item) => (
                <div key={item} className="font-mono text-xs text-muted-foreground/70">
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <div className="font-mono text-2xl text-primary/60">→</div>

        <div className="flex-1 border border-primary/30 bg-secondary p-6">
          <div className="font-mono text-xs tracking-widest text-primary uppercase">
            Insight
          </div>
          <div className="mt-4 space-y-2">
            {["Clean, indexed intelligence", "Actionable signals", "Research-grade outputs"].map(
              (item) => (
                <div key={item} className="font-mono text-xs text-foreground/80">
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 grid grid-cols-3 gap-px bg-border"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="bg-background p-6 text-center">
            <div className="font-mono text-2xl font-light text-primary">
              {stat.value}
            </div>
            <div className="mt-2 font-mono text-xs text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DataTab;

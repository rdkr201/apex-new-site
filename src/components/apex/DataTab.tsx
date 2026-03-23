import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ArchitectureDiagram from "./ArchitectureDiagram";

const stats = [
  { value: "<10ms", label: "Ingestion Latency" },
  { value: "20+ yrs", label: "Historical Depth" },
  { value: "∞", label: "Schema Flexibility" },
];

const DataTab = () => {
  return (
    <div>
      <HeroSection
        accentLine="Data & Intelligence"
        headline="Ingest everything. Query anything."
        subtitle="Big Data Architecture as a Service. From unstructured noise to research-grade intelligence."
      />

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Transformation visual */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-stretch gap-0 border-b border-border py-16 md:flex-row"
          >
            <div className="flex-1 border border-border p-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Unstructured
              </div>
              <div className="mt-6 space-y-3">
                {["PDFs, filings, transcripts", "News feeds, social signals", "Proprietary datasets, alt data"].map(
                  (item) => (
                    <div key={item} className="font-mono text-xs text-muted-foreground/60">
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex items-center justify-center px-6 py-4">
              <span className="font-mono text-2xl text-primary/50">→</span>
            </div>

            <div className="flex-1 border border-primary/20 p-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Insight
              </div>
              <div className="mt-6 space-y-3">
                {["Clean, indexed intelligence", "Actionable signals", "Research-grade outputs"].map(
                  (item) => (
                    <div key={item} className="font-mono text-xs text-foreground/70">
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
            className="grid grid-cols-3 gap-px bg-border"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background py-12 text-center">
                <div className="font-mono text-3xl font-light text-primary">
                  {stat.value}
                </div>
                <div className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DataTab;

import { motion } from "framer-motion";

interface Column {
  phase: string;
  title: string;
  items: string[];
  accent?: boolean;
}

const columns: Column[] = [
  {
    phase: "Ingest",
    title: "Raw Data",
    items: ["Numerical", "Textual", "Relationship", "Custom"],
    accent: true,
  },
  {
    phase: "",
    title: "Data Storage Layer",
    items: ["Index", "Time Series Data Store", "Vector DB", "Data Cache"],
  },
  {
    phase: "Analyse",
    title: "Processing Layer",
    items: [
      "A.I. Agent Service",
      "Private RAG Service",
      "Multi-Model Inference",
      "Model Fine Tuning",
      "Data Structuring Service",
      "Custom Logic Service",
    ],
  },
  {
    phase: "Distribute",
    title: "Network API Layer",
    items: [
      "GUI Gateway",
      "GQL / WebSocket",
      "Chatbot Gateway",
      "Custom Gateway",
      "Mobile Gateway",
      "Query Container",
    ],
  },
  {
    phase: "",
    title: "Clients",
    items: ["Web", "Chatbot", "Custom", "Mobile", "Query", "Desktop"],
    accent: true,
  },
];

const ArchitectureDiagram = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="border-b border-border py-16 md:py-20"
    >
      {/* Section heading */}
      <div className="mb-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/50">
          Platform Architecture
        </p>
        <h3 className="mt-3 font-mono text-lg font-light tracking-tight text-foreground md:text-2xl">
          Ingest. Analyse. Distribute.
        </h3>
      </div>

      {/* Diagram */}
      <div className="overflow-x-auto">
        <div className="mx-auto flex min-w-[900px] max-w-[1200px] items-stretch gap-0">
          {columns.map((col, ci) => (
            <div key={col.title} className="flex flex-1 flex-col items-stretch">
              {/* Phase label */}
              <div className="mb-3 flex justify-center">
                {col.phase ? (
                  <span className="rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-primary-foreground">
                    {col.phase}
                  </span>
                ) : (
                  <span className="h-6" />
                )}
              </div>

              {/* Column box */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + ci * 0.08 }}
                className="relative mx-1 flex flex-1 flex-col rounded border border-border bg-secondary/10 p-3"
              >
                {/* Column title */}
                <div className="mb-4 rounded bg-muted/60 px-3 py-2 text-center font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-foreground/80">
                  {col.title}
                </div>

                {/* Items */}
                <div className="flex flex-1 flex-col gap-2">
                  {col.items.map((item, ii) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + ci * 0.08 + ii * 0.05 }}
                      className={`rounded px-3 py-2.5 text-center font-mono text-[11px] font-medium ${
                        col.accent
                          ? "bg-primary/90 text-primary-foreground"
                          : "bg-muted/40 text-foreground/70"
                      }`}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Arrow between columns */}
              {ci < columns.length - 1 && (
                <div className="pointer-events-none absolute inset-y-0 -right-2 flex items-center">
                  {/* Handled via gap, no explicit arrow needed */}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flow arrows row */}
        <div className="mx-auto mt-4 flex min-w-[900px] max-w-[1200px] items-center">
          {columns.map((_, ci) => (
            <div key={ci} className="flex flex-1 items-center justify-center">
              {ci < columns.length - 1 && (
                <div className="flex w-full items-center justify-end pr-0">
                  <div className="h-px flex-1 bg-border" />
                  <span className="font-mono text-xs text-primary/40">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Maintained by Apex */}
        <div className="mx-auto mt-6 flex min-w-[900px] max-w-[1200px] justify-center">
          <div className="rounded-full border border-primary/30 bg-primary/10 px-5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
            Maintained by Apex
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArchitectureDiagram;

import { motion } from "framer-motion";

const ArchitectureDiagram = () => {
  const rawDataItems = ["Numerical", "Textual", "Relationship", "Custom"];
  const storageItems = ["Index", "Time Series\nData Store", "Vector DB", "Data Cache"];
  const processingItems = [
    "A.I. Agent\nService",
    "Private RAG\nService",
    "Multi-Model\nInference Service",
    "Model Fine\nTuning Service",
    "Data Structuring\nService",
    "Custom Logic\nService",
  ];
  const networkItems = [
    "GUI\nGateway",
    "GQL/\nWebSocket",
    "Chatbot\nGateway",
    "Custom\nGateway",
    "Mobile\nGateway",
    "Query\nContainer",
  ];
  const clientItems = ["Web", "Chatbot", "Custom", "Mobile", "Query", "Desktop"];

  // Site-aligned colors
  const teal = "hsl(174, 42%, 45%)";
  const tealDim = "hsl(174, 42%, 32%)";
  const accentMuted = "hsl(174, 30%, 22%)";
  const darkCard = "hsl(0, 0%, 10%)";

  const PhaseBadge = ({ label, variant = "bright" }: { label: string; variant?: "bright" | "dim" }) => (
    <span
      className="inline-block rounded-full px-5 py-1.5 font-mono text-xs font-medium"
      style={{
        backgroundColor: variant === "bright" ? teal : tealDim,
        color: variant === "bright" ? "hsl(0,0%,4%)" : "hsl(0,0%,90%)",
      }}
    >
      {label}
    </span>
  );

  const ItemCard = ({ item, style, className = "" }: { item: string; style: React.CSSProperties; className?: string }) => (
    <div
      className={`rounded-md px-3 py-2.5 text-center font-mono whitespace-pre-line ${className}`}
      style={style}
    >
      {item}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="border-b border-border py-10 px-4 md:py-16 md:px-8"
    >
      {/* ─── DESKTOP LAYOUT (md+) ─── */}
      <div className="hidden md:block">
        {/* Top phase labels */}
        <div className="mb-8 grid grid-cols-[1fr_2fr_2fr] gap-4">
          <div className="text-center"><PhaseBadge label="Ingest" /></div>
          <div className="text-center"><PhaseBadge label="Analyse" /></div>
          <div className="text-center"><PhaseBadge label="Distribute" variant="dim" /></div>
        </div>

        {/* Main architecture flow */}
        <div className="flex items-stretch gap-3">
          {/* INGEST: Raw Data + Transform */}
          <div className="flex items-stretch gap-3" style={{ flex: "1" }}>
            <div className="flex-1 rounded-lg border border-primary/30 p-4">
              <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-primary/70">Raw Data</div>
              <div className="flex flex-col gap-2">
                {rawDataItems.map((item) => (
                  <ItemCard key={item} item={item} style={{ backgroundColor: teal, color: "hsl(0,0%,4%)" }} className="text-xs font-medium" />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-1">
              <span className="text-sm text-primary/40">→</span>
              <ItemCard item="Transform" style={{ backgroundColor: teal, color: "hsl(0,0%,4%)" }} className="text-[10px] font-medium" />
              <span className="text-sm text-primary/40">→</span>
            </div>
          </div>

          {/* ANALYSE: Data Storage + Processing */}
          <div className="flex items-stretch gap-3" style={{ flex: "2" }}>
            <div className="flex-1 rounded-lg border border-border p-4">
              <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Data Storage Layer</div>
              <div className="flex flex-col gap-2">
                {storageItems.map((item) => (
                  <ItemCard key={item} item={item} style={{ backgroundColor: darkCard }} className="text-xs text-foreground/80" />
                ))}
              </div>
            </div>
            <div className="flex items-center px-1">
              <span className="font-mono text-sm text-muted-foreground/40">⇄</span>
            </div>
            <div className="flex-1 rounded-lg border border-primary/20 border-dashed p-4">
              <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-primary/60">Processing Layer</div>
              <div className="flex flex-col gap-2">
                {processingItems.map((item) => (
                  <ItemCard key={item} item={item} style={{ backgroundColor: accentMuted }} className="text-[10px] text-foreground/90" />
                ))}
              </div>
            </div>
          </div>

          {/* Bidirectional arrow */}
          <div className="flex items-center px-1">
            <span className="font-mono text-sm text-muted-foreground/40">⇄</span>
          </div>

          {/* DISTRIBUTE: Network API + Clients */}
          <div className="flex items-stretch gap-3" style={{ flex: "2" }}>
            <div className="flex-1 rounded-lg border border-primary/20 border-dashed p-4">
              <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-primary/60">Network API Layer</div>
              <div className="flex flex-col gap-2">
                {networkItems.map((item) => (
                  <ItemCard key={item} item={item} style={{ backgroundColor: accentMuted }} className="text-[10px] text-foreground/90" />
                ))}
              </div>
            </div>
            <div className="flex items-center px-1">
              <span className="font-mono text-sm text-muted-foreground/40">→</span>
            </div>
            <div className="flex-1 rounded-lg border border-primary/20 p-4">
              <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-primary/60">Clients</div>
              <div className="flex flex-col gap-2">
                {clientItems.map((item) => (
                  <ItemCard key={item} item={item} style={{ backgroundColor: tealDim, color: "hsl(0,0%,90%)" }} className="text-xs font-medium" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Application Layer label */}
        <div className="mt-4 flex justify-end" style={{ paddingRight: "12%" }}>
          <span className="rounded-md px-4 py-1 font-mono text-[10px] text-muted-foreground" style={{ backgroundColor: darkCard }}>
            Application Layer
          </span>
        </div>
      </div>

      {/* ─── MOBILE LAYOUT (below md) ─── */}
      <div className="md:hidden space-y-6">
        {/* INGEST */}
        <div>
          <div className="mb-3 text-center"><PhaseBadge label="Ingest" /></div>
          <div className="rounded-lg border border-primary/30 p-4">
            <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-primary/70">Raw Data</div>
            <div className="grid grid-cols-2 gap-2">
              {rawDataItems.map((item) => (
                <ItemCard key={item} item={item} style={{ backgroundColor: teal, color: "hsl(0,0%,4%)" }} className="text-xs font-medium" />
              ))}
            </div>
          </div>
          <div className="flex justify-center py-2">
            <span className="font-mono text-sm text-primary/40">↓ Transform ↓</span>
          </div>
        </div>

        {/* ANALYSE */}
        <div>
          <div className="mb-3 text-center"><PhaseBadge label="Analyse" /></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border p-3">
              <div className="mb-2 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">Storage</div>
              <div className="flex flex-col gap-1.5">
                {storageItems.map((item) => (
                  <ItemCard key={item} item={item} style={{ backgroundColor: darkCard }} className="text-[10px] text-foreground/80" />
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-primary/20 border-dashed p-3">
              <div className="mb-2 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-primary/60">Processing</div>
              <div className="flex flex-col gap-1.5">
                {processingItems.map((item) => (
                  <ItemCard key={item} item={item} style={{ backgroundColor: accentMuted }} className="text-[10px] text-foreground/90" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center py-2">
            <span className="font-mono text-sm text-primary/40">↓</span>
          </div>
        </div>

        {/* DISTRIBUTE */}
        <div>
          <div className="mb-3 text-center"><PhaseBadge label="Distribute" variant="dim" /></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-primary/20 border-dashed p-3">
              <div className="mb-2 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-primary/60">Network API</div>
              <div className="flex flex-col gap-1.5">
                {networkItems.map((item) => (
                  <ItemCard key={item} item={item} style={{ backgroundColor: accentMuted }} className="text-[10px] text-foreground/90" />
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-primary/20 p-3">
              <div className="mb-2 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-primary/60">Clients</div>
              <div className="flex flex-col gap-1.5">
                {clientItems.map((item) => (
                  <ItemCard key={item} item={item} style={{ backgroundColor: tealDim, color: "hsl(0,0%,90%)" }} className="text-[10px] font-medium" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maintained By Apex */}
      <div className="mt-8 text-center">
        <div className="mx-auto mb-4 h-px w-[80%] bg-primary/20" />
        <span
          className="inline-block rounded-full px-6 py-1.5 font-mono text-xs font-medium"
          style={{ backgroundColor: teal, color: "hsl(0,0%,4%)" }}
        >
          Maintained By Apex
        </span>
      </div>
    </motion.div>
  );
};

export default ArchitectureDiagram;

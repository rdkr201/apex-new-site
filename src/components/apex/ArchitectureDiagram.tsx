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

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="border-b border-border bg-black py-16 px-4 md:px-8 overflow-x-auto"
    >
      {/* Top phase labels */}
      <div className="mb-8 grid grid-cols-[1fr_2fr_2fr] gap-4 min-w-[900px]">
        <div className="text-center">
          <span className="inline-block rounded-full px-5 py-1.5 font-mono text-xs font-medium text-white" style={{ backgroundColor: "#3B82F6" }}>
            Ingest
          </span>
        </div>
        <div className="text-center">
          <span className="inline-block rounded-full px-5 py-1.5 font-mono text-xs font-medium text-white" style={{ backgroundColor: "#3B82F6" }}>
            Analyse
          </span>
        </div>
        <div className="text-center">
          <span className="inline-block rounded-full px-5 py-1.5 font-mono text-xs font-medium text-white" style={{ backgroundColor: "#A855F7" }}>
            Distribute
          </span>
        </div>
      </div>

      {/* Main architecture flow */}
      <div className="flex items-stretch gap-3 min-w-[900px]">
        {/* INGEST: Raw Data + Transform */}
        <div className="flex items-stretch gap-3" style={{ flex: "1" }}>
          {/* Raw Data column */}
          <div className="flex-1 rounded-lg border border-[#3B82F6]/40 p-4">
            <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-[#93C5FD]">
              Raw Data
            </div>
            <div className="flex flex-col gap-2">
              {rawDataItems.map((item) => (
                <div
                  key={item}
                  className="rounded-md px-3 py-2.5 text-center font-mono text-xs font-medium text-white"
                  style={{ backgroundColor: "#3B82F6" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Transform arrow */}
          <div className="flex flex-col items-center justify-center gap-1 px-1">
            <span className="text-[#3B82F6]/60 text-sm">→</span>
            <div
              className="rounded-md px-3 py-2 font-mono text-[10px] font-medium text-white"
              style={{ backgroundColor: "#3B82F6" }}
            >
              Transform
            </div>
            <span className="text-[#3B82F6]/60 text-sm">→</span>
          </div>
        </div>

        {/* ANALYSE: Data Storage + Processing */}
        <div className="flex items-stretch gap-3" style={{ flex: "2" }}>
          {/* Data Storage Layer */}
          <div className="flex-1 rounded-lg border border-white/10 p-4">
            <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
              Data Storage Layer
            </div>
            <div className="flex flex-col gap-2">
              {storageItems.map((item) => (
                <div
                  key={item}
                  className="rounded-md px-3 py-2.5 text-center font-mono text-xs text-white/90 whitespace-pre-line"
                  style={{ backgroundColor: "#374151" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Bidirectional arrow */}
          <div className="flex items-center px-1">
            <span className="font-mono text-sm text-white/30">⇄</span>
          </div>

          {/* Processing Layer */}
          <div className="flex-1 rounded-lg border border-[#A855F7]/30 border-dashed p-4">
            <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-[#C084FC]">
              Processing Layer
            </div>
            <div className="flex flex-col gap-2">
              {processingItems.map((item) => (
                <div
                  key={item}
                  className="rounded-md px-3 py-2.5 text-center font-mono text-[10px] text-white whitespace-pre-line"
                  style={{ backgroundColor: "#7C3AED" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bidirectional arrow between Analyse and Distribute */}
        <div className="flex items-center px-1">
          <span className="font-mono text-sm text-white/30">⇄</span>
        </div>

        {/* DISTRIBUTE: Network API + Clients */}
        <div className="flex items-stretch gap-3" style={{ flex: "2" }}>
          {/* Network API Layer */}
          <div className="flex-1 rounded-lg border border-[#A855F7]/30 border-dashed p-4">
            <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-[#C084FC]">
              Network API Layer
            </div>
            <div className="flex flex-col gap-2">
              {networkItems.map((item) => (
                <div
                  key={item}
                  className="rounded-md px-3 py-2.5 text-center font-mono text-[10px] text-white whitespace-pre-line"
                  style={{ backgroundColor: "#7C3AED" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow to clients */}
          <div className="flex items-center px-1">
            <span className="font-mono text-sm text-white/30">→</span>
          </div>

          {/* Clients */}
          <div className="flex-1 rounded-lg border border-[#A855F7]/30 p-4">
            <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-[#C084FC]">
              Clients
            </div>
            <div className="flex flex-col gap-2">
              {clientItems.map((item) => (
                <div
                  key={item}
                  className="rounded-md px-3 py-2.5 text-center font-mono text-xs font-medium text-white"
                  style={{ backgroundColor: "#A855F7" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Application Layer label */}
      <div className="mt-4 flex justify-end min-w-[900px]" style={{ paddingRight: "12%" }}>
        <span
          className="rounded-md px-4 py-1 font-mono text-[10px] text-white/80"
          style={{ backgroundColor: "#374151" }}
        >
          Application Layer
        </span>
      </div>

      {/* Bottom bracket line + Maintained By Apex */}
      <div className="mt-8 text-center min-w-[900px]">
        <div className="mx-auto mb-4 h-px w-[80%]" style={{ backgroundColor: "#3B82F6", opacity: 0.3 }} />
        <span
          className="inline-block rounded-full px-6 py-1.5 font-mono text-xs font-medium text-white"
          style={{ backgroundColor: "#3B82F6" }}
        >
          Maintained By Apex
        </span>
      </div>
    </motion.div>
  );
};

export default ArchitectureDiagram;

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
      className="border-b border-border py-16"
    >
      {/* Top phase labels */}
      <div className="mb-8 flex items-start justify-between">
        <div className="flex-1 text-center">
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 font-mono text-xs font-medium text-primary-foreground">
            Ingest
          </span>
        </div>
        <div className="flex-1 text-center">
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 font-mono text-xs font-medium text-primary-foreground">
            Analyse
          </span>
        </div>
        <div className="flex-1 text-center">
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 font-mono text-xs font-medium text-primary-foreground">
            Distribute
          </span>
        </div>
      </div>

      {/* Main architecture flow */}
      <div className="flex items-stretch gap-2 overflow-x-auto md:gap-3">
        {/* Raw Data column */}
        <Column title="Raw Data" borderColor="border-primary/40">
          <div className="flex flex-col gap-2">
            {rawDataItems.map((item) => (
              <div
                key={item}
                className="rounded bg-primary px-3 py-2 text-center font-mono text-[10px] font-medium text-primary-foreground md:text-xs"
              >
                {item}
              </div>
            ))}
          </div>
        </Column>

        {/* Transform arrow */}
        <div className="flex flex-col items-center justify-center gap-1 px-1">
          <div className="rounded border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[9px] text-primary md:text-[10px]">
            Transform
          </div>
          <span className="font-mono text-lg text-primary/50">→</span>
        </div>

        {/* Data Storage Layer */}
        <Column title="Data Storage Layer" borderColor="border-foreground/20">
          <div className="flex flex-col gap-2">
            {storageItems.map((item) => (
              <div
                key={item}
                className="rounded bg-muted px-3 py-2 text-center font-mono text-[10px] text-foreground/80 md:text-xs whitespace-pre-line"
              >
                {item}
              </div>
            ))}
          </div>
        </Column>

        {/* Arrow */}
        <div className="flex items-center px-1">
          <span className="font-mono text-lg text-primary/50">⇄</span>
        </div>

        {/* Processing Layer */}
        <Column title="Processing Layer" borderColor="border-accent/40" accentBorder>
          <div className="flex flex-col gap-2">
            {processingItems.map((item) => (
              <div
                key={item}
                className="rounded bg-accent/20 px-3 py-2 text-center font-mono text-[10px] text-accent-foreground md:text-xs whitespace-pre-line"
              >
                {item}
              </div>
            ))}
          </div>
        </Column>

        {/* Network API Layer */}
        <Column title="Network API Layer" borderColor="border-accent/40" accentBorder>
          <div className="flex flex-col gap-2">
            {networkItems.map((item) => (
              <div
                key={item}
                className="rounded bg-accent/20 px-3 py-2 text-center font-mono text-[10px] text-accent-foreground md:text-xs whitespace-pre-line"
              >
                {item}
              </div>
            ))}
          </div>
        </Column>

        {/* Clients */}
        <Column title="Clients" borderColor="border-accent/40" accentBorder>
          <div className="flex flex-col gap-2">
            {clientItems.map((item) => (
              <div
                key={item}
                className="rounded bg-accent/20 px-3 py-2 text-center font-mono text-[10px] font-medium text-accent-foreground md:text-xs"
              >
                {item}
              </div>
            ))}
          </div>
        </Column>
      </div>

      {/* Application Layer label */}
      <div className="mt-3 flex justify-end pr-[15%]">
        <span className="rounded bg-muted px-3 py-1 font-mono text-[9px] text-muted-foreground md:text-[10px]">
          Application Layer
        </span>
      </div>

      {/* Maintained By Apex */}
      <div className="mt-6 text-center">
        <span className="inline-block rounded-full bg-primary px-5 py-1.5 font-mono text-xs font-medium text-primary-foreground">
          Maintained By Apex
        </span>
      </div>
    </motion.div>
  );
};

const Column = ({
  title,
  borderColor,
  accentBorder,
  children,
}: {
  title: string;
  borderColor: string;
  accentBorder?: boolean;
  children: React.ReactNode;
}) => (
  <div className={`flex-1 min-w-[100px] rounded border ${borderColor} ${accentBorder ? "border-dashed" : ""} p-3`}>
    <div className="mb-3 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground md:text-[10px]">
      {title}
    </div>
    {children}
  </div>
);

export default ArchitectureDiagram;

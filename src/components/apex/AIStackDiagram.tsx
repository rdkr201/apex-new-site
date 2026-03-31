import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const layers = [
  {
    id: "01",
    title: "Data Ingestion & Connectivity",
    summary: "Data-agnostic ingestion across structured and unstructured sources",
    bullets: [
      "PDFs, Excel, APIs, market data, internal systems",
      "Real-time and batch processing",
      "Connector framework for proprietary feeds",
    ],
    detail:
      "The ingestion layer connects to any data source — structured or unstructured, real-time or batch — through a flexible connector framework built for institutional environments.",
  },
  {
    id: "02",
    title: "Data Processing & Structuring",
    summary: "Intelligent parsing, metadata tagging, and data normalisation",
    bullets: [
      "Chunking, cleaning, deduplication",
      "Schema inference and mapping",
      "Quality scoring and validation",
    ],
    detail:
      "Raw inputs are parsed, validated, and structured into clean, queryable formats. Automated quality scoring ensures only high-fidelity data enters the pipeline.",
  },
  {
    id: "03",
    title: "Vectorisation & Indexing",
    summary: "Semantic embeddings and private knowledge indexing",
    bullets: [
      "Multi-model embedding generation",
      "Hybrid search (semantic + keyword)",
      "Incremental re-indexing",
    ],
    detail:
      "Documents and data are transformed into high-dimensional vector representations, enabling semantic search across your entire private knowledge base.",
  },
  {
    id: "04",
    title: "AI Models & Reasoning Engine",
    summary: "Multi-model orchestration, RAG, and explainable reasoning",
    bullets: [
      "Private model hosting and fine-tuning",
      "Retrieval-augmented generation (RAG)",
      "Citation and provenance tracking",
      "Explainable, auditable outputs",
    ],
    detail:
      "The reasoning engine selects and orchestrates the optimal model for each task. Every output is grounded in retrieved evidence with full citation trails.",
  },
  {
    id: "05",
    title: "Agentic Workflow Engine",
    summary: "AI agents executing multi-step workflows and decision logic",
    bullets: [
      "Autonomous task decomposition",
      "Human-in-the-loop checkpoints",
      "Cross-system orchestration",
      "Conditional branching and retry logic",
    ],
    detail:
      "Agents break complex requests into discrete steps, execute them across systems, and surface results with full provenance. Every decision point can require human approval.",
  },
  {
    id: "06",
    title: "Financial Intelligence Applications",
    summary: "Domain-specific applications built on top of the AI stack",
    bullets: [
      "Document Intelligence & extraction",
      "Portfolio Analytics & attribution",
      "Credit Analysis & scoring",
      "Chart Builder & visualization engine",
      "Custom application framework",
    ],
    detail:
      "Purpose-built applications leverage every layer beneath them to deliver actionable, auditable outputs. Each module is designed for the specific demands of capital markets professionals.",
  },
  {
    id: "07",
    title: "User Interface",
    summary: "Natural language, voice, and visual interaction layer",
    bullets: [
      "Chat, dashboard, and voice interfaces",
      "Embedded widgets for existing platforms",
      "API and SDK access for custom integrations",
      "Role-based views and permissions",
    ],
    detail:
      "The interaction layer delivers intelligence through the medium best suited to each user. From conversational AI to embeddable components, every touchpoint is designed for institutional workflows.",
  },
];

const AIStackDiagram = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="border-b border-border py-20 px-4 md:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
          Full AI Stack
        </p>
        <p className="mx-auto max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
          APEX:E3 transforms fragmented data into structured, explainable, and
          actionable intelligence through a fully integrated AI stack.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-3xl">

        {/* Layers */}
        <div className="relative flex flex-col gap-1">
          {layers.map((layer, i) => {
            const isFirst = i === 0;
            const isLast = i === layers.length - 1;
            const isExpanded = expandedId === layer.id;

            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  onClick={() => toggle(layer.id)}
                  className={`group w-full text-left transition-all duration-300 border border-primary/10 px-5 py-4 md:px-6 md:py-5 ${
                    isLast ? "rounded-t-2xl" : ""
                  } ${isFirst ? "rounded-b-2xl" : ""} ${
                    isExpanded
                      ? "bg-primary/5 border-primary/30 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.15)]"
                      : "bg-card/50 hover:bg-card/80 hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="shrink-0 font-mono text-[10px] font-medium text-primary/50 w-5">
                      {layer.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-sm font-medium text-foreground">
                        {layer.title}
                      </div>
                      <div className="mt-0.5 font-mono text-[11px] text-muted-foreground truncate">
                        {layer.summary}
                      </div>
                    </div>
                    <span
                      className={`shrink-0 font-mono text-xs text-primary/40 transition-transform duration-200 ${
                        isExpanded ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-x border-b border-primary/15 bg-primary/[0.03] px-5 py-5 md:px-6 md:pl-16">
                        <ul className="space-y-2 mb-3">
                          {layer.bullets.map((b) => (
                            <li
                              key={b}
                              className="font-mono text-xs text-foreground/70 flex items-start gap-2"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                              {b}
                            </li>
                          ))}
                        </ul>
                        <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                          {layer.detail}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default AIStackDiagram;

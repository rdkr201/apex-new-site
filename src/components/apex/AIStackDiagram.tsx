import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FileText, Database, Layers, Brain, Workflow, BarChart3, MessageSquare,
  Shield, Target, Lock, X, ChevronRight,
} from "lucide-react";

interface LayerData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  details: {
    description: string;
    bullets: string[];
  };
}

const layers: LayerData[] = [
  {
    id: "ui",
    title: "User Interface",
    subtitle: "Natural language, voice, and visual interaction layer",
    icon: MessageSquare,
    details: {
      description: "Multi-modal access to the full intelligence platform through intuitive interfaces designed for finance professionals.",
      bullets: [
        "Conversational AI with domain-specific understanding",
        "Interactive dashboards with drill-down analytics",
        "Voice-enabled queries for hands-free operation",
        "Customisable workspaces per team and function",
      ],
    },
  },
  {
    id: "apps",
    title: "Financial Intelligence Applications",
    subtitle: "Domain-specific applications built on the AI stack",
    icon: BarChart3,
    details: {
      description: "Purpose-built modules that translate raw intelligence into actionable outputs for investment professionals.",
      bullets: [
        "Document Intelligence — automated extraction and analysis",
        "Portfolio Analytics — risk, attribution, and scenario modelling",
        "Credit Analysis — covenant tracking and spread analysis",
        "Chart Builder — programmatic visualisation from natural language",
        "Investment Memo Generation — structured first drafts",
      ],
    },
  },
  {
    id: "agentic",
    title: "Agentic Workflow Engine",
    subtitle: "AI agents executing multi-step workflows and decision logic",
    icon: Workflow,
    details: {
      description: "Autonomous agents that orchestrate complex research and execution workflows without manual intervention.",
      bullets: [
        "Multi-step task decomposition and execution",
        "Human-in-the-loop checkpoints for critical decisions",
        "Parallel agent execution for speed",
        "Audit trail for every action and decision",
      ],
    },
  },
  {
    id: "models",
    title: "AI Models & Reasoning Engine",
    subtitle: "Multi-model orchestration, RAG, and explainable reasoning",
    icon: Brain,
    details: {
      description: "A reasoning layer that selects and orchestrates the right models for each task, with full explainability.",
      bullets: [
        "Multi-model routing — GPT, Claude, open-source, fine-tuned",
        "Retrieval-Augmented Generation with source attribution",
        "Chain-of-thought reasoning with audit logs",
        "Hallucination detection and confidence scoring",
        "Domain-specific fine-tuning for financial language",
      ],
    },
  },
  {
    id: "vector",
    title: "Vectorisation & Indexing",
    subtitle: "Semantic embeddings and private knowledge indexing",
    icon: Layers,
    details: {
      description: "Transforms processed data into searchable vector representations for fast, context-aware retrieval.",
      bullets: [
        "High-dimensional embeddings for semantic search",
        "Private vector store — no data leaves your environment",
        "Hybrid search combining keyword and semantic matching",
        "Real-time index updates as new data arrives",
      ],
    },
  },
  {
    id: "processing",
    title: "Data Processing & Structuring",
    subtitle: "Intelligent parsing, metadata tagging, and data normalisation",
    icon: Database,
    details: {
      description: "Raw inputs are cleaned, structured, and enriched before entering the intelligence pipeline.",
      bullets: [
        "Automated chunking and document segmentation",
        "Entity recognition and metadata extraction",
        "Schema normalisation across disparate sources",
        "Quality scoring and anomaly flagging",
      ],
    },
  },
  {
    id: "ingestion",
    title: "Data Ingestion & Connectivity",
    subtitle: "Data-agnostic ingestion across structured and unstructured sources",
    icon: FileText,
    details: {
      description: "Connects to any data source — internal or external — and ingests at scale with minimal configuration.",
      bullets: [
        "PDFs, Excel, Word, PowerPoint, and image extraction",
        "Real-time market data feeds and API connectors",
        "Internal systems — CRM, OMS, PMS integration",
        "SEC EDGAR, company filings, and regulatory data",
        "Proprietary and alternative datasets",
      ],
    },
  },
];

const pillars = [
  { icon: Lock, label: "Privacy", desc: "Private deployment · On-prem · VPC" },
  { icon: Target, label: "Accuracy", desc: "Validated outputs · Source attribution" },
  { icon: Shield, label: "Security", desc: "Enterprise-grade infrastructure" },
];

const AIStackDiagram = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);

  const selectedData = layers.find((l) => l.id === selectedLayer);

  return (
    <div className="relative py-20 md:py-28">
      {/* Section header */}
      <div className="mb-16 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/60">
          Full Stack
        </p>
        <h2 className="mt-3 font-mono text-xl font-light tracking-tightest text-foreground md:text-3xl">
          From Data to Decision-Ready Intelligence
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground">
          APEX:E3 transforms fragmented data into structured, explainable, and actionable intelligence through a fully integrated AI stack.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Main stack */}
        <div className="flex-1">
          <div className="relative flex flex-col items-center">
            {/* Upward flow line */}
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2">
              <div className="h-full w-full bg-border/30" />
              <motion.div
                className="absolute bottom-0 left-0 h-32 w-full"
                style={{
                  background: "linear-gradient(to top, transparent, hsl(174 42% 45% / 0.4), transparent)",
                }}
                animate={{ bottom: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {layers.map((layer, i) => {
              const Icon = layer.icon;
              const isHovered = hoveredLayer === layer.id;
              const isSelected = selectedLayer === layer.id;
              const isTop = i === 0;
              const isBottom = i === layers.length - 1;

              return (
                <div key={layer.id} className="relative z-10 w-full">
                  {/* Connector dot */}
                  {!isBottom && (
                    <div className="flex justify-center py-1">
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-border"
                        animate={isHovered ? { backgroundColor: "hsl(174 42% 45%)", scale: 1.5 } : {}}
                      />
                    </div>
                  )}

                  {/* Direction label */}
                  {isTop && (
                    <div className="mb-3 flex justify-center">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary/40">
                        ▲ Intelligence Output
                      </span>
                    </div>
                  )}

                  <motion.button
                    onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                    className={`group relative w-full cursor-pointer rounded border px-5 py-4 text-left transition-all duration-300 md:px-8 md:py-5 ${
                      isSelected
                        ? "border-primary/50 bg-primary/5"
                        : isHovered
                        ? "border-primary/30 bg-secondary/40"
                        : "border-border bg-secondary/10"
                    }`}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.998 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    {/* Glow effect */}
                    {(isHovered || isSelected) && (
                      <motion.div
                        layoutId="stack-glow"
                        className="absolute inset-0 rounded"
                        style={{
                          boxShadow: "0 0 30px -5px hsl(174 42% 45% / 0.15), inset 0 1px 0 hsl(174 42% 45% / 0.1)",
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    )}

                    <div className="relative flex items-center gap-4 md:gap-6">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded transition-colors duration-300 md:h-10 md:w-10 ${
                          isSelected || isHovered
                            ? "bg-primary/15 text-primary"
                            : "bg-secondary/50 text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4 md:h-5 md:w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          <h3
                            className={`font-mono text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-300 md:text-sm ${
                              isSelected || isHovered ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {layer.title}
                          </h3>
                          <span className="font-mono text-[9px] text-muted-foreground/30">
                            {String(layers.length - i).padStart(2, "0")}
                          </span>
                        </div>
                        <p className="mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground md:text-[11px]">
                          {layer.subtitle}
                        </p>
                      </div>

                      <ChevronRight
                        className={`h-3.5 w-3.5 shrink-0 text-muted-foreground/30 transition-all duration-300 ${
                          isSelected ? "rotate-90 text-primary" : "group-hover:text-primary/60"
                        }`}
                      />
                    </div>

                    {/* Inline expand on click */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 border-t border-border/50 pt-4">
                            <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                              {layer.details.description}
                            </p>
                            <ul className="mt-3 space-y-1.5">
                              {layer.details.bullets.map((b, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-2 font-mono text-[10px] text-foreground/60"
                                >
                                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Direction label */}
                  {isBottom && (
                    <div className="mt-3 flex justify-center">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40">
                        ▼ Raw Data Input
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating pillar badges (desktop sidebar) */}
        <div className="flex flex-row justify-center gap-4 lg:w-48 lg:flex-col lg:justify-start lg:gap-3 lg:pt-12">
          {pillars.map((pillar, i) => {
            const PIcon = pillar.icon;
            return (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 rounded border border-border bg-secondary/10 px-4 py-3 lg:flex-row"
              >
                <PIcon className="h-4 w-4 shrink-0 text-primary/60" />
                <div>
                  <div className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-foreground">
                    {pillar.label}
                  </div>
                  <div className="mt-0.5 font-mono text-[9px] leading-snug text-muted-foreground/60">
                    {pillar.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AIStackDiagram;

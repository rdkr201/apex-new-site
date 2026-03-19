import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

interface RoleSection {
  id: string;
  emoji: string;
  title: string;
  audience: string;
  intro: string;
  capabilities: string[];
  examples?: string[];
  outcome: string;
}

const sections: RoleSection[] = [
  {
    id: "research",
    emoji: "🔎",
    title: "Research",
    audience: "Analysts & Investment Research Teams",
    intro:
      "ALICE transforms fragmented research workflows into a unified, AI-powered workspace. Analysts can ingest and query earnings transcripts, broker reports, filings, and web data using natural language.",
    capabilities: [
      "Summarise earnings calls, research notes, and filings instantly",
      "Run cross-document queries across entire research folders",
      "Extract tables, figures, and key metrics into structured formats",
      "Generate first drafts of reports, IC memos, and summaries",
      "Compare company narratives, sentiment, and forward guidance",
    ],
    outcome:
      "Reduce hours of manual reading and synthesis into minutes — with deeper, more consistent insight generation.",
  },
  {
    id: "multi-asset",
    emoji: "🌐",
    title: "Multi-Asset",
    audience: "Portfolio Managers & Strategists",
    intro:
      "ALICE acts as a cross-asset intelligence layer, connecting macro, equities, credit, and alternative datasets into a single interface.",
    capabilities: [
      "Query macro trends and link them to portfolio exposures",
      "Analyse correlations and risk across asset classes",
      "Run portfolio optimisation and allocation scenarios",
      "Monitor global news, policy changes, and market shifts in real time",
      "Generate portfolio-level insights across mixed asset strategies",
    ],
    outcome:
      "A single system to understand how macro and cross-asset dynamics impact portfolio construction and risk.",
  },
  {
    id: "equities",
    emoji: "📊",
    title: "Equities",
    audience: "Equity Analysts & PMs",
    intro:
      "ALICE enables rapid, structured equity analysis by combining financial data, filings, and qualitative insights.",
    capabilities: [
      "Screen equities using fundamental and technical criteria",
      "Analyse earnings transcripts and management commentary",
      "Track company performance, valuation, and key ratios",
      "Backtest equity strategies using historical data",
      "Generate charts and investment summaries instantly",
    ],
    examples: [
      '"Filter companies with ROA > 6% and gross margin > 33%"',
      '"Summarise TSLA earnings calls over the last 4 quarters"',
    ],
    outcome:
      "Faster idea generation, deeper company understanding, and more efficient portfolio construction.",
  },
  {
    id: "quant",
    emoji: "⚙️",
    title: "Quant",
    audience: "Quantitative Researchers & Systematic Teams",
    intro:
      "ALICE bridges natural language and quantitative modelling, allowing quants to define, test, and iterate strategies faster.",
    capabilities: [
      "Convert natural language into backtests and models",
      "Run multi-factor and signal-based strategy analysis",
      "Generate performance metrics (Sharpe, drawdown, volatility, etc.)",
      "Analyse factor exposure and portfolio behaviour",
      "Integrate structured and alternative datasets into models",
    ],
    examples: [
      "Backtest momentum, mean reversion, or hybrid strategies",
      "Analyse factor-driven performance across time horizons",
      "Build and iterate strategies without writing full code",
    ],
    outcome:
      "Accelerated research cycles and faster strategy iteration with reduced technical friction.",
  },
  {
    id: "credit",
    emoji: "💳",
    title: "Credit",
    audience: "Fixed Income, Credit Analysts & Traders",
    intro:
      "ALICE provides deep credit intelligence by analysing bond data, prospectuses, spreads, and macro drivers.",
    capabilities: [
      "Extract covenants and terms from bond prospectuses",
      "Analyse credit spreads and relative value across issuers",
      "Monitor credit risk and rating changes in real time",
      "Link macro developments to credit curve movements",
      "Summarise issuer fundamentals and debt structures",
    ],
    examples: [
      '"Analyse spread movements for European HY over the past 6 months"',
      '"Extract covenants from this bond prospectus"',
    ],
    outcome:
      "More efficient credit analysis, faster document review, and improved risk awareness across portfolios.",
  },
];

interface WorkflowsTabProps {
  scrollToSection?: string;
}

const WorkflowsTab = ({ scrollToSection }: WorkflowsTabProps) => {
  useEffect(() => {
    if (scrollToSection) {
      const el = document.getElementById(scrollToSection);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [scrollToSection]);

  return (
    <div>
      <HeroSection
        accentLine="Agentic Workflows"
        headline="ALICE — Role-Adaptive Intelligence"
        subtitle="Not a tool — a role-adaptive intelligence system. ALICE adapts to the workflows of every financial professional."
      />

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] divide-y divide-border px-6 lg:px-10">
          {sections.map((section, i) => (
            <motion.section
              key={section.id}
              id={section.id}
              className="scroll-mt-20 py-16 md:py-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {/* Header */}
              <div className="mb-10">
                <h3 className="font-mono text-2xl font-light tracking-tightest text-foreground md:text-3xl">
                  <span className="mr-3">{section.emoji}</span>
                  {section.title}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {section.audience}
                </p>
              </div>

              {/* How ALICE works */}
              <div className="mb-10">
                <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  How ALICE works
                </h4>
                <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
                  {section.intro}
                </p>
              </div>

              {/* Capabilities */}
              <div className="mb-10">
                <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                  Key Capabilities
                </h4>
                <ul className="space-y-3">
                  {section.capabilities.map((cap, ci) => (
                    <li key={ci} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="font-mono text-sm text-foreground/80">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Example queries */}
              {section.examples && (
                <div className="mb-10">
                  <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                    {section.id === "quant" ? "Example Workflows" : "Example Queries"}
                  </h4>
                  <div className="space-y-2">
                    {section.examples.map((ex, ei) => (
                      <div
                        key={ei}
                        className="rounded border border-border bg-secondary/30 px-4 py-3 font-mono text-xs leading-relaxed text-foreground/70"
                      >
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcome */}
              <div className="rounded border-l-2 border-primary bg-primary/5 px-6 py-5">
                <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Outcome
                </h4>
                <p className="font-mono text-sm leading-relaxed text-foreground/80">
                  {section.outcome}
                </p>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowsTab;

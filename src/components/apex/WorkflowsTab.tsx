import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

interface RoleSection {
  id: string;
  icon: string;
  title: string;
  audience: string;
  intro: string;
  capabilities: string[];
  examples?: { label: string; items: string[] };
  codeGeneration?: { intro: string; examples: string[] };
  outcome: string;
}

const sections: RoleSection[] = [
  {
    id: "research",
    icon: "",
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
      "Reduce hours of manual reading and synthesis into minutes, with deeper, more consistent insight generation.",
  },
  {
    id: "multi-asset",
    icon: "",
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
    icon: "",
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
    examples: {
      label: "Example queries",
      items: [
        "Filter companies with ROA > 6% and gross margin > 33%",
        "Summarise TSLA earnings calls over the last 4 quarters",
      ],
    },
    outcome:
      "Faster idea generation, deeper company understanding, and more efficient portfolio construction.",
  },
  {
    id: "quant",
    icon: "",
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
    examples: {
      label: "Example workflows",
      items: [
        "Forecast BTC-USD price for next 10 days",
        "Detect market regimes for AAPL over the last year",
        "Test cointegration between SPY and QQQ",
        "Analyze the impulse response of SPY to a shock in TLT. Trace the effect over 20 periods.",
        "For SPY: Detect Markov regimes, fit GJR-GARCH for volatility, fit HAR model for decomposition",
        "Use SARIMAX to forecast XOM including CL (Crude Oil) as an exogenous variable",
      ],
    },
    outcome:
      "Accelerated research cycles and faster strategy iteration with reduced technical friction.",
  },
  {
    id: "credit",
    icon: "💳",
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
    examples: {
      label: "Example queries",
      items: [
        "Analyse spread movements for European HY over the past 6 months",
        "Extract covenants from this bond prospectus",
      ],
    },
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
        headline="ALICE: Role-Adaptive Intelligence"
        subtitle="Not a tool. An intelligence system that adapts to every role across the investment lifecycle."
      />

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] divide-y divide-border px-6 lg:px-10">
          {sections.map((section, i) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="scroll-mt-20 py-16 md:py-20"
            >
              {/* Header */}
              <div className="mb-10">
                <h2 className="font-mono text-lg font-medium tracking-tight text-foreground">
                  
                  {section.title}
                </h2>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {section.audience}
                </p>
              </div>

              {/* How ALICE works */}
              <div className="mb-10">
                <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  How ALICE works
                </h3>
                <p className="max-w-3xl font-mono text-sm leading-relaxed text-muted-foreground">
                  {section.intro}
                </p>
              </div>

              {/* Capabilities */}
              <ul className="mb-10 grid gap-3 md:grid-cols-2">
                {section.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-3 font-mono text-xs leading-relaxed text-foreground/80"
                  >
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {cap}
                  </li>
                ))}
              </ul>

              {/* Examples */}
              {section.examples && (
                <div className="mb-10">
                  <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
                    {section.examples.label}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {section.examples.items.map((ex) => (
                      <div
                        key={ex}
                        className="rounded border border-border bg-secondary/30 px-4 py-3 font-mono text-xs text-foreground/70"
                      >
                        "{ex}"
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Generation */}
              {section.codeGeneration && (
                <div className="mb-10">
                  <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    Code Generation
                  </h3>
                  <p className="mb-4 max-w-3xl font-mono text-sm leading-relaxed text-muted-foreground">
                    {section.codeGeneration.intro}
                  </p>
                  <div className="flex flex-col gap-2">
                    {section.codeGeneration.examples.map((ex) => (
                      <div
                        key={ex}
                        className="rounded border border-border bg-secondary/30 px-4 py-3 font-mono text-xs text-foreground/70"
                      >
                        "{ex}"
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="border-l-2 border-primary/40 pl-5">
                <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary/70">
                  Outcome
                </h3>
                <p className="max-w-2xl font-mono text-sm leading-relaxed text-foreground/90">
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

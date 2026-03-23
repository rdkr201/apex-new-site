import { motion } from "framer-motion";
import ChaosToOrderParticles from "./ChaosToOrderParticles";

const queryGroups = [
  {
    label: "Forecasting",
    queries: [
      "Compare 5-day forecasts for TSLA using Prophet, XGBoost, and Ensemble (ARIMA+ETS). Which model predicts the highest price?",
      "Forecast NVDA using XGBoost for the next 5 days. Show top 10 features and MAPE on test set.",
    ],
  },
  {
    label: "Fundamental",
    queries: [
      "Compare the ESG scores of major tech companies",
      "What is Amazon's free cash flow trend?",
      "How has Apple's gross margin trended over the last 8 quarters?",
    ],
  },
];

const TransformationAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/50">
            Core Capability
          </p>
          <h3 className="mt-3 font-mono text-lg font-light tracking-tightest text-foreground md:text-2xl">
            From noise to conviction
          </h3>
        </div>

        <div className="flex flex-col items-stretch gap-0 md:flex-row">
          {/* Unstructured: chaotic particles */}
          <div className="relative flex-1 overflow-hidden rounded-sm border border-border bg-secondary/20" style={{ minHeight: 300 }}>
            <ChaosToOrderParticles />
          </div>

          {/* Center arrow with sweep */}
          <div className="relative flex items-center justify-center px-4 py-6 md:px-8 md:py-0">
            <div className="relative flex h-10 w-full items-center md:h-full md:w-10 md:flex-col">
              {/* Line */}
              <div className="relative h-px w-full overflow-hidden bg-border md:h-full md:w-px">
                <motion.div
                  className="absolute left-0 top-0 h-full w-20 md:h-20 md:w-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.6), transparent)",
                  }}
                  animate={{
                    x: ["0%", "500%"],
                    y: ["0%", "0%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                />
              </div>
              {/* Arrow tip */}
              <div className="font-mono text-lg text-primary/60 md:mt-1">→</div>
            </div>
          </div>

          {/* Structured: clean rows */}
          <div className="flex-1 rounded-sm border border-primary/20 bg-secondary/10 p-6 md:p-8" style={{ minHeight: 280 }}>
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60">
              Actionable Insights
            </div>
            <div className="space-y-4">
              {insights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                >
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary/50">
                      {item.label}
                    </div>
                    <div className="mt-0.5 font-mono text-xs text-foreground/70">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TransformationAnimation;

import { motion } from "framer-motion";

const fragments = [
  { text: "earnings_call.pdf", x: 5, y: 10, rot: -12 },
  { text: "SEC 10-K filing", x: 55, y: 5, rot: 8 },
  { text: "twitter/sentiment", x: 15, y: 55, rot: -5 },
  { text: "news_feed.json", x: 60, y: 60, rot: 15 },
  { text: "alt_data_v3.csv", x: 30, y: 30, rot: -18 },
  { text: "transcript_q4", x: 70, y: 35, rot: 6 },
  { text: "macro_signals", x: 10, y: 80, rot: -8 },
  { text: "order_flow.raw", x: 65, y: 85, rot: 11 },
];

const insights = [
  { label: "Signal", value: "Long AAPL — 94% confidence" },
  { label: "Risk", value: "VaR breach: sector rotation detected" },
  { label: "Alpha", value: "+2.3σ edge on earnings catalyst" },
  { label: "Action", value: "Execute via TWAP — 15min window" },
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
          {/* Unstructured — chaotic fragments */}
          <div className="relative flex-1 overflow-hidden rounded-sm border border-border bg-secondary/20 p-6 md:p-8" style={{ minHeight: 280 }}>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
              Unstructured
            </div>
            {fragments.map((f, i) => (
              <motion.div
                key={f.text}
                className="absolute font-mono text-[10px] text-muted-foreground/30 md:text-xs"
                style={{ left: `${f.x}%`, top: `${f.y}%` }}
                initial={{ opacity: 0, rotate: f.rot }}
                whileInView={{ opacity: 1, rotate: f.rot }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                animate={{
                  x: [0, Math.sin(i) * 6, 0],
                  y: [0, Math.cos(i) * 4, 0],
                }}
                // @ts-ignore
                transition={{
                  x: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.4, delay: 0.1 + i * 0.08 },
                }}
              >
                {f.text}
              </motion.div>
            ))}
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

          {/* Structured — clean rows */}
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

import { motion } from "framer-motion";

const guarantees = [
  {
    label: "On-Premise Deployment",
    desc: "Full platform runs within your infrastructure. No data leaves your environment.",
  },
  {
    label: "Data Sovereignty",
    desc: "Complete ownership of all data, models, and outputs. No third-party access.",
  },
  {
    label: "Compliance Ready",
    desc: "Designed for MiFID II, GDPR, SEC, and internal compliance frameworks.",
  },
  {
    label: "Air-Gapped Capable",
    desc: "Operates without external network dependencies when required.",
  },
  {
    label: "Audit Trail",
    desc: "Full logging of all agent actions, decisions, and data access patterns.",
  },
  {
    label: "Model Isolation",
    desc: "AI models run exclusively within your environment. No shared inference.",
  },
];

const SovereigntyTab = () => {
  return (
    <div className="mx-auto min-h-[calc(100vh-3.5rem)] max-w-5xl px-6 pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-mono text-lg font-light tracking-tightest text-foreground">
          AI Sovereignty
        </h2>
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          Your data. Your models. Your infrastructure.
        </p>
      </motion.div>

      <div className="mt-12 space-y-0 divide-y divide-border">
        {guarantees.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-6 py-5"
          >
            <div className="w-48 shrink-0 font-mono text-xs font-medium text-primary">
              {item.label}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SovereigntyTab;

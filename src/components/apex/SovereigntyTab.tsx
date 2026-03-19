import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

const guarantees = [
  { label: "On-Premise Deployment", desc: "Full platform runs within your infrastructure. No data leaves your environment." },
  { label: "Data Sovereignty", desc: "Complete ownership of all data, models, and outputs. No third-party access." },
  { label: "Compliance Ready", desc: "Designed for MiFID II, GDPR, SEC, and internal compliance frameworks." },
  { label: "Air-Gapped Capable", desc: "Operates without external network dependencies when required." },
  { label: "Audit Trail", desc: "Full logging of all agent actions, decisions, and data access patterns." },
  { label: "Model Isolation", desc: "AI models run exclusively within your environment. No shared inference." },
];

const SovereigntyTab = () => {
  return (
    <div>
      <HeroSection
        accentLine="AI Sovereignty"
        headline="Your data. Your models. Your infrastructure."
        subtitle="Complete control over every layer of the stack. No compromises."
      />

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] divide-y divide-border px-6 lg:px-10">
          {guarantees.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col gap-2 py-8 md:flex-row md:items-start md:gap-12"
            >
              <div className="w-56 shrink-0 font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
                {item.label}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SovereigntyTab;

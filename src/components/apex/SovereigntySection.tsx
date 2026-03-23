import { motion } from "framer-motion";
import { Server, ShieldCheck, Scale, WifiOff, ClipboardList, Brain } from "lucide-react";

const guarantees = [
  {
    icon: Server,
    title: "On-Premise Deployment",
    desc: "Full platform runs within your infrastructure. No data leaves your environment.",
  },
  {
    icon: ShieldCheck,
    title: "Data Sovereignty",
    desc: "Complete ownership of all data, models, and outputs. No third-party access.",
  },
  {
    icon: Scale,
    title: "Compliance Ready",
    desc: "Designed for MiFID II, GDPR, SEC, and internal compliance frameworks.",
  },
  {
    icon: WifiOff,
    title: "Air-Gapped Capable",
    desc: "Operates without external network dependencies when required.",
  },
  {
    icon: ClipboardList,
    title: "Full Audit Trail",
    desc: "Complete logging of all agent actions, decisions, and data access patterns.",
  },
  {
    icon: Brain,
    title: "Model Isolation",
    desc: "AI models run exclusively within your environment. No shared inference.",
  },
];

const SovereigntySection = () => {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            AI Sovereignty
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 max-w-xl font-mono text-2xl font-light tracking-tightest text-foreground md:text-3xl"
        >
          Enterprise-grade control over every layer of the stack
        </motion.h2>

        <div className="grid grid-cols-1 divide-border border border-border md:grid-cols-3 md:divide-x">
          {/* Row 1 */}
          {guarantees.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-b border-border p-8"
            >
              <item.icon className="mb-4 h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="font-mono text-sm font-medium tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
          {/* Row 2 */}
          {guarantees.slice(3, 6).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.24 + i * 0.08 }}
              className="p-8"
            >
              <item.icon className="mb-4 h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="font-mono text-sm font-medium tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 font-mono text-xs tracking-wide text-muted-foreground"
        >
          Your data. Your models. Your infrastructure. No compromises.
        </motion.p>
      </div>
    </section>
  );
};

export default SovereigntySection;

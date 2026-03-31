import { motion } from "framer-motion";
import { MessageSquare, Bot, Server, Code } from "lucide-react";

const pillars = [
  {
    icon: MessageSquare,
    title: "ALICE",
    subtitle: "Your AI Co-Pilot",
    desc: "Natural language interface across research, analytics, and workflows. Built for portfolio managers, analysts, and investment teams.",
  },
  {
    icon: Bot,
    title: "Bespoke Agents",
    subtitle: "Custom AI Workflows",
    desc: "Domain-specific agents designed around your internal processes, from research to execution.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    subtitle: "Enterprise AI Platform",
    desc: "Private, scalable AI infrastructure, deployed within your environment with full control.",
  },
  {
    icon: Code,
    title: "APIs & Data Layer",
    subtitle: "Build on APEX",
    desc: "APIs, SDKs, and data pipelines to integrate, extend, and customise across your stack.",
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
            What We Offer
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 max-w-2xl font-mono text-2xl font-light tracking-tightest text-foreground md:text-3xl"
        >
          A Complete Sovereign AI Stack — Delivered Your Way
        </motion.h2>

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-4">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background p-8"
            >
              <item.icon className="mb-4 h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="font-mono text-sm font-medium tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-primary/70">
                {item.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SovereigntySection;

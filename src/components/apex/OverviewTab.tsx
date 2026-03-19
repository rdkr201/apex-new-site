import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import ParticleField from "./ParticleField";

const services = [
  {
    label: "01",
    title: "Agentic Workflows",
    desc: "End-to-end automation across research, signal generation, and trade execution.",
  },
  {
    label: "02",
    title: "Big Data Architecture",
    desc: "Ingest structured and unstructured data. Real-time and historical. Query anything.",
  },
  {
    label: "03",
    title: "AI Sovereignty",
    desc: "On-premise deployment. Full data control. Designed for strict compliance environments.",
  },
  {
    label: "04",
    title: "Infrastructure",
    desc: "Cloud agnostic. VPC deployment. Kubernetes + Docker microservices. Days to deploy.",
  },
];

const OverviewTab = () => {
  const headline = "Infrastructure for Alpha";
  const [displayedChars, setDisplayedChars] = useState(0);

  useEffect(() => {
    if (displayedChars < headline.length) {
      const timeout = setTimeout(() => setDisplayedChars((c) => c + 1), 45);
      return () => clearTimeout(timeout);
    }
  }, [displayedChars, headline.length]);

  const typed = headline.slice(0, displayedChars);
  const splitIndex = "Infrastructure".length;
  const firstPart = typed.slice(0, splitIndex);
  const secondPart = typed.slice(splitIndex);

  return (
    <div>
      {/* Hero */}
      <div className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
        <ParticleField count={100} />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-mono text-5xl font-light leading-[1.1] tracking-tightest text-foreground md:text-7xl lg:text-8xl">
              <span className="text-primary">{firstPart}</span>
              {secondPart}
              <span className="animate-pulse text-primary">_</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: displayedChars >= headline.length ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-lg font-mono text-sm leading-relaxed tracking-wide text-muted-foreground"
            >
              Agentic AI for capital markets. Domain-native.
              Institutionally deployed. Outcome-driven.
            </motion.p>

            <motion.a
              href="mailto:contact@apexe3.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: displayedChars >= headline.length ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Get in Touch
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="border-t border-border"
      >
        <div className="mx-auto max-w-[1400px] divide-y divide-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
              className="group flex items-center justify-between px-6 py-8 transition-colors hover:bg-secondary/30 lg:px-10"
            >
              <div className="flex items-start gap-8">
                <span className="font-mono text-xs text-muted-foreground/50">
                  {service.label}
                </span>
                <div>
                  <h3 className="font-mono text-sm font-medium tracking-wide text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground/30 transition-colors group-hover:text-primary" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OverviewTab;

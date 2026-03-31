import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

const useCases = [
  {
    title: "Research & Document Workflows",
    description:
      "Automate analysis across earnings calls, research reports, and filings with structured outputs and summaries.",
  },
  {
    title: "Data Extraction & Integration",
    description:
      "Extract and standardise data from PDFs, spreadsheets, and internal systems into analysis-ready formats.",
  },
  {
    title: "Portfolio & Risk Workflows",
    description:
      "Custom analytics, monitoring, and reporting aligned to internal portfolio construction and risk frameworks.",
  },
  {
    title: "Compliance & Audit Workflows",
    description:
      "Automate regulatory checks, reporting, and audit trails with full explainability and control.",
  },
  {
    title: "Internal Data Access (Natural Language → SQL)",
    description:
      "Query internal datasets using natural language with controlled, auditable execution.",
  },
  {
    title: "Agentic Task Automation",
    description:
      "Multi-step workflows executed automatically, from ingestion to analysis to output.",
  },
];

const steps = [
  {
    num: "01",
    title: "Identify",
    description:
      "We work with your team to identify high-impact workflows and bottlenecks.",
  },
  {
    num: "02",
    title: "Build",
    description:
      "We design and deploy tailored AI workflows integrated into your data and systems.",
  },
  {
    num: "03",
    title: "Deploy & Iterate",
    description:
      "Production-ready deployment with continuous refinement based on real usage.",
  },
];

const BespokeWorkflowsTab = () => {
  return (
    <div>
      <HeroSection
        accentLine="Bespoke Workflows"
        headline={<>Custom AI<br />Workflows</>}
        subtitle="We work directly with your team to design and deploy AI workflows tailored to your internal processes, integrating with your data, systems, and decision-making frameworks."
        tesseractVariant="solutions"
      />

      {/* Use Cases Grid */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-10 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              What This Looks Like
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc, i) => (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-lg border border-border bg-secondary/20 p-6"
                >
                  <h4 className="font-mono text-sm font-medium text-foreground">
                    {uc.title}
                  </h4>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                    {uc.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* How We Work */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-10 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              How We Work
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span className="font-mono text-3xl font-light text-primary/40">
                    {step.num}
                  </span>
                  <h4 className="mt-3 font-mono text-sm font-medium text-foreground">
                    {step.title}
                  </h4>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BespokeWorkflowsTab;

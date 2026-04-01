import { motion } from "framer-motion";
import { Check } from "lucide-react";
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

const problemBullets = [
  "Connecting to fragmented, proprietary data sources",
  "Structuring outputs into repeatable, auditable workflows",
  "Ensuring accuracy, traceability, and compliance",
  "Embedding into real operational systems and decision processes",
];

const apexBullets = [
  "Integrate directly with your internal systems and datasets",
  "Encode domain-specific logic and constraints",
  "Deliver consistent, auditable outputs at scale",
  "Operate securely within your environment",
];

const comparisonRows = [
  { frontier: "Insight generation", apex: "Workflow integration" },
  { frontier: "Generic outputs", apex: "Structured, auditable intelligence" },
  { frontier: "Experimentation", apex: "Production deployment" },
];

const BespokeWorkflowsTab = () => {
  return (
    <div>
      <HeroSection
        accentLine="Bespoke Workflows"
        headline={<>Closing the Last Mile<br />to Production</>}
        subtitle="Frontier AI models get you 80% of the way. The remaining 20% is where real value is created, and where most systems fail."
        tesseractVariant="solutions"
      />

      {/* The Problem */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              The Challenge
            </h3>
            <p className="max-w-3xl font-mono text-sm leading-relaxed text-muted-foreground">
              Frontier models like GPT and Claude are powerful for exploration, summarisation, and prototyping. They can accelerate early-stage workflows and unlock rapid insight.
            </p>
            <p className="mt-4 max-w-3xl font-mono text-sm leading-relaxed text-foreground/80">
              But in institutional environments, the final mile is what matters most.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {problemBullets.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="font-mono text-xs leading-relaxed text-foreground/80">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 font-mono text-sm font-medium text-foreground">
              This is where generic tools stop, and where APEX:E3 begins.
            </p>
          </motion.div>
        </div>
      </div>

      {/* The APEX:E3 Difference */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              The APEX:E3 Difference
            </h3>
            <p className="max-w-3xl font-mono text-sm leading-relaxed text-muted-foreground">
              APEX:E3 transforms AI from a useful assistant into production-grade infrastructure.
            </p>
            <p className="mt-4 max-w-3xl font-mono text-sm leading-relaxed text-muted-foreground">
              We design and deploy bespoke workflows that:
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {apexBullets.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="font-mono text-xs leading-relaxed text-foreground/80">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Punch line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 border-l-2 border-primary/40 pl-6"
            >
              <p className="font-mono text-xl font-light tracking-tight text-foreground md:text-2xl">
                From Exploration to Institutional Deployment
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Comparison Strip */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  Frontier Models
                </h4>
                {comparisonRows.map((row, i) => (
                  <div
                    key={i}
                    className="border-b border-border py-4 font-mono text-xs text-muted-foreground"
                  >
                    {row.frontier}
                  </div>
                ))}
              </div>
              <div>
                <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  APEX:E3
                </h4>
                {comparisonRows.map((row, i) => (
                  <div
                    key={i}
                    className="border-b border-border py-4 font-mono text-xs text-foreground"
                  >
                    {row.apex}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Closing Line */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-12 md:py-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="mx-auto max-w-2xl font-mono text-sm leading-relaxed text-foreground/80">
              The difference between AI that is used occasionally and AI that drives outcomes is the last mile. That's what we build.
            </p>
            <p className="mx-auto mt-4 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground">
              Most AI initiatives stall not because of model capability, but because the final 20% (integration, control, and reliability) is never solved.
            </p>
          </motion.div>
        </div>
      </div>

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

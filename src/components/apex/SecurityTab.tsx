import { motion } from "framer-motion";
import {
  Shield, Server, Users, FileSearch, Lock, Eye, Activity, KeyRound,
  Check, X, Cloud, Container, Network, Cpu, Database, Key,
  Bot, Plug, MonitorCheck, Building2, ShieldCheck, Workflow
} from "lucide-react";
import HeroSection from "./HeroSection";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";

const sectionAnim = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const cardAnim = (i: number) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.4, delay: i * 0.08 },
});

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2.5">
    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
    <span className="text-sm leading-relaxed text-muted-foreground">{children}</span>
  </li>
);

/* ─── Section wrapper ─── */
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`border-t border-border ${className}`}>
    <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">{children}</div>
  </section>
);

const SectionLabel = ({ label }: { label: string }) => (
  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{label}</p>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-4 font-mono text-2xl font-light tracking-tightest text-foreground md:text-3xl">
    {children}
  </h2>
);

/* ─── Block card used in grids ─── */
const BlockCard = ({
  icon: Icon, title, items, index,
}: {
  icon: React.ElementType; title: string; items: string[]; index: number;
}) => (
  <motion.div {...cardAnim(index)} className="border border-border p-8">
    <Icon className="mb-4 h-5 w-5 text-primary" strokeWidth={1.5} />
    <h3 className="font-mono text-sm font-medium tracking-wide text-foreground">{title}</h3>
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <Bullet key={item}>{item}</Bullet>
      ))}
    </ul>
  </motion.div>
);

/* ─── Data ─── */

const sovereigntyItems = [
  "Enterprise-grade AI agents deployed on-premise, private cloud, or bare metal.",
  "End-to-end private AI pipeline operating entirely behind your firewall.",
  "Private vector databases, private models, and isolated compute.",
  "Zero external data exposure. No training on your data, ever.",
];

const deploymentBlocks = [
  { icon: Cloud, title: "Private Deployment Options", items: ["VPC (AWS, Azure, GCP).", "On-premise and air-gapped environments.", "Hybrid deployments."] },
  { icon: Container, title: "Containerised Infrastructure", items: ["Docker-based microservices architecture.", "Kubernetes orchestration with isolation and scaling.", "Secure artifact distribution via private repositories."] },
  { icon: Network, title: "Network & Environment Isolation", items: ["Runs fully within your firewall.", "No outbound data transfer unless explicitly configured.", "Segregated environments per client."] },
  { icon: Cpu, title: "Compute Control", items: ["Runs on your GPUs and compute infrastructure.", "No shared compute layers.", "Full control over performance vs cost trade-offs."] },
];

const dataBlocks = [
  { icon: Database, title: "Data Handling", items: ["Structured and unstructured data processed securely in-place.", "No persistence outside client-controlled environments.", "Optional ephemeral processing modes."] },
  { icon: Lock, title: "Encryption", items: ["Data encrypted in transit and at rest.", "Secure key management aligned with enterprise policies."] },
  { icon: Shield, title: "Data Isolation", items: ["Dedicated indexes and vector stores per client.", "No cross-tenant data access.", "Strict data boundary enforcement."] },
  { icon: Eye, title: "No Model Training on Client Data", items: ["Zero data used for external model training.", "Fully private inference pipelines."] },
];

const modelBlocks = [
  { icon: Server, title: "Private Model Hosting", items: ["Deploy open-source or proprietary models within your environment.", "No reliance on external APIs unless explicitly chosen."] },
  { icon: ShieldCheck, title: "Model Governance", items: ["Version-controlled models.", "Controlled updates and rollback capability.", "Audit trail of model usage."] },
  { icon: Activity, title: "Guardrails & Validation", items: ["Output validation layers.", "Hallucination mitigation via retrieval and grounding.", "Configurable constraints per workflow."] },
];

const auditBlocks = [
  { icon: FileSearch, title: "Full Audit Logs", items: ["Query logs.", "Data access logs.", "Agent execution logs."] },
  { icon: Eye, title: "Explainable Outputs", items: ["Source citations (documents, data points).", "Step-by-step reasoning paths for agents.", "Transparent data lineage."] },
  { icon: Shield, title: "Compliance Ready", items: ["Built for regulatory environments (MiFID, SEC-style expectations).", "Supports internal audit and compliance workflows."] },
];

const accessBlocks = [
  { icon: Users, title: "Role-Based Access Control (RBAC)", items: ["User-level permissions.", "Dataset-level permissions.", "Workflow-level permissions."] },
  { icon: Key, title: "Authentication", items: ["SSO and enterprise identity integration.", "MFA support."] },
  { icon: MonitorCheck, title: "Operational Governance", items: ["Admin dashboards for monitoring usage.", "Control over agent execution permissions.", "Human-in-the-loop checkpoints."] },
];

const agentModes = [
  { label: "Single-step", desc: "Deterministic output." },
  { label: "Multi-step", desc: "Controlled transformations (e.g. NL to SQL to validation)." },
  { label: "Autonomous", desc: "Bounded loops with termination conditions." },
];

const comparisonRows = [
  { feature: "Data leaves environment", typical: true, apex: false },
  { feature: "Shared models", typical: true, apex: false },
  { feature: "Auditability", typical: "Limited", apex: "Full" },
  { feature: "Deployment control", typical: "None", apex: "Full" },
  { feature: "Agent governance", typical: "Weak", apex: "Structured" },
];

/* ─── Component ─── */

const SecurityTab = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        accentLine="Security & Compliance"
        headline={
          <>
            AI Sovereignty. Built for
            <br />
            Financial Institutions.
          </>
        }
        subtitle="APEX:E3 delivers fully private, auditable, and secure AI infrastructure, deployed within your environment, governed by your rules."
        tesseractVariant="security"
      />

      {/* Support line */}
      <div className="mx-auto max-w-[1400px] px-6 -mt-12 pb-12 lg:px-10">
        <p className="font-mono text-xs tracking-wide text-muted-foreground/60">
          No data leakage. No shared models. No compromise on performance.
        </p>
      </div>

      {/* 1. AI Sovereignty */}
      <Section>
        <motion.div {...sectionAnim}>
          <SectionLabel label="AI Sovereignty" />
          <SectionTitle>Full Control Across the AI Stack</SectionTitle>
        </motion.div>
        <motion.ul {...sectionAnim} className="mt-10 space-y-3">
          {sovereigntyItems.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </motion.ul>
        <motion.p
          {...sectionAnim}
          className="mt-8 font-mono text-sm font-medium text-primary"
        >
          Your data, your models, your infrastructure. Fully sovereign.
        </motion.p>
      </Section>

      {/* 2. Deployment & Infrastructure */}
      <Section>
        <motion.div {...sectionAnim}>
          <SectionLabel label="Infrastructure" />
          <SectionTitle>Secure by Architecture</SectionTitle>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {deploymentBlocks.map((b, i) => (
            <BlockCard key={b.title} {...b} index={i} />
          ))}
        </div>
      </Section>

      {/* 3. Data Security & Privacy */}
      <Section>
        <motion.div {...sectionAnim}>
          <SectionLabel label="Data Security" />
          <SectionTitle>End-to-End Data Protection</SectionTitle>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {dataBlocks.map((b, i) => (
            <BlockCard key={b.title} {...b} index={i} />
          ))}
        </div>
      </Section>

      {/* 4. Model & AI Security */}
      <Section>
        <motion.div {...sectionAnim}>
          <SectionLabel label="Model Security" />
          <SectionTitle>Controlled, Explainable AI Systems</SectionTitle>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {modelBlocks.map((b, i) => (
            <BlockCard key={b.title} {...b} index={i} />
          ))}
        </div>
      </Section>

      {/* 5. Auditability & Explainability */}
      <Section>
        <motion.div {...sectionAnim}>
          <SectionLabel label="Auditability" />
          <SectionTitle>Every Output is Traceable</SectionTitle>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {auditBlocks.map((b, i) => (
            <BlockCard key={b.title} {...b} index={i} />
          ))}
        </div>
      </Section>

      {/* 6. Access Control & Governance */}
      <Section>
        <motion.div {...sectionAnim}>
          <SectionLabel label="Access Control" />
          <SectionTitle>Granular Control Across Users and Systems</SectionTitle>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {accessBlocks.map((b, i) => (
            <BlockCard key={b.title} {...b} index={i} />
          ))}
        </div>
      </Section>

      {/* 7. Agent Security */}
      <Section>
        <motion.div {...sectionAnim}>
          <SectionLabel label="Agent Security" />
          <SectionTitle>Secure Agentic Workflows</SectionTitle>
        </motion.div>
        <motion.div {...sectionAnim} className="mt-10">
          <ul className="space-y-2.5">
            <Bullet>Agents operate as controlled microservices with defined business logic.</Bullet>
            <Bullet>AI controls decision flow, but within strict execution boundaries.</Bullet>
            <Bullet>Multi-step workflows include validation layers, retry logic, and approval checkpoints.</Bullet>
          </ul>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {agentModes.map((mode, i) => (
            <motion.div key={mode.label} {...cardAnim(i)} className="border border-border p-8">
              <Bot className="mb-4 h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="font-mono text-sm font-medium tracking-wide text-foreground">{mode.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mode.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          {...sectionAnim}
          className="mt-8 font-mono text-sm font-medium text-primary"
        >
          Agents are powerful, but always governed.
        </motion.p>
      </Section>

      {/* 8. Integration Security */}
      <Section>
        <motion.div {...sectionAnim}>
          <SectionLabel label="Integrations" />
          <SectionTitle>Secure Integration with Your Ecosystem</SectionTitle>
        </motion.div>
        <motion.ul {...sectionAnim} className="mt-10 space-y-3">
          <Bullet>API-first architecture with authentication layers.</Bullet>
          <Bullet>Secure connectors to internal systems (data warehouses, OMS, risk systems).</Bullet>
          <Bullet>No replication required. Works directly with your existing data.</Bullet>
        </motion.ul>
      </Section>

      {/* 9. Operational Security */}
      <Section>
        <motion.div {...sectionAnim}>
          <SectionLabel label="Operations" />
          <SectionTitle>Production-Grade AI Operations</SectionTitle>
        </motion.div>
        <motion.ul {...sectionAnim} className="mt-10 space-y-3">
          <Bullet>Real-time monitoring of system performance and usage.</Bullet>
          <Bullet>Alerting for anomalies or failures.</Bullet>
          <Bullet>Full observability across pipelines, models, and agents.</Bullet>
        </motion.ul>
      </Section>

      {/* 10. Positioning Block */}
      <Section>
        <motion.div {...sectionAnim} className="text-center">
          <SectionTitle>Built for Institutions, Not Experiments</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
            APEX:E3 is designed for firms where security, compliance, and control are not optional.
            From infrastructure to application layer, every component is engineered to meet the standards
            of modern financial institutions.
          </p>
        </motion.div>
      </Section>

      {/* Comparison Table */}
      <Section>
        <motion.div {...sectionAnim}>
          <SectionLabel label="Comparison" />
          <SectionTitle>How APEX:E3 Compares</SectionTitle>
        </motion.div>
        <motion.div {...sectionAnim} className="mt-12 overflow-hidden border border-border">
          <Table>
            <TableHeader>
              <TableRow className="border-border bg-muted/30">
                <TableHead className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Feature</TableHead>
                <TableHead className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Typical AI Tools</TableHead>
                <TableHead className="font-mono text-xs uppercase tracking-wider text-muted-foreground">APEX:E3</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonRows.map((row) => (
                <TableRow key={row.feature} className="border-border">
                  <TableCell className="font-mono text-sm text-foreground">{row.feature}</TableCell>
                  <TableCell>
                    {typeof row.typical === "boolean" ? (
                      row.typical ? (
                        <span className="flex items-center gap-2 text-destructive">
                          <X className="h-4 w-4" strokeWidth={2} /> Yes
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 text-primary">
                          <Check className="h-4 w-4" strokeWidth={2} /> No
                        </span>
                      )
                    ) : (
                      <span className="font-mono text-sm text-muted-foreground">{row.typical}</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {typeof row.apex === "boolean" ? (
                      !row.apex ? (
                        <span className="flex items-center gap-2 text-primary">
                          <Check className="h-4 w-4" strokeWidth={2} /> No
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 text-destructive">
                          <X className="h-4 w-4" strokeWidth={2} /> Yes
                        </span>
                      )
                    ) : (
                      <span className="font-mono text-sm font-medium text-primary">{row.apex}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </Section>
    </div>
  );
};

export default SecurityTab;

import { motion } from "framer-motion";
import { Shield, Server, Users, FileSearch, Lock, Eye, Activity, KeyRound } from "lucide-react";
import HeroSection from "./HeroSection";

const pillars = [
  {
    icon: Shield,
    title: "Private by Default",
    desc: "All data remains within your environment. No external training, no data leakage, no shared model exposure.",
  },
  {
    icon: Server,
    title: "Deployment Control",
    desc: "Deploy within your VPC, on-prem, or private cloud. Your infrastructure, your policies, your governance.",
  },
  {
    icon: Users,
    title: "Access & Permissions",
    desc: "Granular role-based access across users, data, and workflows. Full control over who can see, query, and execute.",
  },
  {
    icon: FileSearch,
    title: "Auditability & Explainability",
    desc: "Every output is traceable. Full logs, citations, and decision paths for compliance and review.",
  },
];

const capabilities = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "All data in transit and at rest is encrypted using industry-standard protocols.",
  },
  {
    icon: Eye,
    title: "Zero Data Exposure",
    desc: "Your data never leaves your environment. No third-party model training on your inputs.",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    desc: "Continuous monitoring of access patterns, anomalies, and system health across all deployments.",
  },
  {
    icon: KeyRound,
    title: "Identity & Key Management",
    desc: "Enterprise SSO, API key rotation, and fine-grained token scoping for every integration point.",
  },
];

const SecurityTab = () => {
  return (
    <div>
      <HeroSection
        accentLine="Security & Compliance"
        headline={
          <>
            Built for Regulated
            <br />
            Financial Institutions
          </>
        }
        subtitle="Full control over data, models, and deployment: private by default, auditable by design."
        tesseractVariant="security"
      />

      {/* Core Pillars */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center"
          >
            <h2 className="font-mono text-2xl font-light tracking-tightest text-foreground md:text-3xl">
              Security & Control by Design
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
              Every layer of the platform is engineered for data sovereignty, compliance, and institutional trust.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col bg-background p-8"
              >
                <item.icon className="mb-4 h-5 w-5 text-primary" strokeWidth={1.5} />
                <h3 className="font-mono text-sm font-medium tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Capabilities */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Capabilities</p>
            <h2 className="mt-4 font-mono text-2xl font-light tracking-tightest text-foreground md:text-3xl">
              Enterprise-Grade Protection
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {capabilities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-border p-8"
              >
                <item.icon className="mb-4 h-5 w-5 text-primary" strokeWidth={1.5} />
                <h3 className="font-mono text-sm font-medium tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 text-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Compliance</p>
            <h2 className="mt-4 font-mono text-2xl font-light tracking-tightest text-foreground md:text-3xl">
              Designed for Regulatory Standards
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
              Our platform supports compliance with MiFID II, GDPR, SOC 2, and other regulatory frameworks. Every decision is logged, every output is traceable, and every deployment is under your control.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityTab;

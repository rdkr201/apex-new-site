import { motion } from "framer-motion";
import { Shield, Server, Users, FileSearch, ArrowRight } from "lucide-react";
import { type TabId } from "./TabNavigation";

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

const SecuritySection = () => {
  return (
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
            Built for regulated financial institutions: with full control over data, models, and deployment.
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
  );
};

export default SecuritySection;

import { motion } from "framer-motion";

const specs = [
  {
    label: "Cloud Agnostic",
    desc: "Deploy on AWS, GCP, Azure, or private cloud. No vendor lock-in.",
  },
  {
    label: "VPC Deployment",
    desc: "Runs within your virtual private cloud. Your network, your rules.",
  },
  {
    label: "Kubernetes",
    desc: "Container orchestration with auto-scaling. Production-grade from day one.",
  },
  {
    label: "Docker Microservices",
    desc: "Modular architecture. Each service independently deployable and scalable.",
  },
  {
    label: "Days to Deploy",
    desc: "Full platform operational within days, not months. Minimal integration overhead.",
  },
  {
    label: "Real-Time + Historical",
    desc: "Unified data layer handling live streams and decades of historical data.",
  },
];

const InfrastructureTab = () => {
  return (
    <div className="mx-auto min-h-[calc(100vh-3.5rem)] max-w-5xl px-6 pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-mono text-lg font-light tracking-tightest text-foreground">
          Infrastructure
        </h2>
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          Built for institutions. Deployed in days.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
        {specs.map((spec, i) => (
          <motion.div
            key={spec.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-background p-6"
          >
            <div className="font-mono text-xs font-medium tracking-wide text-primary">
              {spec.label}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {spec.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureTab;

import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ArchitectureDiagram from "./ArchitectureDiagram";
import AIStackDiagram from "./AIStackDiagram";

const specs = [
  { label: "Cloud Agnostic", desc: "Deploy on AWS, GCP, Azure, or private cloud. No vendor lock-in." },
  { label: "VPC Deployment", desc: "Runs within your virtual private cloud. Your network, your rules." },
  { label: "Kubernetes", desc: "Container orchestration with auto-scaling. Production-grade from day one." },
  { label: "Docker Microservices", desc: "Modular architecture. Each service independently deployable and scalable." },
  { label: "Days to Deploy", desc: "Full platform operational within days, not months. Minimal integration overhead." },
  { label: "Real-Time + Historical", desc: "Unified data layer handling live streams and decades of historical data." },
];

const InfrastructureTab = () => {
  return (
    <div>
      <HeroSection
        accentLine="Infrastructure"
        headline={<>Ingest everything.<br />Query anything.</>}
        subtitle="Big Data Architecture as a Service. From unstructured noise to research-grade intelligence."
        tesseractVariant="infrastructure"
      />

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* AI Stack Diagram */}
          <AIStackDiagram />

          {/* Architecture Diagram */}
          <ArchitectureDiagram />

          {/* Deployment Specs */}
          <div className="border-t border-border py-20">
            <div className="mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
                Deployment
              </p>
              <p className="font-mono text-sm text-muted-foreground max-w-xl">
                Deployed in days. Runs in your environment. Scales with your ambition.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-lg border border-border bg-card/30 p-6 transition-colors hover:border-primary/20 hover:bg-card/60"
                >
                  <div className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
                    {spec.label}
                  </div>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                    {spec.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureTab;

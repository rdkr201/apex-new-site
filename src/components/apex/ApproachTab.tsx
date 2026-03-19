import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

const ApproachTab = () => {
  return (
    <div>
      <HeroSection
        accentLine="Approach"
        headline="The Last Mile"
        subtitle="Where raw AI capability meets actual alpha generation."
      />

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-2xl space-y-8 py-16"
          >
            <p className="text-sm leading-[1.8] text-muted-foreground">
              Most AI platforms stop at the model layer. They deliver capabilities
              in isolation — a language model here, a data pipeline there — and
              leave integration as an exercise for the client. The result is
              tooling that never reaches the desk.
            </p>

            <p className="text-sm leading-[1.8] text-muted-foreground">
              APEX:E3 is built around the last mile: the space between raw AI
              capability and actual alpha generation. Every component — from data
              ingestion to agent orchestration — is designed to integrate directly
              into existing buy-side workflows, not replace them.
            </p>

            <p className="text-sm leading-[1.8] text-muted-foreground">
              We deploy within your infrastructure, adapt to your data
              architecture, and align with your investment process. The platform
              becomes invisible. The outcomes do not.
            </p>

            <p className="text-sm leading-[1.8] text-muted-foreground">
              This is not a product demo. It is not a proof of concept.
              It is operational infrastructure for firms that measure
              success in basis points.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border-t border-border py-12"
          >
            <p className="font-mono text-sm text-muted-foreground">
              Not another AI tool.{" "}
              <span className="text-primary">Infrastructure for alpha.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ApproachTab;

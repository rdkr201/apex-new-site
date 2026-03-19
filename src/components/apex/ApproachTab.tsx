import { motion } from "framer-motion";

const ApproachTab = () => {
  return (
    <div className="mx-auto min-h-[calc(100vh-3.5rem)] max-w-3xl px-6 pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-mono text-lg font-light tracking-tightest text-foreground">
          Approach
        </h2>
        <p className="mt-2 font-mono text-xs text-primary">
          The Last Mile
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-12 space-y-8"
      >
        <p className="text-sm leading-relaxed text-muted-foreground">
          Most AI platforms stop at the model layer. They deliver capabilities
          in isolation — a language model here, a data pipeline there — and
          leave integration as an exercise for the client. The result is
          tooling that never reaches the desk.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          APEX:E3 is built around the last mile: the space between raw AI
          capability and actual alpha generation. Every component — from data
          ingestion to agent orchestration — is designed to integrate directly
          into existing buy-side workflows, not replace them.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          We deploy within your infrastructure, adapt to your data
          architecture, and align with your investment process. The platform
          becomes invisible. The outcomes do not.
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground">
          This is not a product demo. It is not a proof of concept.
          It is operational infrastructure for firms that measure
          success in basis points.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-20 border-t border-border pt-8"
      >
        <p className="font-mono text-xs text-muted-foreground">
          Not another AI tool.{" "}
          <span className="text-primary">Infrastructure for alpha.</span>
        </p>
      </motion.div>
    </div>
  );
};

export default ApproachTab;

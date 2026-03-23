import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import HeroSection from "./HeroSection";

interface CompanyTabProps {
  scrollToSection?: string;
}

const teamMembers = [
  { name: "Leadership Team", role: "Deep expertise across quantitative finance, AI research, and enterprise infrastructure." },
  { name: "Engineering", role: "Systems engineers from high-frequency trading, cloud-native platforms, and ML infrastructure." },
  { name: "Research", role: "PhD-level researchers in NLP, reinforcement learning, and financial signal processing." },
];

const CompanyTab = ({ scrollToSection }: CompanyTabProps) => {
  const teamRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollToSection) return;
    const ref =
      scrollToSection === "team" ? teamRef :
      scrollToSection === "mission" ? missionRef :
      scrollToSection === "approach" ? approachRef : null;

    if (ref?.current) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [scrollToSection]);

  return (
    <div>
      <HeroSection
        accentLine="Company"
        headline="Built for Markets"
        subtitle="A team of practitioners building infrastructure where AI meets alpha."
      />

      {/* Team Section */}
      <div ref={teamRef} className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
              Team
            </p>
            <h3 className="mt-4 font-mono text-3xl font-light tracking-tightest text-foreground md:text-4xl">
              Domain-Native Builders
            </h3>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="rounded-lg border border-border bg-secondary/20 p-6"
                >
                  <h4 className="font-mono text-sm font-medium tracking-wide text-foreground">
                    {member.name}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div ref={missionRef} className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
              Mission
            </p>
            <h3 className="mt-4 font-mono text-3xl font-light tracking-tightest text-foreground md:text-4xl">
              Institutional AI, Delivered
            </h3>
            <div className="mt-8 space-y-6">
              <p className="text-sm leading-[1.8] text-muted-foreground">
                Our mission is to close the gap between AI capability and
                investment outcome. We build infrastructure that institutional
                investors can deploy, trust, and measure. Not demos, not
                prototypes, but production systems.
              </p>
              <p className="text-sm leading-[1.8] text-muted-foreground">
                Every component is designed for the realities of regulated capital
                markets: data sovereignty, auditability, latency constraints, and
                integration with existing workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Approach Section */}
      <div ref={approachRef} className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
              Approach
            </p>
            <h3 className="mt-4 font-mono text-3xl font-light tracking-tightest text-foreground md:text-4xl">
              The Last Mile
            </h3>
            <div className="mt-8 space-y-6">
              <p className="text-sm leading-[1.8] text-muted-foreground">
                Most AI platforms stop at the model layer. They deliver
                capabilities in isolation — a language model here, a data pipeline
                there — and leave integration as an exercise for the client. The
                result is tooling that never reaches the desk.
              </p>
              <p className="text-sm leading-[1.8] text-muted-foreground">
                APEX:E3 is built around the last mile: the space between raw AI
                capability and actual alpha generation. Every component — from
                data ingestion to agent orchestration — is designed to integrate
                directly into existing buy-side workflows, not replace them.
              </p>
              <p className="text-sm leading-[1.8] text-muted-foreground">
                We deploy within your infrastructure, adapt to your data
                architecture, and align with your investment process. The platform
                becomes invisible. The outcomes do not.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 border-t border-border pt-12"
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

export default CompanyTab;

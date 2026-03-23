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
  const aboutRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const newsroomRef = useRef<HTMLDivElement>(null);
  const careersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollToSection) return;
    const ref =
      scrollToSection === "about" ? aboutRef :
      scrollToSection === "blog" ? blogRef :
      scrollToSection === "newsroom" ? newsroomRef :
      scrollToSection === "careers" ? careersRef : null;

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

      {/* About Section */}
      <div ref={aboutRef} className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
              About
            </p>
            <h3 className="mt-4 font-mono text-3xl font-light tracking-tightest text-foreground md:text-4xl">
              Domain-Native Builders
            </h3>
            <div className="mt-8 space-y-6 max-w-2xl">
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

      {/* Blog Section */}
      <div ref={blogRef} className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
              Blog
            </p>
            <h3 className="mt-4 font-mono text-3xl font-light tracking-tightest text-foreground md:text-4xl">
              Insights & Research
            </h3>
            <div className="mt-8 space-y-6">
              <p className="text-sm leading-[1.8] text-muted-foreground">
                Perspectives on agentic AI, quantitative research, and the future of institutional investment infrastructure. Coming soon.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsroom Section */}
      <div ref={newsroomRef} className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
              Newsroom
            </p>
            <h3 className="mt-4 font-mono text-3xl font-light tracking-tightest text-foreground md:text-4xl">
              Press & Announcements
            </h3>
            <div className="mt-8 space-y-6">
              <p className="text-sm leading-[1.8] text-muted-foreground">
                The latest updates on product launches, partnerships, and company milestones. Coming soon.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Careers Section */}
      <div ref={careersRef} className="scroll-mt-20 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
              Careers
            </p>
            <h3 className="mt-4 font-mono text-3xl font-light tracking-tightest text-foreground md:text-4xl">
              Join the Team
            </h3>
            <div className="mt-8 space-y-6">
              <p className="text-sm leading-[1.8] text-muted-foreground">
                We're building the future of institutional AI. If you thrive at the intersection of finance, engineering, and research, we'd like to hear from you.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 border-t border-border pt-12"
            >
              <p className="font-mono text-sm text-muted-foreground">
                Interested?{" "}
                <a href="mailto:contact@apexe3.com" className="text-primary hover:underline">
                  Get in touch
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTab;

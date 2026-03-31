import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import TesseractAnimation from "./TesseractAnimation";
import HeroSection from "./HeroSection";
import TransformationAnimation from "./TransformationAnimation";
import SovereigntySection from "./SovereigntySection";
import AliceHubDiagram from "./AliceHubDiagram";
import { type TabId } from "./TabNavigation";

import claudeLogo from "@/assets/partners-awards/claude.png";
import corprimeLogo from "@/assets/partners-awards/corprime.png";
import deusxLogo from "@/assets/partners-awards/deusx.png";
import dwsLogo from "@/assets/partners-awards/dws.png";
import geminiLogo from "@/assets/partners-awards/gemini.png";
import googleCloudLogo from "@/assets/partners-awards/google-cloud.png";
import grokLogo from "@/assets/partners-awards/grok.png";
import llamaMetaLogo from "@/assets/partners-awards/llama-meta.png";
import mistralLogo from "@/assets/partners-awards/mistral-ai.png";
import nvidiaLogo from "@/assets/partners-awards/nvidia.png";
import openaiLogo from "@/assets/partners-awards/openai.png";
import oxfordLogo from "@/assets/partners-awards/oxford.png";
import solsticeLogo from "@/assets/partners-awards/solstice-labs.png";
import vanguardLogo from "@/assets/partners-awards/vanguard.png";

const partnerLogos = [
  { src: oxfordLogo, alt: "University of Oxford" },
  { src: dwsLogo, alt: "DWS" },
  { src: vanguardLogo, alt: "Vanguard" },
  { src: nvidiaLogo, alt: "NVIDIA" },
  { src: corprimeLogo, alt: "CorPrime" },
  { src: deusxLogo, alt: "Deus X" },
  { src: solsticeLogo, alt: "Solstice Labs" },
  { src: googleCloudLogo, alt: "Google Cloud" },
  { src: openaiLogo, alt: "OpenAI" },
  { src: claudeLogo, alt: "Claude" },
  { src: geminiLogo, alt: "Gemini" },
  { src: grokLogo, alt: "Grok" },
  { src: llamaMetaLogo, alt: "Llama Meta" },
  { src: mistralLogo, alt: "Mistral AI" },
];

const services: { label: string; title: string; desc: string; tab: TabId }[] = [
  {
    label: "01",
    title: "Solutions",
    desc: "End-to-end automation across research, signal generation, and trade execution.",
    tab: "Solutions",
  },
  {
    label: "02",
    title: "Infrastructure",
    desc: "Cloud agnostic. VPC deployment. Kubernetes + Docker microservices. Days to deploy.",
    tab: "Infrastructure",
  },
  {
    label: "03",
    title: "Insights",
    desc: "Ingest structured and unstructured data. Real-time and historical. Query anything.",
    tab: "Infrastructure",
  },
  {
    label: "04",
    title: "Company",
    desc: "Award-winning team building the future of agentic AI for capital markets.",
    tab: "Company",
  },
];

const rotatingWords = ["Portfolio Managers", "Traders", "Quants", "Researchers", "Developers"];

interface OverviewTabProps {
  onTabChange?: (tab: TabId) => void;
}

const OverviewTab = ({ onTabChange }: OverviewTabProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");
  const [showContent, setShowContent] = useState(false);
  const firstComplete = useRef(false);

  useEffect(() => {
    const word = rotatingWords[wordIndex];

    if (phase === "typing") {
      if (charIndex < word.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), 70);
        return () => clearTimeout(t);
      } else {
        if (!firstComplete.current) {
          firstComplete.current = true;
          setShowContent(true);
        }
        setPhase("pausing");
      }
    } else if (phase === "pausing") {
      const t = setTimeout(() => setPhase("erasing"), 1800);
      return () => clearTimeout(t);
    } else if (phase === "erasing") {
      if (charIndex > 0) {
        const t = setTimeout(() => setCharIndex((c) => c - 1), 50);
        return () => clearTimeout(t);
      } else {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setPhase("typing");
      }
    }
  }, [charIndex, phase, wordIndex]);

  const dynamicText = rotatingWords[wordIndex].slice(0, charIndex);

  return (
    <div>
      {/* Hero — matches Solutions layout but keeps tesseract */}
      <div className="relative flex min-h-[55vh] items-end overflow-hidden pb-20">
        <TesseractAnimation />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <p className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-primary">
                ALICE — The Award-Winning Agent for Capital Markets
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.15em] text-muted-foreground/60">
                Powered by APEX:E3
              </p>
            </div>

            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
              ALICE
            </p>

            <h1 className="mt-4 font-mono text-4xl font-light leading-[1.15] tracking-tightest text-foreground md:text-5xl lg:text-6xl">
              <span className="text-primary">ALICE</span>
              {" for"}
              <br />
              {dynamicText}
              <span className="animate-pulse text-primary">_</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground"
            >
              Domain-native. Institutionally deployed. Outcome-driven.
            </motion.p>

            <motion.a
              href="mailto:contact@apexe3.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Get in Touch
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Awards & Trusted By Section */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <p className="mb-8 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40">
              Partners & Awards
            </p>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
              <div className="flex animate-marquee items-center gap-16">
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <img
                    key={`${logo.alt}-${i}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 w-auto flex-shrink-0 object-contain opacity-60 brightness-0 invert transition-opacity duration-300 hover:opacity-100"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="font-mono text-sm leading-relaxed tracking-wide text-muted-foreground">
              ALICE is trusted by asset managers, family offices and hedge funds managing{" "}
              <span className="font-medium text-primary">$12T AUM</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Transformation Animation */}
      <TransformationAnimation />

      {/* AI Sovereignty */}
      <SovereigntySection />

      {/* ALICE Hub Diagram */}
      {onTabChange && <AliceHubDiagram onTabChange={onTabChange} />}

      {/* Service Cards — matches Solutions tab card style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="border-t border-border"
      >
        <div className="mx-auto max-w-[1400px] divide-y divide-border">
          {services.map((service, i) => (
            <motion.button
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
              onClick={() => {
                onTabChange?.(service.tab);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex w-full items-center justify-between px-6 py-8 text-left transition-colors hover:bg-secondary/30 lg:px-10 cursor-pointer"
            >
              <div className="flex items-start gap-8">
                <span className="font-mono text-xs text-muted-foreground/50">
                  {service.label}
                </span>
                <div>
                  <h3 className="font-mono text-sm font-medium tracking-wide text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground/30 transition-colors group-hover:text-primary" />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OverviewTab;

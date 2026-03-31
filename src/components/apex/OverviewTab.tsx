import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import TesseractAnimation from "./TesseractAnimation";
import TransformationAnimation from "./TransformationAnimation";
import SovereigntySection from "./SovereigntySection";
import SecuritySection from "./SecuritySection";
import AliceHubDiagram from "./AliceHubDiagram";
import { type TabId } from "./TabNavigation";
const rotatingWords = ["Portfolio Managers", "Traders", "Quants", "Researchers", "Developers"];

interface OverviewTabProps {
  onTabChange?: (tab: TabId) => void;
  isHome?: boolean;
}

const OverviewTab = ({ onTabChange, isHome }: OverviewTabProps) => {
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
            {isHome ? (
              <>
                <p className="font-mono text-5xl font-light uppercase tracking-[0.2em] text-primary md:text-6xl">
                  ALICE
                </p>
                <h1 className="mt-4 font-mono text-4xl font-light leading-[1.15] tracking-tightest text-foreground md:text-5xl lg:text-6xl">
                  The Award-Winning Agent
                  <br />
                  for Capital Markets
                </h1>
                <p className="mt-6 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground">
                  Powered by APEX:E3
                </p>
                <button
                  onClick={() => onTabChange?.("ALICE")}
                  className="mt-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-6 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-primary transition-colors hover:bg-primary/20"
                >
                  Explore
                </button>
              </>
            ) : (
              <>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
                  ALICE
                </p>
                <h1 className="mt-4 font-mono text-4xl font-light leading-[1.15] tracking-tightest text-foreground md:text-5xl lg:text-6xl">
                  The AI Agent for
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
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showContent ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-6"
                >
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    The Award-Winning Agent for Capital Markets
                  </p>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.15em] text-muted-foreground/60">
                    Powered by APEX:E3
                  </p>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground/60">
                    Explore Solutions for
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { label: "Portfolio Management", id: "portfolio-management" },
                      { label: "Traders", id: "traders" },
                      { label: "Quants", id: "quants" },
                      { label: "Researchers", id: "researchers" },
                      { label: "Developers", id: "developers" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => onTabChange?.("Solutions")}
                        className="rounded-full border border-primary/30 bg-primary/5 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-primary transition-colors hover:bg-primary/20"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </>
            )}

          </motion.div>
        </div>
      </div>

      {/* Transformation Animation — ALICE tab only */}
      {!isHome && <TransformationAnimation />}

      {/* Core Pillars — Home only */}
      {isHome && <SovereigntySection onTabChange={onTabChange} />}

      {/* Security Section — Home only */}
      {isHome && <SecuritySection />}

      {/* ALICE Hub Diagram — ALICE tab only */}
      {!isHome && onTabChange && <AliceHubDiagram onTabChange={onTabChange} />}

    </div>
  );
};

export default OverviewTab;

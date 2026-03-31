import { motion } from "framer-motion";
import DotWaveField from "./DotWaveField";

interface HeroSectionProps {
  accentLine: string;
  headline: string;
  subtitle: string;
  preHeadline?: string;
  preSubline?: string;
}

const HeroSection = ({ accentLine, headline, subtitle, preHeadline, preSubline }: HeroSectionProps) => {
  return (
    <div className="relative flex min-h-[60vh] items-end overflow-hidden pb-20">
      <DotWaveField />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {preHeadline && (
            <div className="mb-6">
              <p className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {preHeadline}
              </p>
              {preSubline && (
                <p className="mt-1 font-mono text-[11px] tracking-[0.15em] text-muted-foreground/60">
                  {preSubline}
                </p>
              )}
            </div>
          )}
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
            {accentLine}
          </p>
          <h2 className="mt-4 font-mono text-4xl font-light leading-[1.15] tracking-tightest text-foreground md:text-6xl">
            {headline}
          </h2>
          <p className="mt-6 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const OverviewTab = () => {
  const headline = "Infrastructure for Alpha";
  const [displayedChars, setDisplayedChars] = useState(0);

  useEffect(() => {
    if (displayedChars < headline.length) {
      const timeout = setTimeout(() => setDisplayedChars((c) => c + 1), 45);
      return () => clearTimeout(timeout);
    }
  }, [displayedChars, headline.length]);

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h1 className="font-mono text-4xl font-light tracking-tightest text-foreground md:text-6xl">
          {headline.slice(0, displayedChars)}
          <span className="animate-pulse text-primary">_</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: displayedChars >= headline.length ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 font-mono text-sm tracking-wide text-muted-foreground"
        >
          Agentic AI for capital markets. Domain-native. Institutionally deployed. Outcome-driven.
        </motion.p>
      </motion.div>

      {/* Data visualization grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: displayedChars >= headline.length ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-20 grid grid-cols-12 gap-1.5"
      >
        {Array.from({ length: 48 }).map((_, i) => (
          <div
            key={i}
            className="h-1 w-1 rounded-full bg-primary/30"
            style={{
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OverviewTab;

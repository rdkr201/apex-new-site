import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const tabs = [
  "Overview",
  "Agentic Workflows",
  "Infrastructure",
  "Data & Intelligence",
  "AI Sovereignty",
  "Approach",
] as const;

export type TabId = (typeof tabs)[number];

interface TabNavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <div className="font-mono text-base font-medium tracking-tightest text-foreground">
          APEX<span className="text-primary">:</span>E3
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-200",
                activeTab === tab
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Contact CTA */}
        <a
          href="mailto:contact@apexe3.com"
          className="hidden items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary/50 hover:text-primary lg:flex"
        >
          Contact
          <ArrowRight className="h-3 w-3" />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  onTabChange(tab);
                  setMobileOpen(false);
                }}
                className={cn(
                  "text-left font-mono text-xs uppercase tracking-[0.15em] transition-colors",
                  activeTab === tab
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
              </button>
            ))}
            <a
              href="mailto:contact@apexe3.com"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground"
            >
              Contact <ArrowRight className="h-3 w-3" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default TabNavigation;

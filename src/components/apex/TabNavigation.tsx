import { cn } from "@/lib/utils";

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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="font-mono text-sm font-medium tracking-tightest text-foreground">
          APEX<span className="text-primary">:</span>E3
        </div>

        <nav className="hidden items-center gap-0.5 md:flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={cn(
                "relative px-3 py-1.5 font-mono text-xs tracking-wide transition-colors duration-200",
                activeTab === tab
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/70"
              )}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-3 right-3 h-px bg-primary" />
              )}
            </button>
          ))}
        </nav>

        <a
          href="mailto:contact@apexe3.com"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default TabNavigation;

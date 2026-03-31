import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useState, useRef } from "react";

const tabs = [
  "Solutions",
  "Infrastructure",
  "Data & Intelligence",
  "Company",
] as const;

export type TabId = (typeof tabs)[number] | "Overview";



export type SubSection = string;

interface DropdownItem {
  label: string;
  section?: string; // optional scroll target
}

const dropdowns: Partial<Record<TabId, DropdownItem[]>> = {
  Solutions: [
    { label: "Portfolio Managers" },
    { label: "Traders" },
    { label: "Quants" },
    { label: "Researchers" },
    { label: "Developers" },
  ],
  Infrastructure: [
    { label: "BDAaS" },
    { label: "Deployment" },
    { label: "Microservices" },
    { label: "Security" },
  ],
  "Data & Intelligence": [
    { label: "Data Ingestion" },
    { label: "Analytics" },
    { label: "NLP & Parsing" },
  ],
  Company: [
    { label: "About", section: "about" },
    { label: "Blog", section: "blog" },
    { label: "Newsroom", section: "newsroom" },
    { label: "Careers", section: "careers" },
  ],
};

interface TabNavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId, section?: string) => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const timeoutRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (tab: string) => {
    if (timeoutRef.current[tab]) clearTimeout(timeoutRef.current[tab]);
    setOpenDropdown(tab);
  };

  const handleMouseLeave = (tab: string) => {
    timeoutRef.current[tab] = setTimeout(() => {
      setOpenDropdown((prev) => (prev === tab ? null : prev));
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo — home button */}
        <button
          onClick={() => onTabChange("Overview")}
          className="font-mono text-base font-medium tracking-tightest text-foreground transition-colors hover:text-primary cursor-pointer"
        >
          APEX<span className="text-primary">:</span>E3
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {tabs.map((tab) => {
            const items = dropdowns[tab];
            return (
              <div
                key={tab}
                className="relative"
                onMouseEnter={() => items && handleMouseEnter(tab)}
                onMouseLeave={() => items && handleMouseLeave(tab)}
              >
                <button
                  onClick={() => onTabChange(tab)}
                  className={cn(
                    "flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-200",
                    activeTab === tab
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab}
                  {items && (
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform duration-200",
                        openDropdown === tab && "rotate-180"
                      )}
                    />
                  )}
                </button>

                {/* Dropdown */}
                {items && openDropdown === tab && (
                  <div className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 animate-fade-in">
                    <div className="rounded-lg border border-border bg-background/95 px-1 py-2 shadow-xl backdrop-blur-lg">
                      {items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => {
                            onTabChange(tab, item.section);
                            setOpenDropdown(null);
                          }}
                          className="flex w-full items-center gap-3 whitespace-nowrap rounded-md px-4 py-2.5 text-left font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
          <nav className="flex flex-col gap-1">
            {tabs.map((tab) => {
              const items = dropdowns[tab];
              const isExpanded = expandedMobile === tab;
              return (
                <div key={tab}>
                  <button
                    onClick={() => {
                      if (items) {
                        setExpandedMobile(isExpanded ? null : tab);
                      } else {
                        onTabChange(tab);
                        setMobileOpen(false);
                      }
                    }}
                    className={cn(
                      "flex w-full items-center justify-between py-2.5 text-left font-mono text-xs uppercase tracking-[0.15em] transition-colors",
                      activeTab === tab
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {tab}
                    {items && (
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 transition-transform duration-200",
                          isExpanded && "rotate-180"
                        )}
                      />
                    )}
                  </button>
                  {items && isExpanded && (
                    <div className="mb-2 ml-4 flex flex-col gap-1 border-l border-border pl-4">
                      {items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => {
                            onTabChange(tab, item.section);
                            setMobileOpen(false);
                          }}
                          className="py-2 text-left font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <a
              href="mailto:contact@apexe3.com"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground"
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

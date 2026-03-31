import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TabNavigation, { type TabId } from "@/components/apex/TabNavigation";
import OverviewTab from "@/components/apex/OverviewTab";
import WorkflowsTab from "@/components/apex/WorkflowsTab";
import InfrastructureTab from "@/components/apex/InfrastructureTab";
import DataTab from "@/components/apex/DataTab";

import CompanyTab from "@/components/apex/CompanyTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("Overview");
  const [scrollSection, setScrollSection] = useState<string | undefined>();

  const handleTabChange = (tab: TabId, section?: string) => {
    setActiveTab(tab);
    setScrollSection(section);
  };

  return (
    <div className="min-h-screen">
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "Overview" && <OverviewTab onTabChange={handleTabChange} />}
            {activeTab === "Solutions" && <WorkflowsTab />}
            {activeTab === "Infrastructure" && <InfrastructureTab />}
            {activeTab === "Data & Intelligence" && <DataTab />}
            
            {activeTab === "Company" && <CompanyTab scrollToSection={scrollSection} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between lg:px-10">
          <div>
            <div className="font-mono text-base font-medium tracking-tightest text-foreground">
              APEX<span className="text-primary">:</span>E3
            </div>
            <p className="mt-3 max-w-xs font-mono text-xs leading-relaxed text-muted-foreground">
              Agentic AI infrastructure for capital markets.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                Platform
              </h4>
              <div className="mt-4 flex flex-col gap-2.5">
                {["Solutions", "Infrastructure", "Data & Intelligence"].map(
                  (link) => (
                    <button
                      key={link}
                      onClick={() => handleTabChange(link as TabId)}
                      className="text-left font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                Company
              </h4>
              <div className="mt-4 flex flex-col gap-2.5">
                {[
                  { label: "About", section: "about" },
                  { label: "Blog", section: "blog" },
                  { label: "Newsroom", section: "newsroom" },
                  { label: "Careers", section: "careers" },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleTabChange("Company", item.section)}
                    className="text-left font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="mailto:contact@apexe3.com"
                  className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-6 lg:px-10">
            <p className="font-mono text-[10px] text-muted-foreground/40">
              © {new Date().getFullYear()} APEX:E3. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

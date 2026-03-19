import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TabNavigation, { type TabId } from "@/components/apex/TabNavigation";
import OverviewTab from "@/components/apex/OverviewTab";
import WorkflowsTab from "@/components/apex/WorkflowsTab";
import InfrastructureTab from "@/components/apex/InfrastructureTab";
import DataTab from "@/components/apex/DataTab";
import SovereigntyTab from "@/components/apex/SovereigntyTab";
import ApproachTab from "@/components/apex/ApproachTab";

const tabComponents: Record<TabId, React.FC> = {
  Overview: OverviewTab,
  "Agentic Workflows": WorkflowsTab,
  Infrastructure: InfrastructureTab,
  "Data & Intelligence": DataTab,
  "AI Sovereignty": SovereigntyTab,
  Approach: ApproachTab,
};

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("Overview");

  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-border py-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} APEX:E3. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;

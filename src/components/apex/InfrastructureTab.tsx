import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ArchitectureDiagram from "./ArchitectureDiagram";
import AIStackDiagram from "./AIStackDiagram";


const InfrastructureTab = () => {
  return (
    <div>
      <HeroSection
        accentLine="Infrastructure"
        headline="Ingest everything. Query anything."
        subtitle="Big Data Architecture as a Service. From unstructured noise to research-grade intelligence."
      />

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Architecture Diagram */}
          <ArchitectureDiagram />

          {/* AI Stack Diagram */}
          <AIStackDiagram />
        </div>
      </div>
    </div>
  );
};

export default InfrastructureTab;

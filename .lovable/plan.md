

## Rebuild Security Tab with Full Content

Replace the current lightweight `SecurityTab.tsx` with a comprehensive security page containing all 10 sections plus the comparison table.

### File: `src/components/apex/SecurityTab.tsx` (full rewrite)

**Hero Section**
- Accent: "Security & Compliance"
- Headline: "AI Sovereignty. Built for Financial Institutions."
- Subtitle: "APEX:E3 delivers fully private, auditable, and secure AI infrastructure, deployed within your environment, governed by your rules."
- Support line below subtitle: "No data leakage. No shared models. No compromise on performance."
- Lock tesseract variant

**Section 1: AI Sovereignty**
- Title: "Full Control Across the AI Stack"
- 4 bullet-style items (enterprise agents on-prem, private pipeline, private vector DBs, zero exposure)
- Key line: "Your data, your models, your infrastructure. Fully sovereign."

**Section 2: Deployment & Infrastructure Security**
- Title: "Secure by Architecture"
- 4 blocks in 2x2 grid: Private Deployment Options, Containerised Infrastructure, Network & Environment Isolation, Compute Control
- Each block has 3 bullet points

**Section 3: Data Security & Privacy**
- Title: "End-to-End Data Protection"
- 4 blocks in 2x2 grid: Data Handling, Encryption, Data Isolation, No Model Training on Client Data

**Section 4: Model & AI Security**
- Title: "Controlled, Explainable AI Systems"
- 3 blocks in 3-col grid: Private Model Hosting, Model Governance, Guardrails & Validation

**Section 5: Auditability & Explainability**
- Title: "Every Output is Traceable"
- 3 blocks in 3-col grid: Full Audit Logs, Explainable Outputs, Compliance Ready

**Section 6: Access Control & Governance**
- Title: "Granular Control Across Users and Systems"
- 3 blocks: RBAC, Authentication, Operational Governance

**Section 7: Agent Security**
- Title: "Secure Agentic Workflows"
- Description text about agents as controlled microservices
- Agent Modes displayed as 3 items (Single-step, Multi-step, Autonomous)
- Key line: "Agents are powerful, but always governed."

**Section 8: Integration Security**
- Title: "Secure Integration with Your Ecosystem"
- 3 bullet points in a simple block

**Section 9: Operational Security & Monitoring**
- Title: "Production-Grade AI Operations"
- 3 bullet points

**Section 10: Positioning Block**
- Title: "Built for Institutions, Not Experiments"
- Closing paragraph

**Comparison Table**
- 5-column table: Feature, Typical AI Tools, APEX:E3
- Rows: Data leaves environment, Shared models, Auditability, Deployment control, Agent governance
- Styled with check/cross indicators, using existing Table components

### Technical Details
- Uses `HeroSection`, `motion` from framer-motion, lucide icons
- Each section follows the existing border-t pattern with `max-w-[1400px]` container
- Bullet items use a small `Check` icon from lucide for visual consistency
- Comparison table uses the existing `Table` UI components with custom styling
- All text follows the no-em-dash punctuation rule (periods, commas, colons only)


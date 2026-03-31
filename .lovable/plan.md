

## Bespoke Workflows Tab — New Dedicated Content

Currently, "Custom Workflows" renders the same `WorkflowsTab` component (the Solutions/persona-based content). We need a new dedicated component for Bespoke Workflows with three sections.

### New File: `src/components/apex/BespokeWorkflowsTab.tsx`

**1. Hero Section** — Reuse existing `HeroSection` component with:
- Accent: "Bespoke Workflows"
- Headline: "Custom AI Workflows"
- Subtitle: "We work directly with your team to design and deploy AI workflows tailored to your internal processes — integrating with your data, systems, and decision-making frameworks."
- Tesseract variant: "solutions" (or similar)

**2. Use Cases Grid** — 6 cards in a 2x3 or 3x2 grid, each with a title and description:
- Research & Document Workflows
- Data Extraction & Integration
- Portfolio & Risk Workflows
- Compliance & Audit Workflows
- Internal Data Access (Natural Language → SQL)
- Agentic Task Automation

Cards styled consistently with existing site (border, bg-secondary/20, mono font).

**3. How We Work** — 3-step horizontal process strip:
- 01. Identify
- 02. Build
- 03. Deploy & Iterate

Each step has a number, title, and short description. Laid out as 3 columns on desktop.

### Update: `src/pages/Index.tsx`

- Import `BespokeWorkflowsTab`
- Change the `"Custom Workflows"` render line to use `<BespokeWorkflowsTab />` instead of `<WorkflowsTab />`

### Technical Details
- Reuses `HeroSection`, `motion` from framer-motion for entry animations
- Follows existing font-mono, text-foreground/muted-foreground styling conventions
- No new dependencies


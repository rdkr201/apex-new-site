

## Plan: Redesign Agentic Workflows as Role-Based ALICE Showcase

### What changes

**1. Update dropdown items in TabNavigation.tsx**
Replace the current "Agentic Workflows" dropdown entries with the five role-based sections, each with a `section` property for scroll targeting:
- Research (Analysts & Investment Research Teams)
- Multi-Asset (Portfolio Managers & Strategists)
- Equities (Equity Analysts & PMs)
- Quant (Quantitative Researchers & Systematic Teams)
- Credit (Fixed Income, Credit Analysts & Traders)

**2. Rewrite WorkflowsTab.tsx completely**
Replace the current simple step-flow layout with rich, structured sections for each role. Each section will follow the consistent structure from the provided content:
- **Section header** — role title + audience subtitle
- **"How ALICE works"** — brief intro paragraph
- **Key capabilities** — bullet list of 5 capabilities
- **Example queries/workflows** (where provided) — styled as code/query blocks
- **Outcome** — highlighted business value statement

Each section gets an `id` attribute (e.g., `id="research"`) so dropdown clicks scroll to that section.

**3. Add scroll-to-section support in WorkflowsTab**
Accept `scrollToSection` prop (like CompanyTab does), use `useEffect` to scroll to the target section when it changes. Update `Index.tsx` to pass `scrollToSection` to WorkflowsTab.

### Design approach
- Maintain the existing dark, mono-spaced, minimal aesthetic
- Each role section separated by border dividers
- Capabilities as clean bullet lists with subtle primary-colored markers
- Example queries in monospace code-style blocks
- Outcome in a highlighted card/callout with left border accent
- Hero section updated: headline → "ALICE — Role-Adaptive Intelligence", subtitle reflecting the positioning

### Files to edit
- `src/components/apex/TabNavigation.tsx` — update dropdown items
- `src/components/apex/WorkflowsTab.tsx` — full rewrite with rich content sections
- `src/pages/Index.tsx` — pass `scrollToSection` prop to WorkflowsTab


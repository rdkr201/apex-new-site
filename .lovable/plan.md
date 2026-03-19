

# APEX:E3 — Institutional AI Platform Website

## Design System
- **Palette**: Near-black background (#0A0A0A), off-white text, subtle gray accents, single accent color (muted blue-green for data elements)
- **Typography**: Monospace for labels/data, clean sans-serif (Inter) for body, tight letter-spacing throughout
- **Grid**: Precise 12-column grid, generous whitespace, terminal-inspired alignment
- **Motion**: Subtle fade/slide transitions between tabs, minimal data-pulse animations on key visuals

## Layout Structure
- **Fixed top bar**: APEX:E3 logo (left), horizontal tab navigation (center), single understated "Contact" link (right)
- **Tab-based content area**: Each tab renders a full-viewport, self-contained view — no scrolling between sections
- **Footer**: Minimal — copyright, legal, contact only

## Tabs & Content

### 1. Overview
- Large monospaced headline: *"Infrastructure for Alpha"*
- One-line descriptor beneath
- Abstract data visualization (CSS grid of subtle pulsing dots or a minimal network graph)
- No CTA buttons — just presence

### 2. Agentic Workflows
- Three concrete workflow examples displayed as horizontal flow diagrams (research pipeline, signal generation, trade execution)
- Each step shown as a node with brief label — feels like a system diagram
- Minimal explanatory text per workflow

### 3. Infrastructure
- Grid layout showing deployment specs: Cloud Agnostic, VPC, Kubernetes, Docker, Days-to-Deploy
- Each as a card with icon and 1-2 line description
- Emphasis on institutional readiness vs startup tooling

### 4. Data & Intelligence
- Focus on BDAaS capabilities
- Visual: structured vs unstructured data transformation (simple before/after diagram)
- Key stats: real-time ingestion, historical depth, latency specs
- "Unstructured → Insight" as a core visual motif

### 5. AI Sovereignty
- On-premise deployment, full data control, compliance-ready
- Clean list/grid of privacy guarantees
- No marketing language — reads like a security spec sheet

### 6. Approach
- "Last Mile" philosophy explained in 3-4 tight paragraphs
- Focus on integration into existing workflows, outcome-driven design
- Closing statement that reinforces positioning

## Interactions
- Tab switches use a clean crossfade with slight vertical offset
- Active tab indicated by a thin underline accent
- Subtle monospaced "typing" animation on the Overview headline on first load
- Hover states are restrained — opacity shifts, no color explosions

## Pages & Components
- Single page app with tab state managed via React state (URL hash optional)
- Components: TabNavigation, OverviewTab, WorkflowsTab, InfrastructureTab, DataTab, SovereigntyTab, ApproachTab
- Reusable: DataCard, FlowDiagram, SectionHeading


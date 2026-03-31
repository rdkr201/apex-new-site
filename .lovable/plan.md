

## Create APIs, SDKs & Data Layer Tab

Currently "APIs & Data Layer" in the Solutions dropdown routes to the Infrastructure tab. We'll create a dedicated tab component mirroring the structure of `BespokeWorkflowsTab`.

### 1. New File: `src/components/apex/ApiDataLayerTab.tsx`

Structure (matching BespokeWorkflowsTab pattern):

- **Hero Section**: Accent "APIs, SDKs & Data Layer", headline "Build, integrate, and extend AI directly within your environment", subtitle from provided copy. Tesseract variant "infrastructure".

- **Core Capabilities Grid** (6 cards, 3x2): API Access, SDKs & Developer Tooling, MCP & Data Connectivity, Private Data Rooms, Natural Language to Systems, Agent Integration.

- **Use Cases Section** (4 cards, 2x2): Internal Platform Integration, Data Pipeline Augmentation, Custom Application Development, Secure Data Room Analysis.

- **Key Capabilities Strip**: 5 bullet items (private deployment, API-first, real-time + batch, secure access, scalable) in a horizontal row with check icons.

- **Closing Line**: "Designed for teams that want to go beyond using AI and start building with it." centered at bottom.

### 2. Update `src/components/apex/TabNavigation.tsx`

- Add `"APIs & Data Layer"` to the `TabId` type union.
- Change the dropdown item's `tab` from `"Infrastructure"` to `"APIs & Data Layer"`.

### 3. Update `src/pages/Index.tsx`

- Import `ApiDataLayerTab`.
- Add rendering: `{activeTab === "APIs & Data Layer" && <ApiDataLayerTab />}`.

### 4. Update `src/components/apex/SovereigntySection.tsx`

- Change the APIs & Data Layer card's tab mapping from `"Infrastructure"` to `"APIs & Data Layer"`.

### Notes
- All copy will use commas, colons, or periods instead of em dashes per style constraint.
- Follows existing mono font, border, animation patterns.


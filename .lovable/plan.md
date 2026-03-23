

# Remove "Overview" Tab + Add ALICE Hub-and-Spoke Diagram

## Summary
Two changes: (1) Remove "Overview" from the nav tabs and make the APEX:E3 logo act as the home/overview button. (2) Add a new ALICE hub-and-spoke intelligence diagram section to the Overview page (between SovereigntySection and service cards) with animated data flow lines and a "Learn More" CTA linking to Data & Intelligence.

## Change 1: Logo as Home Button

**`src/components/apex/TabNavigation.tsx`**
- Remove `"Overview"` from the `tabs` array (keep it as a valid `TabId` type)
- Make the APEX:E3 logo div a clickable button that calls `onTabChange("Overview")`
- Add cursor-pointer and hover styles to the logo

**`src/pages/Index.tsx`**
- No changes needed — "Overview" still renders, just not shown as a tab

## Change 2: ALICE Hub-and-Spoke Diagram

**Create `src/components/apex/AliceHubDiagram.tsx`**

A full-width section with an SVG-based hub-and-spoke system diagram:

- **Center**: Glowing circular "ALICE" node with subtitle "Intelligence Layer", soft teal pulse animation
- **Left side (inputs)** — 4 grouped categories with labeled nodes:
  - Public Data: SEC EDGAR, News / Web Data, Market Data
  - Enterprise Data: SharePoint, Microsoft 365, Internal Documents
  - Financial Data Providers: S&P Capital IQ, Bloomberg, FactSet
  - Proprietary Data: Internal datasets, Alternative data
- **Right side (outputs)** — 5 value nodes: Insights, Reports, Models, Dashboards, Signals
- **Connections**: Animated lines (CSS keyframe particles/dashes traveling along paths) flowing inward from inputs to ALICE, then outward to outputs
- **Animation**: Continuous subtle loop — inbound flow, ALICE pulse, outbound flow
- **CTA**: "Learn More" button at bottom that navigates to Data & Intelligence tab

Design: dark background section, teal accent glow on ALICE node, clean sans-serif labels, generous spacing, no clutter.

**`src/components/apex/OverviewTab.tsx`**
- Import `AliceHubDiagram`
- Add it between `<SovereigntySection />` and the service cards
- Pass `onTabChange` prop down (or use a callback prop) for the "Learn More" CTA

**`src/pages/Index.tsx`**
- Pass `onTabChange={handleTabChange}` as prop to `OverviewTab`

## Files
1. `src/components/apex/TabNavigation.tsx` — remove Overview from visible tabs, make logo clickable
2. `src/components/apex/AliceHubDiagram.tsx` — new hub-and-spoke diagram component
3. `src/components/apex/OverviewTab.tsx` — add AliceHubDiagram, accept onTabChange prop
4. `src/pages/Index.tsx` — pass onTabChange to OverviewTab


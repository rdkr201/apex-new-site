

# Redesign ALICE Hub Diagram to Vertical Center-Focused Layout

## What changes
Replace the current horizontal 3-column layout with a vertical flow: Inputs → ALICE → Outputs. ALICE becomes the dominant focal point with stronger glow. Everything flows vertically into and out of it.

## New Layout (both desktop and mobile)

```text
     ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
     │ Public   │  │Enterprise│  │Financial │  │Proprietary│
     │ Data     │  │ Data     │  │Providers │  │ Data      │
     │ items... │  │ items... │  │ items... │  │ items...  │
     └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬──────┘
          └──────────────┼──────────────┼──────────────┘
                         │ (animated lines flowing down)
                    ┌────▼────┐
                    │         │
                    │  ALICE  │  ← bigger (h-40 w-40), stronger glow
                    │         │
                    └────┬────┘
                         │ (animated lines flowing down)
          ┌──────┬───────┼───────┬──────┬──────┐
          ▼      ▼       ▼       ▼      ▼
       Insights Reports Models Dashboards Signals
       (glowing output cards in a row)
```

## Key design decisions

1. **ALICE node**: Scale up to `h-40 w-40` on desktop, triple-layer glow (blur-2xl outer, blur-lg mid, border ring), slow pulse animation
2. **Input groups**: 4-column grid at top, each group is a compact card with label + stacked items
3. **Flow lines**: Vertical animated gradient lines between inputs→ALICE and ALICE→outputs using CSS keyframes (`flowDown`)
4. **"INGEST" / "OUTPUT" labels**: Small mono labels on the vertical flow connectors
5. **Output cards**: Horizontal row of 5 cards with teal border glow + staggered entrance animation
6. **Mobile**: Inputs become 2-col grid, outputs become 3-col grid, same vertical flow
7. **Remove**: The separate desktop (horizontal) and mobile layouts — use one unified vertical layout that's responsive

## File to edit
- `src/components/apex/AliceHubDiagram.tsx` — full rewrite of the diagram section, keeping header and CTA unchanged


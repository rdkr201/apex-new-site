

# Upgrade TransformationAnimation to Discipline-Based Auto-Scrolling Carousel

## Summary
Replace the static "Forecasting / Fundamental" query groups with a vertically auto-scrolling carousel of prompt cards grouped by 6 disciplines (Equities, Credit, Quant, Multi-Asset, Research, Data/Extraction). The carousel rotates through discipline blocks with smooth upward scroll, pauses on hover, and uses an `ALICE >` prefix for a live-system feel.

## New Prompt Data (6 groups)

**Equities** (4 prompts): screening, guidance summary, valuation comps, charting
**Credit** (4 prompts): covenant extraction, spread comparison, widening spreads, credit curves
**Quant** (4 prompts): regime detection, cointegration, multi-factor, volatility breakout
**Multi-Asset** (4 prompts): macro drawdowns, cross-asset correlations, inflation impact, rate shock simulation
**Research** (4 prompts): semiconductor earnings, management tone, 10-K extraction, investment memo
**Data / Extraction** (4 prompts): PDF table extraction, earnings presentation conversion, filing metrics, time series export

## Carousel Behavior
- Show one discipline block at a time (group label + 2-3 visible prompts)
- Auto-rotate to next discipline every ~4 seconds
- Smooth upward slide transition between groups
- Pause rotation on hover
- Gradient fade at top and bottom edges of container
- Each prompt prefixed with `ALICE >`

## Design
- Dark cards with subtle borders, monospace font
- Teal accent on group labels and `ALICE >` prefix
- Discipline label appears above its prompt block
- Container title stays "Actionable Workflows"

## Files to Edit
1. **`src/components/apex/TransformationAnimation.tsx`** — Replace `queryGroups` data with 6 disciplines. Rewrite the right panel to use a cycling state (`activeGroupIndex`) with `setInterval`, rendering one group at a time with `AnimatePresence` slide transitions. Add hover pause logic, gradient overlays, and `ALICE >` prefix styling.


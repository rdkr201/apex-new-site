

## Optimise Homepage Section Order

Reorder sections in `src/components/apex/OverviewTab.tsx` (home view only) to match the requested flow.

### Current Order
1. Hero
2. Partners logo carousel
3. Core Pillars (SovereigntySection — ALICE / Infra / etc)
4. Security Section
5. Last Mile section
6. Contact section

### New Order
1. Hero
2. Partners logo carousel
3. Core Pillars (SovereigntySection — "What APEX Does")
4. **Last Mile section** (moved up from position 5)
5. Security Section (moved down from position 4)
6. Contact section

### Changes to `src/components/apex/OverviewTab.tsx`

Swap the order of three `{isHome && ...}` blocks (lines 155–231):

- Move the **Last Mile section** (lines 162–231) to immediately after `SovereigntySection` (line 156)
- Move the **Security Section** (lines 158–159) to after the Last Mile block

No content changes, just reordering the JSX blocks.

### Technical Details
- Only the `isHome` conditional blocks change position
- All component references, props, and animations remain identical


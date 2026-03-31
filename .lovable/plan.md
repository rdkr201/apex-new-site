

## Make ALICE Prominent in Core Pillars Section

**Current state**: All four pillar cards (ALICE, Bespoke Agents, Infrastructure, APIs & Data Layer) are equal-width in a 4-column grid.

**Change**: Make ALICE a featured card spanning the full width above the other three, with enhanced styling.

### File: `src/components/apex/SovereigntySection.tsx`

**Layout change**:
- Split ALICE out from the 4-column grid
- Render ALICE as a standalone full-width card above, with larger text, a subtle primary border/glow, and more padding
- Render the remaining 3 pillars in a `md:grid-cols-3` grid below

**ALICE card enhancements**:
- Full width with `border-primary/30` border accent
- Larger title (`text-lg` instead of `text-sm`)
- Subtle `bg-primary/5` background
- Larger icon (`h-6 w-6`)

**Other 3 cards**: Stay as they are, just in a 3-column grid instead of 4.


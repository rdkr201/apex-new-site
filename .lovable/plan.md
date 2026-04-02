

## Mobile Graphics Placement — Stop Wrapping Behind Text

The core problem: on mobile (390px), canvas animations and decorative graphics are positioned as `absolute` overlays behind text, creating visual noise. They should either be placed as standalone visual blocks (above/below text) or hidden entirely on mobile.

### Components to Fix

**1. TesseractAnimation (Hero sections across all tabs)**
- Currently: `absolute top-0 right-0 h-full w-full opacity-40` on mobile — covers entire hero, sits behind text
- Fix: On mobile, move the animation **above** the text content as a dedicated visual block (not absolute). Show it at ~30vh height, then place the text below it. On desktop, keep the current absolute overlay layout.
- File: `src/components/apex/TesseractAnimation.tsx` and every hero that uses it (`OverviewTab.tsx`, `HeroSection.tsx`)

**2. ChaosToOrderParticles (TransformationAnimation — ALICE tab)**
- Currently: `absolute inset-0` canvas inside a flex panel — this one is actually fine since it's contained within its own bordered box, not overlapping text
- No change needed — it's properly contained

**3. AliceHubDiagram glow effects**
- Currently: `absolute -inset-10` glow rings around the ALICE circle — these are decorative and properly scoped to the circle container
- No change needed

### Implementation Details

**File: `src/components/apex/OverviewTab.tsx`** (home hero)
- Restructure the hero `div` so on mobile the TesseractAnimation renders as a block element (not absolute) above the text
- Mobile: stack vertically — animation block (200px height) → text content below
- Desktop: keep current overlapping layout with absolute positioning

**File: `src/components/apex/HeroSection.tsx`** (all other tab heroes)
- Same restructure: on mobile, render TesseractAnimation as a contained block above text instead of an absolute overlay
- Mobile: animation sits in its own `h-[25vh]` container, text follows below with padding
- Desktop: unchanged

**File: `src/components/apex/TesseractAnimation.tsx`**
- Accept a new optional `mobile` boolean prop or use CSS-only approach
- CSS approach (preferred): Change from always-absolute to `relative` on mobile via responsive classes:
  - Mobile: `relative h-[25vh] w-full` (block-level, own space)
  - Desktop: `pointer-events-none absolute top-0 right-0 h-full w-[55%]` (current behavior)
- Remove `opacity-40` on mobile since it will no longer overlap text

### Summary
- 3 files changed: `TesseractAnimation.tsx`, `HeroSection.tsx`, `OverviewTab.tsx`
- Mobile: animations become standalone visual blocks above text (not behind)
- Desktop: no visual change
- No content changes




# Restructure APEX:E3 to Match Wintermute Layout

## What Changes

The current site uses compact centered tab navigation with small text. Wintermute uses a different pattern: full-width navbar with logo left, **uppercase navigation links spread right**, a CTA button, and **full-viewport hero sections** with large headlines and animated particle backgrounds on each page.

## Key Design Changes

### 1. Navigation Bar (TabNavigation.tsx)
- Logo stays left, but make it bolder/larger
- Move nav links to the **right side** with wider spacing
- ALL CAPS text for nav links, slightly larger (`text-xs` → `text-sm`)
- Replace "Contact" text link with a styled button (rounded pill with arrow icon, like Wintermute's "Log-in")
- Active state: accent color on text (not underline)
- Increase header height from `h-14` to `h-16`

### 2. Overview Tab — Full-Viewport Hero (OverviewTab.tsx)
- Make headline much larger (`text-6xl` → `text-7xl md:text-8xl`)
- Accent color on first phrase: `<span class="text-primary">Infrastructure</span> for Alpha`
- Left-align headline (not centered) — position in left ~40% of screen
- Add animated particle/dot background across the full viewport (similar to Wintermute's scattered green/gray dots pattern using CSS or canvas)
- Subtitle below headline in muted color

### 3. All Tab Pages — Consistent Hero Pattern
- Each tab page gets a full-viewport hero section with large two-line headline (first line accented) and subtitle
- Content sections flow below the hero on scroll (not confined to viewport)

### 4. Service Cards Section (new, on Overview)
- Below the hero, add horizontal service/capability cards similar to Wintermute's OTC/Liquidity/DeFi section
- Each card: small label, title, one-line description, link arrow
- Separated by thin dividers

### 5. Footer Enhancement
- Add a richer footer with multiple columns: links to sections, contact CTA, subscribe prompt
- Matches Wintermute's bottom section pattern

## Files to Modify
- `src/components/apex/TabNavigation.tsx` — Restyle navbar layout and typography
- `src/components/apex/OverviewTab.tsx` — Full-viewport hero with particles, left-aligned headline, service cards below
- `src/components/apex/WorkflowsTab.tsx` — Add hero section header pattern
- `src/components/apex/InfrastructureTab.tsx` — Add hero section header pattern
- `src/components/apex/DataTab.tsx` — Add hero section header pattern
- `src/components/apex/SovereigntyTab.tsx` — Add hero section header pattern
- `src/components/apex/ApproachTab.tsx` — Add hero section header pattern
- `src/pages/Index.tsx` — Minor layout adjustments for new header height

## Technical Details
- Particle background: Pure CSS approach using absolutely-positioned dots with randomized positions and pulse animations (no canvas needed for performance)
- Navigation stays as React state tabs (not routes) per original spec
- Contact button uses `mailto:` link styled as a pill button with an arrow icon


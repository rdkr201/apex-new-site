

# Redesign Agentic Workflows as Discipline-Switcher Page

## Summary
Replace the current vertically-stacked sections in WorkflowsTab with a single adaptive layout: one shared hero, a sticky discipline tab bar, and a dynamic content area that updates based on the selected discipline.

## Layout

```text
┌──────────────────────────────────────────────┐
│  Hero (shared)                               │
│  "Agentic Workflows"                         │
│  "ALICE: Role-Adaptive Intelligence"         │
│  Subtitle + CTA                              │
├──────────────────────────────────────────────┤
│  [Equities] [Credit] [Research] [Quant] [MA] │  ← sticky tab bar
├──────────────────────────────────────────────┤
│  Dynamic content for selected discipline:    │
│  - Title + audience                          │
│  - Overview paragraph                        │
│  - Feature cards (3-col grid)                │
│  - Example queries (terminal-style)          │
│  - Outcome strip                             │
└──────────────────────────────────────────────┘
```

## Technical approach

### 1. Rewrite `WorkflowsTab.tsx`
- Keep the existing `HeroSection` at top
- Add a sticky discipline tab bar below hero with pill-style active indicator (teal highlight)
- Use local `useState` for the active discipline (default: "Equities")
- Define a single `disciplines` data array with all 5 disciplines (reusing existing content)
- Render content dynamically from the selected discipline object
- Use `AnimatePresence` + `motion.div` for fade transitions between tabs
- On mobile, tabs become horizontally scrollable

### Content layout per discipline:
- **Header**: discipline title + audience subtitle
- **Overview**: 1-2 sentence intro paragraph
- **Feature cards**: 3-column grid of capability cards with subtle borders
- **Example queries**: terminal-style monospace blocks
- **Outcome**: bordered accent strip (reuse existing left-border style)

### 2. Update `TabNavigation.tsx`
- Remove the dropdown items for "Agentic Workflows" since the discipline switching now lives inside the page itself (no longer scroll-to-section)

### 3. Update `Index.tsx`
- Remove `scrollSection` pass-through to `WorkflowsTab` (no longer needed for discipline sections)

### Files to edit
- `src/components/apex/WorkflowsTab.tsx` -- full rewrite
- `src/components/apex/TabNavigation.tsx` -- remove Agentic Workflows dropdown
- `src/pages/Index.tsx` -- simplify WorkflowsTab usage


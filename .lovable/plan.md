

# Add Abstract Flowing Dots Animation to Hero

## What Changes

Replace the current static `ParticleField` (randomly placed pulsing dots) with a dynamic, flowing dot-wave animation inspired by the uploaded halftone wave pattern. The dots will form wave-like patterns that continuously flow across the hero background, creating an abstract data-stream aesthetic.

## Approach

### New Component: `DotWaveField.tsx`
Create a canvas-based animation component that renders a grid of dots with wave-distorted positions and varying sizes/opacities — producing the abstract halftone wave effect from the reference image.

- **Grid of dots** (~40×25) positioned across the viewport
- Each dot's size and opacity modulated by overlapping sine waves that animate over time
- Waves flow diagonally/horizontally, creating a continuous fluid motion
- Colors use the primary accent (teal) with varying opacity
- Canvas-based for smooth 60fps performance (CSS approach with 1000+ dots would be too heavy)
- `requestAnimationFrame` loop with cleanup on unmount

### Integration
- Replace `<ParticleField>` in `OverviewTab.tsx` hero section with `<DotWaveField>`
- Also replace in `HeroSection.tsx` (used by other tabs) for consistency
- Remove or keep `ParticleField.tsx` as unused (can clean up later)

### Animation Details
- Dots arranged in a grid pattern
- Position offset by `sin(x + time)` and `cos(y + time)` for flowing wave motion
- Size varies with `sin(x * freq + y * freq + time)` to create the halftone density effect
- Slow, smooth animation speed — institutional, not playful
- Subtle fade gradient at edges so dots don't hard-clip

## Files to Modify
- **Create** `src/components/apex/DotWaveField.tsx` — Canvas-based flowing dot wave animation
- **Edit** `src/components/apex/OverviewTab.tsx` — Swap ParticleField → DotWaveField
- **Edit** `src/components/apex/HeroSection.tsx` — Swap ParticleField → DotWaveField


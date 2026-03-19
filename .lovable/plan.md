

# Animated "Unstructured → Structured Insights" Transformation

## Placement

Add it as an animated section on the **Overview page**, between the hero and the service cards. This is the highest-visibility spot and reinforces the core value prop immediately. The Data & Intelligence tab already has a static version of this concept — the Overview gets the animated, attention-grabbing one.

## What It Looks Like

A horizontal animated flow with three stages:

```text
[Scattered text fragments]  →  [Processing pulse]  →  [Clean structured rows]
     (chaotic, faded)          (animated glow)         (sharp, primary-colored)
```

- **Left column ("Unstructured")**: Fragments of text (PDFs, feeds, filings) rendered at random rotations/positions, slowly drifting — conveying chaos
- **Center arrow**: An animated pulsing line/arrow with a glowing sweep effect moving left-to-right on loop
- **Right column ("Actionable Insights")**: Clean, aligned rows that fade in sequentially with a subtle slide-up — conveying order and clarity

The animation triggers on scroll into view (using framer-motion `whileInView`), and the processing sweep repeats on a slow loop.

## Files to Modify

- **Create** `src/components/apex/TransformationAnimation.tsx` — The animated unstructured-to-structured visual component
- **Edit** `src/components/apex/OverviewTab.tsx` — Insert the new component between hero and service cards

## Technical Details

- Uses framer-motion for element animations (`whileInView`, staggered children, continuous rotation on chaotic fragments)
- CSS keyframe for the glowing sweep on the center arrow
- Responsive: stacks vertically on mobile
- Keeps the existing static version in DataTab untouched


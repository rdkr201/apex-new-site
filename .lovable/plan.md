

# Dynamic Word Rotation in Hero Headline

## What changes
Replace the current one-shot typewriter of "Infrastructure for Alpha" with a looping type → pause → erase → next word animation that cycles through: Alpha, Equities, Credit, Quant, Research, Multi-Asset.

## How it works
- "Infrastructure for " is static (rendered in primary/teal color)
- The second word rotates with this cycle: type characters in → pause 1.8s → erase characters out → short gap → type next word
- Timing: ~70ms per char typing, 1.8s pause, ~50ms per char erasing
- Blinking cursor `_` always visible at the end
- Loops infinitely through the 6 words

## Implementation
**`src/components/apex/OverviewTab.tsx`**:
- Remove the current `displayedChars` / `headline` logic
- Add new state machine: `wordIndex`, `charIndex`, `phase` (typing / pausing / erasing)
- Static prefix "Infrastructure for " always fully visible
- Dynamic suffix typed/erased character by character
- The subtitle and CTA appear after the first word finishes typing (first cycle only)
- Keep existing layout, DotWaveField, TransformationAnimation, SovereigntySection, service cards unchanged


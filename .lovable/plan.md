

## Add "The Last Mile" Section to Bespoke Workflows Tab

Rebuild `BespokeWorkflowsTab.tsx` to lead with a new "Last Mile" narrative section before the existing use cases and process steps.

### Changes to `src/components/apex/BespokeWorkflowsTab.tsx`

**1. Update Hero**
- Headline: "Closing the Last Mile to Production"
- Subtitle: "Frontier AI models get you 80% of the way. The remaining 20% is where real value is created, and where most systems fail."

**2. New section: "The Problem" (after hero)**
- Paragraph explaining frontier models are powerful for exploration but fall short in institutional environments
- 4 bullet items with Check icons: connecting to proprietary data, structuring auditable workflows, ensuring accuracy/compliance, embedding into operational systems
- Closing line: "This is where generic tools stop, and where APEX:E3 begins."

**3. New section: "The APEX:E3 Difference" (positioning block)**
- Lead text: "APEX:E3 transforms AI from a useful assistant into production-grade infrastructure."
- 4 bullet items: integrate with internal systems, encode domain logic, deliver auditable outputs, operate securely
- Visual punch line rendered as a large styled element: "From Exploration to Institutional Deployment"

**4. New section: Comparison strip**
- Two-column layout comparing Frontier Models vs APEX:E3:
  - Insight generation vs Workflow integration
  - Generic outputs vs Structured, auditable intelligence
  - Experimentation vs Production deployment

**5. Closing line block**
- "The difference between AI that is used occasionally and AI that drives outcomes is the last mile. That's what we build."
- Optional supporting line about the final 20%

**6. Keep existing sections**
- "What This Looks Like" use cases grid (unchanged)
- "How We Work" 3-step process (unchanged)

### Technical Details
- Uses existing patterns: `HeroSection`, `motion` from framer-motion, `Check` from lucide-react
- All sections use `border-t border-border` dividers, `max-w-[1400px]` containers
- No em dashes per content constraints (replaced with commas/periods)


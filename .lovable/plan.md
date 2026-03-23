

# Move AI Sovereignty into Overview Tab

## Summary
Merge the AI Sovereignty content into the Overview page as a dedicated section below the "From noise to conviction" transformation animation. Remove "AI Sovereignty" as a separate tab from navigation. Inspired by the uploaded screenshot, present the security/sovereignty guarantees as a 3x2 grid of icon cards with a headline and footer note.

## Layout (placed between TransformationAnimation and Service Cards)

```text
┌─────────────────────────────────────────────────────┐
│          Enterprise-Grade AI Sovereignty             │
├─────────────────┬──────────────────┬────────────────┤
│   🏢            │   🛡️             │   🔒           │
│  On-Premise     │  Data            │  Compliance    │
│  Deployment     │  Sovereignty     │  Ready         │
├─────────────────┬──────────────────┬────────────────┤
│   🚫            │   📋             │   🧠           │
│  Air-Gapped     │  Full Audit      │  Model         │
│  Capable        │  Trail           │  Isolation     │
├─────────────────┴──────────────────┴────────────────┤
│  Your data. Your models. Your infrastructure.        │
│  No compromises.                                     │
└─────────────────────────────────────────────────────┘
```

Uses Lucide icons (Server, ShieldCheck, Scale, WifiOff, ClipboardList, Brain) in a 3-column grid with border dividers, matching the screenshot's dark, minimal card style. Each card has an icon, a title, and a one-line description. A footer line reinforces the message.

## Files to Edit

1. **`src/components/apex/OverviewTab.tsx`** - Import and add a new `<SovereigntySection />` component between `<TransformationAnimation />` and the service cards.

2. **Create `src/components/apex/SovereigntySection.tsx`** - New component: 3x2 grid of sovereignty guarantees with icons, titles, descriptions. Uses `whileInView` framer-motion animations. Styled with border dividers matching the screenshot aesthetic.

3. **`src/components/apex/TabNavigation.tsx`** - Remove "AI Sovereignty" from the `tabs` array and the `dropdowns` record.

4. **`src/pages/Index.tsx`** - Remove the `SovereigntyTab` import and its conditional render. Remove "AI Sovereignty" from the footer links.

5. **`src/components/apex/SovereigntyTab.tsx`** - Can be deleted (no longer used).


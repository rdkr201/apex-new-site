

## Full Mobile Optimisation — All Pages

The user is viewing on 390x844 (mobile). After reviewing every component, here are the key mobile issues and fixes needed across the site.

### Issues Identified

1. **Hero sections** — Headlines use `text-4xl`/`text-5xl`/`text-6xl` which overflow on 390px. Tesseract canvas takes `w-[55%]` of space, competing with text.
2. **OverviewTab home hero** — "ALICE" text at `text-5xl` too large; subtitle line too long on mobile.
3. **Partner logo carousel** — `h-14` / `h-20` logos may be too large; gap-16 creates wide spacing.
4. **TransformationAnimation** — Side-by-side layout (`md:flex-row`) works, but the `minHeight: 300`/`380` panels stack tall on mobile; text panel prompt cards may overflow.
5. **AliceHubDiagram** — Input groups grid is `grid-cols-2` on mobile which is fine, but ALICE circle at `h-32 w-32` could be larger/smaller depending. Role buttons `flex-wrap` works but spacing may be tight.
6. **ArchitectureDiagram** — Has `min-w-[900px]` forcing horizontal scroll on mobile. This is the biggest mobile issue — the entire diagram is unusable on small screens.
7. **AIStackDiagram** — Stack accordion has `truncate` on summary text which clips content. Generally OK but padding could be tighter.
8. **SecurityTab** — Block cards in 2-col/3-col grids properly fall to 1-col. Table may overflow horizontally.
9. **CompanyTab** — Leadership cards in `md:grid-cols-3` properly stack. Looks reasonable.
10. **Footer** — `md:flex-row` properly stacks. OK but gap sizes could tighten.
11. **Agentic System section (ALICE tab)** — 3-col grid properly falls to 1-col. OK.
12. **Last Mile section** — Progress bars and text look good but `max-w-3xl` with `px-6` is fine.
13. **SecuritySection (home)** — 4-col grid (`lg:grid-cols-4`) falls to `md:grid-cols-2` then 1-col. OK.

### Plan

**File: `src/components/apex/TesseractAnimation.tsx`**
- Reduce canvas container width on mobile: change from `w-[55%]` to `w-full md:w-[55%]` with reduced opacity on mobile, or keep `w-[55%]` but add `opacity-50 md:opacity-100` so hero text remains readable
- Alternatively: hide on very small screens or make it `w-[70%]` with lower opacity

**File: `src/components/apex/OverviewTab.tsx`**
- Home hero: reduce "ALICE" from `text-5xl` to `text-3xl md:text-5xl md:text-6xl`
- Home hero headline: reduce from `text-4xl md:text-5xl lg:text-6xl` to `text-2xl md:text-4xl lg:text-6xl`
- ALICE tab hero: reduce headline similarly to `text-2xl md:text-4xl lg:text-6xl`
- Partner logos: reduce `gap-16` to `gap-8 md:gap-16`, reduce logo heights slightly on mobile
- Last Mile: reduce padding on mobile

**File: `src/components/apex/HeroSection.tsx`**
- Reduce headline from `text-4xl md:text-6xl` to `text-2xl md:text-4xl lg:text-6xl`
- Reduce `min-h-[60vh]` to `min-h-[45vh] md:min-h-[60vh]`

**File: `src/components/apex/ArchitectureDiagram.tsx`** (biggest fix)
- Replace the horizontal `min-w-[900px]` layout with a vertically stacked layout on mobile
- On mobile: stack Ingest → Analyse → Distribute vertically with down arrows
- Keep the horizontal layout for `md:` and above
- Remove `overflow-x-auto` and `min-w-[900px]` constraints on mobile

**File: `src/components/apex/TransformationAnimation.tsx`**
- Reduce `minHeight` from 300/380 to 240/300 on mobile (use className instead of inline style)
- Tighten padding on mobile

**File: `src/components/apex/AliceHubDiagram.tsx`**
- Input group items: allow text wrapping (remove `whitespace-nowrap` or add `whitespace-normal` on mobile)
- Role buttons: reduce padding and font size slightly on mobile

**File: `src/components/apex/SecurityTab.tsx`**
- Wrap comparison table in `overflow-x-auto` container for safety
- Reduce section padding on mobile

**File: `src/components/apex/CompanyTab.tsx`**
- Leadership card header: allow name to wrap on mobile (already mostly fine)

**File: `src/pages/Index.tsx`**
- Footer: tighten spacing on mobile

### Summary of Changes
- ~10 files touched
- Primary focus: font size scaling, padding reduction, Architecture Diagram mobile layout, Tesseract visibility, logo carousel sizing
- No content changes, purely responsive CSS/Tailwind adjustments


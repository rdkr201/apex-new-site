

## Mobile-Only Succinct Text — All Heroes & Sections

Keep desktop/iPad text unchanged. On mobile (below `md` breakpoint), show shorter versions of subtitles and long body text using hidden/block responsive classes.

### Approach

Use paired elements: full text hidden on mobile (`hidden md:block`), short text shown only on mobile (`md:hidden`). This keeps desktop copy untouched.

### Changes by File

**1. `src/components/apex/HeroSection.tsx`**
- Add `mobileSubtitle` optional prop to the interface
- When provided, render the short version with `md:hidden` and the full version with `hidden md:block`
- No change when prop is absent

**2. `src/components/apex/OverviewTab.tsx`**
- Home hero subtitle: desktop keeps "Trusted by Global Institutions managing $10T+ in combined AUM. Powered by APEX:E3", mobile shows "Trusted by institutions managing $10T+ AUM"
- ALICE tab subtitle: already short ("Domain-native. Institutionally deployed. Outcome-driven.") — no change needed
- Agentic System section body paragraphs: show condensed single paragraph on mobile, full two paragraphs on desktop

**3. `src/components/apex/SecurityTab.tsx`**
- Subtitle: desktop "APEX:E3 delivers fully private, auditable, and secure AI infrastructure, deployed within your environment, governed by your rules." → mobile: "Private, auditable AI infrastructure in your environment."
- Pass `mobileSubtitle` prop

**4. `src/components/apex/BespokeWorkflowsTab.tsx`**
- Subtitle: desktop "Frontier AI models get you 80% of the way. The remaining 20% is where real value is created, and where most systems fail." → mobile: "The last 20% is where value is created."
- Pass `mobileSubtitle` prop

**5. `src/components/apex/ApiDataLayerTab.tsx`**
- Subtitle: desktop "APEX:E3 provides developer-ready infrastructure to integrate AI directly into your systems, enabling programmatic access to data, models, agents, and workflows at scale." → mobile: "Programmatic access to data, models, and workflows."
- Pass `mobileSubtitle` prop

**6. `src/components/apex/InfrastructureTab.tsx`**
- Subtitle: desktop "Big Data Architecture as a Service. From unstructured noise to research-grade intelligence." → mobile: "Big Data Architecture as a Service."
- Pass `mobileSubtitle` prop

**7. `src/components/apex/InsightsTab.tsx`**
- Subtitle: desktop "Perspectives on agentic AI, quantitative research, and the future of institutional investment infrastructure." → mobile: "Agentic AI and quantitative research perspectives."
- Pass `mobileSubtitle` prop

**8. Other tabs** (DataTab, CompanyTab, WorkflowsTab)
- Already concise enough — no changes needed

### Technical Detail
- `HeroSection` gets one new optional prop: `mobileSubtitle?: string`
- When set, two `<p>` tags render: one `hidden md:block` (full), one `md:hidden` (short)
- Same pattern applied inline in `OverviewTab.tsx` for non-HeroSection text blocks
- 7 files changed total


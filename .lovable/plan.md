

# Infrastructure Tab: Remove Hero Text + Add AI Stack Cylinder Diagram

## Changes

### 1. Remove pre-headline text from Infrastructure hero
**File: `src/components/apex/InfrastructureTab.tsx`**
- Remove `preHeadline` and `preSubline` props from the `HeroSection` component call

### 2. Create new AI Stack Diagram component
**New file: `src/components/apex/AIStackDiagram.tsx`**

A vertical stacked cylinder-inspired architecture diagram with 7 layers (bottom to top):

```text
  ┌─────────────────────────────────┐
  │   07  User Interface            │  ← top
  ├─────────────────────────────────┤
  │   06  Financial Intelligence    │
  ├─────────────────────────────────┤
  │   05  Agentic Workflow Engine   │
  ├─────────────────────────────────┤
  │   04  AI Models & Reasoning     │
  ├─────────────────────────────────┤
  │   03  Vectorisation & Indexing  │
  ├─────────────────────────────────┤
  │   02  Data Processing           │
  ├─────────────────────────────────┤
  │   01  Data Ingestion            │  ← bottom
  └─────────────────────────────────┘
```

**Visual design:**
- Dark cards with subtle teal/primary gradient borders, stacked vertically
- Each layer is a horizontal block with number badge (01-07), title, and one-line description
- Animated upward-flowing gradient lines between layers (CSS keyframe moving dots/glow upward)
- Hover: layer highlights with brighter border + glow, shows short description
- Click: expands an inline detail panel below the layer with 3-5 bullet points and a 2-sentence explanation
- Only one layer expanded at a time (accordion style)
- Cylinder aesthetic via rounded top/bottom edges on the outermost layers and subtle curved separators

**Floating side badges** (fixed position relative to the diagram):
- Privacy: "Private deployment / On-prem / VPC"
- Accuracy: "Validated outputs, retrieval-based reasoning"
- Security: "Enterprise-grade infrastructure"
- Positioned as small vertical pills on the right side of the stack

**Layer data:**

| # | Title | One-liner | Expanded bullets |
|---|-------|-----------|-----------------|
| 01 | Data Ingestion & Connectivity | Data-agnostic ingestion across structured and unstructured sources | PDFs, Excel, APIs, market data, internal systems; Real-time and batch processing; Connector framework for proprietary feeds |
| 02 | Data Processing & Structuring | Intelligent parsing, metadata tagging, and data normalisation | Chunking, cleaning, deduplication; Schema inference and mapping; Quality scoring and validation |
| 03 | Vectorisation & Indexing | Semantic embeddings and private knowledge indexing | Multi-model embedding generation; Hybrid search (semantic + keyword); Incremental re-indexing |
| 04 | AI Models & Reasoning Engine | Multi-model orchestration, RAG, and explainable reasoning | Private model hosting; Retrieval-augmented generation; Citation and provenance tracking |
| 05 | Agentic Workflow Engine | AI agents executing multi-step workflows and decision logic | Autonomous task decomposition; Human-in-the-loop checkpoints; Cross-system orchestration |
| 06 | Financial Intelligence Applications | Domain-specific applications built on top of the AI stack | Document Intelligence, Portfolio Analytics; Credit Analysis, Chart Builder; Custom application framework |
| 07 | User Interface | Natural language, voice, and visual interaction layer | Chat, dashboards, voice; Embedded widgets; API and SDK access |

**Header text above diagram:**
> "APEX:E3 transforms fragmented data into structured, explainable, and actionable intelligence through a fully integrated AI stack."

**Animation:** Subtle upward-flowing particles/dots along the left edge of the stack using CSS animation.

### 3. Add AI Stack Diagram to Infrastructure tab
**File: `src/components/apex/InfrastructureTab.tsx`**
- Import and place `<AIStackDiagram />` after the existing `ArchitectureDiagram` (BDAaS chart) and before the transformation visual section

## Files
1. `src/components/apex/InfrastructureTab.tsx` — remove pre-headline props, add AIStackDiagram import
2. `src/components/apex/AIStackDiagram.tsx` — new component (full AI stack vertical diagram)


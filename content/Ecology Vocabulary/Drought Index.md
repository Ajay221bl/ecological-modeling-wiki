---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
aliases:
  - "Drought severity"
  - "Drought Monitor"
  - "U.S. Drought Monitor"
  - "PDSI"
  - "Drought categories D0 to D4"
status: seedling
---

# Drought Index

**In one line:** a drought index is a number summarising how dry conditions are relative to normal for a place and time, such as the U.S. Drought Monitor categories D0 (abnormally dry) to D4 (exceptional drought).

> [!info] Before this, it helps to know
> [[Explanatory Variable]] · [[Ordinal Variable]]

## A tiny example
Christensen et al. (2020) summed the percentage of each county in categories D0 to D4 for the last week of August, giving a cumulative drought severity from 0 to 500 per county and year.

## Start from zero
1. **U.S. Drought Monitor categories:** D0 abnormally dry, D1 moderate, D2 severe, D3 extreme, D4 exceptional.
2. **Other indices:** Palmer Drought Severity Index (PDSI), Standardized Precipitation Index (SPI).
3. **Choose a time window** that matches the biology (Christensen et al. used late August, when hemorrhagic disease peaks).
4. **Indices are relative to local normal,** so the same rainfall can be "drought" in one place and not another.
5. **Often spatially and temporally autocorrelated,** so models need random effects or spatial terms.

## In the course
[[Christensen et al. 2020]]. [[Shipley et al. 2022]]. Lab datasets ([[Course Website]]).

## Common confusions
- **"Drought index is total rainfall."** It is dryness relative to the local normal, often combining several measures.

## Explain it back
- What are the five U.S. Drought Monitor categories?

*Pass test:* you can explain how a drought index was built and used.

## Connections
- **Builds on:** [[Explanatory Variable]], [[Ordinal Variable]]
- **Leads to:** [[Epizootic Hemorrhagic Disease]], [[Climate Change Effects on Wildlife]]
- **Part of:** [[MOC - Ecology Vocabulary]]

## Flashcards

What do D0 and D4 mean in the U.S. Drought Monitor?
??
D0: abnormally dry; D4: exceptional drought.
++++

How did Christensen et al. build cumulative drought severity?
??
Summed percent county area in D0 to D4 (late August), range 0 to 500.
++++

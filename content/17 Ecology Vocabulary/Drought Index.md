---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "A drought index is a number summarising how dry conditions are relative to normal for a place and time, such as the U.S. Drought Monitor categories D0 (abnormally dry) to D4 (exceptional drought)."
aliases:
  - "Drought severity"
  - "Drought Monitor"
  - "U.S. Drought Monitor"
  - "PDSI"
  - "Drought categories D0 to D4"
status: seedling
---

# Drought Index

A **drought index** is a number summarising how dry conditions are relative to normal for a place and time, such as the U.S. Drought Monitor categories D0 (abnormally dry), D1 (moderate), D2 (severe), D3 (extreme) and D4 (exceptional) ([[Predictor Variable|Explanatory Variable]], [[Ordinal Variable]]). Other indices are the Palmer Drought Severity Index (PDSI) and the [[Standardizing|Standardized]] Precipitation Index (SPI). [[Christensen et al. 2020]] summed the percentage of each county in categories D0 to D4 for the last week of August, giving a cumulative drought severity from 0 to 500 per county and year.

Choose a time window that matches the biology: Christensen et al. used late August, when haemorrhagic disease peaks ([[Epizootic Hemorrhagic Disease]]). Indices are relative to the local normal, so the same rainfall can be "drought" in one place and not another. They are often spatially and temporally [[Autocorrelation|autocorrelated]], so models need random effects or spatial terms ([[Spatial Autocorrelation]], [[Random Effect]]).

It appears in Christensen et al., [[Shipley et al. 2022]] and the lab datasets ([[Course Website]]). A drought index is not total rainfall; it is dryness relative to the local normal, often combining several measures.

## Connections
- **Builds on:** [[Predictor Variable|Explanatory Variable]], [[Ordinal Variable]], [[Standardizing]], [[Autocorrelation]]
- **Leads to:** [[Epizootic Hemorrhagic Disease]], [[Climate Change Effects on Wildlife]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

What do D0 and D4 mean in the U.S. Drought Monitor?
??
D0: abnormally dry; D4: exceptional drought.
++++

How did Christensen et al. build cumulative drought severity?
??
Summed percent county area in D0 to D4 (late August), range 0 to 500.
++++

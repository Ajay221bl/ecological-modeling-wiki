---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "Landscape metrics are numbers that summarise the composition and configuration of a landscape around a site, such as percent forest within 1 km, number of patches or edge density."
aliases:
  - "Landscape metrics"
  - "Patch size"
  - "Edge density"
  - "Percent cover in a buffer"
  - "Fragmentation metrics"
  - "landscapemetrics"
status: seedling
---

# Landscape Metrics

**Landscape metrics** are numbers that summarise the composition and configuration of a landscape around a site, such as percent forest within 1 km, number of patches or edge density ([[Spatial Scale]], [[Predictor Variable|Explanatory Variable]]). Composition is how much of each cover type there is, such as percent forest; configuration is how it is arranged, such as patch number, edge density and connectivity. In R the landscapemetrics package computes them from rasters.

The buffer size is a choice of scale, and results change with it, so test several or justify one. Metrics are highly collinear with each other and with composition ([[Collinearity]]). Overlapping buffers of nearby sites create spatial dependence ([[Spatial Autocorrelation]]).

They appear in the lab datasets ([[Course Website]], [[Habitat]]). [[Habitat Fragmentation|Fragmentation]] is not just less habitat: habitat loss (composition) and fragmentation (configuration) are distinct.

## Connections
- **Builds on:** [[Spatial Scale]], [[Predictor Variable|Explanatory Variable]]
- **Leads to:** [[Collinearity]], [[Habitat]], [[Spatial Autocorrelation]], [[Habitat Fragmentation]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

Landscape composition vs configuration?
??
Composition: how much of each type. Configuration: how it is arranged.
++++

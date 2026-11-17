---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
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

**In one line:** landscape metrics are numbers that summarise the composition and configuration of a landscape around a site, such as percent forest within 1 km, number of patches or edge density.

> [!info] Before this, it helps to know
> [[Spatial Scale]] · [[Explanatory Variable]]

## Start from zero
1. **Composition:** how much of each cover type (percent forest).
2. **Configuration:** how it is arranged (patch number, edge density, connectivity).
3. **Buffer size is a choice of scale;** results change with it, so test several or justify one.
4. **Metrics are highly collinear** with each other and with composition.
5. **Overlapping buffers** of nearby sites create spatial dependence.
6. **R:** the landscapemetrics package computes them from rasters.

## In the course
Lab datasets ([[Course Website]]).

## Common confusions
- **"Fragmentation is just less habitat."** Habitat loss (composition) and fragmentation (configuration) are distinct.

## Explain it back
- Composition vs configuration?

*Pass test:* you can choose and interpret landscape metrics.

## Connections
- **Builds on:** [[Spatial Scale]], [[Explanatory Variable]]
- **Leads to:** [[Collinearity]], [[Habitat]], [[Spatial Autocorrelation]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

Landscape composition vs configuration?
??
Composition: how much of each type. Configuration: how it is arranged.
++++

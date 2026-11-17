---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Positive spatial autocorrelation"
  - "Clustering"
  - "Aggregation (spatial)"
status: seedling
---

# Positive Autocorrelation

**In one line:** positive autocorrelation means nearby observations are more similar than random pairs, producing patches or smooth runs.

> [!info] Before this, it helps to know
> [[Autocorrelation]] (the general idea)

## Start from zero
1. **Moran's I above its expected value (−1/(n−1)), Geary's c below 1, ACF bars above zero.**
2. **By far the most common kind in ecology.**
3. **Causes:** patchy environment, local dispersal, clumped social behaviour, slow population change.
4. **Effect on ordinary models:** standard errors too small, so p-values too small.
5. **The distance up to which it persists** estimates patch size (Diniz-Filho et al.).

## See it
![[Spatial autocorrelation patterns.png|700]]
*What to look at:* the left panel.

## In the course
[[Diniz-Filho et al. 2003]], [[Dynamic Ecology Autocorrelation Post]] (positive autocorrelation of abundance indicates clumping).

## Common confusions
- **"Positive autocorrelation means a positive correlation between x and y."** It is a variable with itself.

## Explain it back
- What does positive autocorrelation do to OLS standard errors?

*Pass test:* you can recognise it in a map, correlogram or ACF.

## Connections
- **Builds on:** [[Autocorrelation]]
- **Leads to:** [[Negative Autocorrelation]], [[Moran's I]], [[Inflated Type I Error]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[Positive vs Negative Autocorrelation]]

## Flashcards

What is positive autocorrelation?
??
Nearby observations being more similar than randomly paired ones.
![[Spatial autocorrelation patterns.png]]
++++

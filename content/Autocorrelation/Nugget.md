---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Nugget effect"
  - "Nugget variance"
status: seedling
---

# Nugget

**In one line:** the nugget is the semivariance a variogram shows at (nearly) zero distance, representing measurement error and variation at scales smaller than the closest sampling distance.

> [!info] Before this, it helps to know
> [[Variogram]] (where it appears)

## Start from zero
1. **In theory, two samples at the same spot should be identical,** so semivariance should start at 0.
2. **In practice it starts higher.** The jump is the nugget.
3. **Causes:** measurement error, and real variation over distances shorter than the sample spacing.
4. **Nugget/sill ratio:** the share of variance that is spatially unstructured. Near 1 means little spatial structure.
5. **In nlme correlation structures, `nugget = TRUE`** adds this parameter (`corExp(form = ~ x + y, nugget = TRUE)`).
6. **The name comes from gold mining:** nuggets make neighbouring ore samples differ sharply.

## See it
![[Variogram parts.png|700]]
*What to look at:* the fitted curve starts at 0.2, not at 0.

## In the course
[[Zuur et al. 2009 Ch7]].

## Common confusions
- **"A nugget means the variogram was miscomputed."** It is expected in real data.

## Explain it back
- What two things does the nugget represent?

*Pass test:* you can read the nugget from a variogram.

## Connections
- **Builds on:** [[Variogram]]
- **Leads to:** [[Sill]], [[Variogram Range]], [[Observation Error|Measurement Error]]
- **Part of:** [[MOC - Autocorrelation]]

## Flashcards

What is the nugget of a variogram?
??
The semivariance near zero distance, reflecting measurement error and sub-sampling-scale variation.
![[Variogram parts.png]]
++++

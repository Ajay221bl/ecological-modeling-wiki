---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - autocorrelation
aliases: []
status: seedling
---

# Correlogram vs Variogram

> [!summary] In plain words
> a correlogram plots similarity (correlation) against distance and falls as points get farther apart, while a variogram plots dissimilarity (semivariance) against distance and rises, so they are mirror images of the same spatial structure.

## The question
Should I draw a correlogram or a variogram?

## Built from
- [[Correlogram]] and [[Variogram]].
- [[Nugget]], [[Sill]], [[Variogram Range]]: variogram vocabulary.
- [[Spatial Correlation Functions]]: what a fitted variogram feeds.

## See it
![[Correlogram.png|700]]
*What to look at:* compare with the variogram figure below: one falls, the other rises.

## The reasoning, step by step
1. **Correlogram:** Moran's I (or correlation) by distance class. High at short distances, falling.
2. **Variogram:** semivariance by distance. Low at short distances, rising to the sill.
3. **Under stationarity,** semivariance = variance × (1 − correlation). One determines the other.
4. **Correlograms come from ecology's Moran tradition** (Diniz-Filho et al.) and have a clear significance test per class.
5. **Variograms come from geostatistics** (Zuur Ch7) and connect directly to nugget, sill, range and nlme correlation structures.
6. **Use a correlogram to describe and test pattern. Use a variogram to choose and check a correlation structure.**

| | Correlogram | Variogram |
|---|---|---|
| y-axis | Moran's I (similarity) | Semivariance (dissimilarity) |
| Shape under positive autocorrelation | Falls with distance | Rises to a sill |
| Tradition | Ecology, Moran's I | Geostatistics, kriging |
| Best for | Describing and testing pattern | Choosing a correlation structure |
| R | `sp.correlogram()`, `ncf::correlog()` | `gstat::variogram()`, `nlme::Variogram()` |

## So in practice
Before fitting a spatial GLS, draw the variogram of the OLS residuals. After fitting, draw it again for the normalised residuals.

## What would go wrong otherwise
Reading a rising variogram as "increasing autocorrelation with distance".

## Explain it back
- How are semivariance and correlation related under stationarity?

*Pass test:* you can translate between the two plots.

## Connections
- **Related:** [[Moran's I vs Geary's c]], [[How to detect and handle autocorrelation]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Autocorrelation]]

## Flashcards

How does a variogram's shape relate to a correlogram's?
??
The variogram rises where the correlogram falls; semivariance = variance × (1 − correlation).
![[Correlogram.png]]
++++

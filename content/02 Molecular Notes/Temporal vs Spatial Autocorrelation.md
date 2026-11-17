---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - autocorrelation
aliases: []
status: seedling
---

# Temporal vs Spatial Autocorrelation

> [!summary] In plain words
> temporal autocorrelation runs along one ordered dimension with a direction, while spatial autocorrelation spreads over two dimensions with no direction, so they use different tools that share the same logic.

## The question
What changes when I move from time to space?

## Built from
- [[Temporal Autocorrelation]] and [[Spatial Autocorrelation]].
- [[Autocorrelation Function]] and [[Correlogram]]: the detection tools.
- [[AR(1) Error Structure]] and [[Spatial Correlation Functions]]: the modelling tools.

## The reasoning, step by step
1. **Time is one-dimensional and ordered:** the past affects the present, not the reverse.
2. **Space is two-dimensional (or more) and has no natural order.** Influence can run both ways.
3. **Separation:** lag in time steps versus distance (and possibly direction).
4. **Detection and modelling tools differ, as the table shows.**
5. **Both assume stationarity** (and space usually isotropy).
6. **Spatio-temporal data** (sites revisited over years) can have both. Combine a site random effect or spatial structure with a temporal structure, or use smooths of space and time.

| | Temporal | Spatial |
|---|---|---|
| Dimension | 1, ordered | 2, unordered |
| Separation | Lag | Distance (and direction) |
| Detect | ACF, PACF, Durbin-Watson | Moran's I, correlogram, variogram, bubble plot |
| Model (nlme) | corAR1, corCAR1, corARMA | corExp, corGaus, corSpher, corRatio |
| Other models | AR terms, smooth of time | SAR, CAR, eigenvectors, smooth of coordinates |

## So in practice
Choose the diagnostic for the dimension in which your data were collected, and check both if sites were revisited over time.

## What would go wrong otherwise
Running acf() on spatial data sorted by site ID, where "lag" means nothing.

## Explain it back
- Why is there no single "lag" in space?

*Pass test:* you can choose tools for either dimension.

## Connections
- **Related:** [[Positive vs Negative Autocorrelation]], [[Correlogram vs Variogram]], [[How to detect and handle autocorrelation]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

Which nlme structures model temporal and spatial autocorrelation?
??
Temporal: corAR1, corCAR1, corARMA. Spatial: corExp, corGaus, corSpher, corRatio, corLin.
++++

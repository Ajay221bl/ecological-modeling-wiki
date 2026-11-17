---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - autocorrelation
aliases: []
status: seedling
---

# Moran's I vs Geary's c

> [!summary] In plain words
> both measure spatial autocorrelation from pairs of neighbours, but Moran's I is built from products of deviations from the mean and behaves like a correlation, while Geary's c is built from squared differences between neighbours and behaves like a variogram.

## The question
Which spatial autocorrelation statistic should I use, and why do they run in opposite directions?

## Built from
- [[Moran's I]] and [[Geary's c]].
- [[Spatial Weights Matrix]]: shared input.
- [[Variogram]]: Geary's c's relative.

## The reasoning, step by step
1. **Moran's I:** Σ wᵢⱼ (yᵢ − ȳ)(yⱼ − ȳ). Positive when neighbours are on the same side of the mean.
2. **Geary's c:** Σ wᵢⱼ (yᵢ − yⱼ)². Small when neighbours have similar values.
3. **Hence opposite directions.**
4. **Moran's I reflects global pattern.** Geary's c is more sensitive to differences between particular neighbours.
5. **They usually agree on the presence of autocorrelation.** Moran's I is far more common in ecology and in the course readings.

| | Moran's I | Geary's c |
|---|---|---|
| Built from | Products of deviations from the mean | Squared differences between neighbours |
| No autocorrelation | −1/(n−1) | 1 |
| Positive autocorrelation | Larger | Smaller (toward 0) |
| Analogous to | Correlation (correlogram) | Semivariance (variogram) |
| R | moran.test() | geary.test() |

**A worked example in numbers.** in the shared simulated example, the clustered variable had I = 0.83 (expected −0.008) and c = 0.15 (expected 1).

## So in practice
Use Moran's I by default, especially when comparing with published correlograms.

## What would go wrong otherwise
Reading a small Geary's c as "weak autocorrelation".

## Explain it back
- Why does Geary's c fall when autocorrelation rises?

*Pass test:* you can interpret both statistics.

## Connections
- **Related:** [[Correlogram vs Variogram]], [[Positive vs Negative Autocorrelation]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is the null expectation of Moran's I and of Geary's c?
??
Moran's I: −1/(n−1). Geary's c: 1.
++++

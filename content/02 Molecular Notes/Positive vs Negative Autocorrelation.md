---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - autocorrelation
aliases: []
status: seedling
---

# Positive vs Negative Autocorrelation

> [!summary] In plain words
> positive autocorrelation means neighbours are alike and is common, while negative autocorrelation means neighbours differ and is rare, and each leaves an opposite signature on every diagnostic.

## The question
How do I tell positive from negative autocorrelation and what does each suggest?

## Built from
- [[Positive Autocorrelation]] and [[Negative Autocorrelation]].
- [[Moran's I]], [[Geary's c]], [[Autocorrelation Function]]: the diagnostics.

## The reasoning, step by step
1. **Positive:** clumps on a map, smooth runs in a series.
2. **Negative:** checkerboard or alternating highs and lows.
3. **Read the statistics with the table below.**
4. **Processes:** positive from patchy environments, local dispersal, inertia. Negative from competition, territoriality, overcompensating population dynamics.
5. **Both can appear in one correlogram:** positive at short distance and negative at long distance along a gradient.

| | Positive | Negative |
|---|---|---|
| Moran's I | Above −1/(n−1) | Below −1/(n−1) |
| Geary's c | Below 1 | Above 1 |
| ACF lag 1 | Positive | Negative |
| Durbin-Watson | Below 2 | Above 2 |
| Effect on OLS SEs | Too small | Too large (conservative) |
| Ecological causes | Clumping, dispersal, inertia | Competition, spacing |

## So in practice
Read the sign before choosing a structure. Most nlme spatial structures assume positive correlation decaying with distance.

## What would go wrong otherwise
Treating Geary's c like Moran's I and reading c < 1 as negative autocorrelation.

## Explain it back
- What does negative autocorrelation do to OLS standard errors?

*Pass test:* you can read the sign from any diagnostic.

## Connections
- **Related:** [[Moran's I vs Geary's c]], [[Temporal vs Spatial Autocorrelation]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Autocorrelation]]

## Flashcards

On which side of 1 does Geary's c fall under positive autocorrelation?
??
Below 1.
++++

What does a Durbin-Watson statistic above 2 suggest?
??
Negative lag-1 autocorrelation.
++++

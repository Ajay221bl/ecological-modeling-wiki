---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Serial correlation"
  - "Autocorrelated"
  - "Dependence among observations"
status: seedling
---

# Autocorrelation

**In one line:** autocorrelation is the tendency of measurements that are close together, in space, time or relatedness, to be more similar (or sometimes less similar) than measurements far apart.

> [!info] Before this, it helps to know
> [[Correlation]] (the same idea, but a variable with itself) · [[Independence of Observations|Independence]] (the assumption it breaks) · [[Residual|Residuals]] (where it matters most)

## The everyday picture
Temperature today tells you a lot about temperature tomorrow and little about temperature in three months. A variable is "correlated with itself" across a gap, and the correlation fades as the gap grows.

## Start from zero
1. **Ordinary correlation compares two variables.** Autocorrelation compares one variable with itself at different locations or times.
2. **"Close" can mean distance in space, gap in time, or closeness on a phylogeny.**
3. **Mostly it is positive:** near things are alike. Sometimes negative: near things differ (competition, territoriality).
4. **It is everywhere in ecology** (McGill): environment, abundance, richness and traits are all autocorrelated.
5. **It matters for models because most models assume independent errors.** If residuals are autocorrelated, each observation carries less new information than the model thinks.
6. **Two separate questions:** is the *response* autocorrelated (often fine, the predictors may explain it), and are the *residuals* autocorrelated (a problem for inference)?
7. **It is also information:** the scale and shape of autocorrelation can reveal processes such as dispersal or patch size.

## See it
![[Spatial autocorrelation patterns.png|700]]
*What to look at:* the left grid has smooth patches, the middle grid is salt and pepper, the right grid alternates.

## Why it is this way
Almost every ecological dataset is collected in places and at times, so ignoring autocorrelation is the default mistake. Knowing what it is lets you check for it and decide whether it is a nuisance or a clue.

## In R
```r
set.seed(1); e <- as.numeric(arima.sim(list(ar = 0.7), n = 100))      # a series where each value remembers the last
round(c(lag1_corr = cor(e[-1], e[-100]), lag10_corr = cor(e[-(1:10)], e[1:90])), 2)
```

## In the course
Autocorrelation lab (pika hormones over elevation, lake ice cover over years; [[Course Website]]). [[Diniz-Filho et al. 2003]]. [[Dynamic Ecology Autocorrelation Post]]. [[Zuur et al. 2009 Ch6]] and [[Zuur et al. 2009 Ch7]].

## Common confusions
- **"Autocorrelation in the response means the model is wrong."** Only autocorrelation left in the residuals is a problem.
- **"Autocorrelation is only spatial."** Time and phylogeny produce it too.

## Explain it back
- What two kinds of "closeness" give autocorrelation in field data?

*Pass test:* you can define autocorrelation and say why it threatens inference.

## Connections
- **Builds on:** [[Correlation]], [[Independence of Observations|Independence]], [[Residual|Residuals]]
- **Leads to:** [[Spatial Autocorrelation]], [[Temporal Autocorrelation]], [[Residual Autocorrelation]], [[Pseudoreplication]]
- **Part of:** [[MOC - Autocorrelation]], molecular note [[Autocorrelation as Signal or Nuisance]], [[Why non-independence inflates false positives]]

## Flashcards

What is autocorrelation?
??
The correlation of a variable with itself across distance, time or relatedness: near observations tend to be more alike than distant ones.
![[Spatial autocorrelation patterns.png]]
++++

Which autocorrelation threatens a regression's inference?
??
Autocorrelation in the residuals.
++++

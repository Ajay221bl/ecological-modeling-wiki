---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Autocorrelation is the tendency of measurements that are close together, in space, time or relatedness, to be more similar (or sometimes less similar) than measurements far apart."
aliases:
  - "Serial correlation"
  - "Autocorrelated"
  - "Dependence among observations"
status: seedling
---

# Autocorrelation

Temperature today tells you a lot about temperature tomorrow and little about temperature in three months. **Autocorrelation** is that tendency of measurements close together, in space, time or relatedness, to be more similar, or sometimes less similar, than measurements far apart. Ordinary [[Correlation]] compares two variables; autocorrelation compares one variable with itself at different locations or times, and the correlation fades as the gap grows. It is usually positive, near things being alike, and sometimes negative, near things differing because of competition or territoriality ([[Positive Autocorrelation]], [[Negative Autocorrelation]]).

It is everywhere in ecology: environment, abundance, richness and traits are all autocorrelated, in space ([[Spatial Autocorrelation]]), in time ([[Temporal Autocorrelation]]) and across a phylogeny. It matters for models because most assume independent errors ([[Independence of Observations|Independence]]); if the [[Residual|Residuals]] are autocorrelated, each observation carries less new information than the model thinks, and the analysis suffers from [[Pseudoreplication]]. The figure shows smooth patches, salt and pepper, and alternation. In the code below a series where each value remembers the last has a correlation of 0.66 between neighbours, while values 10 steps apart are essentially unrelated (−0.24).

Two questions should be kept apart: is the response autocorrelated, which is often fine because the predictors may explain it, and are the residuals autocorrelated, which is a problem for inference ([[Residual Autocorrelation]]). Autocorrelation is also information, since its scale and shape can reveal dispersal or patch size. Almost every ecological dataset is collected in places and at times, so ignoring it is the default mistake. It is the subject of the autocorrelation lab, using pika hormones over elevation and lake ice cover over years, and of [[Diniz-Filho et al. 2003]], the [[Dynamic Ecology Autocorrelation Post]], [[Zuur et al. 2009 Ch6]] and [[Zuur et al. 2009 Ch7]] ([[Course Website]]). Autocorrelation is not only spatial, and autocorrelation in the response alone does not mean the model is wrong.

![[Spatial autocorrelation patterns.png|700]]
*What to look at:* the left grid has smooth patches, the middle grid is salt and pepper, the right grid alternates.

```r
set.seed(1); e <- as.numeric(arima.sim(list(ar = 0.7), n = 100))      # a series where each value remembers the last
round(c(lag1_corr = cor(e[-1], e[-100]), lag10_corr = cor(e[-(1:10)], e[1:90])), 2)
```

## Connections
- **Builds on:** [[Correlation]], [[Independence of Observations|Independence]], [[Residual|Residuals]]
- **Leads to:** [[Spatial Autocorrelation]], [[Temporal Autocorrelation]], [[Residual Autocorrelation]], [[Pseudoreplication]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[Autocorrelation as Signal or Nuisance]], [[Why non-independence inflates false positives]]

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

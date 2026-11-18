---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A random effect treats the differences among groups (sites, individuals, years) as draws from a common distribution, estimating that distribution's spread instead of each group's value separately."
aliases:
  - "Random effects"
  - "Group-level effect"
  - "Random factor"
  - "Varying effect"
status: seedling
---

# Random Effect

Instead of memorising the height of every student in a school, you can learn the average and the spread; any student is "the average plus a draw from that spread", and a new student can be guessed before you meet them. A **random effect** treats the differences among groups, such as sites, individuals or years, as draws from a common distribution, usually normal ([[Normal Distribution]], [[Grouping Variable|Grouping Factor]]). Each group j gets a [[Deviation|deviation]] bⱼ ~ Normal(0, σ²_b), and the model estimates one parameter, σ_b ([[Variance]]), rather than J separate group means.

The group deviations are then predicted and shrunk toward zero ([[Conditional Modes]], [[Shrinkage]]). A [[Random Intercept]] lets group baselines differ, and a [[Random Slope]] lets a [[Predictor Variable|predictor]]'s effect differ by group. Use a random effect when the groups are a sample from a larger population, you want to generalise beyond them, there are enough groups ([[How Many Levels for a Random Effect]]), or you need to account for [[Independence of Observations|non-independence]]. `ranef(m)` extracts the predicted deviations and `VarCorr(m)` the variances. In the code below the first four `sleepstudy` subjects sit +41, −78, −63 and +4 ms from the average, and the subject SD is 37 ms.

A random effect's variance can't be negative; when it is estimated as zero the fit is singular ([[Singular Fit]]). The concepts are from [[Harrison et al. 2018]], [[Zuur et al. 2009 Ch5]] and the linear [[Mixed Effects Model|mixed models]] lab ([[Course Website]]). Random effects are not just for variables you don't care about: their variance can be the main result, as with [[Intraclass Correlation|repeatability]] or heritability. And a factor with few levels need not be fixed: Oberpriller et al. (2022) suggest starting with a random effect and switching only if the fit is singular.

```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy); round(head(ranef(m)$Subject, 4), 1); round(attr(VarCorr(m)$Subject, "stddev"), 1)
```

## Connections
- **Builds on:** [[Normal Distribution]], [[Variance]], [[Grouping Variable|Grouping Factor]], [[Deviation]], [[Predictor Variable]], [[Independence of Observations]], [[Mixed Effects Model]], [[Intraclass Correlation]]
- **Leads to:** [[Random Intercept]], [[Random Slope]], [[Conditional Modes]], [[Variance Components]], [[How Many Levels for a Random Effect]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Fixed vs Random Effects]], [[Why use a random effect instead of a fixed effect]]

## Flashcards

What does a random effect estimate instead of each group's value?
??
The variance (spread) of the distribution the group effects are drawn from.
++++

What does ranef() return for an lmer model?
??
The predicted group-level deviations (conditional modes).
++++

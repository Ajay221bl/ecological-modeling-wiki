---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "The LKJ prior is a distribution over correlation matrices with one parameter η: η = 1 treats all correlation matrices as equally likely, and larger η favours correlations near zero."
aliases:
  - "LKJ prior"
  - "lkj()"
  - "LKJ correlation prior"
  - "Lewandowski-Kurowicka-Joe"
  - "class = cor"
status: seedling
---

# LKJ Prior

The **LKJ prior** is a distribution over correlation [[Matrix|matrices]] with one parameter η, used for the correlations among [[Random Effect|random effects]] such as intercept and slope by group ([[Correlated Random Intercepts and Slopes]], [[Prior Distribution]]). η = 1 is uniform over valid correlation matrices, so for a 2 × 2 matrix the single correlation is uniform on (−1, 1); η = 2 mildly prefers smaller correlations; larger η favours correlations near zero; and η < 1 favours strong correlations and is rarely used. The brms default for `cor` is lkj(1), and `prior(lkj(2), class = cor)` changes it.

For a 2 × 2 matrix the density of the correlation is [[Proportional To|proportional to]] (1 − r²)^(η − 1). The code below evaluates it at r = 0, 0.5 and 0.9: flat (1, 1, 1) for η = 1, (1, 0.75, 0.19) for η = 2, and (1, 0.32, 0.001) for η = 5, so a correlation of 0.9 is almost ruled out at η = 5.

It is named after Lewandowski, Kurowicka and Joe (2009) and is used for [[Random Slope|random slopes]] in the Bayesian [[Mixed Effects Model|mixed models]] lab ([[Course Website]], [[Bayesian GLMM]]). LKJ(1) does not assume correlations are zero; it is flat over all of them.

```r
d2 <- function(r, eta) (1 - r^2)^(eta - 1)        # LKJ density of the correlation in a 2 x 2 matrix, up to a constant
r <- c(0, 0.5, 0.9); round(rbind(eta1 = d2(r, 1), eta2 = d2(r, 2), eta5 = d2(r, 5)), 3)
```

## Connections
- **Builds on:** [[Correlated Random Intercepts and Slopes]], [[Prior Distribution]], [[Matrix]], [[Random Effect]], [[Proportional To]], [[Random Slope]], [[Mixed Effects Model]]
- **Leads to:** [[Bayesian GLMM]], [[Priors on Standard Deviations]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What does LKJ(1) imply for a 2 × 2 correlation matrix?
??
A uniform prior on the correlation between −1 and 1.
++++

What does a larger LKJ η do?
??
Concentrates prior mass on correlations near zero.
++++

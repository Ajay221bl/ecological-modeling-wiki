---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "LKJ prior"
  - "lkj()"
  - "LKJ correlation prior"
  - "Lewandowski-Kurowicka-Joe"
  - "class = cor"
status: seedling
---

# LKJ Prior

**In one line:** the LKJ prior is a distribution over correlation matrices with one parameter η: η = 1 treats all correlation matrices as equally likely, and larger η favours correlations near zero.

> [!info] Before this, it helps to know
> [[Correlated Random Intercepts and Slopes]] · [[Prior Distribution]]

## Start from zero
1. **Used for the correlations among random effects** (intercept and slope by group).
2. **η = 1:** uniform over valid correlation matrices. For a 2 × 2 matrix the single correlation is uniform on (−1, 1).
3. **η = 2:** mild preference for smaller correlations. brms default for `cor` is lkj(1).
4. **η < 1:** favours strong correlations; rarely used.
5. **Named after Lewandowski, Kurowicka and Joe (2009).**
6. **In brms:** `prior(lkj(2), class = cor)`.

## In R
```r
d2 <- function(r, eta) (1 - r^2)^(eta - 1)        # LKJ density of the correlation in a 2 x 2 matrix, up to a constant
r <- c(0, 0.5, 0.9); round(rbind(eta1 = d2(r, 1), eta2 = d2(r, 2), eta5 = d2(r, 5)), 3)
```

## In the course
Priors for random slopes in the Bayesian mixed models lab ([[Course Website]]).

## Common confusions
- **"LKJ(1) assumes correlations are zero."** It is flat over all correlations.

## Explain it back
- What does increasing η do?

*Pass test:* you can choose η for random-slope correlations.

## Connections
- **Builds on:** [[Correlated Random Intercepts and Slopes]], [[Prior Distribution]]
- **Leads to:** [[Bayesian GLMM]], [[Priors on Standard Deviations]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What does LKJ(1) imply for a 2 × 2 correlation matrix?
??
A uniform prior on the correlation between −1 and 1.
++++

What does a larger LKJ η do?
??
Concentrates prior mass on correlations near zero.
++++

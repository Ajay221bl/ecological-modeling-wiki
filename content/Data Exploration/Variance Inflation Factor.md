---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "VIF"
  - "GVIF"
  - "vif()"
status: seedling
---

# Variance Inflation Factor

**In one line:** the variance inflation factor of a predictor says how many times larger the variance of its coefficient is because of that predictor's overlap with the others.

> [!info] Before this, it helps to know
> [[Collinearity]] (the problem measured) · [[R-squared]] (used in its formula) · [[Standard Error]] (what gets inflated)

## The everyday picture
A tax on precision. With VIF = 1 you pay nothing. With VIF = 4 the variance of your slope estimate is four times what it would be if this predictor stood alone, so its standard error is doubled.

## A tiny example
Regress tree cover on shrub cover and elevation. Suppose R² = 0.80: the others explain 80% of tree cover.
- VIF = 1 / (1 − 0.80) = 5.
- The slope's variance is 5 times larger, its standard error √5 = 2.2 times larger.

## Start from zero
1. **Take one predictor, X_j.**
2. **Regress it on all the other predictors.** Record R²_j.
3. **VIF_j = 1 / (1 − R²_j).**
4. **R²_j = 0 gives VIF 1.** R²_j = 0.9 gives VIF 10.
5. **√VIF is the multiplier on the standard error.**
6. **Why it beats pairwise correlation:** it catches a predictor that is a combination of several others even when no single pair is strongly correlated.
7. **Thresholds are conventions.** Zuur and colleagues use 3 as a strict cut-off. Others use 5 or 10.
8. **Procedure:** drop the predictor with the largest VIF, recompute, repeat until all are below the threshold.
9. **Factors with several levels and interactions** get a generalised VIF (GVIF) from `car::vif`.

## In R
```r
library(car)
set.seed(6)
tree <- runif(100, 0, 60); shrub <- 30 - 0.4 * tree + rnorm(100, 0, 3); elev <- rnorm(100, 900, 50)
rich <- rpois(100, exp(2.3 - 0.02 * tree))
m <- lm(rich ~ tree + shrub + elev)
vif(m)
1 / (1 - summary(lm(tree ~ shrub + elev))$r.squared)     # the same number for tree, by hand
vif(lm(rich ~ tree + elev))                              # after dropping shrub: near 1
```

## In the course
Step 5 of the protocol ([[Zuur et al. 2010]]). `performance::check_collinearity()` gives the same for mixed models.

## Common confusions
- **"High VIF means the model is wrong."** It means the separate effects are poorly resolved.
- **"VIF matters for polynomial or interaction terms."** x and x² are correlated by construction. Centre x first and ignore VIF among such terms.

## Explain it back
- Compute VIF for R² = 0.75.
- What does √VIF tell you?

*Pass test:* you can compute a VIF from an R² and interpret it.

## Connections
- **Builds on:** [[Collinearity]], [[R-squared]]
- **Leads to:** [[Pairplot]], [[Centering]], [[Model Selection]]
- **Part of:** [[MOC - Data Exploration]]

## Flashcards

How is the VIF of predictor j computed?
??
1 / (1 − R²), where R² comes from regressing predictor j on all the other predictors.
++++

What does a VIF of 4 mean for the standard error?
??
The standard error is doubled (√4) compared with no collinearity.
++++

What VIF threshold do Zuur and colleagues recommend?
??
3, as a strict cut-off. 5 and 10 are common looser ones.
++++

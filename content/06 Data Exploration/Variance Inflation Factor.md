---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "The variance inflation factor of a predictor says how many times larger the variance of its coefficient is because of that predictor's overlap with the others."
aliases:
  - "VIF"
  - "GVIF"
  - "vif()"
status: seedling
---

# Variance Inflation Factor

Think of a tax on precision. The **variance inflation factor** (VIF) of a [[Predictor Variable|predictor]] says how many times larger the variance of its [[Regression Coefficient|coefficient]] is because of that predictor's overlap with the other predictors ([[Collinearity]]). To compute it, take one predictor, X_j, regress it on all the other predictors, and record that regression's [[R-squared]], R²_j. Then VIF_j = 1 / (1 − R²_j). With R²_j = 0 the VIF is 1, no tax at all; with R²_j = 0.9 it is 10. Because a standard error is the [[Square Root|square root]] of a variance, √VIF is the multiplier on the [[Standard Error]].

An example. Regress tree cover on shrub cover and elevation and suppose R² = 0.80: the other predictors explain 80% of tree cover. Then VIF = 1 / (1 − 0.80) = 5, so the slope's variance is 5 times larger and its standard error √5 ≈ 2.2 times larger than if tree cover stood alone. The code below computes VIFs with `car::vif()`, reproduces the tree cover value by hand from the auxiliary regression, and shows that after dropping shrub cover the VIFs fall to near 1. VIF beats pairwise correlations because it catches a predictor that is a combination of several others even when no single pair is strongly correlated ([[Pairplot]]).

Thresholds are conventions: Zuur and colleagues use 3 as a strict cut-off, others use 5 or 10 ([[Zuur et al. 2010]]). A common procedure is to drop the predictor with the largest VIF, recompute, and repeat until all are below the threshold, though which variable to keep should also be a biological choice ([[Model Selection]]). Factors with several levels and interactions get a generalised VIF (GVIF) from `car::vif()`, and `performance::check_collinearity()` does the same for [[Mixed Effects Model|mixed models]]. A high VIF does not mean the model is wrong, only that separate effects are poorly resolved. And ignore VIFs between x and x², or x and an interaction containing it: they are correlated by construction, which [[Centering]] x first largely removes.

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

## Connections
- **Builds on:** [[Collinearity]], [[R-squared]], [[Predictor Variable]], [[Square Root]]
- **Leads to:** [[Pairplot]], [[Centering]], [[Model Selection]], [[Regression Coefficient]], [[Mixed Effects Model]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

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

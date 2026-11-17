---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Variation partitioning"
  - "Partial regression (space vs environment)"
  - "Spatial vs environmental variance"
status: seedling
---

# Variance Partitioning

**In one line:** variance partitioning splits the variation a model explains into a part due only to environment, a part due only to space, a shared part, and an unexplained part.

> [!info] Before this, it helps to know
> [[R-squared]] (what is partitioned) · [[Collinearity]] (what creates the shared part) · [[Trend Surface Analysis]] (a source of spatial predictors)

## Start from zero
1. **Fit three models:** environment only (R²_E), space only (R²_S, using coordinates, trend surface or eigenvectors), and both (R²_ES).
2. **Pure environment = R²_ES − R²_S.**
3. **Pure space = R²_ES − R²_E.**
4. **Shared = R²_E + R²_S − R²_ES:** variation explained by spatially structured environment. It can't be attributed to either alone.
5. **Unexplained = 1 − R²_ES.**
6. **Use adjusted R²** to avoid rewarding more predictors (vegan's `varpart()` does this).
7. **A large shared fraction is common:** environment is itself spatially structured.

## In R
```r
set.seed(7); e <- runif(200); n <- runif(200); temp <- 10 + 8 * n + rnorm(200); rich <- 5 + 0.8 * temp + 3 * e + rnorm(200, 0, 2)
r2 <- function(f) summary(lm(f))$adj.r.squared; E <- r2(rich ~ temp); S <- r2(rich ~ e + n); ES <- r2(rich ~ temp + e + n)
round(c(pure_env = ES - S, pure_space = ES - E, shared = E + S - ES, unexplained = 1 - ES), 2)
```

## In the course
[[Diniz-Filho et al. 2003]] discuss partial regression for separating spatial and environmental effects.

## Common confusions
- **"The shared fraction is an interaction."** It is overlap from correlation between the predictor sets.

## Explain it back
- How is the shared fraction computed?

*Pass test:* you can partition variance between environment and space.

## Connections
- **Builds on:** [[R-squared]], [[Collinearity]], [[Trend Surface Analysis]]
- **Leads to:** [[Spatial Eigenvector Filtering]], [[Adjusted R-squared]]
- **Part of:** [[MOC - Autocorrelation]]

## Flashcards

In variance partitioning, what is the shared fraction?
??
Variation explained by spatially structured environment: R²_E + R²_S − R²_ES.
++++

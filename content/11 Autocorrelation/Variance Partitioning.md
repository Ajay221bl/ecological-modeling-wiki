---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Variance partitioning splits the variation a model explains into a part due only to environment, a part due only to space, a shared part, and an unexplained part."
aliases:
  - "Variation partitioning"
  - "Partial regression (space vs environment)"
  - "Spatial vs environmental variance"
status: seedling
---

# Variance Partitioning

**Variance partitioning** splits the variation a model explains into a part due only to environment, a part due only to space, a shared part and an unexplained part ([[R-squared]]). Fit three models: environment only (R²_E), space only (R²_S, using coordinates, a [[Trend Surface Analysis|trend surface]] or [[Spatial Eigenvector Filtering|eigenvectors]]) and both (R²_ES). Pure environment is R²_ES − R²_S, pure space R²_ES − R²_E, shared R²_E + R²_S − R²_ES, and unexplained 1 − R²_ES.

The shared fraction is variation explained by spatially structured environment, which can't be attributed to either alone, and a large shared fraction is common because environment is itself spatially structured ([[Collinearity]]). Use [[Adjusted R-squared]] to avoid rewarding more [[Predictor Variable|predictors]], as vegan's `varpart()` does. In the code below [[Species Richness|richness]] depends on a temperature that follows the north-south axis: pure environment explains 0.07, pure space 0.06, the shared part 0.38, and 0.48 is unexplained.

Diniz-Filho et al. discuss partial regression for separating spatial and environmental effects ([[Diniz-Filho et al. 2003]]). The shared fraction is not an interaction; it is overlap from correlation between the two sets of predictors.

```r
set.seed(7); e <- runif(200); n <- runif(200); temp <- 10 + 8 * n + rnorm(200); rich <- 5 + 0.8 * temp + 3 * e + rnorm(200, 0, 2)
r2 <- function(f) summary(lm(f))$adj.r.squared; E <- r2(rich ~ temp); S <- r2(rich ~ e + n); ES <- r2(rich ~ temp + e + n)
round(c(pure_env = ES - S, pure_space = ES - E, shared = E + S - ES, unexplained = 1 - ES), 2)
```

## Connections
- **Builds on:** [[R-squared]], [[Collinearity]], [[Trend Surface Analysis]], [[Predictor Variable]], [[Species Richness]]
- **Leads to:** [[Spatial Eigenvector Filtering]], [[Adjusted R-squared]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

In variance partitioning, what is the shared fraction?
??
Variation explained by spatially structured environment: R²_E + R²_S − R²_ES.
++++

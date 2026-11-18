---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Simultaneous autoregressive (SAR) models write each site's value, or its error, as depending on a weighted average of its neighbours' values or errors, with a parameter for the strength of that dependence."
aliases:
  - "SAR"
  - "Simultaneous autoregressive model"
  - "Spatial lag model"
  - "Spatial error model"
  - "errorsarlm()"
  - "lagsarlm()"
  - "spatialreg"
status: seedling
---

# Spatial Autoregressive Models

**Simultaneous autoregressive (SAR) models** write each site's value, or its error, as depending on a [[Weighted Mean|weighted average]] of its neighbours' values or errors, with a parameter for the strength of that dependence ([[Spatial Weights Matrix]]). The spatial error model is y = Xβ + u with u = λWu + ε, so autocorrelation lives in the errors, close in spirit to [[Generalized Least Squares]]. The spatial lag model is y = ρWy + Xβ + ε, so the response itself depends on neighbours' responses, for example through spillover. λ or ρ near 0 means no [[Spatial Autocorrelation|spatial dependence]].

In R use `spatialreg::errorsarlm(y ~ x, listw = lw)` or `lagsarlm()`. In the code below data simulated with λ = 0.6 and slope 0.5 are fitted by the error model, which recovers λ = 0.57 and slope 0.50.

In the lag model coefficients aren't simple marginal effects, because a change at one site spreads to its neighbours. SAR models are defined on a neighbour structure of areal units or grids rather than continuous distance, so the choice of W affects the results ([[Diniz-Filho et al. 2003]], [[Zuur et al. 2009 Ch7]]). The lag and error models are not interchangeable: they imply different processes and different interpretations of β. The CAR model is a close relative ([[Conditional Autoregressive Model]]), and [[Spatial Eigenvector Filtering]] an alternative.

```r
library(spdep); library(spatialreg); set.seed(5); xy <- cbind(runif(150), runif(150)); lw <- nb2listw(knn2nb(knearneigh(xy, 6)))
x <- rnorm(150); u <- as.numeric(solve(diag(150) - 0.6 * listw2mat(lw), rnorm(150))); y <- 1 + 0.5 * x + u
m <- errorsarlm(y ~ x, listw = lw); round(c(lambda = m$lambda, slope = coef(m)[["x"]]), 2)
```

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Generalized Least Squares]], [[Weighted Mean]], [[Spatial Autocorrelation]]
- **Leads to:** [[Conditional Autoregressive Model]], [[Spatial Eigenvector Filtering]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[SAR vs CAR Models]]

## Flashcards

What is a spatial error SAR model?
??
y = Xβ + u with u = λWu + ε: errors depend on a weighted average of neighbouring errors.
++++

What does the spatial lag SAR model assume?
??
The response depends directly on neighbours' responses: y = ρWy + Xβ + ε.
++++

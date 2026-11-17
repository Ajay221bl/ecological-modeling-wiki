---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
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

**In one line:** simultaneous autoregressive (SAR) models write each site's value, or its error, as depending on a weighted average of its neighbours' values or errors, with a parameter for the strength of that dependence.

> [!info] Before this, it helps to know
> [[Spatial Weights Matrix]] (defines the neighbours) · [[Generalized Least Squares]] (a close relative)

## Start from zero
1. **Spatial error SAR:** y = Xβ + u, with u = λWu + ε. Autocorrelation lives in the errors.
2. **Spatial lag SAR:** y = ρWy + Xβ + ε. The response itself depends on neighbours' responses (for example, through spillover).
3. **λ or ρ near 0:** no spatial dependence.
4. **In the lag model, coefficients aren't simple marginal effects,** because a change at one site spreads to neighbours.
5. **R:** `spatialreg::errorsarlm(y ~ x, listw = lw)`, `lagsarlm()`.
6. **Defined on a neighbour structure (areal units, grids),** rather than continuous distance.
7. **Choice of W affects the results.**

## In R
```r
library(spdep); library(spatialreg); set.seed(5); xy <- cbind(runif(150), runif(150)); lw <- nb2listw(knn2nb(knearneigh(xy, 6)))
x <- rnorm(150); u <- as.numeric(solve(diag(150) - 0.6 * listw2mat(lw), rnorm(150))); y <- 1 + 0.5 * x + u
m <- errorsarlm(y ~ x, listw = lw); round(c(lambda = m$lambda, slope = coef(m)[["x"]]), 2)
```

## In the course
[[Diniz-Filho et al. 2003]] mention autoregressive models among spatial methods. [[Zuur et al. 2009 Ch7]] (in passing).

## Common confusions
- **"SAR lag and error models are interchangeable."** They imply different processes and different interpretations of β.

## Explain it back
- Where does the autocorrelation live in a spatial error SAR?

*Pass test:* you can fit a spatial error model.

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Generalized Least Squares]]
- **Leads to:** [[Conditional Autoregressive Model]], [[Spatial Eigenvector Filtering]]
- **Part of:** [[MOC - Autocorrelation]], molecular note [[SAR vs CAR Models]]

## Flashcards

What is a spatial error SAR model?
??
y = Xβ + u with u = λWu + ε: errors depend on a weighted average of neighbouring errors.
++++

What does the spatial lag SAR model assume?
??
The response depends directly on neighbours' responses: y = ρWy + Xβ + ε.
++++

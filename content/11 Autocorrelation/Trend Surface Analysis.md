---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Trend surface"
  - "Polynomial of coordinates"
  - "Coordinates as predictors"
status: seedling
---

# Trend Surface Analysis

**In one line:** trend surface analysis adds a polynomial of the x and y coordinates as predictors, capturing broad spatial gradients in the response.

> [!info] Before this, it helps to know
> [[Polynomial|Polynomial Regression]] (the method) · [[Spatial Scale]] (it captures broad scales)

## Start from zero
1. **First order:** y ~ x + y (a tilted plane). Second order adds x², y² and x·y (a dome or saddle). Third order more.
2. **Captures large-scale trends,** not local patches.
3. **Removing a trend** can make the remaining residuals more stationary.
4. **Diniz-Filho et al.** list trend surfaces and partial regression as ways to account for macro-scale structure, shifting the explanation toward local scales.
5. **Smooths of coordinates in a GAM** (`s(east, north)`) are a flexible modern replacement.
6. **High-order polynomials misbehave at the edges.**

## In R
```r
set.seed(6); d <- data.frame(e = runif(200), n = runif(200)); d$rich <- 20 + 15 * d$n - 12 * d$n^2 + 5 * d$e + rnorm(200, 0, 2)
m1 <- lm(rich ~ e + n, d); m2 <- lm(rich ~ poly(e, n, degree = 2), d); round(c(R2_plane = summary(m1)$r.squared, R2_quadratic = summary(m2)$r.squared, dAIC = AIC(m1) - AIC(m2)), 2)
```

## In the course
[[Diniz-Filho et al. 2003]].

## Common confusions
- **"A trend surface removes all spatial autocorrelation."** Only the broad part. Local patches remain.

## Explain it back
- What does a second-order trend surface contain?

*Pass test:* you can fit and interpret a trend surface.

## Connections
- **Builds on:** [[Polynomial|Polynomial Regression]], [[Spatial Scale]]
- **Leads to:** [[Spatial Smooths]], [[Stationarity]], [[Variance Partitioning]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is trend surface analysis?
??
Using a polynomial of the spatial coordinates as predictors to capture broad gradients.
++++

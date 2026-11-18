---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Trend surface analysis adds a polynomial of the x and y coordinates as predictors, capturing broad spatial gradients in the response."
aliases:
  - "Trend surface"
  - "Polynomial of coordinates"
  - "Coordinates as predictors"
status: seedling
---

# Trend Surface Analysis

**Trend surface analysis** adds a polynomial of the x and y coordinates as predictors, capturing broad spatial gradients in the response ([[Polynomial|Polynomial Regression]]). A first-order surface, y ~ x + y, is a tilted plane; second order adds x², y² and x·y for a dome or saddle; third order adds more. It captures large-scale trends, not local patches ([[Spatial Scale]]), and removing a trend can make the remaining residuals more stationary ([[Stationarity]]).

Diniz-Filho et al. list trend surfaces and partial regression as ways to account for macro-scale structure, shifting the explanation toward local scales ([[Diniz-Filho et al. 2003]], [[Variance Partitioning]]). In the code below [[Species Richness|richness]] that peaks in the middle of the north-south axis is fitted with a plane (R² = 0.47) and a quadratic surface (R² = 0.55), and the quadratic is better by 26 AIC units.

Smooths of coordinates in a GAM, `s(east, north)`, are a flexible modern replacement ([[Spatial Smooths]]), and high-order polynomials misbehave at the edges. A trend surface does not remove all [[Spatial Autocorrelation|spatial autocorrelation]], only the broad part; local patches remain.

```r
set.seed(6); d <- data.frame(e = runif(200), n = runif(200)); d$rich <- 20 + 15 * d$n - 12 * d$n^2 + 5 * d$e + rnorm(200, 0, 2)
m1 <- lm(rich ~ e + n, d); m2 <- lm(rich ~ poly(e, n, degree = 2), d); round(c(R2_plane = summary(m1)$r.squared, R2_quadratic = summary(m2)$r.squared, dAIC = AIC(m1) - AIC(m2)), 2)
```

## Connections
- **Builds on:** [[Polynomial|Polynomial Regression]], [[Spatial Scale]], [[Species Richness]], [[Spatial Autocorrelation]]
- **Leads to:** [[Spatial Smooths]], [[Stationarity]], [[Variance Partitioning]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is trend surface analysis?
??
Using a polynomial of the spatial coordinates as predictors to capture broad gradients.
++++

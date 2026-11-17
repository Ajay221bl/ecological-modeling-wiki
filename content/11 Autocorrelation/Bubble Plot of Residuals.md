---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "A bubble plot draws each residual at its location, with bubble size showing magnitude and colour showing sign, so that clusters of same-sign residuals reveal spatial autocorrelation."
aliases:
  - "Bubble plot"
  - "Spatial residual plot"
  - "bubble()"
status: seedling
---

# Bubble Plot of Residuals

A **bubble plot** draws each residual at its location, with x and y the coordinates, bubble size showing the residual's magnitude and colour or fill its sign ([[Residual|Residuals]], [[Spatial Autocorrelation]]). For a good model the signs are mixed like salt and pepper; groups of positive residuals in one region and negative in another reveal spatial autocorrelation ([[Residual Autocorrelation]]).

Zuur et al. use it before computing variograms, with `gstat::bubble()` or ggplot using `size` and `colour`. The code below builds one in ggplot for residuals with an east-west wave, plotting |residual| as size and sign as colour.

It is quick and intuitive but needs a formal check, a [[Variogram]] or Moran's I, to judge how strong the pattern is; it belongs among the checks of [[Model Validation]] ([[Zuur et al. 2009 Ch7]]). Big bubbles are not the problem; clusters of the same sign are.

```r
library(ggplot2); set.seed(14); d <- data.frame(x = runif(80), y = runif(80)); d$r <- sin(4 * d$x) + rnorm(80, 0, 0.4)
p <- ggplot(d, aes(x, y, size = abs(r), colour = r > 0)) + geom_point(alpha = 0.7) + labs(colour = "positive", size = "|residual|"); class(p)[1]
```

## Connections
- **Builds on:** [[Residual|Residuals]], [[Spatial Autocorrelation]]
- **Leads to:** [[Variogram]], [[Model Validation]], [[Residual Autocorrelation]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What does a bubble plot of residuals show?
??
Each residual at its location, sized by magnitude and coloured by sign, to reveal spatial clustering.
++++

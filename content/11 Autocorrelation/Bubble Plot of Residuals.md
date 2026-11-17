---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Bubble plot"
  - "Spatial residual plot"
  - "bubble()"
status: seedling
---

# Bubble Plot of Residuals

**In one line:** a bubble plot draws each residual at its location, with bubble size showing magnitude and colour showing sign, so that clusters of same-sign residuals reveal spatial autocorrelation.

> [!info] Before this, it helps to know
> [[Residual|Residuals]] (what is plotted) · [[Spatial Autocorrelation]] (what it reveals)

## Start from zero
1. **x and y are the coordinates.** Bubble size is |residual|. Colour or fill is the sign.
2. **Good model:** signs mixed like salt and pepper.
3. **Problem:** groups of positive residuals in one region and negative in another.
4. **Zuur et al. use it** before computing variograms (`gstat::bubble()` or ggplot with `size` and `colour`).
5. **Quick and intuitive,** but needs a formal check (variogram, Moran's I) to judge how strong the pattern is.

## In R
```r
library(ggplot2); set.seed(14); d <- data.frame(x = runif(80), y = runif(80)); d$r <- sin(4 * d$x) + rnorm(80, 0, 0.4)
p <- ggplot(d, aes(x, y, size = abs(r), colour = r > 0)) + geom_point(alpha = 0.7) + labs(colour = "positive", size = "|residual|"); class(p)[1]
```

## In the course
[[Zuur et al. 2009 Ch7]].

## Common confusions
- **"Big bubbles are the problem."** Clusters of the same sign are the problem.

## Explain it back
- What pattern of colours suggests spatial autocorrelation?

*Pass test:* you can draw and read one.

## Connections
- **Builds on:** [[Residual|Residuals]], [[Spatial Autocorrelation]]
- **Leads to:** [[Variogram]], [[Model Validation]], [[Residual Autocorrelation]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What does a bubble plot of residuals show?
??
Each residual at its location, sized by magnitude and coloured by sign, to reveal spatial clustering.
++++

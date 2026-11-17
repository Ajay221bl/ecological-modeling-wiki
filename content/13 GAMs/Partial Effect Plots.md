---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Partial effects"
  - "plot.gam"
  - "Smooth plots"
  - "Component plots"
  - "draw() plots"
status: seedling
---

# Partial Effect Plots

**In one line:** a partial effect plot shows one smooth term's contribution to the linear predictor across its predictor, with a confidence band, holding the other terms aside.

> [!info] Before this, it helps to know
> [[Smoother]] · [[Confidence Envelopes]]

## Start from zero
1. **`plot(m, pages = 1, shade = TRUE)`** in mgcv, or `gratia::draw(m)`.
2. **The y-axis is on the link scale** and centred at zero (the smooth's contribution, not the predicted response).
3. **`seWithMean = TRUE`** includes intercept uncertainty in the band.
4. **Rug marks** show where data are; trust the curve where they are dense.
5. **For response-scale plots,** predict on a grid with other variables fixed and back-transform.
6. **Where the band includes zero everywhere,** the term adds little.

## In R
```r
library(mgcv); set.seed(15); d <- data.frame(x = runif(200)); d$y <- rpois(200, exp(1 + sin(2 * pi * d$x))); m <- gam(y ~ s(x), poisson, data = d, method = "REML")
p <- plot(m, select = 1); round(range(p[[1]]$fit), 2)       # centred contributions on the log scale
```

## In the course
GAM and HGAM labs with gratia's `draw()` ([[Course Website]]). [[Pedersen et al. 2019]].

## Common confusions
- **"The y-axis is the predicted count."** It is the centred contribution on the link scale.

## Explain it back
- Why is a partial effect centred at zero?

*Pass test:* you can read and redraw partial effects.

## Connections
- **Builds on:** [[Smoother]], [[Confidence Envelopes]]
- **Leads to:** [[gratia]], [[Prediction from a GAM]], [[Derivatives of a Smooth]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What scale is the y-axis of a mgcv partial effect plot on?
??
The link scale, centred at zero.
++++

---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A partial effect plot shows one smooth term's contribution to the linear predictor across its predictor, with a confidence band, holding the other terms aside."
aliases:
  - "Partial effects"
  - "plot.gam"
  - "Smooth plots"
  - "Component plots"
  - "draw() plots"
status: seedling
---

# Partial Effect Plots

A **partial effect plot** shows one smooth term's contribution to the [[Linear Predictor|linear predictor]] across its [[Predictor Variable|predictor]], with a confidence band, holding the other terms aside ([[Smoother]], [[Confidence Envelopes]]). Draw them with `plot(m, pages = 1, shade = TRUE)` in mgcv or `gratia::draw(m)` ([[gratia]]). The y-axis is on the [[Link Scale|link scale]] and centred at zero: it is the smooth's contribution, not the predicted response ([[Link Function]]).

`seWithMean = TRUE` includes intercept uncertainty in the band. Rug marks show where the data are, so trust the curve where they are dense. Where the band includes zero everywhere, the term adds little. For response-scale plots, predict on a grid with other variables fixed and [[Back-transformation|back-transform]] ([[Prediction from a GAM]]). In the code below a Poisson smooth's [[Holding Other Variables Constant|partial effect]] runs from −0.90 to 1.13 on the log scale, centred contributions that multiply the mean count by about 0.4 to 3.1.

The GAM and [[Hierarchical GAM|HGAM]] labs use gratia's `draw()` ([[Course Website]], [[Pedersen et al. 2019]]). The y-axis is not the predicted count; it is the centred contribution on the link scale.

```r
library(mgcv); set.seed(15); d <- data.frame(x = runif(200)); d$y <- rpois(200, exp(1 + sin(2 * pi * d$x))); m <- gam(y ~ s(x), poisson, data = d, method = "REML")
p <- plot(m, select = 1); round(range(p[[1]]$fit), 2)       # centred contributions on the log scale
```

## Connections
- **Builds on:** [[Smoother]], [[Confidence Envelopes]], [[Linear Predictor]], [[Predictor Variable]], [[Link Scale]], [[Back-transformation]], [[Holding Other Variables Constant]], [[Hierarchical GAM]]
- **Leads to:** [[gratia]], [[Prediction from a GAM]], [[Derivatives of a Smooth]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What scale is the y-axis of a mgcv partial effect plot on?
??
The link scale, centred at zero.
++++

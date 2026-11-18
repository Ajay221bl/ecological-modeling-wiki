---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A LOESS smoother draws a flexible curve through a scatterplot by fitting many small regressions, each using only the points near one spot."
aliases:
  - "LOESS"
  - "Loess"
  - "Lowess"
  - "Local regression"
  - "Locally weighted regression"
  - "Span"
  - "loess()"
  - "lo()"
  - "Smoother on a scatterplot"
  - "geom_smooth()"
status: seedling
---

# LOESS Smoother

Feel your way along a bumpy road in the dark with a short plank: at each step you lay the plank on the ground under your feet and note its tilt, ignoring hills far away. A **LOESS smoother** (locally weighted regression, also written lowess) draws a flexible curve through a [[Scatterplot]] the same way, by fitting many small regressions, each using only the points near one spot. Pick a target x; take the nearest fraction of the data, called the *span*, say 75%; weight those points so nearer ones count more; fit a small [[Weighted Regression|weighted regression]] ([[Linear Regression]]) and keep its value at the target. Then slide to the next x and repeat, and join the values. The simplest version of the idea is a moving [[Mean]].

The span sets the wiggliness. A small span follows every bump; a large span approaches a [[Equation of a Line|straight line]]. The figure and code below show the same points with spans of 0.75 and 0.2. R's `loess()` uses a span of 0.75 by default, fits local lines or quadratics, and weights neighbours with a *tricube* kernel. The span is chosen by eye or by [[Cross-validation]]; picking the span with the smallest residual error just picks the most overfitted curve. In ggplot2, `geom_smooth()` draws a LOESS curve for small datasets but switches to a GAM above 1,000 points.

In exploration a LOESS curve shows the shape of a relationship without your having to assume one, which is why Zuur's scatterplots and pairplots carry them ([[Zuur et al. 2009 Ch2]]). But it is a guide for the eye, not a model with interpretable parameters. For inference, use a [[Generalized Additive Model]], which estimates smoothness from the data, typically with a [[Penalized Regression Spline]]. Zuur's Chapter 3 bridges the two, building its first additive models from LOESS smoothers with the gam package's `lo(x, span = 0.5)` ([[Smoother]]).

![[LOESS spans.png|700]]
*What to look at:* the same points with three spans, from wiggly to nearly straight.

```r
set.seed(10)
x <- runif(100, 0, 10); y <- sin(x) + 0.2 * x + rnorm(100, 0, 0.4)
plot(x, y)
lo <- loess(y ~ x, span = 0.75); xs <- seq(0, 10, 0.1); lines(xs, predict(lo, data.frame(x = xs)), lwd = 2)
lines(xs, predict(loess(y ~ x, span = 0.2), data.frame(x = xs)), col = 2)    # wigglier
library(ggplot2); p <- ggplot(data.frame(x, y), aes(x, y)) + geom_point() + geom_smooth(method = "loess", span = 0.5)
```

## Connections
- **Builds on:** [[Scatterplot]], [[Linear Regression]], [[Equation of a Line]]
- **Leads to:** [[Smoother]], [[Generalized Additive Model]], [[Penalized Regression Spline]], [[Cross-validation]], [[Weighted Regression]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

How does a LOESS smoother work?
??
At each x it fits a small weighted regression to nearby points and keeps the fitted value, then joins these values into a curve.
![[LOESS spans.png]]
++++

What does the span of a LOESS smoother control?
??
The share of data used in each local fit, and so how wiggly the curve is.
++++

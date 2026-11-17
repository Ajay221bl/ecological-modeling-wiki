---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
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

**In one line:** a LOESS smoother draws a flexible curve through a scatterplot by fitting many small regressions, each using only the points near one spot.

> [!info] Before this, it helps to know
> [[Scatterplot]] (what it is drawn on) · [[Linear Regression]] (what is fitted locally) · [[Mean]] (a moving average is the simplest case)

## The everyday picture
Feeling your way along a bumpy road in the dark with a short plank. At each step you lay the plank on the ground under your feet and note its tilt. The plank ignores hills far away and follows only the stretch it is resting on.

## Start from zero
1. **Pick a target x.**
2. **Take the nearest fraction of the data** (the span, say 75%).
3. **Weight them:** nearer points count more.
4. **Fit a small weighted regression and keep its value at the target.**
5. **Slide to the next x and repeat.** Join the values.
6. **Span sets the wiggliness.** Small span follows every bump. Large span approaches a straight line.
7. **The details:** R's `loess()` uses a span of 0.75 by default, fits local lines or quadratics, and weights neighbours with a tricube kernel.
8. **Choosing the span** is done by eye or cross-validation, unlike mgcv, which chooses smoothness automatically. Zuur et al. (2009 Ch3) build their first GAMs from LOESS smoothers with the gam package's `lo(x, span = 0.5)`.
9. **Why use it in exploration:** it shows the shape of a relationship without your having to assume one. *It is a guide for the eye, not a model with interpretable parameters.*

## See it
![[LOESS spans.png|700]]
*What to look at:* the same points with three spans, from wiggly to nearly straight.

## In R
```r
set.seed(10)
x <- runif(100, 0, 10); y <- sin(x) + 0.2 * x + rnorm(100, 0, 0.4)
plot(x, y)
lo <- loess(y ~ x, span = 0.75); xs <- seq(0, 10, 0.1); lines(xs, predict(lo, data.frame(x = xs)), lwd = 2)
lines(xs, predict(loess(y ~ x, span = 0.2), data.frame(x = xs)), col = 2)    # wigglier
library(ggplot2); p <- ggplot(data.frame(x, y), aes(x, y)) + geom_point() + geom_smooth(method = "loess", span = 0.5)
```

## In the course
Zuur's scatterplots and pairplots carry LOESS curves ([[Zuur et al. 2009 Ch2]]). Zuur's Chapter 3 uses LOESS to introduce additive models ([[Smoother]]).

## Common confusions
- **"The LOESS curve is the model."** It is exploration. For inference use a GAM, which chooses smoothness from the data.
- **"The smallest residual error means the best span."** It means the most overfitted curve.
- **"geom_smooth() always draws LOESS."** It switches to a GAM above 1,000 points.

## Explain it back
- What does the span control?

*Pass test:* you can explain LOESS as sliding local regressions.

## Connections
- **Builds on:** [[Scatterplot]], [[Linear Regression]]
- **Leads to:** [[Smoother]], [[Generalized Additive Model]], [[Penalized Regression Spline]], [[Cross-validation]]
- **Part of:** [[MOC - Data Exploration]]

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

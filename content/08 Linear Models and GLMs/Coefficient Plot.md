---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A coefficient plot shows each model coefficient as a dot with a horizontal line for its interval, stacked in rows beside a vertical line at zero."
aliases:
  - "Dot-and-whisker plot"
  - "Forest plot"
  - "Caterpillar plot"
status: seedling
---

# Coefficient Plot

Picture a row of darts with their scatter drawn in: at a glance you see which are far from the zero line, which straddle it, and how tightly each is grouped. A **coefficient plot** shows each model coefficient that way: one row per coefficient, a dot at the estimate, a horizontal whisker across its 95% interval, and a vertical reference line at zero, or at 1 for ratios ([[Regression Coefficient]], [[Confidence Interval]]). An interval clear of zero means the direction is well supported; a long whisker means little information.

It beats a table because the size, direction and uncertainty of all the effects are compared at once ([[Effect Size]]). To make the comparison fair, standardise the [[Predictor Variable|predictors]] first so the coefficients share a scale ([[Scaling Predictors]]), and usually drop the intercept. The code below fits fuel economy against [[Standardizing|standardised]] weight, horsepower and quarter-mile time, gets the estimates and intervals with [[tidy()]], and builds the plot with `geom_pointrange()`.

The same plot is reused for model-averaged and Bayesian estimates, where the whiskers become [[Credible Interval|credible intervals]] ([[Posterior Summary]], [[Course Website]]). The confusion to avoid is reading a longer whisker as a bigger effect; it means more uncertainty.

```r
library(broom); library(ggplot2)
m <- lm(mpg ~ scale(wt) + scale(hp) + scale(qsec), data = mtcars)
td <- tidy(m, conf.int = TRUE); td <- td[td$term != "(Intercept)", ]; td[, c("term", "estimate", "conf.low", "conf.high")]
p <- ggplot(td, aes(estimate, term)) + geom_vline(xintercept = 0, linetype = 2) + geom_pointrange(aes(xmin = conf.low, xmax = conf.high))
```

## Connections
- **Builds on:** [[Regression Coefficient]], [[Confidence Interval]], [[tidy()]], [[Predictor Variable]], [[Standardizing]]
- **Leads to:** [[Effect Size]], [[Scaling Predictors]], [[Posterior Summary]], [[Credible Interval]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does a coefficient (dot-and-whisker) plot display?
??
Each coefficient's estimate as a point with its interval as a line, against a reference line at zero.
++++

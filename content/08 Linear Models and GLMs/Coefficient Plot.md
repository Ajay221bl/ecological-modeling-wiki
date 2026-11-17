---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Dot-and-whisker plot"
  - "Forest plot"
  - "Caterpillar plot"
status: seedling
---

# Coefficient Plot

**In one line:** a coefficient plot shows each model coefficient as a dot with a horizontal line for its interval, stacked in rows beside a vertical line at zero.

> [!info] Before this, it helps to know
> [[Regression Coefficient]] (the dots) · [[Confidence Interval]] (the whiskers) · [[tidy()]] (how to get the numbers)

## The everyday picture
A row of darts with their scatter drawn in. You see at a glance which darts are far from the zero line, which straddle it and how tightly each is grouped.

## Start from zero
1. **One row per coefficient.**
2. **Dot at the estimate.**
3. **Whisker across the 95% interval.**
4. **Vertical reference line at zero** (or at 1 for ratios).
5. **Reading it:** an interval clear of zero means the direction is well supported. A long whisker means little information.
6. **Why it beats a table:** size, direction and uncertainty of all effects are compared at once.
7. **Make it fair:** standardise the predictors first so the coefficients share a scale, and usually drop the intercept.

## In R
```r
library(broom); library(ggplot2)
m <- lm(mpg ~ scale(wt) + scale(hp) + scale(qsec), data = mtcars)
td <- tidy(m, conf.int = TRUE); td <- td[td$term != "(Intercept)", ]; td[, c("term", "estimate", "conf.low", "conf.high")]
p <- ggplot(td, aes(estimate, term)) + geom_vline(xintercept = 0, linetype = 2) + geom_pointrange(aes(xmin = conf.low, xmax = conf.high))
```

## In the course
Made in the regression lab and reused for model-averaged and Bayesian estimates ([[Course Website]]).

## Common confusions
- **"Longer whisker means bigger effect."** It means more uncertainty.

## Explain it back
- Why standardise predictors before drawing this plot?

*Pass test:* you can build a coefficient plot from `tidy()`.

## Connections
- **Builds on:** [[Regression Coefficient]], [[Confidence Interval]], [[tidy()]]
- **Leads to:** [[Effect Size]], [[Scaling Predictors]], [[Posterior Summary]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does a coefficient (dot-and-whisker) plot display?
??
Each coefficient's estimate as a point with its interval as a line, against a reference line at zero.
++++

---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Cook's distance measures how much all of a model's fitted values would change if one observation were deleted."
aliases:
  - "Cook's D"
  - "cooks.distance()"
  - "Influence"
  - "Influential Observation"
  - "Influential point"
status: seedling
---

# Cook's Distance

Remove one person from a tug-of-war team and see how far the rope moves: take out a child at the back and nothing shifts; take out the anchor and the whole rope slides. **Cook's distance** measures how much all of a model's fitted values would change if one observation were deleted. Conceptually, fit the model with all n observations, delete observation i and refit, and measure how far the fitted values moved, scaled by the model's error variance and number of coefficients; that is Dᵢ. In practice it is computed from each point's residual and [[Leverage]] without refitting ([[Linear Regression]]).

Influence is leverage times discrepancy. A big [[Residual]] near the middle of X cannot tilt the line, and a high-leverage point lying on the line does not need to. The code below shows both kinds. Point 21 sits at x = 30, far from the other x values, and far below the trend; its Cook's distance is about 18.5, against a maximum of 0.04 for the ordinary points, and removing it changes the slope from 0.10 to 0.58. Point 22 has a large residual but sits in the middle of x; its Cook's distance is 0.3, and removing it barely changes anything.

Rules of thumb: Zuur looks closely at D above 1, others use 4/n, and values that stand well clear of the rest deserve a look whatever the cut-off ([[Zuur et al. 2009 Ch2]]). A large Cook's distance means investigate, not delete: is the point an error, or from a different population? Refit without it and report both if conclusions change, a small [[Sensitivity Analysis]]. Cook's distance appears in the standard diagnostic plots for linear models ([[plot() Diagnostics for lm]]), and the relation between outliers, leverage and influence is drawn together in [[Outlier, Leverage and Influence]] ([[Outlier]]).

```r
set.seed(10)
x <- c(runif(20, 0, 10), 30, 5); y <- 2 + 0.5 * x + rnorm(22)
y[21] <- 5          # high leverage AND far off the trend
y[22] <- 12         # big residual but in the middle of x
m <- lm(y ~ x); d <- cooks.distance(m)
round(d[c(21, 22)], 2); round(max(d[1:20]), 2)
rbind(all = coef(m), without_21 = coef(lm(y ~ x, subset = -21)), without_22 = coef(lm(y ~ x, subset = -22)))
```
Point 21 has a Cook's distance far above the rest and removing it changes the slope. Point 22 has a large residual but little influence.

## Connections
- **Builds on:** [[Leverage]], [[Residual]]
- **Leads to:** [[plot() Diagnostics for lm]], [[Outlier]], [[Sensitivity Analysis]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]], molecular note [[Outlier, Leverage and Influence]]

## Flashcards

What does Cook's distance measure?
??
How much the model's fitted values change when one observation is removed.
++++

What two properties combine to make an observation influential?
??
High leverage and a large residual.
++++

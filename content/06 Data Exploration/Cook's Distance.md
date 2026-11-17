---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Cook's D"
  - "cooks.distance()"
  - "Influence"
  - "Influential Observation"
  - "Influential point"
status: seedling
---

# Cook's Distance

**In one line:** Cook's distance measures how much all of a model's fitted values would change if one observation were deleted.

> [!info] Before this, it helps to know
> [[Leverage]] (power to pull) · [[Residual]] (how far off the line) · [[Linear Regression]] (the fit)

## The everyday picture
Removing one person from a tug-of-war team to see how far the rope moves. Take out a child at the back and nothing shifts. Take out the anchor and the whole rope slides. Cook's distance is how far the rope moves for each person.

## Start from zero
1. **Fit the model with all n observations.**
2. **Delete observation i and refit.**
3. **Measure how far the fitted values moved,** scaled by the model's error variance and number of coefficients.
4. **That is Dᵢ.** In practice it is computed from the residual and the leverage without refitting.
5. **Influence = leverage × discrepancy.** *Why both are needed:* a big residual near the middle of X can't tilt the line, and a high-leverage point on the line doesn't need to.
6. **Rules of thumb:** look closely at D above 1 (Zuur), or at values that stand well clear of the rest. Some use 4/n.
7. **Then investigate the point.** Error? Different population? Refit without it and report both if conclusions change.

## In R
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

## In the course
[[Zuur et al. 2009 Ch2]] uses Cook's distance to check for influential observations.

## Common confusions
- **"Large Cook's distance means delete."** It means investigate.
- **"A large residual is an influential point."** Not unless it also has leverage.

## Explain it back
- Which two ingredients make up influence?

*Pass test:* you can tell an outlier, a high-leverage point and an influential point apart.

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

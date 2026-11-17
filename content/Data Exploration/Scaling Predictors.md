---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Scaling"
  - "Rescaling"
  - "Dividing by the standard deviation"
status: seedling
---

# Scaling Predictors

**In one line:** scaling a predictor means dividing it by a constant, usually its standard deviation, so that one unit becomes a typical-sized difference.

> [!info] Before this, it helps to know
> [[Standard Deviation]] (the usual divisor) · [[Slope]] (what changes) · [[Centering]] (its usual partner)

## The everyday picture
Converting prices to "days of wages". A house and a loaf of bread are hard to compare in dollars. Expressed as days of typical pay, both are on a scale where 1 means the same thing.

## A tiny example
Elevation in metres has slope −0.02 species per metre. Tree cover in percent has slope −0.3 per percent. Which matters more? You can't tell: a metre and a percent aren't comparable. If elevation's SD is 60 m and cover's is 15%, the per-SD slopes are −1.2 and −4.5. Now they can be compared.

## Start from zero
1. **Pick the constant.** The standard deviation is standard. A meaningful unit (per 100 m, per decade) is also fine.
2. **Divide every value by it.**
3. **The slope is multiplied by that constant.** It now means "change in Y per SD of x".
4. **The fit doesn't change.** Predictions, t-values and p-values are identical.
5. **Why do it: comparability.** Slopes of different predictors are on a common footing.
6. **Why do it: numerics.** Optimisers struggle when one predictor ranges over 0.001 and another over 100 000. `lmer` and `glmer` warn "predictor variables are on very different scales".
7. **Why do it: priors.** One default prior such as Normal(0, 1) is sensible for all slopes when all predictors have SD 1.

## In R
```r
set.seed(17)
d <- data.frame(elev = rnorm(80, 900, 60), tree = rnorm(80, 30, 15))
d$rich <- 25 - 0.02 * d$elev - 0.3 * d$tree + rnorm(80, 0, 2)
coef(lm(rich ~ elev + tree, d))[-1]                                  # per metre, per percent
coef(lm(rich ~ I(elev / sd(elev)) + I(tree / sd(tree)), d))[-1]      # per SD: comparable
summary(lm(rich ~ elev, d))$coefficients[2, 3]; summary(lm(rich ~ I(elev / sd(elev)), d))$coefficients[2, 3]   # same t
```

## In the course
`scale()` is applied to predictors in the GLMM and Bayesian labs ([[Course Website]]).

## Common confusions
- **"Scaling changes significance."** It changes units only.
- **"Scaled slopes rank importance for good."** They depend on the SD of x in this sample, which another study may not share.

## Explain it back
- What does a slope mean after dividing x by its SD?

*Pass test:* you can convert a raw slope to a per-SD slope.

## Connections
- **Builds on:** [[Standard Deviation]], [[Slope]]
- **Leads to:** [[Standardizing]], [[Effect Size]], [[Prior Distribution]], [[Convergence Warnings]]
- **Part of:** [[MOC - Data Exploration]]

## Flashcards

What does scaling a predictor by its SD do to its slope?
??
Multiplies it by the SD, so it becomes the change in Y per one SD of x.
++++

Name two reasons to scale predictors.
??
Slopes become comparable across predictors, and fitting algorithms and default priors behave better.
++++

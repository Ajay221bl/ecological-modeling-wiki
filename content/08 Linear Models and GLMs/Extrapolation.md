---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Extrapolating"
  - "Predicting beyond the data"
  - "Interpolation"
status: seedling
---

# Extrapolation

**In one line:** extrapolation is using a model to predict for predictor values outside the range of the data it was fitted to.

> [!info] Before this, it helps to know
> [[Predicting New Data]] (the general task) · [[Linearity]] (which is only checked inside the range)

## The everyday picture
A child grows 6 cm a year from age 5 to 10. Extend the line and at 40 they are 2.8 metres tall. The line was a fine summary where there were data and nonsense beyond.

## Start from zero
1. **A model's form is checked only where there are data.**
2. **Beyond that range it is pure assumption** that the same form continues.
3. **Straight lines are especially dangerous:** they continue forever, through zero and past any ceiling.
4. **The interval widens but not enough.** It reflects uncertainty in the coefficients, assuming the form is right. It can't reflect the chance that the form changes.
5. **Hidden extrapolation:** with several predictors, a combination can be unsampled even when each value alone is in range (high elevation and high tree cover, say).
6. **Interpolation** is predicting within the range and is far safer.
7. **Guard rails:** show the data range on plots (a rug), predict only within it, and prefer mechanistic forms with sensible limits when you must go beyond.

## In R
```r
set.seed(12); age <- runif(40, 5, 10); height <- 110 + 6 * (age - 5) + rnorm(40, 0, 3)
m <- lm(height ~ age); predict(m, data.frame(age = c(8, 40)), interval = "prediction")     # second row is confidently absurd
```

## In the course
A warning in [[Guthery and Bingham 2007]] and [[Hobbs and Hooten 2015 Ch2]].

## Common confusions
- **"A narrow interval means the extrapolation is safe."** The interval assumes the model form holds.

## Explain it back
- What is hidden extrapolation?

*Pass test:* you can recognise extrapolation in one and in several dimensions.

## Connections
- **Builds on:** [[Predicting New Data]]
- **Leads to:** [[Forecast]], [[Rug Plot]], [[Mechanistic Model]], [[Leverage]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is extrapolation?
??
Predicting for predictor values or combinations outside the range of the fitting data.
++++

Why can't prediction intervals be trusted when extrapolating?
??
They assume the fitted functional form continues to hold outside the data.
++++

---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Baseline level"
  - "Treatment contrasts"
  - "Reference category"
  - "relevel()"
status: seedling
---

# Reference Level

**In one line:** the reference level is the category of a factor that a model uses as its baseline, against which every other category's coefficient is measured.

> [!info] Before this, it helps to know
> [[Dummy Coding]] (which creates it) · [[Intercept]] (which holds its mean)

## The everyday picture
Sea level. Mountain heights are all "metres above sea level". Change the reference to the valley floor and every number changes, while the mountains stay the same height.

## Start from zero
1. **R picks the first level alphabetically** unless told otherwise.
2. **The intercept is the reference level's mean** (with other predictors at zero).
3. **Each other coefficient is "this level minus reference".**
4. **This scheme is called treatment contrasts,** R's default.
5. **Choose a meaningful reference:** the control, the unburned, the commonest class. `relevel(f, ref = "control")` or `factor(x, levels = c(...))`.
6. **Changing the reference changes the coefficients and their p-values, but not the fit.** Predictions are identical.
7. **Why this matters when reading output:** `burnyes` in a table means "burned compared with not burned". A missing level name tells you which is the reference.

## In R
```r
d <- data.frame(trt = factor(rep(c("burn", "control", "graze"), each = 4)), y = c(8, 9, 10, 9, 5, 6, 5, 4, 7, 6, 8, 7))
coef(lm(y ~ trt, d))                                     # reference is "burn" (alphabetical)
d$trt2 <- relevel(d$trt, ref = "control"); coef(lm(y ~ trt2, d))      # now differences from control
all.equal(fitted(lm(y ~ trt, d)), fitted(lm(y ~ trt2, d)))            # same fit
```

## In the course
Linear regression lab part 2 ([[Course Website]]).

## Common confusions
- **"A non-significant level coefficient means that level doesn't matter."** It means it doesn't differ clearly from the reference. It may differ from other levels.

## Explain it back
- How do you change the reference level in R?

*Pass test:* you can tell which level is the reference from a coefficient table.

## Connections
- **Builds on:** [[Dummy Coding]], [[Intercept]]
- **Leads to:** [[Sum-to-zero Contrasts]], [[Factors in R]], [[Pairwise Comparisons]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What does the intercept represent with a treatment-coded factor?
??
The expected response for the reference level.
++++

Does changing the reference level change the model's predictions?
??
No. Only the coefficients and what they compare.
++++

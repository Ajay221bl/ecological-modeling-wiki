---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The reference level is the category of a factor that a model uses as its baseline, against which every other category's coefficient is measured."
aliases:
  - "Baseline level"
  - "Treatment contrasts"
  - "Reference category"
  - "relevel()"
status: seedling
---

# Reference Level

Mountain heights are all "metres above sea level". Measure from the valley floor instead and every number changes, while the mountains stay exactly as high. The **reference level** is a factor's sea level: the category a model uses as its baseline, against which every other category's coefficient is measured ([[Dummy Coding]]). The [[Intercept]] is the reference level's mean (with other predictors at zero), and each other coefficient is "this level minus reference". This scheme is called treatment contrasts and is R's default, which picks the first level alphabetically unless told otherwise ([[Factors in R]]).

In the code below, treatments burn, control and graze have means 9, 5 and 7. By default "burn" is the reference, so the coefficients are 9, −4 and −2. A meaningful reference, such as the control, the unburned or the commonest class, makes them easier to read: after `relevel(trt, ref = "control")` they are 5, +4 and +2. The coefficients and their p-values change, but the fit does not; the last line confirms the fitted values are identical. In an output table, `burnyes` means "burned compared with not burned", and the level whose name is missing is the reference.

The common confusion is that a non-significant level coefficient means that level does not matter. It means only that the level does not differ clearly from the reference; it may differ from the other levels, which needs [[Pairwise Comparisons]]. Coding against the average of all groups instead is [[Sum-to-zero Contrasts]].

```r
d <- data.frame(trt = factor(rep(c("burn", "control", "graze"), each = 4)), y = c(8, 9, 10, 9, 5, 6, 5, 4, 7, 6, 8, 7))
coef(lm(y ~ trt, d))                                     # reference is "burn" (alphabetical)
d$trt2 <- relevel(d$trt, ref = "control"); coef(lm(y ~ trt2, d))      # now differences from control
all.equal(fitted(lm(y ~ trt, d)), fitted(lm(y ~ trt2, d)))            # same fit
```

## Connections
- **Builds on:** [[Dummy Coding]], [[Intercept]]
- **Leads to:** [[Sum-to-zero Contrasts]], [[Factors in R]], [[Pairwise Comparisons]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does the intercept represent with a treatment-coded factor?
??
The expected response for the reference level.
++++

Does changing the reference level change the model's predictions?
??
No. Only the coefficients and what they compare.
++++

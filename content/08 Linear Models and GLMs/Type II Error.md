---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A Type II error is failing to reject a null hypothesis that is actually false: missing an effect that is really there."
aliases:
  - "False negative"
  - "Type 2 error"
  - "Missed effect"
  - "Beta error"
status: seedling
---

# Type II Error

A smoke alarm that stays silent during a real fire, or a court acquitting a guilty person for lack of evidence: a **Type II error** is failing to reject a null hypothesis that is actually false, missing an effect that is really there ([[Null Hypothesis]]). It is a false negative, and its probability is called β; [[Statistical Power]] is 1 − β. β is large when the effect is small, the data are noisy or the sample is small, and it is traded against the [[Type I Error]]: demanding stronger evidence, a smaller α, raises β.

In the code below, a real slope of 0.4 is tested in 5,000 simulated studies of 15 observations each; about 70% of them fail to find it ([[Sample Size]]).

It matters in conservation because a missed decline is often costlier than a false alarm, and "no significant trend" from a weak study can excuse inaction. So do not read "no significant effect" as "no effect": look at the interval and ask whether it includes effects big enough to matter ([[Harrison et al. 2018]], [[Johnson and Omland 2004]]). The β here is not a regression coefficient; it is the same Greek letter with an unrelated meaning.

```r
set.seed(8); p <- replicate(5000, { x <- rnorm(15); y <- 0.4 * x + rnorm(15); summary(lm(y ~ x))$coefficients[2, 4] })
mean(p >= 0.05)         # a real slope of 0.4 is missed in about 70% of studies with n = 15
```

## Connections
- **Builds on:** [[Null Hypothesis]]
- **Leads to:** [[Type I Error]], [[Statistical Power]], [[Sample Size]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Type I and Type II Errors]]

## Flashcards

What is a Type II error?
??
Failing to reject a false null hypothesis (a false negative).
++++

What makes Type II errors more likely?
??
Small effects, high variability and small sample sizes.
++++

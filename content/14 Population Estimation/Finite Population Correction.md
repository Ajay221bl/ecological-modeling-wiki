---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The finite population correction shrinks the variance of an estimate when you sample a large fraction of a finite population, because the unsampled remainder is small."
aliases:
  - "FPC"
  - "(1 − n/N)"
  - "Finite population correction factor"
status: seedling
---

# Finite Population Correction

Tasting 9 of 10 cookies in a box leaves you almost certain about the whole box, much more than tasting 9 of 10,000. The **finite population correction** shrinks the variance of an estimate when you sample a large fraction of a finite population, because the unsampled remainder is small ([[Variance of an Estimate]], [[Survey Sampling Designs]]). The variance of a mean from n of N units is (s²/n) × (1 − n/N), and (1 − n/N) is the correction.

When n/N is tiny the correction is close to 1 and can be ignored; when n = N, a [[Census]], the variance is zero. As a rule of thumb it matters when you sample more than about 5 to 10 percent of the units. In the code below 30 of 50 units are sampled: the [[Standard Error|standard error of the mean]] is 0.39 without the correction and 0.25 with it.

It is a general survey-sampling prerequisite for [[Powell and Gale 2015]] Ch14, not named in the course sources. The FPC does not apply to model-based estimates of detection; it applies to design-based sampling of a finite set of units.

```r
set.seed(3); pop <- rpois(50, 8); s <- sample(pop, 30)
se_plain <- sd(s) / sqrt(30); se_fpc <- se_plain * sqrt(1 - 30 / 50)
round(c(se_plain = se_plain, se_fpc = se_fpc), 2)
```

## Connections
- **Builds on:** [[Variance of an Estimate]], [[Survey Sampling Designs]], [[Standard Error]]
- **Leads to:** [[Census]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is the finite population correction factor?
??
(1 − n/N), multiplying the variance of a sample mean.
++++

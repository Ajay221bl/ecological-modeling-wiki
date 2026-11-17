---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A z-test compares an estimate with a hypothesised value by measuring their difference in standard errors and referring it to the standard normal distribution."
aliases:
  - "z test"
  - "z-statistic"
  - "z value"
status: seedling
---

# z-test

A **z-test** is a t-test done with a ruler you trust completely. It compares an estimate with a hypothesised value by measuring their difference in standard errors, z = (estimate − hypothesised value) / SE, and refers the result to the [[Standard Normal Distribution]]; |z| > 1.96 gives p < 0.05 ([[Standard Error]]). The [[t-test]] does the same but uses the heavier-tailed t distribution, to account for having estimated σ from a small sample. When the standard error is known, or the sample is large enough that estimating it adds no real uncertainty, those heavier tails are not needed.

The same statistic of 2.2 gives p = 0.028 as a z, 0.052 as a t with 10 df, and 0.028 again as a t with 1,000 df, as the code below shows: in large samples t and z coincide. R prints z for Poisson and binomial GLMs, where the variance is fixed by the mean and no separate σ is estimated. It prints t for `lm` and for quasi, Gaussian or gamma GLMs, where a dispersion is estimated. The code shows the column names switching from "z value" to "t value" when the same model is fitted as quasi-Poisson ([[Quasi-Poisson]]).

Zuur explains this switch when overdispersion is estimated ([[Zuur et al. 2009 Ch9]]). So z and t columns are not interchangeable: for small samples with an estimated dispersion, t is the right reference. The z-tests printed for GLM coefficients are [[Wald Test|Wald tests]].

```r
2 * pnorm(-abs(2.2)); 2 * pt(-abs(2.2), 10); 2 * pt(-abs(2.2), 1000)     # same statistic: z, t with 10 df, t with 1000 df
set.seed(11); y <- rpois(50, 3); colnames(summary(glm(y ~ 1, family = poisson))$coefficients); colnames(summary(glm(y ~ 1, family = quasipoisson))$coefficients)
```

## Connections
- **Builds on:** [[Standard Normal Distribution]], [[Standard Error]]
- **Leads to:** [[Wald Test]], [[t-test]], [[Quasi-Poisson]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

When is a z statistic used instead of t?
??
When the standard error doesn't depend on a separately estimated variance (as in Poisson and binomial GLMs) or the sample is large.
++++

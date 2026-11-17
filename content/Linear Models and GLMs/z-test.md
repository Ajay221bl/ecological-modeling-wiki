---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "z test"
  - "z-statistic"
  - "z value"
status: seedling
---

# z-test

**In one line:** a z-test compares an estimate with a hypothesised value by measuring their difference in standard errors and referring it to the standard normal distribution.

> [!info] Before this, it helps to know
> [[Standard Normal Distribution]] (the reference) · [[Standard Error]] (the unit) · [[t-test]] (its small-sample cousin)

## The everyday picture
A t-test done with a ruler you trust completely. When the standard error is known, or the sample is large enough that estimating it adds no real uncertainty, the heavier tails of the t distribution aren't needed.

## Start from zero
1. **z = (estimate − hypothesised value) / SE.**
2. **Compare with Normal(0, 1).** |z| > 1.96 gives p < 0.05.
3. **z versus t:** t accounts for having estimated σ from a small sample. z doesn't.
4. **Where R prints z:** Poisson and binomial GLMs, where the variance is fixed by the mean and no separate σ is estimated.
5. **Where R prints t:** `lm`, and quasi or Gaussian or gamma GLMs, where a dispersion is estimated.
6. **In large samples t and z coincide.**

## In R
```r
2 * pnorm(-abs(2.2)); 2 * pt(-abs(2.2), 10); 2 * pt(-abs(2.2), 1000)     # same statistic: z, t with 10 df, t with 1000 df
set.seed(11); y <- rpois(50, 3); colnames(summary(glm(y ~ 1, family = poisson))$coefficients); colnames(summary(glm(y ~ 1, family = quasipoisson))$coefficients)
```

## In the course
[[Zuur et al. 2009 Ch9]] explains the switch from z to t when overdispersion is estimated.

## Common confusions
- **"z and t columns are interchangeable."** For small samples with an estimated dispersion, t is the right reference.

## Explain it back
- Why does a quasi-Poisson summary show t where a Poisson summary shows z?

*Pass test:* you can say when software reports z and when t.

## Connections
- **Builds on:** [[Standard Normal Distribution]], [[Standard Error]]
- **Leads to:** [[Wald Test]], [[t-test]], [[Quasi-Poisson]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

When is a z statistic used instead of t?
??
When the standard error doesn't depend on a separately estimated variance (as in Poisson and binomial GLMs) or the sample is large.
++++

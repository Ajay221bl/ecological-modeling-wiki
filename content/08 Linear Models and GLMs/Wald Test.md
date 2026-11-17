---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A Wald test checks whether a coefficient differs from zero by dividing its estimate by its standard error and comparing the result with a normal distribution."
aliases:
  - "Wald z test"
  - "Wald statistic"
  - "z value in glm output"
status: seedling
---

# Wald Test

Judging how far a town is from the border with only a local map, you measure the distance in "standard errors" and assume the terrain is flat and regular all the way: quick, and reliable when the terrain really is regular. A **Wald test** checks whether a coefficient differs from zero by computing z = estimate / SE and comparing it with a [[Standard Normal Distribution]]; if the true coefficient is zero, z is approximately standard normal in large samples, and p = 2 × P(Z > |z|). The [[Standard Error]] comes from the curvature of the log-likelihood ([[Hessian Matrix]]). It needs only the fitted model, which is why software prints it for every coefficient: the `z value` and `Pr(>|z|)` columns of `summary(glm())` are Wald tests.

In the code below, a Poisson regression's slope gets a z and p computed by hand that match the summary table, and a [[Likelihood Ratio Test]] of the same question gives a similar p-value, as it should with 80 observations.

The Wald test assumes the log-likelihood is a parabola near the estimate, and it fails when that is false: in small samples, for estimates near a boundary, and badly under separation in logistic regression, where a huge estimate with a huge SE gives z near 0 ([[Complete Separation]]). The likelihood ratio test is usually more reliable, and Harrison and colleagues note Wald tests are weakest for mixed models ([[Harrison et al. 2018]], [[Zuur et al. 2009 Ch9]]). For a factor with several levels, each Wald test compares one level with the reference, so test the factor as a whole with a likelihood ratio test. The z column is not an effect size; it is estimate over SE, a signal-to-noise ratio. Its interval counterpart is the [[Wald Confidence Interval]], and it is a kind of [[z-test]].

```r
set.seed(10); x <- rnorm(80); y <- rpois(80, exp(0.5 + 0.25 * x)); m <- glm(y ~ x, family = poisson)
s <- summary(m)$coefficients; s
z <- s[2, 1] / s[2, 2]; c(z = z, p = 2 * pnorm(-abs(z)))
anova(glm(y ~ 1, family = poisson), m, test = "Chisq")$`Pr(>Chi)`[2]      # likelihood ratio test of the same thing: similar
```

## Connections
- **Builds on:** [[Standard Error]], [[Standard Normal Distribution]]
- **Leads to:** [[z-test]], [[Likelihood Ratio Test]], [[Wald Confidence Interval]], [[Complete Separation]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Wald Test vs Likelihood Ratio Test]]

## Flashcards

What is the Wald test statistic?
??
Estimate divided by its standard error, compared with a standard normal distribution.
++++

Which columns of summary(glm) are Wald tests?
??
The "z value" and "Pr(>|z|)" columns.
++++

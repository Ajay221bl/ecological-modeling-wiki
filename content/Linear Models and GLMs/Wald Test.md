---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Wald z test"
  - "Wald statistic"
  - "z value in glm output"
status: seedling
---

# Wald Test

**In one line:** a Wald test checks whether a coefficient differs from zero by dividing its estimate by its standard error and comparing the result with a normal distribution.

> [!info] Before this, it helps to know
> [[Standard Error]] (the denominator) · [[Standard Normal Distribution]] (the yardstick) · [[Hessian Matrix]] (where the SE comes from)

## The everyday picture
Judging how far a town is from the border using only a local map. You measure the distance in "standard errors" and assume the terrain is flat and regular all the way. Quick, and reliable when the terrain really is regular.

## Start from zero
1. **z = estimate / SE.**
2. **Under H₀ (true coefficient zero), z is approximately standard normal** in large samples.
3. **p = 2 × P(Z > |z|).**
4. **It needs only the fitted model,** which is why software prints it for every coefficient. The `z value` and `Pr(>|z|)` columns of `summary(glm())` are Wald tests.
5. **It assumes the log-likelihood is a parabola** near the estimate.
6. **It fails when that is false:** small samples, estimates near a boundary, and badly for separation in logistic regression, where a huge estimate with a huge SE gives z near 0.
7. **The likelihood ratio test is usually more reliable.** With plenty of data the two agree.
8. **For a factor with several levels** each Wald test compares one level with the reference. Use a likelihood ratio test for the factor as a whole.

## In R
```r
set.seed(10); x <- rnorm(80); y <- rpois(80, exp(0.5 + 0.25 * x)); m <- glm(y ~ x, family = poisson)
s <- summary(m)$coefficients; s
z <- s[2, 1] / s[2, 2]; c(z = z, p = 2 * pnorm(-abs(z)))
anova(glm(y ~ 1, family = poisson), m, test = "Chisq")$`Pr(>Chi)`[2]      # likelihood ratio test of the same thing: similar
```

## In the course
GLM labs ([[Course Website]]). [[Zuur et al. 2009 Ch9]]. [[Harrison et al. 2018]] on why Wald tests are weakest for mixed models.

## Common confusions
- **"The z column is an effect size."** It is estimate over SE, a signal-to-noise ratio.

## Explain it back
- When do Wald and likelihood ratio tests disagree?

*Pass test:* you can reproduce a Wald z and p from an estimate and SE.

## Connections
- **Builds on:** [[Standard Error]], [[Standard Normal Distribution]]
- **Leads to:** [[z-test]], [[Likelihood Ratio Test]], [[Wald Confidence Interval]], [[Complete Separation]]
- **Part of:** [[MOC - Likelihood and Estimation]], molecular note [[Wald Test vs Likelihood Ratio Test]]

## Flashcards

What is the Wald test statistic?
??
Estimate divided by its standard error, compared with a standard normal distribution.
++++

Which columns of summary(glm) are Wald tests?
??
The "z value" and "Pr(>|z|)" columns.
++++

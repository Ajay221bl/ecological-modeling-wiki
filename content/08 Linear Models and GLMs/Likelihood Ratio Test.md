---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "LRT"
  - "Chi-square test of nested models"
  - "anova(m1, m2)"
status: seedling
---

# Likelihood Ratio Test

**In one line:** a likelihood ratio test decides whether a larger model fits significantly better than a smaller one nested in it by comparing twice the gain in log-likelihood with a chi-square distribution.

> [!info] Before this, it helps to know
> [[Likelihood Ratio]] (the statistic's core) · [[Nested Models]] (the requirement) · [[Chi-square Distribution]] (the yardstick) · [[P-value]] (the output)

## The everyday picture
Adding a gear to a bike and timing the ride. Any extra gear helps a little by luck. The question is whether the time dropped by more than a pointless gear typically would give you.

## A tiny example
Small model log-likelihood −152.3. Big model, with 2 extra parameters, −147.1.
- Statistic: 2 × (−147.1 − (−152.3)) = 10.4.
- Chi-square with 2 df: p = 0.0055.
- The two extra terms improve the fit more than chance would.

## Start from zero
1. **Fit both models by maximum likelihood** to the same data.
2. **Statistic: D = 2 × (ℓ_big − ℓ_small).** Equivalently the difference in deviance.
3. **If the extra parameters are truly zero, D is approximately chi-square** with df = number of extra parameters.
4. **Why "approximately zero plus noise":** even useless parameters soak up a little random variation, raising the log-likelihood by about half a unit each on average.
5. **p-value = P(chi-square ≥ D).**
6. **In R:** `anova(small, big, test = "Chisq")` or `drop1(model, test = "Chisq")`.
7. **Cautions:** it is a large-sample approximation. It is unreliable for testing whether a variance is zero (a boundary), where the p-value is too large. For mixed models compare fixed effects using ML fits, not REML.

## In R
```r
set.seed(8); d <- data.frame(x1 = rnorm(100), x2 = rnorm(100), x3 = rnorm(100)); d$y <- rpois(100, exp(1 + 0.3 * d$x1))
small <- glm(y ~ x1, poisson, d); big <- glm(y ~ x1 + x2 + x3, poisson, d)
D <- as.numeric(2 * (logLik(big) - logLik(small))); c(D = D, p = 1 - pchisq(D, 2))
anova(small, big, test = "Chisq")
```

## In the course
[[Zuur et al. 2009 Ch5]] and Ch9 use it for nested model selection. [[Johnson and Omland 2004]] sets it beside AIC.

## Common confusions
- **"It can compare any two models."** Only nested ones on identical data.
- **"A non-significant result proves the smaller model."** It shows the data can't distinguish them.

## Explain it back
- What is the test statistic and its reference distribution?

*Pass test:* you can run a likelihood ratio test by hand from two log-likelihoods.

## Connections
- **Builds on:** [[Likelihood Ratio]], [[Nested Models]], [[Chi-square Distribution]]
- **Leads to:** [[Deviance]], [[Analysis of Deviance]], [[AIC]], [[REML vs ML]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Likelihood Ratio Test vs AIC]]

## Flashcards

What is the likelihood ratio test statistic?
??
2 × (log-likelihood of larger model − log-likelihood of smaller model).
++++

What distribution is the LRT statistic compared with?
??
Chi-square, with degrees of freedom equal to the number of extra parameters.
++++

When is the LRT unreliable?
??
Small samples, non-nested models, and when testing a parameter on the boundary such as a variance of zero.
++++

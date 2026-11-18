---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A likelihood ratio test decides whether a larger model fits significantly better than a smaller one nested in it by comparing twice the gain in log-likelihood with a chi-square distribution."
aliases:
  - "LRT"
  - "Chi-square test of nested models"
  - "anova(m1, m2)"
status: seedling
---

# Likelihood Ratio Test

Add a gear to a bike and time the ride. Any extra gear helps a little by luck, so the question is whether the time dropped by more than a pointless gear typically would. A **likelihood ratio test** decides whether a larger model fits significantly better than a smaller one nested in it ([[Nested Models]]). Fit both by [[Maximum Likelihood Estimation|maximum likelihood]] to the same data and compute D = 2 × (ℓ_big − ℓ_small), twice the gain in [[Log-likelihood|log-likelihood]], which equals the difference in [[Deviance]] ([[Likelihood Ratio]]). If the extra parameters are truly zero, D is approximately [[Chi-square Distribution|chi-square]] with df equal to the number of extra parameters, and the [[P-value]] is P(chi-square ≥ D). Even useless parameters soak up a little random variation, raising the log-likelihood by about half a unit each on average, which is what the chi-square allows for.

An example: a small model has log-likelihood −152.3 and a big model with 2 extra parameters −147.1. D = 2 × (−147.1 − (−152.3)) = 10.4, and a chi-square with 2 df gives p = 0.0055, so the two extra terms improve the fit more than chance would. In the code below, counts depend on x1 only; adding two useless [[Predictor Variable|predictors]] raises the log-likelihood a little, and the test gives a large p-value. In R the test is `anova(small, big, test = "Chisq")` or `drop1(model, test = "Chisq")`.

It is a large-sample approximation. It is unreliable for testing whether a variance is zero, a boundary case where the p-value comes out too large, and for [[Mixed Effects Model|mixed models]], [[Fixed Effect|fixed effects]] must be compared using ML fits, not [[REML]] ([[REML vs ML]]). It can compare only nested models fitted to identical data, and a non-significant result does not prove the smaller model; it shows the data cannot distinguish them. Zuur uses it for nested model selection, and Johnson and Omland set it beside [[AIC]] ([[Zuur et al. 2009 Ch5]], [[Johnson and Omland 2004]], [[Analysis of Deviance]]).

```r
set.seed(8); d <- data.frame(x1 = rnorm(100), x2 = rnorm(100), x3 = rnorm(100)); d$y <- rpois(100, exp(1 + 0.3 * d$x1))
small <- glm(y ~ x1, poisson, d); big <- glm(y ~ x1 + x2 + x3, poisson, d)
D <- as.numeric(2 * (logLik(big) - logLik(small))); c(D = D, p = 1 - pchisq(D, 2))
anova(small, big, test = "Chisq")
```

## Connections
- **Builds on:** [[Likelihood Ratio]], [[Nested Models]], [[Chi-square Distribution]], [[Maximum Likelihood Estimation]], [[Log-likelihood]], [[Predictor Variable]]
- **Leads to:** [[Deviance]], [[Analysis of Deviance]], [[AIC]], [[REML vs ML]], [[Mixed Effects Model]], [[Fixed Effect]], [[REML]]
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

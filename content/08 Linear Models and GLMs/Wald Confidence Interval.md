---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A Wald confidence interval is the estimate plus and minus about two standard errors, built on the assumption that the estimate's sampling distribution is normal."
aliases:
  - "Wald interval"
  - "Asymptotic confidence interval"
  - "Normal-approximation interval"
status: seedling
---

# Wald Confidence Interval

Describe a hill by pretending it is a perfect symmetrical dome: quick, and fine for most hills, but wrong for a hill with a cliff on one side. A **Wald confidence interval** is the estimate plus and minus about two standard errors, estimate ± 1.96 × SE, built on the assumption that the estimate's sampling distribution is normal ([[Confidence Interval]], [[Standard Error]], [[Standard Normal Distribution]]). In likelihood terms, it approximates the log-likelihood by a parabola at its peak, so it is always symmetric about the estimate. It is fast, needing only the fit you already have, and good when the sample is large and the parameter is not near a boundary.

It does poorly when the likelihood is lopsided: small samples, probabilities near 0 or 1, variances near zero. Then it can even include impossible values. In the code below, 1 success in 20 trials gives a Wald interval on the probability scale whose lower limit is negative. The usual trick is to compute it on the link scale, logit or log, where the normal approximation is better, and back-transform the endpoints, which keeps it inside 0 to 1. The profile interval for comparison is wider on the upper side.

In R, `confint.default(model)` gives Wald intervals for a glm and `confint(model)` gives profile intervals; the mixed-model labs contrast Wald, profile and bootstrap intervals in the 15 October session ([[Course Website]], [[Profile Likelihood Confidence Interval]], [[Percentile Bootstrap Interval]]). Not all confidence intervals are estimate ± 2 SE; that is the Wald kind, the crudest. Its matching test is the [[Wald Test]].

```r
y <- 1; n <- 20; p <- y / n; se <- sqrt(p * (1 - p) / n)
p + c(-1.96, 1.96) * se                                  # Wald on the probability scale: lower limit negative, impossible
m <- glm(cbind(y, n - y) ~ 1, family = binomial)
plogis(confint.default(m))                               # Wald on the logit scale, back-transformed: stays inside 0 to 1
plogis(suppressMessages(confint(m)))                     # profile likelihood interval
```

## Connections
- **Builds on:** [[Confidence Interval]], [[Standard Error]]
- **Leads to:** [[Profile Likelihood Confidence Interval]], [[Wald Test]], [[Percentile Bootstrap Interval]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Wald, Profile and Bootstrap Intervals]]

## Flashcards

What is a Wald confidence interval?
??
Estimate ± 1.96 × standard error, assuming a normal sampling distribution.
++++

When is a Wald interval unreliable?
??
With small samples or parameters near a boundary, where the likelihood is asymmetric.
++++

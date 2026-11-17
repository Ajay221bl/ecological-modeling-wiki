---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "A test has an inflated Type I error rate when it rejects a true null hypothesis more often than its nominal α, typically because its standard errors are too small."
aliases:
  - "Inflated false positive rate"
  - "Anti-conservative test"
  - "Liberal test"
status: seedling
---

# Inflated Type I Error

A test has an **inflated Type I error rate** when it rejects a true null hypothesis more often than its nominal α, typically because its standard errors are too small ([[Type I Error]], [[Significance Level]], [[Standard Error]]). α = 0.05 should mean 5% false positives. Positive residual autocorrelation and [[Pseudoreplication]] make standard errors too small and test statistics too large, so the real false-positive rate can be 20%, 40% or more ([[Effective Sample Size|Effective Sample Size under Autocorrelation]]).

Simulation shows it directly: generate data with no effect but with autocorrelation and count how often p < 0.05. In the code below, two unrelated autocorrelated series of 50 points are regressed on each other 1,000 times, and p < 0.05 occurs 30% of the time instead of 5%.

Other causes are [[Data Dredging]] and multiple testing, ignoring [[Overdispersion]], and testing variances against the wrong reference distribution. Diniz-Filho et al. warn that Type I errors "may be strongly inflated" ([[Diniz-Filho et al. 2003]], [[Harrison et al. 2018]]). Inflated Type I error is about uncertainty, not bias: estimates can be unbiased while tests are too optimistic.

```r
set.seed(17); p <- replicate(1000, { x <- as.numeric(arima.sim(list(ar = 0.8), 50)); y <- as.numeric(arima.sim(list(ar = 0.8), 50)); summary(lm(y ~ x))$coef[2, 4] })
mean(p < 0.05)        # two unrelated autocorrelated series, many false positives
```

## Connections
- **Builds on:** [[Type I Error]], [[Significance Level]], [[Standard Error]]
- **Leads to:** [[Pseudoreplication]], [[Effective Sample Size|Effective Sample Size under Autocorrelation]], [[Overdispersion]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[Why non-independence inflates false positives]]

## Flashcards

What does an inflated Type I error rate mean?
??
A test rejects true nulls more often than its nominal α.
++++

Name two causes of inflated Type I error in ecological regressions.
??
Residual autocorrelation (or pseudoreplication) and ignored overdispersion.
++++

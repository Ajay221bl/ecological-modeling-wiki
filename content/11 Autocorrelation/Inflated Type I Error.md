---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Inflated false positive rate"
  - "Anti-conservative test"
  - "Liberal test"
status: seedling
---

# Inflated Type I Error

**In one line:** a test has an inflated Type I error rate when it rejects a true null hypothesis more often than its nominal α, typically because its standard errors are too small.

> [!info] Before this, it helps to know
> [[Type I Error]] · [[Significance Level]] · [[Standard Error]]

## Start from zero
1. **Nominal α = 0.05 should mean 5% false positives.**
2. **Positive residual autocorrelation and pseudoreplication** make standard errors too small, so test statistics too large.
3. **Then the real false positive rate can be 20%, 40% or more.**
4. **Other causes:** data dredging, multiple testing, ignoring overdispersion, testing variances with the wrong reference distribution.
5. **Simulation shows it directly:** generate data with no effect but with autocorrelation and count how often p < 0.05.

## In R
```r
set.seed(17); p <- replicate(1000, { x <- as.numeric(arima.sim(list(ar = 0.8), 50)); y <- as.numeric(arima.sim(list(ar = 0.8), 50)); summary(lm(y ~ x))$coef[2, 4] })
mean(p < 0.05)        # two unrelated autocorrelated series, many false positives
```

## In the course
[[Diniz-Filho et al. 2003]] (Type I errors "may be strongly inflated"). [[Harrison et al. 2018]].

## Common confusions
- **"Inflated Type I error biases the estimates."** It is about uncertainty; estimates can be unbiased while tests are too optimistic.

## Explain it back
- Why does autocorrelation inflate the Type I error rate?

*Pass test:* you can show inflation by simulation.

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

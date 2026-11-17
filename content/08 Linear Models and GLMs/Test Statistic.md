---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Test statistics"
  - "Statistic of a test"
status: seedling
---

# Test Statistic

**In one line:** a test statistic is a single number computed from the data that measures how far the data are from what the null hypothesis predicts.

> [!info] Before this, it helps to know
> [[Null Hypothesis]] (the reference) · [[Sampling Distribution]] (how it behaves under the null)

## The everyday picture
A thermometer reading for evidence. All the data are boiled down to one number on a scale where "normal" is known. A reading far from normal is the signal.

## Start from zero
1. **Choose a summary that grows as data depart from H₀.**
2. **t or z:** (estimate − null value) / standard error. For one coefficient.
3. **F:** ratio of explained to unexplained variance. For groups of terms in linear models.
4. **Chi-square:** drop in deviance, or summed squared discrepancies. For nested GLMs.
5. **Work out its distribution if H₀ were true** (the null distribution).
6. **Locate your value in that distribution.** The tail area beyond it is the p-value.
7. **Bayesian model checking reuses the idea:** compute a statistic on the data and on data simulated from the model and compare.

## In R
```r
set.seed(3); x <- rnorm(50); y <- 0.3 * x + rnorm(50); s <- summary(lm(y ~ x))
c(t = s$coefficients[2, 3], F = s$fstatistic[[1]], t_squared = s$coefficients[2, 3]^2)     # for one predictor F is t squared
```

## Common confusions
- **"A big statistic means a big effect."** It means a clear effect. Clarity grows with sample size as well as effect size.

## Explain it back
- Name three test statistics and when each is used.

*Pass test:* you can say what a t, F or chi-square statistic measures.

## Connections
- **Builds on:** [[Null Hypothesis]], [[Sampling Distribution]]
- **Leads to:** [[P-value]], [[t-test]], [[F-test]], [[Likelihood Ratio Test]], [[Bayesian P-value]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is a test statistic?
??
A number summarising how far the data depart from the null hypothesis, with a known distribution when the null is true.
++++

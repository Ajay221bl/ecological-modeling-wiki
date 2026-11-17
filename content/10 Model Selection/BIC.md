---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "BIC scores a model as −2 log-likelihood + K log(n), a penalty that grows with sample size and so favours simpler models than AIC does."
aliases:
  - "Bayesian Information Criterion"
  - "Schwarz criterion"
  - "Schwarz information criterion"
  - "SBC"
  - "BIC (Schwarz criterion)"
  - "BIC()"
status: seedling
---

# BIC

A handicap that gets stricter as the league gets bigger demands a larger improvement in fit before each extra parameter is accepted. **BIC**, the Bayesian Information Criterion, scores a model as −2 log-likelihood + K log(n) ([[Number of Parameters]]). The penalty per parameter is log(n): equal to AIC's 2 at n = 8, 4.6 at n = 100 and 6.9 at n = 1,000, so BIC favours simpler models than [[AIC]] does.

It comes from an approximation to the log [[Marginal Likelihood]], so BIC differences approximate log [[Bayes Factor|Bayes factors]] under particular vague priors. Its aim is to find the true model if it is in the set; as n grows BIC picks it with probability approaching 1, called consistency. AIC aims for the best predictive approximation, assuming truth is not in the set ([[Full Reality]]). So BIC tends to choose smaller models and may miss small real effects, while AIC may include spurious ones. In the code below, with n = 500 and a small real effect of x2, both criteria prefer the model including x2, though BIC's margin is narrower (5.2 against AIC's 9.4).

The comparison is laid out in [[AIC vs BIC]] ([[Johnson and Omland 2004]], [[Hobbs and Hooten 2015 Ch9]]). "Bayesian" in the name doesn't make it a Bayesian analysis: it needs no priors or MCMC. Nor is BIC better because it is stricter; the two answer different questions.

```r
set.seed(7); n <- 500; x1 <- rnorm(n); x2 <- rnorm(n); y <- 1 + 0.5 * x1 + 0.08 * x2 + rnorm(n)     # x2 has a small real effect
m1 <- lm(y ~ x1); m2 <- lm(y ~ x1 + x2)
rbind(AIC = c(m1 = AIC(m1), m2 = AIC(m2)), BIC = c(BIC(m1), BIC(m2))); log(c(8, 100, 1000))
```

## Connections
- **Builds on:** [[AIC]], [[Marginal Likelihood]], [[Number of Parameters]]
- **Leads to:** [[Bayes Factor]], [[Full Reality]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]], molecular note [[AIC vs BIC]]

## Flashcards

What is the formula for BIC?
??
BIC = −2 log L + K log(n).
++++

Why does BIC tend to select simpler models than AIC?
??
Its penalty per parameter, log(n), exceeds AIC's 2 once n is above about 7.
++++

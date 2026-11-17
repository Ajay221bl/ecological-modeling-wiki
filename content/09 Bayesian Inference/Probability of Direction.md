---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The probability of direction is the share of the posterior that lies on one side of zero, read as the probability that an effect is positive (or negative)."
aliases:
  - "pd"
  - "P(β > 0)"
  - "Posterior probability of an effect"
  - "Probability the effect is positive"
  - "Posterior probability of a hypothesis"
status: seedling
---

# Probability of Direction

"There is an 85% chance of rain tomorrow" is a direct probability about the thing you care about, which is how people naturally want results stated. The **probability of direction** is the share of the posterior on one side of zero, read as the probability that an effect is positive or negative ([[Posterior Distribution]]). From draws, P(β > 0 | data) is the proportion of draws above 0 ([[Posterior Draws]]), and it reads plainly: "the probability that tree cover reduces bird abundance is 0.97". Any threshold works, such as P(β > 0.1), P(odds ratio > 2) or P(survival in A > survival in B) ([[Derived Quantities]]).

This is a statement about the hypothesis, which a [[P-value|p-value]] is not. With weak priors there is a rough numerical link, a one-sided p-value ≈ 1 − pd, but the meanings differ ([[Statistical Significance]]). In brms use `hypothesis(fit, "x > 0")`. In the code below, a slope with posterior mean −0.5 and sd 0.27 has a 0.97 probability of being negative and a 0.86 probability of being stronger than −0.2.

Direction isn't importance: an effect can be almost surely positive and negligibly small, so ask about a meaningful size too, alongside the [[Credible Interval]]. It is used when interpreting brms fits ([[Course Website]], [[Hobbs and Hooten 2015 Ch8]]). P(β > 0) = 0.97 is not a p-value of 0.03; they are different quantities with different meanings, though sometimes numerically similar.

```r
set.seed(6); b <- rnorm(4000, -0.5, 0.27)                                 # posterior draws of a slope
c(prob_negative = mean(b < 0), prob_stronger_than_minus_0.2 = mean(b < -0.2))
```

## Connections
- **Builds on:** [[Posterior Draws]], [[Posterior Distribution]]
- **Leads to:** [[Credible Interval]], [[P-value|p-value]], [[Statistical Significance]], [[Derived Quantities]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

How is the posterior probability that a coefficient is positive computed?
??
As the proportion of posterior draws greater than zero.
++++

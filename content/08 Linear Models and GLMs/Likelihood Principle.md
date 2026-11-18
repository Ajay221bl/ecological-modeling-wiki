---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The likelihood principle states that all the information the data hold about a model's parameters is contained in the likelihood function."
aliases:
  - "The likelihood principle"
status: seedling
---

# Likelihood Principle

Judge a photograph by what is in it, not by what the photographer intended to shoot or would have done on a cloudy day. The **likelihood principle** says the same for data: all the information the data hold about a model's parameters is contained in the [[Likelihood Function]]. Two datasets that give proportional likelihood functions carry the same evidence, so inference should depend only on the data actually observed. That rules out conclusions that depend on data that might have been observed but were not, or on the experimenter's intentions about when to stop.

The code below gives the classic example. One researcher planned 12 trials and saw 3 successes; another kept sampling until the 3rd success, which happened to take 12 trials. Their likelihood functions for p have a constant ratio, so they carry identical evidence about p. Yet one-sided p-values for p = 0.5 differ, 0.073 under the first design and 0.033 under the second, because a [[P-value]] is the probability of data "as or more extreme", which are outcomes that did not occur and depend on the stopping rule.

So p-values violate the principle, while likelihood-based and [[Bayesian Inference|Bayesian methods]] obey it: [[Bayes' Theorem]] uses the data only through the likelihood ([[Frequentist vs Bayesian Inference]]). Hobbs and Hooten state it because it justifies building all inference on the likelihood joined with priors ([[Hobbs and Hooten 2015 Ch4]]). It does not say to use [[Maximum Likelihood Estimation|maximum likelihood]]; it says the likelihood function is the evidence, and how to use it is a separate choice.

```r
p <- seq(0.01, 0.99, 0.01)
L_fixed_n <- dbinom(3, 12, p)                    # 3 successes in a planned 12 trials
L_stop_at_3 <- dnbinom(9, 3, p)                  # kept sampling until the 3rd success, which took 12 trials
range(L_fixed_n / L_stop_at_3)                   # constant ratio: identical likelihood shape, identical evidence about p
c(pbinom(3, 12, 0.5), pnbinom(8, 3, 0.5, lower.tail = FALSE))     # yet the one-sided p-values for p = 0.5 differ: 0.073 and 0.033
```

## Connections
- **Builds on:** [[Likelihood Function]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[P-value]], [[Bayes' Theorem]], [[Frequentist vs Bayesian Inference]], [[Bayesian Inference]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

State the likelihood principle.
??
All the evidence in the data about the parameters is contained in the likelihood function.
++++

Which common statistic violates the likelihood principle?
??
The p-value, which depends on unobserved, more extreme outcomes.
++++

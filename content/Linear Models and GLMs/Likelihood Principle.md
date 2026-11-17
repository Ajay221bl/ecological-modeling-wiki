---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "The likelihood principle"
status: seedling
---

# Likelihood Principle

**In one line:** the likelihood principle states that all the information the data hold about a model's parameters is contained in the likelihood function.

> [!info] Before this, it helps to know
> [[Likelihood Function]] (the carrier of the information) · [[P-value]] (which breaks the principle)

## The everyday picture
Judging a photograph by what is in it, not by what the photographer intended to shoot or would have done on a cloudy day. Only what was actually captured counts as evidence.

## Start from zero
1. **Two datasets that give proportional likelihood functions carry the same evidence** about the parameters.
2. **So inference should depend only on the data observed,** through the likelihood.
3. **What that rules out:** conclusions that depend on data that might have been observed but weren't, or on the experimenter's stopping intentions.
4. **P-values violate it.** A p-value is the probability of data "as or more extreme", which are outcomes that didn't occur.
5. **Likelihood-based and Bayesian methods obey it.** Bayes' theorem uses the data only through the likelihood.
6. **Why Hobbs and Hooten state it:** it justifies building all inference on the likelihood, joined with priors.

## In R
```r
p <- seq(0.01, 0.99, 0.01)
L_fixed_n <- dbinom(3, 12, p)                    # 3 successes in a planned 12 trials
L_stop_at_3 <- dnbinom(9, 3, p)                  # kept sampling until the 3rd success, which took 12 trials
range(L_fixed_n / L_stop_at_3)                   # constant ratio: identical likelihood shape, identical evidence about p
c(pbinom(3, 12, 0.5), pnbinom(8, 3, 0.5, lower.tail = FALSE))     # yet the one-sided p-values for p = 0.5 differ: 0.073 and 0.033
```

## In the course
[[Hobbs and Hooten 2015 Ch4]].

## Common confusions
- **"It says to use maximum likelihood."** It says the likelihood function is the evidence. How to use it is a separate choice.

## Explain it back
- Why do p-values conflict with the principle?

*Pass test:* you can state the principle and its consequence for p-values.

## Connections
- **Builds on:** [[Likelihood Function]]
- **Leads to:** [[P-value]], [[Bayes' Theorem]], [[Frequentist vs Bayesian Inference]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

State the likelihood principle.
??
All the evidence in the data about the parameters is contained in the likelihood function.
++++

Which common statistic violates the likelihood principle?
??
The p-value, which depends on unobserved, more extreme outcomes.
++++

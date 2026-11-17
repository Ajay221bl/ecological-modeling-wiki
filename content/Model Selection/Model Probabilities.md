---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Posterior model probabilities"
  - "Prior model probabilities"
  - "P(M | y)"
status: seedling
---

# Model Probabilities

**In one line:** posterior model probabilities apply Bayes' theorem to whole models, giving the probability of each model in the set given the data and prior model probabilities.

> [!info] Before this, it helps to know
> [[Bayes Factor]] (the evidence) · [[Bayes' Theorem]] (the rule) · [[Candidate Model Set]] (what the probabilities are over)

## Start from zero
1. **Assign prior probabilities to the models,** often equal.
2. **P(Mₖ | y) = p(y | Mₖ) P(Mₖ) / Σⱼ p(y | Mⱼ) P(Mⱼ).**
3. **They sum to 1 over the set.**
4. **They assume one model in the set is true** (the M-closed view). If none is, their meaning is murky.
5. **Akaike weights resemble them** and are sometimes read the same way, though they come from a different argument.
6. **Used for Bayesian model averaging.**

## In R
```r
ml <- c(M1 = 0.117, M2 = 0.091, M3 = 0.020); prior <- rep(1 / 3, 3); round(ml * prior / sum(ml * prior), 3)
```

## In the course
[[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"Posterior model probability 0.9 means the model is true."** Only within the set, and only if the true model is in it.

## Explain it back
- What assumption do posterior model probabilities make about the set?

*Pass test:* you can compute them from marginal likelihoods.

## Connections
- **Builds on:** [[Bayes Factor]], [[Bayes' Theorem]]
- **Leads to:** [[Bayesian Model Averaging]], [[Akaike Weight]], [[Reversible-jump MCMC]]
- **Part of:** [[MOC - Bayesian Model Selection]]

## Flashcards

How are posterior model probabilities computed?
??
P(Mₖ | y) ∝ p(y | Mₖ) P(Mₖ), normalised over the model set.
++++

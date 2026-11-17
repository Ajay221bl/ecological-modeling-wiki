---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Posterior model probabilities apply Bayes' theorem to whole models, giving the probability of each model in the set given the data and prior model probabilities."
aliases:
  - "Posterior model probabilities"
  - "Prior model probabilities"
  - "P(M | y)"
status: seedling
---

# Model Probabilities

**Posterior model probabilities** apply [[Bayes' Theorem]] to whole models. Assign prior probabilities to the models in the [[Candidate Model Set]], often equal, then P(Mₖ | y) = p(y | Mₖ) P(Mₖ) / Σⱼ p(y | Mⱼ) P(Mⱼ), where p(y | Mₖ) is each model's marginal likelihood. They sum to 1 over the set, and the ratio for any two models is their [[Bayes Factor]] times their prior odds.

In the code below marginal likelihoods of 0.117, 0.091 and 0.020 with equal priors give model probabilities of 0.51, 0.40 and 0.09. They are used for [[Bayesian Model Averaging]], and [[Reversible-jump MCMC]] estimates them from the time a sampler spends in each model.

They assume one model in the set is true, the "M-closed" view; if none is, their meaning is murky. An [[Akaike Weight]] resembles them and is sometimes read the same way, though it comes from a different argument ([[Hobbs and Hooten 2015 Ch9]]). A posterior model probability of 0.9 does not mean the model is true: only within the set, and only if the true model is in it.

```r
ml <- c(M1 = 0.117, M2 = 0.091, M3 = 0.020); prior <- rep(1 / 3, 3); round(ml * prior / sum(ml * prior), 3)
```

## Connections
- **Builds on:** [[Bayes Factor]], [[Bayes' Theorem]]
- **Leads to:** [[Bayesian Model Averaging]], [[Akaike Weight]], [[Reversible-jump MCMC]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

How are posterior model probabilities computed?
??
P(Mₖ | y) ∝ p(y | Mₖ) P(Mₖ), normalised over the model set.
++++

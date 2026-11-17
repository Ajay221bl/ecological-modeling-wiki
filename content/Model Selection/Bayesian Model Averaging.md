---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "BMA"
  - "Bayesian model averaging (BMA)"
status: seedling
---

# Bayesian Model Averaging

**In one line:** Bayesian model averaging combines the posteriors or predictions of several models, weighting each by its posterior model probability.

> [!info] Before this, it helps to know
> [[Model Probabilities]] (the weights) · [[Model Averaging]] (the information-theoretic version)

## Start from zero
1. **Prediction: p(ỹ | y) = Σₖ p(ỹ | y, Mₖ) P(Mₖ | y).**
2. **The result is a mixture distribution,** wider than any single model's when the models disagree.
3. **It accounts for model uncertainty automatically.**
4. **Same weaknesses as Bayes factors:** sensitivity to priors and the assumption that a true model is in the set.
5. **Stacking** (weights chosen to optimise LOO predictive performance) is a predictive alternative that doesn't assume a true model.
6. **Implementations:** reversible-jump MCMC, indicator variables, or fitting each model and weighting afterwards.

## In R
```r
set.seed(10); w <- c(0.55, 0.35, 0.10); pick <- sample(1:3, 5000, TRUE, prob = w); mu <- c(5.9, 5.2, 7.4)[pick]; ypred <- rnorm(5000, mu, 0.4)
round(quantile(ypred, c(0.025, 0.5, 0.975)), 2)
```

## In the course
[[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"BMA picks the best model."** It keeps all models in proportion to their probability.

## Explain it back
- How does BMA differ from stacking?

*Pass test:* you can describe a BMA prediction.

## Connections
- **Builds on:** [[Model Probabilities]], [[Model Averaging]]
- **Leads to:** [[Mixture Distribution]], [[Reversible-jump MCMC]], [[Indicator Variable Selection]]
- **Part of:** [[MOC - Bayesian Model Selection]]

## Flashcards

What weights does Bayesian model averaging use?
??
Posterior model probabilities.
++++

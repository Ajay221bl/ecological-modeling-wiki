---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Bayesian model averaging combines the posteriors or predictions of several models, weighting each by its posterior model probability."
aliases:
  - "BMA"
  - "Bayesian model averaging (BMA)"
status: seedling
---

# Bayesian Model Averaging

**Bayesian model averaging** (BMA) combines the posteriors or predictions of several models, weighting each by its posterior model probability ([[Model Probabilities]]). For a prediction, p(ỹ | y) = Σₖ p(ỹ | y, Mₖ) P(Mₖ | y). The result is a [[Mixture Distribution]], wider than any single model's when the models disagree, so model uncertainty is accounted for automatically. It is the Bayesian counterpart of AIC-based [[Model Averaging]].

In the code below predictions from three models centred on 5.9, 5.2 and 7.4, with weights 0.55, 0.35 and 0.10, are mixed: the averaged prediction has median 5.7 and a 95% interval of 4.6 to 7.7, wider than any one model's. It can be implemented with [[Reversible-jump MCMC]], with [[Indicator Variable Selection]], or by fitting each model and weighting afterwards.

It shares the weaknesses of Bayes factors: sensitivity to priors and the assumption that a true model is in the set. Stacking, with weights chosen to optimise LOO predictive performance, is a predictive alternative that doesn't assume a true model ([[Hobbs and Hooten 2015 Ch9]]). BMA does not pick the best model; it keeps all models in proportion to their probability.

```r
set.seed(10); w <- c(0.55, 0.35, 0.10); pick <- sample(1:3, 5000, TRUE, prob = w); mu <- c(5.9, 5.2, 7.4)[pick]; ypred <- rnorm(5000, mu, 0.4)
round(quantile(ypred, c(0.025, 0.5, 0.975)), 2)
```

## Connections
- **Builds on:** [[Model Probabilities]], [[Model Averaging]]
- **Leads to:** [[Mixture Distribution]], [[Reversible-jump MCMC]], [[Indicator Variable Selection]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What weights does Bayesian model averaging use?
??
Posterior model probabilities.
++++

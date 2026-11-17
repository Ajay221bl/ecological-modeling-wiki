---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "A Bayes factor is the ratio of two models' marginal likelihoods, saying how many times more probable the data are under one model than the other."
aliases:
  - "Bayes factors"
  - "BF"
  - "BF₁₀"
status: seedling
---

# Bayes Factor

Two theories each place a bet before the data arrive, spreading their stake over the outcomes they think plausible; a theory that hedged across every possibility gains little whatever happens. A **Bayes factor** says whose bet paid off better: it is the ratio of two models' [[Marginal Likelihood|marginal likelihoods]], BF₁₂ = p(y | M₁) / p(y | M₂), saying how many times more probable the data are under one model than the other. Each marginal likelihood averages the likelihood over that model's prior. With 3 successes in 10, a model fixing p = 0.5 gives P(data) = 0.117 and a model with p ~ Uniform(0, 1) gives 1/11 = 0.091, so BF₁₂ = 1.29, barely any preference.

By [[Bayes' Theorem]] applied to models, posterior odds = Bayes factor × prior odds, so with equal prior odds the BF is the posterior odds ([[Model Probabilities]]). Kass and Raftery's scale reads 1 to 3 as barely worth mentioning, 3 to 20 positive, 20 to 150 strong and over 150 very strong. Unlike a p-value, which can only fail to reject, a Bayes factor below 1 can support the simpler model. It is very sensitive to priors: widening a vague prior lowers the marginal likelihood and so favours the simpler model, even with the same data (Lindley's paradox), and improper priors make it undefined. In the code below an observed mean of 0.3 (SE 0.15) gives a Bayes factor for "μ = 0" of 0.56 when the alternative's prior has sd 0.5, but 4.5 with sd 5 and 45 with sd 50.

It is hard to compute for complex models, by bridge sampling (`brms::bayes_factor()`), Savage-Dickey ratios or [[BIC]] as a crude approximation. It plays the role of a [[Likelihood Ratio]] or [[Evidence Ratio]] for whole models and feeds [[Bayesian Model Averaging]] ([[Hobbs and Hooten 2015 Ch9]], [[Johnson and Omland 2004]]). Two confusions. A vague prior does not keep the Bayes factor neutral; it pushes it toward the simpler model. And a BF is not the probability that a model is true; converting it to a probability needs prior model probabilities.

```r
c(m1 = dbinom(3, 10, 0.5), m2 = 1 / 11, BF12 = dbinom(3, 10, 0.5) / (1 / 11))
ml <- function(w) integrate(function(m) dnorm(0.3, m, 0.15) * dnorm(m, 0, w), -Inf, Inf)$value      # observed mean 0.3 (SE 0.15). H0: mu = 0. H1: mu ~ Normal(0, w)
sapply(c(0.5, 5, 50), function(w) round(dnorm(0.3, 0, 0.15) / ml(w), 2))         # wider prior on H1 → more support for H0, same data
```

## Connections
- **Builds on:** [[Marginal Likelihood]], [[Bayes' Theorem]], [[Likelihood Ratio]]
- **Leads to:** [[Model Probabilities]], [[Bayesian Model Averaging]], [[BIC]], [[Evidence Ratio]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]], molecular note [[Bayes Factors vs Predictive Criteria]]

## Flashcards

What is a Bayes factor?
??
The ratio of the marginal likelihoods of two models: p(y | M₁) / p(y | M₂).
++++

How are posterior model odds related to the Bayes factor?
??
Posterior odds = Bayes factor × prior odds.
++++

Why are Bayes factors sensitive to vague priors?
??
Wider priors spread probability thin, lowering the marginal likelihood of the more complex model.
++++

---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Indicator variable selection multiplies each coefficient by a 0/1 switch that the sampler estimates, so the posterior mean of a switch is the probability that its predictor belongs in the model."
aliases:
  - "Gibbs variable selection"
  - "Kuo and Mallick"
  - "Inclusion indicators"
  - "Inclusion probability"
status: seedling
---

# Indicator Variable Selection

**Indicator variable selection** multiplies each [[Regression Coefficient|coefficient]] by a 0/1 switch that the sampler estimates: η = β₀ + z₁β₁x₁ + z₂β₂x₂ + ..., with each zⱼ ~ Bernoulli(0.5) or another prior inclusion probability ([[Bernoulli Distribution]]). The switches are [[Latent Variable|latent variables]], and the sampler turns [[Predictor Variable|predictors]] in and out. The [[Posterior Summary|posterior mean]] of zⱼ is the posterior inclusion probability, the probability that predictor j belongs in the model.

Each combination of switches is a model, so the chain explores the model space and averages over it, a form of [[Bayesian Model Averaging]] that is simpler than [[Reversible-jump MCMC]]. It is easy in JAGS, which handles discrete switches; Stan needs a continuous approximation such as a [[Spike-and-slab Prior]] or a horseshoe. The commented JAGS fragment below shows the structure: a switch and a coefficient for each predictor, and the [[Linear Predictor|linear predictor]] built from their product.

It is sensitive to the prior on β when switched on: too wide a prior and the predictor is rarely included ([[Hobbs and Hooten 2015 Ch9]]). An inclusion probability is not like a p-value; it is a [[Posterior Distribution|posterior probability]] that the term belongs, under the stated priors.

```r
# norun (JAGS model fragment, shown for structure)
# for (j in 1:J) { z[j] ~ dbern(0.5); b[j] ~ dnorm(0, 1) }
# for (i in 1:n) { mu[i] <- b0 + inprod(z[] * b[], X[i, ]) ; y[i] ~ dnorm(mu[i], tau) }
```

## Connections
- **Builds on:** [[Bernoulli Distribution]], [[Latent Variable]], [[Regression Coefficient]], [[Predictor Variable]], [[Posterior Summary]], [[Linear Predictor]], [[Posterior Distribution]]
- **Leads to:** [[Spike-and-slab Prior]], [[Reversible-jump MCMC]], [[Bayesian Model Averaging]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

In indicator variable selection, what is the posterior mean of an indicator?
??
The posterior probability that the corresponding predictor is included.
++++

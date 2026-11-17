---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "BUGS and JAGS are programs that fit Bayesian models written in a simple model language, using Gibbs sampling and related methods."
aliases:
  - "JAGS"
  - "BUGS"
  - "WinBUGS"
  - "OpenBUGS"
  - "rjags"
  - "R2jags"
  - "Just Another Gibbs Sampler"
status: seedling
---

# JAGS and BUGS

**BUGS**, from the 1990s, was the first widely used "write the model, get the posterior" program, and **JAGS** ("Just Another Gibbs Sampler") is its open-source, cross-platform successor; Stan is a newer design with a different engine. You write the model as statements such as `y[i] ~ dpois(lambda[i])`, `log(lambda[i]) <- b0 + b1 * x[i]` and `b0 ~ dnorm(0, 0.001)`, where `~` means "is distributed as" and `<-` "is computed as". The language is declarative, so the order of lines doesn't matter, and the program works out the full conditionals and samples them, mainly by [[Gibbs Sampling]] ([[Directed Acyclic Graph]]).

Normals use precision, `dnorm(mean, tau)`, so `dnorm(0, 0.001)` means a standard deviation of about 32 ([[Precision Parameter]]). The strength of JAGS is that discrete latent variables such as occupancy states or alive/dead status are handled directly, which Stan can't do without marginalising ([[Latent Variable]]); its weakness is slower mixing for correlated or hierarchical parameters. From R it is run with `rjags`, `R2jags` or `jagsUI`, and NIMBLE is a newer relative using the same language. The code below, not run in the wiki build because it needs JAGS, writes a Poisson regression in the JAGS language and shows the commented calls that would fit it.

Hobbs and Hooten's book and much of the ecological literature use JAGS ([[Hobbs and Hooten 2015 Ch7]]), and it is mentioned beside [[Stan]] in the lectures ([[Course Website]]). `dnorm(0, 0.001)` is not a tight prior: in JAGS the second argument is precision, so it is very wide.

```r
# norun (needs JAGS; shown for the language)
model_string <- "model {
  for (i in 1:n) {
    y[i] ~ dpois(lambda[i])
    log(lambda[i]) <- b0 + b1 * x[i]
  }
  b0 ~ dnorm(0, 0.001)     # precision 0.001 = sd about 32
  b1 ~ dnorm(0, 0.001)
}"
# jm <- rjags::jags.model(textConnection(model_string), data = list(y = y, x = x, n = length(y)), n.chains = 3)
# post <- rjags::coda.samples(jm, c("b0", "b1"), n.iter = 5000)
```

## Connections
- **Builds on:** [[Gibbs Sampling]], [[Precision Parameter]]
- **Leads to:** [[Stan]], [[Latent Variable]], [[Directed Acyclic Graph]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[JAGS vs Stan]]

## Flashcards

What are BUGS and JAGS?
??
Software for Bayesian modeling via Gibbs sampling, using a declarative model language.
++++

How does JAGS parameterise the normal distribution?
??
By mean and precision (1/variance).
++++

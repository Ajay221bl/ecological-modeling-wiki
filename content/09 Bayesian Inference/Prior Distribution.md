---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A prior distribution describes which values of a parameter are plausible before the current data are taken into account."
aliases:
  - "Prior"
  - "Priors"
  - "Prior probability"
  - "Prior belief"
  - "P(θ)"
status: seedling
---

# Prior Distribution

Before a match the bookmaker posts odds based on what is already known about the teams; as the game unfolds the odds change, but they had to start somewhere. A **prior distribution** is that starting point: a probability distribution describing which values of a [[Parameter]] are plausible before the current data are used ([[Probability Distribution]]). Every parameter in a Bayesian model needs one, and it enters through [[Bayes' Theorem]]. Its range should match the parameter, so a standard deviation gets a positive-only prior and a probability one on 0 to 1, and its width says how much you know. If earlier studies of similar birds found annual survival around 0.5 to 0.7, a Beta(12, 8) prior, with mean 0.6 and 95% of its mass between 0.38 and 0.80, says so; if nothing is known, Beta(1, 1) spreads plausibility evenly.

Priors come from earlier studies, pilot data, biological limits or the scale of the data, never from the data being analysed, which would use them twice. Their influence shrinks as data accumulate, and a sensible prior also regularises, stopping estimates running off to absurd values when data are thin. They come in three broad kinds, shown in the figure: [[Informative Prior]], [[Weakly Informative Prior]] and [[Vague Prior]]. The code below shows what Beta(12, 8) claims, plots it against a flat prior, and shows that a Normal(0, 2.5) prior on a logit-scale slope allows odds ratios from about 0.007 to 134.

State and justify your priors in the methods, check what they imply with a [[Prior Predictive Check]], and show with a [[Prior Sensitivity Analysis]] how much they matter. In the brms labs priors are set with `prior()` ([[Course Website]], [[Hobbs and Hooten 2015 Ch5]]). Priors are not a way to cheat: they are stated openly and can be challenged. And "no prior" is not "no assumption": a flat prior is still a prior, and it is not flat on other scales.

![[Prior types.png|700]]
*What to look at:* the same parameter under a flat, a weakly informative and an informative prior.

```r
qbeta(c(0.025, 0.975), 12, 8); 12 / (12 + 8)                    # what Beta(12, 8) claims
curve(dbeta(x, 12, 8), 0, 1, ylab = "Prior density", xlab = "Survival probability"); curve(dbeta(x, 1, 1), add = TRUE, lty = 2)
qnorm(c(0.025, 0.975), 0, 2.5)                                  # a Normal(0, 2.5) prior on a logit-scale slope allows odds ratios from about 0.007 to 134
```

## Connections
- **Builds on:** [[Bayes' Theorem]], [[Probability Distribution]]
- **Leads to:** [[Posterior Distribution]], [[Informative Prior]], [[Weakly Informative Prior]], [[Vague Prior]], [[Prior Predictive Check]], [[Prior Sensitivity Analysis]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to choose a prior]]

## Flashcards

What is a prior distribution?
??
A probability distribution describing plausible parameter values before seeing the current data.
![[Prior types.png]]
++++

What happens to the prior's influence as sample size grows?
??
It diminishes. The likelihood dominates the posterior.
++++

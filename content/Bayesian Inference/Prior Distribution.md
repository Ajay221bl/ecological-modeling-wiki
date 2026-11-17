---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Prior"
  - "Priors"
  - "Prior probability"
  - "Prior belief"
  - "P(θ)"
status: seedling
---

# Prior Distribution

**In one line:** a prior distribution describes which values of a parameter are plausible before the current data are taken into account.

> [!info] Before this, it helps to know
> [[Bayes' Theorem]] (where it enters) · [[Probability Distribution]] (what it is) · [[Parameter]] (what it describes)

## The everyday picture
The opening odds. Before a match the bookmaker posts odds based on what is already known about the teams. As the game unfolds the odds are revised, but they had to start somewhere.

## A tiny example
A survival probability must lie between 0 and 1. If earlier studies of similar birds found annual survival around 0.5 to 0.7, a Beta(12, 8) prior (mean 0.6, most mass between 0.4 and 0.8) says so. If nothing is known, Beta(1, 1) spreads plausibility evenly.

## Start from zero
1. **Every parameter in a Bayesian model needs one.**
2. **It is a probability distribution over parameter values.**
3. **Its support should match the parameter:** a standard deviation gets a positive-only prior, a probability gets one on 0 to 1.
4. **Its width expresses how much you know.** Narrow: confident. Wide: unsure.
5. **Sources:** earlier studies, pilot data, biological limits, the scale of the data.
6. **It must not come from the data being analysed.** That would use the data twice.
7. **Its influence shrinks as data accumulate.** With many observations the likelihood dominates.
8. **Types:** informative, weakly informative, vague. Each has its own note.
9. **It also regularises:** a sensible prior stops estimates running off to absurd values when data are thin.
10. **State your priors and justify them** in the methods.

## See it
![[Prior types.png|700]]
*What to look at:* the same parameter under a flat, a weakly informative and an informative prior.

## In R
```r
qbeta(c(0.025, 0.975), 12, 8); 12 / (12 + 8)                    # what Beta(12, 8) claims
curve(dbeta(x, 12, 8), 0, 1, ylab = "Prior density", xlab = "Survival probability"); curve(dbeta(x, 1, 1), add = TRUE, lty = 2)
qnorm(c(0.025, 0.975), 0, 2.5)                                  # a Normal(0, 2.5) prior on a logit-scale slope allows odds ratios from about 0.007 to 134
```

## In the course
[[Hobbs and Hooten 2015 Ch5]]. Set explicitly with `prior()` in the brms labs ([[Course Website]]).

## Common confusions
- **"Priors are a way to cheat."** They are stated openly and can be challenged, and a sensitivity analysis shows how much they matter.
- **"No prior means no assumption."** A flat prior is still a prior, and it is not flat on other scales.

## Explain it back
- Where may prior information come from, and where must it not?
- What happens to the prior's influence as n grows?

*Pass test:* you can propose and justify a prior for a probability and for a slope.

## Connections
- **Builds on:** [[Bayes' Theorem]], [[Probability Distribution]]
- **Leads to:** [[Posterior Distribution]], [[Informative Prior]], [[Weakly Informative Prior]], [[Vague Prior]], [[Prior Predictive Check]], [[Prior Sensitivity Analysis]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[How to choose a prior]]

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

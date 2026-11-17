---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - bayes
aliases:
  - "Informative, Weakly Informative and Vague Priors"
  - "Choosing priors"
status: seedling
---

# How to choose a prior

> [!summary] In plain words
> choose a prior by matching its support to the parameter, setting its width from what is physically or biologically plausible on the model's scale, checking what it implies by simulation, and testing whether the conclusions survive a different reasonable choice.

## The question
I have to put a prior on every parameter. How do I decide what it should be without either rigging the result or letting in nonsense?

## Built from
- [[Prior Distribution]]: what is being chosen.
- [[Informative Prior]], [[Weakly Informative Prior]], [[Vague Prior]]: the range of strengths.
- [[Half-Normal Prior]] and [[Half-Cauchy Prior]]: for standard deviations.
- [[Prior Predictive Check]]: testing the choice.
- [[Prior Sensitivity Analysis]]: reporting its influence.

## See it
![[Prior types.png|700]]
*What to look at:* three strengths of prior for one parameter.

## The reasoning, step by step
1. **Match the support.** Probability: beta. Positive quantity: half-normal, exponential, gamma, lognormal. Any real number: normal or Student-t.
2. **Know the scale.** A slope on the logit or log scale of 3 is already enormous. Standardise predictors so that one default suits all slopes.
3. **Decide the strength.** Real earlier evidence: informative, with the source cited. Otherwise weakly informative: generous but finite.
4. **Avoid extremely wide "vague" priors** on link scales and on variance parameters. They put most weight on absurd values.
5. **Simulate from the priors.** Do the implied data look possible?
6. **Fit, then compare prior and posterior.** If they are the same, the data told you nothing about that parameter.
7. **Refit with a wider and a narrower prior.** Report whether conclusions change.
8. **Write it down:** every prior and its reason go in the methods.

| Parameter | Reasonable default (standardised predictors) |
|---|---|
| Slope, logit or log link | Normal(0, 1) to Normal(0, 2.5) |
| Slope, identity link, standardised y | Normal(0, 1) |
| Intercept | Normal(expected mean on the link scale, generous sd) |
| Group-level sd | Half-normal(0, 1) or Exponential(1) |
| Probability | Beta(1, 1) or Beta(2, 2) |

**A worked example in numbers.** Normal(0, 10) on a logit slope puts about 76% of its mass on odds ratios above 20 or below 1/20 per unit. Normal(0, 1) puts about 0.3% there.

## So in practice
In brms: `get_prior()` to see what is needed, `prior()` to set it, `sample_prior = "only"` plus `pp_check()` to test it.

## What would go wrong otherwise
Flat priors on everything give slow, unstable sampling and can allow improper posteriors. Tight priors with no justification invite the charge of fixing the answer.

## Explain it back
- Walk through choosing a prior for a slope in a Poisson regression.

*Pass test:* you can justify every prior in a model in a sentence each.

## Connections
- **Related:** [[Proper vs Improper Prior]], [[Prior Predictive vs Posterior Predictive Check]], [[Why the posterior is proportional to likelihood times prior]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Bayesian Inference]]

## Flashcards

What is the first requirement of any prior?
??
Its support must match the possible values of the parameter.
![[Prior types.png]]
++++

How do you test whether priors are sensible before fitting?
??
With a prior predictive check: simulate data from the priors and see whether they are plausible.
++++

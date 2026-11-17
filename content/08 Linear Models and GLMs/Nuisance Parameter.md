---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Nuisance parameters"
status: seedling
---

# Nuisance Parameter

**In one line:** a nuisance parameter is a parameter that must be in the model for it to be realistic but that is not itself of scientific interest.

> [!info] Before this, it helps to know
> [[Parameter]] (the general idea) · [[Marginal Probability]] (how Bayesians remove them) · [[Likelihood Profile]] (how likelihoodists do)

## The everyday picture
The baggage handler at an airport. You care about the passenger arriving. The trip can't happen without the luggage being dealt with, but nobody flew for the sake of the luggage.

## A tiny example
You want survival probability. Animals aren't always seen, so the model also needs a detection probability. Detection is the nuisance parameter. Leave it out and survival is underestimated.

## Start from zero
1. **A realistic model has more parameters than you care about.** Detection probabilities, residual variances, overdispersion parameters, block effects.
2. **They can't be dropped.** Omitting them biases the parameters of interest.
3. **They can't be ignored either.** Uncertainty about them feeds into uncertainty about what you do care about.
4. **Likelihood approach:** profile them out by maximising over them.
5. **Bayesian approach:** integrate them out. Look at the marginal posterior of the interesting parameter.
6. **One person's nuisance is another's target.** Detection is central to survey design.

## In R
```r
set.seed(14); S <- 0.7; p_detect <- 0.5; alive <- rbinom(20000, 1, S); seen <- alive * rbinom(20000, 1, p_detect)
mean(seen)                # naive "survival" about 0.35: really survival x detection
mean(seen) / p_detect     # corrected, if detection is known or estimated
```

## In the course
[[Powell and Gale 2015 Ch3]] treats detection as the classic nuisance parameter. [[Hobbs and Hooten 2015 Ch6]] marginalises them.

## Common confusions
- **"Nuisance parameters can be fixed at a guess."** Then their uncertainty is ignored and intervals are too narrow.

## Explain it back
- Why does omitting detection probability bias survival?

*Pass test:* you can identify nuisance parameters in a model.

## Connections
- **Builds on:** [[Parameter]]
- **Leads to:** [[Detection Probability]], [[Marginal Posterior Distribution]], [[Likelihood Profile]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is a nuisance parameter?
??
A parameter needed for a correct model but not of direct interest, such as detection probability when estimating survival.
++++

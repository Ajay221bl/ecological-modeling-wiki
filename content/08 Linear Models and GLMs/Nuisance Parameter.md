---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A nuisance parameter is a parameter that must be in the model for it to be realistic but that is not itself of scientific interest."
aliases:
  - "Nuisance parameters"
status: seedling
---

# Nuisance Parameter

At an airport you care about the passenger arriving; the trip cannot happen without the luggage being dealt with, but nobody flew for the sake of the luggage. A **nuisance parameter** is like the luggage: a [[Parameter]] that must be in the model for it to be realistic but that is not itself of scientific interest. Realistic models have more parameters than you care about: detection probabilities, residual variances, overdispersion parameters, block effects. For example, if you want survival probability but animals are not always seen, the model also needs a [[Detection Probability]], which is the nuisance.

Nuisance parameters cannot be dropped, because omitting them biases the parameters of interest. In the code below, true survival is 0.7 and detection 0.5. Counting only the animals seen gives a naive "survival" of about 0.35, really survival × detection; dividing by detection recovers 0.7. Nor can they be ignored or fixed at a guess, because uncertainty about them feeds into uncertainty about what you do care about, and fixing them makes intervals too narrow.

The likelihood approach profiles them out, maximising over them at each value of the parameter of interest ([[Likelihood Profile]]). The Bayesian approach integrates them out, by looking at the marginal posterior of the interesting parameter ([[Marginal Posterior Distribution]], [[Hobbs and Hooten 2015 Ch6]]). Powell and Gale treat detection as the classic nuisance parameter ([[Powell and Gale 2015 Ch3]]). One person's nuisance is another's target: detection is central to survey design.

```r
set.seed(14); S <- 0.7; p_detect <- 0.5; alive <- rbinom(20000, 1, S); seen <- alive * rbinom(20000, 1, p_detect)
mean(seen)                # naive "survival" about 0.35: really survival x detection
mean(seen) / p_detect     # corrected, if detection is known or estimated
```

## Connections
- **Builds on:** [[Parameter]]
- **Leads to:** [[Detection Probability]], [[Marginal Posterior Distribution]], [[Likelihood Profile]]
- **See also:** [[Marginal Probability]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is a nuisance parameter?
??
A parameter needed for a correct model but not of direct interest, such as detection probability when estimating survival.
++++

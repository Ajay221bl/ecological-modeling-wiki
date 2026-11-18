---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A vague prior spreads plausibility so widely that the data, through the likelihood, almost entirely determine the posterior."
aliases:
  - "Noninformative prior"
  - "Non-informative prior"
  - "Diffuse prior"
  - "Flat prior"
  - "Uninformative prior"
  - "Uniform prior"
status: seedling
---

# Vague Prior

A juror who has heard nothing about a case will be led by the evidence, but even "no opinion" is a starting position, and it can look different depending on how the question is put. A **vague prior**, also called flat, diffuse or "non-informative", spreads plausibility so widely that the data, through the likelihood, almost entirely determine the posterior ([[Prior Distribution]]). Examples are Uniform(0, 1) on a probability ([[Uniform Distribution]]), Normal(0, 1000) on a slope and Uniform(0, 100) on a [[Standard Deviation|standard deviation]]. With plenty of data the posterior then resembles the likelihood and estimates resemble [[Maximum Likelihood Estimation|maximum likelihood]].

It has three problems. Flat on one scale isn't flat on another: in the code below, a Normal(0, 10) prior on the [[Link Scale|logit scale]] puts 64% of its mass on probabilities within 1% of 0 or 1, a U shape on the probability scale. Vague priors allow absurd values, so Normal(0, 1000) on a [[Logit Link|logit]] slope gives real weight to odds ratios of e¹⁰⁰⁰. And they can make sampling slow or unstable, above all for variance parameters with few groups.

So "vague" isn't automatically "safe", and a [[Weakly Informative Prior]] is now usually preferred; the opposite extreme is an [[Informative Prior]]. Very wide priors shade into the [[Improper Prior]], and the [[Jeffreys Prior]] was one attempt to fix the scale problem. [[Hobbs and Hooten 2015 Ch5]] warns that no prior is truly non-informative: they always assert something, sometimes something silly.

```r
set.seed(7); eta <- rnorm(10000, 0, 10)                              # a "vague" Normal(0, 10) prior on the logit scale
p <- plogis(eta); mean(p < 0.01 | p > 0.99)                          # most of its mass says the probability is within 1% of 0 or 1
hist(p, breaks = 50, main = "Flat-looking on the logit scale, U-shaped on the probability scale")
```

## Connections
- **Builds on:** [[Prior Distribution]], [[Standard Deviation]], [[Maximum Likelihood Estimation]], [[Link Scale]], [[Logit Link]]
- **Leads to:** [[Weakly Informative Prior]], [[Informative Prior]], [[Improper Prior]], [[Jeffreys Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to choose a prior]]

## Flashcards

What is a vague prior?
??
A very wide prior intended to let the data dominate the posterior.
++++

Why is no prior truly noninformative?
??
A prior that is flat on one scale is informative on a transformed scale.
++++

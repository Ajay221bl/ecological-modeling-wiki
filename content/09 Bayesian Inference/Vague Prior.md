---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
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

**In one line:** a vague prior spreads plausibility so widely that the data, through the likelihood, almost entirely determine the posterior.

> [!info] Before this, it helps to know
> [[Prior Distribution]] (the general idea) · [[Uniform Distribution]] (the simplest example)

## The everyday picture
A juror who has heard nothing about the case. They'll be led by the evidence. But even "no opinion" is a starting position, and it can look different depending on how the question is phrased.

## Start from zero
1. **Aim:** let the data speak.
2. **Examples:** Uniform(0, 1) on a probability. Normal(0, 1000) on a slope. Uniform(0, 100) on a standard deviation.
3. **With plenty of data** the posterior resembles the likelihood, and estimates resemble maximum likelihood.
4. **Problem 1: flat on one scale isn't flat on another.** A flat prior on the logit scale piles probability near 0 and 1.
5. **Problem 2: they allow absurd values.** Normal(0, 1000) on a logit slope gives real weight to odds ratios of e^1000.
6. **Problem 3: they can make sampling slow or unstable,** above all for variance parameters with few groups.
7. **So "vague" isn't automatically "safe".** Weakly informative priors are now usually preferred.

## In R
```r
set.seed(7); eta <- rnorm(10000, 0, 10)                              # a "vague" Normal(0, 10) prior on the logit scale
p <- plogis(eta); mean(p < 0.01 | p > 0.99)                          # most of its mass says the probability is within 1% of 0 or 1
hist(p, breaks = 50, main = "Flat-looking on the logit scale, U-shaped on the probability scale")
```

## In the course
[[Hobbs and Hooten 2015 Ch5]] discusses vague priors and warns that none is truly non-informative.

## Common confusions
- **"Noninformative priors contain no information."** They always assert something, sometimes something silly.

## Explain it back
- Why isn't a flat prior on the logit scale neutral about probability?

*Pass test:* you can name two problems with very wide priors.

## Connections
- **Builds on:** [[Prior Distribution]]
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

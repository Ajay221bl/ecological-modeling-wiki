---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "An informative prior concentrates plausibility on a narrow range of parameter values because earlier evidence justifies doing so."
aliases:
  - "Informative priors"
  - "Strong prior"
  - "Subjective prior"
status: seedling
---

# Informative Prior

An experienced doctor starts with firm expectations from thousands of patients, and when a single test is ambiguous those expectations rightly dominate. An **informative prior** concentrates plausibility on a narrow range of values because earlier evidence justifies it ([[Prior Distribution]]). It is built from real knowledge such as published estimates, a pilot study, a meta-analysis or physical limits, and it is narrow relative to what the data alone could say, so it visibly pulls the [[Posterior Distribution]] when the sample is small.

The usual way to build one is [[Moment Matching]]: choose the prior's parameters so its mean and [[Standard Deviation|standard deviation]] match an earlier estimate and its uncertainty. In the code below an earlier survival estimate of 0.62 with [[Standard Error|standard error]] 0.05 becomes a Beta(57.8, 35.4) prior. With 4 survivors out of 12 new birds, the [[Posterior Summary|posterior median]] is 0.59 (95% interval 0.49 to 0.68); under a flat prior it would be 0.35 (0.14 to 0.61). The informative prior gives a far more precise estimate, and it would bias the answer if it were wrong.

[[Hobbs and Hooten 2015 Ch5]] argues that informative priors are a strength where knowledge exists. Using one carries obligations: cite the source and show a [[Prior Sensitivity Analysis]] with a weaker prior, such as a [[Weakly Informative Prior]] or [[Vague Prior]]. "Informative priors are biased, so avoid them" is a confusion: throwing away real prior knowledge is also a choice, with a cost in precision.

```r
m <- 0.62; s <- 0.05; k <- m * (1 - m) / s^2 - 1; c(a = m * k, b = (1 - m) * k)       # Beta prior matching an earlier survival estimate of 0.62 (SE 0.05)
a <- m * k; b <- (1 - m) * k; y <- 4; n <- 12
rbind(informative = qbeta(c(.025, .5, .975), a + y, b + n - y), flat = qbeta(c(.025, .5, .975), 1 + y, 1 + n - y))
```

## Connections
- **Builds on:** [[Prior Distribution]], [[Standard Deviation]], [[Standard Error]], [[Posterior Summary]]
- **Leads to:** [[Vague Prior]], [[Weakly Informative Prior]], [[Prior Sensitivity Analysis]], [[Moment Matching]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to choose a prior]]

## Flashcards

What is an informative prior?
??
A prior that concentrates probability on a narrow range of values, based on earlier knowledge.
++++

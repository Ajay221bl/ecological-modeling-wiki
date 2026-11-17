---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Observation model"
  - "Sampling model"
  - "Measurement model"
  - "Data layer"
status: seedling
---

# Data Model

**In one line:** the data model is the layer of a hierarchical model that describes how the observations you recorded arise from the true, unobserved state, including observation error.

> [!info] Before this, it helps to know
> [[Hierarchical Model]] (the structure) · [[Observation Error]] (what it captures) · [[Likelihood]] (its mathematical form)

## The everyday picture
A bathroom scale. Your true weight is one thing. The number on the display is another, since the scale wobbles and may read a little high. The data model describes the scale.

## Start from zero
1. **Written [y | z, θ_d]:** the distribution of the data y given the true state z.
2. **It answers: given the truth, what would I record?**
3. **Examples:** count ~ Binomial(N, p) when each of N animals is detected with probability p. Measured mass ~ Normal(true mass, σ_obs). Detected (0/1) ~ Bernoulli(z × p).
4. **It encodes the sampling design:** effort, detection, measurement precision.
5. **It is the likelihood** linking data to the latent process.
6. **If observation is perfect** the data model disappears and the data are the process.

## In R
```r
set.seed(2); N_true <- 80; p_detect <- 0.6
y <- rbinom(5, N_true, p_detect); y                                  # five surveys of the same 80 animals: none sees all of them
mean(y) / p_detect                                                   # correcting for detection recovers roughly 80
```

## In the course
[[Hobbs and Hooten 2015 Ch6]].

## Common confusions
- **"The data are the truth."** They are the truth seen through an observation process.

## Explain it back
- What question does the data model answer?

*Pass test:* you can write a data model for counts with imperfect detection.

## Connections
- **Builds on:** [[Hierarchical Model]], [[Observation Error]]
- **Leads to:** [[Process Model]], [[Parameter Model]], [[Detection Probability]], [[Latent Variable]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[Data Model, Process Model and Parameter Model]]

## Flashcards

What does the data model describe?
??
How observations arise from the true (latent) state, including measurement and detection error.
++++

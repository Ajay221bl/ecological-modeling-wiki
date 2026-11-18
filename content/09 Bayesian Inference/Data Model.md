---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The data model is the layer of a hierarchical model that describes how the observations you recorded arise from the true, unobserved state, including observation error."
aliases:
  - "Observation model"
  - "Sampling model"
  - "Measurement model"
  - "Data layer"
status: seedling
---

# Data Model

Your true weight is one thing; the number on the bathroom scale is another, because the scale wobbles and may read a little high. The **data model**, or observation model, describes the scale: it is the layer of a [[Hierarchical Model]] that says how the observations you recorded arise from the true, unobserved state, including [[Observation Error]]. It is written [y | z, θ_d], the distribution of the data y given the true state z, and answers the question "given the truth, what would I record?".

Examples: count ~ Binomial(N, p) when each of N animals is detected with probability p ([[Detection Probability]]); measured mass ~ Normal(true mass, σ_obs); detected (0/1) ~ Bernoulli(z × p). It encodes the [[Study Design|sampling design]], meaning effort, detection and measurement precision, and it is the [[Likelihood]] linking the data to the latent process ([[Latent Variable]]). In the code below, five surveys of the same 80 animals with detection probability 0.6 record 49, 41, 51, 49 and 43; none sees them all, and dividing the mean count by 0.6 gives about 78, close to the true 80.

If observation is perfect, the data model disappears and the data are the process. It sits below the [[Process Model]] and the [[Parameter Model]] ([[Hobbs and Hooten 2015 Ch6]]). The data are not the truth: they are the truth seen through an observation process.

```r
set.seed(2); N_true <- 80; p_detect <- 0.6
y <- rbinom(5, N_true, p_detect); y                                  # five surveys of the same 80 animals: none sees all of them
mean(y) / p_detect                                                   # correcting for detection recovers roughly 80
```

## Connections
- **Builds on:** [[Hierarchical Model]], [[Observation Error]], [[Study Design]]
- **Leads to:** [[Process Model]], [[Parameter Model]], [[Detection Probability]], [[Latent Variable]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Data Model, Process Model and Parameter Model]]

## Flashcards

What does the data model describe?
??
How observations arise from the true (latent) state, including measurement and detection error.
++++

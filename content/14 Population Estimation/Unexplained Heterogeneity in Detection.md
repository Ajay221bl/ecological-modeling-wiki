---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Unexplained heterogeneity in detection means the chance of detecting a present species differs among sites or surveys for reasons the model does not include, which biases occupancy low."
aliases:
  - "No unexplained heterogeneity in detectability"
  - "Detection heterogeneity"
  - "Heterogeneous detection probability"
status: seedling
---

# Unexplained Heterogeneity in Detection

If some houses keep their cat indoors and others let it lounge on the front step, a single "chance of seeing the cat" averages two very different numbers. **Unexplained heterogeneity in detection** means the chance of detecting a present species differs among sites or surveys for reasons the model does not include ([[Detection Probability]], [[Observation Covariates]]). The guest lecture's assumption is "no unexplained heterogeneity in detectability": p is the same across all surveys and sites, or its differences are explained by site or survey covariates in the model. If it is violated, "error rates for detection" go up.

This one is dangerous because it biases ψ̂ low, and more visits do not fix it. The sites where p is low are the ones most likely to end up with all-zero histories, and a single average p over-predicts how often those sites would have shown a detection, so the model counts too many of them as empty. In the code below true occupancy is 0.60; half the occupied sites have p = 0.15 and half p = 0.80. [[Naive Occupancy|Naive occupancy]] is 0.42, and the constant-p model gives ψ̂ = 0.44, barely better. The same problem in [[Mark-Recapture|mark-recapture]] is the reason for model Mh ([[Capture Heterogeneity Models]]).

The cure is to measure what changes detection (weather, date, time of day, observer, bait, vegetation density) and put it in p, or to use a [[Mixture Distribution|mixture]] or random-effect model for p when it cannot be measured ([[Occupancy Guest Lecture]], [[Random Effect]]). [[Happe et al. 2020]] modelled fisher detection with date, a squared date term, year, bait and percent wilderness for exactly this reason ([[Quadratic Term]]). Low detection is not the problem in itself; a constant, low p is handled well. The trouble is p that varies without being modelled.

```r
set.seed(3); S <- 400; K <- 3; z <- rbinom(S, 1, 0.6)
p_site <- ifelse(runif(S) < 0.5, 0.15, 0.80)          # two kinds of site, unrecorded
y <- matrix(rbinom(S * K, 1, z * p_site), S, K); d <- rowSums(y)
nll <- function(b) { ps <- plogis(b[1]); pp <- plogis(b[2]); -sum(log(ps * pp^d * (1 - pp)^(K - d) + (1 - ps) * (d == 0))) }
o <- optim(c(0, 0), nll)
round(c(true = mean(z), naive = mean(d > 0), psi_hat_constant_p = plogis(o$par[1])), 2)
```

## Connections
- **Builds on:** [[Detection Probability]], [[Observation Covariates]], [[Naive Occupancy]], [[Mark-Recapture]], [[Mixture Distribution]]
- **Leads to:** [[Unexplained Heterogeneity in Occupancy]], [[Capture Heterogeneity Models]], [[Random Effect]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Assumptions of Occupancy Models]]

## Flashcards

State the "no unexplained heterogeneity in detectability" assumption.
??
p is equal across sites and surveys, or its differences are explained by measured site or survey covariates.
++++

Which way does unmodelled variation in p bias ψ̂?
??
Low: hard-to-detect occupied sites are counted as empty.
++++

Is a low but constant p a problem for occupancy models?
??
Not in itself; it is handled. Unmodelled variation in p is the problem.
++++

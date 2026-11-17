---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "A single-season occupancy model estimates ψ and p from repeat detection or non-detection surveys of many sites within one closed season."
aliases:
  - "Single-season single-species occupancy"
  - "MacKenzie occupancy model"
  - "occu()"
  - "Static occupancy model"
status: seedling
---

# Single-season Occupancy

One summer of camera traps, each site checked several times, in a season short enough that a site's status does not change: that is the setting for a **single-season occupancy model**, which estimates ψ and p from repeat detection and non-detection surveys of many sites ([[Occupancy]], [[Detection History]], [[Closure Assumption]]). The design is a random sample of sites with at least two visits each, and more improves precision. Keep surveying after a detection: the later zeros at a known-occupied site are what tell you about p. The model is zᵢ ~ Bernoulli(ψᵢ) and yᵢⱼ ~ Bernoulli(zᵢ pᵢⱼ).

Powell and Gale (Ch15) list its assumptions: closure within the season; constant ψ and p across sites unless modelled with covariates; no false positives; and independent surveys and sites. Covariates enter through logit links, with logit(ψᵢ) from [[Site Covariates]] and logit(pᵢⱼ) from site and [[Observation Covariates]] ([[Logit Link]]). It is fitted by [[Maximum Likelihood Estimation]], with unmarked's `occu()`, Program PRESENCE or MARK, or by Bayesian MCMC ([[unmarked Package]]). In the code below 150 sites, where occupancy rises with forest cover, are fitted with base R's `optim()`; the estimates are b0 = −0.87, b_forest = 3.06 and p = 0.38, against the truth of −1, 3 and 0.4.

The guest lecture's worked example asks which forest conditions best predict spotted owl occupancy: 32 sites surveyed twice, with wind speed, cloud cover, date and time of day recorded for detection, and canopy cover, saplings, shrubs, forbs, ferns, grass and moss measured for occupancy ([[Occupancy Guest Lecture]], [[Course Website]], [[Powell and Gale 2015]] Ch15). [[Happe et al. 2020]] fitted the same model to reintroduced fishers, stacking years ([[Stacked Occupancy Design]], [[Fisher Occupancy Case Study]]). It is extended over years by [[Multi-season Occupancy]] and to several species by [[Multi-species Occupancy]]. Don't stop visiting once you find the species: classic surveys did, but occupancy models need the later visits to estimate p, with removal designs a special exception ([[Removal Sampling]]).

```r
set.seed(4); S <- 150; K <- 3; forest <- runif(S)
z <- rbinom(S, 1, plogis(-1 + 3 * forest)); y <- matrix(rbinom(S * K, 1, z * 0.4), S, K); d <- rowSums(y)
nll <- function(b) { ps <- plogis(b[1] + b[2] * forest); pp <- plogis(b[3]); -sum(log(ps * pp^d * (1 - pp)^(K - d) + (1 - ps) * (d == 0))) }
fit <- optim(c(0, 0, 0), nll, method = "BFGS")
round(c(b0 = fit$par[1], b_forest = fit$par[2], p = plogis(fit$par[3])), 2)  # truth: -1, 3, 0.4
```

## Connections
- **Builds on:** [[Occupancy]], [[Detection History]], [[Closure Assumption]], [[Logit Link]]
- **Leads to:** [[Multi-season Occupancy]], [[Stacked Occupancy Design]], [[Site Covariates]], [[Observation Covariates]], [[unmarked Package]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Assumptions of Occupancy Models]], [[Occupancy Workflow in R]], [[Single-season vs Multi-season Occupancy]]

## Flashcards

Write the single-season occupancy model in two lines.
??
z_i ~ Bernoulli(ψ_i); y_ij ~ Bernoulli(z_i × p_ij).
++++

Why must you keep surveying a site after detecting the species?
??
Later non-detections at a known-occupied site are what estimate p.
++++

---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The site independence assumption says that whether a species is present or detected at one site tells you nothing extra about another site, so each site's detection history counts as separate evidence."
aliases:
  - "Independence of sites (occupancy)"
  - "Sites are independent"
  - "Spatial independence of sites"
status: seedling
---

# Site Independence Assumption

If two neighbouring houses share one cat that wanders between them, seeing it at one house and then the other is really one cat counted twice. The **site independence assumption** says that whether a species is present or detected at one site tells you nothing extra about another site, so each site's [[Detection History]] counts as separate evidence ([[Independence of Observations]], [[Occupancy]]). It matters because the [[Occupancy Likelihood]] multiplies the sites' probabilities together, and multiplying is only correct for independent pieces of evidence ([[Independent Events]]). The guest lecture's warning is about spacing: if sites are closer together than an animal moves, one animal can occupy, and be detected at, several sites at once.

When sites are not independent, ψ̂ itself is often not badly biased, but the model thinks it has more information than it does, so standard errors are too small and confidence intervals too narrow ([[Pseudoreplication]], [[Standard Error]]). In the code below, 100 sites are really 50 pairs that share an animal. Over 300 simulated studies the true spread of the logit-scale ψ̂ is 0.357, but the average standard error the model reports is only 0.256, about 28% too small. The cures are design and modelling: space sites wider than a home range, sample every other cell of a grid, or add spatial structure to the model ([[Home Range]], [[Spatially Balanced Sampling]], [[Spatial Autocorrelation]]).

[[Happe et al. 2020]] sampled every other 24 km² hexagon "to enhance independence", and checked the assumption with DNA: of 21 individual fishers, only one male was detected in two adjacent hexes ([[Occupancy Guest Lecture]]). Independence of sites is not the same as independence of visits: [[Repeat-Visit Design|repeat visits]] to one site share a single true state z on purpose, and the model accounts for that.

```r
set.seed(2); K <- 3
fit <- function(y) { d <- rowSums(y)
  nll <- function(b) { ps <- plogis(b[1]); pp <- plogis(b[2]); -sum(log(ps * pp^d * (1 - pp)^(K - d) + (1 - ps) * (d == 0))) }
  o <- optim(c(0, 0), nll, hessian = TRUE); c(est = o$par[1], se = sqrt(diag(solve(o$hessian)))[1]) }
res <- t(replicate(300, { z <- rep(rbinom(50, 1, 0.5), each = 2)   # 50 pairs of sites share one animal
  fit(matrix(rbinom(100 * K, 1, z * 0.5), 100, K)) }))
round(c(true_sd_logit = sd(res[, 1]), mean_reported_se = mean(res[, 2])), 3)
```

## Connections
- **Builds on:** [[Independence of Observations]], [[Occupancy Likelihood]]
- **Leads to:** [[Spatially Balanced Sampling]], [[Spatial Autocorrelation]], [[Home Range]], [[Repeat-Visit Design]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Assumptions of Occupancy Models]]

## Flashcards

What does the site independence assumption require?
??
Presence or detection at one site carries no information about another site.
++++

What usually goes wrong when occupancy sites are not independent?
??
Standard errors are too small and intervals too narrow; the model overcounts its evidence.
++++

How did Happe et al. (2020) protect site independence?
??
Sampled every other hexagon and checked with DNA that individuals rarely appeared in adjacent hexes.
++++

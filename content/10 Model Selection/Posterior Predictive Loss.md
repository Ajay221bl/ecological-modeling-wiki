---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Posterior predictive loss scores a Bayesian model by how close its replicated data come to the observed data (G) plus how variable those replicates are (P), with smaller totals better."
aliases:
  - "Gelfand-Ghosh criterion"
  - "D criterion"
  - "Posterior predictive loss criterion"
  - "G + P"
status: seedling
---

# Posterior Predictive Loss

**Posterior predictive loss**, the Gelfand-Ghosh criterion, scores a Bayesian model by how close its replicated data come to the observed data plus how variable those [[Replication|replicates]] are. For each observation simulate replicates y_rep from the [[Posterior Predictive Distribution]]. G = Σ (yᵢ − mean of y_rep,i)² measures [[Model Validation|goodness of fit]]; P = Σ var(y_rep,i) measures predictive spread and acts as a penalty; and D = G + P, with smaller better.

Overfitted models have small G but large P, and underfitted models have large G, which mirrors the [[Bias-Variance Trade-off]]. In the code below a Poisson model of 50 counts gives G = 266, P = 213 and D = 479.

It comes from Gelfand and Ghosh (1998) and is discussed in [[Hobbs and Hooten 2015 Ch9]] among Bayesian criteria, but it is less used today than [[WAIC]] and LOO ([[Mean Square Prediction Error]]). P is not just posterior uncertainty in the parameters: it measures predictive spread, which includes [[Sampling Variation|sampling variation]].

```r
set.seed(9); y <- rpois(50, 4); lam <- rgamma(3000, sum(y) + 0.01, 50.01)
yrep <- sapply(lam, function(l) rpois(50, l)); G <- sum((y - rowMeans(yrep))^2); P <- sum(apply(yrep, 1, var)); c(G = G, P = P, D = G + P)
```

## Connections
- **Builds on:** [[Posterior Predictive Distribution]], [[Bias-Variance Trade-off]], [[Replication]], [[Model Validation]], [[Sampling Variation]]
- **Leads to:** [[WAIC]], [[Mean Square Prediction Error]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What are the two terms of posterior predictive loss?
??
G, the squared distance between data and replicate means, and P, the variance of the replicates.
++++

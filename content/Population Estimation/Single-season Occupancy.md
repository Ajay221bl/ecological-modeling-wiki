---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Single-season single-species occupancy"
  - "MacKenzie occupancy model"
  - "occu()"
  - "Static occupancy model"
status: seedling
---

# Single-season Occupancy

**In one line:** a single-season occupancy model estimates ψ and p from repeat detection or non-detection surveys of many sites within one closed season.

> [!info] Before this, it helps to know
> [[Occupancy]] · [[Detection History]] · [[Closure Assumption]] · [[Maximum Likelihood Estimation]]

## The everyday picture
One summer of camera traps. Each site gets several checks; the season is short enough that a site's status does not change.

## Start from zero
1. **Design:** a random sample of sites, at least two visits each (more improves precision).
2. **Keep surveying after a detection.** Later zeros at a known-occupied site are what tell you about p.
3. **Assumptions (Powell and Gale Ch15):**
   - Closure within the season.
   - Constant ψ and p across sites unless modelled with covariates.
   - No false positives.
   - Independent surveys and sites.
4. **Model:** z_i ~ Bernoulli(ψ_i); y_ij ~ Bernoulli(z_i p_ij).
5. **Covariates through logit links:** logit(ψ_i) = site covariates; logit(p_ij) = site and visit covariates.
6. **Fit** by maximum likelihood (unmarked `occu()`, Program PRESENCE, MARK) or Bayesian MCMC.

## In R
```r
set.seed(4); S <- 150; K <- 3; forest <- runif(S)
z <- rbinom(S, 1, plogis(-1 + 3 * forest)); y <- matrix(rbinom(S * K, 1, z * 0.4), S, K); d <- rowSums(y)
nll <- function(b) { ps <- plogis(b[1] + b[2] * forest); pp <- plogis(b[3]); -sum(log(ps * pp^d * (1 - pp)^(K - d) + (1 - ps) * (d == 0))) }
fit <- optim(c(0, 0, 0), nll, method = "BFGS")
round(c(b0 = fit$par[1], b_forest = fit$par[2], p = plogis(fit$par[3])), 2)  # truth: -1, 3, 0.4
```

## In the course
Occupancy guest lecture ([[Course Website]]). [[Powell and Gale 2015]] Ch15.

## Common confusions
- **"Stop visiting once you find it."** Classic surveys did; occupancy models need the later visits to estimate p (removal designs are a special exception).

## Explain it back
- What is the minimum number of visits?

*Pass test:* you can describe the design and model and fit a covariate version.

## Connections
- **Builds on:** [[Occupancy]], [[Detection History]], [[Closure Assumption]], [[Logit Link]]
- **Leads to:** [[Multi-season Occupancy]], [[Site Covariates]], [[Observation Covariates]], [[unmarked Package]]
- **Part of:** [[MOC - Population Estimation]], molecular note [[Occupancy Workflow in R]]

## Flashcards

Write the single-season occupancy model in two lines.
??
z_i ~ Bernoulli(ψ_i); y_ij ~ Bernoulli(z_i × p_ij).
++++

Why must you keep surveying a site after detecting the species?
??
Later non-detections at a known-occupied site are what estimate p.
++++

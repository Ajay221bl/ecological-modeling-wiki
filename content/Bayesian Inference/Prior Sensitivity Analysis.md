---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Sensitivity analysis (priors)"
  - "Prior sensitivity"
  - "Sensitivity to priors"
status: seedling
---

# Prior Sensitivity Analysis

**In one line:** a prior sensitivity analysis refits the model under different reasonable priors to see whether the conclusions change.

> [!info] Before this, it helps to know
> [[Prior Distribution]] (what is varied) · [[Posterior Distribution]] (what is compared) · [[Sensitivity Analysis]] (the general idea)

## The everyday picture
A second opinion. If two doctors who begin from different assumptions reach the same diagnosis, you trust it more. If they disagree, the evidence alone hasn't settled the matter.

## Start from zero
1. **Fit with your chosen priors.**
2. **Refit with alternatives:** wider, narrower, a different family.
3. **Compare posteriors** for the quantities you care about.
4. **If they agree,** the data dominate. Say so.
5. **If they differ,** the prior matters. Report this honestly and defend your choice, or collect more data.
6. **Most sensitive:** variance parameters with few groups, parameters with little data, weakly identified parameters.
7. **Quick visual check:** overlay prior and posterior. A posterior that looks like its prior means the data said little.

## In R
```r
y <- 2; n <- 8; pri <- list(flat = c(1, 1), skeptical = c(2, 8), optimistic = c(8, 2))
t(sapply(pri, function(ab) round(c(mean = (ab[1] + y) / (sum(ab) + n), qbeta(c(.025, .975), ab[1] + y, ab[2] + n - y)), 2)))    # small n: the prior matters
y <- 50; n <- 200; t(sapply(pri, function(ab) round(c(mean = (ab[1] + y) / (sum(ab) + n), qbeta(c(.025, .975), ab[1] + y, ab[2] + n - y)), 2)))   # large n: it barely does
```

## In the course
[[Hobbs and Hooten 2015 Ch5]] recommends checking how conclusions depend on priors.

## Common confusions
- **"Sensitivity analysis means trying priors until I like the result."** It means reporting all of them.

## Explain it back
- Which parameters are usually most sensitive to priors?

*Pass test:* you can run and report a simple sensitivity analysis.

## Connections
- **Builds on:** [[Prior Distribution]], [[Posterior Distribution]]
- **Leads to:** [[Informative Prior]], [[Prior Predictive Check]], [[Identifiability]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[How to choose a prior]]

## Flashcards

What is a prior sensitivity analysis?
??
Refitting a model with alternative reasonable priors to see whether the posterior conclusions change.
++++

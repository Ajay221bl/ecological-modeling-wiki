---
type: source
tags:
  - source
  - reading
aliases:
  - "Vehtari 2017"
  - "Practical Bayesian model evaluation using leave-one-out cross-validation and WAIC"
status: seedling
---
<!-- gen_sources -->

# Vehtari et al. 2017

> [!summary] In plain words
> How to estimate Bayesian leave-one-out predictive accuracy cheaply with Pareto-smoothed importance sampling, with diagnostics (Pareto k) that say when it fails, and how it compares with WAIC.

**Citation:** Vehtari, A., A. Gelman, and J. Gabry. 2017. Practical Bayesian model evaluation using leave-one-out cross-validation and WAIC. *Statistics and Computing* 27: 1413 to 1432. https://doi.org/10.1007/s11222-016-9696-4
**Syllabus week:** Folder reading supporting Bayesian model selection (Sep 22) and Stan (Nov 17 to 19).

> [!warning] Verify
> My folder copy is the arXiv preprint (v5, September 2016); the citation is to the published version.

## What it's about
Defines elpd, LOO and WAIC, introduces PSIS-LOO and the Pareto k diagnostic, shows PSIS-LOO is more reliable than WAIC in finite samples, and describes the loo R package.

## Key ideas I use
- elpd and LOO → [[Expected Log Predictive Density]], [[Leave-one-out Cross-validation]]
- PSIS and Pareto k → [[PSIS and Pareto k]]
- WAIC → [[WAIC]], [[AIC, WAIC and LOO]]
- log_lik in Stan → [[log_lik for LOO]]

## Notes that rely on it (1)
[[log_lik for LOO]]

## Connections
- **Part of:** [[MOC 21 - Course Readings|MOC - Course Readings]]

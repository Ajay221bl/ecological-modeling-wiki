---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - mixed
aliases:
  - "Bayesian GLMM workflow"
  - "brms mixed model workflow"
status: seedling
---

# Bayesian Mixed Model Workflow in R

> [!summary] In plain words
> a Bayesian mixed model workflow goes from the design and a simulated prior predictive check, through fitting with brms, to convergence checks, posterior predictive checks, comparison with LOO and finally predictions with full uncertainty.

## The question
What are the steps to fit and report a Bayesian mixed model?

## Built from
- [[Bayesian GLMM]], [[Priors on Standard Deviations]], [[LKJ Prior]].
- [[Prior Predictive Check]], [[How to check an MCMC fit]], [[Posterior Predictive Check]].
- [[Leave-one-out Cross-validation]], [[Conditional vs Marginal Predictions]].

## See it
mermaid:
flowchart TD
  A[Draw design: groups, levels, family] --> B[Write brms formula]
  B --> C[Choose priors: b, sd, cor, family]
  C --> D[Prior predictive check: sample_prior = only]
  D --> E[Fit: 4 chains, cores, seed]
  E --> F{R-hat < 1.01, ESS ok, no divergences?}
  F -->|no| G[Raise adapt_delta, tighten priors, simplify]
  G --> E
  F -->|yes| H[pp_check and residual checks]
  H --> I[Compare candidates with loo]
  I --> J[Predict: re_formula NULL or NA]
*What to look at:* the loop back when convergence checks fail.

## The reasoning, step by step
1. **Design:** groups, nesting or crossing, family and link.
2. **Formula:** lme4-style, `bf()` for extras.
3. **Priors:** `get_prior()` to see classes; set `b`, `sd`, `cor`, family parameters.
4. **Prior predictive check:** `sample_prior = "only"`, then `pp_check()`.
5. **Fit:** 4 chains, set `cores` and `seed`, cmdstanr backend if available.
6. **Convergence:** R-hat ≤ 1.01, bulk and tail ESS in the hundreds or more, no divergences.
7. **Fit checks:** `pp_check()` (density overlays, grouped stats).
8. **Compare:** `loo()` and `loo_compare()`.
9. **Report:** posterior medians and 95% intervals for fixed effects and SDs, plus predictions (`conditional_effects()`, `posterior_epred()`).

## So in practice
Save fitted models with `file = "fits/m1"` so you don't refit on every knit.

## In R
```r
# norun (brms workflow, shown for structure)
library(brms); get_prior(count ~ trt + (1 | site), data = d, family = poisson())
pri <- c(prior(normal(0, 1), class = b), prior(exponential(1), class = sd))
f0 <- brm(count ~ trt + (1 | site), d, poisson(), prior = pri, sample_prior = "only", seed = 1); pp_check(f0)
f1 <- update(f0, sample_prior = "no"); summary(f1); pp_check(f1); loo(f1); conditional_effects(f1, re_formula = NA)
```

## What would go wrong otherwise
Skipping the prior predictive check and discovering after fitting that the default priors allowed counts in the billions.

## Explain it back
- Which diagnostics must pass before you interpret a fit?

*Pass test:* you can run the whole workflow on a homework dataset.

## Connections
- **Related:** [[lme4 vs brms]], [[How to check an MCMC fit]], [[Bayesian Linear Regression in R]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 14 - Mixed Models|MOC - Mixed Models]], [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What brms argument runs a prior predictive check?
??
sample_prior = "only".
++++

What convergence thresholds should a brms fit meet?
??
R-hat ≤ 1.01, adequate bulk and tail ESS, and no divergent transitions.
++++

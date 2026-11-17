---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "brms default priors"
  - "prior_summary()"
status: seedling
---

# Default Priors in brms

**In one line:** brms sets default priors for every parameter (flat on regression slopes, weakly informative Student-t priors scaled to the data on the intercept and standard deviations), which you can list with `get_prior()` and should check or replace.

> [!info] Before this, it helps to know
> [[brms]] · [[Prior Distribution]]

## Start from zero
1. **Population-level slopes (class b):** flat (improper) by default.
2. **Intercept:** Student-t with 3 degrees of freedom, centred on the median of the response and scaled by its median absolute deviation (never below 2.5). For `sleepstudy` that is student_t(3, 288.7, 59.3).
3. **Standard deviations and sigma:** half Student-t(3, 0, same scale), so student_t(3, 0, 59.3) here.
4. **`get_prior(formula, data)`** lists every parameter class and its default before fitting.
5. **`prior_summary(fit)`** shows what was used.
6. **Set your own:** `prior(normal(0, 1), class = b)`.
7. **Defaults depend on the data scale,** so they change if you rescale the response.

## In R
```r
p <- brms::get_prior(Reaction ~ Days + (1 | Subject), data = lme4::sleepstudy)
p[, c("prior", "class", "coef", "group")]
```

## In the course
Bayesian mixed models labs ([[Course Website]]).

## Common confusions
- **"brms priors are always weakly informative."** Slopes get flat priors unless you set them.

## Explain it back
- Which brms parameters have flat default priors?

*Pass test:* you can inspect and change brms priors.

## Connections
- **Builds on:** [[brms]], [[Prior Distribution]]
- **Leads to:** [[Prior Predictive Check]], [[brms-generated Stan Code]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

Which function lists brms default priors before fitting?
??
get_prior().
++++

What default prior does brms put on regression slopes?
??
A flat (improper) prior.
++++

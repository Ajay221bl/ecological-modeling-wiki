---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Brms sets default priors for every parameter (flat on regression slopes, weakly informative Student-t priors scaled to the data on the intercept and standard deviations), which you can list with `get_prior()` and should check or replace."
aliases:
  - "brms default priors"
  - "prior_summary()"
status: seedling
---

# Default Priors in brms

brms sets **default priors** for every parameter, flat on regression slopes and weakly informative Student-t priors scaled to the data on the intercept and standard deviations, which you can list with `get_prior()` and should check or replace ([[brms]], [[Prior Distribution]]). Population-level slopes (class b) get flat, improper priors. The intercept gets a Student-t with 3 degrees of freedom, centred on the median of the response and scaled by its median absolute deviation, never below 2.5. Standard deviations and sigma get a half Student-t(3, 0) with the same scale ([[Priors on Standard Deviations]]).

`get_prior(formula, data)` lists every parameter class and its default before fitting, `prior_summary(fit)` shows what was used, and `prior(normal(0, 1), class = b)` sets your own. Because the defaults depend on the data scale, they change if you rescale the response. In the code below, for `Reaction ~ Days + (1 | Subject)` on `sleepstudy`, the intercept prior is student_t(3, 288.7, 59.3), the Days slope is flat, and the subject SD and sigma get student_t(3, 0, 59.3).

They are used in the Bayesian mixed models labs ([[Course Website]], [[Bayesian GLMM]]). brms priors are not always weakly informative: slopes get flat priors unless you set them.

```r
p <- brms::get_prior(Reaction ~ Days + (1 | Subject), data = lme4::sleepstudy)
p[, c("prior", "class", "coef", "group")]
```

## Connections
- **Builds on:** [[brms]], [[Prior Distribution]]
- **Leads to:** [[Prior Predictive Check]], [[brms-generated Stan Code]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

Which function lists brms default priors before fitting?
??
get_prior().
++++

What default prior does brms put on regression slopes?
??
A flat (improper) prior.
++++

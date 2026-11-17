---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - bayes
aliases:
  - "Homework 6"
  - "HW6"
  - "Penguin homework"
  - "Palmer penguins homework"
  - "Bayesian models homework"
status: seedling
---

# Homework 6 - Penguin Body Mass in brms

> [!summary] In plain words
> Homework 6 asks for three hierarchical Bayesian models of penguin body mass in brms, with justified priors, LOO or WAIC to pick the top model, convergence and posterior predictive checks, marginal effects plots that include the random effects, and a methods-results-conclusions write-up.

## The question
How do I approach Homework 6 from hypotheses to a written Bayesian analysis?

## Built from
- [[brms]], [[Bayesian Linear Regression in R]], [[Bayesian Mixed Model Workflow in R]]: fitting.
- [[How to choose a prior]], [[Weakly Informative Prior]], [[Prior Predictive Check]]: priors with reasons.
- [[AIC, WAIC and LOO]], [[Model Ranking Tables]]: choosing the top model.
- [[R-hat]], [[Trace Plot]], [[Posterior Predictive Check]]: checking fit.
- [[conditional_effects()]], [[Marginal Effects Plot]]: posterior predictions with hierarchical levels.

## The reasoning, step by step
1. **Look at the data.** 344 penguins of 3 species on 3 islands, with bill length and depth, flipper length, sex and body mass in grams; 11 rows have missing sex or measurements. Drop or impute them and say how many ([[Missing Values]]).
2. **Choose the response distribution.** Body mass is continuous and positive, around 2,700 to 6,300 g, far from zero, so a Normal (Gaussian) model is reasonable; a lognormal is an option if spread grows with the mean ([[Normal Distribution]]).
3. **Write three hypotheses in words.** For example: mass scales with flipper length, with species-specific baselines (`(1 | species)`); mass scales with flipper length and differs by sex, with species baselines; mass scales with flipper length at a rate that differs by species (`(1 + flipper_s | species)`), plus sex. Island could be a second grouping, but it is largely confounded with species, which is worth saying.
4. **Set priors with reasons.** Standardise flipper length. Intercept around the mean mass (normal(4200, 800)); a slope per standard deviation of flipper (about 14 mm) of normal(0, 500) g; sex difference normal(0, 500) g; group SDs exponential(1 / 500). Run a prior predictive check to see that simulated masses are penguin-sized, not negative or elephant-sized ([[Prior Predictive Check]]).
5. **Fit and check.** R-hat ≤ 1.01, ESS in the hundreds or more, no divergent transitions, mixed trace plots, and `pp_check()` overlaying simulated and observed mass ([[How to check an MCMC fit]]). With only 3 species, group SDs will be uncertain ([[Random Effect with Few Levels]]).
6. **Compare.** `loo_compare()` on the three models; differences under about 2 SE are ties, and then the simpler model is the natural pick ([[AIC, WAIC and LOO]]).
7. **Predict.** `conditional_effects(top, effects = "flipper_s:species", re_formula = NULL)` shows one line per species with credible bands that include the random effects; back-transform flipper length to mm for the axis ([[conditional_effects()]]).
8. **Write.** Methods: data cleaning, distribution, the three models, priors and why, software and sampler settings, diagnostics. Results: the LOO table, the top model's estimates with 95% credible intervals, the effects plots. Conclusions: what explains penguin mass, in 1 or 2 paragraphs ([[Writing Methods Sections]], [[Writing Results Sections]]).

**A worked example in numbers.** Prior check in numbers: with an intercept prior normal(4200, 800), 95% of prior intercepts fall in 4200 ± 1.96 × 800 = 2,632 to 5,768 g, close to the observed range, while normal(0, 10000) would allow −19,600 to 19,600 g, which includes negative penguins.

## So in practice
Give every choice a reason a reader could check: why this distribution, why these priors (on the scale of grams and standardised predictors), why these three models, and what the diagnostics showed.

## In R
```r
round(c(lower = 4200 - 1.96 * 800, upper = 4200 + 1.96 * 800), 0)
# Bayesian fit (not run here, it needs palmerpenguins and a compiled brms model):
# library(brms); library(palmerpenguins)
# pen <- na.omit(penguins); pen$flipper_s <- as.numeric(scale(pen$flipper_length_mm))
# pri <- c(prior(normal(4200, 800), class = "Intercept"), prior(normal(0, 500), class = "b"),
#          prior(exponential(0.002), class = "sd"), prior(exponential(0.002), class = "sigma"))
# m3 <- brm(body_mass_g ~ flipper_s + sex + (1 + flipper_s | species), data = pen, prior = pri, seed = 1)
# m3 <- add_criterion(m3, "loo"); pp_check(m3); conditional_effects(m3, "flipper_s:species", re_formula = NULL)
```

## What would go wrong otherwise
Copying default flat priors and never looking at what they imply, or plotting only the population-level line when the homework asks for the hierarchical levels.

## Explain it back
- Why standardise flipper length before setting the slope prior?
- What does re_formula = NULL add to the effects plot?

*Pass test:* you can write three hypotheses, give a defensible prior for each parameter, and show the top model's predictions by species.

## Connections
- **Related:** [[Bayesian Mixed Model Workflow in R]], [[How to choose a prior]], [[Homework 3 - Woodland Birds and Landscape Scale]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], [[MOC 22 - Homework|MOC - Homework]]

## Flashcards

Which distribution fits penguin body mass and why?
??
Normal: mass is continuous and far from zero, so a symmetric distribution fits; lognormal if spread grows with mass.
++++

How do you include random effects in brms effects plots?
??
conditional_effects(..., re_formula = NULL).
++++

Why is island a tricky second grouping factor in Homework 6?
??
Island is largely confounded with species, so their effects are hard to separate.
++++

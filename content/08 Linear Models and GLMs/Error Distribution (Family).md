---
type: atomic
tags:
  - glm
  - probability
  - r
  - flashcards/eco/lm-glm
description: "The family is a model's description of how real values scatter around its predicted average (which values are possible and how wide the scatter is); in R it is the family = argument."
aliases:
  - "family"
  - "error distribution"
  - "error family"
  - "error structure"
status: seedling
---

# Error Distribution (Family)

Suppose a point's true average is 6 species per visit. You will not see 6 every time: some mornings 4, some 7, once 9. A model needs a rule for that wobble: how likely is 4? 9? 6.5? That rule is a [[Probability Distribution]], a list of possible outcomes with the chance of each. The **error distribution**, or **family**, is the distribution a model assumes for the scatter of real values around its predicted average; in R it is the `family =` argument, as in `glmer(..., family = "poisson")`. It is the random half of a model, the [[Stochastic Component]], while the [[Linear Predictor]] plus its [[Link Function]] is the predictable half, the [[Deterministic Component]] ([[Deterministic and Stochastic Components]]). "Error" here does not mean a mistake: it just means the leftover wobble.

You pick the family by matching two features of the data, not by taste. First, which values are possible, the [[Support of a Distribution|support]]: species counts are 0, 1, 2, ..., never −1 or 4.5. Hobbs and Hooten's example of a wrong pick is a normal distribution for biomass, where "the support is wrong. Biomass cannot be negative" ([[Hobbs and Hooten 2015 Ch3]], p. 66). Second, how the spread changes with the average ([[Mean-Variance Relationship]]); for counts, Zuur et al. recommend a distribution "that allows greater variation for large mean values (e.g. ... Poisson or negative binomial for [[Count Data|count data]])" ([[Zuur et al. 2010]], p. 5). The common families: the gaussian ([[Normal Distribution]]) for any number, with the same spread everywhere; the [[Poisson Distribution]] for counts, with [[Variance]] equal to the average; the [[Negative Binomial Distribution]] for counts that wobble more than Poisson; the [[Binomial Distribution]] for yes/no or successes out of n, variance n p (1 − p); and the [[Gamma Distribution]] for positive measurements, whose variance grows with the average squared. Each has a default link: identity for gaussian ([[Identity Link]]), log for Poisson ([[Log Link]]), logit for binomial ([[Logit Link]]). Work Poisson's rule through: at a true average of 4 it expects variance about 4, so a typical wobble of about 2 species (the [[Square Root|square root]]); at an average of 9, variance about 9 and a wobble of about 3.

The danger is that a wrong family gives no error message: the model runs, but its standard errors, p-values and AIC rest on a false story about the data, which is why you check the family afterwards with dispersion and residual checks ([[Harrison et al. 2018]], p. 16). Two more confusions: the family does not describe what the raw-data [[Histogram|histogram]] looks like but the wobble around each predicted average; and a gaussian model that fits without errors is not thereby fine. Every candidate model in the project uses the Poisson family, because [[Species Richness|richness]] is a whole-number count from 0 to 14 and within-property variance/mean ratios are 0.56 to 0.93, near or below the Poisson's 1. The script's rule was to run [[check_overdispersion()]] on the top model and refit as negative binomial if the ratio were well above 1; on Oct 13 the ratios were 0.66 (all species) and 0.60 (focal), clearly below 1, and DHARMa agreed, so the negative binomial, which can only add spread, is off the table ([[Underdispersion]], [[Preliminary Results]]). The Report keeps the Poisson and says its intervals are probably cautious ([[Why the Report keeps the Poisson model despite the diagnostics]]); Final Draft options allow less spread: Conway-Maxwell-Poisson or generalized Poisson in glmmTMB, and for focal richness a binomial ("how many of the 6 [[Focal Species|focal species]]"), which has a built-in ceiling. All [[Candidate Model Set|candidate models]] must share the same family and data, or their AIC values cannot be compared in [[MuMIn model.sel()]].

```r
dpois(0:3, lambda = 4)   # Poisson chances of 0, 1, 2, 3 when the average is 4
sqrt(4); sqrt(9)         # typical wobble: about 2 and 3 species
```

## Connections
- **Builds on:** [[Probability Distribution]], [[Stochastic Component]], [[Deterministic Component]], [[Support of a Distribution]], [[Mean-Variance Relationship]], [[Variance]], [[Count Data]], [[Square Root]], [[Histogram]], [[Species Richness]]
- **Leads to:** [[Normal Distribution]], [[Poisson Distribution]], [[Negative Binomial Distribution]], [[Binomial Distribution]], [[Gamma Distribution]], [[Link Function]], [[Identity Link]], [[Log Link]], [[Logit Link]], [[check_overdispersion()]], [[Underdispersion]], [[Focal Species]], [[Candidate Model Set]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]
- **Go deeper:** [[Deterministic and Stochastic Components]], [[Why the Report keeps the Poisson model despite the diagnostics]], [[Why check overdispersion before trusting Poisson]], [[Hobbs and Hooten 2015 Ch3]], [[Zuur et al. 2010]], [[Harrison et al. 2018]]

## Flashcards

R happily fits the richness model with `family = "gaussian"`. Why is that still wrong?
??
The gaussian allows negative and fractional values and assumes the same spread everywhere, which does not match counts. R gives no error, but the standard errors, p-values and AIC would rest on a false description of how richness varies.
++++

What two features of the data decide the family?::Which values are possible (the support) and how the spread changes with the average.

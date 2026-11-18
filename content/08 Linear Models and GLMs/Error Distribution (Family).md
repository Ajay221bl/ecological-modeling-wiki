---
type: atomic
tags:
  - glm
  - probability
  - r
  - flashcards
aliases:
  - "family"
  - "error distribution"
  - "error family"
  - "family argument"
  - "error structure"
status: seedling
---

# Error Distribution (Family)
**In one line:** the family is the model's description of how real values scatter around its predicted average (which values are possible, and how wide the scatter is); in R it is the `family =` argument.

> [!info] Before this, it helps to know
> [[Probability]] (chance of each outcome) · [[Spread and Variability]] (what variance means) · [[Functions and Arguments]] (what `family =` is in R code)

## Start from zero
Suppose a point's true average is 6 species per visit. You will not see 6 every time. Some mornings 4, some 7, once 9. A model needs a rule for that wobble: how likely is 4? 9? 6.5?

That rule is a **probability distribution** ([[Probability Distribution]]): a list of possible outcomes with the chance of each. The family is the distribution the model assumes for the wobble around its average. It is the "random" half of a model; the [[Linear Predictor]] plus link is the "predictable" half ([[Deterministic and Stochastic Components]]).

## Why it exists
Different kinds of data wobble in different ways. You pick the family by matching two features of your data, not by taste:

1. **Which values are possible ("support").** Species counts are 0, 1, 2, ... never -1 or 4.5. Hobbs and Hooten's example of a wrong pick: using a normal for biomass, where "the support is wrong. Biomass cannot be negative" ([[Hobbs and Hooten 2015 Ch3]], p. 66).
2. **How spread changes with the average.** Most families tie them together (p. 65). For counts, Zuur et al. recommend a distribution "that allows greater variation for large mean values (e.g. ... Poisson or negative binomial for count data)" ([[Zuur et al. 2010]], p. 5).

| Family | Data it fits | Spread (variance) |
|---|---|---|
| gaussian (normal) | any number, + or - | same everywhere |
| poisson | counts 0, 1, 2, ... | equals the average |
| negative binomial | counts that wobble more than Poisson | bigger than the average |
| binomial | yes/no, or successes out of n | n p (1 - p) |
| Gamma | positive measurements | grows with average² |

Each family comes with a default [[Link Function]]: identity for gaussian, log for Poisson, logit for binomial.

**The danger:** a wrong family gives no error message. The model runs, but its standard errors, p-values and AIC rest on a false story about the data. That is why you check the family afterward with dispersion and residual checks ([[Harrison et al. 2018]], p. 16).

## A tiny example
Poisson's rule is "variance = average". Variance is the average squared distance from the average ([[Variance]]).

A point visited many times with true average 4: Poisson expects variance about 4, so a typical wobble of about 2 species (the square root). With true average 9: variance about 9, typical wobble about 3.

My data: within-property variance divided by mean ranges from 0.56 to 0.93 (the 1,130 modelled visits). A Poisson would give about 1. So the data wobble a bit less than Poisson expects. Not more.

## In my project
Every candidate model in `GrasslandBirdRichness_Analysis.R` uses the Poisson family:

```r
  fits <-
    lapply(mods, function(f) glmer(as.formula(f), family = "poisson", data = datClean,
                                 control = glmerControl(optimizer = "bobyqa")))
```

Why Poisson: richness is a whole-number count from 0 to 14, and the raw variance/mean ratios (0.56 to 0.93) are near or below 1 ([[Mean-Variance Relationship]]).

The decision rule written into the script: run [[check_overdispersion()]] on the top model; if the ratio is well above 1, refit as negative binomial (`glmer.nb()` or glmmTMB; [[Negative Binomial Distribution]]). What happened on Oct 13: the ratios were 0.66 (all species) and 0.60 (focal), clearly *below* 1, and DHARMa agreed ([[Preliminary Results]]). So the negative binomial is off the table: it can only add spread ([[Underdispersion]]).

The Report keeps the Poisson and says its intervals are probably cautious ([[Why the Report keeps the Poisson model despite the diagnostics]]). Family options for the Final Draft are ones that allow less spread: Conway-Maxwell-Poisson or generalized Poisson in glmmTMB, and for focal richness a binomial ("how many of the 6 focal species"), which has a built-in ceiling.

All candidate models must share the same family and the same data, or their AIC values cannot be compared in [[MuMIn model.sel()]].

## Common confusions
- **"Family = what my raw data histogram looks like."** No: it describes the wobble *around each predicted average*, not the pile of all data together.
- **"Gaussian fit without errors, so it is fine."** R does not check the family for you.
- **"Error" means mistake.** Here it just means the leftover wobble.

## Connections
- **Builds on:** [[Probability Distribution]], [[Mean-Variance Relationship]], [[Generalized Linear Model]], [[Probability]]
- **Leads to:** [[Poisson Distribution]], [[Negative Binomial Distribution]], [[Link Function]], [[glmer()]], [[Why check overdispersion before trusting Poisson]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch3]] (choosing a distribution by support), [[Zuur et al. 2010]], [[Harrison et al. 2018]] (checking the choice)

> [!question]- Check yourself
> R happily fits my richness model with `family = "gaussian"`. Why is that still wrong?
> ?
> The gaussian allows negative and fractional values and assumes the same spread everywhere, which does not match counts. R gives no error, but the standard errors, p-values and AIC would rest on a false description of how richness varies.

---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - selection
aliases:
  - "Homework 3"
  - "HW3"
  - "Mt Lofty birds homework"
  - "Model selection homework"
  - "mlrbird"
  - "mlrland"
status: seedling
---

# Homework 3 - Woodland Birds and Landscape Scale

> [!summary] In plain words
> Homework 3 asks whether woodland birds respond to their patch or the landscape around it, and the approach is to join the two-year bird data to the one-time landscape data, pick a scale and drop correlated variables, write 6 hypotheses, fit them as Bayesian logistic regressions for two species, rank them with LOO or WAIC and plot marginal effects.

## The question
How do I approach Homework 3 from raw tables to conclusions?

## Built from
- [[One-to-many Join]]: two bird years, one landscape row.
- [[Habitat Patch]], [[Landscape Metrics]], [[Scale of Effect]], [[Patch vs Landscape Effects]]: the hypotheses.
- [[Collinearity]], [[Centering, Scaling and Standardizing]]: preparing predictors.
- [[Bayesian Logistic Regression]], [[R-hat]], [[Trace Plot]]: fitting and convergence.
- [[AIC, WAIC and LOO]], [[Model Ranking Tables]]: ranking.
- [[Marginal Effects Plot]], [[Multi-panel Figures]]: the figure.

## The reasoning, step by step
1. **Join.** 68 bird rows (34 patches × 2 years) to 34 landscape rows by Patch and Name, keeping 68 rows ([[One-to-many Join]]). Keep Year in the data; the two years at a patch are not independent.
2. **Derive and clean.** Build MPAR = TE / TLA / NumP at each scale as the instructions define it, and check MNN: where a buffer contains no other patch, nearest-neighbour distance should be NA, not 0.
3. **Look at correlations.** Landscape shape index at 2, 5 and 10 km correlates 0.66 to 0.83 with itself, and patch area correlates 0.50 with woodland area within 2 km. That is the "hint, maybe": you cannot put every variable and every scale in.
4. **Choose scales.** For each landscape variable, compare one-variable models across 2, 5 and 10 km and keep the best ([[Scale of Effect]]). For Grey Currawong, LSI at 2 km beats 5 km and 10 km by only 0.8 and 1.3 AIC units, a near tie, so report the choice as weak.
5. **Q1, six hypotheses.** For example: null; patch (PA + PP or PA alone); climate (MRF); landscape amount (TLA at its scale); landscape configuration (LSI or MPAR or MNN at its scale); patch + landscape. Write each as a sentence about the birds ([[Patch vs Landscape Effects]], [[Candidate Model Set]]).
6. **Q2, fit.** Standardise predictors, then `brm(grcu ~ ..., family = bernoulli(), prior = ...)` for each model and each species (Grey Currawong, present in 44% of rows; Silvereye, 51%). Check R-hat ≤ 1.01, healthy ESS and mixed trace plots for every one ([[Bayesian Logistic Regression]], [[How to check an MCMC fit]]).
7. **Q3, rank.** `add_criterion(m, "loo")` on each and `loo_compare()`, or WAIC; report elpd differences with their standard errors and model weights ([[Expected Log Predictive Density]]).
8. **Q4, plot.** Marginal effects of the top model's predictors with 95% credible bands, combined into one figure with cowplot ([[conditional_effects()]]).
9. **Q5, interpret.** Does the patch or the landscape explanation carry more weight, and is it the same for both species? A species that forages widely may track the landscape, a small sedentary one its patch.

**A worked example in numbers.** With 68 rows and at most about 5 parameters per model, n/K ≈ 14, enough that LOO estimates are stable but small enough that elpd differences under about 2 standard errors should be called a tie.

## So in practice
Do the work before the candidate set: join, derive, check correlations and pick scales; then write six sentences, and only then fit.

## In R
```r
base <- "https://raw.githubusercontent.com/LivingLandscapes/Course_EcologicalModeling/master/data/"
bird <- read.csv(paste0(base, "mlrbird.csv")); land <- read.csv(paste0(base, "mlrland.csv"))
library(dplyr)
d <- left_join(bird, land, by = c("Patch", "Name"), relationship = "many-to-one")
c(bird = nrow(bird), land = nrow(land), joined = nrow(d))
round(cor(land[, c("PA", "TLA2K", "TLA5K", "TLA10K", "LSI2K", "LSI5K", "LSI10K")]), 2)
sc <- sapply(c("LSI2K", "LSI5K", "LSI10K"), function(v) AIC(glm(reformulate(v, "grcu"), binomial, d)))  # quick frequentist scale check
round(sc - min(sc), 2)
```

## What would go wrong otherwise
Throwing every landscape variable at every scale into the candidate set, as in the 45-model original analysis, so that model selection uncertainty swamps any conclusion.

## Explain it back
- Why are there twice as many bird rows as landscape rows, and what does that mean for independence?
- Why choose each variable's scale before writing the six hypotheses?

*Pass test:* you can take Homework 3 from two raw tables to ranked Bayesian models and a defended conclusion about patch vs landscape.

## Connections
- **Related:** [[Patch vs Landscape Effects]], [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]], [[Homework 2 - Coral Bleaching]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 10 - Model Selection|MOC - Model Selection]], [[MOC 22 - Homework|MOC - Homework]]

## Flashcards

How many rows should the Homework 3 join produce?
??
68, the number of bird rows (34 patches × 2 years).
++++

What must MNN be when a buffer has no other patch?
??
NA, not 0.
++++

Why not put LSI2K and LSI5K in one model?
??
They are correlated (0.75), so they are collinear.
++++

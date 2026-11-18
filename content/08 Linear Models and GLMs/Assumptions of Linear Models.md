---
type: atomic
tags:
  - glm
  - linear-models
  - assumptions
  - diagnostics
  - flashcards
aliases:
  - "linear model assumptions"
  - "regression assumptions"
  - "homogeneity of variance"
  - "homoscedasticity"
status: seedling
---

# Assumptions of Linear Models
**In one line:** the promises a linear model makes about your data (rows unrelated, right shape, same scatter everywhere, bell-shaped scatter, no single dot in charge); if the data break them, the answers can be wrong.

> [!info] Before this, it helps to know
> [[Linear Model]] (the thing making the promises) · [[Spread and Variability]] (what "scatter" and "variance" mean) · [[Probability]] (why a p-value depends on these promises)

## Start from zero
A recipe says "bake at 180 degrees for 30 minutes". That works *if* your oven is a normal oven. In a wood fire, the same recipe burns the cake. The recipe was not wrong; its hidden assumptions were.

Statistical models are the same. Every uncertainty number they give you (a [[Standard Error]], a [[Confidence Interval]], a [[P-value]]) was worked out *assuming* certain things about the data. If those things are false, the numbers still print, but they no longer mean what they claim.

## Why it exists
Zuur et al. estimate that about half of the work students produced before their courses "would probably contain violations of the underlying assumptions", and that some violations "increase type I or type II errors, potentially resulting in wrong ecological conclusions" ([[Zuur et al. 2010]], p. 3). In plain words: you either "find" effects that are not there, or miss ones that are.

The five main promises:

| Promise | In plain words | If broken |
|---|---|---|
| **Independence** | knowing one row tells you nothing extra about another | false confidence, too many "significant" results (p. 11) |
| **Right shape** | the model has the right ingredients (e.g. not a straight line for a curve) | wrong effect sizes |
| **Same spread everywhere** ("homogeneity of variance") | dots scatter equally around the line at low and high values (p. 6) | wrong uncertainty; Fox (cited p. 6) warns of trouble once the biggest spread is about 4 times the smallest |
| **Bell-shaped scatter** ("normality") | the leftovers around the line look like a bell curve, checked on residuals, not the raw data (p. 7) | usually mild; regression is "reasonably robust" (p. 6) |
| **No bully points** | no single dot decides the result (p. 4-6) | conclusions rest on one or two observations |

Zuur et al. say the spread and bell-shape checks "should be verified using the residuals produced by the model" ([[Zuur et al. 2010]], p. 12). A **residual** is just "real value minus the model's guess" ([[Residuals]]).

## A tiny example
Two sites, three visits each:

| Site | Counts | Average | Spread (range) |
|---|---|---|---|
| Poor | 1, 2, 3 | 2 | 2 |
| Rich | 6, 10, 14 | 10 | 8 |

The rich site scatters four times as widely. A linear model would pretend both have the same spread. That is the "same spread everywhere" promise breaking, and it is exactly what counts tend to do: bigger averages, bigger scatter ([[Mean-Variance Relationship]]).

## In my project
For richness, a plain linear model would struggle with:
- **Independence:** broken by repeat visits to the same point. Handled by `(1|PtNum)` ([[Random Intercept]]).
- **Same spread and bell shape:** counts cannot go below zero and their spread rises with the average. Handled by moving to the Poisson family ([[Why Poisson instead of linear regression for richness]]).

Generalized models relax the spread and bell-shape promises. But **independence and right shape never go away**, and a GLM adds one new promise: the chosen family's spread rule must match the data (hence [[Overdispersion]] checks).

How the Oct 13 analysis script checks these promises for the GLMM (details in [[Residual Diagnostics]]):
- **Spread rule:** [[check_overdispersion()]] and DHARMa's dispersion test ([[DHARMa Simulated Residuals]]). Result: the counts are *less* spread out than the Poisson promises (ratios 0.66 and 0.60), so this promise is broken in the cautious direction ([[Underdispersion]]).
- **Independence between nearby points:** the bird CSV has no coordinates, but the habitat file does, so the script runs a Moran's I test on residuals combined by point. Result: weak but real similarity between neighbours (about 0.05) ([[Spatial Autocorrelation]]).

So two promises are slightly broken, in opposite directions for the error bars. The Report keeps the model and says so ([[Why the Report keeps the Poisson model despite the diagnostics]]). (History: the Sep 10 script plotted raw residuals of the Additive model, a stripy plot that is hard to read for counts.)

## Common confusions
- **"Check the histogram of the raw data for normality."** No: check the residuals. Raw data from several sites can look lumpy even when each site is fine.
- **"No error message means the assumptions hold."** R never checks them for you.
- **"GLMs have no assumptions."** They swap some for others; independence stays.

## Connections
- **Builds on:** [[Linear Model]], [[Independence Assumption]], [[Normal Distribution]], [[Variance]], [[Spread and Variability]]
- **Leads to:** [[Residual Diagnostics]], [[Generalized Linear Model]], [[Data Exploration]], [[Why explore data before modeling]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]
- **Go deeper:** [[Zuur et al. 2010]] (a step-by-step protocol for checking these before and after modeling)

> [!question]- Check yourself
> Which promises does a Poisson GLMM drop, and which does it still need?
> ?
> It drops "bell-shaped scatter" and "same spread everywhere" (the Poisson lets spread grow with the average). It still needs the right ingredients, independence once the random effect is in, and the Poisson's own spread rule to fit the data.

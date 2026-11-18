---
type: atomic
tags:
  - glm
  - count-models
  - interpretation
  - flashcards
aliases:
  - "rate ratio"
  - "rate ratios"
  - "incidence rate ratio"
  - "exp(beta)"
  - "interpreting coefficients"
status: seedling
---

# Interpreting Poisson Coefficients
**In one line:** a Poisson coefficient is a step on the log scale; put it through exp() and it becomes a multiplier ("times 1.40") for the expected count.

> [!info] Before this, it helps to know
> [[Log Link]] (why the numbers are on the log scale) · [[Logarithms and Exponents]] (exp and log) · [[Factors]] (why sites are compared with a reference)

## Start from zero
A **coefficient** is one of the numbers the model estimates: the size of one piece in the [[Linear Predictor]]. In a straight-line model, a coefficient of 2 means "2 more species". In a Poisson model with a log link, it does not.

Because the pieces are added on the log scale, each coefficient is a change in log(average count). To read it in species terms you undo the log with exp():
- exp(coefficient) = the **rate ratio**: the number you multiply the average by.
- (exp(coefficient) - 1) x 100 = the **percent change**.

Rules of thumb: coefficient 0 means x 1 (no effect). Positive means more than 1 (more species). Negative means less than 1 (fewer). Small coefficients are roughly percentages: 0.05 is about +5%. That shortcut breaks down past about 0.2.

## Why it exists
Coefficients are the scientific payoff. Guthery and Bingham argue many implausible models get published because authors "do not fully interpret the meaning of intercepts, coefficients, and graphical relationships", stopping at significance or "Akaike best" ([[Guthery and Bingham 2007]], p. 684). Their checklist:
- **Exponentiate log-scale coefficients.** exp(-0.4) = 0.67: each pH unit multiplies mercury by 0.67 (p. 686).
- **Does the intercept make sense?** Intercepts outside the data's range often mean extrapolation (p. 685, 691).
- **Do the signs make biological sense** "holding other x values constant"? (p. 688)
- **Look at size, not just significance.** A rate ratio near 1 is nearly no effect, even if "significant" (p. 691).

## A tiny example
Using raw property means from the modelled data as a ballpark (not model output), with BK as the reference:

| Site | Mean | Ratio to BK | Coefficient = log(ratio) | Plain words |
|---|---|---|---|---|
| BK | 4.73 | 1 | 0 (reference) | the baseline |
| HO | 5.56 | 1.18 | 0.16 | 18% more than BK |
| DC | 6.54 | 1.38 | 0.32 | 38% more |
| HB | 6.64 | 1.40 | 0.34 | 40% more |
| CR | 7.58 | 1.60 | 0.47 | 60% more |

Going backwards: given a coefficient of 0.47, exp(0.47) = 1.60, so "CR's expected richness is about 1.60 times BK's". (The real model, which also holds habitat constant, gives a smaller CR ratio; see below.)

## In my project
Reading the top model's summary (M3: property, habitat, Wind, Sky, point). BK is the reference because R orders [[Factors]] alphabetically ([[Categorical Predictor and Reference Level]]). The script's `coefTable()` function exponentiates every estimate and its interval ends for me, and the dot plot draws them with a dashed line at 1.

Real rate ratios from the Oct 13 run (95% intervals in brackets; the full table is in [[Preliminary Results]]):

| Term | Rate ratio | Plain words |
|---|---|---|
| `Wind`, all species | 0.89 (0.85 to 0.92) | each one-step rise in the wind code: about **11% fewer** species detected |
| `Tree50_z`, focal | 0.55 (0.48 to 0.63) | each 1 SD more tree cover: about **45% fewer** focal species |
| `SpCov3_z`, focal | 1.17 (1.02 to 1.33) | each 1 SD more spatial covariance (toward cores): about 17% more focal species |
| `SpCov27_z`, all species | 0.93 (0.91 to 0.95) | each 1 SD *more negative* covariance (toward edges) gives about 7% more species |
| `SiteCR`, all species | 1.40 (1.27 to 1.54) | CR about 40% richer than BK at the same habitat and weather |
| `Tree50_z`, all species | 1.00 (0.98 to 1.03) | no clear effect |

The recipe each time: (rate ratio - 1) x 100 = percent change. 0.89 - 1 = -0.11, so -11%. 0.55 - 1 = -0.45, so -45%. Going the other way, the raw coefficient for tree cover is log(0.55), about -0.60, which is far past the "small coefficient is roughly a percentage" shortcut: -0.60 does **not** mean -60%.

Cautions specific to my model:
1. **"Typical point."** With a [[Random Intercept]], exp(β) compares visits *at points with the same point nudge*, not averages over all points. (For all species the point variance is 0, so there it makes no difference.)
2. **Wind and Sky are per code step,** assuming the steps are equal (see [[Predictor Variable]]).
3. **Habitat terms are per standard deviation,** so give the SD in real units when writing (one SD of tree cover is roughly 35 percentage points; [[Standardizing Predictors]]).
4. **"Site" is site-plus-year.** The 1.40 for CR vs BK compares 2023 at CR with 2022 at BK ([[Why site and year cannot be separated]]).

For the Report: give exp(estimate) with exp() of the [[Confidence Interval]] ends, not raw log-scale numbers.

## Common confusions
- **"A coefficient of 0.34 means 0.34 more species."** It means times exp(0.34) = 1.40.
- **"A rate ratio of 0.89 means 0.89 fewer species."** It means times 0.89: about 11% fewer per wind step, so 4.73 species would become about 4.2.
- **"The intercept is the overall average."** It is the reference site under reference conditions at a typical point.

## Connections
- **Builds on:** [[Log Link]], [[Linear Predictor]], [[Categorical Predictor and Reference Level]], [[Parameter vs Estimate]], [[Logarithms and Exponents]]
- **Leads to:** [[Confidence Interval]], [[Interaction Term]], [[Fixed Effect]], [[EDA Findings]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]
- **Go deeper:** [[Guthery and Bingham 2007]] (a full checklist for reading regression output)

> [!question]- Check yourself
> For focal species, tree cover has a rate ratio of 0.55. Translate it into a sentence, and say what the raw coefficient is.
> ?
> Each one-standard-deviation increase in tree cover within 50 m multiplies expected focal richness by 0.55: about 45% fewer focal species, at the same property, spatial covariance, scrub and weather. The raw coefficient is log(0.55), about -0.60.

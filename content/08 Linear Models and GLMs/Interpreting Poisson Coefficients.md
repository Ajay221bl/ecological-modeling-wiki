---
type: atomic
tags:
  - glm
  - count-models
  - interpretation
  - flashcards/eco/lm-glm
description: "A Poisson coefficient is a step on the log scale; put it through exp() and it becomes a multiplier (a rate ratio, such as \"times 1.40\") for the expected count."
aliases:
  - "rate ratios"
  - "exp(beta)"
status: seedling
---

# Interpreting Poisson Coefficients

A [[Regression Coefficient]] is one of the numbers a model estimates, the size of one piece of its [[Linear Predictor]]. In a straight-line model a coefficient of 2 means "2 more species". In a Poisson model with a [[Log Link]] it does not, because the pieces are added on the log scale: each coefficient is a change in log(average count). To read it in species terms, undo the log with the [[Exponential Function]]: exp(coefficient) is the [[Rate Ratio]], the number you multiply the average by, and (exp(coefficient) − 1) × 100 is the percent change. **Interpreting a Poisson coefficient** means making that translation. A coefficient of 0 means × 1 (no effect); positive means more than 1 (more species); negative means less than 1 (fewer). Small coefficients are roughly percentages, 0.05 being about +5%, but the shortcut breaks down past about 0.2.

Build it with raw property means from the modelled data as a ballpark (not model output), taking Bald Knob (BK) as the [[Reference Level]], the baseline category. BK averages 4.73, so its ratio is 1 and its coefficient 0. The Howell tract (HO) averages 5.56: ratio 5.56 / 4.73 = 1.18, coefficient log(1.18) = 0.16, 18% more than BK. Dark Corner (DC) averages 6.54 (ratio 1.38, coefficient 0.32), Holla Bend (HB) 6.64 (1.40, 0.34) and Camp Robinson (CR) 7.58 (1.60, 0.47, 60% more). Going backwards, a coefficient of 0.47 gives exp(0.47) = 1.60, so "CR's expected [[Species Richness|richness]] is about 1.60 times BK's". The real model, which also holds habitat constant, gives a smaller CR ratio. From the Oct 13 run of the top model (M3), with 95% intervals ([[Preliminary Results]]): Wind, all species, 0.89 (0.85 to 0.92), so each one-step rise in the wind code gives about 11% fewer species detected; tree cover (`Tree50_z`), focal, 0.55 (0.48 to 0.63), about 45% fewer [[Focal Species|focal species]] per SD; `SpCov3_z`, focal, 1.17 (1.02 to 1.33), about 17% more per SD toward cores; `SpCov27_z`, all species, 0.93 (0.91 to 0.95), so each SD more negative (toward edges) gives about 7% more species; `SiteCR`, all species, 1.40 (1.27 to 1.54), CR about 40% richer than BK at the same habitat and weather; and tree cover, all species, 1.00 (0.98 to 1.03), no clear effect. The raw coefficient for focal tree cover is log(0.55) ≈ −0.60, far past the shortcut: −0.60 does not mean −60%.

Guthery and Bingham argue that many implausible models get published because authors "do not fully interpret the meaning of intercepts, coefficients, and graphical relationships" ([[Guthery and Bingham 2007]], p. 684); their checklist is to exponentiate log-scale coefficients, ask whether the intercept makes sense, ask whether the signs make biological sense "holding other x values constant" (p. 688), and look at size, not just significance (p. 691). Cautions for the project's model: with a [[Random Intercept]], exp(β) compares visits at points with the same point nudge, not averages over all points (for all species the point variance is 0, so it makes no difference there); Wind and Sky are per code step, assuming equal steps ([[Predictor Variable]]); habitat terms are per [[Standard Deviation|standard deviation]], so give the SD in real units (one SD of tree cover is roughly 35 percentage points; [[Standardizing]]); and "Site" is site-plus-year, since the 1.40 compares 2023 at CR with 2022 at BK ([[Why site and year cannot be separated]]). The script's `coefTable()` exponentiates every estimate and its [[Confidence Interval]] ends, and the Report gives those, not raw log-scale numbers. Three confusions: a coefficient of 0.34 means times exp(0.34) = 1.40, not 0.34 more species; a rate ratio of 0.89 means times 0.89, so 4.73 species become about 4.2, not 0.89 fewer; and the intercept is the reference site under reference conditions at a typical point, not the overall average.

```r
exp(0.47)            # 1.60: CR vs BK from raw means
(exp(-0.60) - 1) * 100   # about -45%, not -60%
4.73 * 0.89          # about 4.2 species after one wind step
```

## Connections
- **Builds on:** [[Regression Coefficient]], [[Linear Predictor]], [[Log Link]], [[Exponential Function]], [[Reference Level]], [[Species Richness]], [[Standard Deviation]]
- **Leads to:** [[Rate Ratio]], [[Random Intercept]], [[Standardizing]], [[Confidence Interval]], [[Fixed Effect]], [[Interaction Term]], [[Focal Species]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]
- **Go deeper:** [[Why site and year cannot be separated]], [[Parameter vs Estimate]], [[Logarithms and Exponents]], [[Preliminary Results]], [[EDA Findings]], [[Guthery and Bingham 2007]]

## Flashcards

For focal species, tree cover has a rate ratio of 0.55. Translate it into a sentence, and say what the raw coefficient is.
??
Each one-standard-deviation increase in tree cover within 50 m multiplies expected focal richness by 0.55: about 45% fewer focal species, at the same property, spatial covariance, scrub and weather. The raw coefficient is log(0.55), about -0.60.
++++

A Poisson coefficient is 0.34. What does it mean for the expected count?::Multiply the expected count by exp(0.34) = 1.40, about 40% more.

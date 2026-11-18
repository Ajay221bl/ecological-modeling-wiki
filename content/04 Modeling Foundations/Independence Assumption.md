---
type: atomic
tags:
  - statistical-foundations
  - assumptions
  - flashcards
aliases:
  - "independence"
  - "independent observations"
  - "non-independence"
status: seedling
---

# Independence Assumption

**In one line:** the independence assumption says each observation brings its own fresh information: once the model's predictors are known, one observation tells you nothing extra about another.

> [!info] Before this, it helps to know
> [[Probability]] (independent chances multiply) · [[Variable and Observation]] · [[Sampling Unit]] (what one observation is)

## Start from zero
You want to know if a new restaurant is good. Option A: ask three different strangers. Option B: ask the same friend three times.

Option B gives you three answers but really only one opinion. If the friend loved it the first time, they will love it the second and third time too. The answers are **not independent**: knowing one tells you the others.

Statistics has the same problem. Most standard models assume each row of data is like a different stranger. If several rows are really "the same friend asked again", the model counts one opinion as several and becomes overconfident.

## Why it exists
Most standard models (linear models, GLMs) assume observations are independent. Zuur et al. call it "a crucial assumption of most statistical techniques" and define it as: "information from any one observation should not provide information on another after the effects of other variables have been accounted for" ([[Zuur et al. 2010]], p. 11, citing [[Hurlbert 1984]]).

Note the phrase "after the effects of other variables have been accounted for". Two visits at the same site both being high is fine *if* the model already knows that site is rich. The problem is leftover linkage the model does not know about.

**The probability reason.** For independent events, the chance of both is the product of the separate chances: P(A and B) = P(A) x P(B) ([[Hobbs and Hooten 2015 Ch3]], p. 34). Two fair coin flips: 0.5 x 0.5 = 0.25. That product is exactly how the [[Likelihood]] of a whole dataset is built (p. 37). If observations are linked, multiplying them counts the same information more than once.

**What goes wrong.** The model believes it has more independent data than it really has, so [[Standard Error|standard errors]] are too small and [[P-value|p-values]] too small. Zuur et al. say violation "may increase the type I error" (false alarms) and quote p-values inflated by 400% when autocorrelation was ignored (p. 11). Anderson and Burnham add that lack of independence is a common cause of [[Overdispersion]] ([[Anderson and Burnham 2002]], p. 915).

Fixes listed by Zuur et al. include mixed effects models (random effects), correlation structures, and spatial or temporal smoothers; they stress that the *residuals* (leftovers) should show no dependence pattern (p. 11-12).

## A tiny example
Two designs, same number of rows:

| Design | Rows | Truly independent pieces of info | What a naive model thinks |
|---|---|---|---|
| 6 different points, 1 visit each | 6 | about 6 | 6 |
| 2 points, 3 visits each | 6 | somewhere between 2 and 6 | 6 (too many) |

In the second design, if point X is rich, all three of its visits will be high. The model sees "three high values" and grows confident, when really it learned about one rich point. Its SE for any comparison would be too small, roughly as if it had more points than it does.

## In my project
Ways my point-visits are *not* independent:
1. **Repeat visits to the same point.** In the modelled set, 374 of my 376 points were visited 3 times (2 were visited 4 times). A point with good habitat tends to have high richness on every visit. This is the big one, handled by the [[Random Intercept]] `(1|PtNum)` (see [[Why a random intercept for point]]). Interesting result: once property, habitat and weather were in the model, the point variance for all-species richness came out as 0, meaning the predictors had already explained why some points are richer. For focal richness it was 0.20, so leftover point linkage was real there ([[Variance Component]], [[Preliminary Results]]).
2. **Nearby points.** Points about 400 m apart may share birds or habitat patches ([[Spatial Autocorrelation]]). The model does not handle this directly. The bird CSV alone has no coordinates, but the habitat file in the data release does, and the analysis script now tests the point-level residuals with Moran's I. Result: weak but real linkage (Moran's I about 0.05 for both responses). Fixing it is a Final Draft job ([[Why the Report keeps the Poisson model despite the diagnostics]]).
3. **Shared conditions.** Visits on the same morning or by the same observer share weather and skill ([[Observer Effects]]).

Ignoring point 1 would turn 376 points into a fake sample of 1,130 independent replicates, which is [[Pseudoreplication]]. That is why the plain GLM was rejected (see [[Alternatives Considered]]).

## Common confusions
- **"Independent means unrelated to the predictors."** No. It is about observations being unrelated to *each other* after the predictors.
- **"Same site, so not independent."** Not necessarily, if Site is in the model. The worry is linkage the model ignores.
- **"Independence is checked on the raw data."** It is judged on the leftovers (residuals) after fitting.

## Connections
- **Builds on:** [[Probability]], [[Random Variable]], [[Sampling Unit]]
- **Leads to:** [[Pseudoreplication]], [[Repeated Measures]], [[Random Intercept]], [[Spatial Autocorrelation]], [[Likelihood]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Statistical Foundations]]
- **Go deeper:** [[Zuur et al. 2010]] (definition and fixes), [[Hobbs and Hooten 2015 Ch3]], [[Hurlbert 1984]], [[Anderson and Burnham 2002]]

> [!question]- Check yourself
> State the independence assumption in plain words and name the main way my data break it.
> ?
> Once the model's predictors are accounted for, one observation should not tell you anything about another. My data break it because each point was visited about three times, so visits to the same point are linked; the random intercept for PtNum handles this.

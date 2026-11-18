---
type: molecular
tags:
  - molecular
  - diagnostics
  - count-data
  - project-report
  - flashcards/eco/why
aliases:
  - "Why keep the Poisson model for the Report"
status: seedling
---

# Why the Report keeps the Poisson model despite the diagnostics
> [!summary] In plain words
> The checks on my fitted models found two problems. The counts are tamer than a Poisson expects (underdispersion), which makes the error bars too wide. Nearby points have slightly similar leftovers (spatial autocorrelation), which makes the error bars too narrow. The two push in opposite directions, so they partly cancel. The Report only needs preliminary results, so it keeps the Poisson GLMM, reports both problems honestly, and leaves the fixes for the Final Draft.

## The question
The Oct 13 diagnostics flagged two real problems with my Poisson GLMM. Why is it still reasonable to report its results in the Project Report instead of fixing the model first?

## Built from
- [[Confidence Interval]]: the thing both problems distort (how wide the error bars are).
- [[Standard Error]]: what an interval is built from; both problems act on it.
- [[Underdispersion]]: problem one, counts less spread out than a Poisson expects.
- [[Spatial Autocorrelation]]: problem two, nearby points with similar leftovers.
- [[Independence of Observations|Independence Assumption]]: why problem two matters at all.
- [[DHARMa Simulated Residuals]] and [[check_overdispersion()]]: the checks that found the problems.
- [[P-value]]: why a "significant" test can still mean a small problem.

## The reasoning, step by step
1. **An error bar is only as honest as the model's idea of the noise.** A 95% interval is the estimate plus or minus 1.96 standard errors, and the standard error comes from how much noise the model *thinks* the data have. If that idea is off, the interval is off, even when the estimate in the middle is fine.
2. **Problem one: the model expects too much noise.** A Poisson says the variance equals the mean. My fitted models had dispersion ratios of **0.66** (all species) and **0.60** (focal): the real spread is only about two thirds of what the Poisson assumes. DHARMa's dispersion test gave p = 0, so this is not chance ([[Preliminary Results]]).
3. **Too much assumed noise makes intervals too wide.** Roughly, a standard error grows with the square root of the assumed spread. So with a ratio of 0.66 the Poisson's standard errors are about √(1 / 0.66), roughly 1.23 times, too big. An interval that should be ±0.08 comes out about ±0.10. Too wide is the cautious mistake: you might miss a real effect, but you are unlikely to claim a false one.
4. **Problem two: the model counts its evidence twice.** The model treats the 376 points as independent once the predictors are in. But Moran's I on the point-level leftovers was about **0.05** for both responses (0.0456 and 0.0477; 0 would mean no pattern). Neighbouring points about 400 m apart share some of their surprise, so part of each point's information repeats its neighbour's.
5. **Counting evidence twice makes intervals too narrow.** If the 376 points really carried the information of, say, 300 independent ones (an invented number, just to show the direction), the honest standard errors would be about √(376 / 300), roughly 1.12 times, bigger than the model's. That is the overconfident mistake.
6. **The p-value for problem two is tiny, but the problem is small.** p = 1.8e-7 sounds alarming. But with 376 points, even a very weak pattern is easy to detect. The size of Moran's I (0.05) is the better guide, and it is small.
7. **The two problems pull in opposite directions.** One makes the intervals wider than they should be, the other narrower. In the rough numbers above, "1.23 times too wide" meets "about 1.1 times too narrow", and the net is still a little on the cautious side. The exact balance is unknown, but neither problem is likely to flip a strong result.
8. **The strong results are far from the edge.** M3 won with an Akaike weight of 1.00 for both responses, at least 22.5 AIC units ahead. Key effects such as wind (0.89, interval 0.85 to 0.92) or tree cover for focal species (0.55, interval 0.48 to 0.63) sit well away from 1. A modest change in interval width would not change these conclusions. Borderline ones, such as HO versus BK (interval 1.00 to 1.17), deserve cautious wording.
9. **The Report asks only for preliminary results.** Its specs ask for the current model's selection table, key estimates and a figure or two, not final answers. Fixing both problems properly needs new tools (a spatial smooth from the Oct 22 GAM lectures, distributions that allow less spread than Poisson). Rushing those in on the due date risks code errors, which cost points.
10. **So: keep, report, plan.** Keep the planned Poisson GLMM, state both problems and their directions in the Results, and put the fixes on the Final Draft list.

## So in my project
Decision (Oct 13): the Project Report keeps the Poisson GLMM fit by `glmer()` and reports the dispersion ratios, the DHARMa tests and Moran's I, with one sentence that the two issues push the intervals in opposite directions ([[Decision Log]]). The Final Draft fixes, in the recommended order ([[Next Steps]], [[How the project could grow into Bayesian and occupancy models]]):
- a GAM with a spatial smooth, `s(longitude, latitude)`, to absorb the spatial pattern ([[Generalized Additive Model]]);
- a distribution that allows less spread than Poisson: Conway-Maxwell-Poisson or generalized Poisson in glmmTMB, or a binomial "k of 6" for focal richness ([[Underdispersion]]);
- then possibly a Bayesian version of the best model.

## What would go wrong otherwise
- **Switching to a negative binomial "to be safe"** would be the wrong fix: it can only add spread, and my counts need less ([[Negative Binomial Distribution]]).
- **Ignoring the diagnostics** would hide two known weaknesses from the reader and from Dr. Roberts; reporting them is what makes preliminary results trustworthy.
- **Rebuilding the model on the due date** would trade a small, understood bias in interval width for a real risk of broken code and a late or error-docked submission.
- **Reading the tiny Moran's I p-value as a big problem** would confuse "detectable" with "large".

## Connections
- **Builds on:** [[Why check overdispersion before trusting Poisson]], [[Autocorrelation as Signal or Nuisance|Autocorrelation - Friend or Foe]], [[Residual Diagnostics]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]

## Flashcards

Which two diagnostic problems were found, and which way does each push the error bars?
??
Underdispersion makes error bars too wide; spatial autocorrelation in the residuals makes them too narrow. They push in opposite directions and partly cancel.
++++

Why is keeping the Poisson GLMM acceptable for the Report?::The Report needs preliminary results, so the model is kept, both problems are reported honestly, and the fixes go in the Final Draft.

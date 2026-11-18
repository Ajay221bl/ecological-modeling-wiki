---
type: molecular
tags:
  - molecular
  - mixed-models
  - flashcards/eco/why
aliases:
  - "Random intercept for PtNum"
  - "Why (1|PtNum)"
status: seedling
---

# Why a random intercept for point
> [!summary] In plain words
> Visits to the same point are alike, because the point's habitat stays the same. If the model pretended every visit was a fresh, unrelated sample, it would think it had far more evidence than it does. A random intercept gives each point its own baseline richness, so the model counts repeat visits as related, not as new independent data. In my results the point baselines turned out to matter for focal species (variance 0.20) but not for all species (variance 0), and the random intercept stays in both by design.

## The question
Almost all of my 376 modelled survey points were visited three times. Why add `(1|PtNum)` to the model instead of treating all 1,130 point-visits as separate observations?

## Built from
- [[Repeated Measures]]: the same point is measured more than once.
- [[Independence of Observations|Independence Assumption]]: the assumption that repeated visits break.
- [[Pseudoreplication]]: the error we commit if we ignore the repeats.
- [[Grouping Variable]]: PtNum is the column that defines the clusters.
- [[Random Intercept]]: the tool that gives each point its own baseline.
- [[Partial Pooling]]: why those baselines are sensible even with only 3 visits each.

## The reasoning, step by step
1. **Start with something obvious.** If you poll 3 people from the same household about their politics, you have not learned as much as polling 3 strangers. Family members are alike.
2. **Visits to a point are like family members.** Two visits to the same point share the same patch of grassland, the same nearby tree line, the same territory holders. BK1001 gave 6, 7 and 6 species; CR14 gave 14, 9 and 10 (ground detections, as the script counts them). A point that is rich on visit 1 tends to be rich on visit 2. Statisticians say the visits are correlated.
3. **Standard models assume the opposite.** They assume each observation brings brand-new information: once predictors are known, one observation tells you nothing about another ([[Zuur et al. 2010]], p. 11).
4. **Ignoring this inflates confidence.** If the model treats 1,130 related visits as 1,130 independent ones, it thinks it has more information than it does. [[Standard Error|Standard errors]] shrink, and differences look more certain than they are. Hurlbert called this [[Pseudoreplication]] ([[Hurlbert 1984]]).
5. **The fix: a baseline per point.** A random intercept lets each point have its own starting level of richness. Those levels are assumed to come from one shared bell curve ([[Normal Distribution]]) centred on 0, and the model estimates how wide it is (a [[Variance Components|Variance Component]]). Harrison et al. describe this as "constraining non-independent 'units' to have the same intercept" ([[Harrison et al. 2018]], p. 5).
6. **Small samples per point are fine.** With only 3 visits, a point's own average is noisy. Partial pooling pulls each point's estimate toward the overall average, more strongly for points with less data ([[Harrison et al. 2018]], p. 6). Toy numbers: a point whose 3 visits average 6.3, among points averaging 4.8 overall, gets a baseline somewhat above average, but not the full +1.5. (Roughly: in a Poisson GLMM this pulling happens on the log scale.)
7. **We have enough groups.** Estimating a spread needs many groups; "at least five" is the usual minimum ([[Harrison et al. 2018]], p. 7). With 376 points we have plenty.
8. **The instructor agreed.** Dr. Roberts wrote on the proposal: "Good! Specifically, I would set 'point' as a random intercept." (see [[Proposal Feedback from Dr Roberts]]).
9. **The model then measures how alike the visits are.** The spread of the point baselines can come out large, small or zero. Zero is a real answer: "once the predictors are in, visits to the same point are no more alike than visits to different points". The random intercept is the *question* the model asks; the variance is its answer.

## So in my project
Every candidate model carries the same random part, for example the null model in `GrasslandBirdRichness_Analysis.R`:
```r
    list(M0_Null     = paste(response, "~ Wind + Sky + (1|PtNum)"),
```
`(1|PtNum)` reads as "a separate intercept (the `1`) for each (`|`) level of PtNum". Points sit inside properties (each PtNum belongs to exactly one), and their codes are unique (BK1001 cannot be confused with a CR point), so no extra nesting syntax is needed ([[Nested vs Crossed Random Effects]]). The function is [[glmer()]] from lme4.

What the Oct 13 run found in the top model, M3 ([[Preliminary Results]]):
- **Focal richness: point variance 0.20 (SD 0.45).** Visits to the same point really are more alike, beyond property and habitat. Without the random intercept this would have been pseudoreplication. H3 supported.
- **All-species richness: point variance 0.** lme4 printed `boundary (singular) fit`, a message, not an error. Property, habitat and weather already explain why some points are richer, so no point-to-point spread is left over ([[Convergence Warnings|Singular Fits and Convergence Warnings]]). H3 not supported for this response.
- **The random intercept stays in every model anyway.** It reflects the repeated-visit design, it was decided before seeing the data, it keeps every model in the AIC table on the same footing, and with a variance of 0 it changes nothing, so keeping it costs nothing.

## What would go wrong otherwise
- A plain [[glm()]] would give falsely small standard errors where visits really are linked (as for focal richness), raising the chance of a "significant" difference that is really just the same points counted again (a higher Type I error rate, meaning more false alarms).
- Adding PtNum as a [[Fixed Effect]] instead would spend 415 parameters, make Site impossible to estimate (every point belongs to one site, so point terms absorb the site differences), and lose partial pooling.
- H3 in [[Hypotheses]] (repeated visits; numbered H2 in the Sep 10 proposal) would be ignored, and the property and habitat comparisons for H1 and H2 would look more certain than they are.

## Connections
- **Related:** [[Why the point-visit is the sampling unit]], [[Why Site is fixed not random]], [[GLMM]], [[Population and Sample|Sample vs Population]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What goes wrong if repeat visits to a point are treated as independent?::The model thinks it has far more evidence than it does (pseudoreplication), so its standard errors are too small.

The point variance was 0 for all species but 0.20 for focal species. Was the random intercept still kept?::Yes, in both models by design, because the repeat-visit structure is part of the study plan (H3).

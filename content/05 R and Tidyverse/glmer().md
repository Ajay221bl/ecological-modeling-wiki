---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - mixed-models
  - flashcards/eco/r
description: "glmer(), from the lme4 package, fits a generalized linear mixed model: the same kind of model as glm() plus random effects, written (1|group), that let each group have its own baseline."
aliases:
  - "glmer"
  - "glmer.nb()"
status: seedling
---

# glmer()

Visit the same field three times and count species: 6, 7 and 6. A different field gives 3, 4 and 3. The visits to one field are alike because the field itself is rich or poor, so they are not independent: knowing one tells you something about the others ([[Independence of Observations]]). A plain [[glm()]] treats every visit as brand-new information, so with about three visits per point it thinks it has three times more independent information than it really has, the mistake called [[Pseudoreplication]]. **`glmer()`**, from the [[lmer()|lme4 package]], fits a [[GLMM]] (generalized linear mixed model): the same count model as `glm()` plus a [[Random Effect]], written `(1|group)`, that gives each group its own baseline. `(1|PtNum)` gives each survey point its own [[Random Intercept]], read "an intercept (1) for each level of (|) PtNum".

Build the idea with two points. Point A's visits are 6, 7, 6 (average 6.33) and point B's are 3, 4, 3 (average 3.33); the overall average is 4.83, so A sits about +1.5 above it and B about −1.5 below. The random intercept is roughly that difference for each point, pulled a little toward 0 because three visits are not much evidence ([[Partial Pooling]]); in a Poisson GLMM this happens on the log scale, but the idea is the same. The points' baselines are assumed to come from one shared bell curve ([[Normal Distribution]]), and the model estimates how wide it is, a [[Variance Components|variance component]]: wide means points differ a lot. The project fits its candidate models like this inside `fitCandidates()`:

```r
# norun: needs the project data
mods <-
  list(M0_Null     = paste(response, "~ Wind + Sky + (1|PtNum)"),
       M1_Property = paste(response, "~ Site + Wind + Sky + (1|PtNum)"))
fits <-
  lapply(mods, function(f) glmer(as.formula(f), family = "poisson", data = datClean,
                               control = glmerControl(optimizer = "bobyqa")))
```

[[paste()]] glues the response name onto each right-hand side, `as.formula()` turns the text into a formula, `family = "poisson"` picks the [[Poisson Distribution]] with a [[Log Link]], and `glmerControl(optimizer = "bobyqa")` picks the search method that finds the estimates ([[Numerical Optimization]]); bobyqa removed a [[Convergence Warnings|convergence warning]] the default gave. By default `glmer()` approximates the [[Likelihood]] with the [[Laplace Approximation]]. Six models are fitted per response, M0 Null, M1 Property, M2a/b/c Habitat at three spatial scales and M3 (Site plus the best habitat terms), on the same 1,130 visits at 376 points ([[Candidate Model Set]], [[Complete-Case Analysis]]). `Site` stays a [[Fixed Effect]] because it has only 5 levels and is the effect of interest ([[Why Site is fixed not random]]). In the Oct 13 run M3 ranked first for both responses ([[MuMIn model.sel()]]); the point variance was 0 for all-species [[Species Richness|richness]], so R printed `boundary (singular) fit`, a message, not an error ([[Singular Fit]]), and 0.20 for focal richness; the dispersion ratio was below 1 ([[check_overdispersion()]]), so no switch to a negative binomial was needed ([[Preliminary Results]]). Three confusions: `|` inside `( | )` in a formula means "grouped by", not OR; you usually report a random intercept's variance (from [[fixef(), ranef() and VarCorr()|VarCorr()]]), not the 376 individual values; and warnings and messages ask you to check, while errors stop the code.

## Connections
- **Builds on:** [[glm()]], [[Independence of Observations]], [[Pseudoreplication]], [[GLMM]], [[Random Effect]], [[Random Intercept]]
- **Leads to:** [[Partial Pooling]], [[Variance Components]], [[Convergence Warnings]], [[Singular Fit]], [[MuMIn model.sel()]], [[check_overdispersion()]], [[Residual Diagnostics]], [[lmer()]], [[Species Richness]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]], [[MOC 14 - Mixed Models|MOC - Mixed Models]]
- **Go deeper:** [[Why a random intercept for point]], [[Why Site is fixed not random]], [[R Scripts Walkthrough]], [[Harrison et al. 2018]], [[Bolker et al. 2009]]

## Flashcards

Which part of the glmer formula prevents pseudoreplication, and how?
??
`(1|PtNum)`. It gives each point its own baseline richness, so the roughly three visits to one point are treated as related rather than as independent samples.
++++

What does `boundary (singular) fit` mean after a glmer() fit?::A variance component was estimated at (or near) zero; it is a message asking you to check, not an error.

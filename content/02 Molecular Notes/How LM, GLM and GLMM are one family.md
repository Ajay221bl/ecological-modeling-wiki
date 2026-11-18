---
type: molecular
tags:
  - molecular
  - glm
  - mixed-models
aliases:
  - "LM GLM GLMM"
  - "One model family"
status: seedling
---

# How LM, GLM and GLMM are one family
> [!summary] In plain words
> All three models start from the same straight-line formula: a starting value plus a bit for each predictor. The linear model (LM) uses that formula as the average and assumes bell-curve scatter. The GLM lets you pick a different kind of scatter (like Poisson for counts) and a "link" (like log) to keep predictions sensible. The GLMM then adds one more piece: a personal adjustment for each group, such as each survey point. Same tool, more switches turned on.

## The question
The course moves from linear models to GLMs to mixed models. Are these different tools, or one tool with more pieces switched on?

## Built from
- [[Equation of a Line]]: intercept plus slope times x, the shared core.
- [[Linear Model]]: the starting point.
- [[Linear Predictor]]: the "intercept + slope x predictor" sum shared by all three.
- [[Link Function]]: connects the linear predictor to the average of the response.
- [[Error Distribution (Family)]]: the probability distribution for the scatter.
- [[Generalized Linear Model]]: lets you choose link and family.
- [[GLMM]]: adds random effects to a GLM.

## The reasoning, step by step
1. **Every model has two parts.** A rule for the average (deterministic part) and a description of how data scatter around it (stochastic part) ([[Deterministic and Stochastic Components]]; [[Hobbs and Hooten 2015 Ch1]]).
2. **All three share the same rule-maker.** It is a straight-line sum called the linear predictor, written η ("eta"): η = β0 + β1·x1 + β2·x2 + ... In words: a starting value (β0, the intercept) plus a slope times each predictor. For my top model, η = intercept + property effect + habitat slopes × habitat + Wind slope × Wind + Sky slope × Sky.
3. **LM: use η directly.** The average *is* η (this is called the identity link), and the scatter is a bell curve ([[Normal Distribution]]) with the same width everywhere. Fine for continuous, symmetric data like body mass.
4. **GLM: keep η, change two settings.** Choose a family for the scatter and a link between η and the average. For counts: log(average) = η, and the scatter is Poisson ([[Logarithms and Exponents]]). This is what Dr. Roberts' example does for bird richness with `glm()`.
5. **A tiny example of the link.** Suppose η = 1.8 for some point. An LM would predict 1.8 species. A Poisson GLM predicts e^1.8 ≈ 6.0 species. If η dropped to -1, the LM would predict -1 species (impossible); the GLM predicts e^-1 ≈ 0.37 (small but possible).
6. **GLMM: keep link and family, add groups.** Add a personal adjustment u for each point: log(average) = η + u(point). Each point's u is drawn from a bell curve centred on 0 with spread σ² (a [[Variance Component]]). This handles grouped data such as repeat visits ([[Harrison et al. 2018]], p. 5).
7. **So each step adds one idea.** GLM adds "the response is not bell-shaped". GLMM adds "observations come in groups". Everything learned earlier (coefficients, likelihood, AIC) carries forward.
8. **And one more step is coming.** The same structure with a prior distribution on every parameter is a Bayesian hierarchical model, the next step in the course ([[How the project could grow into Bayesian and occupancy models]]).

## So in my project
The three levels, using real code where it exists:
- LM (not in my scripts; just for comparison): would be `Richness ~ Site + Wind + Sky` (plus habitat), with a Normal error, which is wrong for counts ([[Why Poisson instead of linear regression for richness]]).
- GLM, from Dr. Roberts' `PineRidgeFireLegacies_Analysis.R`:
```r
  lapply(mods, glm, family = "poisson", data = datClean)
```
- GLMM, from my `GrasslandBirdRichness_Analysis.R`:
```r
    lapply(mods, function(f) glmer(as.formula(f), family = "poisson", data = datClean,
                                 control = glmerControl(optimizer = "bobyqa")))
```
The main differences are the function ([[glm()]] versus [[glmer()]]) and the `(1|PtNum)` term inside each formula, which means "a separate intercept for each point". (The `control` part only picks the search method; [[Singular Fits and Convergence Warnings]].)

My Oct 13 results show the family link in action. For all-species richness the point variance came out as 0, so that GLMM collapses back to a plain Poisson GLM: the "M" switch is on, but the data said it has nothing to add. For focal richness the variance was 0.20, so the GLMM really differs from the GLM there ([[Variance Component]], [[Preliminary Results]]).

## What would go wrong otherwise
- Thinking of these as unrelated tools makes it hard to know which to pick. Asking two questions instead (what distribution fits my response? are my observations grouped?) picks the model for you.
- Reading coefficients would be confusing: in all three they are on the link scale, so Poisson GLM and GLMM coefficients are log rate ratios ([[Interpreting Poisson Coefficients]]).

## Connections
- **Related:** [[Random Effect]], [[Fixed Effect]], [[Log Link]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], [[MOC 14 - Mixed Models|MOC - Mixed Models]]

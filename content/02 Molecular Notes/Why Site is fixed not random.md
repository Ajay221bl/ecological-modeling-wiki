---
type: molecular
tags:
  - molecular
  - mixed-models
aliases:
  - "Site as fixed effect"
status: seedling
---

# Why Site is fixed not random
> [!summary] In plain words
> Points and sites are both groups, but I want different things from them. For the 376 modelled points I only need to allow for how much points vary, so point is random. For the 5 properties I want a named answer for each one ("CR versus BK"), and 5 groups are too few to estimate a spread reliably anyway. So Site is fixed.

## The question
Points are a random effect. Sites are also groups of observations. Why is Site a fixed effect instead of a second random intercept?

## Built from
- [[Fixed Effect]]: estimates a separate, named effect for each level.
- [[Random Effect]]: treats levels as a sample from a larger population and estimates their spread.
- [[Sample vs Population]]: what "a sample of groups" means.
- [[Variance Component]]: what a random effect actually estimates.
- [[Grouping Variable]]: both PtNum and Site are grouping variables, at different levels.
- [[Factors]] and [[Categorical Predictor and Reference Level]]: how a fixed Site effect is coded.

## The reasoning, step by step
1. **Two kinds of question.** A random effect answers "how much do groups vary?" by estimating one spread (a variance) from many groups. A fixed effect answers "how does each named group differ?" by estimating one number per level (minus a reference level).
2. **Estimating a spread needs many groups.** Think about measuring how much heights vary in a class using only 2 students: whatever you get is mostly luck. Harrison et al. say random intercepts need "at least five 'levels'" for robust variance estimates, and that with fewer the variance may "collapse to zero" or be wrong ([[Harrison et al. 2018]], p. 7). They also note variance estimates "can be hugely imprecise when there are fewer than five levels" (p. 6). Five sites is the bare minimum, so the estimate would be shaky.
3. **More importantly, I care about these five.** H1 is about these particular properties. I want an estimate for CR versus BK, not the spread of a hypothetical population of Arkansas properties. Harrison et al. note that fixed effect estimates "are only relevant to groups in our dataset" (p. 7), which is exactly what I want here.
4. **Points are the opposite case.** There are 376 of them in the models, and I do not care about BK1001's personal richness; I only need to account for points varying. So point is random.
5. **How a fixed Site is coded.** R stores Site as a factor (a category column) and orders levels alphabetically, so BK is the reference. The intercept is BK's log average richness, and each other coefficient is that site's difference from BK on the log scale ([[Interpreting Poisson Coefficients]]).
6. **A tiny example.** BK's raw average is 4.73 species and CR's 7.58, so a CR coefficient from raw means alone would be about log(7.58 / 4.73) = log(1.60) ≈ 0.47. Undo the log: e^0.47 ≈ 1.60, "CR has about 1.6 times BK's richness". The real model also holds habitat and weather constant and gives 1.40 instead ([[Preliminary Results]]).

## So in my project
`GrasslandBirdRichness_Wrangling.R` makes Site a factor, at the end of the `mutate()` that also standardizes the habitat columns:
```r
         Site = factor(Site),
```
(In words: change the Site column into a category column with `factor()`.) Every Site-containing model (M1 and M3) uses it as a fixed term next to the random point term, e.g. `M1_Property = paste(response, "~ Site + Wind + Sky + (1|PtNum)")`. The script's rate-ratio dot plot then shows each property relative to BK, with a dashed line at 1.

The fixed choice paid off for H1: it gives a named answer per property. In the top model, all-species richness at CR was 1.40 times BK's, while for focal species every property had fewer than BK (0.43 to 0.76) ([[Preliminary Results]]). A random Site effect would only have said "properties vary by this much".

## What would go wrong otherwise
- `(1|Site)` would estimate one shaky variance from 5 sites, might give a singular fit warning ([[Singular Fits and Convergence Warnings]]), and would not give direct site-by-site comparisons for H1.
- It would also imply that the five properties are a random sample from a wider population, which they are not; they were chosen for the original study.
- Treating point as fixed instead would waste 415 parameters ([[Why a random intercept for point]]).

## Connections
- **Related:** [[Why site identity is a weak test of a habitat hypothesis]], [[Why site and year cannot be separated]], [[Partial Pooling]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 14 - Mixed Models|MOC - Mixed Models]]

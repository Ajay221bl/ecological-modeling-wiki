---
type: molecular
tags:
  - molecular
  - glm
  - count-data
aliases:
  - "Why Poisson"
  - "Poisson vs linear regression"
status: seedling
---

# Why Poisson instead of linear regression for richness
> [!summary] In plain words
> Species richness is a count: 0, 1, 2, 3... never negative, never 6.4. A straight-line regression assumes bell-curve scatter with the same spread everywhere, which counts do not have, and it can predict impossible negative values. A Poisson model is built for counts: its spread grows with its average, and with a log link its predictions are always positive.

## The question
My response is the number of species detected at a point-visit. Why model it with a Poisson distribution and a log link instead of an ordinary linear regression (the "line of best fit" taught first in most stats classes)?

## Built from
- [[Count Data]]: tells us what kind of numbers richness is (whole numbers, never negative).
- [[Linear Model]]: the default tool we are deciding against.
- [[Assumptions of Linear Models]]: the promises a linear model makes that counts break.
- [[Poisson Distribution]]: the probability distribution built for counts.
- [[Mean-Variance Relationship]]: why the spread of counts changes with their average.
- [[Log Link]]: the piece that keeps predicted counts positive (needs [[Logarithms and Exponents]]).

## The reasoning, step by step
1. **Start from the data.** At point BK1001 the three visits gave 6, 7 and 6 species (ground detections, as the script counts them). Richness is always a whole number from 0 upward. In my data it runs from 0 to 14, with property averages between about 4.7 and 7.6.
2. **Every model has two parts.** A rule for the average (the deterministic part) and a description of how real values scatter around that average (the stochastic part), described by a [[Probability Distribution]] ([[Deterministic and Stochastic Components]]). Choosing "linear regression" quietly chooses the bell-shaped [[Normal Distribution]] for the scatter.
3. **The bell curve does not match counts.** A Normal distribution is smooth, symmetric, and stretches to minus infinity. It allows 6.4 species and -2 species. Counts allow neither.
4. **The spread is wrong too.** A linear model assumes the scatter is the same size everywhere (constant [[Variance]]; see [[Spread and Variability]]). Counts do not work that way. A place averaging 1 species can only wobble between 0, 1, 2 or 3: it bumps into zero. A place averaging 10 can wobble between 6 and 14. Bigger averages, bigger spread.
5. **Poisson builds that in.** The [[Poisson Distribution]] describes "the probability of a number of events occurring in a given unit of time or space" and has a single parameter, the mean λ ([[Hobbs and Hooten 2015 Ch3]], p. 52). Its variance equals its mean. Average 2 means variance about 2; average 8 means variance about 8. So the spread grows with the average automatically.
6. **Keep predictions positive.** A [[Generalized Linear Model]] pairs the Poisson with a [[Link Function]]. The [[Log Link]] says: the straight-line formula predicts log(average richness). Whatever that formula gives, say -0.5 or 2.1, undoing the log (e^-0.5 ≈ 0.61, e^2.1 ≈ 8.2) is always positive.
7. **Effects become multipliers.** Adding on the log scale is multiplying on the count scale. So a property effect reads like "about 1.40 times the species of BK" (my real CR estimate), a natural way to talk about counts ([[Interpreting Poisson Coefficients]]).
8. **Why not just log the counts and use a line?** You cannot take the log of zero, and the average of logged numbers is not the log of the average. That old workaround is discouraged ([[Harrison et al. 2018]], p. 9, which cites O'Hara and Kotze 2010, "Do not log-transform count data").

## So in my project
Every candidate model in `GrasslandBirdRichness_Analysis.R` uses the Poisson family:
```r
  fits <-
    lapply(mods, function(f) glmer(as.formula(f), family = "poisson", data = datClean,
                                 control = glmerControl(optimizer = "bobyqa")))
```
`family = "poisson"` is the choice this note justifies ([[glmer()]]). Dr. Roberts' example project does the same for bird richness with a plain GLM (`lapply(mods, glm, family = "poisson", data = datClean)`), so this is also the course convention. The variance-to-mean ratios within properties (0.56 to 0.93 on the 376 modelled points) were close enough to 1 that Poisson was a reasonable start ([[Mean-Variance Relationship]]).

The fitted models (Oct 13) showed the Poisson is not perfect: the counts are a little *less* spread out than it expects (dispersion ratios 0.66 and 0.60; [[Underdispersion]]). That makes its intervals cautious rather than overconfident, so the Report keeps it, and the Final Draft may move to a count distribution that allows less spread ([[Why the Report keeps the Poisson model despite the diagnostics]]). Either way the choice stays inside the count family this note argues for; a linear model is never back on the table.

## What would go wrong otherwise
- A linear model could predict negative richness for a low-richness site in bad weather.
- Standard errors would be wrong because the model assumes equal spread everywhere, so [[Confidence Interval|confidence intervals]] and [[P-value|p-values]] would be off.
- Property differences would be forced to be additive ("2 more species") even though count processes act multiplicatively.
- Residual plots would show a funnel shape, a classic sign of a broken assumption ([[Residual Diagnostics]]).

## Connections
- **Leads to:** [[Why check overdispersion before trusting Poisson]], [[How LM, GLM and GLMM are one family]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

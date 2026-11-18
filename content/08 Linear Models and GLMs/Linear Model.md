---
type: atomic
tags:
  - glm
  - linear-models
  - flashcards
aliases:
  - "LM"
  - "linear models"
  - "linear regression"
  - "lm()"
  - "ordinary least squares"
  - "regression"
status: seedling
---

# Linear Model
**In one line:** a linear model is a straight-line recipe for a guess: start from a baseline number, add a fixed amount for each thing you measured, and expect real data to scatter around that guess.

> [!info] Before this, it helps to know
> [[Equation of a Line]] (the model is a line, dressed up) · [[Average (Mean)]] (the line predicts an average) · [[Spread and Variability]] (the scatter around the line)

## Start from zero
Picture a birder at a survey point. Each morning they count species. On calm mornings they tend to hear more birds; on windy mornings, fewer.

You could draw that on a graph: wind on the bottom axis, species on the side axis, one dot per morning. Then you draw the straight line that runs through the middle of the cloud of dots. That line is a **linear model**.

A line has two numbers ([[Equation of a Line]]):
- the **intercept**: where the line starts (the guess when wind is 0),
- the **slope**: how much the guess changes for each one-step increase in wind.

A **model** is just a simplified description of how the data came about ([[Statistical Model]]). The thing we are trying to explain (species count) is the [[Response Variable]]. The things we use to explain it (wind, site) are [[Predictor Variable]]s. The intercept and slope are **parameters**: unknown numbers the data must tell us ([[Parameter vs Estimate]]).

The line does not go through every dot. Each dot sits a bit above or below. A linear model assumes that scatter looks like a bell curve ([[Normal Distribution]]) of the **same width everywhere** along the line.

## Why it exists
It is the simplest honest answer to "does the response go up or down with this, and by how much?". Effects simply add: baseline, plus the wind piece, plus the sky piece. Hobbs and Hooten call this out as its main strength, that it "expresses effects that are additive", and the place to start "if we lack a solid understanding of mechanisms" ([[Hobbs and Hooten 2015 Ch2]], p. 22).

"Linear" is about how the parameters enter, not about the shape of the curve. Zuur et al.: "the term 'linear' in linear regression refers to the way parameters are used in the model and not to the type of relationships that are modelled" ([[Zuur et al. 2010]], p. 4). So adding wind² still counts as linear.

**The catch.** A straight line runs forever in both directions. So it can predict impossible values, like negative species. Hobbs and Hooten note it is "not strictly correct" for quantities that cannot be negative (Ch2, p. 22), and its constant-width scatter clashes with counts ([[Hobbs and Hooten 2015 Ch3]], p. 58).

## A tiny example
Suppose the fitted line is: species = 6 - 2 x wind.

| Wind code | Guess (6 - 2 x wind) | Makes sense? |
|---|---|---|
| 0 | 6 | yes |
| 1 | 4 | yes |
| 2 | 2 | yes |
| 3 | 0 | odd, but possible |
| 4 | -2 | **impossible**: you cannot see minus two species |

That last row is the whole reason the rest of this cluster exists.

## In my project
The "obvious first try" would be:

```r
lm(Richness ~ Site + Wind + Sky, data = datClean)
```

(This line is not in my scripts; it is the model my project deliberately does *not* use.) It runs without errors, but:
- It treats richness as any number. It can predict 4.3 or -1 species. A normal curve with BK's mean (4.73) and its spread puts about 1% of its probability below zero species.
- It assumes every site has the same spread, but with counts the spread grows with the average ([[Mean-Variance Relationship]]).
- It treats the 1,130 point-visits as unrelated, though each point was visited about three times ([[Independence Assumption]]).

Fixing the first two gives a Poisson [[Generalized Linear Model]]. Fixing the third gives my Poisson [[GLMM]].

## Common confusions
- **"Linear means a straight line only."** No: curves are allowed as long as each parameter is just multiplied by something and added.
- **"It ran, so it is fine."** R fits a line to anything. Whether the line is sensible is your job ([[Assumptions of Linear Models]]).
- **"The slope is the effect of wind, full stop."** It is the effect of wind *holding the other predictors fixed* ([[Guthery and Bingham 2007]], p. 685, 688).

## Connections
- **Builds on:** [[Equation of a Line]], [[Average (Mean)]], [[Statistical Model]], [[Normal Distribution]]
- **Leads to:** [[Assumptions of Linear Models]], [[Generalized Linear Model]], [[Linear Predictor]], [[Residuals]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch2]] (why additive models are the default start), [[Zuur et al. 2010]] (what "linear" really means)

> [!question]- Check yourself
> Why is a straight-line model risky for counting species?
> ?
> A line keeps going down forever, so at high wind (or any extreme value) it can predict negative or fractional species. It also assumes the scatter is the same size everywhere, but count scatter grows as the average grows.

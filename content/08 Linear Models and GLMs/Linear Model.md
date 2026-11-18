---
type: atomic
tags:
  - glm
  - linear-models
  - flashcards/eco/lm-glm
description: "A linear model is a straight-line recipe for a guess: start from a baseline, add a fixed amount for each thing you measured, and expect real data to scatter around that guess in a bell curve of constant width."
aliases:
  - "linear models"
status: seedling
---

# Linear Model

Picture a birder at a survey point counting species each morning: on calm mornings they tend to hear more birds, on windy mornings fewer. Put wind on the bottom axis and species on the side, one dot per morning, and draw the straight line through the middle of the cloud. That line is a **linear model**: a recipe that starts from a baseline number, adds a fixed amount for each thing you measured, and expects real data to scatter around the guess. It is a [[Statistical Model]] (a simplified description of how the data came about) built on the [[Equation of a Line]]. The thing explained (species count) is the [[Response Variable]]; the things used to explain it (wind, site) are each a [[Predictor Variable]]. The intercept (the guess when wind is 0) and the slope (the change per one-step increase in wind) are each a [[Parameter]], an unknown number the data must estimate ([[Parameter vs Estimate]]). The dots do not sit on the line, and a linear model assumes their scatter is a bell curve, the [[Normal Distribution]], of the same width everywhere along the line.

Why start here? It is the simplest honest answer to "does the response go up or down with this, and by how much?": baseline, plus the wind piece, plus the sky piece. Hobbs and Hooten call this its main strength, that it "expresses effects that are additive", and the place to start "if we lack a solid understanding of mechanisms" ([[Hobbs and Hooten 2015 Ch2]], p. 22). "Linear" is about how the parameters enter, not about the shape: "the term 'linear' in [[Linear Regression|linear regression]] refers to the way parameters are used in the model and not to the type of relationships that are modelled" ([[Zuur et al. 2010]], p. 4), so adding wind² still counts as linear ([[Quadratic Term]]). Now the catch. Suppose the fitted line is species = 6 − 2 × wind: wind 0 gives 6, 1 gives 4, 2 gives 2, 3 gives 0 (odd but possible) and 4 gives −2, impossible. A straight line runs forever in both directions, so it can predict values a count can never take, and its constant-width scatter clashes with counts, whose spread grows with the average ([[Hobbs and Hooten 2015 Ch3]], p. 58; [[Mean-Variance Relationship]]).

The project's "obvious first try" would be `lm(Richness ~ Site + Wind + Sky, data = datClean)`, a model it deliberately does not use. It runs without errors, but it treats [[Species Richness|richness]] as any number (a normal curve with Bald Knob's mean, 4.73, and its spread puts about 1% of its probability below zero species), assumes every site has the same spread, and treats the 1,130 point-visits as unrelated though each point was visited about three times ([[Independence of Observations]]). Fixing the first two gives a Poisson [[Generalized Linear Model]]; fixing the third gives the project's Poisson [[GLMM]]. Three confusions: linear does not mean straight-line only, since curves are allowed as long as each parameter is just multiplied by something and added; "it ran" is not "it is fine", because R fits a line to anything ([[Linear Model Assumptions]]); and a slope is the effect of that predictor holding the other predictors fixed ([[Guthery and Bingham 2007]], pp. 685, 688). The leftover gap between each dot and the line is its [[Residual]].

```r
wind <- 0:4
6 - 2 * wind   # 6 4 2 0 -2 : the last guess is impossible for a count
```

## Connections
- **Builds on:** [[Statistical Model]], [[Equation of a Line]], [[Response Variable]], [[Predictor Variable]], [[Parameter]], [[Normal Distribution]], [[Linear Regression]], [[Species Richness]]
- **Leads to:** [[Quadratic Term]], [[Mean-Variance Relationship]], [[Independence of Observations]], [[Generalized Linear Model]], [[GLMM]], [[Linear Model Assumptions]], [[Residual]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]
- **Go deeper:** [[Parameter vs Estimate]], [[How LM, GLM and GLMM are one family]], [[Hobbs and Hooten 2015 Ch2]], [[Zuur et al. 2010]], [[Guthery and Bingham 2007]]

## Flashcards

Why is a straight-line model risky for counting species?
??
A line keeps going down forever, so at high wind (or any extreme value) it can predict negative or fractional species. It also assumes the scatter is the same size everywhere, but count scatter grows as the average grows.
++++

Is a model with a wind² term still a linear model?::Yes. "Linear" refers to how the parameters enter (each multiplied by something and added), not to the shape of the curve.

---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Complexity"
  - "Model size"
status: seedling
---

# Model Complexity

**In one line:** model complexity is how much freedom a model has to bend to the data, roughly the number of parameters it estimates.

> [!info] Before this, it helps to know
> [[Parameter]] (a number learned from data) · [[Parsimony]] (preferring the simplest adequate model)

## The everyday picture
Clothing sizes. One-size-fits-all fits nobody well. A fully tailored suit fits one person perfectly and nobody else. Small, medium and large fit most people decently. Complexity is how closely the garment follows one body.

*Where the picture stops working:* you can see a bad fit in a mirror. A model that is too complex looks great on the data it was fitted to.

## Words you'll need
- **K:** the count of estimated parameters ([[Number of Parameters]]).
- **Flexibility:** the range of shapes a model can take.
- **Effective parameters:** a fractional count used when parameters are partly constrained, as in mixed models and GAMs.

## A tiny example
30 plots, response bird richness.
- Model A: intercept only. K = 2 (mean and residual SD).
- Model B: + tree cover. K = 3.
- Model C: + cover², burn, year, and all interactions. K = 13.
- With 30 plots, model C has about 2 observations per parameter. Too few.

## Start from zero
1. **Each parameter is a knob the data must set.**
2. **More knobs fit the sample more closely.** Always.
3. **But each knob is set from a share of the data.** *Why:* the same information is spread thinner, so every estimate gets noisier.
4. **So complexity trades bias for variance.** ([[Bias-Variance Trade-off]])
5. **The data set an affordable level.** Rules of thumb: 10 or more observations per parameter.
6. **Some complexity is hidden.** Trying many models, or many smoothers, also spends data ([[Data Dredging]]).

## See it
![[Model complexity curve.png|700]]
*What to look at:* error on the fitting data keeps falling, while error on new data turns back up.

## Why it is this way
Model selection is mostly the management of complexity. Too little and the model misses real effects. Too much and it memorises noise. AIC, cross-validation, priors and random effects are all devices for finding the level the data can support.

## In R
```r
set.seed(9)
n <- 30; x <- runif(n); y <- 1 + 2 * x + rnorm(n, 0, 0.5)
fits <- lapply(1:8, function(d) lm(y ~ poly(x, d)))
sapply(fits, function(m) length(coef(m)) + 1)     # K: 3 to 10
round(sapply(fits, function(m) summary(m)$r.squared), 3)   # always rising
round(sapply(fits, AIC), 1)                        # barely moves: the extra parameters buy nothing
```
R² climbs with every added parameter. AIC, which charges for complexity, does not.

## In the course
"How complex should I make my model?" is one of Powell and Gale's opening questions ([[Powell and Gale 2015 Ch1]]). Tredennick and colleagues tie the right complexity to the modeling goal ([[Tredennick et al. 2021]]).

## Common confusions
- **"Complex models are more scientific."** They are more demanding of data.
- **"Complexity equals number of predictors."** Interactions, polynomial terms and factor levels each add parameters.

## Explain it back
- Why does adding a parameter make the other estimates noisier?
- How many parameters does a factor with 5 levels add?

*Pass test:* you can count K for a simple model and say whether the data can afford it.

## Connections
- **Builds on:** [[Parameter]], [[Parsimony]]
- **Leads to:** [[Overfitting]], [[Number of Parameters]], [[AIC]], [[Effective Number of Parameters]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]

## Flashcards

What is model complexity?
??
How much freedom a model has to fit the data, roughly its number of estimated parameters.
![[Model complexity curve.png]]
++++

Why can't you judge complexity by fit to the sample?
??
Fit to the sample always improves with more parameters, even useless ones.
++++

What limits how complex a model can be?
??
The amount of independent data, since every parameter needs information to be estimated.
++++

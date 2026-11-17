---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Model complexity is how much freedom a model has to bend to the data, roughly the number of parameters it estimates."
aliases:
  - "Complexity"
  - "Model size"
status: seedling
---

# Model Complexity

One-size-fits-all clothing fits nobody well; a fully tailored suit fits one person perfectly and nobody else; small, medium and large fit most people decently. **Model complexity** is how closely the garment follows one body: how much freedom a model has to bend to the data. Roughly, it is the number of [[Parameter]]s the model estimates, written K ([[Number of Parameters]]). Each parameter is a knob the data must set, and more knobs give more *flexibility*, a wider range of shapes the model can take. Some models have *effective parameters*, a fractional count used when parameters are partly constrained, as in mixed models and GAMs ([[Effective Number of Parameters]]).

Count K for three models of bird richness on 30 plots. An intercept-only model has K = 2 (the mean and the residual standard deviation). Adding tree cover gives K = 3. A model with cover, cover², burn status, year and a handful of interactions might reach K = 13, leaving about 2 observations per parameter, which is far too few. More knobs always fit the sample more closely, so fit to the sample cannot judge complexity. But each knob is set from a share of the same information, so as K grows every estimate gets noisier. Fit polynomials of degree 1 to 8 to 30 points that truly follow a straight line: R² rises every time, while AIC, which charges for each parameter, barely moves, because the extra parameters buy nothing real. Complexity therefore trades bias against variance ([[Bias-Variance Trade-off]]): too little and the model misses real effects, too much and it memorises noise ([[Overfitting]]).

The data set the affordable level. A common rule of thumb asks for 10 or more observations per parameter. Complexity is also more than the number of predictors: interactions, polynomial terms and factor levels each add parameters (a factor with 5 levels adds 4), and some complexity is hidden, because trying many models or many smoothers on the same data also spends information ([[Data Dredging]]). Complex models are not more scientific, only more demanding of data, which is why [[Parsimony]] favours the simplest adequate model. Model selection is largely the management of complexity: [[AIC]], cross-validation, priors and random effects are all devices for finding the level the data can support. "How complex should I make my model?" is one of Powell and Gale's opening questions ([[Powell and Gale 2015 Ch1]]), and Tredennick and colleagues tie the right complexity to the modeling goal ([[Tredennick et al. 2021]]).

![[Model complexity curve.png|700]]
*What to look at:* error on the fitting data keeps falling, while error on new data turns back up.

```r
set.seed(9)
n <- 30; x <- runif(n); y <- 1 + 2 * x + rnorm(n, 0, 0.5)
fits <- lapply(1:8, function(d) lm(y ~ poly(x, d)))
sapply(fits, function(m) length(coef(m)) + 1)     # K: 3 to 10
round(sapply(fits, function(m) summary(m)$r.squared), 3)   # always rising
round(sapply(fits, AIC), 1)                        # barely moves: the extra parameters buy nothing
```
R² climbs with every added parameter. AIC, which charges for complexity, does not.

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

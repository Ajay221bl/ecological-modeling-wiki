---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Collinearity means two or more predictors carry overlapping information because they are strongly related to each other."
aliases:
  - "Multicollinearity"
  - "Correlated predictors"
status: seedling
---

# Collinearity

Two people carry a sofa together. You can see the sofa move, but you cannot tell how much each is lifting, because they always lift at the same time; to separate their efforts you would need to see each lift alone. **Collinearity**, or multicollinearity, means two or more predictors carry overlapping information because they are strongly related to each other ([[Correlation]]). Tree cover and shrub cover on grassland plots are a typical pair, with a correlation around −0.9: where trees are dense, shrubs are sparse. Birds decline along that gradient, but is it the trees they avoid or the shrubs they miss? The data hardly ever show one changing without the other.

The problem comes from what a coefficient in [[Multiple Regression]] means: the change in Y for one unit of this X, *holding the other X's fixed*. If two X's move together, the data hold few cases where one changes alone, so that comparison rests on little information. The result is large standard errors ([[Standard Error]]) and unstable estimates that can flip sign when a predictor or a few rows are added. The figure shows the two slope estimates scattering along a long diagonal: one can only go up if the other goes down. The code below simulates both cases; with predictors correlated at −0.95, the standard errors are about three times larger than with independent predictors ([[Why collinearity inflates standard errors]]).

Detect it with pairplots and correlations, where |r| above about 0.6 to 0.7 is a common flag ([[Pairplot]]), and with the [[Variance Inflation Factor]], which also catches combinations of several predictors. Respond by dropping one of a pair on biological grounds, as the course lab does, by combining them into an index or a [[Principal Component Analysis|principal component]], or by keeping both and accepting wide intervals. Three confusions. Collinearity does not bias the estimates; it makes them imprecise. It does not ruin prediction within the observed combinations of predictors, only for new combinations, such as trees without the usual loss of shrubs. And dropping a variable does not remove its effect: the remaining one now stands in for both, a problem close to [[Confounding Variable|confounding]]. This is step 5 of the protocol ([[Zuur et al. 2010]]).

![[Collinearity.png|700]]
*What to look at:* with correlated predictors the estimates of the two slopes scatter along a long diagonal. One can only go up if the other goes down.

```r
set.seed(5)
sim <- function(r) { tree <- rnorm(100); shrub <- r * tree + sqrt(1 - r^2) * rnorm(100)
  y <- 1 - 0.5 * tree + 0.5 * shrub + rnorm(100); summary(lm(y ~ tree + shrub))$coefficients[2:3, 1:2] }
sim(0)          # independent predictors: small SE
sim(-0.95)      # collinear predictors: SE roughly three times larger
```

## Connections
- **Builds on:** [[Correlation]], [[Multiple Regression]]
- **Leads to:** [[Variance Inflation Factor]], [[Pairplot]], [[Principal Component Analysis]], [[Confounding Variable]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]], molecular note [[Why collinearity inflates standard errors]]

## Flashcards

What is collinearity?
??
Strong relationships among predictors, so they carry overlapping information.
![[Collinearity.png]]
++++

What does collinearity do to coefficient estimates?
??
Inflates their standard errors and makes them unstable. It does not bias them.
++++

Why are predictions less affected than coefficients?
??
The fitted combination of predictors is well estimated even if their separate contributions are not.
++++

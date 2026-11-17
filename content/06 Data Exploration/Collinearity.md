---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Multicollinearity"
  - "Correlated predictors"
status: seedling
---

# Collinearity

**In one line:** collinearity means two or more predictors carry overlapping information because they are strongly related to each other.

> [!info] Before this, it helps to know
> [[Correlation]] (the pairwise version) · [[Multiple Regression]] (where it bites) · [[Standard Error]] (what it inflates)

## The everyday picture
Two people carrying a sofa together. You can see the sofa move, but you can't tell how much each person is lifting, because they always lift at the same time. To separate their efforts you would need to see each lift alone.

## A tiny example
Tree cover and shrub cover on grassland plots, correlation −0.9. Where trees are dense, shrubs are sparse. Birds decline along that gradient. Is it the trees they avoid or the shrubs they miss? The data hardly ever show one changing without the other.

## Start from zero
1. **A regression coefficient means:** the change in Y for one unit of this X, *holding the other X's fixed*.
2. **If two X's move together, the data hold few cases where one changes alone.**
3. **So that "holding fixed" comparison rests on little information.**
4. **Result: large standard errors** and unstable estimates that can flip sign when a predictor or a few rows are added.
5. **The model's predictions are still fine** within the range of the data. *It is the separate interpretation of each coefficient that suffers.*
6. **Detect:** pairplots and correlations (a common flag is |r| above 0.6 to 0.7), and VIF.
7. **Respond:** drop one of the pair, chosen on biological grounds. Combine them (an index, a principal component). Or keep both and accept wide intervals.

## See it
![[Collinearity.png|700]]
*What to look at:* with correlated predictors the estimates of the two slopes scatter along a long diagonal. One can only go up if the other goes down.

## Why it is this way
The amount of information about a slope depends on how much its predictor varies independently of the others. Correlated predictors leave little independent variation, so the same data pin the slope down far less tightly.

## In R
```r
set.seed(5)
sim <- function(r) { tree <- rnorm(100); shrub <- r * tree + sqrt(1 - r^2) * rnorm(100)
  y <- 1 - 0.5 * tree + 0.5 * shrub + rnorm(100); summary(lm(y ~ tree + shrub))$coefficients[2:3, 1:2] }
sim(0)          # independent predictors: small SE
sim(-0.95)      # collinear predictors: SE roughly three times larger
```

## In the course
Protocol step 5 ([[Zuur et al. 2010]]). The lab drops one of each highly correlated pair before modeling ([[Course Website]]).

## Common confusions
- **"Collinearity biases the estimates."** They remain unbiased but become imprecise.
- **"Collinearity ruins prediction."** Not within the observed combinations. It ruins prediction for new combinations (trees without the usual shrub loss).
- **"Dropping a variable removes its effect."** The remaining variable now stands in for both.

## Explain it back
- Why does collinearity inflate standard errors?
- What are three responses to it?

*Pass test:* you can explain collinearity with the sofa picture and say what it does and doesn't damage.

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

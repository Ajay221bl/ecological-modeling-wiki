---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Scatterplot matrix"
  - "pairs()"
  - "ggpairs"
status: seedling
---

# Pairplot

**In one line:** a pairplot is a grid of scatterplots showing every variable plotted against every other.

> [!info] Before this, it helps to know
> [[Scatterplot]] (each panel) · [[Correlation]] (often printed in the other half)

## The everyday picture
A round-robin tournament chart. Every team meets every other once, and the grid holds all the results. Here the "matches" are pairs of variables.

## Start from zero
1. **Variables are listed along both the rows and the columns.**
2. **The panel in row i, column j plots variable i against variable j.**
3. **The diagonal names the variable** (or shows its histogram).
4. **The lower half can show correlation coefficients** instead of mirror-image plots.
5. **Scan the predictor-predictor panels for tight clouds.** *That is the main use:* strong relationships among predictors mean collinearity.
6. **Scan the response row** for the shape of each Y-X relationship.
7. **Past about ten variables it becomes unreadable.**

## See it
![[Pairplot.png|700]]
*What to look at:* the tight band between tree cover and shrub cover, the pair of predictors that will fight in a model.

## In R
```r
set.seed(11)
tree <- runif(60, 0, 60); shrub <- 30 - 0.4 * tree + rnorm(60, 0, 3); elev <- rnorm(60, 900, 50)
d <- data.frame(rich = rpois(60, exp(2.3 - 0.02 * tree)), tree, shrub, elev)
panel.cor <- function(x, y, ...) { par(usr = c(0, 1, 0, 1)); text(0.5, 0.5, round(cor(x, y), 2), cex = 1.5) }
pairs(d, lower.panel = panel.cor, upper.panel = panel.smooth)
round(cor(d), 2)
```

## In the course
Zuur's tool for protocol steps 5 and 6 ([[Zuur et al. 2010]]).

## Common confusions
- **"Low pairwise correlations rule out collinearity."** Three or more predictors can be jointly dependent without any strong pair. VIF catches that.

## Explain it back
- Which panels do you inspect for collinearity?

*Pass test:* you can read a pairplot for collinear predictors and curved responses.

## Connections
- **Builds on:** [[Scatterplot]], [[Correlation]]
- **Leads to:** [[Collinearity]], [[Variance Inflation Factor]], [[Relationships Between Y and X]]
- **Part of:** [[MOC - Data Exploration]]

## Flashcards

What is a pairplot?
??
A matrix of scatterplots of every pair of variables.
![[Pairplot.png]]
++++

What is a pairplot mainly used for in data exploration?
??
Spotting strongly related predictors (collinearity) and the shape of each response-predictor relationship.
++++

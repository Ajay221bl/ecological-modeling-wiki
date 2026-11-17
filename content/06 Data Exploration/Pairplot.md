---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A pairplot is a grid of scatterplots showing every variable plotted against every other."
aliases:
  - "Scatterplot matrix"
  - "pairs()"
  - "ggpairs"
status: seedling
---

# Pairplot

A round-robin tournament chart holds the result of every team playing every other once. A **pairplot**, or scatterplot matrix, is that chart for variables: a grid of scatterplots showing every variable plotted against every other ([[Scatterplot]]). The variables run along both the rows and the columns; the panel in row i and column j plots variable i against variable j; the diagonal names each variable or shows its histogram; and one half of the grid can print [[Correlation]] coefficients instead of mirror-image plots, as in the code below.

Its main use is spotting [[Collinearity]], protocol step 5. Scan the panels where one predictor is plotted against another for tight clouds: in the example, tree cover and shrub cover form a tight band (correlation about −0.9), so they are a pair of predictors that will fight over the same information in a model. Its second use is step 6: the row for the response shows the shape of each Y-X relationship ([[Relationships Between Y and X]]). Zuur and colleagues use it for both ([[Zuur et al. 2010]]).

Two limits. Past about ten variables the grid becomes unreadable. And low pairwise correlations do not rule out collinearity, because three or more predictors can be jointly dependent without any strong pair; the [[Variance Inflation Factor]] catches that.

![[Pairplot.png|700]]
*What to look at:* the tight band between tree cover and shrub cover, the pair of predictors that will fight in a model.

```r
set.seed(11)
tree <- runif(60, 0, 60); shrub <- 30 - 0.4 * tree + rnorm(60, 0, 3); elev <- rnorm(60, 900, 50)
d <- data.frame(rich = rpois(60, exp(2.3 - 0.02 * tree)), tree, shrub, elev)
panel.cor <- function(x, y, ...) { par(usr = c(0, 1, 0, 1)); text(0.5, 0.5, round(cor(x, y), 2), cex = 1.5) }
pairs(d, lower.panel = panel.cor, upper.panel = panel.smooth)
round(cor(d), 2)
```

## Connections
- **Builds on:** [[Scatterplot]], [[Correlation]]
- **Leads to:** [[Collinearity]], [[Variance Inflation Factor]], [[Relationships Between Y and X]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

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

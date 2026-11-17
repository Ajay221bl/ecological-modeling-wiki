---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "The correlation coefficient r, a number from −1 to +1, measures how tightly two variables follow a straight line together, and whether the line goes up or down."
aliases:
  - "Pearson correlation"
  - "cor()"
  - "Correlation coefficient"
status: seedling
---

# Correlation

Ice-cream sales and sunny days move together: on sunny days sales are high, on grey days low. Umbrella sales and sunny days move in opposite directions. Shoe size and favourite colour show no pattern at all. The **correlation coefficient**, written r (or ρ, "rho", for the true population value), turns "move together", "move opposite" and "no pattern" into one number between −1 and +1. It measures how tightly two variables follow a straight line together, and whether that line rises or falls: +1 is a perfect rising line, −1 a perfect falling line, and 0 means no straight-line relationship. As rough guides, values around ±0.3 are weak and around ±0.7 strong.

It is built in two steps. Three sites have rainfall x = 1, 2, 3 and grass y = 2, 4, 7, with means 2 and 4.33. Each *deviation* is a value minus its mean. Multiply each site's two deviations: (−1)(−2.33) = 2.33, (0)(−0.33) = 0, and (1)(2.67) = 2.67. Every product is positive or zero, because when rain is above average grass is too. Add them (5) and divide by n − 1 to get the [[Covariance]], 2.5. But covariance depends on the units: measure rain in millimetres instead of centimetres and it becomes 10 times bigger with no change in the relationship. So divide by both [[Standard Deviation]]s, here 1 and 2.52, which cancels the units: r = 2.5 / (1 × 2.52) ≈ 0.99, an almost perfect rising line. Note that r measures how tightly the points hug the line, not how steep the line is.

Correlation is the quick screen for relationships, and above all for predictors related to each other. Strongly correlated predictors carry nearly the same information, so a model cannot tell which deserves the credit and their coefficients become unstable ([[Collinearity]], [[Why collinearity inflates standard errors|Why collinearity makes coefficients unstable]]); Zuur's protocol uses correlations and a [[Pairplot]] to catch this before modeling. Three cautions. Correlation is not causation: rain and grass may both follow elevation ([[Correlation vs Causation]]). r = 0 does not mean "unrelated": a perfect U-shape has r = 0, because the negative products on one side cancel the positive ones on the other, so always plot first. And r is not R²: r describes two variables, R² the share of variance a model explains, although in a one-predictor regression R² = r² ([[R-squared]]). Tredennick and colleagues screen 96 weather covariates by correlation as an exploratory step and warn that anything found that way is a hypothesis, not a result ([[Tredennick et al. 2021]]). A variable correlated with itself at nearby places or times is [[Spatial Autocorrelation]].

![[Correlation panels.png|700]]
*What to look at:* as r gets further from 0, the cloud squeezes toward a line. The sign only says which way the line tilts.

```r
x <- c(1, 2, 3); y <- c(2, 4, 7)
cov(x, y)                       # 2.5
cor(x, y)                       # 0.993
cor(mtcars[, c("mpg", "wt", "hp")])   # correlation matrix of several variables
cor(1:10, (1:10 - 5.5)^2)       # 0: a perfect U-shape, but no straight-line correlation
```

## Connections
- **Builds on:** [[Covariance]], [[Standard Deviation]]
- **Leads to:** [[Collinearity]], [[Correlation vs Causation]], [[R-squared]], [[Autocorrelation]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Pairplot]]

## Flashcards

What does the correlation coefficient r measure, and what is its range?
??
How tightly two variables follow a straight line and in which direction; from −1 to +1.
![[Correlation panels.png]]
++++

Why can a strong U-shaped relationship have r ≈ 0?
??
r only measures straight-line association; the rising and falling halves cancel out.
++++

Why does correlation between predictors matter for modeling?
??
Strongly correlated predictors (collinearity) make coefficient estimates unstable with inflated standard errors.
++++

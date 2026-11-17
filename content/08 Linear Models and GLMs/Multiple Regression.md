---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Multiple regression is linear regression with two or more predictors, each given its own coefficient."
aliases:
  - "Multiple linear regression"
  - "Multivariable regression"
status: seedling
---

# Multiple Regression

Cooks changed several ingredients at once, and you want to know what each one does to the cake. Compare cakes with the same sugar but different flour to isolate flour's effect, then do the reverse for sugar. **Multiple regression** is linear regression with two or more predictors, each with its own coefficient: yᵢ = β₀ + β₁x₁ᵢ + β₂x₂ᵢ + … + εᵢ ([[Linear Regression]], [[Regression Coefficient]]). With two predictors the fitted model is a tilted plane through a cloud of points, as in the figure, and its tilt along each axis is that predictor's partial slope.

Take richness = 20 − 0.10 × tree cover − 0.005 × elevation. Of two plots at the same elevation differing by 10% tree cover, the more wooded one is expected to hold 1 fewer species; of two plots with the same cover 100 m apart in elevation, the higher one 0.5 fewer. Each β is a partial effect: the change in y per unit of that x among units alike in the other x's ([[Holding Other Variables Constant]]). The code below shows why that matters. Tree cover rises with elevation, and richness falls with elevation, but tree cover itself has no effect. Regress richness on tree cover alone and it looks harmful, because it is standing in for elevation; add elevation and the tree-cover coefficient drops to about zero.

Predictors are added for two reasons: to adjust for a [[Confounding Variable]], so one variable does not take credit for another's effect, and to explain more variation, which sharpens every estimate. Coefficients can change, even flip sign, when a correlated predictor enters or leaves. There are costs: each predictor uses a degree of freedom, correlated predictors inflate standard errors ([[Collinearity]]), and a rough guide is 10 to 20 observations per coefficient. So adding predictors does not always help; adjusting for the wrong variables can even introduce bias. Each coefficient is not that variable's total effect but the part not shared with the other predictors ([[Guthery and Bingham 2007]], [[Course Website]]). Effects that depend on each other need an [[Interaction Term]], and the numbers the model works with are its [[Model Matrix]].

![[Multiple regression plane.png|700]]
*What to look at:* a tilted plane. Its tilt along each axis is that predictor's partial slope.

```r
set.seed(3); n <- 200; elev <- rnorm(n, 900, 60); tree <- 30 + 0.3 * (elev - 900) + rnorm(n, 0, 10)    # trees increase with elevation
rich <- 20 - 0.02 * elev + 0 * tree + rnorm(n)                                                         # tree cover has NO effect
coef(lm(rich ~ tree))["tree"]                    # looks negative: tree is standing in for elevation
coef(lm(rich ~ tree + elev))[c("tree", "elev")]  # tree near 0 once elevation is held fixed
```

## Connections
- **Builds on:** [[Linear Regression]], [[Regression Coefficient]]
- **Leads to:** [[Holding Other Variables Constant]], [[Collinearity]], [[Interaction Term]], [[Model Matrix]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Simple vs Multiple Regression]]

## Flashcards

What is multiple regression?
??
A linear model with two or more predictors.
![[Multiple regression plane.png]]
++++

How is a coefficient in multiple regression interpreted?
??
The expected change in the response per unit of that predictor, holding the other predictors constant.
++++

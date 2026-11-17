---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Multiple linear regression"
  - "Multivariable regression"
status: seedling
---

# Multiple Regression

**In one line:** multiple regression is linear regression with two or more predictors, each given its own coefficient.

> [!info] Before this, it helps to know
> [[Linear Regression]] (the one-predictor case) · [[Regression Coefficient]] (one per predictor) · [[Confounding Variable]] (a reason to add predictors)

## The everyday picture
Working out what each ingredient does to a cake when cooks changed several at once. By comparing cakes that share the same sugar but differ in flour, you can isolate flour's effect, then do the reverse for sugar.

## A tiny example
richness = 20 − 0.10 × tree − 0.005 × elevation.
- Compare two plots at the same elevation that differ by 10% tree cover: 1 fewer species in the more wooded one.
- Compare two plots with the same tree cover 100 m apart in elevation: 0.5 fewer at the higher one.

## Start from zero
1. **Model:** yᵢ = β₀ + β₁x₁ᵢ + β₂x₂ᵢ + … + εᵢ.
2. **Geometrically:** a flat plane (two predictors) through a cloud of points.
3. **Each β is a partial effect:** the change in y per unit of that x among units alike in the other x's.
4. **Why add predictors, 1:** to adjust for confounders, so one variable doesn't take credit for another's effect.
5. **Why add predictors, 2:** to explain more variation, which sharpens every estimate.
6. **Coefficients can change, even flip sign,** when a correlated predictor enters or leaves.
7. **Costs:** each added predictor uses a degree of freedom, and correlated predictors inflate standard errors.
8. **A rough guide:** 10 to 20 observations per coefficient.

## See it
![[Multiple regression plane.png|700]]
*What to look at:* a tilted plane. Its tilt along each axis is that predictor's partial slope.

## In R
```r
set.seed(3); n <- 200; elev <- rnorm(n, 900, 60); tree <- 30 + 0.3 * (elev - 900) + rnorm(n, 0, 10)    # trees increase with elevation
rich <- 20 - 0.02 * elev + 0 * tree + rnorm(n)                                                         # tree cover has NO effect
coef(lm(rich ~ tree))["tree"]                    # looks negative: tree is standing in for elevation
coef(lm(rich ~ tree + elev))[c("tree", "elev")]  # tree near 0 once elevation is held fixed
```

## In the course
Linear regression lab part 2 ([[Course Website]]). Interpretation pitfalls: [[Guthery and Bingham 2007]].

## Common confusions
- **"Adding predictors always helps."** Each one costs precision, and adjusting for the wrong variables can introduce bias.
- **"Each coefficient is that variable's total effect."** It is the effect not shared with the other predictors in the model.

## Explain it back
- Why can a coefficient change sign when another predictor is added?

*Pass test:* you can interpret a coefficient as a comparison holding other predictors fixed.

## Connections
- **Builds on:** [[Linear Regression]], [[Regression Coefficient]]
- **Leads to:** [[Holding Other Variables Constant]], [[Collinearity]], [[Interaction Term]], [[Model Matrix]]
- **Part of:** [[MOC - Linear Models and GLMs]], molecular note [[Simple vs Multiple Regression]]

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

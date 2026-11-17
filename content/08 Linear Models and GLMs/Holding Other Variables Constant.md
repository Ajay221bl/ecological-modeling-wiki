---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Holding other variables constant means comparing units that differ in one predictor but are alike in all the other predictors in the model."
aliases:
  - "Ceteris paribus"
  - "Controlling for"
  - "Adjusting for"
  - "Partial effect"
  - "All else equal"
status: seedling
---

# Holding Other Variables Constant

To see whether a degree raises salary, you might compare people with different degrees but only among people of the same age. Within each age group, age cannot explain any difference, because you have taken it out of the comparison. **Holding other variables constant** means comparing units that differ in one predictor but are alike in all the other predictors in the model. It is what a [[Multiple Regression]] coefficient answers: "among units with identical values of the other predictors, how does y differ per unit of this one?" The model does this by arithmetic, not by finding exact matches, relying on its assumed linear form to adjust.

It is powerful because it separates the contributions of predictors that vary together in the field. In the code below, older animals are heavier and survive better, but mass itself has no effect. Regress survival on mass alone and the slope is positive, because mass is standing in for age, a [[Confounding Variable]]. Add age to the model and the mass slope falls to about zero; restrict the data to a narrow age band and the slope also shrinks toward zero, showing the model's adjustment does what a matched comparison would.

It has three limits. It only holds constant what is in the model, so unmeasured confounders remain. The comparison may be imaginary: Guthery and Bingham warn that if tree cover and shrub cover always change together in nature, "more trees with shrubs held constant" describes plots that do not exist ([[Guthery and Bingham 2007]], [[Collinearity]]). And it breaks down with interactions or polynomials, since you cannot change x while holding x² constant ([[Interaction Term]]). So controlling for a variable removes only its linear influence as specified, and only if it is measured well ([[Interpreting Regression Coefficients]]).

```r
set.seed(4); n <- 300; age <- runif(n, 1, 10); mass <- 2 * age + rnorm(n, 0, 2)
surv <- 0.5 + 0.03 * age + 0 * mass + rnorm(n, 0, 0.1)
coef(lm(surv ~ mass))["mass"]                       # positive when age is ignored
coef(lm(surv ~ mass + age))["mass"]                 # near zero among same-aged animals
coef(lm(surv ~ mass, subset = age > 5 & age < 6))["mass"]    # within a narrow age band the slope also shrinks toward zero
```

## Connections
- **Builds on:** [[Multiple Regression]], [[Confounding Variable]]
- **Leads to:** [[Interpreting Regression Coefficients]], [[Collinearity]], [[Interaction Term]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does "holding other variables constant" mean for a coefficient?
??
It compares units that differ in that predictor but share the same values of the other predictors in the model.
++++

Why can this comparison be unrealistic?
??
If predictors always vary together in nature, combinations where one changes alone may not exist.
++++

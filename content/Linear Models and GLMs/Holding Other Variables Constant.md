---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Ceteris paribus"
  - "Controlling for"
  - "Adjusting for"
  - "Partial effect"
  - "All else equal"
status: seedling
---

# Holding Other Variables Constant

**In one line:** holding other variables constant means comparing units that differ in one predictor but are alike in all the other predictors in the model.

> [!info] Before this, it helps to know
> [[Multiple Regression]] (where the phrase lives) · [[Confounding Variable]] (why it is needed)

## The everyday picture
Comparing salaries of people with different degrees, but only among people of the same age. Within each age group, age can't be the explanation for any difference. You've taken it out of the comparison.

## Start from zero
1. **A multiple regression coefficient answers:** "among units with identical values of the other predictors, how does y differ per unit of this one?"
2. **The model does this by arithmetic,** not by finding exact matches. It relies on the assumed linear form to adjust.
3. **Why it is powerful:** it separates the contributions of predictors that vary together in the field.
4. **Limit 1: it only holds constant what is in the model.** Unmeasured confounders remain.
5. **Limit 2: the comparison may be imaginary.** Guthery and Bingham's warning: if tree cover and shrub cover always change together in nature, "more trees with shrubs held constant" describes plots that don't exist.
6. **Limit 3: with interactions or polynomials it breaks down.** You can't change x while holding x² constant.

## In R
```r
set.seed(4); n <- 300; age <- runif(n, 1, 10); mass <- 2 * age + rnorm(n, 0, 2)
surv <- 0.5 + 0.03 * age + 0 * mass + rnorm(n, 0, 0.1)
coef(lm(surv ~ mass))["mass"]                       # positive when age is ignored
coef(lm(surv ~ mass + age))["mass"]                 # near zero among same-aged animals
coef(lm(surv ~ mass, subset = age > 5 & age < 6))["mass"]    # within a narrow age band the slope also shrinks toward zero
```

## In the course
A central theme of [[Guthery and Bingham 2007]], the reading for interpreting regression.

## Common confusions
- **"Controlling for a variable removes all its influence."** Only its linear influence as specified, and only if it is measured well.

## Explain it back
- When is "holding the others constant" an imaginary comparison?

*Pass test:* you can explain a partial coefficient and name two limits of adjustment.

## Connections
- **Builds on:** [[Multiple Regression]], [[Confounding Variable]]
- **Leads to:** [[Interpreting Regression Coefficients]], [[Collinearity]], [[Interaction Term]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What does "holding other variables constant" mean for a coefficient?
??
It compares units that differ in that predictor but share the same values of the other predictors in the model.
++++

Why can this comparison be unrealistic?
??
If predictors always vary together in nature, combinations where one changes alone may not exist.
++++

---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Dummy variable"
  - "Indicator variable"
  - "Indicator variables"
  - "One-hot coding"
status: seedling
---

# Dummy Coding

**In one line:** dummy coding turns a categorical predictor into columns of 0s and 1s so that it can be used in a regression equation.

> [!info] Before this, it helps to know
> [[Categorical Variable]] (what is coded) · [[Binary Variable]] (the columns) · [[Factors in R]] (how R stores it)

## The everyday picture
Light switches. For three habitats you install two switches, "is it forest?" and "is it wetland?". Grassland is both switches off. Each switch adds its own amount to the prediction when it is on.

## A tiny example
Habitat with levels grass, forest, wetland.
- Columns: forest (1 if forest), wetland (1 if wetland).
- Model: y = β₀ + β₁·forest + β₂·wetland.
- Grass: β₀. Forest: β₀ + β₁. Wetland: β₀ + β₂.

## Start from zero
1. **A regression multiplies numbers.** "Forest" isn't a number.
2. **Make one 0/1 column per level, except one.**
3. **The level left out is the reference.** It is represented by all zeros and absorbed into the intercept.
4. **K levels need K − 1 dummies.** *Why not K:* the K columns would add up to the intercept column, leaving the model unable to separate them.
5. **Each dummy's coefficient is the difference between that level and the reference.**
6. **R does this automatically for factors.** `model.matrix()` shows the result.

## See it
![[Dummy coding.png|700]]
*What to look at:* one column per non-reference level, and the fitted group means built from intercept plus one coefficient.

## In R
```r
d <- data.frame(hab = factor(c("grass", "grass", "forest", "forest", "wetland", "wetland"), levels = c("grass", "forest", "wetland")), y = c(10, 12, 6, 8, 15, 17))
model.matrix(~ hab, d)
coef(lm(y ~ hab, d))                  # 11, -4, +5
tapply(d$y, d$hab, mean)              # 11, 7, 16
```

## In the course
[[Zuur et al. 2009 Appendix A]] and the linear regression lab ([[Course Website]]).

## Common confusions
- **"Code habitats as 1, 2, 3."** That would claim wetland is three times grass on a line.
- **"The reference level has no effect."** It is the baseline everything is compared with.

## Explain it back
- Why K − 1 columns for K levels?

*Pass test:* you can write the dummy columns for a three-level factor.

## Connections
- **Builds on:** [[Categorical Variable]], [[Factors in R]]
- **Leads to:** [[Reference Level]], [[Sum-to-zero Contrasts]], [[Model Matrix]], [[ANOVA]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What is dummy coding?
??
Representing a categorical variable with 0/1 indicator columns, one fewer than the number of levels.
![[Dummy coding.png]]
++++

What does a dummy variable's coefficient mean?
??
The difference in expected response between that level and the reference level.
++++

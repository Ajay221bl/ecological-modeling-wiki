---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Dummy coding turns a categorical predictor into columns of 0s and 1s so that it can be used in a regression equation."
aliases:
  - "Dummy variable"
  - "Indicator variable"
  - "Indicator variables"
  - "One-hot coding"
status: seedling
---

# Dummy Coding

For three habitats, install two light switches: "is it forest?" and "is it wetland?". Grassland is both switches off, and each switch adds its own amount to the prediction when it is on. **Dummy coding** turns a [[Categorical Variable]] into columns of 0s and 1s so it can enter a regression equation, since a regression multiplies numbers and "forest" is not a number. Make one 0/1 column per level, except one ([[Binary Variable]]). The level left out is the [[Reference Level]]: it is represented by all zeros and absorbed into the intercept.

With levels grass, forest and wetland, the model is y = β₀ + β₁·forest + β₂·wetland. Grass is predicted at β₀, forest at β₀ + β₁, wetland at β₀ + β₂, so each dummy's [[Regression Coefficient|coefficient]] is the difference between that level and the reference. In the code below the group means are 11, 7 and 16, and `lm()` returns 11, −4 and +5: the grass mean, then forest minus grass and wetland minus grass. `model.matrix()` shows the columns R built ([[Model Matrix]]), as does the figure.

K levels need K − 1 dummies, not K, because the K columns would add up to the intercept column, leaving the model unable to separate them. R does this automatically for factors ([[Factors in R]]); other coding schemes ask different questions of the same fit ([[Sum-to-zero Contrasts]]), and a regression on dummies is exactly an [[ANOVA]] ([[Zuur et al. 2009 Appendix A]]). Two confusions. Coding habitats as 1, 2 and 3 would wrongly claim they lie on a line, wetland three times grass. And the reference level is not "no effect"; it is the baseline everything is compared with.

![[Dummy coding.png|700]]
*What to look at:* one column per non-reference level, and the fitted group means built from intercept plus one coefficient.

```r
d <- data.frame(hab = factor(c("grass", "grass", "forest", "forest", "wetland", "wetland"), levels = c("grass", "forest", "wetland")), y = c(10, 12, 6, 8, 15, 17))
model.matrix(~ hab, d)
coef(lm(y ~ hab, d))                  # 11, -4, +5
tapply(d$y, d$hab, mean)              # 11, 7, 16
```

## Connections
- **Builds on:** [[Categorical Variable]], [[Factors in R]], [[Regression Coefficient]]
- **Leads to:** [[Reference Level]], [[Sum-to-zero Contrasts]], [[Model Matrix]], [[ANOVA]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

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

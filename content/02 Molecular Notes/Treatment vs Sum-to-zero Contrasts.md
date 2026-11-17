---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "Contrast coding"
  - "contr.treatment vs contr.sum"
  - "Dummy vs effect coding"
status: seedling
---

# Treatment vs Sum-to-zero Contrasts

> [!summary] In plain words
> treatment contrasts (R's default) make the intercept the mean of a reference level and each coefficient a difference from it, while sum-to-zero contrasts make the intercept the average of the group means and each coefficient a group's deviation from that average.

## The question
What do the intercept and factor coefficients mean, and why do they change with contrasts?

## Built from
- [[Dummy Coding]] and [[Reference Level]].
- [[Sum-to-zero Contrasts]].
- [[Model Matrix]].

## The reasoning, step by step
1. **Treatment (`contr.treatment`):** intercept = mean of the reference level; coefficients = other levels minus reference.
2. **Sum-to-zero (`contr.sum`):** intercept = unweighted mean of group means; coefficients = deviations of the first k − 1 levels; the last is minus their sum.
3. **Fitted values and the model's overall fit are identical;** only the parameterisation changes.
4. **Main effects in interaction models** are easier to read with sum-to-zero coding.
5. **Change the reference level** with `relevel()` if a control group should be the baseline.
`PlantGrowth` group means: ctrl 5.032, trt1 4.661, trt2 5.526. Treatment coding: intercept 5.032, trt1 −0.371, trt2 0.494. Sum coding: intercept 5.073 (mean of means), group1 −0.041, group2 −0.412.

## So in practice
Use treatment contrasts with a meaningful control; switch to sum-to-zero when you want effects relative to the average.

## In R
```r
d <- PlantGrowth
rbind(group_means = tapply(d$weight, d$group, mean))
round(coef(lm(weight ~ group, d)), 3)
round(coef(lm(weight ~ group, d, contrasts = list(group = "contr.sum"))), 3)
```

## What would go wrong otherwise
Reading "trt1 = −0.371" as the mean of trt1.

## Explain it back
- What is the intercept under sum-to-zero contrasts?

*Pass test:* you can rebuild group means from either coding.

## Connections
- **Related:** [[Additive vs Interaction Model]], [[Centering, Scaling and Standardizing]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

Intercept under treatment contrasts?
??
Mean of the reference level.
++++

Intercept under sum-to-zero contrasts?
??
Average of the group means.
++++

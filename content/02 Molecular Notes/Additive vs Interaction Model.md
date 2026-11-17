---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "Main effects vs interaction"
  - "Parallel slopes vs separate slopes"
  - "x1 + x2 vs x1 * x2"
status: seedling
---

# Additive vs Interaction Model

> [!summary] In plain words
> an additive model assumes each predictor's effect is the same whatever the other predictors are (parallel lines), while an interaction model lets one predictor's effect depend on another (lines with different slopes).

## The question
Do I need an interaction term?

## Built from
- [[Interaction Term]] and [[Multiple Regression]].
- [[ANCOVA]] and [[Two-way ANOVA]].
- [[Model Formula Syntax]].

## The reasoning, step by step
1. **Additive (`y ~ x + group`):** one slope, groups differ only in intercept.
2. **Interaction (`y ~ x * group`):** each group gets its own slope; `x:group` coefficients are the slope differences.
3. **Main effects change meaning** with an interaction: the `x` coefficient becomes the slope in the reference group only.
4. **Interactions need data spread across combinations;** Zuur et al. (2010) check this with coplots.
5. **Interactions on the link scale differ from those on the response scale** in GLMs.
6. **Include an interaction because biology suggests it,** then compare models.
In `mtcars`, the `wt` slope is −3.79 for automatics and −3.79 − 5.30 = −9.08 for manuals; the interaction model is clearly better (F test p = 0.001).

## So in practice
Plot the data by group first; if the lines look clearly non-parallel, test the interaction, and centre continuous predictors so main effects stay interpretable.

## In R
```r
m1 <- lm(mpg ~ wt + factor(am), data = mtcars); m2 <- lm(mpg ~ wt * factor(am), data = mtcars)
round(coef(m2), 2); anova(m1, m2)
```

## What would go wrong otherwise
Reading the `wt` coefficient in an interaction model as "the effect of weight" for all cars.

## Explain it back
- What does the `x` coefficient mean once `x:group` is in the model?

*Pass test:* you can compute group-specific slopes from output.

## Connections
- **Related:** [[Simple vs Multiple Regression]], [[Centering, Scaling and Standardizing]], [[Treatment vs Sum-to-zero Contrasts]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Linear Models and GLMs]]

## Flashcards

Additive vs interaction model?
??
Additive: same effect of x in every group (parallel lines). Interaction: x's effect differs by group.
++++

In y ~ x * g, what is the x coefficient?
??
The slope of x in the reference level of g.
++++

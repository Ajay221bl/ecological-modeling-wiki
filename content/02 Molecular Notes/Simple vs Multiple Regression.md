---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "One predictor vs several"
  - "Why coefficients change when I add predictors"
status: seedling
---

# Simple vs Multiple Regression

> [!summary] In plain words
> simple regression estimates the total association between y and one x, while multiple regression estimates each x's effect holding the others constant, so a coefficient can shrink, grow or even change sign when other correlated predictors are added.

## The question
Why did my slope change when I added another predictor?

## Built from
- [[Linear Regression]] and [[Multiple Regression]].
- [[Holding Other Variables Constant]].
- [[Collinearity]] and [[Omitted Variable Bias]].

## The reasoning, step by step
1. **Simple:** the slope mixes x's own effect with the effects of anything correlated with x.
2. **Multiple:** each slope is a partial effect, comparing units with the same values of the other predictors.
3. **If predictors are uncorrelated,** simple and multiple slopes match.
4. **If correlated,** they differ, and the multiple-regression slope removes omitted variable bias from the included variables.
5. **Strong correlation** makes partial effects imprecise ([[Why collinearity inflates standard errors]]).
In `mtcars`, the `hp` slope is −0.068 alone and −0.032 with `wt`, because heavier cars also have more horsepower (r = 0.66).

## So in practice
Report which other predictors were in the model whenever you report a coefficient.

## In R
```r
round(c(simple = coef(lm(mpg ~ hp, mtcars))[2], multiple = coef(lm(mpg ~ hp + wt, mtcars))[2], cor_hp_wt = cor(mtcars$hp, mtcars$wt)), 3)
```

## What would go wrong otherwise
Comparing a coefficient from a simple regression in one paper with one from a multiple regression in another as if they measured the same thing.

## Explain it back
- When are simple and multiple slopes equal?

*Pass test:* you can explain a sign change after adding a covariate.

## Connections
- **Related:** [[Additive vs Interaction Model]], [[Correlation vs Causation]], [[Why collinearity inflates standard errors]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Linear Models and GLMs]]

## Flashcards

Simple vs multiple regression slope?
??
Simple: total association. Multiple: partial effect holding other predictors constant.
++++

When do they agree?
??
When predictors are uncorrelated.
++++

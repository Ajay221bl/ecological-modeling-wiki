---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "β₀"
  - "Constant"
  - "(Intercept)"
status: seedling
---

# Intercept

**In one line:** the intercept is the model's predicted response when every predictor equals zero.

> [!info] Before this, it helps to know
> [[Linear Function]] (where it appears) · [[Linear Regression]] (the model)

## The everyday picture
The starting fee on the taxi meter before the car has moved. It is the baseline that everything else is added to.

## A tiny example
richness = 12.4 − 0.17 × tree cover. Intercept 12.4: a plot with no trees is expected to hold 12.4 species.

## Start from zero
1. **Set all predictors to 0 in the equation.** What remains is β₀.
2. **On a graph:** where the line crosses the vertical axis at x = 0.
3. **With a categorical predictor:** the mean of the reference group.
4. **It may be meaningless.** If x = 0 is impossible (zero body mass, year 0), the intercept is an extrapolation and only anchors the line.
5. **Centering fixes that.** Subtract the mean of x and the intercept becomes the expected response at an average x.
6. **In R formulas it is included automatically.** `y ~ x` means `y ~ 1 + x`. Remove it with `- 1` or `+ 0` (rarely wise).

## In R
```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
coef(lm(rich ~ tree, d))[1]                          # 12.4: richness at zero cover
coef(lm(rich ~ I(tree - mean(tree)), d))[1]          # 9: richness at average cover (20%)
coef(lm(rich ~ 1, d))                                # intercept-only model: the overall mean
```

## Common confusions
- **"A significant intercept is a finding."** Its test asks whether the response is zero when x is zero, which is seldom a question anyone has.

## Explain it back
- What does the intercept mean after centering x?

*Pass test:* you can interpret an intercept with raw, centered and categorical predictors.

## Connections
- **Builds on:** [[Linear Function]]
- **Leads to:** [[Slope]], [[Centering]], [[Reference Level]], [[Random Intercept]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What is the intercept of a regression?
??
The expected response when all predictors are zero (or at their reference levels).
++++

How does centering a predictor change the intercept?
??
It becomes the expected response at the mean of that predictor.
++++

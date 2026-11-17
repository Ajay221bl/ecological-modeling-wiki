---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The intercept is the model's predicted response when every predictor equals zero."
aliases:
  - "β₀"
  - "Constant"
  - "(Intercept)"
status: seedling
---

# Intercept

On a taxi meter, the starting fee shows before the car has moved; everything else is added to it. The **intercept** of a model is that baseline: the predicted response when every predictor equals zero, written β₀ ([[Linear Function]], [[Linear Regression]]). On a graph it is where the line crosses the vertical axis at x = 0. With the bird example, richness = 12.4 − 0.17 × tree cover, the intercept 12.4 says a plot with no trees is expected to hold 12.4 species. With a categorical predictor it is the mean of the reference group ([[Reference Level]]).

The intercept may be meaningless. If x = 0 is impossible, such as zero body mass or the year 0, the intercept is an extrapolation and only anchors the line. [[Centering]] fixes that: subtract the mean of x, and the intercept becomes the expected response at an average x. In the code below, the centred model's intercept is 9, the richness at the average cover of 20%. A model with only an intercept, `lm(y ~ 1)`, simply estimates the overall mean.

In R formulas the intercept is included automatically: `y ~ x` means `y ~ 1 + x`, and it is removed with `- 1` or `+ 0`, which is rarely wise. The common confusion is to treat a significant intercept as a finding. Its test asks whether the response is zero when x is zero, which is seldom a question anyone has. Letting each group have its own intercept leads to a [[Random Intercept]].

```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
coef(lm(rich ~ tree, d))[1]                          # 12.4: richness at zero cover
coef(lm(rich ~ I(tree - mean(tree)), d))[1]          # 9: richness at average cover (20%)
coef(lm(rich ~ 1, d))                                # intercept-only model: the overall mean
```

## Connections
- **Builds on:** [[Linear Function]]
- **Leads to:** [[Slope]], [[Centering]], [[Reference Level]], [[Random Intercept]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is the intercept of a regression?
??
The expected response when all predictors are zero (or at their reference levels).
++++

How does centering a predictor change the intercept?
??
It becomes the expected response at the mean of that predictor.
++++

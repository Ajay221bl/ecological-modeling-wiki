---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The linearity assumption says the mean of the response changes along a straight line with each predictor, as the model's formula specifies."
aliases:
  - "Linearity assumption"
  - "Additivity"
status: seedling
---

# Linearity

Lay a straight plank across a hump-backed bridge. It touches in the middle and hangs in the air at both ends, and the gaps between plank and road are not random: they are positive in the middle and negative at the ends. The **linearity assumption** says the mean of the response changes along a [[Equation of a Line|straight line]] with each [[Predictor Variable|predictor]], as the model's formula specifies: E(y) = β₀ + β₁x ([[Linear Function]]). If the truth is curved, the line is wrong in a systematic way, too low in some ranges of x and too high in others. Additivity is the same assumption across predictors: their effects add up, unless the model includes an interaction.

The symptom is a curve or U shape in the plot of [[Residual|residuals]] against [[Fitted Value|fitted values]], or against a predictor ([[Residuals vs Fitted Plot]]). In the code below the truth is an arch, y = 2 + 3x − 0.3x². A straight line leaves residuals that are negative, positive, then negative across the range of x, the signature of a missed curve; adding a [[Quadratic Term|squared term]] removes the pattern. You can often see the problem before fitting by plotting y against each x ([[Relationships Between Y and X]]).

The consequence is biased predictions and a slope that depends on which x range you happened to sample, and more data do not fix it. Remedies are to transform x or y ([[Transformation]]), add a [[Polynomial]] term, use a GLM whose link bends the line, use a smoother ([[Generalized Additive Model]]), or fit a [[Nonlinear Function|nonlinear function]] chosen from biology ([[Zuur et al. 2009 Ch2]]). A high R² does not prove linearity: a line can explain most of the variation in a gently curved relationship and still be wrong.

```r
set.seed(1); x <- runif(100, 0, 10); y <- 2 + 3 * x - 0.3 * x^2 + rnorm(100)
m1 <- lm(y ~ x); m2 <- lm(y ~ x + I(x^2))
op <- par(mfrow = c(1, 2)); plot(fitted(m1), resid(m1), main = "line: arch in residuals"); plot(fitted(m2), resid(m2), main = "quadratic: no pattern"); par(op)
tapply(resid(m1), cut(x, 3), mean)        # negative, positive, negative: the signature of a missed curve
```

## Connections
- **Builds on:** [[Linear Function]], [[Residual]], [[Equation of a Line]], [[Predictor Variable]], [[Fitted Value]], [[Quadratic Term]], [[Nonlinear Function]]
- **Leads to:** [[Residuals vs Fitted Plot]], [[Polynomial]], [[Generalized Additive Model]], [[Transformation]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does the linearity assumption state?
??
The expected response is a straight-line (additive) function of the predictors as specified in the model.
++++

What residual pattern reveals non-linearity?
??
A curve or arch in the plot of residuals against fitted values or against a predictor.
++++

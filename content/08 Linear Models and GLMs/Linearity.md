---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Linearity assumption"
  - "Additivity"
status: seedling
---

# Linearity

**In one line:** the linearity assumption says the mean of the response changes along a straight line with each predictor, as the model's formula specifies.

> [!info] Before this, it helps to know
> [[Linear Function]] (the assumed shape) · [[Relationships Between Y and X]] (the check before fitting) · [[Residual]] (the check after)

## The everyday picture
Laying a straight plank across a hump-backed bridge. The plank touches in the middle and hangs in the air at both ends. The gaps between plank and road aren't random. They are positive in the middle and negative at the ends.

## Start from zero
1. **The model says E(y) = β₀ + β₁x.**
2. **If the truth is curved, the line is wrong in a systematic way:** too low in some ranges of x, too high in others.
3. **Symptom:** a curve or U shape in the residuals-against-fitted plot, or in residuals against a predictor.
4. **Consequence:** biased predictions and a slope that depends on which x range you sampled. *More data don't fix it.*
5. **Remedies:** transform x or y, add a polynomial term, use a GLM whose link bends the line, use a smoother (GAM), or fit a nonlinear function chosen from biology.
6. **Additivity is the same assumption across predictors:** effects add up, unless you include an interaction.

## In R
```r
set.seed(1); x <- runif(100, 0, 10); y <- 2 + 3 * x - 0.3 * x^2 + rnorm(100)
m1 <- lm(y ~ x); m2 <- lm(y ~ x + I(x^2))
op <- par(mfrow = c(1, 2)); plot(fitted(m1), resid(m1), main = "line: arch in residuals"); plot(fitted(m2), resid(m2), main = "quadratic: no pattern"); par(op)
tapply(resid(m1), cut(x, 3), mean)        # negative, positive, negative: the signature of a missed curve
```

## In the course
[[Zuur et al. 2009 Ch2]] and Chapter 3, which moves to additive models when the line fails.

## Common confusions
- **"A high R² proves linearity."** A line can explain most of the variation in a gently curved relationship and still be wrong.

## Explain it back
- What residual pattern signals non-linearity?

*Pass test:* you can detect a missed curve and name three fixes.

## Connections
- **Builds on:** [[Linear Function]], [[Residual]]
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

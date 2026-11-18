---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Jensen's inequality says that for a curved function, the average of the function's outputs is not the function of the average input."
aliases:
  - "Jensen inequality"
  - "Nonlinear averaging"
status: seedling
---

# Jensen's Inequality

Drive half a trip at 20 km/h and half at 60. The fuel you burn is not the fuel you would burn at a steady 40, because fuel use curves upward with speed: averaging first and then applying the curve gives the wrong answer. **Jensen's inequality** says that for a curved function, the average of the function's outputs is not the function of the average input ([[Expected Value]], [[Nonlinear Function]]). For a function curving upward (convex), E[f(X)] ≥ f(E[X]); for one curving downward (concave, like log), E[f(X)] ≤ f(E[X]); for a [[Equation of a Line|straight line]] the two are equal.

A small example: square the inputs 2 and 4. The average of the squares is (4 + 16)/2 = 10, but the square of the average is 3² = 9. The figure shows why: the chord joining two points on an upward curve sits above the curve, and the midpoint of the chord is the average of the outputs. The gap grows with the variance of X and the curvature of f. In the code below, for lognormal data the mean of the logs is 0 while the log of the mean is 0.5. And with group effects on the [[Link Scale|logit scale]] with SD 1.5, the probability for a "typical" group, [[Logistic Function|plogis]](−2) = 0.12, is well below the average probability over groups, 0.19.

It is behind several of the most common prediction mistakes. The mean of logs is less than the log of the mean, so back-transforming a log-scale mean underestimates the mean ([[Back-transformation]]). In a mixed GLM, the prediction for an average group, with its [[Random Effect|random effect]] at zero, is not the average over groups ([[Conditional vs Marginal Predictions]]). And an organism's performance in a variable environment is not its performance at the average environment. The practical rule: transform each draw or each group first, then average, never the other way round; with Bayesian output this means working draw by draw ([[Posterior Draws]], [[Mean]]). It is not a technicality.

![[Jensens inequality.png|700]]
*What to look at:* the chord joining two points on a curve sits above the curve. The midpoint of the chord is the average of outputs.

```r
x <- c(2, 4); c(mean(x^2), mean(x)^2)
set.seed(8); z <- rlnorm(1e5, 0, 1); c(mean(log(z)), log(mean(z)))         # 0 versus 0.5
u <- rnorm(1e5, 0, 1.5); c(typical_group = plogis(-2), average_over_groups = mean(plogis(-2 + u)))      # group effects on the logit scale: 0.12 versus 0.19
```

## Connections
- **Builds on:** [[Expected Value]], [[Nonlinear Function]], [[Equation of a Line]], [[Link Scale]], [[Logistic Function]]
- **Leads to:** [[Back-transformation]], [[Conditional vs Marginal Predictions]], [[Posterior Draws]], [[Random Effect]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

State Jensen's inequality in plain words.
??
For a nonlinear function, the mean of the transformed values differs from the transformation of the mean.
![[Jensens inequality.png]]
++++

For which direction of curvature is E[f(X)] ≥ f(E[X])?
??
For convex (upward-curving) functions.
++++

---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Jensen inequality"
  - "Nonlinear averaging"
status: seedling
---

# Jensen's Inequality

**In one line:** Jensen's inequality says that for a curved function, the average of the function's outputs is not the function of the average input.

> [!info] Before this, it helps to know
> [[Expected Value]] (the averaging) · [[Nonlinear Function]] (the curve) · [[Mean]] (what is being pushed through)

## The everyday picture
A road that gets steeper as it climbs. You spend half the trip at 20 km/h and half at 60. The fuel you burn is not the fuel you'd burn at a steady 40, because fuel use curves upward with speed. Averaging first and then applying the curve gives the wrong answer.

## A tiny example
Function: square. Inputs 2 and 4.
- Average of squares: (4 + 16)/2 = 10.
- Square of the average: 3² = 9.
- They differ, and the gap grows with the spread of the inputs.

## Start from zero
1. **For a function curving upward (convex):** E[f(X)] ≥ f(E[X]).
2. **For one curving downward (concave, like log):** E[f(X)] ≤ f(E[X]).
3. **For a straight line they are equal.**
4. **The size of the gap depends on the variance of X and the curvature of f.**
5. **Consequence 1:** the mean of logs is less than the log of the mean, so back-transforming a log-scale mean underestimates the mean.
6. **Consequence 2:** in a mixed GLM, the prediction for an "average group" (random effect zero) isn't the average over groups.
7. **Consequence 3:** an organism's performance in a variable environment is not its performance at the average environment.
8. **Practical rule:** transform each draw or each group first, then average. Don't average and then transform.

## See it
![[Jensens inequality.png|700]]
*What to look at:* the chord joining two points on a curve sits above the curve. The midpoint of the chord is the average of outputs.

## In R
```r
x <- c(2, 4); c(mean(x^2), mean(x)^2)
set.seed(8); z <- rlnorm(1e5, 0, 1); c(mean(log(z)), log(mean(z)))         # 0 versus 0.5
u <- rnorm(1e5, 0, 1.5); c(typical_group = plogis(-2), average_over_groups = mean(plogis(-2 + u)))      # group effects on the logit scale: 0.12 versus 0.19
```

## Common confusions
- **"It is a technicality."** It is the reason for several of the most common prediction mistakes in GLMs and mixed models.

## Explain it back
- Why isn't the prediction at an average random effect the population average?

*Pass test:* you can state the inequality and give two consequences.

## Connections
- **Builds on:** [[Expected Value]], [[Nonlinear Function]]
- **Leads to:** [[Back-transformation]], [[Conditional vs Marginal Predictions]], [[Posterior Draws]]
- **Part of:** [[MOC - Linear Models and GLMs]]

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

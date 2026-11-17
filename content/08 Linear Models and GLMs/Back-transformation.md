---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Back-transform"
  - "Retransformation"
  - "Back-transforming predictions"
status: seedling
---

# Back-transformation

**In one line:** back-transformation converts model results from the transformed scale on which they were estimated to the original scale of the data.

> [!info] Before this, it helps to know
> [[Transformation]] (what is being undone) · [[Exponential Function]] (undoes the log) · [[Logistic Function]] (undoes the logit)

## The everyday picture
Converting a recipe worked out in Fahrenheit back to Celsius so you can use your oven. The calculation was done in one unit. The answer is needed in another.

## Start from zero
1. **Apply the inverse function.** Log scale: `exp()`. Logit scale: `plogis()`. Square-root scale: square.
2. **Interval endpoints back-transform correctly.** Compute the interval on the model's scale, then transform both ends. The interval becomes asymmetric, which is right.
3. **Never back-transform a standard error on its own.** A SE is a width on the transformed scale and has no direct meaning after a curved transformation.
4. **The mean does not back-transform to the mean.** exp(mean of logs) is the median (the geometric mean) on the original scale, below the arithmetic mean.
5. **To get the mean from a log-normal model:** exp(μ + σ²/2).
6. **GLMs avoid the mean problem,** because they model the log of the mean, not the mean of the logs. Their back-transformed predictions are means.

## In R
```r
set.seed(7); x <- runif(200, 0, 10); y <- exp(1 + 0.2 * x + rnorm(200, 0, 0.5))
m <- lm(log(y) ~ x); p <- predict(m, data.frame(x = 5), interval = "confidence")
exp(p)                                                     # median of y at x = 5 with an asymmetric interval
c(median = exp(p[1]), mean = exp(p[1] + sigma(m)^2 / 2), truth_mean = exp(1 + 1 + 0.125))
predict(glm(y ~ x, family = Gamma("log")), data.frame(x = 5), type = "response")       # a log-link GLM predicts the mean directly
```

## In the course
[[Guthery and Bingham 2007]]. Every GLM lab back-transforms predictions for plotting ([[Course Website]]).

## Common confusions
- **"exp(SE) is the SE on the original scale."** It isn't. Transform interval endpoints.
- **"exp of the predicted log is the predicted mean."** It is the predicted median.

## Explain it back
- Why are back-transformed confidence intervals asymmetric?

*Pass test:* you can back-transform a prediction and its interval correctly.

## Connections
- **Builds on:** [[Transformation]], [[Exponential Function]]
- **Leads to:** [[Jensen's Inequality]], [[Predictions on Link vs Response Scale]], [[Inverse Link Function]], [[Lognormal Distribution]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

How do you back-transform a confidence interval?
??
Compute it on the model scale, then apply the inverse function to each endpoint.
++++

What does exp() of a mean on the log scale give?
??
The median (geometric mean) on the original scale, not the arithmetic mean.
++++

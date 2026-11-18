---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Back-transformation converts model results from the transformed scale on which they were estimated to the original scale of the data."
aliases:
  - "Back-transform"
  - "Retransformation"
  - "Back-transforming predictions"
status: seedling
---

# Back-transformation

If you worked out a recipe in Fahrenheit, you convert the answer back to Celsius before using your oven. **Back-transformation** converts model results from the transformed scale on which they were estimated back to the original scale of the data ([[Transformation]]). Apply the inverse function: `exp()` undoes a log ([[Exponential Function]]), `plogis()` undoes a [[Logit Link|logit]] ([[Logistic Function]]), and squaring undoes a [[Square Root|square root]] ([[Inverse Link Function]]).

Two rules matter. First, interval endpoints back-transform correctly: compute the interval on the model's scale, then transform both ends. The result is asymmetric, which is right. A [[Standard Error|standard error]] must never be back-transformed on its own, because it is a width on the transformed scale and has no direct meaning after a curved transformation. Second, the mean does not back-transform to the mean. exp(mean of logs) is the median, or geometric mean, on the original scale, and it lies below the [[Mean|arithmetic mean]]; this is [[Jensen's Inequality]]. For a model with normal errors on the log scale, the mean is exp(μ + σ²/2) ([[Lognormal Distribution]]). The code below fits `lm(log(y) ~ x)`, back-transforms the prediction at x = 5 to a median with an asymmetric interval, and shows that the mean, computed with the σ²/2 correction, is noticeably larger and close to the true mean.

[[Generalized Linear Model|GLMs]] avoid the mean problem, because they model the log of the mean rather than the mean of the logs, so their back-transformed predictions are means; the last line of the code shows a log-link [[Gamma GLM|gamma GLM]] predicting the mean directly ([[Predictions on Link vs Response Scale]]). Every GLM lab back-transforms predictions for plotting ([[Guthery and Bingham 2007]], [[Course Website]]).

```r
set.seed(7); x <- runif(200, 0, 10); y <- exp(1 + 0.2 * x + rnorm(200, 0, 0.5))
m <- lm(log(y) ~ x); p <- predict(m, data.frame(x = 5), interval = "confidence")
exp(p)                                                     # median of y at x = 5 with an asymmetric interval
c(median = exp(p[1]), mean = exp(p[1] + sigma(m)^2 / 2), truth_mean = exp(1 + 1 + 0.125))
predict(glm(y ~ x, family = Gamma("log")), data.frame(x = 5), type = "response")       # a log-link GLM predicts the mean directly
```

## Connections
- **Builds on:** [[Transformation]], [[Exponential Function]], [[Logit Link]], [[Square Root]], [[Standard Error]], [[Mean]], [[Generalized Linear Model]], [[Gamma GLM]]
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

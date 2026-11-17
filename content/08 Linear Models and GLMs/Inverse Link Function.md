---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Inverse link"
  - "Mean function"
  - "g⁻¹"
  - "Back-transforming the linear predictor"
status: seedling
---

# Inverse Link Function

**In one line:** the inverse link function converts a value of the linear predictor back into a mean on the scale of the data.

> [!info] Before this, it helps to know
> [[Link Function]] (what it undoes) · [[Linear Predictor]] (its input) · [[Back-transformation]] (the general idea)

## The everyday picture
The return ticket. The link carried the mean out to the unrestricted number line so that the model could do its arithmetic there. The inverse link brings the answer home to the scale where counts are counts and probabilities are probabilities.

## Start from zero
1. **μ = g⁻¹(η).**
2. **Log link → `exp()`.**
3. **Logit link → `plogis()`,** the logistic function.
4. **Probit → `pnorm()`. Cloglog → 1 − exp(−exp(η)). Identity → nothing.**
5. **It guarantees valid means:** exp() is always positive, plogis() always between 0 and 1.
6. **Intervals: compute on the link scale, then apply the inverse link to each end.**
7. **`family(model)$linkinv` gives the right function for any fitted model,** so your code doesn't have to assume the link.

## In R
```r
exp(c(-3, 0, 3)); plogis(c(-3, 0, 3))
set.seed(3); x <- runif(80, 0, 10); y <- rpois(80, exp(0.3 + 0.2 * x)); m <- glm(y ~ x, family = poisson)
p <- predict(m, data.frame(x = 5), se.fit = TRUE); inv <- family(m)$linkinv
inv(p$fit + c(-1.96, 0, 1.96) * p$se.fit)             # lower, estimate, upper on the count scale
```

## In the course
Used for every prediction plot in the GLM labs ([[Course Website]]).

## Common confusions
- **"Apply the inverse link to the standard error."** Apply it to the interval's endpoints.

## Explain it back
- What is the inverse of the logit link, in R?

*Pass test:* you can back-transform a prediction and its interval for log and logit links.

## Connections
- **Builds on:** [[Link Function]], [[Linear Predictor]]
- **Leads to:** [[Logistic Function]], [[Response Scale]], [[Back-transformation]], [[predict()]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is the inverse of the log link?
??
exp().
++++

What is the inverse of the logit link?
??
The logistic function, plogis().
++++

How should a confidence interval be moved to the response scale?
??
Compute it on the link scale and apply the inverse link to both endpoints.
++++

---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases: []
status: seedling
---

# Predictions on Link vs Response Scale

> [!summary] In plain words
> a GLM computes on the link scale, where effects add up and intervals behave, but people understand the response scale, so build predictions and intervals on the link scale and convert them at the very end.

## The everyday picture
Do your sums in the workshop, show the finished piece in the shop. Trying to do the sums on the shop floor gives wrong answers. Showing customers the workshop confuses them.

## The question
Which scale should I compute on and which should I report on, and what goes wrong if I mix them up?

## Built from
- [[Link Scale]]: where the model is linear.
- [[Response Scale]]: where the data live.
- [[Inverse Link Function]]: the bridge.
- [[predict()]]: `type = "link"` or `type = "response"`.
- [[Jensen's Inequality]]: why the order of operations matters.

## The reasoning, step by step
1. `predict(m, newdata, type = "link", se.fit = TRUE)` gives η̂ and its standard error.
2. Build the interval there: η̂ ± 1.96 × SE. On this scale it is roughly symmetric and normal.
3. Apply the inverse link to the estimate and to both ends.
4. The resulting interval is asymmetric on the response scale and can't cross the boundary. That is correct.
5. Don't compute mean ± 1.96 × SE on the response scale. It can give negative counts or probabilities above 1.
6. Don't average link-scale predictions and then transform if you want an average response. Transform first, then average.

**A worked example in numbers.** logit-scale estimate 3.0, SE 1.0. Link-scale interval 1.04 to 4.96. Back-transformed: 0.953, with interval 0.74 to 0.993. A response-scale shortcut with SE 0.045 gives 0.86 to 1.04, which passes 1.

## So in practice
```r
set.seed(1); d <- data.frame(x = runif(100)); d$y <- rbinom(100, 1, plogis(-1 + 3 * d$x)); m <- glm(y ~ x, family = binomial, d); nd <- data.frame(x = c(0.1, 0.5, 0.9))
p <- predict(m, newdata = nd, type = "link", se.fit = TRUE)
inv <- family(m)$linkinv
nd$fit <- inv(p$fit); nd$lwr <- inv(p$fit - 1.96 * p$se.fit); nd$upr <- inv(p$fit + 1.96 * p$se.fit); round(nd, 2)
```

## What would go wrong otherwise
Ribbons that dip below zero, probabilities above one, and biased averages.

## Explain it back
- Describe the three steps to a correct ribbon.

*Pass test:* you can produce a response-scale prediction with a valid interval.

## Connections
- **Related:** [[Plotting Model Predictions with Ribbons]], [[Why GLMs need a link function]], [[Back-transformation]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

On which scale should GLM confidence intervals be constructed?
??
On the link scale, then back-transformed with the inverse link.
++++

Why not compute estimate ± 1.96 SE on the response scale?
??
The interval can cross impossible values and is wrongly symmetric.
++++

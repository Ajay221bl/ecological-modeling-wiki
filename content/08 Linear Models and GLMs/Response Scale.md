---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The response scale is the scale of the data themselves, such as counts or probabilities, onto which GLM results are converted with the inverse link for interpretation."
aliases:
  - "Data scale"
  - "Natural scale"
  - "Original scale"
  - "type = \"response\""
status: seedling
---

# Response Scale

Whatever happened in the workshop, the customer on the shop floor wants to know what the product is: how many birds, what chance of occupancy. The **response scale** is the scale of the data themselves, such as counts, probabilities, proportions or grams, onto which GLM results are converted with the [[Inverse Link Function]], or with `predict(type = "response")`. It is where results should be presented: predicted means with ribbons, at stated values of the other predictors ([[Plotting Model Predictions with Ribbons]]).

Effects are not constant here. With a logit link, the same +1 on the link scale raises a probability by 0.07, then 0.15, then 0.23, then less again as it nears 1: the effect on probability is largest near 0.5 and vanishes near 0 and 1. With a log link, the same coefficient adds 0.6 to the mean when x goes from 0 to 1 but 4.4 when x goes from 10 to 11. The code below computes both. So "the effect of x" on this scale depends on where you start and on the other predictors' values, unlike on the [[Link Scale]].

If you want a mean on this scale, do not average on the link scale and then transform, because of [[Jensen's Inequality]]. And reporting exp(coefficient) does not put you on the response scale: exp(β) is a ratio, such as an [[Odds Ratio]], while predicted means are the response scale ([[Course Website]]).

```r
b0 <- -3; b1 <- 1
p <- plogis(b0 + b1 * 0:6); round(p, 3); round(diff(p), 3)         # same +1 on the logit scale: probability rises by 0.07, then 0.15, 0.23 ... then less again
exp(1 + 0.2 * c(1, 11)) - exp(1 + 0.2 * c(0, 10))                  # log link: +1 in x adds 0.6 at x = 0 and 4.4 at x = 10
```

## Connections
- **Builds on:** [[Inverse Link Function]], [[Link Scale]]
- **Leads to:** [[Plotting Model Predictions with Ribbons]], [[Jensen's Inequality]], [[Odds Ratio]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Predictions on Link vs Response Scale]]

## Flashcards

What is the response scale of a GLM?
??
The original scale of the data (counts, probabilities), reached by applying the inverse link.
++++

Why are effects not constant on the response scale?
??
The inverse link is nonlinear, so equal steps in the linear predictor change the mean by unequal amounts.
++++

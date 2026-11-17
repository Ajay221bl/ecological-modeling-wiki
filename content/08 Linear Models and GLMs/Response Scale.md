---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Data scale"
  - "Natural scale"
  - "Original scale"
  - "type = \"response\""
status: seedling
---

# Response Scale

**In one line:** the response scale is the scale of the data themselves, such as counts or probabilities, onto which GLM results are converted with the inverse link for interpretation.

> [!info] Before this, it helps to know
> [[Inverse Link Function]] (how to get there) · [[Link Scale]] (where you come from)

## The everyday picture
The shop floor. Whatever went on in the workshop, the customer wants to know what the product is: how many birds, what chance of occupancy.

## Start from zero
1. **Counts, probabilities, proportions, grams.**
2. **Get there with the inverse link,** or `predict(type = "response")`.
3. **Effects are not constant here.** With a log link the same coefficient means +1 bird where the mean is 5 and +10 where it is 50. With a logit link the effect on probability is largest near 0.5 and vanishes near 0 and 1.
4. **So "the effect of x" on this scale depends on where you start** and on the other predictors' values.
5. **Present results here:** predicted means with ribbons, at stated values of the other predictors.
6. **Don't average on the link scale and transform if you want a mean on this scale** (Jensen's inequality).

## In R
```r
b0 <- -3; b1 <- 1
p <- plogis(b0 + b1 * 0:6); round(p, 3); round(diff(p), 3)         # same +1 on the logit scale: probability rises by 0.07, then 0.15, 0.23 ... then less again
exp(1 + 0.2 * c(1, 11)) - exp(1 + 0.2 * c(0, 10))                  # log link: +1 in x adds 0.6 at x = 0 and 4.4 at x = 10
```

## In the course
The labs ask for plots "on the response scale" ([[Course Website]]).

## Common confusions
- **"Report exp(coefficient) and you are on the response scale."** exp(β) is a ratio. Predicted means are the response scale.

## Explain it back
- Why does the same logit-scale effect change probability by different amounts?

*Pass test:* you can present a GLM effect as predicted values on the response scale.

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

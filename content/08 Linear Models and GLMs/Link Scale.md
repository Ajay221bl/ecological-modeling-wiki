---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The link scale is the transformed scale on which a GLM's linear predictor lives and on which its coefficients add up."
aliases:
  - "Linear predictor scale"
  - "Latent scale"
  - "Log scale"
  - "Logit scale"
status: seedling
---

# Link Scale

Behind a shop is a workshop where all the cutting and assembling happens in the workshop's own units, unseen by customers. The **link scale** is a GLM's workshop: the transformed scale on which its [[Linear Predictor]] lives and on which its coefficients add up ([[Link Function]]). For a log link it is the log of the mean; for a logit link it is the log-odds ([[Log Odds]]). Coefficients, standard errors and Wald intervals are computed here, and random effects in a GLMM are normal on this scale.

Effects are additive and constant here: a slope of 0.2 adds 0.2 to η at every x. In the code below, a logistic regression's predictions at x = −1, 0 and 1 differ by equal steps on the link scale but by unequal steps on the probability scale. Uncertainty is also closest to symmetric and normal here, which is why intervals are built on this scale and then back-transformed ([[Wald Confidence Interval]]).

It is not a scale for presenting results: "the log-odds of occupancy fell by 0.8" means little to a reader, who needs the [[Response Scale]]. And a constant effect on the link scale is not constant on the response scale, because the inverse link is curved, so the same step in η moves the mean by different amounts.

```r
set.seed(4); x <- runif(100, -2, 2); y <- rbinom(100, 1, plogis(0.5 + 1.2 * x)); m <- glm(y ~ x, family = binomial)
diff(predict(m, data.frame(x = c(-1, 0, 1)), type = "link"))          # equal steps on the link scale
diff(predict(m, data.frame(x = c(-1, 0, 1)), type = "response"))      # unequal steps on the response scale
```

## Connections
- **Builds on:** [[Linear Predictor]], [[Link Function]]
- **Leads to:** [[Response Scale]], [[Log Odds]], [[Wald Confidence Interval]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Predictions on Link vs Response Scale]]

## Flashcards

What is the link scale?
??
The scale of the linear predictor, such as log(mean) or log-odds, where effects are additive.
++++

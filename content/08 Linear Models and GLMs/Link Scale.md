---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Linear predictor scale"
  - "Latent scale"
  - "Log scale"
  - "Logit scale"
status: seedling
---

# Link Scale

**In one line:** the link scale is the transformed scale on which a GLM's linear predictor lives and on which its coefficients add up.

> [!info] Before this, it helps to know
> [[Linear Predictor]] (what is measured on it) · [[Link Function]] (what defines it)

## The everyday picture
The workshop behind a shop. All the cutting and assembling happens there, in the workshop's own units. Customers never see it. They see the finished product on the shop floor.

## Start from zero
1. **For a log link:** the log of the mean. **For a logit link:** the log-odds.
2. **Coefficients, standard errors and Wald intervals are computed here.**
3. **Effects are additive and constant here.** A slope of 0.2 adds 0.2 to η at every x.
4. **Uncertainty is closest to symmetric and normal here.** That is why intervals are built here.
5. **Random effects in a GLMM are normal on this scale.**
6. **Not a scale for presenting results.** "Log-odds of occupancy fell by 0.8" means little to a reader.

## In R
```r
set.seed(4); x <- runif(100, -2, 2); y <- rbinom(100, 1, plogis(0.5 + 1.2 * x)); m <- glm(y ~ x, family = binomial)
diff(predict(m, data.frame(x = c(-1, 0, 1)), type = "link"))          # equal steps on the link scale
diff(predict(m, data.frame(x = c(-1, 0, 1)), type = "response"))      # unequal steps on the response scale
```

## Common confusions
- **"A constant effect on the link scale is constant on the response scale."** The inverse link is curved, so the same step in η moves the mean by different amounts.

## Explain it back
- Why are intervals built on the link scale?

*Pass test:* you can say which quantities belong on the link scale.

## Connections
- **Builds on:** [[Linear Predictor]], [[Link Function]]
- **Leads to:** [[Response Scale]], [[Log Odds]], [[Wald Confidence Interval]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Predictions on Link vs Response Scale]]

## Flashcards

What is the link scale?
??
The scale of the linear predictor, such as log(mean) or log-odds, where effects are additive.
++++

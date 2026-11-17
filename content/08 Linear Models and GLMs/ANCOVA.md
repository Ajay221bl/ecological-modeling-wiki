---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Analysis of covariance"
status: seedling
---

# ANCOVA

**In one line:** ANCOVA is a linear model that combines a categorical predictor with a continuous one, comparing groups after adjusting for the continuous covariate.

> [!info] Before this, it helps to know
> [[ANOVA]] (the group comparison) · [[Linear Regression]] (the covariate's slope) · [[Interaction Term]] (the equal-slopes question)

## The everyday picture
Comparing the weights of two breeds of dog. One breed's sample happens to be older. To compare fairly you draw a weight-against-age line for each breed and compare the lines at the same age.

## Start from zero
1. **Model:** y ~ group + covariate. Parallel lines, one per group.
2. **The group coefficient is the vertical gap between the lines:** the group difference at any fixed covariate value.
3. **Why include the covariate, 1:** it removes variation it explains, making the group comparison sharper.
4. **Why include the covariate, 2:** it adjusts for groups differing in the covariate.
5. **Check the equal-slopes assumption** by fitting y ~ group * covariate. If the interaction matters, the group difference depends on the covariate and there is no single "adjusted difference".

## In R
```r
set.seed(9); d <- data.frame(sex = factor(rep(c("f", "m"), each = 40)), len = c(runif(40, 20, 40), runif(40, 30, 50)))
d$mass <- 5 + 2 * d$len + 6 * (d$sex == "m") + rnorm(80, 0, 4)
coef(lm(mass ~ sex, d))["sexm"]                  # raw difference: inflated because males are longer
coef(lm(mass ~ sex + len, d))["sexm"]            # adjusted for length: near the true 6
anova(lm(mass ~ sex + len, d), lm(mass ~ sex * len, d))$`Pr(>F)`[2]    # no evidence of different slopes
```

## In the course
[[Zuur et al. 2009 Appendix A]] treats it as one more linear model.

## Common confusions
- **"ANCOVA is a special technique."** It is `lm()` with one factor and one numeric predictor.

## Explain it back
- What assumption does the standard ANCOVA make about the slopes?

*Pass test:* you can explain "adjusted group difference".

## Connections
- **Builds on:** [[ANOVA]], [[Linear Regression]]
- **Leads to:** [[Interaction Term]], [[Holding Other Variables Constant]], [[Random Intercept]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is ANCOVA?
??
A linear model with a categorical predictor and a continuous covariate.
++++

What does the group coefficient in an ANCOVA represent?
??
The difference between groups at the same value of the covariate.
++++

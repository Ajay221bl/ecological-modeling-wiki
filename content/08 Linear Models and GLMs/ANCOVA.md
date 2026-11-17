---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "ANCOVA is a linear model that combines a categorical predictor with a continuous one, comparing groups after adjusting for the continuous covariate."
aliases:
  - "Analysis of covariance"
status: seedling
---

# ANCOVA

To compare the weights of two dog breeds when one breed's sample happens to be older, draw a weight-against-age line for each breed and compare the lines at the same age. **ANCOVA**, analysis of covariance, is a linear model that combines a categorical predictor with a continuous one, comparing groups after adjusting for the continuous covariate ([[ANOVA]], [[Linear Regression]]). The model y ~ group + covariate fits parallel lines, one per group, and the group coefficient is the vertical gap between them: the group difference at any fixed covariate value ([[Holding Other Variables Constant]]).

Including the covariate does two things. It removes variation the covariate explains, which sharpens the group comparison, and it adjusts for groups that differ in the covariate. In the code below, males are both longer and heavier for their length by 6 g. Comparing raw means inflates the sex difference because males are longer; adding length to the model brings the estimate close to the true 6.

Check the equal-slopes assumption by fitting y ~ group * covariate ([[Interaction Term]]). If the interaction matters, the group difference depends on the covariate and there is no single "adjusted difference"; in the code there is no evidence of different slopes. ANCOVA is not a special technique: it is `lm()` with one factor and one numeric predictor ([[Zuur et al. 2009 Appendix A]]). Giving each group its own intercept as a random draw leads to a [[Random Intercept]].

```r
set.seed(9); d <- data.frame(sex = factor(rep(c("f", "m"), each = 40)), len = c(runif(40, 20, 40), runif(40, 30, 50)))
d$mass <- 5 + 2 * d$len + 6 * (d$sex == "m") + rnorm(80, 0, 4)
coef(lm(mass ~ sex, d))["sexm"]                  # raw difference: inflated because males are longer
coef(lm(mass ~ sex + len, d))["sexm"]            # adjusted for length: near the true 6
anova(lm(mass ~ sex + len, d), lm(mass ~ sex * len, d))$`Pr(>F)`[2]    # no evidence of different slopes
```

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

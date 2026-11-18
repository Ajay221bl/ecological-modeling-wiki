---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "The scale of effect is the buffer radius around a site at which a landscape variable best predicts the response, found by fitting the same model at each candidate radius and comparing them."
aliases:
  - "Scale of effect"
  - "Characteristic scale"
  - "Best buffer size"
  - "Multi-scale analysis"
  - "Choosing the landscape scale"
status: seedling
---

# Scale of Effect

How much of a town decides whether a café does well: its own street, its neighbourhood, or the whole city? The answer depends on how far its customers walk. Animals are the same: a bird may respond to woodland within 2 km because that is how far it forages, and not care about woodland 10 km away. The **scale of effect** is the buffer radius around a site at which a landscape variable best predicts the response ([[Spatial Scale]], [[Landscape Metrics]]). You rarely know it in advance, so you measure the same variable at several radii and let the data choose.

The standard way is to fit one model per radius, identical except for which version of the variable it uses, for example occurrence ~ LSI2K, ~ LSI5K and ~ LSI10K, and compare them with AIC or LOO ([[Model Ranking Tables]], [[Leave-one-out Cross-validation]]). The radius with the best score is the scale of effect, and the weight shows how clearly it wins. Then that one scale goes into the main candidate models. Homework 3's hint "you likely need to do some work prior to creating your candidate models" is this step, plus checking correlations: a variable measured at 2, 5 and 10 km is strongly correlated with itself across scales, so never put two scales of the same variable in one model ([[Collinearity]], [[Pairplot]]).

The method has traps. Nested buffers share their inner area, so the three versions are not independent tests. With many variables and scales you can end up comparing dozens of models, the problem the Westphal et al. (2003) analysis had with 45 models, so state the scales you will test before fitting ([[Why build the candidate model set before seeing the data]]). And the best scale can differ between species, as it may for Grey Currawong and Silvereye.

```r
set.seed(2); n <- 120
w2 <- runif(n); w5 <- 0.5 * w2 + 0.5 * runif(n); w10 <- 0.5 * w5 + 0.5 * runif(n)   # nested buffers are correlated
y <- rbinom(n, 1, plogis(-2 + 4 * w5))                                              # truth: 5 km matters
fits <- list(`2 km` = glm(y ~ w2, binomial), `5 km` = glm(y ~ w5, binomial), `10 km` = glm(y ~ w10, binomial))
aic <- sapply(fits, AIC); d <- aic - min(aic); w <- exp(-d / 2) / sum(exp(-d / 2))
round(rbind(AIC = aic, delta = d, weight = w), 2); round(cor(cbind(w2, w5, w10)), 2)
```

## Connections
- **Builds on:** [[Spatial Scale]], [[Landscape Metrics]], [[Model Ranking Tables]]
- **Leads to:** [[Collinearity]], [[Candidate Model Set]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]], molecular note [[Patch vs Landscape Effects]], [[Homework 3 - Woodland Birds and Landscape Scale]]

## Flashcards

What is the scale of effect?
??
The buffer radius at which a landscape variable best predicts the response.
++++

How do you find it?
??
Fit the same model once per radius and compare them with AIC or LOO.
++++

Why never put LSI2K and LSI10K in the same model?
??
They measure the same thing at nested scales, so they are strongly correlated (collinear).
++++

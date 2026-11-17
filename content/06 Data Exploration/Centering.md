---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Centering a predictor means subtracting its mean from every value, so that zero now stands for \"average\"."
aliases:
  - "Mean-centering"
  - "Centring"
  - "Centered predictor"
status: seedling
---

# Centering

Measure heights from the average person's head instead of from the floor. Everyone keeps their place in the line-up, but "zero" now means "average height", a person you can picture, rather than a person zero centimetres tall. **Centering** a predictor means subtracting its [[Mean]] from every value, so that zero stands for "average" ([[Explanatory Variable]]). Elevations of 800, 900 and 1,000 m, with mean 900, become −100, 0 and +100.

Slopes do not change, because the units are the same. What changes is the meaning of the [[Intercept]]: it becomes the expected response at the average x. In a model of richness on raw elevation the intercept is "richness at sea level", far outside the data; after centering it is "richness at 900 m". In the code below, the raw and centred models have the same slope and different intercepts. Centering also helps in three practical ways. With an interaction x·z in the model, the coefficient of z is its effect when x = 0, so centering makes that "at average x" ([[Interaction Term]]); and it removes most of the artificial correlation between x and x², which falls from almost 1 to near 0 in the example. It makes the intercept and slope estimates nearly uncorrelated (from about −1 to about 0 in the code), so optimisers and MCMC samplers move more easily ([[Convergence]]). And it makes priors easier to state, since "the response at an average site" is something you can reason about ([[Prior Distribution]]).

The Bayesian labs centre and scale predictors before setting priors ([[Course Website]]), and McElreath does it in nearly every model. Two confusions. Centering does not change the fit: predictions, slopes and R² are identical in a model without interactions; only the intercept moves. And it does not cure collinearity in general, only the kind created by powers and products; two different correlated predictors stay correlated. Centering followed by dividing by the standard deviation is [[Standardizing]].

```r
set.seed(16)
elev <- runif(60, 800, 1000); rich <- 30 - 0.02 * elev + rnorm(60)
elev_c <- elev - mean(elev)
rbind(raw = coef(lm(rich ~ elev)), centered = coef(lm(rich ~ elev_c)))   # same slope, new intercept
c(cor(elev, elev^2), cor(elev_c, elev_c^2))                              # x and x² far less correlated
cov2cor(vcov(lm(rich ~ elev)))[1, 2]; cov2cor(vcov(lm(rich ~ elev_c)))[1, 2]   # intercept-slope correlation: about -1, then 0
```

## Connections
- **Builds on:** [[Mean]], [[Intercept]]
- **Leads to:** [[Standardizing]], [[Interaction Term]], [[Prior Distribution]], [[Convergence]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What is centering?
??
Subtracting a variable's mean from each value so zero represents the average.
++++

What does centering change in a simple regression?
??
Only the intercept, which becomes the expected response at the mean of x.
++++

Why centre before adding x² or interactions?
??
It makes lower-order coefficients interpretable at the average and removes artificial correlation among the terms.
++++

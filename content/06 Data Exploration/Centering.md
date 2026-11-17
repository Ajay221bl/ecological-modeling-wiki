---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Mean-centering"
  - "Centring"
  - "Centered predictor"
status: seedling
---

# Centering

**In one line:** centering a predictor means subtracting its mean from every value, so that zero now stands for "average".

> [!info] Before this, it helps to know
> [[Mean]] (what is subtracted) · [[Intercept]] (what changes meaning) · [[Explanatory Variable]] (what is centered)

## The everyday picture
Measuring heights from the average person's head instead of from the floor. Everyone keeps their place in the line-up. But "zero" now means "average height", which is a person you can picture, and no longer "a person zero centimetres tall".

## A tiny example
Elevations 800, 900, 1000 m, mean 900. Centered: −100, 0, +100. In a model of richness on raw elevation the intercept is "richness at sea level", far outside the data. After centering it is "richness at 900 m".

## Start from zero
1. **Compute the mean of x.**
2. **Subtract it from each value.**
3. **Slopes do not change.** The units are the same.
4. **The intercept changes meaning:** it becomes the expected response at the average x.
5. **Why that helps with interactions and polynomials:** with x·z in the model, the coefficient of z is its effect when x = 0. Centering makes that "at average x" and removes most of the artificial correlation between x and x².
6. **Why it helps fitting:** intercept and slope estimates become nearly uncorrelated, so optimisers and MCMC samplers move more easily.
7. **Why it helps priors:** it is easy to state a prior for "the response at an average site".

## In R
```r
set.seed(16)
elev <- runif(60, 800, 1000); rich <- 30 - 0.02 * elev + rnorm(60)
elev_c <- elev - mean(elev)
rbind(raw = coef(lm(rich ~ elev)), centered = coef(lm(rich ~ elev_c)))   # same slope, new intercept
c(cor(elev, elev^2), cor(elev_c, elev_c^2))                              # x and x² far less correlated
cov2cor(vcov(lm(rich ~ elev)))[1, 2]; cov2cor(vcov(lm(rich ~ elev_c)))[1, 2]   # intercept-slope correlation: about -1, then 0
```

## In the course
The Bayesian labs centre and scale predictors before setting priors ([[Course Website]]). McElreath does it in nearly every model.

## Common confusions
- **"Centering changes the fit."** Predictions, slopes and R² are identical for a model without interactions. Only the intercept moves.
- **"Centering cures collinearity."** Only the kind you created with powers and products. Two different correlated predictors stay correlated.

## Explain it back
- What does the intercept mean after centering?

*Pass test:* you can centre a variable and reinterpret the intercept.

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

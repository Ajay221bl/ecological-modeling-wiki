---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A generalized additive model is a GLM in which some predictors enter through smooth curves estimated from the data, rather than through straight lines chosen in advance."
aliases:
  - "GAM"
  - "GAMs"
  - "gam()"
  - "Additive model"
  - "Generalised additive model"
  - "Generalized Additive Model (GAM)"
status: seedling
---

# Generalized Additive Model

A GLM hands you a ruler to lay through the data; a GAM hands you a draughtsman's spline, a bendy strip that follows the points but resists sharp kinks. A **generalized additive model** is a GLM in which some [[Predictor Variable|predictors]] enter through smooth curves estimated from the data, rather than through straight lines chosen in advance ([[Generalized Linear Model]], [[Smoother]], [[Link Function]]). A GLM says g(μ) = β₀ + β₁x₁ + β₂x₂; a GAM says g(μ) = β₀ + f₁(x₁) + f₂(x₂), where each f is a smooth function. "Additive" means the smooths add on the [[Link Scale|link scale]], so interactions need explicit terms such as tensor products or by-smooths ([[Tensor Product Smooth]], [[by= Smooths]]). Any GLM family works: Poisson, binomial, negative binomial, Tweedie ([[Tweedie Distribution]]).

Each f is built from [[Basis Function|basis functions]] times coefficients, so underneath the model is still a GLM, only a penalised one. A [[Wiggliness Penalty]] stops the curves from chasing noise, and its strength, the [[Smoothing Parameter]], is estimated from the data. The figure shows the idea: the smooth curve is the sum of the scaled basis functions. In R it is `mgcv::gam(y ~ s(x1) + s(x2) + factor, family = poisson, method = "REML")`. Read the results from the [[Effective Degrees of Freedom]], which say how wiggly each smooth is, and from [[Partial Effect Plots]], not from coefficients. In the code below Poisson counts that rise and fall with x give AIC 848.6 for a straight-line GLM and 746.1 for a GAM whose smooth uses 5.9 effective degrees of freedom.

GAMs are taught in the October 27 lectures and the GAM and HGAM labs, with quail whistle counts and tree cover, mgcv and [[gratia]] ([[Course Website]], [[Zuur et al. 2009 Ch3]], [[Noam Ross GAM Course]], [[Pedersen et al. 2019]]). GAMs are not black boxes: each smooth can be plotted and interpreted. And they are guarded against overfitting by the penalty and [[REML]] selection, though not perfectly ([[REML for Smoothness Selection]]).

![[Basis functions.png|700]]
*What to look at:* the smooth curve is the sum of the scaled basis functions.

```r
library(mgcv); set.seed(1); x <- runif(200, 0, 10); y <- rpois(200, exp(1 + sin(x / 1.5)))
m_glm <- glm(y ~ x, family = poisson); m_gam <- gam(y ~ s(x), family = poisson, method = "REML")
round(c(AIC_glm = AIC(m_glm), AIC_gam = AIC(m_gam), edf = summary(m_gam)$edf), 1)
```

## Connections
- **Builds on:** [[Generalized Linear Model]], [[Smoother]], [[Link Function]], [[Predictor Variable]], [[Link Scale]], [[REML]]
- **Leads to:** [[Smoothing Function s()]], [[Smoothing Parameter]], [[Effective Degrees of Freedom]], [[Hierarchical GAM]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[GLM vs GAM]], [[GAM Workflow in R]]

## Flashcards

What is a GAM?
??
A GLM in which some predictors enter through smooth functions estimated from the data.
![[Basis functions.png]]
++++

What stops a GAM's smooths from overfitting?
??
A wiggliness penalty whose strength (smoothing parameter) is estimated from the data.
++++

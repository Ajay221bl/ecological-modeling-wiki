---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
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

**In one line:** a generalized additive model is a GLM in which some predictors enter through smooth curves estimated from the data, rather than through straight lines chosen in advance.

> [!info] Before this, it helps to know
> [[Generalized Linear Model]] (the frame it extends) · [[Smoother]] (what replaces the slope) · [[Link Function]]

## The everyday picture
A GLM gives you a ruler to lay through the data. A GAM gives you a flexible draughtsman's spline, a bendy strip that follows the points but resists sharp kinks.

## Start from zero
1. **GLM:** g(μ) = β₀ + β₁x₁ + β₂x₂.
2. **GAM:** g(μ) = β₀ + f₁(x₁) + f₂(x₂), where each f is a smooth function.
3. **Each f is built from basis functions** with coefficients, so the model is still a (penalised) GLM underneath.
4. **A penalty on wiggliness** stops the curves from chasing noise. Its strength (the smoothing parameter) is estimated from the data.
5. **"Additive":** the smooths add on the link scale. Interactions need explicit terms (tensor products, by-smooths).
6. **Any GLM family works** (Poisson, binomial, negative binomial, Tweedie...).
7. **In R:** `mgcv::gam(y ~ s(x1) + s(x2) + factor, family = poisson, method = "REML")`.
8. **Read results from the edf** (how wiggly each smooth is) and from partial effect plots, not from coefficients.

## See it
![[Basis functions.png|700]]
*What to look at:* the smooth curve is the sum of the scaled basis functions.

## In R
```r
library(mgcv); set.seed(1); x <- runif(200, 0, 10); y <- rpois(200, exp(1 + sin(x / 1.5)))
m_glm <- glm(y ~ x, family = poisson); m_gam <- gam(y ~ s(x), family = poisson, method = "REML")
round(c(AIC_glm = AIC(m_glm), AIC_gam = AIC(m_gam), edf = summary(m_gam)$edf), 1)
```

## In the course
GAM lectures from Oct 27 and the GAM and HGAM labs (quail whistle counts and tree cover, mgcv and gratia; [[Course Website]]). [[Zuur et al. 2009 Ch3]]. [[Noam Ross GAM Course]]. [[Pedersen et al. 2019]].

## Common confusions
- **"GAMs are black boxes."** Each smooth can be plotted and interpreted.
- **"GAMs overfit."** The penalty and REML selection guard against it, though not perfectly.

## Explain it back
- What replaces β₁x₁ in a GAM?

*Pass test:* you can fit a GAM and say what each part does.

## Connections
- **Builds on:** [[Generalized Linear Model]], [[Smoother]], [[Link Function]]
- **Leads to:** [[Smoothing Function s()]], [[Smoothing Parameter]], [[Effective Degrees of Freedom]], [[Hierarchical GAM]]
- **Part of:** [[MOC - GAMs]], molecular note [[GLM vs GAM]], [[GAM Workflow in R]]

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

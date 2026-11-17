---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "When both intercepts and slopes vary by group, the model can also estimate their correlation, saying whether groups that start high tend to have steeper or shallower slopes."
aliases:
  - "Random-effect correlation"
  - "Intercept-slope correlation"
  - "(x || group)"
  - "Uncorrelated random effects"
status: seedling
---

# Correlated Random Intercepts and Slopes

When both intercepts and slopes vary by group, the model can also estimate their correlation, saying whether groups that start high tend to have steeper or shallower slopes ([[Random Slope]], [[Correlation]]). The pair (b₀ⱼ, b₁ⱼ) follows a [[Multivariate Normal Distribution]] with SDs σ₀ and σ₁ and correlation ρ. A negative ρ means high starters improve less, as with a ceiling; a positive one means the rich get richer.

In the code below the `sleepstudy` intercept-slope correlation is 0.07, close to zero, and dropping it with `(Days || Subject)` lowers AIC from 1755.6 to 1753.7. The correlation depends on where x = 0 is, so centering x changes it ([[Centering]]). Estimates of ±1 signal overfitting, not a real perfect correlation, and [[Harrison et al. 2018]] advise inspecting for them.

In Bayesian models an [[LKJ Prior]] is put on the correlation matrix. The correlation is not a biological constant: it changes when x is recentred.

```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), data = sleepstudy); round(attr(VarCorr(m)$Subject, "correlation")[1, 2], 2)
m2 <- lmer(Reaction ~ Days + (Days || Subject), data = sleepstudy); round(c(AIC_correlated = AIC(m), AIC_uncorrelated = AIC(m2)), 1)
```

## Connections
- **Builds on:** [[Random Slope]], [[Correlation]], [[Multivariate Normal Distribution]]
- **Leads to:** [[Centering]], [[LKJ Prior]], [[Singular Fit]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What does the double bar (x
??
g) do in lme4? || Fits random intercepts and slopes with their correlation fixed at zero.
++++

Why does centering x change the intercept-slope correlation?
??
The intercept is defined at x = 0, so moving zero changes which intercepts go with which slopes.
++++

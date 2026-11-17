---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Random-effect correlation"
  - "Intercept-slope correlation"
  - "(x || group)"
  - "Uncorrelated random effects"
status: seedling
---

# Correlated Random Intercepts and Slopes

**In one line:** when both intercepts and slopes vary by group, the model can also estimate their correlation, saying whether groups that start high tend to have steeper or shallower slopes.

> [!info] Before this, it helps to know
> [[Random Slope]] · [[Correlation]] · [[Multivariate Normal Distribution]] (the joint distribution of the pair)

## Start from zero
1. **(b₀ⱼ, b₁ⱼ) ~ multivariate Normal** with SDs σ₀, σ₁ and correlation ρ.
2. **`(x | g)`:** estimates ρ. **`(x || g)`:** fixes ρ = 0 (works as intended for numeric x; with factors, use separate terms).
3. **Interpretation:** negative ρ means high starters improve less (a ceiling). Positive means the rich get richer.
4. **The correlation depends on where x = 0 is.** Centering x changes it.
5. **±1 estimates signal overfitting,** not a real perfect correlation.
6. **In Bayesian models,** an LKJ prior is put on the correlation matrix.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), data = sleepstudy); round(attr(VarCorr(m)$Subject, "correlation")[1, 2], 2)
m2 <- lmer(Reaction ~ Days + (Days || Subject), data = sleepstudy); round(c(AIC_correlated = AIC(m), AIC_uncorrelated = AIC(m2)), 1)
```

## In the course
[[Harrison et al. 2018]] advise inspecting the intercept-slope correlation for ±1 values.

## Common confusions
- **"The correlation is a biological constant."** It changes when x is recentred.

## Explain it back
- What does (x || g) do?

*Pass test:* you can interpret and simplify the correlation.

## Connections
- **Builds on:** [[Random Slope]], [[Correlation]], [[Multivariate Normal Distribution]]
- **Leads to:** [[Centering]], [[LKJ Prior]], [[Singular Fit]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What does the double bar (x
??
g) do in lme4? || Fits random intercepts and slopes with their correlation fixed at zero.
++++

Why does centering x change the intercept-slope correlation?
??
The intercept is defined at x = 0, so moving zero changes which intercepts go with which slopes.
++++

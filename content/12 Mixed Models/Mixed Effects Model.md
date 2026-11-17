---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Mixed model"
  - "Mixed-effects model"
  - "Multilevel model"
  - "Hierarchical linear model"
  - "Random-effects model"
  - "Mixed models"
status: seedling
---

# Mixed Effects Model

**In one line:** a mixed effects model contains both fixed effects, which estimate average relationships, and random effects, which describe how groups vary around those averages.

> [!info] Before this, it helps to know
> [[Fixed Effect]] · [[Random Effect]] · [[Hierarchical Data]] (what it is built for)

## The everyday picture
A school report with two parts: the national average score for the year (fixed) and how much individual schools tend to sit above or below it (random).

## Start from zero
1. **Fixed part:** intercept and slopes, the same for all groups. y = β₀ + β₁x.
2. **Random part:** group-specific deviations drawn from a distribution. b₀ⱼ ~ Normal(0, σ²_group).
3. **Residual:** observation-level noise. ε ~ Normal(0, σ²).
4. **Full model:** yᵢⱼ = β₀ + b₀ⱼ + β₁xᵢⱼ + εᵢⱼ.
5. **Gaussian response:** linear mixed model (LMM, `lmer()`). Non-Gaussian: GLMM (`glmer()`).
6. **Why use one:** honest standard errors for grouped data, partial pooling of group estimates, estimates of how much groups vary, and predictions for new groups.
7. **It is a hierarchical model** in the Bayesian sense: group effects have their own distribution with parameters estimated from the data.

## See it
![[Random intercepts and slopes.png|700]]
*What to look at:* the orange population line and the blue group lines around it.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy)
round(c(fixef(m), sd_subject = attr(VarCorr(m)$Subject, "stddev")[[1]], sd_residual = sigma(m)), 2)
```

## In the course
Mixed models lectures and labs, Oct 6 and 8 ([[Course Website]]). [[Harrison et al. 2018]]. [[Zuur et al. 2009 Ch5]]. Worked examples: [[Christensen et al. 2020]] (GLMM with state and year random intercepts), [[Shipley et al. 2022]] (LMMs with nest as a random effect).

## Common confusions
- **"Mixed models are only for experiments."** They fit observational grouped data just as well.
- **"Random means unimportant."** It describes how an effect is modelled, not its importance.

## Explain it back
- Write the equation of a random-intercept model.

*Pass test:* you can name each part of a mixed model.

## Connections
- **Builds on:** [[Fixed Effect]], [[Random Effect]], [[Hierarchical Data]]
- **Leads to:** [[Linear Mixed Model]], [[GLMM]], [[Partial Pooling]], [[Hierarchical Model]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Why use a random effect instead of a fixed effect]], [[Complete, No and Partial Pooling]]

## Flashcards

What does a mixed effects model contain?
??
Fixed effects (average relationships) and random effects (group-level deviations drawn from a distribution).
![[Random intercepts and slopes.png]]
++++

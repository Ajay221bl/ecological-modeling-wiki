---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A mixed effects model contains both fixed effects, which estimate average relationships, and random effects, which describe how groups vary around those averages."
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

A school report might give the national average score for the year and how far individual schools tend to sit above or below it. A **mixed effects model** has both parts: [[Fixed Effect|fixed effects]], which estimate average relationships, and [[Random Effect|random effects]], which describe how groups vary around those averages. The fixed part is the intercept and slopes shared by all groups, y = β₀ + β₁x; the random part is group-specific [[Deviation|deviations]] drawn from a distribution, b₀ⱼ ~ Normal(0, σ²_group); and the residual is observation-level noise, ε ~ Normal(0, σ²). Together, yᵢⱼ = β₀ + b₀ⱼ + β₁xᵢⱼ + εᵢⱼ.

With a normal response it is a [[Linear Mixed Model]], fitted with `lmer()`; with a non-normal response a [[GLMM]], fitted with `glmer()`. It gives honest standard errors for [[Hierarchical Data]], [[Partial Pooling]] of group estimates, estimates of how much groups vary, and predictions for new groups. The figure shows the orange population line with blue group lines around it. In the code below, reaction time in `sleepstudy` starts at 251 ms and rises 10.5 ms per day of sleep deprivation; subjects differ around that with an SD of 37 ms, and the residual SD is 31 ms.

It is a [[Hierarchical Model]] in the Bayesian sense, since the group effects have their own distribution with parameters estimated from the data. It is taught in the mixed models lectures and labs of October 6 and 8, with worked examples in [[Christensen et al. 2020]] (a GLMM with state and year [[Random Intercept|random intercepts]]) and [[Shipley et al. 2022]] (LMMs with nest as a random effect) ([[Course Website]], [[Harrison et al. 2018]], [[Zuur et al. 2009 Ch5]]). Mixed models are not only for experiments; they fit observational grouped data just as well. And "random" does not mean unimportant: it describes how an effect is modelled.

![[Random intercepts and slopes.png|700]]
*What to look at:* the orange population line and the blue group lines around it.

```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy)
round(c(fixef(m), sd_subject = attr(VarCorr(m)$Subject, "stddev")[[1]], sd_residual = sigma(m)), 2)
```

## Connections
- **Builds on:** [[Fixed Effect]], [[Random Effect]], [[Hierarchical Data]], [[Deviation]], [[Random Intercept]]
- **Leads to:** [[Linear Mixed Model]], [[GLMM]], [[Partial Pooling]], [[Hierarchical Model]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Why use a random effect instead of a fixed effect]], [[Complete, No and Partial Pooling]]

## Flashcards

What does a mixed effects model contain?
??
Fixed effects (average relationships) and random effects (group-level deviations drawn from a distribution).
![[Random intercepts and slopes.png]]
++++

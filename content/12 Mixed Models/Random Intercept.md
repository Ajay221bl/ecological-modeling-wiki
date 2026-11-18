---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A random intercept lets each group have its own baseline level of the response, drawn from a normal distribution around the overall intercept, while all groups share the same slopes."
aliases:
  - "Random intercepts"
  - "Varying intercept"
  - "(1 | group)"
  - "Random intercept model"
status: seedling
---

# Random Intercept

A **random intercept** lets each group have its own [[Reference Level|baseline level]] of the response, drawn from a [[Normal Distribution|normal distribution]] around the overall [[Intercept]], while all groups share the same slopes ([[Random Effect]]). The model is yᵢⱼ = (β₀ + b₀ⱼ) + β₁xᵢⱼ + εᵢⱼ with b₀ⱼ ~ Normal(0, σ²_b), written `y ~ x + (1 | group)` in lme4. The picture is parallel lines, one per group, as in the middle panel of the figure. In the code below `coef(m)` shows the first three `sleepstudy` subjects with intercepts of 292, 174 and 188 ms but the same slope of 10.5 ms per day.

It induces correlation between observations of the same group, ρ = σ²_b / (σ²_b + σ²), the [[Intraclass Correlation]], which is the [[Compound Symmetry]] structure. It is the most common random effect and the first to try.

It assumes the effect of x is the same in every group; if it isn't, the slope's SE can be too small, so consider a [[Random Slope]] ([[Harrison et al. 2018]], [[Course Website]]). `coef()` and `ranef()` do not return the same thing: `ranef()` gives the [[Deviation|deviations]], and `coef()` adds them to the [[Fixed Effect|fixed effects]].

![[Random intercepts and slopes.png|700]]
*What to look at:* the middle panel's parallel lines.

```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy); round(head(coef(m)$Subject, 3), 1)    # intercepts differ, slope identical
```

## Connections
- **Builds on:** [[Intercept]], [[Random Effect]], [[Reference Level]], [[Normal Distribution]], [[Deviation]], [[Fixed Effect]]
- **Leads to:** [[Random Slope]], [[Compound Symmetry]], [[Intraclass Correlation]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Random Intercept vs Random Slope]]

## Flashcards

What does a random intercept allow?
??
Each group its own baseline, drawn from a normal distribution around the overall intercept, with shared slopes.
![[Random intercepts and slopes.png]]
++++

What is the lme4 syntax for a random intercept by site?
??
(1 | site).
++++

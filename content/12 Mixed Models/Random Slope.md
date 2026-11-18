---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A random slope lets the effect of a predictor differ among groups, with each group's slope drawn from a normal distribution around the average slope."
aliases:
  - "Random slopes"
  - "Varying slope"
  - "Random coefficient"
  - "(x | group)"
  - "Random slope model"
status: seedling
---

# Random Slope

Every athlete improves with training, but some improve faster: the average improvement rate is the fixed slope, and the spread of individual rates the random slope. A **random slope** lets the effect of a [[Predictor Variable|predictor]] differ among groups, with each group's slope drawn from a [[Normal Distribution|normal distribution]] around the average [[Slope]]. The model is yᵢⱼ = (β₀ + b₀ⱼ) + (β₁ + b₁ⱼ)xᵢⱼ + εᵢⱼ, written `y ~ x + (x | group)` in lme4, which fits correlated random intercepts and slopes ([[Random Intercept]], [[Correlated Random Intercepts and Slopes]]). The picture is non-parallel lines, as in the right panel of the figure; it is the random-effect analogue of an [[Interaction Term]].

In the code below the first three `sleepstudy` subjects get slopes of 19.7, 1.8 and 5.0 ms per day; the slopes vary with an SD of 5.9 and the intercepts with 24.7. A random slope needs the predictor to vary within groups, so a site-level predictor with one value per site can't have a random slope by site. It is data hungry, needing many groups and several observations per group across the range of x.

Including random slopes controls the [[Type I Error|Type I error]] of the fixed slope when slopes really vary (Schielzeth and Forstmeier 2009, cited by [[Harrison et al. 2018]]). The lab fits `(Days | Subject)` to `sleepstudy` ([[Course Website]]). But don't always fit the maximal random structure: fit the most complex one the data support.

![[Random intercepts and slopes.png|700]]
*What to look at:* the right panel's fanning lines.

```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), data = sleepstudy); round(head(coef(m)$Subject, 3), 1); round(attr(VarCorr(m)$Subject, "stddev"), 1)
```

## Connections
- **Builds on:** [[Slope]], [[Random Intercept]], [[Interaction Term]], [[Predictor Variable]], [[Normal Distribution]], [[Type I Error]]
- **Leads to:** [[Correlated Random Intercepts and Slopes]], [[Singular Fit]], [[lme4 Random-effect Syntax]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Random Intercept vs Random Slope]]

## Flashcards

What does a random slope allow?
??
The effect of a predictor to vary among groups, around an average slope.
![[Random intercepts and slopes.png]]
++++

What does an intercept-slope correlation of exactly −1 or 1 usually indicate?
??
Too little data to estimate the random slope structure.
++++

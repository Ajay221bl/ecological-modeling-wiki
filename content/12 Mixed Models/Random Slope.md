---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Random slopes"
  - "Varying slope"
  - "Random coefficient"
  - "(x | group)"
  - "Random slope model"
status: seedling
---

# Random Slope

**In one line:** a random slope lets the effect of a predictor differ among groups, with each group's slope drawn from a normal distribution around the average slope.

> [!info] Before this, it helps to know
> [[Slope]] · [[Random Intercept]] (usually fitted alongside) · [[Interaction Term]] (the fixed-effect analogue)

## The everyday picture
Every athlete improves with training, but some improve faster. The average improvement rate is the fixed slope; the spread of individual rates is the random slope.

## Start from zero
1. **Model:** yᵢⱼ = (β₀ + b₀ⱼ) + (β₁ + b₁ⱼ)xᵢⱼ + εᵢⱼ.
2. **lme4:** `y ~ x + (x | group)` fits correlated random intercepts and slopes.
3. **Picture:** non-parallel lines.
4. **Needs the predictor to vary within groups.** A site-level predictor (one value per site) can't have a random slope by site.
5. **Data hungry:** many groups and several observations per group across the range of x.
6. **Including random slopes controls Type I error for the fixed slope** when slopes really vary (Schielzeth and Forstmeier 2009, cited by Harrison et al.).
7. **Signs of too little data:** singular fit, or an intercept-slope correlation of exactly ±1. Then try `(x || group)` (no correlation) or drop the slope.

## See it
![[Random intercepts and slopes.png|700]]
*What to look at:* the right panel's fanning lines.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), data = sleepstudy); round(head(coef(m)$Subject, 3), 1); round(attr(VarCorr(m)$Subject, "stddev"), 1)
```

## In the course
`sleepstudy` with `(Days | Subject)` in the linear mixed models lab ([[Course Website]]). [[Harrison et al. 2018]].

## Common confusions
- **"Fit the maximal random structure always."** Fit the most complex structure the data support (Harrison et al.).

## Explain it back
- Why can't a site-level predictor have a random slope by site?

*Pass test:* you can fit and diagnose a random slope.

## Connections
- **Builds on:** [[Slope]], [[Random Intercept]], [[Interaction Term]]
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

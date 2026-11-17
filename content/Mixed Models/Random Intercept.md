---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Random intercepts"
  - "Varying intercept"
  - "(1 | group)"
  - "Random intercept model"
status: seedling
---

# Random Intercept

**In one line:** a random intercept lets each group have its own baseline level of the response, drawn from a normal distribution around the overall intercept, while all groups share the same slopes.

> [!info] Before this, it helps to know
> [[Intercept]] · [[Random Effect]]

## Start from zero
1. **Model:** yᵢⱼ = (β₀ + b₀ⱼ) + β₁xᵢⱼ + εᵢⱼ, with b₀ⱼ ~ Normal(0, σ²_b).
2. **lme4 syntax:** `y ~ x + (1 | group)`.
3. **Picture:** parallel lines, one per group.
4. **It induces correlation** between observations of the same group (compound symmetry): ρ = σ²_b / (σ²_b + σ²).
5. **The most common random effect** and the first to try.
6. **Assumes the effect of x is the same in every group.** If it isn't, the slope's SE can be too small; consider a random slope.

## See it
![[Random intercepts and slopes.png|700]]
*What to look at:* the middle panel's parallel lines.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy); round(head(coef(m)$Subject, 3), 1)    # intercepts differ, slope identical
```

## In the course
Linear mixed models lab ([[Course Website]]). [[Harrison et al. 2018]].

## Common confusions
- **"coef() and ranef() return the same thing."** ranef() gives deviations; coef() adds them to the fixed effects.

## Explain it back
- What does coef(m) show for a random-intercept model?

*Pass test:* you can fit and interpret a random intercept.

## Connections
- **Builds on:** [[Intercept]], [[Random Effect]]
- **Leads to:** [[Random Slope]], [[Compound Symmetry]], [[Intraclass Correlation]]
- **Part of:** [[MOC - Mixed Models]], molecular note [[Random Intercept vs Random Slope]]

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

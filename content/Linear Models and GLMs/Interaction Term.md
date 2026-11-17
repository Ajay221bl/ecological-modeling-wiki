---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Interaction"
  - "Interaction effect"
  - "Effect modification"
  - "x1:x2"
status: seedling
---

# Interaction Term

**In one line:** an interaction term lets the effect of one predictor depend on the value of another.

> [!info] Before this, it helps to know
> [[Multiple Regression]] (the additive model it extends) · [[Slope]] (what gets modified) · [[Coplot]] (how to see one)

## The everyday picture
Fertiliser and water. Fertiliser helps a watered plant a lot and a parched plant not at all. You can't state "the effect of fertiliser" without asking "at what level of water?"

## A tiny example
richness = 12 − 0.05·tree + 3·burned − 0.15·tree·burned.
- Unburned plots: slope for tree cover is −0.05.
- Burned plots: slope is −0.05 − 0.15 = −0.20.
- The interaction coefficient −0.15 is the difference between the two slopes.

## Start from zero
1. **Additive model:** y = β₀ + β₁x₁ + β₂x₂. The effect of x₁ is β₁ whatever x₂ is. Lines are parallel.
2. **Add the product:** y = β₀ + β₁x₁ + β₂x₂ + β₃x₁x₂.
3. **Regroup:** y = β₀ + (β₁ + β₃x₂)x₁ + β₂x₂. *The slope of x₁ is now β₁ + β₃x₂. It changes with x₂.*
4. **β₃ says how much the slope of x₁ changes per unit of x₂.**
5. **β₁ is now the slope of x₁ only when x₂ = 0.** The "main effects" are conditional.
6. **Types:** factor × factor (differences differ), factor × numeric (slopes differ between groups), numeric × numeric (a twisted surface).
7. **In R:** `x1 * x2` expands to `x1 + x2 + x1:x2`.
8. **Always keep the main effects when including their interaction.**
9. **Interpret with a plot of predictions,** never from the table alone.
10. **Cost:** interactions need much more data to estimate than main effects.

## See it
![[Interaction lines.png|700]]
*What to look at:* left, parallel lines (no interaction). Right, lines with different slopes.

## In R
```r
set.seed(7); d <- data.frame(tree = runif(200, 0, 60), burn = factor(rep(c("no", "yes"), 100)))
d$rich <- 12 - 0.05 * d$tree + 3 * (d$burn == "yes") - 0.15 * d$tree * (d$burn == "yes") + rnorm(200)
m <- lm(rich ~ tree * burn, d); round(coef(m), 3)
c(slope_unburned = coef(m)[["tree"]], slope_burned = coef(m)[["tree"]] + coef(m)[["tree:burnyes"]])
anova(lm(rich ~ tree + burn, d), m)$`Pr(>F)`[2]              # the interaction clearly improves the fit
```

## In the course
Step 7 of the exploration protocol. Homework 1 tests a year by treatment interaction ([[Course Website]]). [[Zuur et al. 2009 Appendix A]].

## Common confusions
- **"Interaction means the predictors are correlated."** That is collinearity. Interaction is about effects depending on each other.
- **"The main effect is the overall effect."** With an interaction present, it is the effect at zero of the other variable.

## Explain it back
- In y = b0 + b1·x + b2·z + b3·x·z, what is the slope of x when z = 2?

*Pass test:* you can compute group-specific slopes from an interaction model.

## Connections
- **Builds on:** [[Multiple Regression]], [[Slope]]
- **Leads to:** [[Coplot]], [[Centering]], [[Two-way ANOVA]], [[ANCOVA]], [[Random Slope]]
- **Part of:** [[MOC - Linear Models and GLMs]], molecular note [[Additive vs Interaction Model]]

## Flashcards

What does an interaction term do?
??
Allows the effect of one predictor to vary with the level of another.
![[Interaction lines.png]]
++++

In y = β₀ + β₁x₁ + β₂x₂ + β₃x₁x₂, what is the slope of x₁?
??
β₁ + β₃x₂.
++++

What does `y ~ a * b` expand to in R?
??
y ~ a + b + a:b.
++++

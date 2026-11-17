---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "An interaction term lets the effect of one predictor depend on the value of another."
aliases:
  - "Interaction"
  - "Interaction effect"
  - "Effect modification"
  - "x1:x2"
status: seedling
---

# Interaction Term

Fertiliser helps a watered plant a lot and a parched plant not at all, so you cannot state "the effect of fertiliser" without asking "at what level of water?". An **interaction term** lets the effect of one predictor depend on the value of another. Start from the additive model y = β₀ + β₁x₁ + β₂x₂, where the effect of x₁ is β₁ whatever x₂ is and the lines are parallel ([[Multiple Regression]]). Add the product: y = β₀ + β₁x₁ + β₂x₂ + β₃x₁x₂. Regrouping gives y = β₀ + (β₁ + β₃x₂)x₁ + β₂x₂, so the [[Slope]] of x₁ is now β₁ + β₃x₂, changing with x₂. β₃ says how much the slope of x₁ changes per unit of x₂.

An example: richness = 12 − 0.05·tree + 3·burned − 0.15·tree·burned. On unburned plots the slope for tree cover is −0.05; on burned plots it is −0.05 − 0.15 = −0.20. The interaction coefficient −0.15 is the difference between the two slopes. The code below simulates these data, fits `rich ~ tree * burn`, recovers both slopes, and shows the interaction clearly improves the fit. The figure contrasts parallel lines, no interaction, with lines of different slopes. Interactions come in three types: factor × factor (differences differ), factor × numeric (slopes differ between groups, as here) and numeric × numeric (a twisted surface). In R, `x1 * x2` expands to `x1 + x2 + x1:x2`.

Three rules follow. Keep the main effects when including their interaction. Read the "main effect" β₁ as the slope of x₁ only when x₂ = 0, not as an overall effect; [[Centering]] makes zero a meaningful value. And interpret with a plot of predictions, never from the table alone; a [[Coplot]] helps you spot one in the data first. Interactions need much more data to estimate than main effects. Do not confuse interaction with correlation between predictors, which is [[Collinearity]]; interaction is about effects depending on each other. They appear as the year-by-treatment question of Homework 1, in [[Two-way ANOVA]] and [[ANCOVA]], and as a [[Random Slope]] in mixed models ([[Zuur et al. 2009 Appendix A]], [[Course Website]]).

![[Interaction lines.png|700]]
*What to look at:* left, parallel lines (no interaction). Right, lines with different slopes.

```r
set.seed(7); d <- data.frame(tree = runif(200, 0, 60), burn = factor(rep(c("no", "yes"), 100)))
d$rich <- 12 - 0.05 * d$tree + 3 * (d$burn == "yes") - 0.15 * d$tree * (d$burn == "yes") + rnorm(200)
m <- lm(rich ~ tree * burn, d); round(coef(m), 3)
c(slope_unburned = coef(m)[["tree"]], slope_burned = coef(m)[["tree"]] + coef(m)[["tree:burnyes"]])
anova(lm(rich ~ tree + burn, d), m)$`Pr(>F)`[2]              # the interaction clearly improves the fit
```

## Connections
- **Builds on:** [[Multiple Regression]], [[Slope]]
- **Leads to:** [[Coplot]], [[Centering]], [[Two-way ANOVA]], [[ANCOVA]], [[Random Slope]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Additive vs Interaction Model]]

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

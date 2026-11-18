---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Two-way ANOVA is a linear model with two categorical predictors, optionally with their interaction."
aliases:
  - "Factorial ANOVA"
  - "Two-factor ANOVA"
status: seedling
---

# Two-way ANOVA

A baking trial uses two ovens and three recipes. You can ask whether ovens differ, whether recipes differ, and whether the best recipe depends on the oven. **Two-way ANOVA** is a [[Linear Model|linear model]] with two categorical [[Predictor Variable|predictors]], either additive, y ~ A + B, or with their interaction, y ~ A * B ([[ANOVA]], [[Interaction Term]]). It asks three questions: the main effect of A, the main effect of B, and the A × B interaction.

Test the interaction first, because if it is present the main effects do not have a single meaning: the effect of one factor depends on the other. An [[Interaction Plot|interaction plot]] of group means joined by lines shows it, with parallel lines meaning no interaction. In the code below, as in Homework 1, abundance is simulated by year and treatment with burning helping more in 2021; `anova()` flags the interaction, the interaction plot shows non-parallel lines, and the table of means shows the burn effect is about 2 in 2020 and about 5 in 2021 ([[Course Website]]).

With [[Balanced Data]], equal numbers in every cell, the three sums of squares are separate and the order of terms does not matter. With unbalanced data they overlap, and `anova()` results depend on the order of terms; that is where [[Sum-to-zero Contrasts]] and other test types come in. The common mistake is to read significant main effects as usual alongside a significant interaction. When one factor is nested inside another rather than crossed with it, see [[Nested Experimental Design]].

```r
set.seed(8); d <- expand.grid(year = factor(c(2020, 2021)), trt = factor(c("control", "burn")), rep = 1:6)
d$y <- 10 + 2 * (d$trt == "burn") + 1 * (d$year == 2021) + 3 * (d$trt == "burn" & d$year == 2021) + rnorm(24)
anova(lm(y ~ year * trt, d))
with(d, interaction.plot(year, trt, y))                 # non-parallel lines
round(tapply(d$y, list(d$year, d$trt), mean), 1)
```

## Connections
- **Builds on:** [[ANOVA]], [[Interaction Term]], [[Linear Model]], [[Predictor Variable]], [[Interaction Plot]]
- **Leads to:** [[Balanced Data]], [[Sum-to-zero Contrasts]], [[Nested Experimental Design]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What three effects does a two-way ANOVA with interaction estimate?
??
Two main effects and their interaction.
++++

Which effect should be examined first?
??
The interaction.
++++

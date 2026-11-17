---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Factorial ANOVA"
  - "Two-factor ANOVA"
status: seedling
---

# Two-way ANOVA

**In one line:** two-way ANOVA is a linear model with two categorical predictors, optionally with their interaction.

> [!info] Before this, it helps to know
> [[ANOVA]] (one factor) · [[Interaction Term]] (the extra question) · [[Balanced Data]] (which keeps it simple)

## The everyday picture
A baking trial with two ovens and three recipes. You can ask: do ovens differ? Do recipes differ? And does the best recipe depend on the oven?

## Start from zero
1. **Model:** y ~ A + B (additive) or y ~ A * B (with interaction).
2. **Three questions:** main effect of A, main effect of B, A × B interaction.
3. **Test the interaction first.** If it is present, the main effects don't have a single meaning.
4. **Visualise with an interaction plot:** group means joined by lines. Parallel lines mean no interaction.
5. **With balanced data** the three sums of squares are separate and order doesn't matter.
6. **With unbalanced data** they overlap and `anova()` results depend on the order of terms.

## In R
```r
set.seed(8); d <- expand.grid(year = factor(c(2020, 2021)), trt = factor(c("control", "burn")), rep = 1:6)
d$y <- 10 + 2 * (d$trt == "burn") + 1 * (d$year == 2021) + 3 * (d$trt == "burn" & d$year == 2021) + rnorm(24)
anova(lm(y ~ year * trt, d))
with(d, interaction.plot(year, trt, y))                 # non-parallel lines
round(tapply(d$y, list(d$year, d$trt), mean), 1)
```

## In the course
Homework 1: abundance by year and treatment ([[Course Website]]).

## Common confusions
- **"Significant main effects can be read as usual alongside a significant interaction."** The interaction says the effect of one factor depends on the other.

## Explain it back
- What does a set of non-parallel lines in an interaction plot mean?

*Pass test:* you can fit and read a two-factor model with an interaction.

## Connections
- **Builds on:** [[ANOVA]], [[Interaction Term]]
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

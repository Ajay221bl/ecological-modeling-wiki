---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Breakpoint model"
  - "Piecewise regression"
  - "Broken-stick model"
  - "Hockey-stick model"
  - "Segmented regression"
status: seedling
---

# Threshold Model

**In one line:** a threshold model lets the relationship between response and predictor change abruptly at a particular value of the predictor, called the breakpoint.

> [!info] Before this, it helps to know
> [[Linear Function]] (each segment) · [[Dummy Coding]] (how the switch is coded) · [[Deterministic Functions in Ecology]] (the family)

## The everyday picture
Water heated on a stove. Its temperature climbs steadily, then at 100 degrees it stops climbing however much heat you add. Below and above the boiling point the system follows different rules.

## Start from zero
1. **Choose or estimate a breakpoint c.**
2. **Below c one line. Above c another.**
3. **Continuous version (broken stick):** y = β₀ + β₁x + β₂·max(0, x − c). The slope is β₁ below c and β₁ + β₂ above.
4. **Step version:** the level jumps at c.
5. **If c is known** it is an ordinary linear model.
6. **If c must be estimated** the model is nonlinear in c. Fit by trying a grid of c values and keeping the best, or with a dedicated method.
7. **Why ecologists care:** management often turns on thresholds. How much habitat loss before a population collapses? What tree cover before grassland birds vanish?
8. **Caution:** noisy smooth curves can masquerade as thresholds. Compare with a smooth alternative.

## See it
![[Threshold model.png|700]]
*What to look at:* two straight segments meeting at the breakpoint.

## In R
```r
set.seed(14); x <- runif(150, 0, 60); y <- 12 - 0.3 * pmax(0, x - 25) + rnorm(150)          # flat until 25% cover, then declining
rss <- sapply(5:55, function(c) deviance(lm(y ~ x + pmax(0, x - c)))); (5:55)[which.min(rss)]   # estimated breakpoint
round(coef(lm(y ~ x + pmax(0, x - 25))), 2)
```

## In the course
[[Hobbs and Hooten 2015 Ch2]] lists threshold functions. Thresholds in tree cover are a theme of the Loess Canyons examples.

## Common confusions
- **"A threshold found by eye is real."** Test it against a smooth curve and report uncertainty in the breakpoint.

## Explain it back
- Write the broken-stick equation and give the slope on each side.

*Pass test:* you can fit a broken-stick model with `pmax()`.

## Connections
- **Builds on:** [[Linear Function]], [[Dummy Coding]]
- **Leads to:** [[Generalized Additive Model]], [[Nonlinear Function]], [[Hill Function]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What is a threshold (breakpoint) model?
??
A model in which the response-predictor relationship changes at a specific predictor value.
![[Threshold model.png]]
++++

How can a continuous broken-stick term be coded in R?
??
pmax(0, x − c), where c is the breakpoint.
++++

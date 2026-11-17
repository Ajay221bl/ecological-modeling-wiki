---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A threshold model lets the relationship between response and predictor change abruptly at a particular value of the predictor, called the breakpoint."
aliases:
  - "Breakpoint model"
  - "Piecewise regression"
  - "Broken-stick model"
  - "Hockey-stick model"
  - "Segmented regression"
status: seedling
---

# Threshold Model

Water on a stove climbs steadily in temperature, then at 100 degrees it stops climbing however much heat you add: below and above the boiling point the system follows different rules. A **threshold model** lets the relationship between response and predictor change abruptly at a particular value of the predictor, called the breakpoint c. Below c there is one line and above it another ([[Linear Function]]). In the continuous "broken stick" version, y = β₀ + β₁x + β₂·max(0, x − c), the slope is β₁ below c and β₁ + β₂ above; the max(0, x − c) term is zero until x passes c, acting as a switch ([[Dummy Coding]]). In the step version, the level jumps at c instead. The figure shows two straight segments meeting at the breakpoint.

If c is known, this is an ordinary linear model. If c must be estimated, the model is nonlinear in c, and a simple fit tries a grid of c values and keeps the one with the smallest residual sum of squares. The code below simulates richness that is flat until 25% tree cover and then declines, recovers a breakpoint near 25 by grid search, and fits the broken stick at c = 25: slope about 0 below and −0.3 above.

Ecologists care because management often turns on thresholds: how much habitat loss before a population collapses, or what tree cover before grassland birds vanish, a theme of the Loess Canyons examples ([[Hobbs and Hooten 2015 Ch2]], [[Deterministic Functions in Ecology]]). The caution is that noisy smooth curves can masquerade as thresholds, so a threshold found by eye is not proof. Compare the model with a smooth alternative such as a [[Generalized Additive Model]] or a [[Hill Function]], and report uncertainty in the breakpoint ([[Nonlinear Function]]).

![[Threshold model.png|700]]
*What to look at:* two straight segments meeting at the breakpoint.

```r
set.seed(14); x <- runif(150, 0, 60); y <- 12 - 0.3 * pmax(0, x - 25) + rnorm(150)          # flat until 25% cover, then declining
rss <- sapply(5:55, function(c) deviance(lm(y ~ x + pmax(0, x - c)))); (5:55)[which.min(rss)]   # estimated breakpoint
round(coef(lm(y ~ x + pmax(0, x - 25))), 2)
```

## Connections
- **Builds on:** [[Linear Function]], [[Dummy Coding]]
- **Leads to:** [[Generalized Additive Model]], [[Nonlinear Function]], [[Hill Function]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

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

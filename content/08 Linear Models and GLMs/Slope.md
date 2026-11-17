---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "β₁"
  - "Regression slope"
status: seedling
---

# Slope

**In one line:** the slope is the change in the expected response for a one-unit increase in a predictor.

> [!info] Before this, it helps to know
> [[Rate of Change]] (the general idea) · [[Linear Function]] (where it appears)

## The everyday picture
The steepness of a hill path. A slope of 0.1 means you climb 10 cm for each metre forward. A negative slope means you descend.

## A tiny example
Slope −0.17 species per percent tree cover. Compare two plots that differ by 10% cover: the more wooded one is expected to hold 1.7 fewer species.

## Start from zero
1. **Units:** units of y per unit of x. Always state them.
2. **Sign:** direction of the relationship.
3. **Size:** depends on the units of x. Per metre or per kilometre changes the number by a factor of 1000 without changing the relationship.
4. **Interpret as a comparison:** "plots one unit higher in x average β₁ more in y".
5. **Slope = cov(x, y) / var(x).** It is the correlation rescaled into real units.
6. **Why it is usually the target of the study:** the slope is the estimated effect size. Its uncertainty, not just its sign, is the result.

## In R
```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
coef(lm(rich ~ tree, d))[2]
cov(d$tree, d$rich) / var(d$tree)                  # the same number
coef(lm(rich ~ I(tree / 10), d))[2]                # per 10% cover: -1.7
```

## Common confusions
- **"A small slope means a weak effect."** It may just mean x is in small units.
- **"The slope says what happens if I change x."** Only under causal assumptions. Safely, it compares units that differ in x.

## Explain it back
- Convert a slope of 0.002 per metre to per kilometre.

*Pass test:* you can state a slope with units and as a comparison.

## Connections
- **Builds on:** [[Rate of Change]], [[Linear Function]]
- **Leads to:** [[Regression Coefficient]], [[Effect Size]], [[Scaling Predictors]], [[Random Slope]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does a regression slope tell you?
??
The expected change in the response for a one-unit increase in the predictor.
++++

How is the simple regression slope related to covariance?
??
slope = cov(x, y) / var(x).
++++

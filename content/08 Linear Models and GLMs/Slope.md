---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The slope is the change in the expected response for a one-unit increase in a predictor."
aliases:
  - "β₁"
  - "Regression slope"
status: seedling
---

# Slope

On a hill path, a slope of 0.1 means you climb 10 cm for each metre forward, and a negative slope means you descend. In a model, the **slope** is the change in the expected response for a one-unit increase in a [[Predictor Variable|predictor]] ([[Rate of Change]], [[Linear Function]]). Its units are units of y per unit of x, which should always be stated, and its sign gives the direction of the relationship. A slope of −0.17 species per percent tree cover means that of two plots differing by 10% cover, the more wooded one is expected to hold 1.7 fewer species.

The size of a slope depends on the units of x: per metre or per kilometre changes the number by a factor of 1,000 without changing the relationship. So a slope of 0.002 per metre is 2 per kilometre. In the code below, the slope per 10% cover is −1.7 rather than −0.17 ([[Scaling Predictors]]). The slope can also be computed directly as cov(x, y) / var(x), the correlation rescaled into real units, which gives the same number as `lm()`.

The slope is usually the target of the study, because it is the estimated [[Effect Size]], and its uncertainty, not just its sign, is the result ([[Regression Coefficient]]). Read it as a comparison, "plots one unit higher in x average β₁ more in y". Two confusions: a small slope does not mean a weak effect, since x may simply be in small units; and the slope does not say what happens if you change x unless you make causal assumptions, since safely it only compares units that differ in x. Letting the slope vary between groups gives a [[Random Slope]].

```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
coef(lm(rich ~ tree, d))[2]
cov(d$tree, d$rich) / var(d$tree)                  # the same number
coef(lm(rich ~ I(tree / 10), d))[2]                # per 10% cover: -1.7
```

## Connections
- **Builds on:** [[Rate of Change]], [[Linear Function]], [[Predictor Variable]]
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

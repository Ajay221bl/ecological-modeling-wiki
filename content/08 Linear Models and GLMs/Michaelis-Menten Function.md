---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The Michaelis-Menten function is a curve that rises steeply at first and then levels off toward a maximum, used when a response saturates as its driver increases."
aliases:
  - "Saturating function"
  - "Type II functional response"
  - "Monod function"
status: seedling
---

# Michaelis-Menten Function

A cashier with few customers doubles sales when customers double. As the queue lengthens, the cashier is working flat out and extra customers add nothing; sales per hour level off at the cashier's top speed. The **Michaelis-Menten function** is that curve: it rises steeply at first and then levels off toward a maximum, y = a·x / (b + x). a is the [[Asymptote]], the maximum y approaches. b is the half-saturation constant, the x at which y = a/2. At small x the curve is nearly a line with slope a/b; at large x it is nearly flat at a.

With maximum intake a = 8 g/h and half-saturation b = 2 plants/m², intake at density 2 is 8 × 2/(2 + 2) = 4, half the maximum; at density 18 it is 8 × 18/20 = 7.2; at density 200 it is 7.9. The code below computes these, then simulates noisy data from the curve and recovers a = 8 and b = 2 with `nls()` ([[Nonlinear Least Squares]]).

In ecology it comes from handling time: a predator needs time to deal with each prey item, so its intake saturates, and Holling's type II [[Functional Response]] is the same curve. It is also used for photosynthesis against light, nutrient uptake and species accumulation ([[Hobbs and Hooten 2015 Ch2]], [[Deterministic Functions in Ecology]]). b is not where the curve flattens; it is where the curve reaches half its maximum. A ceiling approached faster is the [[Monomolecular Function]], and an S-shaped version is the [[Hill Function]].

```r
mm <- function(x, a = 8, b = 2) a * x / (b + x); mm(c(2, 18, 200))
set.seed(13); x <- runif(60, 0, 30); y <- mm(x) + rnorm(60, 0, 0.5)
coef(nls(y ~ a * x / (b + x), start = list(a = 5, b = 1)))          # recovers a = 8, b = 2
```

## Connections
- **Builds on:** [[Asymptote]]
- **Leads to:** [[Monomolecular Function]], [[Hill Function]], [[Functional Response]], [[Nonlinear Least Squares]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

Michaelis-Menten equation?
??
y = a·x / (b + x).
++++

What do its two parameters mean?
??
a is the asymptotic maximum. b is the value of x at which y reaches half of a.
++++

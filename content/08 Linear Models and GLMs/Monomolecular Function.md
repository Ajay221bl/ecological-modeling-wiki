---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The monomolecular function is a curve that approaches a ceiling by closing a constant fraction of the remaining gap with each unit step."
aliases:
  - "Asymptotic exponential"
  - "Negative exponential"
  - "von Bertalanffy growth"
status: seedling
---

# Monomolecular Function

Fill a cup by closing 30% of the remaining gap to the brim each minute: big gains at first, tiny ones near the top. The **monomolecular function** approaches a ceiling the same way, closing a constant fraction of the remaining gap with each unit step: y = a·(1 − e^(−b·x)). a is the [[Asymptote]] and b the rate of approach, with larger b reaching the ceiling sooner. It starts at zero with slope a·b, steepest at the start, and the gap to the ceiling shrinks exponentially: a − y = a·e^(−bx) ([[Exponential Function]]).

With a = 8 and b = 0.5, y is 3.15, 5.06, 7.34 and 7.95 at x = 1, 2, 5 and 10. The code below checks that the gap to 8 shrinks by the same factor, e^(−0.5) = 0.61, with every step, then draws the curve beside a [[Michaelis-Menten Function]] with the same asymptote. Both saturate without an S shape, but the monomolecular reaches its ceiling faster.

It describes body growth in length (the von Bertalanffy curve), light interception by a canopy and recovery after disturbance ([[Hobbs and Hooten 2015 Ch2]]). Despite the exponential in its formula it is not exponential growth: it is exponential decay of the gap to an asymptote. A related asymmetric S-shaped curve is the [[Gompertz Function]].

```r
mono <- function(x, a = 8, b = 0.5) a * (1 - exp(-b * x)); round(mono(c(1, 2, 5, 10)), 2)
gap <- 8 - mono(0:4); gap[-1] / gap[-5]                       # the gap shrinks by the same factor each step: exp(-0.5)
curve(mono(x), 0, 12); curve(8 * x / (2 + x), add = TRUE, col = 2)      # red: Michaelis-Menten approaches more slowly
```

## Connections
- **Builds on:** [[Exponential Function]], [[Asymptote]]
- **Leads to:** [[Michaelis-Menten Function]], [[Gompertz Function]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

Monomolecular function?
??
y = a·(1 − e^(−b·x)): rises from 0 toward asymptote a at rate b.
++++

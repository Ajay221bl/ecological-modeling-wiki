---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Asymptotic exponential"
  - "Negative exponential"
  - "von Bertalanffy growth"
status: seedling
---

# Monomolecular Function

**In one line:** the monomolecular function is a curve that approaches a ceiling by closing a constant fraction of the remaining gap with each unit step.

> [!info] Before this, it helps to know
> [[Exponential Function]] (it uses decay) · [[Asymptote]] (the ceiling)

## The everyday picture
Filling a leaky cup less and less. Each minute you close 30% of the remaining gap to the brim. Big gains at first, tiny ones near the top.

## Start from zero
1. **y = a·(1 − e^(−b·x)).**
2. **a is the asymptote.**
3. **b is the rate of approach.** Larger b reaches the ceiling sooner.
4. **Starts at zero with slope a·b,** steepest at the start.
5. **The gap to the ceiling shrinks exponentially:** a − y = a·e^(−bx).
6. **Compared with Michaelis-Menten:** it reaches its ceiling faster. Both saturate without an S shape.
7. **Uses:** body growth in length (von Bertalanffy), light interception by canopy, recovery after disturbance.

## In R
```r
mono <- function(x, a = 8, b = 0.5) a * (1 - exp(-b * x)); round(mono(c(1, 2, 5, 10)), 2)
gap <- 8 - mono(0:4); gap[-1] / gap[-5]                       # the gap shrinks by the same factor each step: exp(-0.5)
curve(mono(x), 0, 12); curve(8 * x / (2 + x), add = TRUE, col = 2)      # red: Michaelis-Menten approaches more slowly
```

## In the course
[[Hobbs and Hooten 2015 Ch2]].

## Common confusions
- **"It is exponential growth."** It is exponential decay of the gap to an asymptote.

## Explain it back
- What decays exponentially in this function?

*Pass test:* you can describe the curve and its two parameters.

## Connections
- **Builds on:** [[Exponential Function]], [[Asymptote]]
- **Leads to:** [[Michaelis-Menten Function]], [[Gompertz Function]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

Monomolecular function?
??
y = a·(1 − e^(−b·x)): rises from 0 toward asymptote a at rate b.
++++

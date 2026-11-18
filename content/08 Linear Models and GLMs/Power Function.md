---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A power function has the form y = a·x^b, in which multiplying x by some factor always multiplies y by a fixed factor."
aliases:
  - "Power law"
  - "y = a x^b"
status: seedling
---

# Power Function

Double the side of a square and its area becomes 4 times larger, whether the side went from 1 to 2 or from 50 to 100. A **power function** has the form y = a·x^b, in which multiplying x by some factor always multiplies y by a fixed factor ([[Exponent]]). a sets the height and b the curvature. b = 1 gives a [[Equation of a Line|straight line]] through zero; 0 < b < 1 rises and bends over without reaching a ceiling; b > 1 accelerates; b < 0 declines.

It is *scale-free*: doubling x multiplies y by 2^b at any x. In the code below, with a = 2 and b = 0.6, each doubling of x multiplies y by 2^0.6 = 1.52, whatever x you start from. Taking logs of both sides gives a straight line, so power functions are fitted on log-log axes ([[Log-log Model]]).

They describe [[Allometry]], species-area relationships (S = cA^z), and the variance-mean relationship of counts known as Taylor's power law ([[Hobbs and Hooten 2015 Ch2]]). Do not confuse a power function with an exponential. In a·x^b, x is the base; in a·b^x, x is the exponent ([[Exponential Function]]). The difference matters, because an exponential eventually outruns any power.

```r
f <- function(x, a = 2, b = 0.6) a * x^b
f(c(1, 2, 4, 8)); f(c(2, 4, 8)) / f(c(1, 2, 4)); 2^0.6          # constant ratio for each doubling
curve(f(x), 0, 10); curve(2 * x^1.5, add = TRUE, col = 2)
```

## Connections
- **Builds on:** [[Exponent]], [[Equation of a Line]]
- **Leads to:** [[Allometry]], [[Log-log Model]], [[Exponential Function]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is the form of a power function?
??
y = a · x^b.
++++

How does a power function appear on log-log axes?
??
As a straight line with slope b.
++++

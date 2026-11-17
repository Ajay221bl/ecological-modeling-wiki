---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The Hill function is a saturating curve with an extra exponent that can make it S-shaped: slow at first, then steep, then levelling off."
aliases:
  - "Type III functional response"
  - "Sigmoid saturating function"
status: seedling
---

# Hill Function

Some predators ignore rare prey. At low prey density they barely bother; once prey are common enough to be worth learning to hunt, intake climbs steeply; then handling time caps it. The **Hill function** is a saturating curve with an extra exponent that can produce this S shape: y = a·x^q / (b^q + x^q). a is the asymptote and b the x at half the maximum, as in the [[Michaelis-Menten Function]], which is the special case q = 1. The new parameter q controls the shape ([[Exponent]]): q > 1 gives an S-curve, and the larger q, the more switch-like it becomes.

In the code below, with a = 8 and b = 3, both q = 1 and q = 3 give y = 4 at x = 3, the half-point. But at x = 1 the q = 3 curve is far lower (0.29 against 2), and at x = 9 far higher (7.71 against 6): a lag at low x, then a steep rise. The plot adds q = 10, which is almost a step.

It is used for type III [[Functional Response|functional responses]], dose-response curves and cooperative processes ([[Hobbs and Hooten 2015 Ch2]]). The third parameter matters because it lets the data say whether the response has a lag at low x. Not every S-curve is logistic: Hill, Gompertz and the [[Logistic Function]] are all S-shaped, but differ in symmetry and in their behaviour near zero. A truly abrupt switch is a [[Threshold Model]].

```r
hill <- function(x, a = 8, b = 3, q = 1) a * x^q / (b^q + x^q)
round(rbind(q1 = hill(c(1, 3, 9)), q3 = hill(c(1, 3, 9), q = 3)), 2)       # same half-point, different shape
curve(hill(x), 0, 12); curve(hill(x, q = 3), add = TRUE, col = 2); curve(hill(x, q = 10), add = TRUE, col = 4)
```

## Connections
- **Builds on:** [[Michaelis-Menten Function]]
- **Leads to:** [[Logistic Function]], [[Functional Response]], [[Threshold Model]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

Hill function?
??
y = a·x^q / (b^q + x^q). With q = 1 it is Michaelis-Menten. With q > 1 it is sigmoid.
++++

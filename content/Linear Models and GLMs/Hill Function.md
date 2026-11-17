---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Type III functional response"
  - "Sigmoid saturating function"
status: seedling
---

# Hill Function

**In one line:** the Hill function is a saturating curve with an extra exponent that can make it S-shaped: slow at first, then steep, then levelling off.

> [!info] Before this, it helps to know
> [[Michaelis-Menten Function]] (the special case q = 1) · [[Exponent]] (the new parameter)

## The everyday picture
A predator that ignores rare prey. At low prey density it barely bothers. Once prey are common enough to be worth learning to hunt, its intake climbs steeply. Then handling time caps it.

## Start from zero
1. **y = a·x^q / (b^q + x^q).**
2. **a:** the asymptote. **b:** the x at half the maximum.
3. **q controls the shape.** q = 1 is Michaelis-Menten. q > 1 gives an S-curve. The larger q, the more switch-like.
4. **Uses:** type III functional responses, dose-response curves, cooperative processes.
5. **Why a third parameter matters:** it lets the data say whether the response has a lag at low x.

## In R
```r
hill <- function(x, a = 8, b = 3, q = 1) a * x^q / (b^q + x^q)
round(rbind(q1 = hill(c(1, 3, 9)), q3 = hill(c(1, 3, 9), q = 3)), 2)       # same half-point, different shape
curve(hill(x), 0, 12); curve(hill(x, q = 3), add = TRUE, col = 2); curve(hill(x, q = 10), add = TRUE, col = 4)
```

## In the course
[[Hobbs and Hooten 2015 Ch2]].

## Common confusions
- **"Any S-curve is logistic."** Hill, Gompertz and logistic are all S-shaped with different symmetry and behaviour at zero.

## Explain it back
- What does q do?

*Pass test:* you can relate the Hill function to Michaelis-Menten.

## Connections
- **Builds on:** [[Michaelis-Menten Function]]
- **Leads to:** [[Logistic Function]], [[Functional Response]], [[Threshold Model]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

Hill function?
??
y = a·x^q / (b^q + x^q). With q = 1 it is Michaelis-Menten. With q > 1 it is sigmoid.
++++

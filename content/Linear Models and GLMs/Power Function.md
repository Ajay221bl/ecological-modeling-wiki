---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Power law"
  - "y = a x^b"
status: seedling
---

# Power Function

**In one line:** a power function has the form y = a·x^b, in which multiplying x by some factor always multiplies y by a fixed factor.

> [!info] Before this, it helps to know
> [[Exponent]] (the b) · [[Log-log Model]] (how it is fitted)

## The everyday picture
A square's area as its side grows. Double the side and the area is 4 times larger, whether the side went from 1 to 2 or from 50 to 100.

## Start from zero
1. **y = a·x^b.** a sets the height, b the curvature.
2. **b = 1:** a straight line through zero. **0 < b < 1:** rises and bends over, without a ceiling. **b > 1:** accelerates. **b < 0:** declines.
3. **Scale-free:** doubling x multiplies y by 2^b at any x.
4. **Straight on log-log axes.**
5. **Uses:** allometry, species-area relationships (S = cA^z), the variance-mean relation of counts (Taylor's power law).
6. **Different from an exponential:** in a power function x is the base. In an exponential x is the exponent.

## In R
```r
f <- function(x, a = 2, b = 0.6) a * x^b
f(c(1, 2, 4, 8)); f(c(2, 4, 8)) / f(c(1, 2, 4)); 2^0.6          # constant ratio for each doubling
curve(f(x), 0, 10); curve(2 * x^1.5, add = TRUE, col = 2)
```

## In the course
[[Hobbs and Hooten 2015 Ch2]].

## Common confusions
- **"Power and exponential are the same."** a·x^b versus a·b^x. Exponentials eventually outrun any power.

## Explain it back
- How does a power function look on log-log axes?

*Pass test:* you can tell a power function from an exponential.

## Connections
- **Builds on:** [[Exponent]]
- **Leads to:** [[Allometry]], [[Log-log Model]], [[Exponential Function]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What is the form of a power function?
??
y = a · x^b.
++++

How does a power function appear on log-log axes?
??
As a straight line with slope b.
++++

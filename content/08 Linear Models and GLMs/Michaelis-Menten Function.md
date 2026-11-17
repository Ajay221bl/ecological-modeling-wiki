---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Saturating function"
  - "Type II functional response"
  - "Monod function"
status: seedling
---

# Michaelis-Menten Function

**In one line:** the Michaelis-Menten function is a curve that rises steeply at first and then levels off toward a maximum, used when a response saturates as its driver increases.

> [!info] Before this, it helps to know
> [[Asymptote]] (the ceiling) · [[Deterministic Functions in Ecology]] (the family)

## The everyday picture
A cashier serving customers. With few customers, doubling them doubles the sales. As the queue lengthens, the cashier is working flat out and extra customers add nothing. Sales per hour level off at the cashier's top speed.

## A tiny example
Max intake a = 8 g/h, half-saturation b = 2 plants/m².
- At density 2: 8 × 2/(2 + 2) = 4, half the maximum.
- At density 18: 8 × 18/20 = 7.2.
- At density 200: 7.9.

## Start from zero
1. **y = a·x / (b + x).**
2. **a is the asymptote,** the maximum y approaches.
3. **b is the half-saturation constant:** the x at which y = a/2.
4. **At small x it is nearly a line with slope a/b.**
5. **At large x it is nearly flat at a.**
6. **Where it comes from in ecology:** a predator needs handling time for each prey item. Holling's type II functional response is the same curve.
7. **Uses:** feeding rate against food density, photosynthesis against light, nutrient uptake, species accumulation.

## In R
```r
mm <- function(x, a = 8, b = 2) a * x / (b + x); mm(c(2, 18, 200))
set.seed(13); x <- runif(60, 0, 30); y <- mm(x) + rnorm(60, 0, 0.5)
coef(nls(y ~ a * x / (b + x), start = list(a = 5, b = 1)))          # recovers a = 8, b = 2
```

## In the course
[[Hobbs and Hooten 2015 Ch2]].

## Common confusions
- **"b is where the curve flattens."** It is where the curve reaches half its maximum.

## Explain it back
- What do a and b mean biologically?

*Pass test:* you can sketch the curve from a and b.

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

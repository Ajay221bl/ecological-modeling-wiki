---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "An asymptote is a level that a curve gets closer and closer to as x keeps growing (or shrinking), without ever settling exactly on it."
aliases:
  - "Plateau"
  - "Saturation level"
status: seedling
---

# Asymptote

Pour water onto a dry sponge. The first splash soaks in fast, each later splash soaks in less, and the sponge's full weight is a ceiling it approaches and cannot pass. An **asymptote** is that ceiling: a level a curve gets closer and closer to as x keeps growing (or shrinking). The value a function approaches is called its *limit*, and a response that stops rising because something else has become limiting is said to *saturate*. A real sponge does become completely full, but a mathematical asymptote is only ever approached; the gap shrinks forever without closing.

A predator's feeding rate gives a classic example: feeding rate = 10x / (5 + x) prey per hour, where x is prey density. At x = 5 it eats 50 / 10 = 5 per hour. At x = 20, 200 / 25 = 8. At x = 95, 9.5. At x = 995, 9.95. It creeps toward 10 but never gets there, because handling each prey takes time and a predator can only handle so many per hour. Two numbers describe such a curve, and both have a biological meaning. The asymptote (here 10) is the maximum rate. The *half-saturation constant* (here 5) is the density that gives half the maximum, so it says how quickly the curve gets there. Two predators with the same maximum can differ in how fast they approach it. This curve is the [[Michaelis-Menten Function]], one of the [[Nonlinear Function]]s Hobbs and Hooten recommend ([[Hobbs and Hooten 2015 Ch2]]).

Limits are everywhere in biology: stomach capacity, nesting space, a population's [[Carrying Capacity]], and the fact that a probability cannot exceed 1. A straight line ignores them and predicts nonsense at high x, such as a predator eating 500 prey an hour. That is why asymptotic functions, whose parameters mean "maximum rate" or "half-way point", are often preferred to polynomials. Some curves have two asymptotes: the [[Logistic Function]] flattens toward 0 on the left and 1 on the right. A practical consequence: to estimate an asymptote well you need data where the curve has started to flatten, because data from the steep part alone can be fitted by many different ceilings. Also, not every flattening curve is the same: Michaelis-Menten, monomolecular and Gompertz curves all level off but approach the limit differently. Finally, a curve *can* cross its asymptote in some functions, such as a damped oscillation that overshoots before settling; the saturating curves used in ecology approach it from one side.

![[Asymptote.png|700]]
*What to look at:* the curve nears the dashed line but the gap never closes.

```r
x <- c(5, 20, 95, 995)
10 * x / (5 + x)          # 5.00 8.00 9.50 9.95
curve(10 * x / (5 + x), 0, 100, ylim = c(0, 11)); abline(h = 10, lty = 2)
# fitting one to data
set.seed(1); xx <- runif(40, 0, 60); yy <- 10 * xx / (5 + xx) + rnorm(40, 0, 0.5)
coef(nls(yy ~ a * xx / (b + xx), start = list(a = 8, b = 3)))   # near 10 and 5
```
`nls()` fits nonlinear functions by least squares and needs starting guesses.

## Connections
- **Builds on:** [[Nonlinear Function]]
- **Leads to:** [[Michaelis-Menten Function]], [[Logistic Function]], [[Carrying Capacity]]
- **See also:** [[Functions in Maths]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

What is an asymptote?
??
A level a curve approaches ever more closely as x grows, without settling exactly on it.
![[Asymptote.png]]
++++

In y = ax / (b + x), which parameter is the asymptote?
??
a. The parameter b is the x that gives half of a.
++++

Why do ecological responses often have asymptotes?
??
Something else becomes limiting, such as handling time, space or a probability's ceiling of 1.
++++

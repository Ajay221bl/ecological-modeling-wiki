---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The gamma function is the factorial extended to numbers that aren't whole, with Γ(n) = (n − 1)! for whole n."
aliases:
  - "Γ(x)"
  - "gamma()"
  - "Generalised factorial"
status: seedling
---

# Gamma Function

Factorials exist only at whole numbers: 1! = 1, 2! = 2, 3! = 6, 4! = 24. Thread a smooth curve through those stepping stones and you can read off values in between. The **gamma function**, written Γ(x), is that curve: the [[Factorial]] extended to numbers that are not whole. For whole numbers Γ(n) = (n − 1)!, so Γ(5) = 4! = 24 and Γ(6) = 120. It obeys the factorial's own rule, Γ(x + 1) = x Γ(x), and it is defined for any positive number by an [[Integral]]; for example Γ(0.5) = √π. The code below checks each of these.

You meet it because distribution formulas need factorials of parameters that are not whole numbers. The densities of the [[Gamma Distribution]], [[Beta Distribution]], [[Negative Binomial Distribution]] and Student t all contain Γ ([[Hobbs and Hooten 2015 Ch3]]). You rarely compute it yourself; you need to recognise it in a formula and not confuse it with the gamma distribution, which merely uses it.

It grows explosively: Γ(200) is too big for a computer to store, and R returns `Inf`. So software works with its logarithm, `lgamma()`, which gives log Γ(200) = 857.9 without trouble; likelihood calculations use the log for the same reason. The common slip is to write Γ(n) = n!. It is (n − 1)!, a shift by one that is a historical quirk.

```r
gamma(5); factorial(4)
gamma(0.5)^2; pi
gamma(4.5); 3.5 * gamma(3.5)                 # the recurrence
gamma(200); lgamma(200)
```

## Connections
- **Builds on:** [[Factorial]]
- **Leads to:** [[Gamma Distribution]], [[Beta Distribution]], [[Negative Binomial Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is Γ(n) for a positive whole number n?
??
(n − 1)!
++++

Why does the gamma function appear in distribution formulas?
??
It supplies factorial-like constants when parameters are not whole numbers.
++++

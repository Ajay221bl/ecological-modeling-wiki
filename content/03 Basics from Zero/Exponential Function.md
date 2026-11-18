---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "The exponential function, exp(x) = eˣ, raises e ≈ 2.718 to the power x. It undoes the natural log, and its answer is always positive."
aliases:
  - "exp()"
  - "Exponential"
  - "Inverse log"
status: seedling
---

# Exponential Function

Imagine a one-way valve that only lets out positive numbers. Pour in any number at all, −5, 0 or 3, and out comes something above zero: exp(−5) ≈ 0.007, exp(0) = 1, exp(3) ≈ 20.1. That valve is the **exponential function**, exp(x) = eˣ, which raises the number e ≈ 2.718 to the power x ([[Exponent]]). Its output can get very close to zero but never reaches it, because multiplying a positive number by itself, any number of times, never gives zero or a negative. It is the *inverse* of the natural logarithm, meaning it undoes it: exp(ln 7) = 7 ([[Natural Logarithm]]).

This is exactly what count models need. A count GLM fits a [[Equation of a Line|straight line]] on the log scale, for example log(mean birds) = 0.5 + 0.2 × rainfall, and exp() translates it back to the real scale. At rainfall 0 the mean is exp(0.5) = 1.65 birds; at rainfall 5 it is exp(0.5 + 1.0) = exp(1.5) = 4.48 birds. Even at a silly rainfall of −10 it is exp(−1.5) = 0.22 birds, still positive and still possible. The straight line can wander anywhere, and exp() turns it into a mean that is always positive; that connection between the mean and the straight-line part is called the [[Link Function]], and here it is the [[Log Link|log link]] ([[Poisson Regression]]).

One more property explains how to read such models. Adding inside becomes multiplying outside: exp(a + b) = exp(a) × exp(b). So a slope added on the log scale acts as a multiplier on the real scale: each extra unit of rain multiplies the mean count by exp(0.2) = 1.22, a 22% increase, wherever you start. A common mistake is to read a log-link slope of 0.2 as "adds 0.2 birds"; it multiplies the mean by 1.22. Many ecological quantities are positive and change by multiplying, and the exponential function delivers both properties for free, which is why it bridges a simple straight line and a sensible prediction. Do not confuse exp() itself with [[Exponential Growth Model|exponential growth]]: exp() is the function, and exponential growth is one process it can describe ([[Hobbs and Hooten 2015 Ch2]]).

![[Logarithms and exponents.png|700]]
*What to look at:* the exponential curve never dips below zero, however far left you go.

```r
exp(c(-5, 0, 3))            # 0.0067 1 20.09: always positive
exp(log(7))                 # 7: exp undoes log
exp(0.5 + 0.2 * c(0, 5))    # 1.65 4.48 birds
exp(0.2)                    # 1.22: the multiplier per unit of rain
```

## Connections
- **Builds on:** [[Exponent]], [[Natural Logarithm]], [[Equation of a Line]]
- **Leads to:** [[Link Function]], [[Poisson Regression]], [[Generalized Linear Model]], [[Log Link]], [[Exponential Growth Model]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Logarithms and Exponents]]
- **Go deeper:** [[Deterministic Functions in Ecology]]

## Flashcards

Why do count GLMs model log(mean) instead of the mean?
??
Because exp() of any number is positive, so predicted counts can never be negative, and effects become multiplicative.
![[Logarithms and exponents.png]]
++++

A Poisson slope is 0.2. What does one unit of x do to the mean?
??
It multiplies the mean by exp(0.2) ≈ 1.22, a 22% increase.
++++

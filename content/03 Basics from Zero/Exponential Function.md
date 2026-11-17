---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "exp()"
  - "Exponential"
  - "Inverse log"
status: seedling
---

# Exponential Function

**In one line:** the exponential function, exp(x) = eˣ, raises e ≈ 2.718 to the power x. It undoes the natural log, and its answer is always positive.

> [!info] Before this, it helps to know
> [[Exponent]] · [[Natural Logarithm]] (exp undoes it)

## The everyday picture
A one-way valve that only lets out positive numbers. Pour in any number at all (−5, 0, 3) and out comes something above zero: exp(−5) ≈ 0.007, exp(0) = 1, exp(3) ≈ 20.1. That's exactly what you want for things that can't be negative, like an average count of birds.

*Where the picture stops working:* the output can get *very* close to zero but never reaches it.

## Words you'll need
- **exp(x):** e to the power x.
- **Inverse:** a function that undoes another. exp(log(x)) = x.
- **Log scale / real scale:** a model's straight line lives on the log scale; exp() brings predictions back to the real scale.
- **Link function:** in a GLM, the connection between the mean and the straight-line part ([[Link Function]]).

## A tiny example
A count model gives log(mean birds) = 0.5 + 0.2 × rainfall.
- Rainfall 0: exp(0.5) = **1.65** birds.
- Rainfall 5: exp(0.5 + 1.0) = exp(1.5) = **4.48** birds.
- Rainfall −10 (a silly value): exp(0.5 − 2.0) = exp(−1.5) = **0.22** birds. Still positive, still possible.
- Each extra unit of rain multiplies the mean by exp(0.2) = **1.22**.

## Start from zero
1. **exp(x) is e multiplied by itself x times** (x needn't be whole).
2. **It undoes ln:** exp(ln 7) = 7. *Why it matters:* models fitted on the log scale are translated back with exp().
3. **Its output is always above zero.** *Why:* multiplying a positive number by itself, any number of times, never gives zero or a negative.
4. **Adding inside becomes multiplying outside:** exp(a + b) = exp(a) × exp(b). *Why it matters:* a slope added on the log scale is a multiplier on the real scale.
5. **That's why count GLMs use a log link.** The straight line can wander anywhere, and exp() turns it into a mean that's always positive ([[Poisson Regression]]).

## See it
![[Logarithms and exponents.png|700]]
*What to look at:* the exponential curve never dips below zero, however far left you go.

## Why it is this way
Many ecological quantities are positive and change by multiplying. The exponential function delivers both properties for free, so it's the bridge between a simple straight line and a sensible prediction.

## In R
```r
exp(c(-5, 0, 3))            # 0.0067 1 20.09: always positive
exp(log(7))                 # 7: exp undoes log
exp(0.5 + 0.2 * c(0, 5))    # 1.65 4.48 birds
exp(0.2)                    # 1.22: the multiplier per unit of rain
```

## In the course
Exponential and log functions are core deterministic models in Hobbs and Hooten ([[Hobbs and Hooten 2015 Ch2]], §2.2), and exp() back-transforms every Poisson GLM in the labs.

## Common confusions
- **"A slope of 0.2 adds 0.2 birds."** It multiplies the mean by exp(0.2) ≈ 1.22.
- **exp() vs exponential growth.** exp() is the function; exponential growth is one process it can describe.

## Explain it back
- Why is exp() like a valve that only lets out positive numbers?
- Turn log(mean) = 1.5 into a mean count.
- Why does a slope on the log scale act as a multiplier?

*Pass test:* you can back-transform a Poisson GLM coefficient and say what it does to the mean.

## Connections
- **Builds on:** [[Exponent]], [[Natural Logarithm]]
- **Leads to:** [[Link Function]], [[Poisson Regression]], [[Generalized Linear Model]]
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

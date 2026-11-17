---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "A logarithm runs an exponent backwards: it answers \"how many times did I multiply to get here?\" Since 2³ = 8, the log base 2 of 8 is 3."
aliases:
  - "Log"
  - "Logarithms"
  - "log10"
status: seedling
---

# Logarithm

A pond started with 100 frogs and now has 800, and the number doubles every year. How many years passed? Count the doublings: 100 to 200 to 400 to 800, three doublings. That backwards question, "how many steps of multiplying got me here?", is a **logarithm**. It runs an [[Exponent]] in reverse: since 2³ = 8, the log base 2 of 8 is 3, written log₂(8) = 3. In general log_b(x) = y means b^y = x, where b is the *base*, the number being multiplied. Base 10 gives log₁₀(1000) = 3 because 10³ = 1000; base e ≈ 2.718 gives the [[Natural Logarithm]], which statistics uses by default. The answer need not be whole: log₂(10) ≈ 3.32 means "a bit more than three doublings".

The most useful property is that logs turn multiplying into adding. 100 × 1000 = 100,000, and in logs (base 10) that is 2 + 3 = 5, and log₁₀(100,000) is indeed 5. The reason: multiplying a by b stacks b's multiplication steps on top of a's, so the step counts add. In symbols, log(a × b) = log a + log b. Logs also squash big numbers and stretch small ones: 1, 10, 100 and 1000 become 0, 1, 2 and 3, so skewed data with a few huge values look far more even on a log scale ([[Transformation]]). And log(1) = 0 for any base, because b⁰ = 1.

Statistics turns multiplications into additions all the time. A likelihood multiplies hundreds of probabilities together, which quickly gives numbers too small for a computer to handle, so everyone works with the log-likelihood, which adds them instead ([[Likelihood]], [[Powell and Gale 2015 Ch3]]). Logs are also how a straight-line model can describe something that multiplies, such as population growth. Two practical warnings. You cannot take the log of zero or of a negative number, because no number of multiplications of a positive base ever reaches 0 or goes below it, so data containing zeros cannot be logged directly. And in R and most statistics papers, `log()` means the natural log; use `log10()` for base 10 and `log2()` for base 2.

![[Logarithms and exponents.png|700]]
*What to look at:* the log curve rises quickly then flattens: each extra unit of log means multiplying, not adding.

```r
log10(100)                      # 2
log10(100 * 1000)               # 5
log10(100) + log10(1000)        # 5: multiplying became adding
log2(8)                         # 3 doublings
log10(0)                        # -Inf: no log of zero
```

## Connections
- **Builds on:** [[Exponent]]
- **Leads to:** [[Natural Logarithm]], [[Likelihood]], [[Transformation]], [[Link Function]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Logarithms and Exponents]]
- **Go deeper:** [[Summation Notation]]

## Flashcards

What question does a logarithm answer?
??
How many times the base must be multiplied by itself to reach a number (the exponent needed).
![[Logarithms and exponents.png]]
++++

Why do logs turn multiplication into addition?
??
Multiplying a by b stacks b's multiplication steps on top of a's, so the step counts (the logs) add: log(ab) = log a + log b.
++++

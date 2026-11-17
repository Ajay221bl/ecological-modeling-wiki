---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Γ(x)"
  - "gamma()"
  - "Generalised factorial"
status: seedling
---

# Gamma Function

**In one line:** the gamma function is the factorial extended to numbers that aren't whole, with Γ(n) = (n − 1)! for whole n.

> [!info] Before this, it helps to know
> [[Factorial]] (what it extends) · [[Integral]] (how it is defined)

## The everyday picture
A smooth curve threaded through the factorial's stepping stones. Factorials exist only at 1, 2, 3, …. The gamma function is the curve that passes through all of them and so supplies values in between.

## Start from zero
1. **For whole numbers: Γ(n) = (n − 1)!** So Γ(5) = 4! = 24.
2. **Key property: Γ(x + 1) = x Γ(x),** just like n! = n × (n − 1)!.
3. **Defined for any positive number** by an integral. Γ(0.5) = √π.
4. **Why you meet it:** distribution formulas need factorials of non-whole parameters. The gamma, beta, negative binomial and t densities all contain Γ.
5. **You rarely compute it yourself.** You need to recognise it and not confuse it with the gamma distribution.
6. **`lgamma()` gives its log,** avoiding overflow. Γ(200) is too big for a computer. log Γ(200) is 857.9.

## In R
```r
gamma(5); factorial(4)
gamma(0.5)^2; pi
gamma(4.5); 3.5 * gamma(3.5)                 # the recurrence
gamma(200); lgamma(200)
```

## In the course
Appears in the density formulas of [[Hobbs and Hooten 2015 Ch3]].

## Common confusions
- **"Γ(n) = n!"** It is (n − 1)!. The shift by one is a historical quirk.

## Explain it back
- What is Γ(6)?

*Pass test:* you can recognise Γ in a formula and evaluate it for a whole number.

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

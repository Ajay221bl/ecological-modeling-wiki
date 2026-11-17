---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "ln"
  - "Natural log"
  - "log()"
  - "e"
status: seedling
---

# Natural Logarithm

**In one line:** the natural logarithm, written ln or `log()` in R, is the logarithm with base e ≈ 2.718. It is the log that statistics uses by default.

> [!info] Before this, it helps to know
> [[Logarithm]] (the general idea) · [[Exponent]]

## The everyday picture
A bank pays interest. Pay 100% once a year and 1 pound becomes 2. Pay 50% twice a year and it becomes 1.5 × 1.5 = 2.25. Pay a tiny share every second, compounding all the time, and 1 pound grows to about **2.718** in a year. That limit of "growing smoothly and continuously" is the number e. The natural log measures growth in those smooth steps.

*Where the picture stops working:* you don't need the bank story to use ln. You just need to know `log()` in R uses base e.

## Words you'll need
- **e:** a fixed number, about 2.718, that arises from continuous growth.
- **Natural log (ln):** log with base e. ln(e) = 1.
- **exp():** e raised to a power; the reverse of ln ([[Exponential Function]]).
- **Log scale:** measuring things by their natural log instead of their raw value.

## A tiny example
- ln(1) = **0** (no growth).
- ln(e) = ln(2.718) = **1**.
- ln(10) ≈ **2.30**; ln(100) ≈ **4.61**: ten times bigger adds about 2.30.
- **Small changes read as percentages:** ln(1.05) ≈ 0.049. A change of 0.05 on the natural log scale is roughly a 5% change. *Why that's handy:* differences in ln are close to proportional changes, which is how ecologists think about growth.

## Start from zero
1. **Any base gives a valid log.** 2, 10, e.
2. **Statistics settled on e.** *Why:* the maths of continuous growth, calculus and likelihood is simplest in base e, so software uses it by default.
3. **In R, `log()` is ln.** `log10()` and `log2()` exist for other bases.
4. **Small differences on the ln scale are roughly percentage changes.** *Why:* near 1, ln(1 + x) ≈ x.
5. **This is why GLM coefficients for counts are read as multiplicative effects.** A slope of 0.2 on the log scale multiplies the mean by exp(0.2) ≈ 1.22 ([[Poisson Regression]]).

## See it
![[Logarithms and exponents.png|700]]
*What to look at:* the log curve passes through (1, 0): a value of 1 always has a log of 0.

## Why it is this way
Base e isn't special for counting doublings; it's special because it makes the maths of growth and probability clean. Once you know `log()` means ln, model outputs on the "log scale" become readable.

## In R
```r
exp(1)          # 2.718282: the number e
log(exp(1))     # 1
log(10)         # 2.302585
log(1.05)       # 0.0488: about a 5% change
log10(10)       # 1: base 10 is a different log
```

## In the course
Every count and survival model in the course uses natural logs, from Powell and Gale's log-likelihoods ([[Powell and Gale 2015 Ch3]]) to the log link in Poisson GLMs ([[Link Function]]).

## Common confusions
- **ln vs log₁₀.** ln(100) = 4.61, log₁₀(100) = 2. Same idea, different base.
- **e the number vs "e" in 3e-05.** The second is R's scientific notation ([[Scientific Notation in R Output]]).

## Explain it back
- Where does the number e come from, in the bank picture?
- What does `log()` compute in R?
- Why is a change of 0.05 in ln roughly a 5% change?

*Pass test:* you can read "log(mean) rose by 0.1" as "the mean rose by about 10%".

## Connections
- **Builds on:** [[Logarithm]], [[Exponent]]
- **Leads to:** [[Exponential Function]], [[Link Function]], [[Poisson Regression]], [[Likelihood]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Logarithms and Exponents]]
- **Go deeper:** [[Lognormal Distribution]]

## Flashcards

What does log() compute in R?
??
The natural log, base e ≈ 2.718 (ln). Use log10() for base 10.
![[Logarithms and exponents.png]]
++++

Why does statistics use base e?
??
The maths of continuous growth, calculus and likelihood is simplest in base e, so it became the default.
++++

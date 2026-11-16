---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Log"
  - "Logarithms"
  - "log10"
status: seedling
---

# Logarithm

**In one line:** a logarithm runs an exponent backwards: it answers "how many times did I multiply to get here?" Since 2³ = 8, the log base 2 of 8 is 3.

> [!info] Before this, it helps to know
> [[Exponent]] (the log undoes it)

## The everyday picture
A pond started with 100 frogs and now has 800. The number doubles each year. *How many years passed?* Count the doublings: 100 → 200 → 400 → 800, three doublings. That backwards question, "how many steps of multiplying?", is a logarithm: log₂(800 / 100) = log₂(8) = 3.

*Where the picture stops working:* the answer needn't be whole. log₂(10) ≈ 3.32 means "a bit more than three doublings".

## Words you'll need
- **Logarithm (log):** the exponent you'd need to reach a number. log_b(x) = y means b^y = x.
- **Base (b):** the number being multiplied: 2, 10 or e.
- **log₁₀:** base 10. log₁₀(1000) = 3.
- **Natural log:** base e ≈ 2.718, the one statistics uses ([[Natural Logarithm]]).

## A tiny example
- log₁₀(100) = **2**, because 10² = 100.
- log₁₀(1000) = **3**, because 10³ = 1000.
- log₁₀(1) = **0**, because 10⁰ = 1.
- **Multiplying becomes adding:** 100 × 1000 = 100,000. In logs: 2 + 3 = **5**, and log₁₀(100,000) = 5. Two numbers multiplied, their logs added.

## Start from zero
1. **An exponent goes forward:** start, multiply n times, arrive.
2. **A log goes backward:** given where you arrived, how many multiplications? *Why it's useful:* growth data hand you the result, and you want the rate.
3. **Logs turn multiplying into adding.** log(a × b) = log a + log b. *Why:* multiplying a by b stacks b's steps on top of a's, so the step counts add.
4. **Logs squash big numbers and stretch small ones.** 1, 10, 100, 1000 become 0, 1, 2, 3. *Why it matters:* skewed data with a few huge values look more even on a log scale ([[Transformation]]).
5. **You can't take the log of zero or a negative number.** *Why:* no number of multiplications of a positive base ever reaches 0 or goes negative.

## See it
![[Logarithms and exponents.png|700]]
*What to look at:* the log curve rises quickly then flattens: each extra unit of log means multiplying, not adding.

## Why it is this way
Statistics turns multiplications into additions all the time: a likelihood multiplies hundreds of probabilities, and its log adds them ([[Likelihood]]). Logs are also how a straight-line model can describe something that multiplies, like population growth.

## In R
```r
log10(100)                      # 2
log10(100 * 1000)               # 5
log10(100) + log10(1000)        # 5: multiplying became adding
log2(8)                         # 3 doublings
log10(0)                        # -Inf: no log of zero
```

## In the course
Powell and Gale switch to the log of the likelihood because products of many probabilities get unmanageably small ([[Powell and Gale 2015 Ch3]]).

## Common confusions
- **"log means base 10."** In R and most stats papers, `log()` means the natural log; use `log10()` for base 10.
- **log(0).** It doesn't exist. Data with zeros can't be logged directly.

## Explain it back
- Use the frogs to explain what a log answers.
- Why does log(a × b) = log a + log b?
- Why is there no log of zero?

*Pass test:* you can say, without a calculator, that log₁₀(10,000) = 4 and why.

## Connections
- **Builds on:** [[Exponent]]
- **Leads to:** [[Natural Logarithm]], [[Likelihood]], [[Transformation]], [[Link Function]]
- **Part of:** [[MOC - Basics from Zero]], molecular note [[Logarithms and Exponents]]
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

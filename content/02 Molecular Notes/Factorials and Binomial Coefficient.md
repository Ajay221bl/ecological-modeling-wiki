---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "Counting arrangements"
  - "Orderings and choosings"
status: seedling
---

# Factorials and Binomial Coefficient

> [!summary] In plain words
> A **factorial** (n!) counts the ways to put n things in order. The **binomial coefficient** ("N choose n") counts the ways to pick n things from N when order doesn't matter. The second is built from the first, and together they give the counting part of the binomial distribution.

## The everyday picture
Three friends and a car with two seats. Lining all three up in a queue can be done 3! = 6 ways. But the car doesn't care who got in first, only who's inside, so many queues give the same car-load. Picking without caring about order is "choosing".

*Where the picture stops working:* real counts in ecology are far too big to list by hand, which is exactly why the formula is needed.

## The question
How do factorials lead to the binomial coefficient, and why does ecology need them?

## Built from
- [[Factorial]]: n! = n × (n − 1) × ... × 1, the number of orderings
- [[Binomial Coefficient]]: N! / (n! (N − n)!), the number of unordered picks
- [[Product Notation]]: the ∏ shorthand for multiplying a list

## The reasoning, step by step
1. **Count all orderings** of N things: N! ([[Factorial]]).
2. **Most orderings give the same chosen set.** The n chosen can swap among themselves in n! ways, and the N − n left out in (N − n)! ways.
3. **Divide those out** to count sets: N! / (n! (N − n)!) ([[Binomial Coefficient]]). *Why divide:* each set was counted n! (N − n)! times.
4. **Use it in probability.** The chance of exactly n survivors out of N multiplies "how many ways" by "probability of each way" ([[Binomial Distribution]]).

**A worked example in numbers.** 3 friends, 2 seats: 3! = 6 queues, each car-load counted 2! × 1! = 2 times, so 6 / 2 = **3** car-loads. 20 collared sheep with 5 alive: $\binom{20}{5}$ = **15,504** possible sets of survivors.

## So in practice
In R, `factorial(5)` and `choose(20, 5)`; `dbinom()` uses `choose()` for you.

## What would go wrong otherwise
- You'd count AB and BA as two different car-loads and get probabilities that add to more than 1.

## Explain it back
- Use the three friends to show why choosing divides by 2!.
- Where does the binomial coefficient appear in the binomial distribution?

*Pass test:* you can work out "5 choose 2" by hand and explain each step.

## Connections
- **Related:** [[Binomial Sampling]], [[Binomial Distribution]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

How is the binomial coefficient built from factorials?
??
N! counts all orderings; each unordered set appears n!(N − n)! times, so divide: N!/(n!(N − n)!).
++++

How many ways can you pick 2 of 3 friends for a car?
??
3!/(2! × 1!) = 6/2 = 3.
++++

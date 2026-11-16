---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Factorials"
  - "n!"
status: seedling
---

# Factorial

**In one line:** a factorial, written n! and read "n factorial", multiplies a whole number by every whole number below it down to 1: 4! = 4 × 3 × 2 × 1 = 24. It counts the orders in which n things can be lined up.

> [!info] Before this, it helps to know
> Multiplication. It leads to the [[Binomial Coefficient]].

## The everyday picture
Three friends, Ana, Ben and Cai, queue for ice cream. How many different queues are possible? Pick who goes first (3 choices), then who's second from the two left (2 choices), then the last person is fixed (1 choice). 3 × 2 × 1 = **6** queues. That count is 3!.

*Where the picture stops working:* queues are easy to picture for 3 people. For 20 animals, 20! is about 2.4 × 10¹⁸ orders, far too many to imagine, but the same rule counts them.

## Words you'll need
- **Factorial (n!):** n × (n − 1) × ... × 2 × 1.
- **Arrangement (permutation):** one particular order of the items.
- **0!:** defined as 1.

## A tiny example
- 1! = 1
- 3! = 3 × 2 × 1 = **6** (ABC, ACB, BAC, BCA, CAB, CBA)
- 5! = 5 × 4 × 3 × 2 × 1 = **120**
- 10! = **3,628,800**. Factorials grow astonishingly fast.

## Start from zero
1. **To line up n things, fill the spots one at a time.**
2. **The first spot has n choices, the next n − 1, and so on down to 1.** *Why multiply:* every choice for the first spot can be paired with every choice for the second.
3. **So the number of orders is n × (n − 1) × ... × 1 = n!.**
4. **0! = 1.** *Why:* there's exactly one way to arrange nothing (do nothing), and it keeps formulas like the binomial coefficient working at the edges.
5. **Factorials are the building block for counting groups,** where order doesn't matter ([[Binomial Coefficient]]).

## See it
```mermaid
flowchart LR
  A["1st place: 3 choices"] --> B["2nd place: 2 choices"]
  B --> C["3rd place: 1 choice"]
  C --> D["3 × 2 × 1 = 6 orders"]
```
*What to look at:* each step multiplies the number of possibilities.

## Why it is this way
Probability often needs to count outcomes, and counting orders by listing them breaks down past a handful of items. The factorial is the shortcut that never breaks.

## In R
```r
factorial(3)    # 6
factorial(5)    # 120
factorial(0)    # 1
factorial(20)   # 2.432902e+18: why we never list them out
```

## In the course
Powell and Gale introduce factorials on the way to the binomial coefficient ([[Powell and Gale 2015 Ch3]], pp. 22 to 23).

## Common confusions
- **"0! = 0."** It's 1.
- **"5! is 5 × 5."** It's 5 × 4 × 3 × 2 × 1.

## Explain it back
- Use three friends in a queue to explain 3! = 6.
- Why do we multiply the choices for each spot?
- Why is 0! equal to 1?

*Pass test:* you can work out 4! by reasoning about queues, not by memory.

## Connections
- **Builds on:** multiplication
- **Leads to:** [[Binomial Coefficient]], [[Binomial Sampling]]
- **Part of:** [[MOC - Basics from Zero]], molecular note [[Factorials and Binomial Coefficient]]
- **Go deeper:** [[Powell and Gale 2015 Ch3]]

## Flashcards

What does n! count?
??
The number of different orders in which n distinct things can be lined up: n × (n − 1) × ... × 1.
++++

Why is 0! = 1?
??
There is exactly one way to arrange nothing, and defining it as 1 keeps counting formulas working when choosing none or all.
++++

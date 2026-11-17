---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "A factorial, written n! and read \"n factorial\", multiplies a whole number by every whole number below it down to 1: 4! = 4 × 3 × 2 × 1 = 24. It counts the orders in which n things can be lined up."
aliases:
  - "Factorials"
  - "n!"
status: seedling
---

# Factorial

Three friends, Ana, Ben and Cai, queue for ice cream. How many different queues are possible? Pick who goes first (3 choices), then who is second from the two left (2 choices), and the last person is then fixed (1 choice): 3 × 2 × 1 = 6 queues. That count is a **factorial**, written n! and read "n factorial": a whole number multiplied by every whole number below it, down to 1. So 4! = 4 × 3 × 2 × 1 = 24, and n! counts the orders, or *arrangements* (also called permutations), in which n things can be lined up. For three friends you can list them all: ABC, ACB, BAC, BCA, CAB, CBA.

Why multiply the choices? Because every choice for the first spot can be paired with every choice for the second, and each of those pairs with every choice for the third. Factorials grow astonishingly fast: 5! = 120, 10! = 3,628,800, and 20! is about 2.4 × 10¹⁸, far too many orders to imagine, let alone list, though the same simple rule counts them. One value needs a word: 0! is defined as 1, not 0. That is because there is exactly one way to arrange nothing (do nothing), and defining it as 1 keeps formulas such as the binomial coefficient working at their edges. Also, 5! is 5 × 4 × 3 × 2 × 1, not 5 × 5.

Probability often needs to count outcomes, and counting orders by listing them breaks down past a handful of items; the factorial is the shortcut that never breaks. Its main job in this wiki is as the building block for counting groups where order does not matter, the [[Binomial Coefficient]], which in turn sits at the front of every binomial probability. Powell and Gale introduce factorials on the way there ([[Powell and Gale 2015 Ch3]]). In R, `factorial(5)` returns 120.

```mermaid
flowchart LR
  A["1st place: 3 choices"] --> B["2nd place: 2 choices"]
  B --> C["3rd place: 1 choice"]
  C --> D["3 × 2 × 1 = 6 orders"]
```
*What to look at:* each step multiplies the number of possibilities.

```r
factorial(3)    # 6
factorial(5)    # 120
factorial(0)    # 1
factorial(20)   # 2.432902e+18: why we never list them out
```

## Connections
- **Builds on:** multiplication
- **Leads to:** [[Binomial Coefficient]], [[Binomial Sampling]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Factorials and Binomial Coefficient]]
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

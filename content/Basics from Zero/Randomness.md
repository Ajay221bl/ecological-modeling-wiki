---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Stochasticity"
status: seedling
---

# Randomness

**In one line:** randomness means individual outcomes can't be predicted, even though the long-run pattern of many outcomes can.

> [!info] Before this, it helps to know
> [[Uncertainty]] (what you don't know) · [[Stochastic Component]] (the random part of a model)

## The everyday picture
Rolling a die. You can't say what the next roll will be. You can say that over 6,000 rolls each face will come up about 1,000 times. Unpredictable one at a time, regular in bulk.

*Where the picture stops working:* a die's chances are known and equal. In ecology the chances are unknown and are what you are trying to estimate.

## Words you'll need
- **Outcome:** one result of a random process.
- **Long-run frequency:** the share of times an outcome occurs over many repeats.
- **Probability distribution:** the full list of outcomes and their chances ([[Probability Distribution]]).
- **Seed:** a number that makes a computer's "random" draws repeatable.

## A tiny example
Each egg has a 0.3 chance of hatching.
- A clutch of 4 might hatch 0, 1, 2, 3 or 4. Nobody can say which.
- Over thousands of clutches: about 24% hatch none, 41% one, 26% two, 8% three, 1% four.
- The single clutch is random. The percentages are fixed and knowable.

## Start from zero
1. **Some causes are too many or too small to track.** Which egg gets chilled, which seed lands in shade.
2. **Lump them together and call the result chance.** *Why:* you can't model every cause, but you can model their combined pattern.
3. **Chance has rules in bulk.** The pattern of many outcomes is stable. That pattern is a probability distribution.
4. **Models have a random part on purpose.** It stands for everything not explained by the predictors.
5. **Randomness is also a tool.** Random sampling and random treatment assignment protect against bias ([[Random Sampling]]).
6. **Computers imitate it.** `rbinom()`, `rnorm()` and the like draw from a chosen distribution.

## See it
![[Randomness long run.png|700]]
*What to look at:* the running share of hatched eggs jumps about at first, then settles on 0.3.

## Why it is this way
Nature is too complicated to predict case by case. Treating the unexplained part as random, with a known kind of pattern, is what lets a model be simple and still honest. Whether the world is "truly" random doesn't matter: randomness is the model's way of representing everything left out.

## In R
```r
set.seed(11)
rbinom(5, size = 4, prob = 0.3)              # five clutches: unpredictable
round(table(rbinom(1e5, 4, 0.3)) / 1e5, 2)   # long run: 0.24 0.41 0.26 0.08 0.01
dbinom(0:4, 4, 0.3)                           # the exact probabilities
```
The simulated shares match the exact probabilities once there are many clutches.

## In the course
Hobbs and Hooten treat all unobserved quantities as random variables ([[Hobbs and Hooten 2015 Ch3]]). Simulating random data is used throughout the labs ([[Simulating Data]]).

## Common confusions
- **"Random means anything can happen equally."** Outcomes can have very unequal chances.
- **"Random means no pattern."** The single outcome has none. The long run has a precise one.
- **"After several failures a success is due."** Independent events have no memory.

## Explain it back
- What is predictable about a die and what isn't?
- Why does a statistical model include a random part?

*Pass test:* you can explain how something can be unpredictable singly and predictable in bulk.

## Connections
- **Builds on:** [[Stochastic Component]]
- **Leads to:** [[Probability]], [[Random Variable]], [[Probability Distribution]], [[Random Numbers and set.seed()]]
- **Part of:** [[MOC - Basics from Zero]]

## Flashcards

What does randomness mean in statistics?
??
Single outcomes are unpredictable, but the long-run pattern of many outcomes is stable.
![[Randomness long run.png]]
++++

Why do models include a random component?
??
It represents the combined effect of all the causes not included in the model.
++++

What does set.seed() do?
??
It fixes the starting point of R's random number generator so results can be reproduced.
++++

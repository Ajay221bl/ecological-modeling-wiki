---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Discrete variable"
  - "Count data"
  - "Counts"
status: seedling
---

# Discrete Data

**In one line:** discrete data come in separate steps with gaps between them, usually whole-number counts like 0, 1, 2 nests.

> [!info] Before this, it helps to know
> [[Variable]] · its contrast is [[Continuous Data]]

## The everyday picture
A **staircase**. You can stand on step 0, step 1 or step 2, but there's no step 2.6. Counting eggs, nests or species is a staircase: 2 eggs or 3 eggs, never 2.6.

*Where the picture stops working:* most staircases have a top. Counts usually don't (in principle you could count 1,000 birds), but they do have a bottom: you can't count fewer than 0.

## Words you'll need
- **Discrete:** only separate, countable values are possible.
- **Count:** how many of something; a discrete value from 0 upward.
- **Probability mass function:** for discrete data, a list giving the chance of each possible value ([[PMF vs PDF]]).
- **Poisson distribution:** the usual starting model for counts ([[Poisson Distribution]]).
- **Binary variable:** a discrete variable with only two values ([[Binary Variable]]).

## A tiny example
Four nest boxes hold 0, 2, 5 and 1 eggs.
- Each value is a whole number of 0 or more.
- The mean is 8 / 4 = **2** eggs, fine.
- A straight-line model might predict **−1.3 eggs** for a cold site. Impossible, because the staircase starts at 0.
- With many small counts and zeros, the scatter is lopsided (squashed against 0), which a bell curve can't describe.

## Start from zero
1. **Count eggs in a nest and you get 0, 1, 2, 3...** No values in between.
2. **That's discrete.** *Why it matters:* a model's distribution must only put probability on values that can happen: whole numbers, 0 and up.
3. **So probabilities can be listed value by value.** P(0 eggs), P(1 egg), P(2 eggs)... *Why:* each step is a separate, possible outcome, so each gets its own probability ([[PMF vs PDF]]).
4. **Counts can't go below zero.** *Why it matters:* small counts bunch up against 0, giving lopsided scatter and spread that grows with the mean.
5. **So counts get count distributions.** Poisson or negative binomial, usually fitted through a GLM with a log link ([[Poisson Regression]], [[Why the response type decides the distribution]]).

## See it
![[Continuous vs discrete data.png|700]]
*What to look at:* the left panel has separate bars, because only whole numbers can happen.

## Why it is this way
The ordinary straight-line model assumes a smooth ramp with no floor. Counts break both assumptions, which is the main reason [[Generalized Linear Model|GLMs]] exist.

## In R
```r
eggs <- c(0L, 2L, 5L, 1L)        # L marks whole numbers (integers)
class(eggs)                      # "integer"
table(eggs)                      # discrete data can be tabulated value by value
```
R stores counts and measurements both as numbers, so it won't warn you. Knowing the data are counts is your job, and it decides the `family` in `glm()`.

## In the course
Hobbs and Hooten's discrete distributions (Poisson, binomial, negative binomial) are the ones for counts and yes/no data ([[Hobbs and Hooten 2015 Ch3]], §3.4.3).

## Common confusions
- **"Counts are close enough to continuous."** Only when they're large. Small counts with many zeros need a count model.
- **"Discrete means categorical."** Counts are numbers with order and size; categories are labels ([[Categorical Variable]]).

## Explain it back
- Use a staircase to explain discrete data.
- Why is a prediction of −1.3 eggs a sign of the wrong model?
- Why do small counts have lopsided scatter?

*Pass test:* you can spot count data in a table and say why a bell curve might not suit it.

## Connections
- **Builds on:** [[Variable]]
- **Leads to:** [[Poisson Distribution]], [[Binary Variable]], [[PMF vs PDF]], [[Generalized Linear Model]]
- **Part of:** [[MOC - Basics from Zero]], molecular note [[Continuous vs Discrete Data]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch3]]

## Flashcards

What makes data discrete?
??
Only separate, countable values are possible (0, 1, 2...), like the steps of a staircase.
![[Continuous vs discrete data.png]]
++++

Why do counts need different models from continuous data?
??
They can't go below zero and come in whole numbers, so small counts have lopsided scatter that a normal model mis-describes, and it can predict impossible negative counts.
++++

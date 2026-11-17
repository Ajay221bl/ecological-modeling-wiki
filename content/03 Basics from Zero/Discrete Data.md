---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "Discrete data come in separate steps with gaps between them, usually whole-number counts like 0, 1, 2 nests."
aliases:
  - "Discrete variable"
status: seedling
---

# Discrete Data

Picture a staircase. You can stand on step 0, step 1 or step 2, but there is no step 2.6. **Discrete data** come in separate steps with gaps between them, usually whole-number counts such as 0, 1, 2 nests or eggs or species. You can count 2 eggs or 3 eggs, never 2.6. Most staircases have a top, and counts usually do not (in principle you could count 1,000 birds), but counts do have a bottom: you cannot count fewer than 0. The opposite of discrete is [[Continuous Data]], which can take any value on a smooth ramp. The simplest discrete variable is a [[Binary Variable]], with only two values.

Because each step is a separate possible outcome, probabilities for discrete data can be listed value by value: the chance of 0 eggs, of 1 egg, of 2 eggs and so on. That list is the *probability mass function* ([[PMF vs PDF]]), and a model's distribution must put probability only on values that can actually happen. Four nest boxes hold 0, 2, 5 and 1 eggs; the mean is 8 / 4 = 2 eggs, which is fine. But a straight-line model might predict −1.3 eggs at a cold site, which is impossible because the staircase starts at 0. Small counts also bunch up against that floor, which makes their scatter lopsided and makes their spread grow with their mean, two things a bell curve cannot describe.

That is why counts get count distributions, the [[Poisson Distribution]] or the negative binomial, usually fitted through a GLM with a log link ([[Poisson Regression]], [[Why the response type decides the distribution]]). The ordinary straight-line model assumes a smooth ramp with no floor; counts break both assumptions, which is the main reason [[Generalized Linear Model|GLMs]] exist. R stores counts and measurements alike as numbers and will not warn you, so recognising counts is your job, and it decides the `family` you pass to `glm()`. Two confusions: counts are close enough to continuous only when they are large, and discrete is not the same as categorical, because counts have size and order while categories are just labels ([[Categorical Variable]]). Hobbs and Hooten's discrete distributions are the ones for counts and yes/no data ([[Hobbs and Hooten 2015 Ch3]]). Discrete data are one kind of [[Variable]].

![[Continuous vs discrete data.png|700]]
*What to look at:* the left panel has separate bars, because only whole numbers can happen.

```r
eggs <- c(0L, 2L, 5L, 1L)        # L marks whole numbers (integers)
class(eggs)                      # "integer"
table(eggs)                      # discrete data can be tabulated value by value
```
R stores counts and measurements both as numbers, so it won't warn you. Knowing the data are counts is your job, and it decides the `family` in `glm()`.

## Connections
- **Builds on:** [[Variable]]
- **Leads to:** [[Poisson Distribution]], [[Binary Variable]], [[PMF vs PDF]], [[Generalized Linear Model]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Continuous vs Discrete Data]]
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

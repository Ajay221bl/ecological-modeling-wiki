---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "A sample is the part of the population you actually measured."
aliases:
  - "Sampling"
  - "Sample data"
status: seedling
---

# Sample

Stir a pot of soup and taste one spoonful. The spoonful is the **sample**: the part of the [[Population]] you actually measured, made of individual [[Observation]]s. You never drink the whole pot, but from the spoonful you decide whether the pot needs salt. The stirring matters: in an unstirred pot with the salt sunk to the bottom, a spoonful from the top would mislead you. The number of units in the sample is its *sample size*, n ([[Sample Size]]). Numbers calculated from the sample are certain facts about the sample; using them to make a guess about the population is the leap of inference, reasoning from the particular to the general ([[Induction]]).

A pond holds 200 turtles, and you trap 40 of them: the sample, n = 40. Ten of the 40 are female, so in the sample the proportion female is 10 / 40 = 0.25. That is a fact about these 40 turtles. "25% of the pond is female" is a guess, an [[Estimate]]. Trap a different 40 tomorrow and you might get 8 or 13 females, 0.20 or 0.33: same pond, different sample, different answer. Different samples always give somewhat different answers, a fact called [[Sampling Variation]], and the [[Standard Error]] measures how much they differ. Soup can be stirred until every spoonful tastes the same, but nature cannot be stirred, so this variation never goes away.

Measuring everything is almost never possible, so all of science runs on samples, and naming the sample separately keeps two kinds of number apart: certain facts about your data and uncertain guesses about the world. The guess is only as good as the window. A sample must look like the population in the ways that matter, which is what a [[Representative Sample]] means, and a larger sample makes the guess more precise but cannot fix a method that systematically looks in the wrong place ([[Bias]]). Powell and Gale define the sample as the subset of the [[Study Population|study population]] for which you have data ([[Powell and Gale 2015 Ch2]]).

![[Population and sample.png|700]]
*What to look at:* the orange dots are the sample, the only part we see.

```r
set.seed(1)
population <- rnorm(200, mean = 20, sd = 5)  # the whole pond (unseen in real life)
my_sample  <- sample(population, 40)         # the 40 turtles we trapped
mean(my_sample)                              # a fact about the sample, a guess about the pond
mean(sample(population, 40))                 # another sample: a different answer
```

## Connections
- **Builds on:** [[Population]], [[Observation]]
- **Leads to:** [[Estimate]], [[Representative Sample]], [[Standard Error]], [[Sampling Variation]], [[Study Population]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Population and Sample]]
- **Go deeper:** [[Powell and Gale 2015 Ch2]]

## Flashcards

What is a sample?
??
The part of the population you actually measured (the spoonful of soup).
![[Population and sample.png]]
++++

Does a bigger sample fix a biased sampling method?
??
No. It makes the estimate more precise but leaves the bias in place.
++++

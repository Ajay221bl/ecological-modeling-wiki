---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A probability is a number between 0 and 1 that says how likely something is, with 0 meaning impossible and 1 meaning certain."
aliases:
  - "Chance"
  - "P(A)"
status: seedling
---

# Probability

A forecast of "70% chance of rain" does not say what will happen today. It says that on days like this one, it rains on about 7 out of 10. A **probability** is a number between 0 and 1 that says how likely something is: 0 means impossible, 1 means certain, and the probabilities of all the possible outcomes add to 1, because something has to happen. It follows that the probability that something does *not* happen is 1 minus the probability that it does. Probabilities behave like proportions ([[Proportion]]), and they are the language for describing [[Randomness]].

A fair die makes it concrete. It has six equally likely faces, so P(rolling a 4) = 1/6 ≈ 0.167; P(rolling an even number) = 3/6 = 0.5; P(rolling a 7) = 0; and P(rolling something from 1 to 6) = 1. The code below rolls a simulated die 100,000 times: the share of 4s comes out close to 0.167 and the share of even numbers close to 0.5.

The number has two readings. As a *long-run frequency* it is the share of times something happens over many repeats; as a *degree of belief* it is how confident you are, given what you know. Frequentist statistics uses the first, describing data under repeated sampling; Bayesian statistics uses the second as well, which lets it put probabilities on parameters and hypotheses. Models need probability at all because ecological data are never predicted exactly, and probability is how you say how far, and how often, data stray from the prediction. Two confusions: a probability of 0.7 does not mean the event will happen, only that it happens about 7 times in 10 in the long run; and in statistics "likelihood" is not a synonym for probability but a separate idea ([[Likelihood]]). The rules that combine probabilities start with [[Event|events]] ([[Random Variable]], [[Probability Distribution]], [[Conditional Probability]], [[Hobbs and Hooten 2015 Ch3]]).

```r
set.seed(1)
rolls <- sample(1:6, 1e5, replace = TRUE)
mean(rolls == 4)             # close to 1/6 = 0.167
mean(rolls %% 2 == 0)        # close to 0.5
1 - mean(rolls == 4)         # P(not a 4)
```

## Connections
- **Builds on:** [[Proportion]], [[Randomness]]
- **Leads to:** [[Event]], [[Random Variable]], [[Probability Distribution]], [[Conditional Probability]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What range can a probability take?
??
0 (impossible) to 1 (certain).
++++

What do the probabilities of all possible outcomes sum to?
??
1.
++++

What are the two interpretations of probability?
??
Long-run relative frequency, and degree of belief given available information.
++++

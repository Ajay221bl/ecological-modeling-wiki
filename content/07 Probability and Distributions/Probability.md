---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Chance"
  - "P(A)"
status: seedling
---

# Probability

**In one line:** a probability is a number between 0 and 1 that says how likely something is, with 0 meaning impossible and 1 meaning certain.

> [!info] Before this, it helps to know
> [[Proportion]] (probabilities behave like proportions) · [[Randomness]] (what probability describes)

## The everyday picture
A weather forecast. "70% chance of rain" doesn't say what will happen today. It says that on days like this one, it rains on about 7 out of 10.

## A tiny example
A fair die has six faces. P(rolling a 4) = 1/6 = 0.167. P(rolling an even number) = 3/6 = 0.5. P(rolling a 7) = 0. P(rolling something from 1 to 6) = 1.

## Start from zero
1. **Probabilities lie between 0 and 1.**
2. **The probabilities of all possible outcomes add to 1.** Something has to happen.
3. **P(not A) = 1 − P(A).**
4. **Two readings of the number.** *Long-run frequency:* the share of times it happens over many repeats. *Degree of belief:* how confident you are, given what you know.
5. **Why both readings matter in this course:** frequentist statistics uses the first, about data under repeated sampling. Bayesian statistics uses the second as well, so it can put probabilities on parameters and hypotheses.
6. **Why models need it at all:** ecological data are never exactly predicted. Probability is the language for saying how far, and how often, data stray from the prediction.

## In R
```r
set.seed(1)
rolls <- sample(1:6, 1e5, replace = TRUE)
mean(rolls == 4)             # close to 1/6 = 0.167
mean(rolls %% 2 == 0)        # close to 0.5
1 - mean(rolls == 4)         # P(not a 4)
```

## In the course
Sep 8, "Probability and distributions" ([[Course Website]]). The rules are laid out in [[Hobbs and Hooten 2015 Ch3]].

## Common confusions
- **"A probability of 0.7 means it will happen."** It means it happens 7 times in 10 in the long run.
- **"Probability and likelihood are the same word."** In statistics, likelihood has its own meaning ([[Likelihood]]).

## Explain it back
- What are the two interpretations of probability?

*Pass test:* you can state the basic rules and both readings.

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

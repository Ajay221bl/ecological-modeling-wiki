---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A Bernoulli trial is a single random event with exactly two possible results, called success and failure, where success has probability p."
aliases:
  - "Binary trial"
  - "Success-failure trial"
status: seedling
---

# Bernoulli Trial

One flip of a possibly unfair coin lands heads or tails, nothing in between, and one number, the chance of heads, describes it completely. A **Bernoulli trial** is a single random event with exactly two possible results, called success and failure, where success has [[Probability]] p and failure 1 − p. The outcomes are coded 1 and 0, making it a [[Binary Variable]].

Ecology is full of them. One nest either fledges at least one chick or fails; one site visit either detects the species or does not; one marked animal is either alive next year or dead. Survival, detection, occupancy, sex, infection and germination are all yes/no events. The code below simulates ten trials with p = 0.7 with `rbinom(10, size = 1, prob = 0.7)`, producing a string of 1s and 0s.

Bigger models are built from this atom. A fixed number of independent trials with the same p gives the [[Binomial Distribution]]; trials in sequence, such as survive and then be detected, give [[Mark-Recapture|capture-recapture]] and occupancy likelihoods; and [[Logistic Regression]] lets p depend on [[Predictor Variable|predictors]]. Powell and Gale build [[Maximum Likelihood Estimation|maximum likelihood]] from coin flips and survival trials ([[Powell and Gale 2015 Ch3]]). "Success" is only the label for the outcome coded 1: it can be death or absence if that is what you are counting. The [[Probability Distribution|probability distribution]] of a single trial is the [[Bernoulli Distribution]].

```r
set.seed(10); rbinom(10, size = 1, prob = 0.7)      # ten Bernoulli trials
```

## Connections
- **Builds on:** [[Probability]], [[Binary Variable]], [[Predictor Variable]], [[Probability Distribution]]
- **Leads to:** [[Bernoulli Distribution]], [[Binomial Distribution]], [[Logistic Regression]], [[Mark-Recapture]], [[Maximum Likelihood Estimation]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is a Bernoulli trial?
??
A single random event with two outcomes, success with probability p and failure with probability 1 − p.
++++

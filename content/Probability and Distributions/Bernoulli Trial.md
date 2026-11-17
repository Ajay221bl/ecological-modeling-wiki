---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Binary trial"
  - "Success-failure trial"
status: seedling
---

# Bernoulli Trial

**In one line:** a Bernoulli trial is a single random event with exactly two possible results, called success and failure, where success has probability p.

> [!info] Before this, it helps to know
> [[Probability]] (p) · [[Binary Variable]] (its outcome)

## The everyday picture
One flip of a possibly unfair coin. It lands heads or tails. Nothing in between, and one number, the chance of heads, describes it completely.

## A tiny example
One nest: fledges at least one chick (success) or fails. One site visit: species detected or not. One marked animal: alive next year or dead.

## Start from zero
1. **Two outcomes only,** coded 1 and 0.
2. **P(1) = p, P(0) = 1 − p.**
3. **"Success" is just the label for the outcome coded 1.** It can be death or absence if that is what you count.
4. **Why it is the atom of so much ecology:** survival, detection, occupancy, sex, infection and germination are all yes/no events.
5. **Build bigger models from it.** A fixed number of independent trials with the same p gives a binomial. Trials in sequence (survive, then be detected) give capture-recapture and occupancy likelihoods.

## In R
```r
set.seed(10); rbinom(10, size = 1, prob = 0.7)      # ten Bernoulli trials
```

## In the course
[[Powell and Gale 2015 Ch3]] builds maximum likelihood from coin flips and survival trials.

## Common confusions
- **"Success means a good outcome."** It is whatever you coded as 1.

## Explain it back
- Give three Bernoulli trials from wildlife studies.

*Pass test:* you can recognise yes/no events as Bernoulli trials.

## Connections
- **Builds on:** [[Probability]], [[Binary Variable]]
- **Leads to:** [[Bernoulli Distribution]], [[Binomial Distribution]], [[Logistic Regression]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What is a Bernoulli trial?
??
A single random event with two outcomes, success with probability p and failure with probability 1 − p.
++++

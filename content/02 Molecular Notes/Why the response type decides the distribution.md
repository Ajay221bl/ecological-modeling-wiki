---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - distributions
aliases:
  - "Choosing a likelihood from the response type"
  - "Matching the distribution to the data"
status: seedling
---

# Why the response type decides the distribution

> [!summary] In plain words
> the kind of numbers a response can take (any real value, positive values, counts, 0/1, proportions) limits which probability distributions can describe it, because a distribution that allows impossible values, or the wrong spread, gives wrong predictions and wrong standard errors.

## The everyday picture
Choosing a container for something you are shipping. Soup needs a jar, books a box, a bicycle a frame. A jar for a bicycle does not just look odd; it fails.

## The question
Why can't I use a normal distribution for every response?

## Built from
- [[Support of a Distribution]]: the values a distribution allows.
- [[Mean-Variance Relationship]]: how spread grows with the mean.
- [[Choosing a Distribution for Your Response]]: the practical table.
- [[Continuous vs Discrete Data]]: the kinds of data.

## The reasoning, step by step
1. **Ask what values are possible.** Negative? Fractions? An upper limit?
2. **Pick a distribution whose support matches.** A normal model for nest counts can predict −0.4 nests.
3. **Ask how the spread changes with the mean.** Counts usually get more variable as they get bigger; a normal model assumes constant spread.
4. **Match both:** support and mean-variance relationship.
5. **The distribution then fixes the GLM family and a natural link** ([[Why GLMs need a link function]]).

| Response | Possible values | Usual distribution | Variance |
|---|---|---|---|
| Body length | any real (in practice positive, far from 0) | [[Normal Distribution]] | constant σ² |
| Biomass, time to event | positive, continuous | [[Gamma Distribution]], [[Lognormal Distribution]] | grows with mean² |
| Counts | 0, 1, 2, … | [[Poisson Distribution]], [[Negative Binomial Distribution]] | μ, or μ + μ²/k |
| Alive or dead | 0 or 1 | [[Bernoulli Distribution]] | p(1 − p) |
| Successes out of n | 0 to n | [[Binomial Distribution]] | np(1 − p) |
| Percent cover | between 0 and 1 | [[Beta Distribution]] | shrinks near 0 and 1 |
Counts with mean 0.5 under a normal model with SD 1 give P(count < 0) = pnorm(0, 0.5, 1) = 0.31: almost a third of predicted counts are impossible.

## So in practice
Before fitting, write the response's possible values in one line, then choose the family. Check the choice afterwards with residuals or a posterior predictive check.

## What would go wrong otherwise
Fitting `lm()` to presence/absence data and getting predicted probabilities of 1.3 for good habitat.

## Explain it back
- Name two things about a response that limit the choice of distribution.

*Pass test:* you can pick a distribution for any response and say why.

## Connections
- **Related:** [[Linear Model vs GLM]], [[Binomial vs Poisson]], [[Poisson vs Negative Binomial]], [[Binomial vs Beta for Proportions]], [[Which assumption violation leads to which model]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Probability and Distributions]], [[MOC - Generalized Linear Models]], [[MOC - Linear Models and GLMs]]

## Flashcards

What two properties of a response decide its distribution?
??
Its possible values (support) and how its variance changes with the mean.
++++

Usual distribution for counts? For 0/1? For positive continuous?
??
Poisson or negative binomial; Bernoulli; gamma or lognormal.
++++

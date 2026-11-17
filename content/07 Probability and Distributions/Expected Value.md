---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The expected value of a random variable is its long-run average: each possible value weighted by its probability and added up."
aliases:
  - "Expectation"
  - "E(Y)"
  - "Mean of a distribution"
  - "Population mean"
status: seedling
---

# Expected Value

If a lottery ticket pays 100 with probability 0.01 and nothing otherwise, then over thousands of tickets you would average 1 per ticket. You never win exactly 1; it is what the game is worth on average. The **expected value** of a random variable is that long-run average: each possible value weighted by its probability and added up. For a discrete variable E(Y) = Σ y × P(Y = y) ([[Probability Mass Function]], [[Summation Notation]]); for a continuous one it is the same weighted sum done as an area, ∫ y × density(y) dy. It is written μ or E(Y), and it is the balance point of the distribution: the population version of the sample [[Mean]].

For a die, E(Y) = (1 + 2 + 3 + 4 + 5 + 6) × 1/6 = 3.5, which shows the expected value need not be a possible value: no die shows 3.5. The code below computes it for the die, for a Poisson with mean 3, and by integration for a gamma distribution with shape 2 and rate 0.5, whose mean is 4. Expectations add: E(X + Y) = E(X) + E(Y), and E(a + bY) = a + b E(Y).

Regression models are statements about expected values: the deterministic part says E(Y | X) = β₀ + β₁X, the average response at given predictors ([[Linear Predictor]]). One warning matters later: for a curved function g, E(g(Y)) is generally not g(E(Y)). The mean of the logs is not the log of the mean; in the last line of the code, for lognormal data E(log z) is 0 while log E(z) is 0.5 ([[Jensen's Inequality]]). And the expected value is not the most likely value, which is the mode; for skewed distributions they differ. It is the first of the [[Moments of a Distribution]], and the target that sample averages approach by the [[Law of Large Numbers]] ([[Hobbs and Hooten 2015 Ch3]]).

```r
sum((1:6) * (1/6))                               # 3.5
y <- 0:100; sum(y * dpois(y, 3))                 # E(Y) for Poisson(3) is 3
integrate(function(y) y * dgamma(y, 2, 0.5), 0, Inf)$value   # gamma(shape 2, rate 0.5): mean 4
set.seed(10); z <- rlnorm(1e5); c(mean(log(z)), log(mean(z)))   # E(log z) is 0, log E(z) is 0.5
```

## Connections
- **Builds on:** [[Mean]], [[Probability Mass Function]]
- **Leads to:** [[Moments of a Distribution]], [[Law of Large Numbers]], [[Linear Predictor]], [[Jensen's Inequality]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

How is the expected value of a discrete random variable computed?
??
Σ y × P(Y = y): each value weighted by its probability.
++++

What does a regression's deterministic part describe?
??
The expected value of the response given the predictors.
++++

Is E(log Y) equal to log E(Y)?
??
No. Expectation does not pass through nonlinear functions.
++++

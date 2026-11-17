---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Expectation"
  - "E(Y)"
  - "Mean of a distribution"
  - "Population mean"
status: seedling
---

# Expected Value

**In one line:** the expected value of a random variable is its long-run average: each possible value weighted by its probability and added up.

> [!info] Before this, it helps to know
> [[Mean]] (the sample version) · [[Probability Mass Function]] (the weights) · [[Summation Notation]] (the adding)

## The everyday picture
The fair price of a lottery ticket. If a ticket pays 100 with probability 0.01 and nothing otherwise, then over thousands of tickets you'd average 1 per ticket. You never win exactly 1. It is what the game is worth on average.

## A tiny example
A die: E(Y) = 1(1/6) + 2(1/6) + 3(1/6) + 4(1/6) + 5(1/6) + 6(1/6) = 3.5.

## Start from zero
1. **Discrete: E(Y) = Σ y × P(Y = y).**
2. **Continuous: E(Y) = ∫ y × density(y) dy.** The same weighted sum, done as an area.
3. **It is the balance point of the distribution.**
4. **It need not be a possible value.** No die shows 3.5.
5. **Written μ or E(Y).**
6. **Expectations add:** E(X + Y) = E(X) + E(Y), and E(a + bY) = a + b E(Y).
7. **Why models are about it:** the deterministic part of a regression is a statement about the expected value of the response at given predictors, E(Y | X) = β₀ + β₁X.
8. **Warning:** E(g(Y)) is generally not g(E(Y)) for a curved g. The mean of the logs is not the log of the mean.

## In R
```r
sum((1:6) * (1/6))                               # 3.5
y <- 0:100; sum(y * dpois(y, 3))                 # E(Y) for Poisson(3) is 3
integrate(function(y) y * dgamma(y, 2, 0.5), 0, Inf)$value   # gamma(shape 2, rate 0.5): mean 4
set.seed(10); z <- rlnorm(1e5); c(mean(log(z)), log(mean(z)))   # E(log z) is 0, log E(z) is 0.5
```

## In the course
[[Hobbs and Hooten 2015 Ch3]] defines it as the first moment. GLM notes rely on E(Y) = μ.

## Common confusions
- **"Expected value is the most likely value."** That is the mode. For skewed distributions they differ.

## Explain it back
- Compute E(Y) for a variable that is 0 with probability 0.7 and 10 with probability 0.3.

*Pass test:* you can compute an expectation as a probability-weighted sum.

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

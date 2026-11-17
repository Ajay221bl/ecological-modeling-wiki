---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Monte Carlo"
  - "Monte Carlo method"
  - "Stochastic simulation"
status: seedling
---

# Monte Carlo Simulation

**In one line:** Monte Carlo simulation answers a question by drawing many random numbers from a model and summarising what happens.

> [!info] Before this, it helps to know
> [[Random Numbers and set.seed()]] (the raw material) · [[Probability Distribution]] (what is drawn from) · [[Law of Large Numbers]] (why it works)

## The everyday picture
To find the chance of winning at solitaire, you could try to do the mathematics, which is very hard. Or you could play a thousand games and count the wins. Monte Carlo is the second approach, with a computer doing the playing.

## Start from zero
1. **Write down a model you can draw from.**
2. **Draw many times.**
3. **Summarise the draws:** a proportion estimates a probability, an average estimates an expected value, quantiles give intervals.
4. **More draws, more accuracy.** Error shrinks like 1/√(number of draws).
5. **Use 1: probabilities too hard to derive.**
6. **Use 2: testing methods.** Simulate data with known parameters, fit, and see whether the truth is recovered.
7. **Use 3: power and study design.**
8. **Use 4: propagating uncertainty** through calculations.
9. **Use 5: Bayesian computation,** where the posterior itself is explored by simulation.
10. **Set a seed** so the result can be reproduced.

## In R
```r
set.seed(12); n_sim <- 10000
mean(replicate(n_sim, any(rpois(5, 0.5) >= 3)))                      # P(at least one of 5 plots has 3 or more nests) when the mean is 0.5
1 - ppois(2, 0.5)^5                                                  # exact answer for comparison
sapply(c(100, 10000), function(k) sd(replicate(200, mean(runif(k) < 0.3))))     # 100 times the draws, a tenth of the error
```

## In the course
Simulation is used all through the labs to understand models ([[Course Website]]). [[Hobbs and Hooten 2015 Ch7]].

## Common confusions
- **"Simulation is cheating compared with maths."** It is a legitimate numerical method with a known error that you control.

## Explain it back
- How does Monte Carlo error depend on the number of draws?

*Pass test:* you can estimate a probability by simulation and check it.

## Connections
- **Builds on:** [[Random Numbers and set.seed()]], [[Law of Large Numbers]]
- **Leads to:** [[Monte Carlo Integration]], [[MCMC]], [[Simulating Data]], [[Bootstrap]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is Monte Carlo simulation?
??
Using many random draws from a model to approximate probabilities, expectations or distributions.
++++

How does Monte Carlo error shrink with the number of draws N?
??
In proportion to 1/√N.
++++

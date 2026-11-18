---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Monte Carlo simulation answers a question by drawing many random numbers from a model and summarising what happens."
aliases:
  - "Monte Carlo"
  - "Monte Carlo method"
  - "Stochastic simulation"
status: seedling
---

# Monte Carlo Simulation

To find the chance of winning at solitaire you could do some very hard mathematics, or play a thousand games and count the wins. **Monte Carlo simulation** is the second approach with a computer doing the playing: write down a model you can draw random numbers from ([[Random Numbers and set.seed()]], [[Probability Distribution]]), draw many times, and summarise the draws. A proportion estimates a probability, an average an [[Expected Value|expected value]], and quantiles give intervals.

It works because of the [[Law of Large Numbers]], and its error shrinks like 1/√(number of draws), so 100 times the draws gives a tenth of the error. In the code below, 10,000 simulations estimate the chance that at least one of 5 plots has 3 or more nests when the mean is 0.5, about 0.07, matching the exact 1 − P(X ≤ 2)⁵ = 0.070; the last line confirms that 100 times the draws cuts the error tenfold.

Its uses run through the course: probabilities too hard to derive, testing methods by simulating data with known parameters ([[Simulating Data]]), power and [[Study Design|study design]], propagating uncertainty through calculations, resampling such as the [[Bootstrap]], and Bayesian computation, where the posterior is explored by simulation ([[Monte Carlo Integration]], [[MCMC]], [[Hobbs and Hooten 2015 Ch7]], [[Course Website]]). Set a seed so the result can be reproduced. Simulation is not cheating compared with mathematics; it is a legitimate numerical method with an error you control.

```r
set.seed(12); n_sim <- 10000
mean(replicate(n_sim, any(rpois(5, 0.5) >= 3)))                      # P(at least one of 5 plots has 3 or more nests) when the mean is 0.5
1 - ppois(2, 0.5)^5                                                  # exact answer for comparison
sapply(c(100, 10000), function(k) sd(replicate(200, mean(runif(k) < 0.3))))     # 100 times the draws, a tenth of the error
```

## Connections
- **Builds on:** [[Random Numbers and set.seed()]], [[Law of Large Numbers]], [[Expected Value]], [[Study Design]]
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

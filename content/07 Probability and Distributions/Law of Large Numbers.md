---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The law of large numbers says that the average of many independent observations settles ever closer to the true mean as the number of observations grows."
aliases:
  - "LLN"
status: seedling
---

# Law of Large Numbers

On one spin of a roulette wheel the casino may lose, but over a million spins its takings are almost exactly the built-in percentage: luck dominates the short run and washes out in the long run. The **law of large numbers** says that the average of many independent observations settles ever closer to the true mean, the [[Expected Value]], as the number of observations grows. Keep a running average of draws from one distribution: early on it jumps about, and as n grows it homes in.

The reason is dilution. Each new observation is a smaller and smaller share of the total, so no single lucky or unlucky draw can move the average much. In the code below, averages of the first 10, 100, 1,000 and 100,000 draws from a Poisson with mean 4 approach 4 more and more closely, and the figure shows a running proportion that wanders early and then flattens onto the true value ([[Sample Size]]).

This is what justifies estimating a population mean with a sample [[Mean]], and why simulation works at all: averages over many simulated or MCMC draws approximate the quantities they target ([[Monte Carlo Simulation]]). How fast the average settles is described by the [[Standard Error]], and the shape of its remaining wobble by the [[Central Limit Theorem]]. One fallacy to avoid: after a run of tails, heads is not "due". A coin has no memory; averages converge because old results are diluted, not because they are compensated.

![[Randomness long run.png|700]]
*What to look at:* the running proportion wanders early and flattens onto the true value.

```r
set.seed(6)
x <- rpois(1e5, 4)
sapply(c(10, 100, 1000, 1e5), function(n) mean(x[1:n]))      # approaches 4
```

## Connections
- **Builds on:** [[Mean]], [[Expected Value]]
- **Leads to:** [[Central Limit Theorem]], [[Monte Carlo Simulation]], [[Standard Error]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What does the law of large numbers state?
??
The sample mean of independent draws converges to the expected value as sample size increases.
![[Randomness long run.png]]
++++

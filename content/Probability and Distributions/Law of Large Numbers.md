---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "LLN"
status: seedling
---

# Law of Large Numbers

**In one line:** the law of large numbers says that the average of many independent observations settles ever closer to the true mean as the number of observations grows.

> [!info] Before this, it helps to know
> [[Mean]] (the average) · [[Expected Value]] (what it settles on) · [[Sample Size]] (what must grow)

## The everyday picture
A casino. On one spin the house may lose. Over a million spins its takings are almost exactly the built-in percentage. Luck dominates the short run and washes out in the long run.

## Start from zero
1. **Draw independent observations from one distribution.**
2. **Keep a running average.**
3. **Early on it jumps about.**
4. **As n grows, it homes in on the expected value.**
5. **Why:** each new observation is a smaller and smaller share of the total, so no single lucky or unlucky draw can move the average much.
6. **Why it matters:** it justifies estimating a population mean with a sample mean, and it is the reason simulation works. Averages over many MCMC draws approximate posterior means.

## See it
![[Randomness long run.png|700]]
*What to look at:* the running proportion wanders early and flattens onto the true value.

## In R
```r
set.seed(6)
x <- rpois(1e5, 4)
sapply(c(10, 100, 1000, 1e5), function(n) mean(x[1:n]))      # approaches 4
```

## Common confusions
- **"After a run of tails, heads is due."** The gambler's fallacy. The coin has no memory. Averages converge because old results are diluted, not compensated.

## Explain it back
- Why does the running mean stabilise?

*Pass test:* you can explain why bigger samples give steadier means.

## Connections
- **Builds on:** [[Mean]], [[Expected Value]]
- **Leads to:** [[Central Limit Theorem]], [[Monte Carlo Simulation]], [[Standard Error]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What does the law of large numbers state?
??
The sample mean of independent draws converges to the expected value as sample size increases.
![[Randomness long run.png]]
++++

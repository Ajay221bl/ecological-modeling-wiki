---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Composition sampling draws from a distribution that depends on unknown parameters by first drawing the parameters and then drawing the quantity of interest given those parameters."
aliases:
  - "Method of composition"
  - "Sampling by composition"
status: seedling
---

# Composition Sampling

To choose a random student in a district, first pick a school at random, then a student within that school: two simple steps give a draw from the combined distribution. **Composition sampling** draws from a distribution that depends on unknown parameters the same way: first draw the parameters, then draw the quantity of interest given them ([[Conditional Probability]]). You want draws from [y_new | data] = ∫ [y_new | θ] [θ | data] dθ. Step 1 is to draw θ from the posterior, which MCMC has already done ([[Posterior Draws]]); step 2 is to draw y_new from [y_new | θ] using that θ.

Each pair is a draw from the joint distribution, and keeping only y_new gives a draw from its marginal, with θ integrated out and no integral computed ([[Monte Carlo Integration]]). In the code below, posterior draws of a mean have sd 0.51, while new observations simulated one per draw have sd 2.08, carrying both sources of uncertainty.

Its main use is the [[Posterior Predictive Distribution]]. The same trick gives predictions for new groups in hierarchical models: draw the hyperparameters, then a new group effect, then data ([[Hobbs and Hooten 2015 Ch8]]). Simulating new data from the posterior means instead ignores parameter uncertainty and gives intervals that are too narrow.

```r
set.seed(10); mu <- rnorm(4000, 10, 0.5); sigma <- abs(rnorm(4000, 2, 0.2))       # step 1: posterior draws
y_new <- rnorm(4000, mu, sigma)                                                 # step 2: one new observation per draw
c(sd_of_mean = sd(mu), sd_of_new_obs = sd(y_new))
```

## Connections
- **Builds on:** [[Conditional Probability]], [[Posterior Draws]]
- **Leads to:** [[Posterior Predictive Distribution]], [[Monte Carlo Integration]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is composition sampling?
??
Drawing parameters from their posterior and then drawing the quantity of interest conditional on each parameter draw.
++++

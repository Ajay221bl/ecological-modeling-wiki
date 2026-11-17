---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Method of composition"
  - "Sampling by composition"
status: seedling
---

# Composition Sampling

**In one line:** composition sampling draws from a distribution that depends on unknown parameters by first drawing the parameters and then drawing the quantity of interest given those parameters.

> [!info] Before this, it helps to know
> [[Conditional Probability]] (the two-step structure) · [[Posterior Draws]] (step one) · [[Posterior Predictive Distribution]] (its main use)

## The everyday picture
Choosing a random student in a district: first pick a school at random, then pick a student within that school. Two simple steps give a draw from the combined distribution.

## Start from zero
1. **Want:** draws from [y_new | data] = ∫ [y_new | θ] [θ | data] dθ.
2. **Step 1:** draw θ from the posterior. MCMC has already done this.
3. **Step 2:** draw y_new from [y_new | θ] using that θ.
4. **The pair is a draw from the joint.** Keeping only y_new gives a draw from its marginal, with θ integrated out.
5. **No integral is computed.**
6. **The same trick** gives predictions for new groups in hierarchical models: draw the hyperparameters, then a new group effect, then data.

## In R
```r
set.seed(10); mu <- rnorm(4000, 10, 0.5); sigma <- abs(rnorm(4000, 2, 0.2))       # step 1: posterior draws
y_new <- rnorm(4000, mu, sigma)                                                 # step 2: one new observation per draw
c(sd_of_mean = sd(mu), sd_of_new_obs = sd(y_new))
```

## In the course
[[Hobbs and Hooten 2015 Ch8]].

## Common confusions
- **"Simulate new data from the posterior means."** That ignores parameter uncertainty and gives intervals that are too narrow.

## Explain it back
- Describe the two steps.

*Pass test:* you can generate predictive draws by composition.

## Connections
- **Builds on:** [[Conditional Probability]], [[Posterior Draws]]
- **Leads to:** [[Posterior Predictive Distribution]], [[Monte Carlo Integration]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is composition sampling?
??
Drawing parameters from their posterior and then drawing the quantity of interest conditional on each parameter draw.
++++

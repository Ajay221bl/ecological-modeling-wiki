---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Tuning"
  - "Proposal scale"
  - "Adaptation"
  - "Tuning the sampler"
status: seedling
---

# Tuning Parameter

**In one line:** a tuning parameter is a setting of the sampling algorithm, such as the width of the proposal, that affects how efficiently it explores the posterior without changing what the posterior is.

> [!info] Before this, it helps to know
> [[Proposal Distribution]] (what is usually tuned) · [[Acceptance Rate]] (the gauge used for tuning)

## The everyday picture
The gears on a bicycle. The destination is the same in any gear. The right gear gets you there with far less effort.

## Start from zero
1. **Not part of the model.** It belongs to the algorithm.
2. **Example:** the standard deviation s of a Metropolis proposal. In HMC, the step size and the number of steps.
3. **A bad setting doesn't bias the answer in the long run.** It means you need vastly more iterations.
4. **Tuning target for random-walk Metropolis:** an acceptance rate of roughly 20 to 50%.
5. **Modern software tunes itself** during warm-up (adaptation). JAGS adapts. Stan adapts its step size and mass matrix.
6. **Draws made while tuning must be discarded.**
7. **Controls you may still touch in Stan or brms:** `adapt_delta`, `max_treedepth`.

## In R
```r
# norun (brms settings; shown for the syntax)
# fit <- brm(y ~ x, data = d, control = list(adapt_delta = 0.95, max_treedepth = 12))
c(too_small = 0.005, about_right = 0.1, too_large = 2)                   # proposal sds from the Proposal Distribution note
```

## In the course
[[Hobbs and Hooten 2015 Ch7]].

## Common confusions
- **"Tuning changes the result."** It changes the efficiency.

## Explain it back
- Why must draws from the tuning phase be discarded?

*Pass test:* you can name a tuning parameter and what it affects.

## Connections
- **Builds on:** [[Proposal Distribution]]
- **Leads to:** [[Acceptance Rate]], [[Burn-in]], [[Hamiltonian Monte Carlo]], [[Divergent Transitions]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is a tuning parameter in MCMC?
??
An algorithm setting (such as proposal width or step size) that affects sampling efficiency but not the target posterior.
++++

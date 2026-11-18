---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The Metropolis algorithm samples a posterior by proposing a random step from the current value and accepting it with a probability equal to the ratio of posterior heights, so uphill moves are always taken and downhill moves sometimes."
aliases:
  - "Metropolis sampler"
  - "Random-walk Metropolis"
  - "Metropolis sampling"
  - "Metropolis updates"
status: seedling
---

# Metropolis Algorithm

A hiker in fog with an altimeter picks a random nearby spot. If it is higher, they go there; if it is lower, they go only sometimes, often if it is slightly lower and rarely if much lower; otherwise they stay put and count this spot again. The **Metropolis algorithm** samples a posterior with exactly that rule ([[MCMC]]). From the current value, propose a new one by adding a symmetric random step, say Normal(0, s) ([[Proposal Distribution]]). Compute the ratio R of likelihood × prior at the new value to that at the current value, and accept with probability min(1, R). Suppose the current p is 0.30 with unnormalised posterior height 0.27, and the proposal 0.45 has height 0.17. R = 0.62, so draw a random number between 0 and 1 and move if it is below 0.62: this downhill step is taken 62% of the time.

The unknown [[Normalizing Constant]] cancels in R, which is why the algorithm works. If a proposal is rejected, the chain stays and records the current value again; repeats are part of the sample. Repeated thousands of times, values are visited in proportion to their [[Posterior Distribution|posterior probability]]. For numerical safety it is done on the log scale: accept if log(u) < log posterior(new) − log posterior(current). The figure marks accepted and rejected moves, with rejections clustered where the proposal went downhill. In the code below a chain started at 0.9 walks down through 0.79, 0.57 and 0.41 to the posterior, accepts 68% of its proposals and settles at a mean of 0.33.

[[Hobbs and Hooten 2015 Ch7]] builds it step by step. It requires a symmetric proposal; the [[Metropolis-Hastings Algorithm]] removes that requirement. Its efficiency is governed by its [[Acceptance Rate]] and its [[Tuning Parameter]], and [[Gibbs Sampling]] and [[Hamiltonian Monte Carlo]] are its relatives. Two confusions. Rejected proposals are discarded, but the current value is recorded again. And it does not find the maximum: it explores the whole distribution, while an optimiser finds the peak.

![[Metropolis walk.png|700]]
*What to look at:* accepted moves in one colour and rejected proposals in another. Rejections cluster where the proposal went downhill.

```r
h <- function(p) dbinom(3, 10, p) * dbeta(p, 1, 1); c(current = h(0.30), proposed = h(0.45), ratio = h(0.45) / h(0.30))
set.seed(16); cur <- 0.9; out <- numeric(5000); acc <- 0
for (i in 1:5000) { prop <- cur + rnorm(1, 0, 0.15); R <- if (prop > 0 && prop < 1) h(prop) / h(cur) else 0; if (runif(1) < R) { cur <- prop; acc <- acc + 1 }; out[i] <- cur }
c(accept_rate = acc / 5000, post_mean = mean(out[-(1:500)])); round(head(out, 8), 2)        # starts at 0.9 and walks down to the posterior
```

## Connections
- **Builds on:** [[MCMC]], [[Proposal Distribution]], [[Posterior Distribution]]
- **Leads to:** [[Metropolis-Hastings Algorithm]], [[Acceptance Rate]], [[Tuning Parameter]], [[Gibbs Sampling]], [[Hamiltonian Monte Carlo]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How MCMC turns a formula into a posterior]]

## Flashcards

What is the acceptance rule in the Metropolis algorithm?
??
Accept the proposal with probability min(1, R), where R is the ratio of posterior densities at the proposed and current values.
![[Metropolis walk.png]]
++++

Why does Metropolis not need the normalizing constant?
??
It cancels in the ratio of posterior densities.
++++

What is recorded when a proposal is rejected?
??
The current value again.
++++

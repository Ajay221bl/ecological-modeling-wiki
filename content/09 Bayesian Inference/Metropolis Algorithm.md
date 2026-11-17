---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Metropolis sampler"
  - "Random-walk Metropolis"
  - "Metropolis sampling"
  - "Metropolis updates"
status: seedling
---

# Metropolis Algorithm

**In one line:** the Metropolis algorithm samples a posterior by proposing a random step from the current value and accepting it with a probability equal to the ratio of posterior heights, so uphill moves are always taken and downhill moves sometimes.

> [!info] Before this, it helps to know
> [[MCMC]] (the family) · [[Proposal Distribution]] (how steps are suggested) · [[Normalizing Constant]] (which cancels in the ratio)

## The everyday picture
A hiker in fog with an altimeter. Pick a random nearby spot. If it is higher, go there. If it is lower, go there only sometimes: often if it is slightly lower, rarely if it is much lower. Otherwise stay put and count this spot again.

## A tiny example
Current p = 0.30, posterior height 0.27 (unnormalised). Proposed p = 0.45, height 0.17. Ratio = 0.62. Draw a random number between 0 and 1: if it is below 0.62, move. So this downhill step is taken about 62% of the time.

## Start from zero
1. **Start somewhere:** θ_current.
2. **Propose:** θ_new = θ_current + a symmetric random step (say Normal(0, s)).
3. **Compute the ratio** R = [likelihood × prior at θ_new] / [likelihood × prior at θ_current].
4. **The unknown normalizing constant cancels** in R. This is why the algorithm works.
5. **Accept with probability min(1, R).** If R ≥ 1 always move. If R < 1 move with probability R.
6. **If rejected, stay and record the current value again.** Repeats are part of the sample.
7. **Repeat thousands of times.**
8. **Result:** values are visited in proportion to their posterior probability.
9. **On the log scale** (for numerical safety): accept if log(u) < log posterior(new) − log posterior(current).
10. **Requires a symmetric proposal.** Metropolis-Hastings removes that requirement.

## See it
![[Metropolis walk.png|700]]
*What to look at:* accepted moves in one colour and rejected proposals in another. Rejections cluster where the proposal went downhill.

## In R
```r
h <- function(p) dbinom(3, 10, p) * dbeta(p, 1, 1); c(current = h(0.30), proposed = h(0.45), ratio = h(0.45) / h(0.30))
set.seed(16); cur <- 0.9; out <- numeric(5000); acc <- 0
for (i in 1:5000) { prop <- cur + rnorm(1, 0, 0.15); R <- if (prop > 0 && prop < 1) h(prop) / h(cur) else 0; if (runif(1) < R) { cur <- prop; acc <- acc + 1 }; out[i] <- cur }
c(accept_rate = acc / 5000, post_mean = mean(out[-(1:500)])); round(head(out, 8), 2)        # starts at 0.9 and walks down to the posterior
```

## In the course
[[Hobbs and Hooten 2015 Ch7]] builds it step by step.

## Common confusions
- **"Rejected proposals are thrown away."** The proposal is discarded, but the current value is recorded again.
- **"It finds the maximum."** It explores the whole distribution. An optimiser finds the peak.

## Explain it back
- Why does the normalizing constant not matter?
- What happens on a rejection?

*Pass test:* you can write a Metropolis sampler for one parameter.

## Connections
- **Builds on:** [[MCMC]], [[Proposal Distribution]]
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

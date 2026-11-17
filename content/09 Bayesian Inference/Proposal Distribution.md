---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The proposal distribution is the rule an MCMC sampler uses to suggest the next candidate value given the current one."
aliases:
  - "Proposal"
  - "Jumping distribution"
  - "Candidate distribution"
  - "Proposals"
status: seedling
---

# Proposal Distribution

Exploring a dark room, tiny shuffles are safe but take for ever, and giant leaps mostly hit the wall and leave you where you were; a good stride is matched to the size of the room. The **proposal distribution** is the rule an MCMC sampler uses to suggest the next candidate value given the current one ([[Metropolis Algorithm]]). The typical choice is Normal(current value, s), a random walk ([[Normal Distribution]]). It is not the posterior and need not resemble it; it is only a way to generate candidates.

Its width s matters for efficiency, not correctness. Too narrow, and nearly every step is accepted but the chain crawls; too wide, and nearly every step is rejected and the chain sticks. The figure shows three trace plots: crawling, sticking and a healthy fuzzy band ([[Trace Plot]]). In the code below, a proposal sd of 0.005 is accepted 96% of the time but yields an effective sample of only 17 from 5,000 draws; an sd of 2 is accepted 3% of the time and yields 86; an sd of 0.1 is accepted 47% of the time and yields about 1,180 ([[Acceptance Rate]], [[Tuning Parameter]]).

Symmetric proposals give plain Metropolis, and asymmetric ones need the Hastings correction ([[Metropolis-Hastings Algorithm]]). Modern samplers build clever proposals from the posterior's gradient, as in Hamiltonian Monte Carlo ([[Hobbs and Hooten 2015 Ch7]]). The proposal has nothing to do with the prior; they are unrelated.

![[Proposal width.png|700]]
*What to look at:* three trace plots. Crawling (too narrow), sticking (too wide) and a healthy fuzzy band (about right).

```r
h <- function(p) if (p <= 0 || p >= 1) 0 else dbinom(30, 100, p)
run <- function(s) { set.seed(18); cur <- 0.5; acc <- 0; out <- numeric(5000); for (i in 1:5000) { pr <- cur + rnorm(1, 0, s); if (runif(1) < h(pr) / h(cur)) { cur <- pr; acc <- acc + 1 }; out[i] <- cur }
  c(accept = acc / 5000, ess = unname(coda::effectiveSize(out))) }
round(sapply(c(narrow = 0.005, good = 0.1, wide = 2), run), 2)           # acceptance rate and effective sample size for three widths
```

## Connections
- **Builds on:** [[Metropolis Algorithm]]
- **Leads to:** [[Tuning Parameter]], [[Acceptance Rate]], [[Metropolis-Hastings Algorithm]], [[Trace Plot]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a proposal distribution?
??
The distribution from which an MCMC algorithm draws candidate values given the current value.
![[Proposal width.png]]
++++

What happens if the proposal distribution is too narrow or too wide?
??
Too narrow: high acceptance but slow exploration. Too wide: most proposals rejected and the chain sticks.
++++

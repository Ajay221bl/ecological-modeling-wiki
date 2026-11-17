---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Proposal"
  - "Jumping distribution"
  - "Candidate distribution"
  - "Proposals"
status: seedling
---

# Proposal Distribution

**In one line:** the proposal distribution is the rule an MCMC sampler uses to suggest the next candidate value given the current one.

> [!info] Before this, it helps to know
> [[Metropolis Algorithm]] (where it is used) · [[Normal Distribution]] (the usual choice)

## The everyday picture
The length of your stride when exploring a dark room. Tiny shuffles are safe but take for ever. Giant leaps mostly hit the wall and leave you where you were. A good stride is matched to the size of the room.

## Start from zero
1. **Typical choice:** Normal(current value, s). A random walk.
2. **It is not the posterior** and need not resemble it. It is only a way to generate candidates.
3. **Its width s matters for efficiency,** not for correctness.
4. **Too narrow:** nearly every step is accepted, but the chain crawls.
5. **Too wide:** nearly every step is rejected, and the chain sticks.
6. **Symmetric proposals** give plain Metropolis. Asymmetric ones need the Hastings correction.
7. **Modern samplers build clever proposals** from the posterior's gradient (Hamiltonian Monte Carlo).

## See it
![[Proposal width.png|700]]
*What to look at:* three trace plots. Crawling (too narrow), sticking (too wide) and a healthy fuzzy band (about right).

## In R
```r
h <- function(p) if (p <= 0 || p >= 1) 0 else dbinom(30, 100, p)
run <- function(s) { set.seed(18); cur <- 0.5; acc <- 0; out <- numeric(5000); for (i in 1:5000) { pr <- cur + rnorm(1, 0, s); if (runif(1) < h(pr) / h(cur)) { cur <- pr; acc <- acc + 1 }; out[i] <- cur }
  c(accept = acc / 5000, ess = unname(coda::effectiveSize(out))) }
round(sapply(c(narrow = 0.005, good = 0.1, wide = 2), run), 2)           # acceptance rate and effective sample size for three widths
```

## In the course
[[Hobbs and Hooten 2015 Ch7]].

## Common confusions
- **"The proposal should match my prior."** They are unrelated.

## Explain it back
- What happens when the proposal is too wide?

*Pass test:* you can diagnose a proposal width from a trace plot.

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

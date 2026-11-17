---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The Metropolis-Hastings algorithm extends Metropolis to proposal distributions that are not symmetric by adding a correction factor to the acceptance ratio."
aliases:
  - "Metropolis-Hastings"
  - "MH algorithm"
  - "M-H"
  - "Hastings correction"
status: seedling
---

# Metropolis-Hastings Algorithm

A hiker whose compass is biased toward the east would drift east for no good reason if they simply followed the Metropolis rule. The **Metropolis-Hastings algorithm** discounts the moves a lopsided compass suggests too readily. The [[Metropolis Algorithm]] assumes the chance of proposing B from A equals that of proposing A from B, but sometimes you want an asymmetric [[Proposal Distribution]], such as a lognormal or gamma proposal for a positive parameter that never suggests negative values.

The corrected ratio is R = [posterior(new) / posterior(current)] × [q(current | new) / q(new | current)], where q is the proposal density. The second factor is the Hastings correction; for symmetric proposals it equals 1, giving back Metropolis. Accept with probability min(1, R), as before. In the code below a lognormal proposal samples a Poisson rate with a Gamma(2, 1) prior and counts 3, 5, 4, 6 and 2; the chain's mean is 3.71 against the exact conjugate answer of 22/6 = 3.67.

[[Gibbs Sampling]] is a special case in which every proposal is accepted ([[MCMC]], [[Hobbs and Hooten 2015 Ch7]]). Metropolis and Metropolis-Hastings are not different methods: one is the symmetric special case of the other.

```r
set.seed(17); y <- c(3, 5, 4, 6, 2); lp <- function(l) sum(dpois(y, l, log = TRUE)) + dgamma(l, 2, 1, log = TRUE)
cur <- 1; out <- numeric(10000)
for (i in 1:10000) { prop <- rlnorm(1, log(cur), 0.4)                    # asymmetric proposal: always positive
  logR <- lp(prop) - lp(cur) + dlnorm(cur, log(prop), 0.4, log = TRUE) - dlnorm(prop, log(cur), 0.4, log = TRUE)
  if (log(runif(1)) < logR) cur <- prop; out[i] <- cur }
c(mh_mean = mean(out[-(1:1000)]), exact = 22 / 6)
```

## Connections
- **Builds on:** [[Metropolis Algorithm]], [[Proposal Distribution]]
- **Leads to:** [[Gibbs Sampling]], [[MCMC]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What does Metropolis-Hastings add to Metropolis?
??
A correction factor q(current | new) / q(new | current) that allows asymmetric proposal distributions.
++++

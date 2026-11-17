---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Metropolis-Hastings"
  - "MH algorithm"
  - "M-H"
  - "Hastings correction"
status: seedling
---

# Metropolis-Hastings Algorithm

**In one line:** the Metropolis-Hastings algorithm extends Metropolis to proposal distributions that are not symmetric by adding a correction factor to the acceptance ratio.

> [!info] Before this, it helps to know
> [[Metropolis Algorithm]] (the base case) · [[Proposal Distribution]] (now possibly lopsided)

## The everyday picture
A hiker whose compass is biased toward the east. If they simply followed the Metropolis rule they would drift east for no good reason. The Hastings correction discounts moves that the biased compass suggests too readily.

## Start from zero
1. **Metropolis assumes** the chance of proposing B from A equals that of proposing A from B.
2. **Sometimes you want asymmetric proposals:** for a positive parameter, a lognormal or gamma proposal that never suggests negative values.
3. **Corrected ratio:** R = [posterior(new) / posterior(current)] × [q(current | new) / q(new | current)].
4. **The second factor is the Hastings correction.** It equals 1 for symmetric proposals, which gives back Metropolis.
5. **Accept with probability min(1, R),** as before.
6. **Gibbs sampling is a special case** in which every proposal is accepted.

## In R
```r
set.seed(17); y <- c(3, 5, 4, 6, 2); lp <- function(l) sum(dpois(y, l, log = TRUE)) + dgamma(l, 2, 1, log = TRUE)
cur <- 1; out <- numeric(10000)
for (i in 1:10000) { prop <- rlnorm(1, log(cur), 0.4)                    # asymmetric proposal: always positive
  logR <- lp(prop) - lp(cur) + dlnorm(cur, log(prop), 0.4, log = TRUE) - dlnorm(prop, log(cur), 0.4, log = TRUE)
  if (log(runif(1)) < logR) cur <- prop; out[i] <- cur }
c(mh_mean = mean(out[-(1:1000)]), exact = 22 / 6)
```

## In the course
[[Hobbs and Hooten 2015 Ch7]].

## Common confusions
- **"Metropolis and Metropolis-Hastings are different methods."** One is the symmetric special case of the other.

## Explain it back
- When is the Hastings correction equal to 1?

*Pass test:* you can say what the correction is for.

## Connections
- **Builds on:** [[Metropolis Algorithm]], [[Proposal Distribution]]
- **Leads to:** [[Gibbs Sampling]], [[MCMC]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What does Metropolis-Hastings add to Metropolis?
??
A correction factor q(current | new) / q(new | current) that allows asymmetric proposal distributions.
++++

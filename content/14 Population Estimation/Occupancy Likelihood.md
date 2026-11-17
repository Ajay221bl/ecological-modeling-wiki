---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The occupancy likelihood is the product, over all sites, of the probability of each site's detection history, written in terms of ψ and p, which the model maximises to estimate both."
aliases:
  - "Likelihood of an occupancy model"
  - "Occupancy likelihood function"
  - "L(psi, p | histories)"
status: seedling
---

# Occupancy Likelihood

Imagine scoring a guess about a street of houses ("60% have a cat, and a cat shows itself 40% of the time") by asking how likely that guess makes the exact sightings you wrote down at every house. The **occupancy likelihood** is the product, over all sites, of the probability of each site's [[Detection History]], written in terms of ψ (occupancy) and p (detection), and the model picks the ψ and p that make the whole data set most probable ([[Likelihood Function]], [[Maximum Likelihood Estimation]], [[Occupancy]]). Each site gets one of two kinds of term. A history with at least one 1 must come from an occupied site, so its term is ψ times a p for every detection and a (1 − p) for every miss: in the guest lecture's 30 sites and 4 surveys, site 1 with history 1001 contributes ψ·p₁(1 − p₂)(1 − p₃)p₄, and site 3 with 1100 contributes ψ·p₁p₂(1 − p₃)(1 − p₄).

An all-zero history is the interesting one, because it has two routes: the site was occupied and the species was missed four times, ψ(1 − p₁)(1 − p₂)(1 − p₃)(1 − p₄), or the site was empty, (1 − ψ). Because the routes cannot both happen, their probabilities add ([[Union of Events]]). The sites are assumed independent, so their terms multiply: L(ψ, p | H₁ … H₃₀) = ∏ Pr(Hᵢ) ([[Independent Events]], [[Site Independence Assumption]]). In the code below, with ψ = 0.6 and p = 0.4, histories 1001 and 1100 each have probability 0.0346, history 0000 has 0.4778, and the log-likelihood of the three sites together is −7.469. A computer tries many ψ and p values and keeps the pair with the largest log-likelihood; the base-R fits in [[Occupancy]] and [[Single-season Occupancy]] do exactly that with `optim()` ([[Numerical Optimization]]).

This is the engine taught in the Nov 3 [[Occupancy Guest Lecture]] and in [[Powell and Gale 2015]] Ch15. The likelihood is not the probability that ψ is right; it is the probability of the data you saw if ψ and p took particular values, used to compare those values ([[Probability vs Likelihood]]).

```r
psi <- 0.6; p <- 0.4
pr <- function(h) if (sum(h) > 0) psi * prod(ifelse(h == 1, p, 1 - p)) else psi * (1 - p)^length(h) + (1 - psi)
H <- list(site1 = c(1, 0, 0, 1), site2 = c(0, 0, 0, 0), site3 = c(1, 1, 0, 0))
probs <- sapply(H, pr); round(probs, 4)
round(sum(log(probs)), 3)   # log-likelihood of these three sites
```

## Connections
- **Builds on:** [[Detection History]], [[Likelihood Function]], [[Independent Events]]
- **Leads to:** [[Maximum Likelihood Estimation]], [[Single-season Occupancy]], [[Site Independence Assumption]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Assumptions of Occupancy Models]]

## Flashcards

Write the probability of detection history 1001.
??
ψ·p₁(1 − p₂)(1 − p₃)p₄.
++++

Write the probability of history 0000 and explain its two parts.
??
ψ(1 − p₁)(1 − p₂)(1 − p₃)(1 − p₄) for occupied but always missed, plus (1 − ψ) for unoccupied.
++++

How are site probabilities combined into the occupancy likelihood?
??
Multiplied over sites, L = ∏ Pr(Hᵢ), which assumes sites are independent.
++++

---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Occupancy Model"
  - "Occupancy model"
  - "Site occupancy"
  - "Occupancy Probability (psi)"
  - "Occupancy probability"
  - "psi"
  - "ψ"
  - "Site-occupancy model"
status: seedling
---

# Occupancy

**In one line:** occupancy ψ (psi) is the probability that a site is occupied by a species, or equivalently the proportion of sites occupied, estimated while accounting for imperfect detection.

> [!info] Before this, it helps to know
> [[Imperfect Detection]] · [[Detection Probability]] · [[Bernoulli Distribution]] · [[Latent Variable]]

## The everyday picture
Checking which houses on a street have a cat. Some cats hide whenever you visit. If you visit each house several times, the pattern of sightings at houses where you did see a cat tells you how often cats hide, and so how many "no cat" houses probably have a hidden one.

## A tiny example
Powell and Gale (2015 Ch15): four points, three visits. Histories 000, 000, 010, 111. Naive occupancy is 2 of 4 = 50%, but the true state was 1, 0, 1, 1, so true occupancy was 75%.

## Start from zero
1. **Two parameters:** ψ (site occupied) and p (detected on a visit, given occupied).
2. **The true state z (1 or 0) is latent.** Data are detection histories from repeat visits.
3. **ψ̂ ≥ naive occupancy** whenever p < 1.
4. **Uses:** rare or elusive species, range and distribution monitoring, habitat relationships, invasive spread, disease.
5. **Data are cheap:** presence or absence by sight, sign, calls, cameras or recordings.
6. **Introduced by MacKenzie et al. (2002) and Tyre et al. (2003)** (as cited in Powell and Gale).

## See it
mermaid:
flowchart TD
  S["Site"] -->|"ψ"| O["Occupied z = 1"]
  S -->|"1 − ψ"| U["Unoccupied z = 0"]
  O -->|"p each visit"| D["Detected 1"]
  O -->|"1 − p"| M["Missed 0"]
  U --> Z["Always 0"]
*What to look at:* zeros come from two branches; repeat visits let the model split them.

## In R
```r
set.seed(1); S <- 100; K <- 4; z <- rbinom(S, 1, 0.6); y <- matrix(rbinom(S * K, 1, z * 0.3), S, K)
d <- rowSums(y); nll <- function(b) { ps <- plogis(b[1]); pp <- plogis(b[2]); -sum(log(ps * pp^d * (1 - pp)^(K - d) + (1 - ps) * (d == 0))) }
fit <- optim(c(0, 0), nll)
round(c(true = mean(z), naive = mean(d > 0), psi_hat = plogis(fit$par[1]), p_hat = plogis(fit$par[2])), 2)
```

## In the course
Occupancy guest lecture ([[Course Website]]). [[Powell and Gale 2015]] Ch15. [[Guélat and Kéry 2018]] (site-occupancy models as the occurrence analogue of N-mixture models).

## Common confusions
- **"Occupancy is the same as abundance."** A site with one animal and a site with fifty are both occupied.
- **"ψ is the proportion of sites where the species was seen."** That is naive occupancy.

## Explain it back
- What are the two parameters of a basic occupancy model?

*Pass test:* you can explain what ψ and p are and why ψ̂ is above naive occupancy.

## Connections
- **Builds on:** [[Imperfect Detection]], [[Detection Probability]], [[Latent Variable]]
- **Leads to:** [[Detection History]], [[Naive Occupancy]], [[Single-season Occupancy]], [[Multi-season Occupancy]], [[Closure Assumption]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Naive vs Estimated Occupancy]], [[Occupancy vs Abundance]], [[Occupancy vs Detection Probability]], [[Occupancy Workflow in R]]

## Flashcards

What is occupancy ψ?
??
The probability a site is occupied by a species (proportion of sites occupied), accounting for imperfect detection.
++++

In the simulation (true 0.57), why was naive occupancy only 0.41?
??
With p = 0.3 and 4 visits, many occupied sites were never detected.
++++

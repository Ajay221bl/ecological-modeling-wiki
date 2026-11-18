---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "A stacked occupancy design treats each site in each year as its own row of a single-season model, with year as a covariate, so several years can be analysed without fitting colonization and extinction."
aliases:
  - "Stacked single-season occupancy"
  - "Stacking site-years"
  - "Site-year as site"
  - "Stacked design"
status: seedling
---

# Stacked Occupancy Design

Suppose you surveyed the same street's houses for cats in two different summers, but saw so few cats that tracking which houses gained or lost a cat is hopeless. You can still ask whether more houses had cats in one summer than the other by listing every house-summer as its own line and noting the year. A **stacked occupancy design** treats each site in each year as its own row of a [[Single-season Occupancy]] model, with year as a [[Predictor Variable|covariate]] on ψ (and often on p), so several years can be analysed without fitting colonization and extinction ([[Multi-season Occupancy]], [[Categorical Variable]]). Closure is still assumed within each year's visits, and the rows from one site in different years are treated as independent sites ([[Closure Assumption]], [[Site Independence Assumption]]).

It is the practical choice when detections are too sparse for a dynamic model, which needs many sites that switch state to estimate γ and ε. In the code below, 120 hexes surveyed in 2013 and 2014 become 240 rows; the stacked model with a year effect returns ψ̂ = 0.27 for 2013 and 0.09 for 2014 against true values of 0.26 and 0.09, with p̂ = 0.53. The price is that it cannot tell you whether the drop came from local extinctions or from different sites being occupied, and if the same site's years are strongly related the standard errors are optimistic, which a site [[Random Effect]] can absorb.

[[Happe et al. 2020]] used exactly this design for reintroduced fishers: "each hex-by-year combination" was a site (263 site-years from 143 hexes), year was in every [[Occupancy Model|occupancy model]], and they said plainly that with so few detections they "were not able to examine colonization and extinction dynamics" ([[Fisher Occupancy Case Study]]). A stacked model is not a dynamic model with fewer parameters; it simply never asks how a site changed from one year to the next.

```r
set.seed(7); H <- 120; K <- 3
z13 <- rbinom(H, 1, 0.25); z14 <- rbinom(H, 1, 0.10)                # the same hexes in two years
yr <- rep(0:1, each = H); z <- c(z13, z14)                            # stacked: 240 site-year rows
y <- matrix(rbinom(2 * H * K, 1, z * 0.6), 2 * H, K); d <- rowSums(y)
nll <- function(b) { ps <- plogis(b[1] + b[2] * yr); pp <- plogis(b[3]); -sum(log(ps * pp^d * (1 - pp)^(K - d) + (1 - ps) * (d == 0))) }
o <- optim(c(0, 0, 0), nll, method = "BFGS")
round(c(psi_2013 = plogis(o$par[1]), psi_2014 = plogis(sum(o$par[1:2])), p = plogis(o$par[3]), true_2013 = mean(z13), true_2014 = mean(z14)), 2)
```

## Connections
- **Builds on:** [[Single-season Occupancy]], [[Categorical Variable]], [[Predictor Variable]]
- **Leads to:** [[Multi-season Occupancy]], [[Random Effect]], [[Occupancy Model]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Single-season vs Multi-season Occupancy]], [[Fisher Occupancy Case Study]]

## Flashcards

What is a stacked occupancy design?
??
Each site-year is a separate row of a single-season model, with year as a covariate.
++++

When is stacking preferred over a dynamic (colext) model?
??
When detections are too sparse to estimate colonization and extinction.
++++

What can a stacked model not tell you?
??
Whether changes come from colonization or extinction at particular sites.
++++

---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Observation error is the extra noise, and sometimes bias, added by how you measure, such as birds that are present but missed in a count."
aliases:
  - "Measurement error"
  - "Observation variance"
status: seedling
---

# Observation Error

Step on the bathroom scales twice in a row and you might read 70.2 kg then 70.6 kg, though your weight did not change in those ten seconds. That wobble comes from the measuring, not from you, and it is **observation error**: the extra variation, and sometimes bias, added by how you measure. If the scales also read 1 kg heavy every time, that part is observation *bias* ([[Bias]]). In the field the sources are missed animals, differences between observers, wind and instruments. A key one is *[[Detection Probability|detection probability]]*, the chance that an animal that is present actually gets counted. Hobbs and Hooten write the observation error variance as σ²ₒ and give it a layer of its own in a model, the *[[Data Model|observation model]]*, because it describes your methods rather than the ecology ([[Hobbs and Hooten 2015 Ch1]], [[Data Model, Process Model and Parameter Model]]).

An example. The true population over four years is 100, 104, 98 and 107, a range of 9. You spot about 60% of the birds and scale the counts up by 1/0.6, getting estimates of 92, 113, 88 and 122, a range of 34. The extra swing, nearly four times the real one, is observation error. Mistake it for real change and you would think the population is wildly unstable. Notice too that scaling by detection fixed the average bias (counts are no longer 40% low) but not the wobble.

You never see the true state directly, so observation error always mixes with the real year-to-year change in nature, [[Process Variation]]. Separating the two usually needs *replicate observations*, [[Repeated Measures|repeated measurements]] of the same state such as two counts at one site in one week, or prior information ([[Hobbs and Hooten 2015 Ch6]]); with one count per state, both just look like scatter. Ignoring observation error inflates apparent variability and, when detection is imperfect, underestimates abundance, and modeling it is the idea behind occupancy and detection models. A model's [[Residual]] is not observation error on its own; it mixes every source unless the model separates them.

![[Process vs observation error.png|700]]
*What to look at:* the orange counts wiggle around the blue line; that extra wiggle is observation error.

```r
set.seed(7)
N <- numeric(25); N[1] <- 50
for (t in 2:25) N[t] <- N[t - 1] * exp(rnorm(1, 0.02, 0.12))
counts <- rpois(25, N * 0.6) / 0.6     # detection 0.6 adds observation error
sd(diff(log(N))); sd(diff(log(counts)))   # counts look more variable than the truth
```

## Connections
- **Builds on:** [[Process Variation]], [[Bias]]
- **Leads to:** [[Hierarchical Model]], [[Data Model, Process Model and Parameter Model]], [[Residual]], [[Detection Probability]], [[Data Model]], [[Repeated Measures]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Process vs Observation Error]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch1]]

## Flashcards

What is observation error?
??
Extra noise (and possibly bias) added by how we measure the true state, such as missed birds in a count.
![[Process vs observation error.png]]
++++

Why does mistaking observation error for process variation matter?
??
Nature looks more variable than it is (e.g., overstating extinction risk), and ignoring detection bias underestimates abundance.
++++

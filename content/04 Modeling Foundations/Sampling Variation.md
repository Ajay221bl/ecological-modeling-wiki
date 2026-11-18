---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Sampling variation is the difference in results that comes purely from *which* units happened to be in your sample."
aliases:
  - "Sampling error"
status: seedling
---

# Sampling Variation

Two friends each grab a handful of mixed [[Hamiltonian Monte Carlo|nuts]] from the same bowl. One gets 6 cashews, the other 3. Nobody counted wrongly and the bowl did not change; the difference is just the luck of the grab. **Sampling variation** is that difference: the variation in results that comes purely from *which* units happened to end up in your [[Sample]]. Hobbs and Hooten write its variance as σ²ₛ and give it a layer of its own, the *[[Data Model|sampling model]]*, which describes which units of the population get sampled; it sits between the [[Process Model|process model]] and the observation model ([[Hobbs and Hooten 2015 Ch1]]).

An example. A pond holds 200 turtles, 25% of them female. Trap 40 at random three times and you might get 10 females (0.25), 8 (0.20) and 13 (0.33). The pond did not change and every turtle was sexed correctly; the spread from 0.20 to 0.33 is sampling variation. The spread of an estimate over all possible samples is its *[[Sampling Distribution|sampling distribution]]*, and its [[Standard Deviation|standard deviation]] is the [[Standard Error]]. For a proportion the usual formula gives √(0.25 × 0.75 / 40) ≈ 0.07. A simulation of 5,000 samples gives about 0.06, a little less, because 40 turtles is a fifth of the pond, and sampling a big share of a small population leaves less room for luck.

Every estimate comes from one sample out of many possible ones, so knowing how much samples differ by luck alone is what turns a single number into a number with an honest margin of error. Sampling variation shrinks with bigger samples, because unusual units are diluted in a larger handful. It is neither nature changing ([[Process Variation]]) nor measuring badly ([[Observation Error]]), and despite the older name "sampling error" it is not a mistake: it happens even with perfect methods. Nor is it bias: sampling variation scatters estimates around the truth, while bias shifts them away from it ([[Bias]], [[Population]]).

![[Parameter vs estimate.png|700]]
*What to look at:* each orange dot is one sample's estimate; their scatter is sampling variation.

```r
set.seed(9)
pond <- c(rep(1, 50), rep(0, 150))            # 200 turtles, 25% female
replicate(3, mean(sample(pond, 40)))          # three samples, three answers
sd(replicate(5000, mean(sample(pond, 40))))   # about 0.06
```

## Connections
- **Builds on:** [[Sample]], [[Population]], [[Standard Deviation]]
- **Leads to:** [[Standard Error]], [[Process Variation]], [[Observation Error]], [[Hamiltonian Monte Carlo]], [[Data Model]], [[Process Model]], [[Sampling Distribution]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Process vs Observation Error]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch1]]

## Flashcards

What is sampling variation?
??
Differences in results caused only by which units happened to be in the sample.
![[Parameter vs estimate.png]]
++++

How does sampling variation differ from process variation and observation error?
??
Process variation is real change in nature; observation error comes from measuring; sampling variation comes from which units were picked.
++++

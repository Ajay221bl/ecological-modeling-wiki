---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Replicates"
  - "True replication"
status: seedling
---

# Replication

**In one line:** replication means applying each condition to several independent units, so you can tell a real effect from the natural differences between units.

> [!info] Before this, it helps to know
> [[Sampling Unit]] (the thing a treatment is applied to) · [[Variance]] (spread among units) · [[Experimental Study]] (assigning conditions)

## The everyday picture
Tasting two brands of crisps. One crisp from each bag proves little: any single crisp might be burnt. Ten from each, from different bags, lets you judge the brand and not the crisp.

*Where the picture stops working:* ten crisps from one bag is cheating. They share a bag, so they are not independent tastes of the brand.

## A tiny example
Burn effect on richness.
- One burned plot (9 species) and one unburned (6): difference 3. Plots differ by about ±2 anyway, so 3 means nothing.
- Five of each: means 9.0 and 6.2, SD 2. SE of the difference = √(2²/5 + 2²/5) = **1.26**. Difference 2.8 is about 2.2 SEs. Now there is evidence.
- Twenty subsamples inside one burned plot are still **one** replicate of burning.

## Start from zero
1. **Units differ even when treated alike.**
2. **So one unit per condition confounds condition with unit.**
3. **Several units per condition reveal the background spread.**
4. **The effect is judged against that spread.** *Why:* an effect is only convincing if it is large compared with what untreated units do on their own.
5. **Replicates must be independent.** They are counted at the level the treatment was applied.
6. **Subsamples improve the measurement of a unit, not the count of units** ([[Pseudoreplication]]).

## See it
![[Replication.png|700]]
*What to look at:* with one plot each you can't say whether the gap is treatment or plot. With five each, the groups separate from the scatter.

## Why it is this way
Replication is what turns a difference into evidence, because it supplies the yardstick of natural variation. It is also where ecological studies most often go wrong: large-scale treatments such as a fire or a dam are applied once, and many measurements inside them get mistaken for replicates.

## In R
```r
set.seed(7)
burned <- rnorm(5, 9, 2); unburned <- rnorm(5, 6.2, 2)
t.test(burned, unburned)$p.value                 # judged against plot-to-plot spread
# pseudoreplication: 20 subsamples in ONE plot per treatment
one_b <- rnorm(1, 9, 2) + rnorm(20, 0, 0.5); one_u <- rnorm(1, 6.2, 2) + rnorm(20, 0, 0.5)
t.test(one_b, one_u)$p.value                     # absurdly small, and meaningless
```
The second test compares two plots, not two treatments, yet reports overwhelming "evidence".

## In the course
Harrison and colleagues open their mixed model review with hierarchical, non-independent data ([[Harrison et al. 2018]]). Homework 4's critique turns on which level is replicated ([[Course Website]]).

## Common confusions
- **"More measurements means more replication."** Only more independent units at the treatment level count.
- **"Replication means repeating the whole study."** That is reproducibility. Replication here is within a study.

## Explain it back
- Why can't one treated and one untreated unit show an effect?
- At what level do you count replicates?

*Pass test:* you can identify the true replicates in a design with subsamples.

## Connections
- **Builds on:** [[Sampling Unit]], [[Experimental Study]]
- **Leads to:** [[Pseudoreplication]], [[Nested Experimental Design]], [[Random Effect]]
- **Part of:** [[MOC - Modeling Foundations]]

## Flashcards

What is replication?
??
Applying each condition to several independent units.
![[Replication.png]]
++++

Why is replication needed?
??
It shows how much units vary on their own, the yardstick an effect is judged against.
++++

Are 20 subsamples in one treated plot 20 replicates?
??
No. The treatment was applied once, so there is one replicate.
++++

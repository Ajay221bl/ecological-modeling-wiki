---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Replication means applying each condition to several independent units, so you can tell a real effect from the natural differences between units."
aliases:
  - "Replicates"
  - "True replication"
status: seedling
---

# Replication

To compare two brands of crisps, one crisp from each bag proves little, because any single crisp might be burnt. Ten from each brand, taken from different bags, lets you judge the brand and not the crisp. **Replication** means applying each condition to several independent units, so you can tell a real effect from the natural differences between units. Units differ even when treated alike (that spread is measured by the [[Variance]]), so with one unit per condition the condition and the unit are hopelessly tangled. Ten crisps from one bag would be cheating: they share a bag, so they are not independent tastes of the brand.

Numbers make it clear. One burned plot holds 9 species and one unburned plot 6, a difference of 3. But plots differ by about ±2 anyway, so a difference of 3 between two single plots means nothing. Now take five plots of each, with means 9.0 and 6.2 and a plot-to-plot standard deviation of 2. The standard error of the difference is √(2²/5 + 2²/5) = 1.26, so the difference of 2.8 is about 2.2 standard errors, and now there is evidence. An effect is only convincing when it is large compared with what untreated units do on their own, and replication supplies that yardstick of natural variation.

Replicates must be independent, and they are counted at the level where the treatment was applied ([[Sampling Unit]]). Twenty measurements inside one burned plot are still one replicate of burning: they improve the measurement of that plot, not the count of plots. Treating them as replicates is [[Pseudoreplication]], and a simulation shows why it is dangerous: comparing 20 subsamples in one burned plot with 20 in one unburned plot gives an absurdly small p-value, because the test is really comparing two plots, not two treatments. This is where ecological studies most often go wrong, since large-scale treatments such as a fire or a dam are applied only once. Note that replication here means repeating within a study; repeating a whole study elsewhere is reproducibility. Designs with measurements inside units are [[Nested Experimental Design]]s, analysed with a [[Random Effect]] for each unit ([[Harrison et al. 2018]]). Replication is a core part of an [[Experimental Study]].

![[Replication.png|700]]
*What to look at:* with one plot each you can't say whether the gap is treatment or plot. With five each, the groups separate from the scatter.

```r
set.seed(7)
burned <- rnorm(5, 9, 2); unburned <- rnorm(5, 6.2, 2)
t.test(burned, unburned)$p.value                 # judged against plot-to-plot spread
# pseudoreplication: 20 subsamples in ONE plot per treatment
one_b <- rnorm(1, 9, 2) + rnorm(20, 0, 0.5); one_u <- rnorm(1, 6.2, 2) + rnorm(20, 0, 0.5)
t.test(one_b, one_u)$p.value                     # absurdly small, and meaningless
```
The second test compares two plots, not two treatments, yet reports overwhelming "evidence".

## Connections
- **Builds on:** [[Sampling Unit]], [[Experimental Study]]
- **Leads to:** [[Pseudoreplication]], [[Nested Experimental Design]], [[Random Effect]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]

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

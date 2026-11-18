---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Random sampling means choosing units by chance so that every unit in the study population has a known probability of being picked."
aliases:
  - "Simple random sampling"
  - "Probability sampling"
status: seedling
---

# Random Sampling

Draw names from a well-mixed hat and nobody's preferences, convenience or hunches influence who comes out. Whatever makes people differ, tall or short, keen or shy, has an equal chance of being drawn. **Random sampling** applies this to field units: you choose which units to measure by chance, so that every unit in the [[Study Population]] has a known probability of being picked. In the simplest version, *simple random sampling*, each unit has the same probability. A hat needs every name written down, and listing every animal is impossible, so ecologists usually randomize places or times instead, such as numbered plots or survey dates.

Why does it matter? Say you have 200 numbered plots and need 20, and birds are more common far from roads. The convenient choice, the 20 plots nearest the road, is easy and probably unlike the rest: in a simulation where the true average is about 9 birds per plot, those 20 roadside plots average about 4 to 5. A random choice, `sample(1:200, 20)`, gives each plot a probability of 20/200 = 0.10 of selection, and averaged over many random samples the estimate lands right on the truth. Human judgement in picking units tends to follow access, visibility and habitat, all of which can affect the response, and that creates [[Bias]]. Randomization makes selection independent of every property of the units, including ones nobody thought to list, and it also licenses the maths: standard errors and tests assume chance selection ([[Unbiased Estimator]]).

Two cautions. "Random" does not mean haphazard: wandering about and picking plots "at random" by eye is not random, because people are bad at it, so use a [[Random Numbers and set.seed()|random number generator]]. And a random sample is representative only on average; a small random sample can still be lopsided by bad luck ([[Representative Sample]]). Variants such as stratified, systematic and cluster sampling keep the chance element but add structure to improve efficiency ([[Survey Sampling Designs]]). Do not confuse random sampling, which decides which units are studied and so to whom results apply, with [[Randomization]], which decides which units get a treatment and so whether an effect can be called causal. Powell and Gale tie random sampling to unbiased estimation ([[Powell and Gale 2015 Ch2]]), and the result is a [[Sample]] you can generalize from.

![[Random vs convenience sampling.png|700]]
*What to look at:* the convenience sample hugs the road while the random sample covers the whole area.

```r
set.seed(12)
plots <- data.frame(id = 1:200, dist_road = runif(200, 0, 5))
plots$birds <- rpois(200, 4 + 2 * plots$dist_road)        # more birds far from roads
mean(plots$birds)                                         # truth, about 9
mean(plots$birds[order(plots$dist_road)][1:20])           # 20 nearest the road: about 4 to 5
mean(replicate(2000, mean(sample(plots$birds, 20))))      # random samples: right on average
```
The convenience sample is badly biased. The random one centres on the truth.

## Connections
- **Builds on:** [[Study Population]], [[Sample]]
- **Leads to:** [[Representative Sample]], [[Randomization]], [[Survey Sampling Designs]], [[Unbiased Estimator]], [[Random Numbers and set.seed()]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]

## Flashcards

What is random sampling?
??
Selecting units by a chance mechanism so each has a known probability of being chosen.
![[Random vs convenience sampling.png]]
++++

Why does random sampling prevent bias?
??
Selection is independent of every characteristic of the units, including ones nobody thought of.
++++

Is haphazard selection by eye random?
??
No. Human choices follow convenience and visibility. Use random numbers.
++++

---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Simple random sampling"
  - "Probability sampling"
status: seedling
---

# Random Sampling

**In one line:** random sampling means choosing units by chance so that every unit in the study population has a known probability of being picked.

> [!info] Before this, it helps to know
> [[Study Population]] (what can be selected) · [[Sample]] (the units measured) · [[Bias]] (systematic error)

## The everyday picture
Drawing names from a well-mixed hat. Nobody's preferences, convenience or hunches influence who comes out. Whatever makes people differ, tall or short, keen or shy, has an equal chance of being in the draw.

*Where the picture stops working:* a hat needs every name written down. Listing every animal is impossible, so ecologists usually randomize places or times instead.

## A tiny example
200 plots, numbered. You need 20.
- Convenience: the 20 nearest the road. Easy, and probably unlike the rest.
- Random: `sample(1:200, 20)`. Each plot has probability 20/200 = **0.10** of selection.
- With random selection the sample mean is right on average and its standard error formula is valid.

## Start from zero
1. **Define and number the units.**
2. **Let a random number generator choose.**
3. **Chance, not judgement, decides.** *Why:* judgement correlates with things that affect the response, such as access, visibility and habitat.
4. **Bias is removed on average.** Any single sample can still be unlucky.
5. **It also licenses the maths.** Standard errors and tests assume chance selection.
6. **Variants add structure.** Stratified, systematic and cluster designs keep randomness but improve efficiency ([[Survey Sampling Designs]]).

## See it
![[Random vs convenience sampling.png|700]]
*What to look at:* the convenience sample hugs the road while the random sample covers the whole area.

## Why it is this way
You can never list every way a hand-picked sample might differ from the population. Randomization handles all of them at once, including the ones you haven't thought of, by making selection independent of everything.

## In R
```r
set.seed(12)
plots <- data.frame(id = 1:200, dist_road = runif(200, 0, 5))
plots$birds <- rpois(200, 4 + 2 * plots$dist_road)        # more birds far from roads
mean(plots$birds)                                         # truth, about 9
mean(plots$birds[order(plots$dist_road)][1:20])           # 20 nearest the road: about 4 to 5
mean(replicate(2000, mean(sample(plots$birds, 20))))      # random samples: right on average
```
The convenience sample is badly biased. The random one centres on the truth.

## In the course
[[Powell and Gale 2015 Ch2]] ties random sampling to unbiased estimation and to the statistical population.

## Common confusions
- **"Random means haphazard."** Wandering and picking plots "at random" by eye is not random. Use a generator.
- **"A random sample is always representative."** It is representative on average. Small random samples can be lopsided.

## Explain it back
- Why does judgement in choosing plots cause bias?
- What does randomization protect against that you can't list?

*Pass test:* you can explain why chance selection removes bias and how to do it in R.

## Connections
- **Builds on:** [[Study Population]], [[Sample]]
- **Leads to:** [[Representative Sample]], [[Randomization]], [[Survey Sampling Designs]], [[Unbiased Estimator]]
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

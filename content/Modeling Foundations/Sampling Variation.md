---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Sampling variance"
  - "Sampling error"
status: seedling
---

# Sampling Variation

**In one line:** sampling variation is the difference in results that comes purely from *which* units happened to be in your sample.

> [!info] Before this, it helps to know
> [[Sample]] · [[Population]] · [[Standard Error]] (its usual measure)

## The everyday picture
Two friends each grab a handful of mixed nuts from the same bowl. One gets 6 cashews, the other 3. Same bowl, same mix, different handfuls. Nobody measured anything wrongly and the bowl didn't change; the difference is just the luck of the grab.

*Where the picture stops working:* you can see a whole bowl of nuts. You never see the whole population, so you have to estimate how big the luck-of-the-grab effect is.

## Words you'll need
- **Sampling variation (σ²ₛ):** variation in results due to which units were sampled.
- **Sampling distribution:** the spread of estimates over all possible samples.
- **Standard error:** the standard deviation of that spread ([[Standard Error]]).
- **Sampling model:** Hobbs and Hooten's layer describing which instances get sampled.

## A tiny example
A pond of 200 turtles is 25% female. Trap 40 at random three times:
- 10 females (0.25), 8 females (0.20), 13 females (0.33).
- The pond didn't change and every turtle was sexed correctly. The spread from 0.20 to 0.33 is sampling variation.
- With 40 turtles the usual SE formula for a proportion gives √(0.25 × 0.75 / 40) ≈ **0.07**. The simulation below gives about **0.06**, a little less, because 40 turtles is a fifth of the whole pond, and sampling a big share of a small population leaves less room for luck.

## Start from zero
1. **You measure only some units.** ([[Sample]])
2. **A different random set would give a different answer.** *Why:* units differ, and which ones you get is chance.
3. **That chance difference is sampling variation.** It's neither nature changing (process) nor measuring badly (observation).
4. **It shrinks with bigger samples.** *Why:* in a larger handful, unusual units are diluted ([[Standard Error]]).
5. **Hobbs and Hooten give it its own layer, the sampling model,** between the process and the observation models ([[Hobbs and Hooten 2015 Ch1]], pp. 7 to 9).

## See it
![[Parameter vs estimate.png|700]]
*What to look at:* each orange dot is one sample's estimate; their scatter is sampling variation.

## Why it is this way
Every estimate comes from one sample out of many possible ones. Knowing how much samples differ by luck alone is what turns a single number into a number with an honest margin of error.

## In R
```r
set.seed(9)
pond <- c(rep(1, 50), rep(0, 150))            # 200 turtles, 25% female
replicate(3, mean(sample(pond, 40)))          # three samples, three answers
sd(replicate(5000, mean(sample(pond, 40))))   # about 0.06
```

## In the course
The sampling layer of Hobbs and Hooten's framework ([[Hobbs and Hooten 2015 Ch1]]), and the reason every estimate in the labs has a standard error.

## Common confusions
- **"Sampling error means a mistake in sampling."** It's the unavoidable luck of the draw, even with perfect methods.
- **Sampling variation vs bias.** Variation scatters estimates around the truth; bias shifts them away from it ([[Bias]]).

## Explain it back
- Use two handfuls of nuts to explain sampling variation.
- Why did three turtle samples give 0.20, 0.25 and 0.33?
- What happens to sampling variation with a bigger sample, and why?

*Pass test:* you can say which part of an estimate's uncertainty comes from the luck of the draw.

## Connections
- **Builds on:** [[Sample]], [[Population]]
- **Leads to:** [[Standard Error]], [[Process Variation]], [[Observation Error]]
- **Part of:** [[MOC - Modeling Foundations]], molecular note [[Process vs Observation Error]]
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

---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Measurement error"
  - "Observation variance"
  - "Detection error"
status: seedling
---

# Observation Error

**In one line:** observation error is the extra noise, and sometimes bias, added by how you measure, such as birds that are present but missed in a count.

> [!info] Before this, it helps to know
> [[Process Variation]] (the real variation it gets mixed with) · [[Bias]]

## The everyday picture
Bathroom scales. Step on twice in a row and you might read 70.2 kg then 70.6 kg, though your weight didn't change in those ten seconds. That wobble is observation error. If the scales also read 1 kg heavy every time, that's observation *bias*.

*Where the picture stops working:* you can test scales with a known weight. In the field you rarely know the true number of birds to check against.

## Words you'll need
- **Observation error (σ²ₒ):** variation in measurements around the true state.
- **Detection probability:** the chance an animal that is present gets counted.
- **Observation model:** the part of a model describing how measurements relate to the truth ([[Data Model, Process Model and Parameter Model]]).
- **Replicate observations:** repeated measurements of the same state, such as two counts at one site in one week.

## A tiny example
True population: 100, 104, 98, 107 (a range of 9). You spot about 60% of birds and scale counts up by 1/0.6. Your estimates: **92, 113, 88, 122** (a range of 34). The extra swing, nearly four times the real one, is observation error. Mistake it for process variation and you'd think the population is wildly unstable.

## Start from zero
1. **You never see the true state directly; you measure it.**
2. **Measurement adds its own wobble.** Missed birds, observer differences, wind, instruments.
3. **Some of it is bias.** *Why:* if you always miss 40% of birds, counts are systematically low ([[Bias]]).
4. **Hobbs and Hooten give it its own layer, the observation model** ([[Hobbs and Hooten 2015 Ch1]], pp. 7 to 9). *Why separate it:* it's about your methods, not the ecology.
5. **Separating it from process variation usually needs replicate observations** or prior information ([[Hobbs and Hooten 2015 Ch6]], §6.3). *Why:* with one count per state, both just look like scatter.

## See it
![[Process vs observation error.png|700]]
*What to look at:* the orange counts wiggle around the blue line; that extra wiggle is observation error.

## Why it is this way
Every measurement passes through a method, and methods are imperfect. Ignoring observation error inflates apparent variability and, if detection is imperfect, underestimates abundance. Modeling it is the idea behind occupancy and detection models.

## In R
```r
set.seed(7)
N <- numeric(25); N[1] <- 50
for (t in 2:25) N[t] <- N[t - 1] * exp(rnorm(1, 0.02, 0.12))
counts <- rpois(25, N * 0.6) / 0.6     # detection 0.6 adds observation error
sd(diff(log(N))); sd(diff(log(counts)))   # counts look more variable than the truth
```

## In the course
The observation model in Hobbs and Hooten ([[Hobbs and Hooten 2015 Ch1]]); the occupancy guest lecture (Nov 3) models detection directly.

## Common confusions
- **"A residual is observation error."** A residual mixes every source unless the model separates them ([[Residual]]).
- **"Scaling counts by detection removes the error."** It removes average bias, not the wobble.

## Explain it back
- Use bathroom scales to explain observation error and observation bias.
- Why did the counts in the example swing more than the true population?
- What extra data help separate observation error from process variation?

*Pass test:* for any survey method, you can name one source of observation error and one of observation bias.

## Connections
- **Builds on:** [[Process Variation]], [[Bias]]
- **Leads to:** [[Hierarchical Model]], [[Data Model, Process Model and Parameter Model]], [[Residual]]
- **Part of:** [[MOC - Modeling Foundations]], molecular note [[Process vs Observation Error]]
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

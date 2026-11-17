---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Continuous variable"
  - "Continuous"
status: seedling
---

# Continuous Data

**In one line:** continuous data can take any value within a range, with no gaps, such as a bird's mass of 21.38 g.

> [!info] Before this, it helps to know
> [[Variable]] (continuous is one kind of variable) · its contrast is [[Discrete Data]]

## The everyday picture
A **ramp**. On a ramp you can stand at any height: 1 m, 1.2 m, 1.2371 m. Between any two heights there's always another one. Weight, length and temperature are ramps: a better scale or ruler can always add another decimal place.

*Where the picture stops working:* some ramps have walls. A mass can't go below zero, and a proportion can't go above 1, even though values in between are continuous.

## Words you'll need
- **Continuous:** any value in a range is possible.
- **Range:** the span of possible values.
- **Bounded:** limited at one or both ends (mass above 0; a proportion from 0 to 1).
- **Normal distribution:** the bell curve, the usual starting model for unbounded continuous data ([[Normal Distribution]]).
- **Probability density:** how probabilities are described for continuous data, as a smooth curve ([[PMF vs PDF]]).

## A tiny example
Three seedlings measure 4.1, 6.7 and 5.0 cm. Measure again with a finer ruler and you get 4.13, 6.68, 5.02. The values didn't jump between fixed steps; they slid along a ramp.
- Mean height 5.27 cm is a perfectly possible height.
- But a model predicting −0.5 cm for some seedling would be predicting the impossible, because heights are bounded below at 0.

## Start from zero
1. **Some things are measured, not counted.** Mass, length, temperature, rainfall.
2. **Between any two values there's always another possible one.** *Why:* the quantity changes smoothly; only your instrument limits the decimals.
3. **So the chance of any single exact value is zero; we talk about ranges instead.** "Between 20 and 21 g", not "exactly 20.000 g". *Why it matters:* that's why continuous distributions are drawn as smooth curves where area means probability ([[PMF vs PDF]]).
4. **Check the limits.** Unbounded (temperature anomaly), positive only (mass, biomass), or 0 to 1 (proportion of cover). *Why:* the limits decide the distribution: Normal for unbounded, Lognormal or Gamma for positive, Beta for 0 to 1 ([[Why the response type decides the distribution]]).

## See it
![[Continuous vs discrete data.png|700]]
*What to look at:* the right panel is a smooth curve, because any value can happen.

## Why it is this way
A model should only predict things that can happen. Knowing a response is continuous, and knowing its limits, is the first step in choosing a model that respects that.

## In R
```r
mass <- c(21.4, 19.8, 22.1)      # continuous: stored as "numeric"
class(mass)                      # "numeric"
mean(mass)                       # 21.1: a perfectly possible mass
range(mass)                      # check the values sit inside sensible limits
```

## In the course
Hobbs and Hooten sort distributions into those for continuous data and those for discrete data ([[Hobbs and Hooten 2015 Ch3]], §3.4.3).

## Common confusions
- **"Any number with decimals is continuous."** An average of counts (2.5 nests per plot) has decimals, but each value behind it was a count.
- **"Continuous means unbounded."** Most ecological continuous data have limits.

## Explain it back
- Use a ramp to explain continuous data.
- Why do we talk about the chance of a range rather than an exact value?
- Name the limits on body mass and on proportion of cover.

*Pass test:* you can say whether a response is continuous and what its limits are.

## Connections
- **Builds on:** [[Variable]]
- **Leads to:** [[Normal Distribution]], [[PMF vs PDF]], [[Why the response type decides the distribution]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Continuous vs Discrete Data]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch3]]

## Flashcards

What makes data continuous?
??
Any value in a range is possible, with no gaps between possible values, like standing anywhere on a ramp.
![[Continuous vs discrete data.png]]
++++

Why do the limits of a continuous response matter?
??
They decide which distribution fits (Normal if unbounded, Gamma or Lognormal if positive, Beta if 0 to 1) and stop the model predicting impossible values.
++++

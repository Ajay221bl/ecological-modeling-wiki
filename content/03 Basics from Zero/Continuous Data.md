---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "Continuous data can take any value within a range, with no gaps, such as a bird's mass of 21.38 g."
aliases:
  - "Continuous variable"
  - "Continuous"
status: seedling
---

# Continuous Data

Think of a ramp. On a ramp you can stand at any height: 1 m, 1.2 m, 1.2371 m, and between any two heights there is always another. **Continuous data** are like that: they can take any value within a range, with no gaps, such as a bird's mass of 21.38 g. Mass, length, temperature and rainfall are continuous, because the quantity changes smoothly and only your instrument limits the decimal places. They contrast with [[Discrete Data]], which jump in steps, such as counts.

Three seedlings measure 4.1, 6.7 and 5.0 cm. Measure again with a finer ruler and you get 4.13, 6.68 and 5.02; the values did not jump between fixed steps, they slid along the ramp. Their mean, 5.27 cm, is a perfectly possible height. One consequence of having no gaps is surprising at first: the chance of any single exact value, such as exactly 20.000 g, is zero, because there are infinitely many possible values. So for continuous data we always talk about the chance of a range ("between 20 and 21 g"), and continuous distributions are drawn as smooth curves where the area under the curve, not its height, is the probability ([[PMF vs PDF]]).

Many ramps have walls, and the walls matter for modeling. A mass cannot go below zero; a proportion of plant cover cannot go above 1. Check the limits of any continuous response, because they decide the sensible distribution: the [[Normal Distribution]] for values that can be any number, a lognormal or gamma for positive-only values, and a beta for values between 0 and 1 ([[Why the response type decides the distribution]]). A model that predicts −0.5 cm for a seedling is predicting the impossible. Two confusions to avoid: not every number with decimals is continuous (an average of 2.5 nests per plot has decimals, but each value behind it was a count), and continuous does not mean unbounded. Hobbs and Hooten sort their distributions into continuous and discrete families for exactly these reasons ([[Hobbs and Hooten 2015 Ch3]]). Continuous data are one kind of [[Variable]].

![[Continuous vs discrete data.png|700]]
*What to look at:* the right panel is a smooth curve, because any value can happen.

```r
mass <- c(21.4, 19.8, 22.1)      # continuous: stored as "numeric"
class(mass)                      # "numeric"
mean(mass)                       # 21.1: a perfectly possible mass
range(mass)                      # check the values sit inside sensible limits
```

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

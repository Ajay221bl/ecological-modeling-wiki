---
type: atomic
tags:
  - basics-from-zero
  - math
  - flashcards/eco/basics
description: "A straight line is described by two numbers: where it starts (the intercept) and how much it goes up for every one step to the right (the slope)."
aliases:
  - "straight line"
  - "slope and intercept"
status: seedling
---

# Equation of a Line

You take a taxi. It costs $3 the moment you get in, plus $2 for every kilometre: 0 km costs 3, 1 km costs 5, 2 km costs 7, 3 km costs 9. Written as a rule, cost = 3 + 2 × km. The **equation of a line** is this kind of rule, y = a + b x, linking one [[Variable]] (x, the input) to another (y, the output) with two numbers. The *intercept* a is the value of y when x is 0 (3: you have not moved yet). The *slope* b is how much y changes for each one-unit step in x (2 dollars per km), a constant [[Rate of Change]]. Draw it and you get a straight line that crosses the vertical axis at 3 and climbs 2 for each step right. A negative slope means the line goes down; a slope of 0 means flat, so x makes no difference.

A line is the simplest possible way to say "y depends on x", and it turns a vague idea ("windier mornings, fewer birds?") into two numbers you can estimate and argue about: is the slope different from 0, and how big is it? Take a made-up rule, expected [[Species Richness|richness]] = 6 − 0.5 × Wind, with Wind coded 0 to 3. Wind 0 gives 6, 1 gives 5.5, 2 gives 5 and 3 gives 4.5; the intercept 6 is the expected richness on a calm morning, and the slope −0.5 says each step up in wind costs half a species on average. Now push it: with a steeper slope, 6 − 2.5 × Wind, Wind 3 gives 6 − 7.5 = −1.5 species, which is impossible. A straight line does not know that counts stop at 0, the problem the [[Log Link]] solves by making the line straight on the log scale instead ([[Logarithm]]). If x is a category such as Site rather than a number, R picks one category as the baseline, the [[Reference Level]]: the intercept becomes the baseline's value and each other category gets its own jump from it. With raw means, Bald Knob is 4.73 (the intercept) and Camp Robinson is 4.73 + 2.85 = 7.58.

```mermaid
xychart-beta
  title "cost = 3 + 2 x km"
  x-axis "km" [0, 1, 2, 3]
  y-axis "cost ($)" 0 --> 10
  line [3, 5, 7, 9]
```
*What to look at:* the line starts at 3 when km is 0 (the intercept) and rises 2 for every step right (the slope).

Almost every model in the course is built on this line. A [[Linear Model]] is this equation plus an honest admission that real points scatter around it; a [[Linear Predictor]] is the same thing with several x's, y = a + b₁x₁ + b₂x₂ + .... The project's property model, `Richness ~ Site + Wind + Sky + (1|PtNum)`, is a line in disguise: log(expected richness) = intercept + (jump for this site) + slope × Wind + slope × Sky + (this point's own adjustment, a [[Random Intercept]]). The intercept is the reference site, Bald Knob, with Wind = 0 and Sky = 0 at a typical point, and because everything is on the log scale the slopes are read through [[Exponential Function|exp()]] ([[Interpreting Poisson Coefficients]]); the top model adds three more slopes for [[Spatial Covariance|spatial covariance]], tree cover and scrub cover ([[Candidate Model Set]]). Four confusions. The intercept may be meaningless if x = 0 never happens (fine for Wind, where 0 is the commonest value, but "body mass = 0" is not an animal). A slope is per one unit of x, so changing units (km to m) changes its size, not its meaning. A fitted slope is an [[Estimate]], a guess at the true slope from data. And "straight" depends on the scale: the project's line is straight on the log scale, which is curved on the count scale.

## Connections
- **Builds on:** [[Variable]], [[Rate of Change]], [[Exponential Function]]
- **Leads to:** [[Log Link]], [[Logarithm]], [[Reference Level]], [[Linear Model]], [[Linear Predictor]], [[Random Intercept]], [[Interpreting Poisson Coefficients]], [[Candidate Model Set]], [[Estimate]], [[Species Richness]], [[Spatial Covariance]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Guthery and Bingham 2007]], [[Hobbs and Hooten 2015 Ch2]]

## Flashcards

In y = 10 - 3x, what are the intercept and slope, and what is y when x = 2?
??
Intercept 10 (value at x = 0), slope -3 (y drops 3 for every one-step increase in x). At x = 2, y = 10 - 6 = 4.
++++

Why can a straight line on the count scale predict impossible values for species richness?::A line keeps going below zero for large enough x, but counts cannot be negative; a log link avoids this.

---
type: atomic
tags:
  - basics-from-zero
  - math
  - flashcards
aliases:
  - "straight line"
  - "slope"
  - "intercept"
  - "slope and intercept"
status: seedling
---

# Equation of a Line

**In one line:** a straight line is described by two numbers: where it starts (the intercept) and how much it goes up for every one step to the right (the slope).

> [!info] Before this, it helps to know
> [[Variable and Observation]] (the line links two variables) · [[Average (Mean)]] (a line predicts a mean)

## Start from zero
You take a taxi. It costs $3 the moment you get in, plus $2 for every kilometre.

| km | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| cost | 3 | 5 | 7 | 9 |

Written as a rule: **cost = 3 + 2 x km**.

- **3 is the intercept:** the value when the input is 0 (you have not moved yet).
- **2 is the slope:** how much the output changes for each one-unit step of the input.

Draw it and you get a straight line that crosses the vertical axis at 3 and climbs 2 for each step right. The general form is **y = a + b x**: a is the intercept, b is the slope. That is the whole idea.

A negative slope means the line goes down. A slope of 0 means flat: x makes no difference.

## Why it exists
A line is the simplest possible way to say "y depends on x". It turns a vague idea ("windier mornings, fewer birds?") into two numbers you can estimate from data and argue about:
- Does the slope differ from 0? (Is there any effect?)
- How big is it, and which direction?

Almost every model in this course is built on this. A [[Linear Model]] is this equation plus an honest admission that real points scatter around the line. A [[Linear Predictor]] is the same thing with several x's: y = a + b1 x1 + b2 x2 + ...

## A tiny example
A made-up rule for richness and wind (Wind is 0 to 3 in my data):

**expected richness = 6 - 0.5 x Wind**

| Wind | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Expected richness | 6 | 5.5 | 5 | 4.5 |

Intercept 6 = expected richness on a calm morning. Slope -0.5 = each step up in wind costs half a species, on average.

Now the warning. Push the line further: with a steeper slope, say 6 - 2.5 x Wind, Wind = 3 gives 6 - 7.5 = **-1.5 species**. Impossible. A straight line does not know that counts stop at 0. That is the problem the [[Log Link]] solves (see [[Logarithms and Exponents]]).

**Categories instead of numbers.** What if x is Site, not a number? R picks one site as the baseline. The intercept becomes "the baseline site's value", and each other site gets its own "jump" from the baseline. With raw means, BK = 4.73 (intercept) and CR = 4.73 + 2.85 = 7.58. Same idea: a starting point plus a step. See [[Categorical Predictor and Reference Level]].

## In my project
My property model (M1), `Richness ~ Site + Wind + Sky + (1|PtNum)`, is a line in disguise:

> log(expected richness) = intercept + (jump for this site) + slope x Wind + slope x Sky + (this point's own adjustment)

The top model (M3) just adds three more slopes, one each for spatial covariance, tree cover and scrub cover ([[Candidate Model Set]]).

- The **intercept** is the baseline: BK (the reference site), with Wind = 0 and Sky = 0, at a typical point.
- **Slopes** for Wind and Sky say how much log richness changes per step.
- The `(1|PtNum)` part gives each point its own small shift of the intercept: a [[Random Intercept]].
- Everything is on the log scale, so slopes get read through exp(). See [[Interpreting Poisson Coefficients]].

## Common confusions
- **The intercept may be meaningless if x = 0 never happens.** It is fine here (Wind = 0 is the most common value), but for something like body mass, "mass = 0" is not a real animal.
- **Slope is per one unit of x.** Change the units (km to m) and the slope changes size, not meaning.
- **A fitted line is an estimate.** The slope from data is a guess at the true slope ([[Parameter vs Estimate]]).
- **Straight on which scale?** In my model the line is straight on the log scale, which is curved on the count scale.

## Connections
- **Builds on:** [[Variable and Observation]], [[Average (Mean)]]
- **Leads to:** [[Linear Model]], [[Linear Predictor]], [[Logarithms and Exponents]], [[Categorical Predictor and Reference Level]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Guthery and Bingham 2007]] (how to read intercepts and slopes biologically), [[Hobbs and Hooten 2015 Ch2]] (lines and other model shapes)

> [!question]- Check yourself
> In y = 10 - 3x, what are the intercept and slope, and what is y when x = 2?
> ?
> Intercept 10 (value at x = 0), slope -3 (y drops 3 for every one-step increase in x). At x = 2, y = 10 - 6 = 4.

---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "An estimate is a number calculated from your sample as a best guess at a parameter. It wears a hat: θ̂ (\"theta-hat\") is the estimate of θ."
aliases:
  - "Estimates"
  - "Statistic"
  - "theta-hat"
  - "Point estimate"
status: seedling
---

# Estimate

At a school fair you look at a jar of sweets and say "480". Your friend says "530". Both are honest guesses at the same hidden number, which is actually 512. An **estimate** is the statistical version: a number calculated from your sample as a best guess at a [[Parameter]], the true but unseen value. To keep the guess from being mistaken for the truth, it wears a hat: θ̂, read "theta-hat", is the estimate of θ, and β̂ and p̂ are estimates of β and p. Any number calculated from a sample is a *statistic*; an estimate is a statistic used to guess a parameter. A single best-guess number is a *point estimate*. Unlike a guess by eye, a statistical estimate comes from a stated recipe applied to data, called the [[Estimator]], which is what lets you say how much it tends to wobble.

Here is the wobble. Tag 10 fish and 7 keep their tags: the estimate of tag retention is p̂ = 7 / 10 = 0.7. Repeat with new fish and 6 of 10 keep them, p̂ = 0.6; again, 8 of 10, p̂ = 0.8. Three studies, three estimates, one true p. Each new [[Sample]] gives a new estimate because it depends on which individuals you happened to catch, so the estimates scatter around the true value while the parameter sits still. That is not a failure; the estimate is supposed to differ a little from the truth. The useful questions are whether it is centred on the truth ([[Bias]]) and how tightly it clusters ([[Precision]]).

So an estimate always needs a partner that says how much it wobbles: its [[Standard Error]], or an interval such as a [[Confidence Interval]] or a [[Credible Interval]]. The truth is hidden, yet decisions still need numbers, and an estimate is the best number the data can offer, while the hat is a reminder of its status: useful, honest, not certain. Powell and Gale define an estimate as the numerical approximation of a parameter ([[Powell and Gale 2015 Ch2]]), and every `summary()` table in the labs is a table of estimates with their standard errors.

![[Parameter vs estimate.png|700]]
*What to look at:* each orange dot is an estimate from a different sample, scattered around the fixed blue parameter.

```r
p_hat <- 7 / 10        # the estimate from today's fish
p_hat                  # 0.7
fit <- lm(dist ~ speed, data = cars)
coef(fit)              # beta-hats: estimates of intercept and slope
summary(fit)$coefficients[, "Std. Error"]   # how much each estimate wobbles
```

## Connections
- **Builds on:** [[Parameter]], [[Sample]]
- **Leads to:** [[Estimator]], [[Standard Error]], [[Bias]], [[Precision]], [[Confidence Interval]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Parameter vs Estimate]]
- **Go deeper:** [[Powell and Gale 2015 Ch2]]

## Flashcards

What does the hat in β̂ mean?
??
It marks an estimate of the parameter β, calculated from data.
++++

Why does a second sample give a different estimate but not a different parameter?
??
The parameter is a fixed property of the population; the estimate depends on which individuals happened to be sampled.
![[Parameter vs estimate.png]]
++++

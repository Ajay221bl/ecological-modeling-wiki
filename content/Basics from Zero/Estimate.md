---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Estimates"
  - "Statistic"
  - "theta-hat"
  - "Point estimate"
status: seedling
---

# Estimate

**In one line:** an estimate is a number calculated from your sample as a best guess at a parameter. It wears a hat: θ̂ ("theta-hat") is the estimate of θ.

> [!info] Before this, it helps to know
> [[Parameter]] (what is being guessed) · [[Sample]] (where the guess comes from)

## The everyday picture
At the school fair, you look at the sweet jar and say "480". That's your estimate. Your friend says "530". Both are honest guesses at the same hidden number (512). Estimates differ from person to person, and from sample to sample, while the true number sits still.

*Where the picture stops working:* fair guesses are by eye. A statistical estimate comes from a stated recipe applied to data, so you can say how much it tends to wobble.

## Words you'll need
- **Estimate (θ̂):** the number your data produce as a guess at θ.
- **Statistic:** any number calculated from a sample. An estimate is a statistic used to guess a parameter.
- **Estimator:** the recipe that produced the estimate ([[Estimator]]).
- **Point estimate:** a single best-guess number, as opposed to a range.
- **Standard error:** how much the estimate would wobble across samples ([[Standard Error]]).

## A tiny example
10 tagged fish, 7 keep their tags. Estimate: p̂ = 7/10 = **0.7**.
- Repeat with new fish: 6 of 10, p̂ = 0.6. Again: 8 of 10, p̂ = 0.8.
- Three studies, three estimates (0.7, 0.6, 0.8), one true p. The estimates scatter around it.

## Start from zero
1. **You can't see the parameter, so you calculate a guess from the sample.** That guess is the estimate.
2. **Mark it with a hat.** β̂, μ̂, p̂. *Why:* so nobody mistakes the guess for the truth.
3. **A new sample gives a new estimate.** *Why:* it depends on which individuals you happened to catch.
4. **So an estimate always needs a partner: how much it wobbles.** That's the [[Standard Error]], or an interval ([[Confidence Interval]], [[Credible Interval]]).
5. **A good estimate centres on the truth and wobbles little.** Those two qualities are [[Bias]] and [[Precision]].

## See it
![[Parameter vs estimate.png|700]]
*What to look at:* each orange dot is an estimate from a different sample, scattered around the fixed blue parameter.

## Why it is this way
The truth is hidden, but decisions still need numbers. An estimate is the best number the data can offer, and the hat is a reminder of its status: useful, honest, not certain.

## In R
```r
p_hat <- 7 / 10        # the estimate from today's fish
p_hat                  # 0.7
fit <- lm(dist ~ speed, data = cars)
coef(fit)              # beta-hats: estimates of intercept and slope
summary(fit)$coefficients[, "Std. Error"]   # how much each estimate wobbles
```

## In the course
Powell and Gale define an estimate as the numerical approximation of a parameter ([[Powell and Gale 2015 Ch2]], p. 16). Every `summary()` table in the labs is a table of estimates.

## Common confusions
- **"The estimate is wrong because it isn't the parameter."** It's supposed to differ a little. The useful questions are whether it's biased and how imprecise it is.
- **Estimate vs estimator.** The estimate is the number; the estimator is the recipe.

## Explain it back
- Why does an estimate wear a hat?
- Three tag studies gave 0.7, 0.6 and 0.8. What does that tell you about estimates and the parameter?
- What should always be reported alongside an estimate?

*Pass test:* you can point at any number in R output and say whether it's an estimate, and what it estimates.

## Connections
- **Builds on:** [[Parameter]], [[Sample]]
- **Leads to:** [[Estimator]], [[Standard Error]], [[Bias]], [[Precision]], [[Confidence Interval]]
- **Part of:** [[MOC - Basics from Zero]], molecular note [[Parameter vs Estimate]]
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

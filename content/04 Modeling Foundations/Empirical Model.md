---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Empirical modeling"
status: seedling
---

# Empirical Model

**In one line:** an empirical model describes a relationship found in data, such as a straight line through points, and uses probability to say how sure we are about it.

> [!info] Before this, it helps to know
> [[Statistical Model]] · [[Theoretical Model]] (the contrasting style)

## The everyday picture
A bridge inspector with a clipboard measures how much 50 real bridges sag under traffic and fits a line: "each extra tonne adds about 2 mm of sag, give or take 0.3". She doesn't need to know *why*; the data told her, and she can say how confident she is.

*Where the picture stops working:* her "2 mm per tonne" only applies to bridges like the 50 she measured. An empirical model's numbers don't automatically carry to new kinds of places.

## Words you'll need
- **Empirical:** based on observation and data.
- **Regression:** fitting a line or curve to data ([[Linear Regression]]).
- **Slope:** change in the response per unit of the predictor ([[Slope]]).
- **Uncertainty:** how much the estimates might be off, from standard errors or intervals.

## A tiny example
40 plots of grass biomass and grazer density. Fit biomass = β₀ + β₁ × grazers + scatter. Result: β̂₁ = **−3.2 g per grazer**, SE **0.8**.
- The slope is about four SEs below zero, so grazing very likely reduces biomass here.
- But "−3.2" is a summary of *these* plots. It isn't a biological constant like a grazer's eating rate.

## Start from zero
1. **Collect data on the variables you care about.**
2. **Fit a simple relationship:** usually a straight line ([[Linear Regression]]).
3. **Probability theory gives the uncertainty.** *Why it's the great strength:* every estimate comes with an honest SE ([[Hobbs and Hooten 2015 Ch2]], p. 19).
4. **The catch:** the parameters are defined by the data ("the slope of biomass on grazers here"), not as portable biological quantities.
5. **And few variables.** Empirical models struggle with many interacting parts; that's the [[Simulation Model]]'s ground.

## See it
```mermaid
flowchart LR
  D["Data"] --> F["Fit a line or curve"]
  F --> E["Estimates + standard errors"]
  E --> C["Conclusion about these kinds of places"]
```
*What to look at:* data are the starting point, and uncertainty comes out the end.

## Why it is this way
When you don't know the mechanism, letting the data speak is the honest first step, and probability theory keeps you from over-claiming. Most of this course (lm, glm, mixed models) is empirical modeling.

## In R
```r
fit <- lm(dist ~ speed, data = cars)   # an empirical model: stopping distance vs speed
summary(fit)$coefficients              # slope estimate with its standard error
```

## In the course
The empirical tradition in Hobbs and Hooten's three-way split ([[Hobbs and Hooten 2015 Ch2]], §2.1), and the style of every lab from Sep 1 onward.

## Common confusions
- **"Empirical models have no deterministic part."** They do, usually a straight line, chosen by default rather than by theory.
- **"Data-driven means biologically meaningful."** The slope describes the data; it may not be a portable biological quantity.

## Explain it back
- Use the bridge inspector to explain an empirical model.
- What does an empirical model do well that a theoretical one doesn't?
- Why might "−3.2 g per grazer" not apply to a different grassland?

*Pass test:* you can say for any regression whether its slope is a description or a mechanism.

## Connections
- **Builds on:** [[Statistical Model]]
- **Leads to:** [[Linear Regression]], [[Theoretical Model]], [[Hierarchical Model]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Theoretical vs Empirical Modeling]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch2]]

## Flashcards

What is the main strength of an empirical model?
??
Uncertainty grounded in probability theory: every estimate comes with a standard error or interval.
++++

What is the main weakness of purely empirical models, per Hobbs and Hooten?
??
Their parameters are often defined only by the data, without portable biological meaning, and they are too simple to capture many interactions.
++++

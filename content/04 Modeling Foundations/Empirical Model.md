---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "An empirical model describes a relationship found in data, such as a straight line through points, and uses probability to say how sure we are about it."
aliases:
  - "Empirical modeling"
status: seedling
---

# Empirical Model

A bridge inspector measures how much 50 real bridges sag under traffic and fits a line: each extra tonne adds about 2 mm of sag, give or take 0.3. She does not need to know *why*; the data told her, and she can say how sure she is. An **empirical model** works the same way: it describes a relationship found in data, usually with a simple shape such as a straight line ([[Linear Regression]]), and uses probability theory to attach uncertainty, a standard error or interval saying how far the estimates might be off. *Empirical* means based on observation. Hobbs and Hooten name this as one of three traditions in ecological modeling, beside theoretical and simulation models ([[Hobbs and Hooten 2015 Ch2]]).

An example. In 40 grassland plots you fit biomass = β₀ + β₁ × grazer density + scatter, and get a [[Slope]] β̂₁ = −3.2 g per grazer with a standard error of 0.8. The slope is four standard errors below zero, so grazing very likely reduces biomass in these plots. That honest statement of uncertainty is the great strength of the empirical style, and it is the style of most of this course: lm, glm and mixed models are all empirical models.

The catch is in what the numbers mean. The −3.2 is the slope of biomass on grazers *in these data*, not a biological constant such as a grazer's eating rate, so it does not automatically carry to a different grassland. The straight line is chosen by default rather than by theory; empirical models do have a deterministic part, it just is not derived from a mechanism. They also struggle with many interacting parts, which is where a [[Simulation Model]] takes over. The contrasting style starts from mechanism instead of data ([[Theoretical Model]]), and a [[Statistical Model]] is the general frame both can use when confronted with data.

```mermaid
flowchart LR
  D["Data"] --> F["Fit a line or curve"]
  F --> E["Estimates + standard errors"]
  E --> C["Conclusion about these kinds of places"]
```
*What to look at:* data are the starting point, and uncertainty comes out the end.

```r
fit <- lm(dist ~ speed, data = cars)   # an empirical model: stopping distance vs speed
summary(fit)$coefficients              # slope estimate with its standard error
```

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

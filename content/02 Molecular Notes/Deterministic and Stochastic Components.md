---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - modeling
aliases:
  - "Signal and noise"
  - "Systematic and random parts"
status: seedling
---

# Deterministic and Stochastic Components

> [!summary] In plain words
> Every statistical model has two parts. The **deterministic component** gives the expected value for given conditions: μ = g(θ, x). The **stochastic component** says how real observations scatter around it: y ~ Distribution(μ, σ). One is the line; the other is the cloud around the line.

## The everyday picture
A bus timetable and the real bus. The timetable says 8:15 (deterministic). The real bus comes at 8:13, 8:19 or 8:16 (stochastic). You need both: the timetable to know roughly when, the scatter to know how early to leave.

*Where the picture stops working:* bus delays have causes you could list. In a model, "scatter" includes everything you chose not to model.

## The question
How do the two parts of a model fit together, and what does each one do?

## Built from
- [[Deterministic Component]]: the rule for the average
- [[Stochastic Component]]: the distribution of scatter around it
- [[Probability Distribution]]: the shape the scatter takes

## See it
![[Deterministic and stochastic components.png|700]]
*What to look at:* the line is the deterministic part; the spread of points around it is the stochastic part.

## The reasoning, step by step
1. **Write the expected value as a function of predictors** ([[Deterministic Component]]).
2. **Real data don't sit on that line** ([[Stochastic Component]]). *Why:* unmeasured causes and measurement both add scatter.
3. **Choose a distribution for the scatter** that fits the data type ([[Why the response type decides the distribution]]).
4. **The stochastic part is what makes the model statistical.** *Why:* it lets you say how surprising an observation is and how sure you are of the parameters.

**A worked example in numbers.** Grass biomass: μ = 3 + 1.2 × rainfall, so μ = 9 at rainfall 5 (deterministic). With y ~ Normal(9, 2), about 95% of plots fall between **5 and 13**, and a plot of 14 happens about **1 time in 160** (stochastic). Without the second part, 14 is just "above the line"; with it, you know how surprised to be.

## So in practice
Write every model as two lines, the mean and the distribution, before you code it. The deeper why is in [[Why every statistical model has a deterministic and a stochastic part]].

## What would go wrong otherwise
- You'd fit a line and have no way to judge whether a point is unusual.
- You'd use the wrong distribution and get wrong uncertainty.

## Explain it back
- Use the bus timetable to explain the two parts.
- What does the stochastic part let you say that the line can't?

*Pass test:* you can write any model as "mean = ..." and "y ~ ...".

## Connections
- **Related:** [[Statistical Model]], [[Process vs Observation Error]], [[Why every statistical model has a deterministic and a stochastic part]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]

## Flashcards

What are the deterministic and stochastic components of a model?
??
Deterministic: the rule for the expected value, μ = g(θ, x). Stochastic: the distribution of observations around it, y ~ Distribution(μ, σ).
![[Deterministic and stochastic components.png]]
++++

What does the stochastic component let you do?
??
Say how surprising an observation is and how uncertain the parameter estimates are.
++++

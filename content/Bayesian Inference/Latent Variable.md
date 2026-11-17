---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Latent state"
  - "Latent variables"
  - "Hidden state"
  - "Unobserved state"
  - "Latent quantity"
status: seedling
---

# Latent Variable

**In one line:** a latent variable is a quantity that really exists in the system but is never observed directly, so the model must infer it from the data it influences.

> [!info] Before this, it helps to know
> [[Unobserved Quantities as Random Variables]] (how it is treated) · [[Data Model]] (how it shows itself) · [[Process Model]] (what generates it)

## The everyday picture
A fever. You can't see an infection, but you can see the thermometer. The infection is latent. The temperature reading is its imperfect, observable trace.

## A tiny example
True occupancy of a pond (z = 1 or 0). You record "frogs heard" or "not heard". Not hearing frogs might mean z = 0, or z = 1 and you missed them. z is latent.

## Start from zero
1. **Latent = hidden.** It has a true value, and you don't get to see it.
2. **Examples:** true abundance, true occupancy, an individual's alive/dead status after it was last seen, true body condition.
3. **It sits in the middle layer** of a hierarchical model.
4. **The process model says how it arises. The data model says how it produces observations.**
5. **Bayesian fitting estimates it like any parameter:** you get a posterior for each latent value.
6. **Naming it explicitly separates biology from observation:** occupancy from detection, abundance from counting error.
7. **Random effects are latent variables too.**

## In R
```r
set.seed(7); psi <- 0.6; p <- 0.4; z <- rbinom(10, 1, psi)                    # latent truth: occupied or not
y <- rbinom(10, 1, z * p); rbind(true_state = z, observed = y)               # occupied sites often look empty
1 - (1 - p)^3                                                                # three visits detect an occupied site 78% of the time
```

## In the course
[[Hobbs and Hooten 2015 Ch6]]. Central to the occupancy lectures ([[Course Website]]).

## Common confusions
- **"Latent means imaginary."** Latent quantities are real. They are unobserved.

## Explain it back
- Give two ecological latent variables and what is observed in their place.

*Pass test:* you can point to the latent layer of a model.

## Connections
- **Builds on:** [[Unobserved Quantities as Random Variables]], [[Data Model]]
- **Leads to:** [[Process Model]], [[Occupancy|Occupancy Model]], [[Detection Probability]], [[Random Effect]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is a latent variable?
??
A real but unobserved quantity that is inferred through the observed data it gives rise to.
++++

Give an ecological example of a latent variable.
??
True site occupancy, or true abundance, when detection is imperfect.
++++

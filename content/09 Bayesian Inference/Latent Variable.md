---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A latent variable is a quantity that really exists in the system but is never observed directly, so the model must infer it from the data it influences."
aliases:
  - "Latent state"
  - "Latent variables"
  - "Hidden state"
  - "Unobserved state"
  - "Latent quantity"
status: seedling
---

# Latent Variable

You can't see an infection, but you can read a thermometer: the infection is latent, and the temperature is its imperfect, observable trace. A **latent variable** is a quantity that really exists in the system but is never observed directly, so the model must infer it from the data it influences ([[Unobserved Quantities as Random Variables]]). The true occupancy of a pond, z = 1 or 0, is one: you record "frogs heard" or "not heard", and not hearing frogs might mean z = 0, or z = 1 and you missed them. True abundance, an animal's alive or dead status after it was last seen, and true [[Body Condition|body condition]] are others.

A latent variable sits in the middle layer of a [[Hierarchical Model|hierarchical model]]: the [[Process Model]] says how it arises and the [[Data Model]] how it produces observations. Bayesian fitting estimates it like any parameter, giving a posterior for each latent value. Naming it explicitly separates biology from observation, occupancy from detection and abundance from counting error ([[Detection Probability]], [[Occupancy|Occupancy Model]]). In the code below, 7 of 10 sites are truly occupied but with a detection probability of 0.4 per visit only one is recorded as occupied on a single visit; three visits would detect an occupied site 1 − 0.6³ = 78% of the time.

Latent variables are central to the occupancy lectures ([[Hobbs and Hooten 2015 Ch6]], [[Course Website]]). A [[Random Effect]] is a latent variable too. "Latent" does not mean imaginary: latent quantities are real, merely unobserved.

```r
set.seed(7); psi <- 0.6; p <- 0.4; z <- rbinom(10, 1, psi)                    # latent truth: occupied or not
y <- rbinom(10, 1, z * p); rbind(true_state = z, observed = y)               # occupied sites often look empty
1 - (1 - p)^3                                                                # three visits detect an occupied site 78% of the time
```

## Connections
- **Builds on:** [[Unobserved Quantities as Random Variables]], [[Data Model]], [[Hierarchical Model]]
- **Leads to:** [[Process Model]], [[Occupancy|Occupancy Model]], [[Detection Probability]], [[Random Effect]], [[Body Condition]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a latent variable?
??
A real but unobserved quantity that is inferred through the observed data it gives rise to.
++++

Give an ecological example of a latent variable.
??
True site occupancy, or true abundance, when detection is imperfect.
++++

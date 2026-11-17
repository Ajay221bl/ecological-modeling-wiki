---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "A metapopulation is a set of separate local populations in patches of habitat, linked by occasional movement, where patches are emptied by local extinction and refilled by colonization."
aliases:
  - "Metapopulations"
  - "Levins model"
  - "Source-sink (metapopulation)"
status: seedling
---

# Metapopulation

Picture a string of islands, each with its own small group of lizards. Now and then a storm wipes out one island's lizards, and now and then a lizard floats across from a neighbour and starts a new group. The species survives in the region even though no single island keeps it for ever. A **metapopulation** is a set of separate local populations in patches of habitat, linked by occasional movement, where patches are emptied by local extinction and refilled by colonization ([[Population]], [[Habitat]]). The idea comes from Richard Levins (1969), whose model tracks only the fraction of patches occupied, p, which changes as dp/dt = c·p(1 − p) − e·p: occupied patches send out colonists to empty ones at rate c, and occupied patches go extinct at rate e.

The model predicts that the occupied fraction settles at 1 − e/c, so the metapopulation persists only if colonization outpaces extinction (c > e). In the code below, c = 0.5 and e = 0.2 give an equilibrium of 0.6 of patches occupied. This is the ecology behind dynamic occupancy models: their [[Colonization Probability]] γ and [[Local Extinction Probability]] ε are the field estimates of the same two processes, and the guest lecture lists metapopulation models among the main uses of occupancy ([[Multi-season Occupancy]]). The guest lecture's slide of "source" and "sink" patches adds that some patches produce surplus animals (sources) while others persist only through immigration (sinks).

It is part of the "What is occupancy?" slide of the [[Occupancy Guest Lecture]] ([[Population Dynamics]]). A metapopulation is not just a large population spread out: the key is that local groups really do blink out and come back, so the occupancy of patches, not the number of animals, is the natural thing to track.

```r
c_rate <- 0.5; e_rate <- 0.2; p <- 0.05; dt <- 0.1
for (i in 1:600) p <- p + dt * (c_rate * p * (1 - p) - e_rate * p)
round(c(p_after_60_time_units = p, equilibrium = 1 - e_rate / c_rate), 3)
```

## Connections
- **Builds on:** [[Population]], [[Habitat]]
- **Leads to:** [[Colonization Probability]], [[Local Extinction Probability]], [[Multi-season Occupancy]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]], molecular note [[Single-season vs Multi-season Occupancy]]

## Flashcards

What is a metapopulation?
??
Separate local populations in habitat patches linked by movement, with patches going extinct and being recolonized.
++++

What is the Levins model's equilibrium fraction of occupied patches?
??
1 − e/c, which is positive only if colonization rate c exceeds extinction rate e.
++++

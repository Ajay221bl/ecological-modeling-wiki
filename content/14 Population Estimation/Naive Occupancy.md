---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Naive occupancy is the proportion of surveyed sites where the species was detected at least once, ignoring that it may have been missed elsewhere."
aliases:
  - "Naïve occupancy"
  - "Apparent occupancy"
  - "Observed occupancy"
  - "Proportion of sites detected"
status: seedling
---

# Naive Occupancy

Counting the houses where you saw a cat treats houses with hiding cats as cat-free. **Naive occupancy** is the proportion of surveyed sites where the species was detected at least once, ignoring that it may have been missed elsewhere ([[Occupancy]], [[Proportion]]). It is s_D / s, sites with any detection divided by sites surveyed. It is biased low whenever p < 1, and the bias grows as p falls or visits shrink ([[Detection Probability]], [[Cumulative Detection Probability]]).

It confounds occupancy and detection, so a habitat where the species is hard to see looks less occupied. Powell and Gale (2015 Ch15) give two ten-site studies that both have naive occupancy 80%. Study 1 detected the species on most visits where it was present, so sites 9 and 10 are probably truly empty; study 2 rarely re-detected it, so true occupancy is probably higher than 80%. The same naive number means different things depending on the [[Detection History|detection histories]] behind it.

It is still useful as a minimum and as a quick check on a fitted ψ̂. [[Christensen et al. 2020]] mapped haemorrhagic disease reports, which are detection-only data with the same issue ([[Powell and Gale 2015]] Ch15). Naive occupancy is not fine if you visit once: one visit gives no information about p, so you cannot even tell how biased it is.

## Connections
- **Builds on:** [[Occupancy]], [[Proportion]]
- **Leads to:** [[Detection History]], [[Cumulative Detection Probability]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Naive vs Estimated Occupancy]]

## Flashcards

What is naive occupancy?
??
The proportion of sites where the species was detected at least once.
++++

Which way is naive occupancy biased when p < 1?
??
Low: it underestimates true occupancy.
++++

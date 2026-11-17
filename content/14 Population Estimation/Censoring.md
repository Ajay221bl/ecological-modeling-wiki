---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Censoring means an animal's fate is unknown after (or before) some time, so it contributes information only for the period when it was being monitored."
aliases:
  - "Censored data"
  - "Right censoring"
  - "Left censoring"
  - "Censored animals"
  - "Loss to follow-up"
status: seedling
---

# Censoring

A patient who moves away during a medical study was known to be alive for the eight months you saw them, but not what happened after. **Censoring** means an animal's fate is unknown after, or before, some time, so it contributes information only for the period when it was being monitored ([[Known-fate Models]]). Right censoring, the most common kind, is when monitoring stops before death because a collar fails, the animal leaves or the study ends; left censoring is when the event happened before monitoring started or the start time is unknown.

Do not drop censored animals, because their days alive are real information, and do not count them as dead or alive at the end ([[Exposure Days]]). The key assumption is that censoring is unrelated to fate; a predator that also destroys collars breaks it ([[Radio-telemetry Data]]). In Powell and Gale's (Ch9) elk example, an elk lost on day 16 contributes 15 exposure days and no death. The [[Kaplan-Meier Estimator]] handles censoring by removing the animal from the risk set after its last check.

Powell and Gale (Ch9) ask "What is the difference between left- and right-censoring?" ([[Powell and Gale 2015]]). Removing censored animals to keep the data clean throws away information and biases survival downward if the remaining animals are the shorter-monitored ones.

## Connections
- **Builds on:** [[Known-fate Models]]
- **Leads to:** [[Kaplan-Meier Estimator]], [[Exposure Days]], [[Staggered Entry Design]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is right censoring?
??
Monitoring stops before the animal's fate is known; it contributes data only up to that time.
++++

What must be true of censoring for unbiased survival estimates?
??
It must be unrelated to the animal's fate.
++++

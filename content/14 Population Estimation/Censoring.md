---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Censored data"
  - "Right censoring"
  - "Left censoring"
  - "Censored animals"
  - "Loss to follow-up"
status: seedling
---

# Censoring

**In one line:** censoring means an animal's fate is unknown after (or before) some time, so it contributes information only for the period when it was being monitored.

> [!info] Before this, it helps to know
> [[Known-fate Models]]

## The everyday picture
A patient who moves away during a medical study. You know they were alive for the eight months you saw them, but not what happened after.

## Start from zero
1. **Right censoring:** monitoring stops before death (collar fails, animal leaves, study ends). Most common.
2. **Left censoring:** the event happened before monitoring started, or the start time is unknown.
3. **Do not drop censored animals;** their days alive are real information.
4. **Do not count them as dead or alive** at the end.
5. **Key assumption:** censoring is unrelated to fate. A predator that also destroys collars breaks this.
6. **Powell and Gale (Ch9) elk example:** an elk lost on day 16 contributes 15 exposure days and no death.

## In the course
[[Powell and Gale 2015]] Ch9 ("What is the difference between left- and right-censoring?").

## Common confusions
- **"Remove censored animals to keep data clean."** That throws away information and biases survival downward if the remaining animals are the shorter-monitored ones.

## Explain it back
- What assumption must censoring meet?

*Pass test:* you can handle censored records correctly.

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

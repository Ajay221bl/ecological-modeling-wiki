---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Mark-recapture methods catch and mark animals, release them, and use later recaptures or resightings of marked animals to estimate population size, survival or movement while allowing for animals that are missed."
aliases:
  - "Capture-recapture"
  - "Capture-mark-recapture"
  - "CMR"
  - "Mark-recapture models"
  - "Mark-resight"
status: seedling
---

# Mark-Recapture

Put a sticker on some library books, then check a random shelf later: the share of stickered books on the shelf tells you how big the whole library is. **Mark-recapture** methods catch and mark animals, release them, and use later recaptures or resightings of marked animals to estimate [[Abundance|population size]], survival or movement while allowing for animals that are missed ([[Imperfect Detection]], [[Sample]], [[Binomial Distribution]]). Every method starts the same way: capture, mark, release, then encounter again, by live recapture, resighting or dead recovery ([[Encounter Probability]]). Marks can be batch, such as a paint splotch that says only "marked or not", or individual, such as a numbered band, PIT tag or natural pattern; individual marks allow [[Capture History|capture histories]] and modern models (Powell and Gale 2015 Ch7 and Ch8).

[[Closed Population|Closed models]], with no births, deaths or movement during sampling, estimate abundance N; [[Open Population|open models]] estimate survival, movement and [[Jolly-Seber and POPAN Models|recruitment]] over longer periods ([[Cormack-Jolly-Seber Model]]). The key unknown is the encounter probability p, because N̂ = n / p̂: with n = 100 caught and p = 0.30, N̂ = 333 (Powell and Gale Ch7) ([[Capture Probability]]). The figure shows why marks help: the same 100 marks and 100 recaptures give very different marked shares in big and small populations ([[Lincoln-Petersen Estimator]]).

Mark-recapture is the core of the population estimation guest lectures ([[Course Website]], [[Powell and Gale 2015]] Ch7 to Ch13, [[Program MARK]]). Catching 100 animals does not tell you there are about 100; it only tells you there are at least 100.

![[Lincoln-Petersen logic.png|700]]
*What to look at:* the same 100 marks and 100 recaptures give very different marked shares in big and small populations.

## Connections
- **Builds on:** [[Imperfect Detection]], [[Binomial Distribution]], [[Abundance]], [[Jolly-Seber and POPAN Models]]
- **Leads to:** [[Capture History]], [[Lincoln-Petersen Estimator]], [[Cormack-Jolly-Seber Model]], [[Program MARK]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Open vs Closed Populations]], [[Mark-Recapture vs Unmarked Survey Methods]]

## Flashcards

What is mark-recapture?
??
Catching and marking animals, then using recaptures or resightings to estimate N, survival or movement while allowing for missed animals.
![[Lincoln-Petersen logic.png]]
++++

You catch 100 animals and p = 0.5. What is N̂?
??
200 (N̂ = n / p).
++++

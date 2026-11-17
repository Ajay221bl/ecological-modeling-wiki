---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Capture-recapture"
  - "Capture-mark-recapture"
  - "CMR"
  - "Mark-recapture models"
  - "Mark-resight"
status: seedling
---

# Mark-Recapture

**In one line:** mark-recapture methods catch and mark animals, release them, and use later recaptures or resightings of marked animals to estimate population size, survival or movement while allowing for animals that are missed.

> [!info] Before this, it helps to know
> [[Imperfect Detection]] · [[Sample]] · [[Binomial Distribution]]

## The everyday picture
Tagging library books with a sticker, then checking a random shelf later. The share of stickered books on the shelf tells you how big the whole library is.

## Start from zero
1. **Every method starts the same way:** capture, mark, release, then encounter again.
2. **Marks can be batch** (a paint splotch: "marked or not") **or individual** (a numbered band, PIT tag, natural pattern). Individual marks allow capture histories and modern models (Powell and Gale 2015 Ch7 and Ch8).
3. **Closed models** (no births, deaths, movement during sampling) estimate abundance N.
4. **Open models** estimate survival, movement and recruitment over longer periods.
5. **Encounters** can be live recaptures, resightings or dead recoveries.
6. **The key unknown is encounter probability p:** N̂ = n / p̂. With n = 100 caught and p = 0.30, N̂ = 333 (Powell and Gale Ch7).

## See it
![[Lincoln-Petersen logic.png|700]]
*What to look at:* the same 100 marks and 100 recaptures give very different marked shares in big and small populations.

## In the course
Population estimation guest lectures ([[Course Website]]). [[Powell and Gale 2015]] Ch7 to Ch13.

## Common confusions
- **"Catching 100 animals tells you there are about 100."** It only tells you there are at least 100.

## Explain it back
- What does N̂ = n / p̂ say in words?

*Pass test:* you can explain how marks let you estimate p and hence N.

## Connections
- **Builds on:** [[Imperfect Detection]], [[Binomial Distribution]]
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

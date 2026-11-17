---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Availability is the chance that an animal at the survey site can be detected at all (above ground, calling, in view), and presence probability is the chance that an animal using the site is actually there when you survey."
aliases:
  - "Availability and Presence Probability"
  - "Availability bias"
  - "Availability probability"
  - "Presence probability"
  - "Perception bias"
status: seedling
---

# Availability for Detection

In a prairie dog colony, even an observer with perfect eyes cannot count the animals underground: they are present but not available. **Availability** is the chance that an animal at the survey site can be detected at all, because it is above ground, calling or in view; **presence probability** is the chance that an animal using the site is actually there when you survey ([[Detection Probability]], [[Imperfect Detection]]). Powell and Gale (2015 Ch14) split the correction as N̂ = C / (P_area × P_presence × P_availability × P_detection). Presence fails when the animal's home range covers the point but it is elsewhere today; availability fails when it is here but underground, silent or under water; and detection, or perception, fails when it is available but the observer misses it.

Most count models estimate a mix of these: for example, N-mixture p is usually availability times perception ([[N-mixture Model]]). Design helps: survey at times animals are active, and use larger plots or longer counts so absent animals return ([[Count-based Abundance Estimation]]). [[Distance Sampling]] assumes availability is 1 on the line, which fails for diving or burrowing animals ([[Detection on the Line g(0)]]).

It is laid out in [[Powell and Gale 2015]] Ch14. More careful observers cannot fix availability: they only reduce perception error, and an animal underground is unavailable to everyone ([[Temporary Emigration]]).

## Connections
- **Builds on:** [[Detection Probability]], [[Imperfect Detection]]
- **Leads to:** [[Count-based Abundance Estimation]], [[Temporary Emigration]], [[Closure Assumption]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is availability in survey sampling?
??
The chance an animal at the site can be detected at all (above ground, calling, visible).
++++

What is presence probability in survey sampling?
??
The chance an animal that uses the site is actually there during the survey.
++++

---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
aliases:
  - "Timing of life events"
  - "Phenological shift"
  - "Green-up"
  - "Breeding phenology"
status: seedling
---

# Phenology

**In one line:** phenology is the timing of recurring life-cycle events, such as flowering, migration, egg laying or spring green-up, and how it shifts with climate.

> [!info] Before this, it helps to know
> [[Dates in R|Day of Year]] · [[Time Series]]

## The everyday picture
The date your street's cherry tree blossoms each spring. Warmer springs bring it earlier.

## Start from zero
1. **Measured as day of year** (Julian day) of an event.
2. **Climate warming advances many spring events;** range shifts, phenology and smaller body size are the predicted universal responses (cited in Shipley et al. 2022).
3. **Mismatch:** when predator and prey shift timing at different rates, food peaks and breeding peaks drift apart.
4. **Modelled with GAMs** (cyclic smooths for season) or with date as a response in mixed models.
5. **NDVI green-up** curves (Lawton et al. 2022 used NDVI with locust data) are a satellite view of plant phenology.

## In the course
[[Shipley et al. 2022]]. [[Lawton et al. 2022]].

## Common confusions
- **"Phenology is the same as season."** Phenology is the timing of biological events, which can shift within the same season.

## Explain it back
- Why use a cyclic smooth for day of year?

*Pass test:* you can define phenology and how it is measured.

## Connections
- **Builds on:** [[Dates in R|Day of Year]], [[Time Series]]
- **Leads to:** [[Cyclic Spline]], [[Climate Change Effects on Wildlife]], [[NDVI]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

What is phenology?
??
The timing of recurring life-cycle events and how it changes with climate.
++++

What are the three predicted universal responses to warming?
??
Range shifts, phenology shifts and smaller body size.
++++

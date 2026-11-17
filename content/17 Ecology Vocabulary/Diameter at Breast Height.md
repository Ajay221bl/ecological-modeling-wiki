---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
aliases:
  - "DBH"
  - "Diameter at Breast Height (DBH)"
  - "Basal area"
status: seedling
---

# Diameter at Breast Height

**In one line:** diameter at breast height (DBH) is a tree's trunk diameter measured at breast height, 1.3 m above the ground in most countries and 4.5 ft (1.37 m) in the United States, the standard measure of tree size.

> [!info] Before this, it helps to know
> [[Continuous Data]] · [[Habitat Structure]]

## Start from zero
1. **Standard height:** 1.3 m in most of the world, 4.5 ft (1.37 m) in the US.
2. **Basal area** = π (DBH/2)², summed per hectare, measures stand density.
3. **Strongly right-skewed** in natural stands (many small trees, few large), so logs or GAMs help.
4. **Biomass and age** are often estimated from DBH with allometric equations.

## In R
```r
dbh_cm <- c(12, 25, 40, 60)
round(pi * (dbh_cm / 200)^2, 3)   # basal area in m^2 per tree
```

## In the course
Lab datasets ([[Course Website]]).

## Common confusions
- **"Measure DBH wherever is convenient."** It must be at the standard height to be comparable.

## Explain it back
- How is basal area computed from DBH?

*Pass test:* you can compute basal area.

## Connections
- **Builds on:** [[Continuous Data]], [[Habitat Structure]]
- **Leads to:** [[Canopy Cover|Canopy and Tree Cover]], [[Log Transformation]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

At what height is DBH measured?
??
1.3 m (4.5 ft in the US).
++++

Basal area of a tree from DBH?
??
π (DBH/2)².
++++

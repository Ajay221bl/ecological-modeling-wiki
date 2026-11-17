---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "Diameter at breast height (DBH) is a tree's trunk diameter measured at breast height, 1.3 m above the ground in most countries and 4.5 ft (1.37 m) in the United States, the standard measure of tree size."
aliases:
  - "DBH"
  - "Diameter at Breast Height (DBH)"
  - "Basal area"
status: seedling
---

# Diameter at Breast Height

**Diameter at breast height** (DBH) is a tree's trunk diameter measured at breast height, 1.3 m above the ground in most countries and 4.5 ft (1.37 m) in the United States, the standard measure of tree size ([[Continuous Data]], [[Habitat Structure]]). Basal area, π(DBH/2)², summed per hectare, measures stand density. Biomass and age are often estimated from DBH with allometric equations.

DBH is strongly right-skewed in natural stands, with many small trees and few large ones, so logs or GAMs help ([[Log Transformation]]). In the code below trees of 12, 25, 40 and 60 cm DBH have basal areas of 0.011, 0.049, 0.126 and 0.283 m²: area grows with the square of diameter, so one 60 cm tree equals about 25 trees of 12 cm.

It appears in the lab datasets ([[Course Website]], [[Canopy Cover]]). DBH must be measured at the standard height to be comparable, not wherever is convenient.

```r
dbh_cm <- c(12, 25, 40, 60)
round(pi * (dbh_cm / 200)^2, 3)   # basal area in m^2 per tree
```

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

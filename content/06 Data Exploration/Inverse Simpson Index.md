---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "The inverse Simpson index is 1 divided by the chance that two individuals picked at random belong to the same species, and it reads as the number of equally common species that would give the same diversity."
aliases:
  - "Inverse Simpson"
  - "Inverse Simpson's diversity"
  - "1/D"
  - "Diversity_InvSimp"
  - "invsimpson"
  - "Simpson's reciprocal index"
status: seedling
---

# Inverse Simpson Index

Reach into a bag of marbles twice. If the bag is all red, you are certain to get two of the same colour. If it holds equal numbers of 4 colours, the chance of a match is 1 in 4. Simpson's index D is exactly that chance for a community: D = Σ pᵢ², where pᵢ is species i's share of all individuals ([[Diversity Index]], [[Proportion]]). Squaring pᵢ gives the chance both picks are species i, and summing over species gives the chance they match at all. The **inverse Simpson index** is simply 1/D.

Why flip it? D gets *smaller* as diversity rises, which is backward, and its units are a probability, which is hard to picture. 1/D gets bigger with diversity and has a beautiful meaning: it is the number of equally common species that would give the same chance of a match, the *effective number of species*. Four equal species give D = 4 × 0.25² = 0.25 and 1/D = 4. A community of 4 species where one has 70% of the cover gives D = 0.7² + 3 × 0.1² = 0.52 and 1/D = 1.92, so it "behaves like" fewer than 2 equal species. It can never exceed the [[Species Richness]], and equals it only when all species are equally common.

Homework 1 asks for a Diversity_InvSimp column, computed per row with `vegan::diversity(x, index = "invsimpson")`, where x is the block of species columns. A plot with nothing recorded has D = 0/0, so check for empty rows first. Inverse Simpson is dominated by the common species, so adding a rare species barely moves it (1.92 to 1.96 in the code below), while richness goes up by a full 1: the two indices answer different questions, which is why the homework asks for both.

```r
invsimp <- function(n) { p <- n / sum(n); 1 / sum(p^2) }
comm <- list(even = c(25, 25, 25, 25), dominant = c(70, 10, 10, 10), plus_rare = c(70, 10, 10, 10, 1))
round(sapply(comm, invsimp), 3)        # 4, 1.92 and 1.96: the rare species adds 1 to richness but only 0.04 here
library(vegan); diversity(matrix(c(25, 25, 25, 25, 70, 10, 10, 10), 2, byrow = TRUE), index = "invsimpson")
```

## Connections
- **Builds on:** [[Diversity Index]], [[Proportion]]
- **Leads to:** [[Species Richness]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]], molecular note [[Homework 1 - Riparian Plant Diversity]]

## Flashcards

What is the inverse Simpson index?
??
1 / Σ pᵢ², one over the chance that two random individuals are the same species.
++++

What does inverse Simpson = 3 mean?
??
The community is as diverse as 3 equally common species.
++++

Why does adding one rare species barely change inverse Simpson but add 1 to richness?
??
Inverse Simpson weights species by their share, and a rare species' squared share is tiny.
++++

How do you compute it in R?
??
diversity(species_columns, index = "invsimpson") from the vegan package.
++++

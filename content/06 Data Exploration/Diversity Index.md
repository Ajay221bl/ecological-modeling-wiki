---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A diversity index is a single number summarising a community that grows both with the number of species and with how evenly individuals are shared among them."
aliases:
  - "Shannon index"
  - "Simpson index"
  - "Evenness"
status: seedling
---

# Diversity Index

Guess the colour of the next sweet from a jar. In a jar of 99 red and 1 green you will guess right nearly every time; in a jar with equal numbers of ten colours you will usually be wrong. The harder the guess, the more diverse the jar. A **diversity index** is a single number summarising a community that grows both with the number of species ([[Species Richness]]) and with how evenly individuals are shared among them. Both common indices start from each species' [[Proportion]] pᵢ of all individuals. The *Shannon index* is H = −Σ pᵢ ln pᵢ ([[Natural Logarithm]]), the average surprise at the identity of a random individual. *Simpson's index* is D = Σ pᵢ², the chance that two random individuals are the same species, usually reported as 1 − D or 1/D so that bigger means more diverse.

Two [[Ecological Community|communities]] of 100 birds and 2 species show why richness is not enough. In A the split is 50 and 50, so H = −(0.5 ln 0.5 + 0.5 ln 0.5) = 0.693. In B it is 99 and 1, so H = −(0.99 ln 0.99 + 0.01 ln 0.01) = 0.056. Same richness, very different diversity, and a community of one dominant and nine near-absent species functions very differently from ten equal ones. The code below computes richness, Shannon and Simpson for A, B and a community of ten equal species, and checks the Shannon value against the vegan package.

An index squeezes two properties into one number whose units are hard to interpret, so a community with fewer but more even species can score higher than one with more species. Converting to an *effective number of species*, exp(H) or 1/D, helps: it is the number of equally common species that would give the same index, 2 for community A and about 1.06 for B. vegan appears in the Homework 3 resources, and Zuur's regression appendix models species richness as its [[Response Variable]] ([[Zuur et al. 2009 Appendix A]]).

```r
shannon <- function(n) { p <- n / sum(n); -sum(p * log(p)) }
simpson <- function(n) { p <- n / sum(n); 1 - sum(p^2) }
A <- c(50, 50); B <- c(99, 1); C <- rep(10, 10)
sapply(list(A = A, B = B, C = C), function(n) c(richness = length(n), shannon = shannon(n), simpson = simpson(n), effective = exp(shannon(n))))
vegan::diversity(B)       # the same Shannon value from the vegan package
```

## Connections
- **Builds on:** [[Species Richness]], [[Proportion]]
- **Leads to:** [[Natural Logarithm]], [[Response Variable]], [[Ecological Community]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What two things does a diversity index combine?
??
The number of species and the evenness of their abundances.
++++

What is the Shannon index formula?
??
H = −Σ pᵢ ln pᵢ, with pᵢ each species' proportion of individuals.
++++

What does Simpson's D = Σ pᵢ² represent?
??
The probability that two randomly chosen individuals belong to the same species.
++++

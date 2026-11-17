---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Shannon index"
  - "Simpson index"
  - "Species diversity"
  - "Evenness"
status: seedling
---

# Diversity Index

**In one line:** a diversity index is a single number summarising a community that grows both with the number of species and with how evenly individuals are shared among them.

> [!info] Before this, it helps to know
> [[Species Richness]] (one ingredient) · [[Proportion]] (each species' share) · [[Natural Logarithm]] (used by Shannon)

## The everyday picture
Guessing the next sweet from a jar. In a jar of 99 red and 1 green, you'll guess right nearly every time. In a jar with equal numbers of ten colours, you'll usually be wrong. The harder the guess, the more diverse the jar.

## A tiny example
Two communities of 100 birds and 2 species.
- A: 50 and 50. Shannon H = −(0.5 ln 0.5 + 0.5 ln 0.5) = 0.693.
- B: 99 and 1. H = −(0.99 ln 0.99 + 0.01 ln 0.01) = 0.056.
- Same richness, very different diversity.

## Start from zero
1. **Compute each species' proportion pᵢ** of all individuals.
2. **Shannon index: H = −Σ pᵢ ln pᵢ.** It is the average surprise at the identity of a random individual.
3. **Simpson's index: D = Σ pᵢ².** The chance two random individuals are the same species. Reported as 1 − D or 1/D so that bigger means more diverse.
4. **Both rise with more species and with more even shares.**
5. **Why not just richness:** a community of one dominant and nine near-absent species functions very differently from ten equal ones.
6. **Why be careful:** an index squeezes two properties into one number and its units are hard to interpret. exp(H) and 1/D convert to an "effective number of species".

## In R
```r
shannon <- function(n) { p <- n / sum(n); -sum(p * log(p)) }
simpson <- function(n) { p <- n / sum(n); 1 - sum(p^2) }
A <- c(50, 50); B <- c(99, 1); C <- rep(10, 10)
sapply(list(A = A, B = B, C = C), function(n) c(richness = length(n), shannon = shannon(n), simpson = simpson(n), effective = exp(shannon(n))))
vegan::diversity(B)       # the same Shannon value from the vegan package
```

## In the course
Zuur's regression appendix uses species richness as its response ([[Zuur et al. 2009 Appendix A]]). `vegan` appears in Homework 3 resources.

## Common confusions
- **"Higher Shannon always means more species."** A community with fewer but more even species can score higher.

## Explain it back
- Why does community B score low despite having two species?

*Pass test:* you can compute Shannon's H for a small community by hand.

## Connections
- **Builds on:** [[Species Richness]], [[Proportion]]
- **Leads to:** [[Natural Logarithm]], [[Response Variable]]
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

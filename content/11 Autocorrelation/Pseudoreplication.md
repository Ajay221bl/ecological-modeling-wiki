---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Pseudoreplicates"
  - "Pseudo-replication"
  - "Hurlbert 1984"
status: seedling
---

# Pseudoreplication

**In one line:** pseudoreplication is treating observations as independent replicates when they are not, which makes the sample look larger than it really is.

> [!info] Before this, it helps to know
> [[Replication]] (the real thing) · [[Independence of Observations|Independence]] · [[Sampling Unit|Experimental Unit]] (the level at which treatments are applied)

## The everyday picture
Measuring one tree a hundred times and claiming you studied a hundred trees.

## Start from zero
1. **Named by Hurlbert (1984)** for experiments where treatments were not replicated but samples were.
2. **Classic case:** one heated tank and one control tank, 20 fish measured in each. n is 1 tank per treatment, not 20 fish.
3. **Spatial case:** neighbouring grid cells sharing the same species pool are pseudoreplicates (Diniz-Filho et al.).
4. **Temporal case:** daily measurements of the same plot.
5. **Consequence:** inflated degrees of freedom, standard errors too small, false positives.
6. **Remedies:** analyse at the level of the experimental unit, average subsamples, use random effects for the units, or model the correlation structure.
7. **Harrison et al. (2018)** present random effects as a way to handle non-independence such as repeated measures of the same individual.

## In the course
[[Diniz-Filho et al. 2003]], [[Harrison et al. 2018]]. Mixed model labs ([[Course Website]]).

## Common confusions
- **"More measurements always mean more replicates."** Only independent units are replicates.

## Explain it back
- In a one-tank-per-treatment experiment, what is n?

*Pass test:* you can identify the experimental unit and spot pseudoreplication.

## Connections
- **Builds on:** [[Replication]], [[Independence of Observations|Independence]], [[Sampling Unit|Experimental Unit]]
- **Leads to:** [[Effective Sample Size|Effective Sample Size under Autocorrelation]], [[Random Effect]], [[Inflated Type I Error]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[Why non-independence inflates false positives]]

## Flashcards

What is pseudoreplication?
??
Treating non-independent observations as independent replicates, inflating the apparent sample size.
++++

---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Pseudoreplication is treating observations as independent replicates when they are not, which makes the sample look larger than it really is."
aliases:
  - "Pseudoreplicates"
  - "Pseudo-replication"
  - "Hurlbert 1984"
status: seedling
---

# Pseudoreplication

Measuring one tree a hundred times and claiming you studied a hundred trees is **pseudoreplication**: treating observations as independent replicates when they are not, which makes the sample look larger than it really is ([[Replication]], [[Independence of Observations|Independence]]). Hurlbert (1984) named it for experiments where treatments were not replicated but samples were. The classic case is one heated tank and one control tank with 20 fish measured in each: n is 1 tank per treatment, not 20 fish, because the tank is the [[Sampling Unit|Experimental Unit]].

It has spatial and temporal forms too: neighbouring grid cells sharing the same species pool are pseudoreplicates (Diniz-Filho et al.), and so are daily measurements of the same plot. The consequence is inflated degrees of freedom, standard errors that are too small and false positives ([[Inflated Type I Error]], [[Effective Sample Size|Effective Sample Size under Autocorrelation]]).

Remedies are to analyse at the level of the experimental unit, average subsamples, use a [[Random Effect]] for the units, or model the correlation structure. [[Harrison et al. 2018]] present random effects as a way to handle non-independence such as repeated measures of the same individual ([[Diniz-Filho et al. 2003]], [[Course Website]]). More measurements do not always mean more replicates: only independent units are replicates.

## Connections
- **Builds on:** [[Replication]], [[Independence of Observations|Independence]], [[Sampling Unit|Experimental Unit]]
- **Leads to:** [[Effective Sample Size|Effective Sample Size under Autocorrelation]], [[Random Effect]], [[Inflated Type I Error]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[Why non-independence inflates false positives]]

## Flashcards

What is pseudoreplication?
??
Treating non-independent observations as independent replicates, inflating the apparent sample size.
++++

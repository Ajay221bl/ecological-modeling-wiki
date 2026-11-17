---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "A parameter index matrix (PIM) in Program MARK is a triangular table that assigns an index number to each survival or detection parameter for each release cohort and occasion, defining which parameters are shared."
aliases:
  - "PIM"
  - "PIMs"
  - "Parameter index matrices"
status: seedling
---

# Parameter Index Matrix

A **parameter index matrix** (PIM) in [[Program MARK]] is a triangular table that assigns an index number to each survival or detection parameter for each release [[Cohort]] and occasion, defining which parameters are shared. The same number means the same parameter. Rows are release cohorts and columns are occasions or intervals, and there are separate PIMs for φ and p and for each group.

| | 1→2 | 2→3 | 3→4 |
|---|---|---|---|
| Cohort 1 | 1 | 2 | 3 |
| Cohort 2 | | 2 | 3 |
| Cohort 3 | | | 3 |

The table above is fully time-dependent survival for 4 occasions; constant survival would put 1 in every cell. Age structure appears as diagonals, since an animal's first interval after release uses the juvenile index ([[Age and Time Structure in Survival Models]]). Modern practice sets the PIMs to all different and constrains them with the [[Design Matrix in Program MARK]].

It is a general Program MARK concept behind [[Powell and Gale 2015]] Ch10 to Ch13, not named in the course sources ([[Cormack-Jolly-Seber Model]]). PIM numbers are not parameter values; they are labels saying which parameter applies.

## Connections
- **Builds on:** [[Program MARK]], [[Cohort]]
- **Leads to:** [[Design Matrix in Program MARK]], [[Age and Time Structure in Survival Models]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is a parameter index matrix in Program MARK?
??
A table assigning parameter numbers to each cohort and occasion; equal numbers share a parameter.
++++

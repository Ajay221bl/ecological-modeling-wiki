---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "PIM"
  - "PIMs"
  - "Parameter index matrices"
status: seedling
---

# Parameter Index Matrix

**In one line:** a parameter index matrix (PIM) in Program MARK is a triangular table that assigns an index number to each survival or detection parameter for each release cohort and occasion, defining which parameters are shared.

> [!info] Before this, it helps to know
> [[Program MARK]] · [[Cohort]]

## A tiny example
Fully time-dependent survival for 4 occasions (rows = release cohorts, columns = intervals):
| | 1→2 | 2→3 | 3→4 |
|---|---|---|---|
| Cohort 1 | 1 | 2 | 3 |
| Cohort 2 | | 2 | 3 |
| Cohort 3 | | | 3 |
Constant survival would put 1 in every cell.

## Start from zero
1. **Same number = same parameter.**
2. **Rows are release cohorts,** columns are occasions or intervals.
3. **Separate PIMs** for φ and p, and for each group.
4. **Age structure** appears as diagonals (an animal's first interval after release uses the juvenile index).
5. **Modern practice** sets PIMs to all different and constrains with the design matrix.

## In the course
General Program MARK concept behind [[Powell and Gale 2015]] Ch10 to Ch13 (not named in the course sources).

## Common confusions
- **"PIM numbers are parameter values."** They are labels saying which parameter applies.

## Explain it back
- How would you write constant survival in a PIM?

*Pass test:* you can read a PIM.

## Connections
- **Builds on:** [[Program MARK]], [[Cohort]]
- **Leads to:** [[Design Matrix in Program MARK]], [[Age and Time Structure in Survival Models]]
- **Part of:** [[MOC - Population Estimation]]

## Flashcards

What is a parameter index matrix in Program MARK?
??
A table assigning parameter numbers to each cohort and occasion; equal numbers share a parameter.
++++

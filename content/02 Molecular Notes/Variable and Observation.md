---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "Row and column"
  - "Rows and columns"
status: seedling
---

# Variable and Observation

> [!summary] In plain words
> A data table has two directions. Going across, each column is one **variable** (one thing you measured). Going down, each row is one **observation** (one occasion you measured it). Keeping the two straight is what lets you count how much evidence you really have.

## The everyday picture
A school register: pupils down the side (rows), the things recorded about them across the top (columns). Ask "how tall is the class on average?" and you read down one column. Ask "what do we know about Priya?" and you read across one row.

*Where the picture stops working:* in a register one row is always one pupil. In ecology one row might be an animal, a plot, a visit or a year, and you have to decide which.

## The question
How do variables and observations fit together, and why does the difference matter?

## Built from
- [[Variable]]: one thing measured, which varies from case to case; a column
- [[Observation]]: one occasion of measuring; a row

## The reasoning, step by step
1. **A variable answers "what did I measure?"** Wind, richness, habitat ([[Variable]]).
2. **An observation answers "on which occasion?"** Point 12 on May 3 ([[Observation]]).
3. **Together they make a grid.** Each cell is one variable's value on one occasion. *Why this shape:* every calculation about one variable reads down one column, and R expects exactly this layout ([[Tidy Data]]).
4. **Rows are how statistics counts evidence.** So you must know what one row stands for, or you'll misjudge how much you know.

**A worked example in numbers.** 20 survey points, each visited 3 times, with 5 things recorded per visit.
- Variables: 5 columns (plus point and visit IDs).
- Observations: 20 × 3 = **60** rows.
- Independent places: only **20**. The 60 rows are not 60 separate pieces of evidence about places ([[Sampling Unit]]).

## So in practice
Before any analysis, write one sentence: "one row is one ___". Then ask whether rows that share a place or animal should be grouped ([[Grouping Factor]]).

## What would go wrong otherwise
- You'd treat repeat visits as independent and overstate your confidence ([[Pseudoreplication]]).
- You'd store data in a wide, messy shape that R can't model easily.

## Explain it back
- Using a school register, say which direction is variables and which is observations.
- Why are 60 rows from 20 places not 60 independent observations?

*Pass test:* you can look at any spreadsheet and say what one row and one column stand for.

## Connections
- **Related:** [[Population and Sample]], [[Continuous vs Discrete Data]], [[Independence of Observations]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

In a tidy data table, what is a row and what is a column?
??
A row is one observation (one occasion you measured); a column is one variable (one thing you measured everywhere).
++++

20 points visited 3 times: how many rows, and how many independent places?
??
60 rows but only 20 independent places, so the rows aren't 60 separate pieces of evidence.
++++

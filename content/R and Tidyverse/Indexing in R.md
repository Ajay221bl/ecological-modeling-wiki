---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Subsetting"
  - "Square brackets"
  - "Dollar sign"
status: seedling
---

# Indexing in R

**In one line:** indexing is picking out part of an object, by position, by name or by a true/false test.

> [!info] Before this, it helps to know
> [[Vectors in R]] (things to index) · [[Data Frame]] (tables to index) · [[Subscripts and Indexing]] (the maths notation)

## The everyday picture
A library. You can ask for "the third book on the shelf" (position), "the one called Moby Dick" (name) or "every book published after 2000" (a test). Three ways to say which ones you want.

## Start from zero
1. **By position:** `x[3]`, `x[c(1, 4)]`. Negative drops: `x[-1]`.
2. **By test:** `x[x > 20]`. *Why this works:* the test makes a TRUE/FALSE vector and R keeps the TRUE positions.
3. **By name:** `d$mass` or `d[["mass"]]` for one column.
4. **Tables take two indices:** `d[rows, columns]`. A blank means all.
5. **Combine tests** with `&` (and), `|` (or), `!` (not).
6. **`%in%` tests membership:** `d[d$site %in% c("A", "C"), ]`.

## In R
```r
mass <- c(21, 25, 19, 23)
mass[2]; mass[-1]; mass[mass > 20]
d <- data.frame(site = c("A", "A", "B", "C"), mass = mass)
d[2, "mass"]                         # row 2 of column mass: 25
d[d$site == "A", ]                   # all columns for site A
d[d$site %in% c("A", "C") & d$mass > 20, ]
which(mass == max(mass))             # position of the largest: 2
```
R counts from 1, not 0.

## Common confusions
- **"`=` tests equality."** `==` tests. `=` assigns.
- **"I forgot the comma and it still worked."** `d[2]` on a data frame returns column 2, not row 2.

## Explain it back
- What does `d[d$mass > 20, ]` return and why is the comma needed?
- How do you drop the first element of a vector?

*Pass test:* you can extract rows and columns by position, name and condition.

## Connections
- **Builds on:** [[Vectors in R]], [[Data Frame]]
- **Leads to:** [[filter()]], [[select()]], [[Missing Values]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What are the three ways to index in R?
??
By position, by name, and by a logical (TRUE/FALSE) test.
++++

What does d[d$x > 5, ] return?
??
All columns of the rows where x exceeds 5.
++++

What is the difference between == and = in R?
??
== tests whether two things are equal. = assigns or names an argument.
++++

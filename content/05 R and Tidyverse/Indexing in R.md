---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Indexing is picking out part of an object, by position, by name or by a true/false test."
aliases:
  - "Subsetting"
  - "Square brackets"
  - "Dollar sign"
status: seedling
---

# Indexing in R

In a library you can ask for "the third book on the shelf" (by position), "the one called *Moby Dick*" (by name) or "every book published after 2000" (by a test). **Indexing**, also called subsetting, is picking out part of an R object, and it works in exactly those three ways, mostly with square brackets ([[Subscripts and Indexing]]). By position, `x[3]` gives the third element and `x[c(1, 4)]` the first and fourth; a negative number drops, so `x[-1]` is everything but the first. R counts from 1, not 0.

By test, `x[x > 20]` keeps the elements above 20. This works because the test makes a TRUE/FALSE vector and R keeps the TRUE positions. Tests combine with `&` (and), `|` (or) and `!` (not), and `%in%` checks membership in a set. Equality is tested with `==`; a single `=` assigns, and is a classic slip. By name, `d$mass` or `d[["mass"]]` gives one column. Tables take two indices, `d[rows, columns]`, with a blank meaning "all": in the code below `d[2, "mass"]` is 25, `d[d$site == "A", ]` gives all columns for site A, and the last test keeps rows from sites A or C with mass above 20. `which()` returns positions where a test is true, so `which(mass == max(mass))` is 2.

The comma matters with data frames: `d[2, ]` is row 2, but `d[2]` without a comma is column 2, and it "works" without any warning. Indexing is the base R way to filter rows and choose columns; the tidyverse offers the same operations as named verbs ([[filter()]], [[select()]]). It also underlies finding and removing missing values ([[Missing Values]], [[Vectors in R]], [[Data Frame]]).

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

## Connections
- **Builds on:** [[Vectors in R]], [[Data Frame]]
- **Leads to:** [[filter()]], [[select()]], [[Missing Values]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

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

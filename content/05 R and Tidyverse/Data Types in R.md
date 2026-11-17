---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A data type tells R what kind of thing a value is, a number, a piece of text or a true/false, which decides what R is allowed to do with it."
aliases:
  - "Numeric, character and logical"
  - "Classes in R"
  - "class()"
status: seedling
---

# Data Types in R

A workshop has separate drawers for screws, labels and on/off switches. You can add two screws' lengths, but adding two labels makes no sense, so the drawers are kept apart. A **data type** tells R what kind of thing a value is, and that decides what R is allowed to do with it. The main types are *numeric* (numbers such as 3.2; whole numbers can be stored as *integer*), *character* (text in quotes, such as `"oak"`), *logical* (`TRUE` or `FALSE`) and *factor* (categories with a fixed set of levels, [[Factors in R]]). `class()` tells you which one you have, and `as.numeric()`, `as.character()` and `as.factor()` convert between them.

Most confusing errors in real analyses come from a column being a different type than you assumed. The classic case is numbers read in as text because one cell in the spreadsheet said "n/a": in the code below, converting `c("4", "7", "n/a")` with `as.numeric()` gives 4, 7 and `NA` with a warning, the `NA` marking the value it could not read ([[Missing Values]]). Something that looks like a number is not necessarily one: `"7"` in quotes is text, and `"7" + 1` is an error. Likewise `TRUE` is a logical value while `"TRUE"` is just four letters.

Logical values have one very useful property: in arithmetic they count as 1 and 0. So `sum(mass > 20)` counts how many masses exceed 20 (3) and `mean(mass > 20)` gives the proportion (0.75). Checking types should be one of the first things you do with new data ([[Inspecting Data]]), and it is part of every vector, since a vector holds one type only ([[Vectors in R]]).

```r
class(3.2); class("oak"); class(TRUE)
x <- c("4", "7", "n/a")          # numbers typed as text, plus a stray entry
as.numeric(x)                    # 4 7 NA, with a warning
mass <- c(21, 25, 19, 23)
sum(mass > 20); mean(mass > 20)  # 3 and 0.75
```
One stray "n/a" in a spreadsheet column turns the whole column into text when read in.

## Connections
- **Builds on:** [[Vectors in R]]
- **Leads to:** [[Factors in R]], [[Missing Values]], [[Inspecting Data]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What are the three basic data types in R?
??
Numeric, character and logical.
++++

Why does mean(x > 5) give a proportion?
??
The comparison gives TRUE/FALSE, which R treats as 1/0, and the mean of 1s and 0s is the share of TRUEs.
++++

How do you check an object's type?
??
class(x).
++++

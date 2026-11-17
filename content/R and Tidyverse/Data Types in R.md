---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Numeric, character and logical"
  - "Classes in R"
  - "class()"
status: seedling
---

# Data Types in R

**In one line:** a data type tells R what kind of thing a value is, a number, a piece of text or a true/false, which decides what R is allowed to do with it.

> [!info] Before this, it helps to know
> [[Vectors in R]] (which hold one type each)

## The everyday picture
Drawers in a workshop: one for screws, one for labels, one for on/off switches. You can add two screws' lengths. Adding two labels makes no sense. R keeps the drawers apart so it knows which operations are legal.

## Start from zero
1. **numeric:** numbers, `3.2`. (Whole-number storage is called integer.)
2. **character:** text in quotes, `"oak"`.
3. **logical:** `TRUE` or `FALSE`.
4. **factor:** categories stored with a fixed set of levels ([[Factors in R]]).
5. **Check with `class()`.** *Why:* most confusing errors come from a column being a different type than you assumed, such as numbers read in as text.
6. **Convert with `as.numeric()`, `as.character()`, `as.factor()`.**
7. **Logicals count as 1 and 0.** So `sum(x > 5)` counts how many exceed 5 and `mean(x > 5)` gives the proportion.

## In R
```r
class(3.2); class("oak"); class(TRUE)
x <- c("4", "7", "n/a")          # numbers typed as text, plus a stray entry
as.numeric(x)                    # 4 7 NA, with a warning
mass <- c(21, 25, 19, 23)
sum(mass > 20); mean(mass > 20)  # 3 and 0.75
```
One stray "n/a" in a spreadsheet column turns the whole column into text when read in.

## Common confusions
- **"It looks like a number, so it is one."** `"7"` in quotes is text. `"7" + 1` is an error.
- **"TRUE and "TRUE" are the same."** One is logical, the other is text.

## Explain it back
- Why does `mean(x > 5)` give a proportion?
- How would you find out why a numeric column won't average?

*Pass test:* you can check and convert the type of a vector.

## Connections
- **Builds on:** [[Vectors in R]]
- **Leads to:** [[Factors in R]], [[Missing Values]], [[Inspecting Data]]
- **Part of:** [[MOC - R for Ecological Modeling]]

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

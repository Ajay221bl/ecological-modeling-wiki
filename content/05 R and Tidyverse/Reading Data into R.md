---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "read.csv()"
  - "read_csv()"
  - "read.table()"
  - "Importing data"
status: seedling
---

# Reading Data into R

**In one line:** reading data means loading a file, usually a CSV, from disk into a data frame.

> [!info] Before this, it helps to know
> [[Data Frame]] (what you get) · [[Working Directory]] (where R looks for files)

## The everyday picture
Unpacking a delivery. The parcel (file) has a label saying how it was packed: commas between items, a header row on top. Tell R the packing and it lays everything out on the table.

## Start from zero
1. **A CSV is plain text with commas between values** and one line per row.
2. **`read.csv("path")` (base) or `read_csv("path")` (readr) loads it.**
3. **`read.table()` handles other separators,** such as tabs: `sep = "\t"`, `header = TRUE`.
4. **R guesses each column's type.** *Check them:* a stray character turns a numeric column to text.
5. **Use relative paths inside a project** ([[here()]]), never `C:/Users/me/...`.
6. **Look immediately** with `str()` and `summary()` ([[Inspecting Data]]).

## In R
```r
f <- file.path(tempdir(), "birds.csv")
writeLines(c("site,tree,birds", "A,10,9", "B,30,6", "C,n/a,3"), f)   # make a small file to read
d <- read.csv(f)
str(d)                                   # tree is character: the "n/a" did it
d <- read.csv(f, na.strings = c("NA", "n/a"))
str(d)                                   # now numeric with one NA
# readr::read_csv(f, na = c("NA", "n/a")) returns a tibble and reports the column types
```
Declaring how missing values are written fixes the column type at import.

## In the course
The labs read `.csv` and `.txt` files, such as `DeerEcervi.txt` with `read.table(header = TRUE)` ([[Course Website]]).

## Common confusions
- **"File not found."** R is looking in the working directory, not where you think.
- **"read.csv and read_csv are the same."** Similar job. `read_csv` is faster, returns a tibble and never converts text to factors.

## Explain it back
- What should you run right after reading a file?

*Pass test:* you can read a CSV, set missing-value codes and confirm column types.

## Connections
- **Builds on:** [[Data Frame]], [[Working Directory]]
- **Leads to:** [[Reading Data from a URL]], [[Inspecting Data]], [[here()]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

Which functions read a CSV file into R?
??
read.csv() in base R and read_csv() in readr.
++++

Why check column types right after import?
??
A stray entry such as "n/a" can turn a numeric column into text.
++++

---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Reading data means loading a file, usually a CSV, from disk into a data frame."
aliases:
  - "read.csv()"
  - "read_csv()"
  - "read.table()"
  - "Importing data"
status: seedling
---

# Reading Data into R

A delivered parcel has a label saying how it was packed: commas between items, a header row on top. Tell R the packing, and it lays everything out on the table. **Reading data** means loading a file from disk into a [[Data Frame]]. The usual format is a CSV, plain text with commas between values and one line per row. `read.csv("path")` from base R, or `read_csv("path")` from the [[Tidyverse|tidyverse package]] readr, loads it; `read.table()` handles other separators, such as tabs, with `sep = "\t"` and `header = TRUE`. The labs read files such as `DeerEcervi.txt` this way ([[Course Website]]).

R guesses each column's type as it reads, and one stray entry can make it guess wrong. In the example below, a small file has "n/a" in its tree column, so `read.csv()` reads the whole column as text. Declaring how missing values are written, `na.strings = c("NA", "n/a")`, fixes it at import: the column becomes numeric with one `NA` ([[Missing Values]]). That is why the first thing to do after reading is to look, with `str()` and `summary()` ([[Inspecting Data]]). `read_csv()` does a similar job, faster, returns a [[Tibble]], reports the column types it chose, and never converts text to factors.

"File not found" means R is looking in the [[Working Directory]], not where you think the file is. Inside a project, use relative paths built with [[here()]] rather than a path such as `C:/Users/me/...`, which only exists on your computer. Files can also be read straight from the web ([[Reading Data from a URL]]).

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

## Connections
- **Builds on:** [[Data Frame]], [[Working Directory]], [[Tidyverse]]
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

---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A string is a piece of text, and string functions search, cut, replace and tidy text values."
aliases:
  - "Character strings"
  - "stringr"
  - "Text data"
status: seedling
---

# Strings in R

Find-and-replace in a word processor, applied to a whole column at once, is the idea behind string functions. A **string** is a piece of text, written in quotes such as `"oak"` ([[Data Types in R]]), and **string functions** search, cut, replace and tidy text values. The tidyverse package stringr names them all with `str_`: `str_to_lower()`, `str_trim()` (remove leading and trailing spaces), `str_detect()` (does a pattern occur?), `str_replace()` and `str_sub()` (extract characters by position). Base R has equivalents: `tolower()`, `trimws()`, `grepl()`, `gsub()` and `substr()` ([[Tidyverse]]).

The main reason ecologists care is that messy text makes false categories. To R, `"Oak"`, `"oak "` and `" OAK"` are three different values, so a model would treat them as three species. In the code below, `table(sp)` finds four "species" in a list containing only oak and pine; trimming spaces and converting to lowercase brings it down to the true two. Cleaning text like this is a core part of [[Data Wrangling]].

Patterns can be flexible, using *regular expressions*: `"^VC"` means "starts with VC", so `str_detect(code, "^VC")` finds every Valles Caldera code. Text and factors are not the same thing: a factor has a fixed set of levels, so clean the text first and convert it to a factor afterwards ([[Factors in R]]). Splitting codes into parts and gluing labels together have their own tools ([[separate_wider_delim()]], [[paste()]]).

```r
library(stringr)
sp <- c("Oak", "oak ", " OAK", "pine")
table(sp)                                   # four "species"
clean <- str_to_lower(str_trim(sp)); table(clean)   # two
code <- c("VC-03-T", "SA-01-C")
str_detect(code, "^VC"); str_sub(code, 1, 2); str_replace(code, "-", "_")
nchar(code)
```

## Connections
- **Builds on:** [[Data Types in R]]
- **Leads to:** [[separate_wider_delim()]], [[paste()]], [[Factors in R]], [[Data Wrangling]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

Why clean text before modeling?
??
Differences in case or stray spaces create false extra categories.
++++

Which stringr functions trim spaces and lower the case?
??
str_trim() and str_to_lower().
++++

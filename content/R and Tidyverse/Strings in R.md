---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Character strings"
  - "stringr"
  - "Text data"
status: seedling
---

# Strings in R

**In one line:** a string is a piece of text, and string functions search, cut, replace and tidy text values.

> [!info] Before this, it helps to know
> [[Data Types in R]] (character type) · [[Tidyverse]] (stringr lives there)

## The everyday picture
Find-and-replace in a word processor, but applied to a whole column at once.

## Start from zero
1. **Text goes in quotes.** `"oak"`.
2. **Messy text makes false categories.** `"Oak"`, `"oak"` and `"oak "` are three different values to R. *This is the main reason to care:* a model would treat them as three species.
3. **stringr functions start with `str_`.** `str_to_lower()`, `str_trim()`, `str_detect()`, `str_replace()`, `str_sub()`.
4. **Base equivalents:** `tolower()`, `trimws()`, `grepl()`, `gsub()`, `substr()`.
5. **Patterns can be flexible** (regular expressions): `"^VC"` means "starts with VC".

## In R
```r
library(stringr)
sp <- c("Oak", "oak ", " OAK", "pine")
table(sp)                                   # four "species"
clean <- str_to_lower(str_trim(sp)); table(clean)   # two
code <- c("VC-03-T", "SA-01-C")
str_detect(code, "^VC"); str_sub(code, 1, 2); str_replace(code, "-", "_")
nchar(code)
```

## Common confusions
- **"Text and factors are the same."** A factor has a fixed set of levels. Clean the text first, then convert.

## Explain it back
- Why can stray spaces ruin a grouped analysis?

*Pass test:* you can standardise a messy category column.

## Connections
- **Builds on:** [[Data Types in R]]
- **Leads to:** [[separate_wider_delim()]], [[paste()]], [[Factors in R]], [[Data Wrangling]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

Why clean text before modeling?
??
Differences in case or stray spaces create false extra categories.
++++

Which stringr functions trim spaces and lower the case?
??
str_trim() and str_to_lower().
++++

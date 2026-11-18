---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A regular expression is a short pattern written in a mini-language that describes a family of text strings, such as \"letters at the start\", so R can find, extract or replace matching text."
status: seedling
aliases:
  - "regex"
  - "regular expressions"
---

# Regular Expression

When you search a document for "colour", you find only that exact word. But what if you want "any word that starts with capital letters followed by digits", like every point label BK1001, CR64, HB51? A **regular expression** (regex) is a short pattern, written in a mini-language, that describes a whole family of text strings at once, so a computer can find, extract or replace every piece of text that fits. In R, regexes are used by stringr functions such as `str_extract()` and `str_detect()` and by base functions such as `grepl()` and `sub()`, all working on [[Strings in R]] (text values).

Build one from its pieces. `[A-Za-z]` means "any one letter, capital or lowercase"; `+` after it means "one or more of the thing before"; and `^` at the start means "at the very beginning of the text". So `^[A-Za-z]+` reads "one or more letters at the very start". Apply it to `BK1001`: the match starts at the beginning, takes B and K, and stops at the digit 1, giving `BK`; on `CR64` it gives `CR`. Other common pieces are `[0-9]` (any digit), `.` (any single character), `*` (zero or more), `$` (the very end) and `\\s` (a space or tab, written with two backslashes inside an R string). A pattern is literal unless it uses these special characters, so `"FISP"` simply finds FISP.

The project's wrangling script uses exactly this pattern to build the property code from the point label, `Site = str_extract(PtNum, "^[A-Za-z]+")`, inside [[mutate()]] ([[Grouping Variable]]). Two confusions: characters like `.` and `+` are special, so to match a literal full stop you must escape it as `"\\."`; and a regex matches text, not meaning, so `^[A-Za-z]+` would happily return "NA" from a label that starts with those letters. Test a new pattern on a few examples before trusting it on the whole file.

```r
library(stringr)
str_extract(c("BK1001", "CR64", "HB51"), "^[A-Za-z]+")   # "BK" "CR" "HB"
str_detect(c("FISP", "EUST"), "^F")                        # TRUE FALSE
```

## Connections
- **Builds on:** [[Strings in R]]
- **Leads to:** [[mutate()]], [[Grouping Variable]], [[str_trim()]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]
- **Go deeper:** [[R Scripts Walkthrough]]

## Flashcards

What does the regular expression `^[A-Za-z]+` match in "BK1001"?::"BK": one or more letters at the very start of the text.

How do you match a literal full stop in an R regular expression?::Escape it, writing `"\\."`, because an unescaped `.` means any character.

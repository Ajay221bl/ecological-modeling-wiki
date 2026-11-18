---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Tidy data is a table laid out so that every variable is a column, every observation is a row and every cell holds one value."
aliases:
  - "Tidy format"
  - "Long format"
status: seedling
---

# Tidy Data

A well-kept address book has one person per line and one kind of information per column. Compare a page where phone numbers are scribbled across the top and some people share a line: the same information is there, but only the first can be sorted, filtered or counted. **Tidy data** is a table laid out so that every variable is a column ([[Variable]]), every observation is a row ([[Observation]]) and every cell holds one value ([[Data Frame]]). "Tidy" is about layout, not cleanliness: a tidy table can still contain errors.

An example. Bird counts at two sites in two years are often entered "wide", with columns `site`, `y2020` and `y2021`, so site A's row reads 9 and 8. That table hides a variable, year, inside its column headers, and so a model such as `birds ~ year` cannot even be written. The tidy version has columns `site`, `year` and `birds`, with one row per site per year: A 2020 9, A 2021 8, B 2020 6, B 2021 5. To get there, ask what the variables are (site, year, birds) and give each one column; then ask what one observation is (one site in one year) and give each one row. The code below does the conversion with [[pivot_longer()]] and then fits `lm(birds ~ year + site)`, which only the tidy form allows.

The reason for the rule is that R's model formulas, dplyr verbs and ggplot [[Aesthetics|aesthetics]] all refer to variables by column name; if a variable is not a column, nothing can use it. Wide tables are not wrong as such: they are convenient for data entry and for some report tables, and [[pivot_wider()]] makes them when needed. They are wrong as model input. The course's crash course reshapes the Pine Ridge tree data this way ([[Course Website]], [[Data Wrangling]], [[Variable and Observation]]).

```mermaid
flowchart LR
  W[Wide: values of a variable<br/>stuck in column names] -- pivot_longer --> T[Tidy: one column per variable]
  T -- pivot_wider --> W
```
*What to look at:* the tidy form is what models and plots want.

```r
library(tidyr)
wide <- data.frame(site = c("A", "B"), y2020 = c(9, 6), y2021 = c(8, 5))
tidy <- pivot_longer(wide, cols = starts_with("y"), names_to = "year", names_prefix = "y", values_to = "birds")
tidy$year <- as.numeric(tidy$year)
tidy
coef(lm(birds ~ year + site, data = tidy))     # only possible in tidy form
```

## Connections
- **Builds on:** [[Variable]], [[Observation]], [[Data Frame]], [[Aesthetics]]
- **Leads to:** [[pivot_longer()]], [[pivot_wider()]], [[Data Wrangling]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Variable and Observation]]

## Flashcards

What are the three rules of tidy data?
??
Each variable is a column, each observation is a row, each cell holds one value.
++++

Why do models need tidy data?
??
Formulas refer to variables by column name, so every variable must be its own column.
++++

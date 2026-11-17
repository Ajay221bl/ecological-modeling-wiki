---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - r
aliases:
  - "Long vs wide format"
  - "Pivoting data"
  - "Tidy layout"
status: seedling
---

# Wide vs Long Data

> [!summary] In plain words
> wide data spread repeated measurements across columns (one column per year), while long data stack them in rows with a column naming the measurement, and modeling and ggplot2 usually need the long, tidy form.

## The question
Why does my data need to be "long" for models and plots?

## Built from
- [[Tidy Data]].
- [[pivot_longer()]] and [[pivot_wider()]].
- [[Repeated Measures]].

## The reasoning, step by step
1. **Wide:** site, count_2021, count_2022, count_2023. Easy to read, hard to model.
2. **Long:** site, year, count. One row per observation, one column per variable.
3. **Models need long data:** `count ~ year + (1 | site)` needs a `year` column.
4. **ggplot2 needs long data** to map year to x and colour by site.
5. **`pivot_longer()`** turns wide into long; **`pivot_wider()`** turns long into wide (for tables or detection-history matrices).

## So in practice
Enter data in whatever layout is easiest, then pivot to long in your script before analysis.

## In R
```r
library(tidyr)
wide <- data.frame(site = c("A", "B"), y2021 = c(3, 5), y2022 = c(4, 7))
long <- pivot_longer(wide, -site, names_to = "year", names_prefix = "y", values_to = "count"); long
pivot_wider(long, names_from = year, values_from = count)
```

## What would go wrong otherwise
Fitting a separate model to each year column instead of one model with year as a variable.

## Explain it back
- Which layout does `lmer()` need for repeated measures?

*Pass test:* you can pivot both ways.

## Connections
- **Related:** [[Data Frame vs Tibble]], [[Balanced Data|Balanced vs Unbalanced Data]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

Wide vs long data?
??
Wide: one column per repeated measurement. Long: one row per observation with a column naming the measurement.
++++

Which tidyr function makes data long?
??
pivot_longer().
++++

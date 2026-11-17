---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`pivot_wider()` spreads the values of one column out into several new columns named after the values of another."
aliases:
  - "Long to wide"
  - "spread()"
status: seedling
---

# pivot_wider()

Deal a single queue of people into labelled rooms: everyone tagged "robin" goes to the robin room, everyone tagged "wren" to the wren room. **`pivot_wider()`**, from tidyr, spreads the values of one column out into several new columns named after the values of another. It is the reverse of [[pivot_longer()]]. `names_from` gives the column whose values become the new column names, and `values_from` the column that fills them. The table gets wider and shorter ([[Wide vs Long Data]]).

In the example below, long data with one row per site-species count become one row per site, with a column for each species. Site B has no robin row, so its robin cell is `NA`. Whether that should be `NA` or 0 is a scientific decision, not a formatting one: a species not recorded at a site that was surveyed is a zero, and `values_fill = 0` says so; a site that was never surveyed for robins is genuinely unknown. Decide deliberately.

You need the wide shape for some specific jobs, even though [[Tidy Data]] is long. Community analyses often expect a sites-by-species table with one column per species, the input to counts such as [[Species Richness]] and to a [[Diversity Index]], and side-by-side tables are easier to read in a report.

```r
library(tidyr)
long <- data.frame(site = c("A", "A", "B"), species = c("robin", "wren", "wren"), count = c(3, 1, 4))
pivot_wider(long, names_from = species, values_from = count)                    # B has NA robins
pivot_wider(long, names_from = species, values_from = count, values_fill = 0)   # absence = 0
```

## Connections
- **Builds on:** [[pivot_longer()]], [[Tidy Data]]
- **Leads to:** [[Species Richness]], [[Diversity Index]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Wide vs Long Data]]

## Flashcards

What does pivot_wider() do?
??
Spreads one column's values into multiple columns named by another column, making the table wider.
++++

When should values_fill = 0 be used?
??
When a missing site-species combination means the species was absent, not unknown.
++++

---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A line plot joins points in order along the x-axis, usually time, so trends and cycles are easy to see."
aliases:
  - "Line graph"
  - "Time series plot"
  - "geom_line()"
  - "type = \"l\""
status: seedling
---

# Line Plot

A **line plot** joins points in order along the x-axis, usually time, so trends and cycles are easy to see ([[Scatterplot]], [[Time Series]]). Use it when x has a natural order, such as time or distance along a transect, and do not join unordered categories with lines. Show one line per group with colour or facets.

In base R it is `plot(x, y, type = "l")`, and in ggplot2 `geom_line()` ([[ggplot2 Grammar of Graphics|ggplot2]]). Show the data points too when observations are sparse, or the line implies data that do not exist. The code below draws the annual flow of the Nile from 1871 to 1970, a classic series with a drop around 1898.

Line plots belong to the data exploration and figures units ([[Course Website]]). Lines can't connect any points, only ordered ones; otherwise use points or bars.

```r
plot(Nile, type = "l", ylab = "Annual flow", main = "Nile flow, 1871 to 1970")
range(time(Nile))
```

## Connections
- **Builds on:** [[Scatterplot]], [[Time Series]]
- **Leads to:** [[ggplot2 Grammar of Graphics]], [[Autocorrelation Function]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

When is a line plot appropriate?
??
When x has a natural order, such as time.
++++

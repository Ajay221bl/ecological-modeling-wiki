---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Line graph"
  - "Time series plot"
  - "geom_line()"
  - "type = \"l\""
status: seedling
---

# Line Plot

**In one line:** a line plot joins points in order along the x-axis, usually time, so trends and cycles are easy to see.

> [!info] Before this, it helps to know
> [[Scatterplot]] · [[Time Series]]

## Start from zero
1. **Use when x has a natural order** (time, distance along a transect).
2. **Do not join unordered categories** with lines.
3. **One line per group** with colour or facets.
4. **Base R:** `plot(x, y, type = "l")`; ggplot2: `geom_line()`.
5. **Show the data points too** when observations are sparse, or the line implies data that do not exist.

## In R
```r
plot(Nile, type = "l", ylab = "Annual flow", main = "Nile flow, 1871 to 1970")
range(time(Nile))
```

## In the course
Data exploration and figures units ([[Course Website]]).

## Common confusions
- **"Lines can connect any points."** Only ordered ones; otherwise use points or bars.

## Explain it back
- When is a line plot misleading?

*Pass test:* you can choose a line plot correctly.

## Connections
- **Builds on:** [[Scatterplot]], [[Time Series]]
- **Leads to:** [[ggplot2 Grammar of Graphics]], [[Autocorrelation Function]]
- **Part of:** [[MOC - Data Exploration]]

## Flashcards

When is a line plot appropriate?
??
When x has a natural order, such as time.
++++

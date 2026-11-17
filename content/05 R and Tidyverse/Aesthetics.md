---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "An aesthetic is a visual property of a plot, such as position, colour or size, and `aes()` ties each one to a column of the data."
aliases:
  - "aes()"
  - "Aesthetic mapping"
status: seedling
---

# Aesthetics

A costume designer's note, "the king wears red, guards wear grey", dresses no actor itself; it states the rule linking role to colour, and the wardrobe department applies it to everyone. An **aesthetic** is a visual property of a plot, such as position, colour or size, and `aes()` ties each one to a column of the data ([[ggplot2 Grammar of Graphics]], [[Variable]]). Common aesthetics are `x`, `y`, `colour`, `fill`, `size`, `shape`, `linetype`, `alpha` and `group`.

Inside `aes()`, a variable decides: `aes(colour = burn)` gives each burn level its own colour and makes a legend. Outside `aes()`, it is a constant: `geom_point(colour = "blue")` makes every point blue. The distinction matters, because `aes(colour = "blue")` treats "blue" as a category and paints everything a default red with a legend saying "blue". Aesthetics in `ggplot()` apply to all layers, and in a geom to that layer only. `group` tells line geoms which points to join, such as one line per site. In the code below, one plot maps colour to site and gets a legend; the other sets one colour and uses `group` to keep two lines.

`colour` and `fill` are not the same: `colour` is outlines, lines and points, while `fill` is the inside of bars, boxes and ribbons. How values become colours is set by [[Colour Scales]], and the marks themselves are [[Geoms]].

```r
library(ggplot2)
d <- data.frame(tree = c(10, 20, 30, 10, 20, 30), birds = c(9, 8, 6, 7, 5, 3), site = rep(c("A", "B"), each = 3))
p1 <- ggplot(d, aes(tree, birds, colour = site)) + geom_line()            # mapped: legend, two colours
p2 <- ggplot(d, aes(tree, birds, group = site)) + geom_line(colour = "steelblue")   # set: one colour, still two lines
p1$labels$colour; p2$labels$colour
```

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]]
- **Leads to:** [[Geoms]], [[Colour Scales]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What does aes() do?
??
Maps columns of the data to visual properties such as x, y, colour and size.
++++

What is the difference between colour inside and outside aes()?
??
Inside, colour varies with a variable. Outside, it is one fixed colour for everything.
++++

---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "aes()"
  - "Aesthetic mapping"
status: seedling
---

# Aesthetics

**In one line:** an aesthetic is a visual property of a plot, such as position, colour or size, and `aes()` ties each one to a column of the data.

> [!info] Before this, it helps to know
> [[ggplot2 Grammar of Graphics]] (where aes sits) · [[Variable]] (what gets mapped)

## The everyday picture
A costume designer's notes: "the king wears red, guards wear grey". The notes don't dress any actor. They state the rule connecting role to colour, and the wardrobe department applies it to everyone.

## Start from zero
1. **Common aesthetics:** `x`, `y`, `colour`, `fill`, `size`, `shape`, `linetype`, `alpha`, `group`.
2. **Inside `aes()`: a variable decides.** `aes(colour = burn)` gives each burn level its own colour and makes a legend.
3. **Outside `aes()`: a constant.** `geom_point(colour = "blue")` makes every point blue.
4. **Why the distinction matters:** `aes(colour = "blue")` treats "blue" as a category and paints everything a default red with a legend saying "blue".
5. **Aesthetics in `ggplot()` apply to all layers. In a geom they apply to that layer only.**
6. **`group` tells line geoms which points to join,** for example one line per site.

## In R
```r
library(ggplot2)
d <- data.frame(tree = c(10, 20, 30, 10, 20, 30), birds = c(9, 8, 6, 7, 5, 3), site = rep(c("A", "B"), each = 3))
p1 <- ggplot(d, aes(tree, birds, colour = site)) + geom_line()            # mapped: legend, two colours
p2 <- ggplot(d, aes(tree, birds, group = site)) + geom_line(colour = "steelblue")   # set: one colour, still two lines
p1$labels$colour; p2$labels$colour
```

## Common confusions
- **"colour and fill are the same."** `colour` is outlines, lines and points. `fill` is the inside of bars, boxes and ribbons.

## Explain it back
- What goes wrong with `aes(colour = "blue")`?

*Pass test:* you can decide whether a property belongs inside or outside `aes()`.

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

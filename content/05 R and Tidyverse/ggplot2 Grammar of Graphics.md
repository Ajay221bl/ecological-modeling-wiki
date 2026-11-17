---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "ggplot2"
  - "ggplot()"
  - "Grammar of graphics"
status: seedling
---

# ggplot2 Grammar of Graphics

**In one line:** ggplot2 builds a plot from layers: data, a mapping from variables to visual properties, and geometric shapes that draw them.

> [!info] Before this, it helps to know
> [[Tidy Data]] (the input it needs) · [[Tidyverse]] (its family)

## The everyday picture
Sentence grammar. With a few rules (subject, verb, object) you can say anything. With a few plot rules (data, mapping, shape) you can draw any chart, instead of memorising a separate command for each chart type.

## Start from zero
1. **Start with data:** `ggplot(d, ...)`.
2. **Map variables to aesthetics:** `aes(x = tree, y = birds, colour = burn)` ([[Aesthetics]]).
3. **Add a geom to draw:** `+ geom_point()` ([[Geoms]]).
4. **Stack more layers with `+`:** lines, ribbons, text.
5. **Refine:** scales, facets, labels, theme.
6. **Why layers:** a model figure is raw points plus a fitted line plus an uncertainty band. Each is one layer, possibly from a different data frame.

## See it
![[ggplot layers.png|700]]
*What to look at:* the finished plot on the right is the three layers on the left laid over each other.

## In R
```r
library(ggplot2)
set.seed(2)
d <- data.frame(tree = runif(40, 0, 60), burn = rep(c("no", "yes"), 20))
d$birds <- rpois(40, exp(2.2 - 0.02 * d$tree + 0.3 * (d$burn == "yes")))
p <- ggplot(d, aes(x = tree, y = birds, colour = burn)) +
  geom_point() +
  geom_smooth(method = "glm", method.args = list(family = poisson), se = FALSE) +
  labs(x = "Tree cover (%)", y = "Bird species", colour = "Burned") +
  theme_bw()
class(p)        # a plot is an object: print(p) draws it
```

## In the course
The Sep 29 session, "From data wrangling to figures", and all lab figures use ggplot2 ([[Course Website]]).

## Common confusions
- **"Layers are joined with the pipe."** ggplot layers use `+`.
- **"ggplot can't find my variable."** Variables must be columns of the data and named inside `aes()`.

## Explain it back
- What are the three things every ggplot needs?

*Pass test:* you can build a scatterplot with a second layer.

## Connections
- **Builds on:** [[Tidy Data]], [[Tidyverse]]
- **Leads to:** [[Aesthetics]], [[Geoms]], [[Facets]], [[Themes]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What three components does every ggplot need?
??
Data, an aesthetic mapping, and at least one geom.
![[ggplot layers.png]]
++++

How are ggplot layers combined?
??
With +, not the pipe.
++++

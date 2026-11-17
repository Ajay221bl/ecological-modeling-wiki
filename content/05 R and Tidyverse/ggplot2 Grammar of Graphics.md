---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Ggplot2 builds a plot from layers: data, a mapping from variables to visual properties, and geometric shapes that draw them."
aliases:
  - "ggplot2"
  - "ggplot()"
  - "Grammar of graphics"
status: seedling
---

# ggplot2 Grammar of Graphics

With a few rules of sentence grammar, subject, verb and object, you can say anything. **ggplot2** gives plots a grammar the same way: you build a plot from layers instead of memorising a separate command for each chart type. Start with data, `ggplot(d, ...)`, which should be [[Tidy Data]]. Map variables to [[Aesthetics]], visual properties such as position and colour: `aes(x = tree, y = birds, colour = burn)`. Add a geom to draw them, `+ geom_point()` ([[Geoms]]). Stack more layers with `+`, such as lines, ribbons and text, then refine with scales, [[Facets]], labels and [[Themes]]. It is part of the [[Tidyverse]].

The figure shows a finished plot as three layers laid over each other. The code below builds one: points for simulated bird counts against tree cover coloured by burn status, a fitted Poisson curve per group from `geom_smooth()`, readable labels and a clean theme. A plot is an object, and `print(p)` draws it.

Layers matter because a model figure is raw points plus a fitted line plus an uncertainty band, each one layer, possibly from a different data frame ([[Plotting Model Predictions with Ribbons]]). The 29 September session and all the lab figures use ggplot2 ([[Course Website]]). Two common slips: layers are joined with `+`, not the pipe; and ggplot cannot find a variable unless it is a column of the data named inside `aes()`.

![[ggplot layers.png|700]]
*What to look at:* the finished plot on the right is the three layers on the left laid over each other.

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

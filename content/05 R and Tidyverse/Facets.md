---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Facets split one plot into a grid of small panels, one per level of a variable, all drawn the same way."
aliases:
  - "facet_wrap()"
  - "facet_grid()"
  - "Small multiples"
  - "Multi-panel Plots"
  - "Multi-panel plot"
  - "Trellis plots"
  - "lattice xyplot"
status: seedling
---

# Facets

A page of passport photos uses the same pose, size and lighting, one person per frame, so differences between faces jump out. **Facets** split one plot into a grid of small panels, one per level of a variable, all drawn the same way ([[ggplot2 Grammar of Graphics]], [[Categorical Variable]]). `facet_wrap(~ site)` makes one panel per site and wraps them into rows; `facet_grid(sex ~ site)` makes a strict grid, rows by one variable and columns by another. Axes are shared by default so panels are directly comparable; `scales = "free"` lets each panel choose its own, which helps judge shape but misleads when comparing sizes. Lattice does the same with `xyplot(y ~ x | group)`, and Zuur calls these multi-panel plots and uses them throughout ([[Zuur et al. 2009 Ch5]]).

Facets are the natural look at [[Hierarchical Data]] before a [[Mixed Effects Model|mixed model]]. Differing heights across panels suggest a [[Random Intercept]]; differing slopes suggest a [[Random Slope]]; and panels with few points or a narrow x range show where groups are poorly sampled. In the figure and the first part of the code, the slope is similar in each site's panel while the height differs, the signature of random intercepts. The last lines fit a separate line to each subject of the `sleepstudy` data used in the mixed-model labs and show that both intercepts and slopes vary a lot, a case for random slopes ([[Course Website]]).

Facets are close to a [[Coplot]]: same idea, but coplots slice by any variable to look for interactions, while panels by group show the data's hierarchical structure. Free scales make each panel readable and comparisons misleading. To combine different plots rather than repeat one design, use [[Multi-panel Figures]].

![[Facets by site.png|700]]
*What to look at:* the slope is similar in each panel while the height differs, the signature of random intercepts.

```r
library(ggplot2)
set.seed(3)
d <- data.frame(site = rep(c("A", "B", "C"), each = 15), days = rep(1:15, 3))
d$y <- c(5, 9, 13)[as.integer(factor(d$site))] + 0.5 * d$days + rnorm(45)
p <- ggplot(d, aes(days, y)) + geom_point() + geom_smooth(method = "lm", se = FALSE) + facet_wrap(~ site)
p$facet$params$facets
by_subj <- sapply(split(lme4::sleepstudy, lme4::sleepstudy$Subject), function(s) coef(lm(Reaction ~ Days, s)))
round(apply(by_subj, 1, range), 1)   # per-subject intercepts and slopes vary a lot: a case for random slopes
```

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]]
- **Leads to:** [[Coplot]], [[Random Intercept]], [[Random Slope]], [[Hierarchical Data]], [[Mixed Effects Model]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What do facets do?
??
Split a plot into panels, one per level of a variable, with the same layout in each.
![[Facets by site.png]]
++++

Why are shared axes the default for facets?
??
Identical scales let panels be compared directly.
++++

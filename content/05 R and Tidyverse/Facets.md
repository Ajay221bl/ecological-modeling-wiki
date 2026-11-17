---
type: atomic
tags:
  - r
  - flashcards/eco/r
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

**In one line:** facets split one plot into a grid of small panels, one per level of a variable, all drawn the same way.

> [!info] Before this, it helps to know
> [[ggplot2 Grammar of Graphics]] (the plot being split) · [[Categorical Variable]] (what defines panels)

## The everyday picture
A page of passport photos. Same pose, same size, same lighting, one person per frame. Because everything else is identical, differences between faces jump out.

## Start from zero
1. **`facet_wrap(~ site)`** makes one panel per site and wraps them into rows.
2. **`facet_grid(sex ~ site)`** makes a strict grid: rows by one variable, columns by another.
3. **Axes are shared by default.** *Why:* shared scales make panels directly comparable.
4. **`scales = "free"` lets each panel choose its own.** Use it for shape, not for comparing sizes.
5. **Lattice does the same** with `xyplot(y ~ x | group)`; Zuur et al. (2009) call these multi-panel plots and use them throughout.
6. **How to read them before a mixed model:** differing heights suggest random intercepts, differing slopes suggest random slopes, and panels with few points or a narrow x range show where groups are poorly sampled.

## See it
![[Facets by site.png|700]]
*What to look at:* the slope is similar in each panel while the height differs, the signature of random intercepts.

## In R
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

## In the course
The crash course asks for boxplots with facets, and the mixed model labs plot `sleepstudy` by subject ([[Course Website]]). Zuur uses lattice `xyplot` throughout ([[Zuur et al. 2009 Ch5]]).

## Common confusions
- **"It is the same as a coplot."** Same idea. Coplots slice by any variable to look for interactions; panels by group show the data's hierarchical structure.
- **"Free scales make it easier to read."** They make each panel readable and comparisons misleading.

## Explain it back
- When would you use `facet_grid` over `facet_wrap`?

*Pass test:* you can split a scatterplot by group.

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]]
- **Leads to:** [[Coplot]], [[Random Intercept]], [[Random Slope]], [[Hierarchical Data]]
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

---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Scatter plot"
  - "XY plot"
  - "geom_point()"
status: seedling
---

# Scatterplot

**In one line:** a scatterplot shows two numeric variables at once by drawing one dot per observation, placed by its value on each axis.

> [!info] Before this, it helps to know
> [[Response Variable]] (vertical axis) · [[Explanatory Variable]] (horizontal axis) · [[Correlation]] (what it visualises)

## The everyday picture
A map of stars. Each star is one observation, located by two coordinates. Patterns in the sky, a band, a cluster, a lone star, are patterns in the relationship.

## Start from zero
1. **Predictor on x, response on y.**
2. **One dot per observation.**
3. **Read direction:** rising, falling, flat.
4. **Read form:** straight, curved, humped, stepped.
5. **Read spread:** even along x, or fanning out?
6. **Read oddities:** isolated points, clusters, gaps.
7. **Why always plot before correlating:** a correlation coefficient gives one number, and very different pictures share the same number.

## See it
![[Correlation panels.png|700]]
*What to look at:* similar correlation values can come from very different patterns.

## In R
```r
set.seed(9)
tree <- runif(60, 0, 60); rich <- rpois(60, exp(2.3 - 0.025 * tree))
plot(tree, rich, xlab = "Tree cover (%)", ylab = "Bird species")
lines(lowess(tree, rich), col = 2)               # add a smoother to guide the eye
cor(tree, rich)
# same correlation, different stories: Anscombe's quartet
sapply(1:4, function(i) round(cor(anscombe[[paste0("x", i)]], anscombe[[paste0("y", i)]]), 2))
```
All four Anscombe datasets have correlation 0.82. Plot them to see four different shapes.

## In the course
Protocol step 6 ([[Relationships Between Y and X]]).

## Common confusions
- **"No visible pattern means no relationship."** Another variable may be masking it.
- **"Overlapping dots are one dot."** Use transparency or jitter for counts.

## Explain it back
- What four things do you read off a scatterplot?

*Pass test:* you can describe direction, form, spread and oddities of a plotted relationship.

## Connections
- **Builds on:** [[Response Variable]], [[Explanatory Variable]]
- **Leads to:** [[Pairplot]], [[LOESS Smoother]], [[Linear Regression]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does a scatterplot show?
??
The relationship between two numeric variables, one dot per observation.
![[Correlation panels.png]]
++++

Why plot before computing a correlation?
??
Very different patterns, including curves and outliers, can give the same correlation coefficient.
++++

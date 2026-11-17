---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - exploration
aliases:
  - "Outlier vs leverage vs influence"
  - "Unusual points in regression"
  - "Influential observations"
status: seedling
---

# Outlier, Leverage and Influence

> [!summary] In plain words
> an outlier is a point far from the others or from the fitted line in y, a high-leverage point has an unusual x value, and an influential point changes the fitted model a lot when removed, which usually takes both a large residual and high leverage, as Cook's distance measures.

## The question
How do I tell if one unusual point is driving my results?

## Built from
- [[Outlier]] and [[Residual]].
- [[Leverage]].
- [[Cook's Distance]].
- [[Cleveland Dot Plot]].

## The reasoning, step by step
1. **Outlier in y:** large residual; it may be a recording error or real extreme biology.
2. **Leverage:** distance of x from the centre of the x values (hat value); it measures potential to pull the line.
3. **Influence = residual × leverage, roughly:** a point needs both to move the fit.
4. **Cook's distance** combines them; values above 1 (or clearly above the rest) deserve a look (Zuur et al. 2009 use 1).
5. **High leverage alone** (far in x but on the line) is not a problem; it even makes the slope more precise.
6. **Fixes:** check for errors, transform an extreme x, use a more appropriate family, or report results with and without the point; do not delete points just because they are inconvenient.
Adding one point at speed 40 with stopping distance 10 to the `cars` data changes the slope from 3.93 to 2.34. Its hat value is 0.32 (the other 50 points average 0.03) and its Cook's distance is 5.7, far above 1.

## So in practice
Find extreme x and y values in exploration with dot plots, then check Cook's distance after fitting; report what you did with influential points.

## In R
```r
d2 <- rbind(cars, data.frame(speed = 40, dist = 10))
m1 <- lm(dist ~ speed, cars); m2 <- lm(dist ~ speed, d2)
round(c(slope_without = coef(m1)[2], slope_with = coef(m2)[2], hat = hatvalues(m2)[51], cook = cooks.distance(m2)[51]), 2)
```

## What would go wrong otherwise
Deleting every point with a large residual as an "outlier" without checking whether it is real.

## Explain it back
- Can a high-leverage point be harmless?

*Pass test:* you can classify an unusual point into the three kinds.

## Connections
- **Related:** [[Why explore data before modeling]], [[Mean, Median and Mode]], [[Which assumption violation leads to which model]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Data Exploration]], [[MOC - Linear Models and GLMs]]

## Flashcards

Outlier vs leverage vs influence?
??
Outlier: unusual y (big residual). Leverage: unusual x. Influence: changes the fit when removed (needs both).
++++

What measures influence?
??
Cook's distance.
++++

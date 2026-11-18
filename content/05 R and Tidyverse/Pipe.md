---
type: atomic
tags:
  - r-reproducibility
  - r-syntax
  - tidyverse
  - flashcards/eco/r
description: "The pipe %>% takes whatever is on its left and hands it to the function on its right as that function's first input, so a chain of data steps reads in the order you would say it: take this, and then do that."
aliases:
  - "%>%"
  - "pipe operator"
  - "pipes"
  - "magrittr pipe"
  - "|>"
status: seedling
---

# Pipe

Picture an assembly line. A tray of data goes in at one end; station 1 removes some rows, station 2 sorts the rows into groups, station 3 boils each group down to a number. The **pipe**, `%>%`, is the conveyor belt between stations: it takes whatever is on its left and hands it to the function on its right as that function's first input. Read it aloud as "and then". A function is a named action that takes inputs in brackets ([[Functions in R]]), and the pipe just moves the left-hand thing into the brackets: `x %>% f()` is the same as `f(x)`, and `x %>% f(y)` is `f(x, y)`. It comes with the [[Tidyverse]] (from the magrittr package); R 4.1 and later also has a built-in pipe, `|>`, which works almost the same way for simple chains.

Why have it? Without a pipe, several steps are nested inside each other and must be read from the inside out: in `summarize(group_by(filter(groundDat, Wind < 3), PtNum), n = n())` the first thing done, `filter`, is buried in the middle. The alternative is a pile of temporary names (`step1`, `step2`, ...). With the pipe, `round(mean(c(6, 7, 6)), 1)` becomes `c(6, 7, 6) %>% mean() %>% round(1)`, "take 6, 7, 6, and then take their [[Mean]], and then round to 1 decimal place", giving 6.3 either way. Every wrangling step in the project is a pipe chain, for example:

```r
# norun: needs the project data
groundDat <-
  rawDat %>%
  mutate(GroundCount = coalesce(Dist_50, 0) + coalesce(Dist_100, 0) +
           coalesce(Dist_400, 0)) %>%
  filter(GroundCount > 0)
```

"Take `rawDat`, and then add a column `GroundCount` (birds of that species counted in any [[Distance Bands|distance band]]) with [[mutate()]], and then keep only rows where it is above 0 with [[filter()]]." `coalesce(Dist_50, 0)` means "use Dist_50, but if it is missing use 0", which matters because anything plus `NA` is `NA` in R and `filter()` drops `NA` rows ([[Missing Values]]). The result keeps every species seen on the ground, including those also seen flying over ([[Why exclude fly-overs]]); the Sep 10 script's `filter(is.na(FlyOver) | FlyOver == 0)` wrongly dropped 90 mixed rows (replaced Oct 12 to 13). In the analysis script, `datClean %>% group_by(Site) %>% summarize(Mean = mean(Richness), Variance = var(Richness), Ratio = Variance / Mean, n = n())` is the [[Mean-Variance Relationship]] check behind choosing a Poisson model ([[group_by()]]). Three confusions: `%>%` passes data along while `<-` saves the final result under a name ([[Objects and Assignment]]), so a chain without `<-` just prints its result; layers inside a ggplot join with `+`, not the pipe ([[ggsave()]]); and `=` names an input (`Mean = ...`) while `==` tests equality (`Site == "BK"`).

```r
library(magrittr)
c(6, 7, 6) %>% mean() %>% round(1)   # 6.3
round(mean(c(6, 7, 6)), 1)           # the same, nested
```

## Connections
- **Builds on:** [[Functions in R]], [[Tidyverse]], [[Objects and Assignment]]
- **Leads to:** [[mutate()]], [[filter()]], [[group_by()]], [[Missing Values]], [[Mean-Variance Relationship]], [[str_trim()]], [[ggsave()]], [[Distance Bands]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[Why exclude fly-overs]], [[Wrangling vs Analysis Scripts]], [[librarian shelf()]], [[R Scripts Walkthrough]]

## Flashcards

Rewrite in words: `datClean %>% group_by(Site) %>% summarize(n = n())`.
??
Take the clean data, and then group it by site, and then count the rows in each group. The result is the number of point-visits per site.
++++

What is `x %>% f(y)` the same as?::`f(x, y)`: the pipe makes the left-hand side the function's first input.

---
type: atomic
tags:
  - r-reproducibility
  - r-syntax
  - tidyverse
  - flashcards
aliases:
  - "%>%"
  - "pipe operator"
  - "pipes"
  - "magrittr pipe"
status: seedling
---

# Pipe
**In one line:** The pipe `%>%` takes whatever is on its left and hands it to the function on its right as that function's first input, so you can write a chain of data steps in the order you would say them out loud: "take this, and then do that, and then do this".

> [!info] Before this, it helps to know
> [[Functions and Arguments]] (what a function's "first input" is) · [[R Objects and Assignment]] (what `<-` does) · [[Data Frames]] (the tables being piped)

## Start from zero
Picture an assembly line. A tray of data goes in at one end. Station 1 removes some rows. Station 2 sorts the rows into groups. Station 3 boils each group down to a number. The tray moves from station to station.

The pipe is the conveyor belt between stations. Read `%>%` aloud as **"and then"**.

In R, a **function** is a named action that takes inputs in brackets, like `mean(c(6, 7, 6))` ([[Functions and Arguments]]). The pipe just moves the left-hand thing into the brackets: `x %>% f()` is the same as `f(x)`.

## Why it exists
Without a pipe, several steps are nested inside each other, and you must read them from the inside out:

```r
summarize(group_by(filter(groundDat, Wind < 3), PtNum), n = n())
```

The first thing done (`filter`) is buried in the middle. The alternative is a pile of temporary names (`step1`, `step2`, ...). The pipe lets you write the same thing top to bottom in reading order. It comes with the tidyverse (from the magrittr package). R version 4.1 and later also has a built-in pipe, `|>`, which works almost the same way for simple chains like these.

## A tiny example
| Nested | Piped | Result |
|---|---|---|
| `round(mean(c(6, 7, 6)), 1)` | `c(6, 7, 6) %>% mean() %>% round(1)` | 6.3 |

Piped version in words: "take the numbers 6, 7, 6, and then take their [[Average (Mean)|mean]], and then round to 1 decimal place."

## In my project
Every wrangling step in `GrasslandBirdRichness_Wrangling.R` is a pipe chain (the code ran in ajay's RStudio on Oct 13; R is not installed in Claude's environment, so test any change there). For example:

```r
rawDat <-
  rawDat %>%
  mutate(SpeciesCode = str_trim(SpeciesCode),
         Obs = str_trim(Obs),
         Site = str_extract(PtNum, "^[A-Za-z]+"))
```

Word by word: "Take `rawDat`, **and then** `mutate` (add or change columns): trim stray spaces from the codes ([[str_trim()]]), and make a column `Site` by extracting from PtNum the pattern `"^[A-Za-z]+"`. Save the result back under the name `rawDat` (`<-`)." The pattern is a *regular expression*, a mini-language for text: `^` means "at the very start", `[A-Za-z]` means "any letter", `+` means "one or more". So `BK1001` becomes `BK`.

```r
groundDat <-
  rawDat %>%
  mutate(GroundCount = coalesce(Dist_50, 0) + coalesce(Dist_100, 0) +
           coalesce(Dist_400, 0)) %>%
  filter(GroundCount > 0)
```

A two-station chain: "Take `rawDat`, **and then** add a column `GroundCount` (birds of that species counted in any distance band), **and then** keep (`filter`) only rows where `GroundCount` is more than 0." `coalesce(Dist_50, 0)` means "use Dist_50, but if it is missing use 0". That matters because in R anything plus `NA` (missing) is `NA`, and `filter()` drops `NA` rows. The result keeps every species seen on the ground, including those also seen flying over (see [[Why exclude fly-overs]]). (The Sep 10 script used `filter(is.na(FlyOver) | FlyOver == 0)` here, which wrongly dropped 90 mixed rows; replaced Oct 12 to 13.)

In `GrasslandBirdRichness_Analysis.R` the pipe feeds exploration:

```r
datClean %>%
  group_by(Site) %>%
  summarize(Mean = mean(Richness),
            Variance = var(Richness),
            Ratio = Variance / Mean,
            FocalMean = mean(FocalRichness),
            n = n())
```

"Take the clean data, and then group by site, and then for each site compute the mean, the variance, their ratio, the mean focal richness, and the number of rows." That chain is the [[Mean-Variance Relationship]] check behind choosing a [[Poisson Distribution]] (see [[group_by and summarize]]).

## Common confusions
- **"`%>%` and `<-` do the same thing."** No. `%>%` passes data along; `<-` saves the final result under a name. A chain without `<-` just prints its result.
- **"ggplot layers use the pipe."** No. Inside a ggplot, layers join with `+` ([[ggplot2 and ggsave()]]).
- **"`=` and `==` are interchangeable."** `=` names an input (`Mean = ...`); `==` tests equality (`Site == "BK"` asks "is the site BK?").

## Connections
- **Builds on:** [[Functions and Arguments]], [[Wrangling vs Analysis Scripts]], [[librarian shelf()]]
- **Leads to:** [[group_by and summarize]], [[str_trim()]], [[ggplot2 and ggsave()]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]

> [!question]- Check yourself
> Rewrite in words: `datClean %>% group_by(Site) %>% summarize(n = n())`.
> ?
> Take the clean data, and then group it by site, and then count the rows in each group. The result is the number of point-visits per site.

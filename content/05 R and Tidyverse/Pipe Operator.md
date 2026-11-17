---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "The pipe passes the result on its left into the function on its right, so a chain of steps reads in the order it happens."
aliases:
  - "Pipe"
  - "%>%"
  - "|>"
status: seedling
---

# Pipe Operator

On an assembly line, a part moves from station to station and each station does one thing. Without the **pipe**, R code for several steps has to be written nested, with each function inside the next, so you read it from the innermost bracket outward. The pipe passes the result on its left into the function on its right, so a chain of steps reads in the order it happens. `x |> f()` means `f(x)`, and `x |> f() |> g()` means `g(f(x))`; read `|>` as "then".

The left side becomes the *first* argument of the function on the right ([[Function Arguments]]), which is why tidyverse verbs all take the data first: they were designed to be piped ([[Tidyverse]]). The code below does the same job twice. The nested version, `arrange(summarise(group_by(d, site), ...), ...)`, must be read inside out; the piped version reads as a recipe: take d, then group by site, then summarise the mean, then sort. Both give the same table, but only one can be read aloud. Writing one step per line also makes debugging easy, because you can run the chain up to any line and look at the intermediate result.

There are two spellings. `|>` is built into R from version 4.1, while `%>%` comes from the older magrittr package; in everyday use they behave the same. A pipe does not change the original data: `d |> mutate(...)` returns a new table, so assign it, as in `d2 <- d |> ...`. And ggplot2 layers are joined with `+`, not with a pipe, an accident of history rather than a different idea ([[filter()]], [[mutate()]], [[group_by()]]).

```r
library(dplyr)
d <- data.frame(site = c("A", "A", "B", "B", "B"), birds = c(9, 8, 6, 5, 3))
# nested: read inside out
arrange(summarise(group_by(d, site), mean_birds = mean(birds)), desc(mean_birds))
# piped: read top to bottom
d |>
  group_by(site) |>
  summarise(mean_birds = mean(birds)) |>
  arrange(desc(mean_birds))
```
Both give the same table. Only one can be read aloud.

## Connections
- **Builds on:** [[Function Arguments]], [[Tidyverse]]
- **Leads to:** [[filter()]], [[mutate()]], [[group_by()]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does x |> f() mean?
??
f(x): the left side becomes the first argument of the function on the right.
++++

What is the difference between |> and %>%?
??
|> is built into R. %>% comes from the magrittr package. In ordinary use they do the same thing.
++++

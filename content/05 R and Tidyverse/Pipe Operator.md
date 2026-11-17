---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Pipe"
  - "%>%"
  - "|>"
status: seedling
---

# Pipe Operator

**In one line:** the pipe passes the result on its left into the function on its right, so a chain of steps reads in the order it happens.

> [!info] Before this, it helps to know
> [[Function Arguments]] (the first argument is where the pipe delivers) · [[Tidyverse]] (functions designed for it)

## The everyday picture
An assembly line. A part moves from station to station and each does one thing. Without the pipe you would write the stations nested inside each other, and have to read from the innermost bracket outward.

## Start from zero
1. **`x |> f()` means `f(x)`.**
2. **`x |> f() |> g()` means `g(f(x))`.** Read `|>` as "then".
3. **The left side becomes the first argument.** *Why tidyverse verbs take data first:* so they can be piped.
4. **Two spellings.** `|>` is built into R (4.1 and later). `%>%` comes from the magrittr package and is older. They behave the same in everyday use.
5. **One step per line** keeps it readable and easy to debug: run the chain up to any line.

## In R
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

## Common confusions
- **"The pipe changes d."** It doesn't. Assign the result: `d2 <- d |> ...`.
- **"Pipe and + in ggplot are the same."** ggplot layers are added with `+`, an accident of history.

## Explain it back
- Rewrite `round(mean(x), 1)` with pipes.

*Pass test:* you can read a piped chain aloud as "take, then, then".

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

---
type: atomic
tags:
  - r-reproducibility
  - r-basics
  - flashcards
aliases:
  - "function"
  - "functions"
  - "argument"
  - "arguments"
  - "R function"
status: seedling
---

# Functions and Arguments

**In one line:** a function is a named action in R that takes inputs (arguments) inside round brackets and gives back a result.

> [!info] Before this, it helps to know
> [[R Objects and Assignment]] (functions take objects in and give results you store in objects)

## Start from zero
Think of a kitchen blender. You put ingredients in, choose a setting, press the button, and get a smoothie out. You do not need to know how the motor works.

An R function is the same:
- the **function name** is the machine (`mean`, `read_csv`, `glmer`),
- the **arguments** are what you put in and the settings you choose, written inside `( )` and separated by commas,
- the **result** is what comes out, which you usually store with `<-`.

```r
mean(c(5, 7, 6))
```

"Run the `mean` function on the numbers 5, 7, 6." Result: 6.

## Why it exists
Most jobs (read a file, count species, fit a model) take many steps. Someone wrapped those steps in a function so you can do the whole job in one line, the same way every time. That saves effort and prevents mistakes.

Arguments let one function handle many situations. The same `glmer()` can fit a Poisson model or a different family, on any data set, with any formula, just by changing its arguments.

## A tiny example
Arguments can be given **by name** or **by position**:

```r
hist(datClean$Richness,
     main = "Species richness per point-visit",
     xlab = "Richness")
```

- `datClean$Richness` is the first argument, given by position (the data to plot).
- `main = ...` and `xlab = ...` are named: the title and x-axis label.

Named arguments use `=`. Order does not matter for named arguments, which makes them safer and easier to read.

Many arguments have **defaults**: values used if you do not give one. `hist()` picks its own number of bars unless told otherwise.

**Functions inside functions** are read from the inside out:

```r
read_csv(here(DataPath, "SSP_AllBirdData_NewPointNums_NAOMIT.csv"))
```

First `here()` builds the full file path. Then `read_csv()` reads the file at that path.

## In my project
The scripts *use* many ready-made functions (`read_csv()`, `filter()`, `glmer()`, `ggsave()`), and the Analysis script also *writes* two of its own. (Both ran in ajay's RStudio on Oct 13; R is not installed in Claude's environment, so rerun any change there.)

**Making a function.** The pattern is:

```r
name <- function(argument1, argument2) {
  # steps that use the arguments
}
```

`function(...)` builds a new machine, the names in its brackets are the inputs it expects, the steps go inside `{ }`, and `<-` stores the machine under a name. The last result inside (or whatever `return()` names) is what comes out.

**Example 1: `fitCandidates(response)`.** One argument, the name of the response column as text. Inside, `paste()` glues that name onto each model's right-hand side, so `paste("Richness", "~ Site + Wind + Sky + (1|PtNum)")` gives the text `"Richness ~ Site + Wind + Sky + (1|PtNum)"`. Then it fits every formula:

```r
fits <-
  lapply(mods, function(f) glmer(as.formula(f), family = "poisson", data = datClean,
                               control = glmerControl(optimizer = "bobyqa")))
```

- `glmer` is the function being called (from the lme4 package; see [[glmer()]]).
- Argument 1, `as.formula(f)`: the model formula. `as.formula()` (another function) turns text into a formula R understands.
- `family = "poisson"`: the setting that says "the response is a count; use the [[Poisson Distribution]] with a [[Log Link]]".
- `data = datClean`: which table to find Richness, Site and so on in.
- `control = glmerControl(optimizer = "bobyqa")`: a setting that is itself the result of a function; it picks the search method.
- `function(f) glmer(...)` is a tiny unnamed function: "take one formula `f` and fit it". `lapply(mods, ...)` runs it on each formula in `mods`.

It then fits M3 from the best habitat model and returns the list of six fits. The payoff: `fitCandidates("Richness")` and `fitCandidates("FocalRichness")` fit the two responses with *guaranteed identical* models, with no copy-pasted code to drift apart ([[Candidate Model Set]]).

**Example 2: `coefTable(fit, response)`.** Two arguments: a fitted model and a label. It takes the model's estimate table, adds 95% intervals (estimate plus or minus 1.96 standard errors) and turns everything into rate ratios with `exp()` ([[Interpreting Poisson Coefficients]]). Called as `coefTable(topRich, "All species")` and `coefTable(topFocal, "Focal species")`, it makes the same table for both responses.

**No functions script.** Both functions live inside `GrasslandBirdRichness_Analysis.R`. The syllabus lists the R scripts as "(e.g., wrangling script, analysis script, functions script)". "e.g." means "for example", so a separate functions script is optional, not required. With only two short functions, keeping them next to the code that uses them is simpler. A separate functions file could come in the Final Draft if more functions are added ([[Wrangling vs Analysis Scripts]]).

Another example of named settings: `ggsave(..., width = 6, height = 4.5, dpi = 300)` fixes the figure's size and sharpness. See [[ggplot2 and ggsave()]].

## Common confusions
- **Forgetting the brackets.** `mean` alone shows the function's code; `mean(x)` runs it.
- **`=` inside brackets sets an argument; `<-` stores a result.** `family = "poisson"` does not create an object called `family`.
- **Where does a function come from?** Some come with R (`mean`, `hist`). Others come from [[R Packages]] that must be loaded first; otherwise R says "could not find function".
- **Help is built in.** Type `?glmer` in the console to see every argument and its default.

## Connections
- **Builds on:** [[R Objects and Assignment]]
- **Leads to:** [[R Packages]], [[Pipe]], [[glmer()]], [[group_by and summarize]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[R Scripts Walkthrough]]

> [!question]- Check yourself
> In `glmer(as.formula(f), family = "poisson", data = datClean)`, which argument tells R the response is a count, and which tells it where the data are?
> ?
> `family = "poisson"` says the response is a count (Poisson distribution, log link). `data = datClean` says the variables are columns of the `datClean` data frame.

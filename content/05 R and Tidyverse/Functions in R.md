---
type: atomic
tags:
  - r-reproducibility
  - r-basics
  - flashcards/eco/r
description: "A function is a named action in R that takes inputs (arguments) inside round brackets and gives back a result."
aliases:
  - "Functions and Arguments"
  - "function"
  - "functions"
  - "argument"
  - "arguments"
  - "R function"
  - "Function Arguments"
  - "Defaults"
  - "Calling a function"
status: seedling
---

# Functions in R

Think of a kitchen blender. You put ingredients in, choose a setting, press the button and get a smoothie out, without needing to know how the motor works. A **function** in R is the same: a named action that takes inputs inside round brackets and gives back a result. The function name is the machine (`mean`, `read_csv`, `glmer`); the *arguments* are what you put in and the settings you choose, written inside `( )` and separated by commas; and the result is what comes out, which you usually store in an object with `<-` ([[Objects and Assignment]]). So `mean(c(5, 7, 6))` means "run the `mean` function on the numbers 5, 7 and 6" and gives 6. Most jobs, such as reading a file, counting species or [[Parameter Estimation|fitting a model]], take many steps, and a function wraps those steps so you can do the whole job in one line, the same way every time.

Arguments can be given by position or by name. In `hist(datClean$Richness, main = "Species richness per point-visit", xlab = "Richness")`, the first argument is given by position (the data to plot) and `main` and `xlab` are named, the title and x-axis label. Named arguments use `=`, and their order does not matter, which makes them safer to read. Many arguments have *defaults*, values used if you give none: `hist()` picks its own number of bars unless told otherwise. Functions inside functions are read from the inside out: in `read_csv(here(DataPath, "SSP_AllBirdData_NewPointNums_NAOMIT.csv"))`, [[here()]] first builds the full file path, then `read_csv()` reads the file at that path. Arguments are what let one function handle many situations: the same [[glmer()]] can fit any formula to any data set with any family, just by changing them. In `glmer(as.formula(f), family = "poisson", data = datClean)`, `family = "poisson"` says the response is a count (the [[Poisson Distribution]]) and `data = datClean` names the table where the columns live.

Four confusions. Forgetting the brackets: `mean` alone shows the function's code, `mean(x)` runs it. `=` inside brackets sets an argument while `<-` stores a result, so `family = "poisson"` does not create an object called `family`. Some functions come with R (`mean`, `hist`) and others come from [[Packages in R|packages]] that must be loaded first, or R says "could not find function". And help is built in: `?glmer` shows every argument and its default. You can also build your own functions with `function()` ([[Writing Your Own Function]]); the project's analysis script writes two, `fitCandidates(response)`, which fits the same six candidate models for any response so the two responses get guaranteed identical models ([[Candidate Model Set]]), and `coefTable(fit, response)`, which turns a fitted model into a table of rate ratios ([[Interpreting Poisson Coefficients]]). Both live inside `GrasslandBirdRichness_Analysis.R`; the syllabus lists a functions script only as an example ("e.g."), so a separate file is optional ([[Wrangling vs Analysis Scripts]], [[R Scripts Walkthrough]]).

```r
counts <- c(5, 7, 6)
mean(counts)              # 6
round(mean(counts) / 4, digits = 2)   # functions inside functions: 1.5
```

## Connections
- **Builds on:** [[Objects and Assignment]], [[Parameter Estimation]]
- **Leads to:** [[here()]], [[glmer()]], [[Poisson Distribution]], [[Packages in R]], [[Writing Your Own Function]], [[Candidate Model Set]], [[Interpreting Poisson Coefficients]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[R Scripts Walkthrough]], [[Wrangling vs Analysis Scripts]], [[Pipe]]

## Flashcards

In `glmer(as.formula(f), family = "poisson", data = datClean)`, which argument tells R the response is a count, and which tells it where the data are?
??
`family = "poisson"` says the response is a count (Poisson distribution, log link). `data = datClean` says the variables are columns of the `datClean` data frame.
++++

What is a default argument?::A value a function uses for an argument when you do not supply one.

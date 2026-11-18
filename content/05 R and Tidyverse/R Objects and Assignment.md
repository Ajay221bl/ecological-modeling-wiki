---
type: atomic
tags:
  - r-reproducibility
  - r-basics
  - flashcards
aliases:
  - "object"
  - "objects"
  - "assignment"
  - "<-"
  - "assignment arrow"
status: seedling
---

# R Objects and Assignment

**In one line:** an object is a named box that holds something (a number, some text, a whole data table, a fitted model), and `<-` puts a value into that box.

> [!info] Before this, it helps to know
> [[Variable and Observation]] (the data the boxes will hold) · [[Data Table Rows and Columns]] (the most common thing in a box)

## Start from zero
Imagine a shelf of labelled jars. You put flour in one and write "flour" on the lid. Later you just say "pass me the flour" instead of describing it.

R works the same way. You compute something, put it in a named box, and refer to it by name afterwards. The box is an **object**. Putting something in it is **assignment**, written with an arrow:

```r
DataPath <- "GrasslandBirdRichness_Data"
```

Read it right to left: "take the text `"GrasslandBirdRichness_Data"` and store it in a box called `DataPath`". From now on, typing `DataPath` gives you that text.

The arrow is just a less-than sign and a dash: `<-`. (You will also see `=` used for this; inside function calls `=` has a different job, so my scripts use `<-` for storing.)

## Why it exists
Without named objects you would have to redo every step every time you needed its result. Objects let a script be a chain: each step stores its result, and the next step picks it up by name.

Names also make a script readable. `rawDat`, `groundDat`, `visitDat`, `richnessSum`, `birdVisits`, `datClean` tell the story of the data being cleaned.

## A tiny example
```r
x <- 5        # box x holds 5
y <- x + 2    # box y holds 7
x <- 10       # x now holds 10; the 5 is gone
y             # still 7: y was computed when x was 5
```

Two lessons: assigning again **overwrites** the box, and R does **not** go back and update things computed earlier.

Objects can hold different kinds of things:
- text ("character"): `"BK"`
- numbers ("numeric"): `4.73`
- TRUE / FALSE ("logical")
- a **vector**, several values of one kind in a row: `c(5, 7, 6)` (the `c()` means "combine")
- a [[Data Frames|data frame]] (a table) or a fitted model

## In my project
From `GrasslandBirdRichness_Wrangling.R`:

```r
rawDat <-
  read_csv(here(DataPath, "SSP_AllBirdData_NewPointNums_NAOMIT.csv"))
```

"Read the CSV file and store the whole table in a box called `rawDat`."

Then an **overwrite** that is easy to miss:

```r
rawDat <-
  rawDat %>%
  mutate(SpeciesCode = str_trim(SpeciesCode),
         Obs = str_trim(Obs),
         Site = str_extract(PtNum, "^[A-Za-z]+"))
```

"Take `rawDat`, trim the codes, add a Site column, and put the result back into `rawDat`." After this line the old version (untrimmed, without Site) is gone. That is fine in a script run top to bottom, but it means running lines out of order in RStudio can give confusing results.

In `GrasslandBirdRichness_Analysis.R`, whole lists of models live in one object:

```r
fitsRich <- fitCandidates("Richness")
```

`fitsRich` holds six fitted models (M0 to M3) for all-species richness. `fitsRich$M1_Property` pulls out one of them by name. The `$` sign means "the part called...", and works on data frames too: `datClean$Site` is the Site column. (The scripts ran in ajay's RStudio on Oct 13; R is not installed in Claude's environment, so rerun any change there.)

## Common confusions
- **Names are case sensitive.** `datClean` and `DatClean` are different boxes; the second does not exist, so R says "object not found".
- **Objects live in memory, not on disk.** Close R and they vanish, unless the script recreates them. That is the point: the script, not the memory, is the record. Turn off "save workspace" in RStudio. See [[Reproducibility]].
- **Statistics "variable" vs R "object".** A column of a data frame holds one statistical variable. The data frame object holds many.
- **`==` is not `<-`.** `Site == "BK"` *asks* "is the site BK?" and gives TRUE or FALSE. It stores nothing.

## Connections
- **Builds on:** [[Variable and Observation]], [[Data Table Rows and Columns]]
- **Leads to:** [[Functions and Arguments]], [[Data Frames]], [[Pipe]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[R Scripts Walkthrough]] (every object in my two scripts, in order)

> [!question]- Check yourself
> After `a <- 3`, `b <- a * 2`, `a <- 100`, what is `b`?
> ?
> 6. `b` was computed when `a` was 3 and stored. Changing `a` afterwards does not update `b`.

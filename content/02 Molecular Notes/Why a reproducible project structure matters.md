---
type: molecular
tags:
  - molecular
  - r
  - reproducibility
aliases:
  - "Why reproducible structure"
  - "Why an RProject"
status: seedling
---

# Why a reproducible project structure matters
> [!summary] In plain words
> My results are only trustworthy, and only gradeable, if someone else can unzip my folder and run the code to the end. Scripts usually fail on other computers because of file paths, missing packages or missing folders. A standard layout (an .Rproj file, `here()` paths, separate wrangling and analysis scripts, a README, and Data/Results/Figures folders) removes those failure points.

## The question
Why organize the analysis as an R project with separate folders, a README and two scripts, instead of one script on my desktop?

## Built from
- [[Reproducibility]]: someone else can rerun the work and get the same results.
- [[RProject]]: the .Rproj file that defines the project's home folder.
- [[here()]]: builds file paths relative to that home folder.
- [[R Packages]] and [[librarian shelf()]]: extra tools, installed and loaded in one line.
- [[Wrangling vs Analysis Scripts]]: separating "make clean data" from "analyse it".
- [[README Data Dictionary]]: explains every column and where the data came from.

## The reasoning, step by step
1. **Start with the grader.** Dr. Roberts will unzip my folder on his computer and run it. The Report's code part is 8 points, and he "will deduct up to 2 points for code errors" (syllabus). So the code must run start to finish on a machine I have never touched.
2. **Ask what usually breaks.** Four things, in roughly this order: file paths, missing packages, missing folders, and unexplained data.
3. **Paths.** A path like "/Users/ajaydeep/Desktop/..." exists only on my Mac. An .Rproj file makes the project folder R's starting point, and `here()` builds every path from there, so the same line works anywhere, as long as the project is opened through the .Rproj (see step 10).
4. **Packages.** If his computer lacks lme4, `library(lme4)` stops the script. `shelf()` installs what is missing and then loads it.
5. **Folders.** `write_csv()` and `ggsave()` save into folders but do not create them. If `GrasslandBirdRichness_Results/` is missing, saving fails. So the script makes the folders itself with `dir.create()`.
6. **Meaning.** A README data dictionary records what each column means and the data's provenance ([[Roberts et al. 2025]]). Without it, a reader cannot judge whether "Richness" means what I say.
7. **A tiny example of the payoff.** Count failure points in a single desktop script: 1 hard-coded path + 6 packages the reader may lack (tidyverse, lme4, MuMIn, performance, DHARMa, here) + 2 missing output folders = up to 9 ways to crash. With the structure in place, all 9 are handled before the first model runs.
8. **Separation keeps it checkable.** Splitting wrangling from analysis keeps the raw CSV untouched and each step easy to find: wrangling produces `datClean`; analysis runs the wrangling script and models it.
9. **Copying the instructor's layout helps too.** Following Dr. Roberts' own template (PineRidgeFireLegacies) means he can read my code quickly.
10. **The structure only works if you use it.** On ajay's first run, RStudio had not been opened through the .Rproj, so `here()` started from the home folder and reported that the data path did not exist. Opening the .Rproj and restarting R fixed it ([[here()]]). The README's "How to run" section now says to open the .Rproj first.

## So in my project
`GrasslandBirdRichness_Analysis.R` sets paths, makes the output folders and runs the wrangling script:
```r
ResultsPath <- "GrasslandBirdRichness_Results"
FiguresPath <- "GrasslandBirdRichness_Figures"

dir.create(here(ResultsPath), showWarnings = FALSE)
dir.create(here(FiguresPath), showWarnings = FALSE)

source(here("GrasslandBirdRichness_Wrangling.R"))
```
`<-` stores the folder names as text ([[R Objects and Assignment]]); `dir.create()` makes each folder, staying quiet if it already exists; `source()` runs the other script.

Status (Oct 13): the gaps listed on Oct 12 are closed. The folders are made by `dir.create()`, `str_trim()` is in the wrangling script, and the README now states the real missing values, how to run the project, and every output file ([[README Data Dictionary]]). The code was tested in a cloud copy of R and then run start to finish in ajay's RStudio, with identical numbers both times ([[Preliminary Results]]). R is not installed in Claude's normal environment, so any later change still needs a run in RStudio. What is left before zipping: one final clean run (open the .Rproj, Session > Restart R, Source the Analysis script).

## What would go wrong otherwise
- Dr. Roberts opens the zip, the code stops at a missing folder or a hard-coded path, and points are lost.
- Six weeks later I cannot reproduce my own Report figures for the Final Draft (due Nov 19).
- Mixing cleaning and modelling in one long script makes errors like the double-counted species codes hard to spot.

## Connections
- **Related:** [[R Scripts Walkthrough]], [[ggplot2 and ggsave()]], [[Milestones and Deadlines]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]

---
type: moc
tags:
  - moc
  - r
aliases:
  - "MOC - Reproducible Coding and Figures"
status: seedling
---

# MOC 12 - Reproducible Coding and Figures

Unit 8 (Sep 24, 29): an analysis someone else can rerun from raw data to final figure. RProjects, folders, ggplot2 and saving results.

## 1. A project that reruns
- [[Reproducibility]]: An analysis is reproducible when someone else, given your data and code, gets exactly your results by running it.
- [[Working Directory]]: The working directory is the folder R treats as \"here\" when you give it a file name without a full address.
- [[Absolute Path]]: An absolute path gives a file's complete address from the top of the computer's drive, so it is valid on that one computer only.
- [[Relative Path]]: A relative path gives a file's address starting from the working directory, so it stays valid when the whole project folder moves.
- [[RProject]]: An RProject is a folder marked with an `.Rproj` file, and opening it makes that folder the working directory with a fresh R session.
- [[here()]]: `here()` builds a file path starting from the project's top folder, whichever subfolder the code happens to run from.
- [[Project Folder Structure]]: A project folder structure is a fixed set of subfolders, such as data, scripts, results and figures, so that every file has one obvious home.
- [[README]]: A README is the short text file at the top of a project that tells a newcomer what the project is and how to run it.
- [[Splitting Scripts]]: Splitting scripts means giving each stage of the analysis, wrangling, modeling, figures, its own file instead of one giant script.
- [[Caching Long Runs]]: Caching means saving the result of a slow computation to a file so that later runs load it instead of computing it again.
- [[Session Info]]: Session info is a printed record of the R version, operating system and package versions that produced an analysis.
- [[End-to-end Analysis Plan]]: An end-to-end analysis plan is the ordered list of steps from the scientific question to the final figure, written down before the analysis starts.

## 2. Figures with ggplot2
- [[ggplot2 Grammar of Graphics]]: Ggplot2 builds a plot from layers: data, a mapping from variables to visual properties, and geometric shapes that draw them.
- [[Aesthetics]]: An aesthetic is a visual property of a plot, such as position, colour or size, and `aes()` ties each one to a column of the data.
- [[Geoms]]: A geom is the kind of mark a ggplot layer draws: points, lines, bars, boxes, ribbons.
- [[Facets]]: Facets split one plot into a grid of small panels, one per level of a variable, all drawn the same way.
- [[Themes]]: A theme controls everything about a plot's look that isn't data: background, gridlines, fonts, legend position.
- [[Colour Scales]]: A colour scale is the rule that turns data values into colours, and a good one is readable by colour-blind viewers and in greyscale.
- [[Axis Labels and Titles]]: Axis labels and titles are the words on a figure that say what each axis measures, in what units, and what the colours mean.
- [[Plotting Model Predictions with Ribbons]]: A prediction plot shows what the fitted model expects across a predictor's range as a line, with a shaded ribbon for uncertainty, over the raw data.
- [[Error Bars]]: Error bars are lines extending from a plotted estimate to show its uncertainty or the spread of the data.
- [[Multi-panel Figures]]: A multi-panel figure arranges several separate plots side by side as one image with panel labels.
- [[Saving Figures]]: Saving a figure with `ggsave()` writes a plot to a file at a size and resolution you state in code.
- [[tidy()]]: `tidy()` from the broom package turns a fitted model's coefficient table into an ordinary data frame.
- [[augment()]]: `augment()` from the broom package returns the original data with the model's fitted values and residuals added as new columns.

## Related molecular notes
- [[Console vs Script]]: the console runs a line once and forgets it, while a script is a saved file of code you can rerun from top to bottom, so anything you will need again, or...
- [[Why a reproducible project structure saves you]]: a project with one folder, an RProject, relative paths via here(), separate folders for raw data, scripts and outputs, and version control lets anyone,...
- [[Relative vs Absolute Paths]]: an absolute path spells out a file's location from the top of one computer's file system, while a relative path gives it from the project folder, so only...
- [[Git vs GitHub]]: Git is the version-control program on your computer that records snapshots (commits) of a project, while GitHub is a website that hosts copies of Git...

## Related MOCs
[[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]] · [[MOC 21 - Course Readings|MOC - Course Readings]] · [[Start Here]]

## From the grassland bird project
Notes first written for my project vault (EcoModeling-Vault) and merged in v1.5. Project home: [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]].

- [[check_overdispersion()]]: `check_overdispersion()`, from the **performance** package, asks a fitted Poisson model "are the data more spread out than a Poisson allows?" and...
- [[Data Frames]]: a data frame is R's version of a spreadsheet table: columns are variables, rows are observations, and each column holds one kind of value.
- [[Factors]]: a factor is R's way of storing a categorical variable: a column of labels plus a fixed list of the allowed groups (levels), in a set order.
- [[Four-Letter Species Codes]]: short four-letter nicknames for bird species (DICK = Dickcissel, NOBO = Northern Bobwhite) so observers can write fast in the field.
- [[Functions and Arguments]]: a function is a named action in R that takes inputs (arguments) inside round brackets and gives back a result.
- [[ggplot2 and ggsave()]]: **ggplot2** draws a figure in layers (first the data and which column goes on which axis, then shapes like boxes and dots, then labels), and...
- [[glm()]]: `glm()` is the R function that fits a [[Generalized Linear Model]]: you tell it what you are predicting from what (a formula), what kind of numbers...
- [[glmer()]]: `glmer()`, from the **lme4** package, fits a [[GLMM]]: the same kind of model as [[glm()]], plus "random effects" that let each group (here, each...
- [[group_by and summarize]]: `group_by()` sorts the rows of a table into piles that share the same values, and `summarize()` boils each pile down to one row of summary numbers.
- [[MuMIn model.sel()]]: `model.sel()`, from the **MuMIn** package, takes several fitted models and returns one table that ranks them from best to worst by an AIC score,...
- [[Pipe]]: the pipe `%>%` takes whatever is on its left and hands it to the function on its right as that function's first input, so you can write a chain of...
- [[R Objects and Assignment]]: an object is a named box that holds something (a number, some text, a whole data table, a fitted model), and `<-` puts a value into that box.
- [[R Packages]]: a package is a free add-on bundle of functions that other people wrote; you install it once, then load it every session before using its functions.
- [[R Scripts Walkthrough]]
- [[README Data Dictionary]]: a README data dictionary is a plain-text file that says where the data came from and what every column means (and in what units), so a stranger could...
- [[str_trim()]]: `str_trim()`, from the **stringr** package (part of the tidyverse), removes invisible spaces from the start and end of text, so `" FISP"` and...
- [[Why a reproducible project structure matters]]
- [[Wrangling vs Analysis Scripts]]: the wrangling script turns the messy raw file into one clean table; the analysis script explores that table, fits models and makes figures, and it...

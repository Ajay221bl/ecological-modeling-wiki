---
type: moc
tags:
  - moc
  - r
aliases:
  - "MOC - R for Ecological Modeling"
status: seedling
---

# MOC 03 - R for Ecological Modeling

Units 2 and 8 (Aug 20, Sep 24, Sep 29): the R needed to wrangle data, fit models and make figures, and to keep the whole analysis reproducible.

## 1. R basics
- [[R and RStudio]]: R is the programming language that does the statistics, and RStudio is the workbench program that makes R comfortable to use.
- [[Console]]: The console is the window where R actually runs commands and prints answers, one at a time, without saving them.
- [[Script]]: A script is a plain text file of R commands, saved so the whole analysis can be rerun from top to bottom.
- [[Objects and Assignment]]: An object is a named container holding something in R's memory, and assignment (`<-`) is how you put something into it.
- [[Vectors in R]]: A vector in R is a sequence of values of one type, and it is the basic building block of every R dataset.
- [[Data Types in R]]: A data type tells R what kind of thing a value is, a number, a piece of text or a true/false, which decides what R is allowed to do with it.
- [[Factors in R]]: A factor is R's way of storing a categorical variable: each value is one of a fixed list of allowed categories called levels.
- [[Data Frame]]: A data frame is R's table for data: each column is a variable, each row an observation, and columns may be of different types.
- [[Tibble]]: A tibble is the tidyverse's version of a data frame: the same table, with tidier printing and fewer surprises.
- [[Lists in R]]: A list is a container whose slots can hold anything, of any type and size, including other lists, datasets and fitted models.
- [[Matrices in R]]: A matrix in R is a rectangular grid of values that are all the same type, addressed by row and column.
- [[Indexing in R]]: Indexing is picking out part of an object, by position, by name or by a true/false test.
- [[Missing Values]]: `NA` is R's marker for \"this value exists but we don't know it\", and it spreads through calculations unless you say how to handle it.
- [[Function Arguments]]: Arguments are the inputs you hand to a function, either by position or by name, and many have default values that apply when you say nothing.
- [[Writing Your Own Function]]: Writing a function means packaging a few lines of code under a name so the same steps can be reused with different inputs.
- [[For Loop]]: A for loop repeats a block of code once for each item in a list of values.
- [[If-Else]]: If-else makes code choose between actions depending on whether a condition is true.
- [[Vectorization]]: Vectorization means applying an operation to a whole vector in one statement, with no explicit loop.
- [[apply()]]: `apply()` runs a function over every row or every column of a matrix.
- [[lapply()]]: `lapply()` runs a function on every element of a list or vector and returns the results as a list.
- [[sapply()]]: `sapply()` is `lapply()` that then tries to simplify the result into a vector or matrix.
- [[map()]]: `map()` is the tidyverse's version of `lapply()`, with variants that guarantee the type of result you get back.
- [[Packages in R]]: A package is a bundle of extra functions and data that someone wrote for R, which you install once and load each session.
- [[librarian shelf()]]: `shelf()` from the librarian package installs any missing packages and loads them all in one line.
- [[CRAN]]: CRAN is the official online warehouse from which R and most of its packages are downloaded.

## 2. Tidyverse wrangling
- [[Tidyverse]]: The tidyverse is a family of R packages that share one design, so data import, cleaning, reshaping and plotting all work the same way.
- [[Pipe Operator]]: The pipe passes the result on its left into the function on its right, so a chain of steps reads in the order it happens.
- [[filter()]]: `filter()` keeps the rows of a table that pass a test and drops the rest.
- [[select()]]: `select()` keeps, drops or reorders the columns of a table by name.
- [[mutate()]]: `mutate()` adds new columns, or changes existing ones, by calculating from the columns already there.
- [[summarise()]]: `summarise()` collapses many rows into one row of summary numbers, or one row per group.
- [[group_by()]]: `group_by()` marks a table as split into groups, so that the verbs after it work separately on each group.
- [[rename()]]: `rename()` changes column names without touching the data.
- [[case_when()]]: `case_when()` assigns values by checking a list of conditions in order and using the first one that is true.
- [[across()]]: `across()` applies the same operation to several columns at once inside `mutate()` or `summarise()`.
- [[Tidy Data]]: Tidy data is a table laid out so that every variable is a column, every observation is a row and every cell holds one value.
- [[pivot_longer()]]: `pivot_longer()` takes several columns that are really values of one variable and stacks them into two columns: one for the old names, one for the values.
- [[pivot_wider()]]: `pivot_wider()` spreads the values of one column out into several new columns named after the values of another.
- [[separate_wider_delim()]]: `separate_wider_delim()` splits one text column into several columns wherever a chosen separator character appears.
- [[Joins]]: A join combines two tables side by side by matching rows that share a key, such as the same site code.
- [[Binding Rows and Columns]]: Binding glues tables together by simple position: rows underneath each other, or columns side by side, with no matching by key.

## 3. Getting data in and looking at it
- [[Reading Data into R]]: Reading data means loading a file, usually a CSV, from disk into a data frame.
- [[Reading Data from a URL]]: R can read a data file straight from a web address, so a script works on any computer without the file being copied by hand.
- [[Inspecting Data]]: Inspecting data means looking at a dataset's size, column types and value ranges before doing anything else with it.
- [[table()]]: `table()` counts how many times each value occurs, or each combination of values from two or more variables.
- [[unique()]]: `unique()` lists the different values that occur in a vector, each once.

## 4. Simulation and model code
- [[Random Numbers and set.seed()]]: R makes \"random\" numbers from a formula that starts at a seed, and `set.seed()` fixes that start so the same numbers come out every time.
- [[Simulating Data]]: Simulating data means inventing a dataset from a model whose true parameters you chose, so you can see whether your analysis recovers them.
- [[Distribution Functions in R]]: For every probability distribution R has four functions, starting with d, p, q and r, that give the height of the curve, the probability up to a value, the...
- [[Model Formula Syntax]]: A model formula is R's shorthand for a model: the response on the left of `~`, the terms that explain it on the right.

## 5. Reports and version control
- [[R Markdown]]: R Markdown is a file format that mixes plain writing with runnable R code, so the report and the analysis that produced it are one document.
- [[Code Chunks]]: A code chunk is a fenced block of R code inside an R Markdown file, with options that control whether the code runs and what appears in the report.
- [[Knitting]]: Knitting is running an R Markdown file from top to bottom in a fresh R session and assembling the text, code and output into a finished document.
- [[Version Control]]: Version control is a system that records every saved state of a project's files, so you can see what changed, when and why, and go back.
- [[Git]]: Git is the version control program that runs on your own computer and keeps the history of a project folder.
- [[GitHub]]: GitHub is a website that stores copies of Git repositories online, so work is backed up, shareable and open to collaboration.
- [[Repository]]: A repository is a project folder whose complete change history is tracked by Git.
- [[Commit]]: A commit is one saved snapshot of the project, labelled with a short message saying what changed.
- [[Push and Pull]]: Pushing sends your new commits to the remote repository, and pulling brings down commits that others, or you on another computer, put there.
- [[Fork]]: A fork is your own copy, on GitHub, of someone else's repository, which you can change freely without affecting the original.
- [[gitignore File]]: `.gitignore` is a plain text file listing the files and folders Git should not track.

## 6. Helpers and getting unstuck
- [[Help Files in R]]: Every R function has a help page, opened with `?name`, that states what it does, what inputs it takes and what it returns.
- [[Errors and Warnings in R]]: R talks back in three ways: a message is information, a warning means \"I finished but something may be wrong\", and an error means \"I stopped\".
- [[Debugging]]: Debugging is finding out why code doesn't do what you meant, by narrowing down where expectation and reality part ways.
- [[expand.grid()]]: `expand.grid()` builds a table with one row for every combination of the values you give it.
- [[seq()]]: `seq()` makes a regular sequence of numbers between two ends.
- [[rep()]]: `rep()` repeats values, either the whole set several times or each value several times.
- [[paste()]]: `paste()` glues pieces of text and values together into one string.
- [[Strings in R]]: A string is a piece of text, and string functions search, cut, replace and tidy text values.
- [[Dates in R]]: R stores a date as a count of days from a fixed starting day, which lets it sort, subtract and extract parts such as year or day of the year.
- [[kable()]]: `kable()` turns a data frame into a cleanly formatted table in a knitted report.
- [[File System Functions in R]]: R can create folders, download files and build file paths itself, so a script can set up everything it needs without manual clicking.

## 7. Reproducibility
- [[RProject]]: an RProject is a folder marked with an `.Rproj` file, and opening it makes that folder the working directory with a fresh R session.
- [[here()]]: `here()` builds a file path starting from the project's top folder, whichever subfolder the code happens to run from.
- [[Project Folder Structure]]: a project folder structure is a fixed set of subfolders, such as data, scripts, results and figures, so that every file has one obvious home.
- [[README]]: a README is the short text file at the top of a project that tells a newcomer what the project is and how to run it.
- [[Splitting Scripts]]: splitting scripts means giving each stage of the analysis, wrangling, modeling, figures, its own file instead of one giant script.
- [[Reproducibility]]: an analysis is reproducible when someone else, given your data and code, gets exactly your results by running it.

## 8. Figures
- [[ggplot2 Grammar of Graphics]]: ggplot2 builds a plot from layers: data, a mapping from variables to visual properties, and geometric shapes that draw them.

## Related molecular notes
- [[Why a reproducible project structure saves you]]: a project with one folder, an RProject, relative paths via here(), separate folders for raw data, scripts and outputs, and version control lets anyone,...
- [[Occupancy Workflow in R]]: an occupancy analysis in R goes from a site-by-visit detection matrix and covariates, through fitting candidate models for ψ and p, to checking fit,...
- [[Console vs Script]]: the console runs a line once and forgets it, while a script is a saved file of code you can rerun from top to bottom, so anything you will need again, or...
- [[Loops, apply and map]]: a for loop, the apply family (`sapply`, `lapply`) and purrr's `map()` all repeat the same code over many elements; vectorised functions do it in one call,...
- [[Data Frame vs Tibble]]: a tibble is the tidyverse's version of a data frame: it prints only what fits on screen with column types, never turns strings into factors, does not...
- [[Wide vs Long Data]]: wide data spread repeated measurements across columns (one column per year), while long data stack them in rows with a column naming the measurement, and...
- [[Why a reproducible project structure saves you]]: a project with one folder, an RProject, relative paths via here(), separate folders for raw data, scripts and outputs, and version control lets anyone,...
- [[Relative vs Absolute Paths]]: an absolute path spells out a file's location from the top of one computer's file system, while a relative path gives it from the project folder, so only...

## Related MOCs
[[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]] · [[MOC 21 - Course Readings|MOC - Course Readings]] · [[Start Here]]

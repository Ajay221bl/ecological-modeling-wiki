---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Saving a figure with `ggsave()` writes a plot to a file at a size and resolution you state in code."
aliases:
  - "ggsave()"
  - "Exporting plots"
status: seedling
---

# Saving Figures

A photo printed at a chosen size comes out the same every time; a screenshot of your monitor depends on how big the window happened to be. **Saving a figure** with `ggsave(filename, plot, width, height, dpi)` writes a plot to a file at a size and resolution stated in code ([[ggplot2 Grammar of Graphics]]). The file type comes from the extension: `.png` for slides and web, `.pdf` or `.svg` for print, since vector formats stay sharp at any zoom. Width and height are in inches unless you set `units = "cm"`, and journals specify column widths; use `dpi = 300` or more for print. Build the path with [[here()]].

The code below saves a plot as a 6 × 4 inch PNG at 300 dpi and confirms the file exists. Font sizes are relative to the saved size, so design at the final dimensions ([[Themes]]).

Code beats the Export button, which saves whatever size your Plots pane was, so the figure changes each time; code makes it identical on every run ([[Reproducibility]], [[Project Folder Structure]]). And without the `plot` argument, `ggsave()` saves the last plot displayed, which may not be the one you mean.

```r
library(ggplot2)
p <- ggplot(mtcars, aes(wt, mpg)) + geom_point() + theme_bw(base_size = 12)
f <- file.path(tempdir(), "fig1.png")
ggsave(f, p, width = 6, height = 4, dpi = 300)
file.exists(f); round(file.size(f) / 1024)       # saved, size in KB
```

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]], [[here()]]
- **Leads to:** [[Project Folder Structure]], [[Reproducibility]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What does ggsave() do?
??
Saves a ggplot to a file with specified width, height and resolution.
++++

Why save figures from code and not the Export button?
??
Code fixes the size and resolution, so the figure is identical each time the script runs.
++++

---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - figures
  - flashcards/eco/r
description: "ggsave() is the ggplot2 function that writes a finished figure to an image file, at a size and resolution you choose."
aliases:
  - "ggplot2 and ggsave()"
  - "ggsave"
  - "Saving Figures"
  - "Exporting plots"
status: seedling
---

# ggsave()

A drawing on screen vanishes when you close R, and a screenshot is blurry and the wrong size. `ggsave()` is the [[ggplot2 Grammar of Graphics|ggplot2]] function (the [[Packages in R|R package]] that builds a plot from layers joined with `+`) that writes a finished figure to an image file, at a size and sharpness you choose. You give it a file path, the plot to save and the size: `ggsave("fig.png", plot = myPlot, width = 6, height = 4.5, dpi = 300)` means "save `myPlot` as a PNG 6 by 4.5 inches at 300 dots per inch", which is print quality. The file type comes from the ending of the name: `.png` for slides and the web, `.pdf` or `.svg` for print, because vector formats stay sharp at any zoom. Width and height are in inches unless you set `units = "cm"`; journals give column widths, and print wants `dpi = 300` or more. Font sizes are relative to the saved size, so design at the final dimensions ([[Themes]]). Because the figure is made and saved by code, rerunning the script rebuilds it exactly when the data change, which a figure clicked together in a spreadsheet cannot do ([[Reproducibility]]).

Build it up from the project's boxplot in `GrasslandBirdRichness_Analysis.R`. First the plot is stored in an [[Objects and Assignment|object]] (a named thing R remembers) so it can be handed to `ggsave()` later:

```r
# norun: needs the project data
richnessPlot <-
  ggplot(datClean, aes(x = Site, y = Richness)) +
  geom_boxplot(fill = "grey85") +
  geom_jitter(width = 0.15, alpha = 0.3) +
  theme_bw() +
  xlab("Property") +
  ylab("Species richness per point-visit")
dir.create(here(FiguresPath), showWarnings = FALSE)
ggsave(here(FiguresPath, "RichnessBySite_Boxplot.png"),
       plot = richnessPlot, width = 6, height = 4.5, dpi = 300)
```

`ggplot()` names the table and maps Site to the x-axis and [[Species Richness|Richness]] to the y-axis; `geom_boxplot()` draws one [[Boxplot]] per site (median line, box over the middle half of values, whiskers toward the extremes); `geom_jitter()` draws every point-visit as a see-through dot nudged sideways by up to 0.15, because richness is a whole number and identical values would otherwise stack into one dot. Only the sideways drawing position moves; the y values stay exact. `dir.create()` makes the Figures folder first, because `ggsave()` does not create missing folders by default (recent ggplot2 has a `create.dir` argument); the Sep 10 script lacked this line, so saving would have failed (fixed Oct 12 to 13). [[here()]] builds the file path from the project's top folder. Three confusions: layers join with `+`, not the [[Pipe]] `%>%`; if you leave out `plot =`, `ggsave()` saves the last plot displayed, which may not be the one you meant; and RStudio's Export button is not a substitute, because it saves whatever size the Plots pane happened to be, while code makes the figure identical on every run ([[Project Folder Structure]]). The script saves two more figures the same way at 9 by 4.5 inches, `TopModel_RateRatios_Dotplot.png` (rate ratios with 95% [[Confidence Interval|confidence intervals]] for the top model, split into all-species and focal panels by `facet_wrap()`) and `Richness_vs_SpatialCovariance.png` (raw richness against [[Spatial Covariance|spatial covariance]] at the 7.29 ha window with a [[LOESS Smoother|loess]] trend line); these are Figures 1 and 2 of the Report ([[Preliminary Results]], [[Interpreting Poisson Coefficients]]). Unlike Dr. Roberts' example script, which prints plots without saving, the project stores each plot in an object so it can be saved. Plotting before modelling is the heart of [[Data Exploration]] ([[Zuur et al. 2010]]).

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]], [[Objects and Assignment]], [[here()]], [[Reproducibility]], [[Packages in R]]
- **Leads to:** [[Themes]], [[Project Folder Structure]], [[Boxplot]], [[Confidence Interval]], [[Interpreting Poisson Coefficients]], [[Data Exploration]], [[EDA Findings]], [[Species Richness]], [[Spatial Covariance]], [[LOESS Smoother]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[R Scripts Walkthrough]], [[Preliminary Results]], [[Zuur et al. 2010]]

## Flashcards

Why does the analysis script call `dir.create()` before `ggsave()`?
??
`ggsave()` does not create missing folders by default, so if the Figures folder does not exist, saving fails. Creating it first (with `showWarnings = FALSE` in case it already exists) makes the script run on a fresh copy of the project.
++++

Why add `geom_jitter()` on top of the boxplot for richness data?::Richness takes whole-number values, so many point-visits would overlap as one dot; jitter spreads them sideways so you can see them all.

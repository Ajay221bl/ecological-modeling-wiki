---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "ggsave()"
  - "Exporting plots"
status: seedling
---

# Saving Figures

**In one line:** saving a figure with `ggsave()` writes a plot to a file at a size and resolution you state in code.

> [!info] Before this, it helps to know
> [[ggplot2 Grammar of Graphics]] (the plot object) · [[here()]] (where to save)

## The everyday picture
Printing a photo at a chosen size rather than taking a screenshot of your monitor. The screenshot depends on how big the window happened to be. The print comes out the same every time.

## Start from zero
1. **`ggsave(filename, plot, width, height, dpi)`.**
2. **The file type comes from the extension.** `.png` for slides and web, `.pdf` or `.svg` for print (vector formats stay sharp at any zoom).
3. **Give width and height in inches** (or set `units = "cm"`). Journals specify column widths.
4. **`dpi = 300` or more for print.**
5. **Why not the Export button:** it saves whatever size your Plots pane was, so the figure changes each time. Code makes it identical on every run.
6. **Font sizes are relative to the saved size.** Design at the final dimensions.

## In R
```r
library(ggplot2)
p <- ggplot(mtcars, aes(wt, mpg)) + geom_point() + theme_bw(base_size = 12)
f <- file.path(tempdir(), "fig1.png")
ggsave(f, p, width = 6, height = 4, dpi = 300)
file.exists(f); round(file.size(f) / 1024)       # saved, size in KB
```

## Common confusions
- **"ggsave saves the plot I mean."** Without the `plot` argument it saves the last plot displayed.

## Explain it back
- Why set width and height explicitly?

*Pass test:* you can save a plot at journal size and resolution from code.

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

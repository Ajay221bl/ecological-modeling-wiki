---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - figures
  - flashcards
aliases:
  - "ggplot2"
  - "ggplot()"
  - "ggsave"
  - "ggplot"
status: seedling
---

# ggplot2 and ggsave()
**In one line:** **ggplot2** draws a figure in layers (first the data and which column goes on which axis, then shapes like boxes and dots, then labels), and `ggsave()` writes the finished figure to an image file.

> [!info] Before this, it helps to know
> [[Data Frames]] (the table being plotted) · [[Functions and Arguments]] (reading `name(input = value)`) · [[Data Exploration]] (why we plot at all)

## Start from zero
Think of a figure as transparent sheets stacked on top of each other:
1. The bottom sheet sets up the canvas: which table, and which column goes on the x-axis (left to right) and y-axis (bottom to top).
2. The next sheet draws boxes.
3. The next sheet sprinkles dots.
4. The last sheets add colours, fonts and axis labels.

ggplot2 works exactly like that, and each sheet is joined to the stack with `+`. This idea is called the "grammar of graphics".

A **boxplot** summarizes a group of numbers: the thick middle line is the median (the middle value), the box spans the middle half of the values, and the whiskers reach out toward the smallest and largest.

## Why it exists
Figures made by clicking in a spreadsheet cannot be rebuilt exactly when data change. In ggplot2 a figure is code, so it is rebuilt every time the script runs ([[Reproducibility]]). Layers also make editing easy: change one sheet without touching the rest. Plots are the heart of [[Data Exploration]]: [[Zuur et al. 2010]] recommend looking at the data graphically before modelling (for example boxplots and scatterplots to spot outliers and patterns).

## A tiny example
Three visits at one site with 5, 6 and 6 species, three at another with 7, 8 and 8:
- the boxplot shows two boxes, the second higher;
- without jitter the two 6s would sit on top of each other and look like one dot;
- with jitter, each dot is nudged sideways a little so all three are visible.

## In my project
The boxplot in `GrasslandBirdRichness_Analysis.R` (it ran in ajay's RStudio on Oct 13; R is not installed in Claude's environment, so rerun any change there):

```r
richnessPlot <-
  ggplot(datClean, aes(x = Site, y = Richness)) +
  geom_boxplot(fill = "grey85") +
  geom_jitter(width = 0.15, alpha = 0.3) +
  theme_bw() +
  theme(axis.title = element_text(size = 14),
        axis.text = element_text(size = 11)) +
  xlab("Property") +
  ylab("Species richness per point-visit")
```

Word by word:
- `richnessPlot <-`: save the whole figure under this name, so it can be saved to a file later.
- `ggplot(datClean, aes(x = Site, y = Richness))`: use the clean table; `aes()` ("aesthetics") maps columns to visual properties: Site to the x-axis, Richness to the y-axis.
- `+`: add the next layer. In ggplot2 layers join with `+`, not `%>%`.
- `geom_boxplot(fill = "grey85")`: draw a box per site, filled light grey ("geom" means geometric shape).
- `geom_jitter(width = 0.15, alpha = 0.3)`: draw every point-visit as a dot, nudged sideways by up to 0.15 so equal values do not stack, and see-through (`alpha` runs from 0 invisible to 1 solid). The 105 to 282 visits per site become visible. Because richness is whole numbers, dots would pile up without jitter.
- `theme_bw()`, `theme(...)`, `xlab()`, `ylab()`: white background, font sizes, axis labels.

The script draws two more plots the same way:
- **`coefPlot`**: one row per predictor in the top model (M3), a dot at the rate ratio and a bar across its 95% [[Confidence Interval]] (`geom_point()`, `geom_errorbar()`), with a dashed line at 1 (`geom_vline(xintercept = 1, ...)`) meaning "no change". Property effects are relative to the [[Categorical Predictor and Reference Level|reference site]] (BK, first alphabetically); see [[Interpreting Poisson Coefficients]]. `facet_wrap(~ Response, scales = "free_x")` splits it into two side-by-side panels, all species and focal species, each with its own x-axis.
- **`spcovPlot`**: raw richness against spatial covariance at the 7.29-ha window, with `geom_smooth(method = "loess")` adding a flexible trend line and its band. `pivot_longer()` first stacks the two responses into one column so `facet_wrap()` can give each its own panel.

Saving:

```r
ggsave(here(FiguresPath, "RichnessBySite_Boxplot.png"),
       plot = richnessPlot, width = 6, height = 4.5, dpi = 300)
```

In words: save `richnessPlot` as a PNG image, 6 by 4.5 inches, at 300 dots per inch (print quality), inside the Figures folder found with [[here()]]. The dot plot and the spatial covariance plot are saved as `TopModel_RateRatios_Dotplot.png` and `Richness_vs_SpatialCovariance.png`, 9 by 4.5 inches; these two are Figures 1 and 2 of the Report ([[Preliminary Results]]).

`ggsave()` does not create missing folders unless told to (recent ggplot2 versions have a `create.dir` argument), so the script makes the folder near the top with `dir.create(here(FiguresPath), showWarnings = FALSE)`. (The Sep 10 script lacked this line and the folder, so saving would have failed; fixed Oct 12 to 13.)

Compared with Dr. Roberts' script, I save the plots to objects (`richnessPlot`, `coefPlot`) so they can be passed to `ggsave()`; his example prints plots without saving.

## Common confusions
- **Using `%>%` between layers.** Layers need `+`.
- **"Jitter changes the data."** Only the sideways drawing position moves; the richness values (y) are exact.
- **"ggsave() makes folders."** Not by default; the folder must exist.

## Connections
- **Builds on:** [[Data Exploration]], [[Pipe]], [[here()]], [[Data Frames]]
- **Leads to:** [[EDA Findings]], [[Interpreting Poisson Coefficients]], [[R Scripts Walkthrough]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[Zuur et al. 2010]] (which plots to make before modelling)

> [!question]- Check yourself
> Why add `geom_jitter()` on top of the boxplot for richness data?
> ?
> Richness takes whole-number values, so many point-visits share the same value and would overlap as one dot. Jitter spreads them slightly so I can see how many visits and how they are distributed at each site.

---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Knitting is running an R Markdown file from top to bottom in a fresh R session and assembling the text, code and output into a finished document."
aliases:
  - "Knit"
  - "Rendering"
  - "knitr"
status: seedling
---

# Knitting

Baking from a written recipe in a clean kitchen exposes any step that relied on an ingredient you had lying around but never wrote down: the bake fails, and that failure is useful, because it shows the recipe was incomplete. **Knitting** runs an [[R Markdown]] file from top to bottom in a fresh, empty R session and assembles the text, code and output into a finished document. You press Knit in RStudio, or run `rmarkdown::render("file.Rmd")`. The [[Code Chunks]] run in order, their output and figures are captured, and everything is merged and converted to HTML, PDF or Word.

Any error stops the knit and names the chunk and line where it happened. The most common one, "object not found", means the object was created in your [[Console|console]] during interactive work but never in the document itself. That is exactly what makes knitting the gold-standard test of a report: if it knits in a clean session, the document contains everything needed to reproduce itself ([[Reproducibility]]). Knitting is therefore not "just formatting"; it is a full rerun of the analysis.

One quirk to know: when a document knits, file paths are read from the folder containing the `.Rmd` file, not from the project's top folder, so a path that works in the console can fail when knitting. Building paths with [[here()]] avoids the mismatch. A good final chunk records the R and package versions used, so readers know exactly what produced the results ([[Session Info]]).

## Connections
- **Builds on:** [[R Markdown]], [[Code Chunks]], [[Console]]
- **Leads to:** [[Reproducibility]], [[here()]], [[Session Info]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does knitting do?
??
Runs every chunk of an Rmd in a fresh R session, in order, and builds the output document.
++++

Why might code work interactively but fail when knitting?
??
Knitting starts with an empty environment, so objects made only in the console are missing.
++++

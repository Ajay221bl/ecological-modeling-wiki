---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Knit"
  - "Rendering"
  - "knitr"
status: seedling
---

# Knitting

**In one line:** knitting is running an R Markdown file from top to bottom in a fresh R session and assembling the text, code and output into a finished document.

> [!info] Before this, it helps to know
> [[R Markdown]] (the source) · [[Code Chunks]] (what gets run)

## The everyday picture
Baking from the written recipe in a clean kitchen. If a step relies on an ingredient you had lying around but never wrote down, the bake fails. That failure is useful: it shows the recipe was incomplete.

## Start from zero
1. **Press Knit** (or run `rmarkdown::render("file.Rmd")`).
2. **A new, empty R session starts.**
3. **Chunks run in order.** Output and figures are captured.
4. **Text and results are merged and converted** to HTML, PDF or Word.
5. **Any error stops it,** naming the chunk and line.
6. **Why this is the gold standard test:** it proves the document contains everything needed to reproduce itself.
7. **Paths resolve from the Rmd file's folder,** not the project root. `here()` avoids the mismatch ([[here()]]).

## Common confusions
- **"Object not found" when knitting.** The object was created in your console, not in the document.
- **"Knitting is just formatting."** It is a full rerun of the analysis.

## Explain it back
- Why can a document run interactively and still fail to knit?

*Pass test:* you can explain why a successful knit is evidence of reproducibility.

## Connections
- **Builds on:** [[R Markdown]], [[Code Chunks]]
- **Leads to:** [[Reproducibility]], [[here()]], [[Session Info]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What does knitting do?
??
Runs every chunk of an Rmd in a fresh R session, in order, and builds the output document.
++++

Why might code work interactively but fail when knitting?
??
Knitting starts with an empty environment, so objects made only in the console are missing.
++++

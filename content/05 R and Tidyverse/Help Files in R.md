---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Every R function has a help page, opened with `?name`, that states what it does, what inputs it takes and what it returns."
aliases:
  - "?function"
  - "Vignettes"
  - "Documentation"
status: seedling
---

# Help Files in R

The instruction leaflet in a medicine box is dry, always laid out the same way, and the place where the default dose and the warnings are written. Every R function has such a leaflet: a **help page**, opened with `?name`, as in `?lm`, that states what the function does, what inputs it takes and what it returns. `??"mixed model"` searches all the help installed on your computer.

Pages share a fixed layout: Description, Usage, Arguments, Details, Value and Examples. Read Usage first, because it shows every argument with its default value ([[Function Arguments]]); then Arguments for what each one means; and Value for what comes back, such as the components of a fitted model. The Examples always work, and `example(mean)` runs them. In the console, `args(glm)` prints the Usage line on its own, as the code below shows.

For longer explanations, many packages include *vignettes*, tutorial-length documents listed with `vignette(package = "lme4")` ([[Packages in R]]). The lme4 vignette's table of random-effect formulas is the reference the mixed-model lab leans on ([[lme4 Random-effect Syntax]]). Help pages can feel hard to read, but they have one big advantage over answers found online: they match the version you have installed, while web answers go stale. Reading the help is also the first step of [[Debugging]].

```r
# ?glm                      # open in the Help pane
args(glm)                   # the Usage line in the console
head(names(formals(lm)))    # argument names
example(mean, echo = FALSE) # run a help page's examples
# vignette("lmer", package = "lme4")
```

## Connections
- **Builds on:** [[Function Arguments]]
- **Leads to:** [[Debugging]], [[lme4 Random-effect Syntax]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

How do you open the help page for a function?
??
?name, for example ?glm.
++++

What is a vignette?
??
A long-form tutorial document shipped with a package.
++++

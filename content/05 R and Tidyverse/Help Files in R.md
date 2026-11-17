---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "?function"
  - "Vignettes"
  - "Documentation"
status: seedling
---

# Help Files in R

**In one line:** every R function has a help page, opened with `?name`, that states what it does, what inputs it takes and what it returns.

> [!info] Before this, it helps to know
> [[Function Arguments]] (what help pages list) · [[Packages in R]] (where vignettes come from)

## The everyday picture
The instruction leaflet in a medicine box. Dry, always structured the same way, and the place where the default dose and the warnings are written down.

## Start from zero
1. **`?lm` opens the page.** `??"mixed model"` searches all installed help.
2. **Pages share a layout.** Description, Usage (with defaults), Arguments, Details, Value (what comes back), Examples.
3. **Read Usage first for defaults,** then Arguments for what each means.
4. **Run the Examples:** `example(lm)`. They always work.
5. **Vignettes are long-form tutorials:** `vignette(package = "lme4")`. *Why they matter:* the lme4 vignette's table of random-effect formulas is the reference the mixed-model lab leans on.

## In R
```r
# ?glm                      # open in the Help pane
args(glm)                   # the Usage line in the console
head(names(formals(lm)))    # argument names
example(mean, echo = FALSE) # run a help page's examples
# vignette("lmer", package = "lme4")
```

## Common confusions
- **"Help pages are unreadable, I'll search online."** Online answers go stale. The help page matches your installed version.

## Explain it back
- Which section tells you what a function returns?

*Pass test:* you can find a function's defaults and run its examples.

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

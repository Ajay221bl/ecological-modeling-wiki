---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - r
aliases:
  - "Absolute vs relative file paths"
  - "File paths in R"
status: seedling
---

# Relative vs Absolute Paths

> [!summary] In plain words
> an absolute path spells out a file's location from the top of one computer's file system, while a relative path gives it from the project folder, so only relative paths keep working when the project moves to another computer.

## The question
Why does my code fail on someone else's computer when it reads a file?

## Built from
- [[Absolute Path]] and [[Relative Path]].
- [[Working Directory]] and [[here()]].

## The reasoning, step by step
1. **Absolute:** `/Users/ajay/Desktop/project/data/birds.csv`; works only where that exact folder exists.
2. **Relative:** `data/birds.csv`; resolved from the working directory.
3. **RProjects set the working directory** to the project folder, making relative paths reliable.
4. **`here("data", "birds.csv")`** builds the path from the project root even when code runs from a subfolder (R Markdown knits from the document's folder).
5. **Use forward slashes** or `here()`; Windows backslashes need escaping.

## So in practice
Search your scripts for "C:/" and "/Users/" before handing in.

## What would go wrong otherwise
Copying a file path from Finder into `read.csv()`.

## Explain it back
- Why does `here()` help R Markdown files in subfolders?

*Pass test:* you can rewrite any absolute path as a here() call.

## Connections
- **Related:** [[Why a reproducible project structure saves you]], [[Console vs Script]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - R for Ecological Modeling]], [[MOC - Reproducible Coding and Figures]]

## Flashcards

Absolute vs relative path?
??
Absolute: from the file system root of one computer. Relative: from the working directory or project.
++++

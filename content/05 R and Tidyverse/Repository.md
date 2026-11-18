---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A repository is a project folder whose complete change history is tracked by Git."
aliases:
  - "Repo"
  - "Git repository"
status: seedling
---

# Repository

A project binder with a logbook stapled inside the cover: the binder holds the current pages, and the logbook records every page ever added, changed or removed. A **repository**, or repo, is a project folder whose complete change history is tracked by [[Git]]. Any folder becomes a repository when Git is initialised in it, and from then on a hidden `.git` subfolder holds the history; delete that subfolder and the history is gone, though the current files remain.

The rule of thumb is one project, one repository, matching the RStudio project folder ([[RProject]]) and its tidy structure of data, scripts and outputs ([[Project Folder Structure]]). A copy on your own computer is called *local*, and a copy on a host such as [[GitHub]] is called *remote*. *Cloning* downloads a remote repository with its entire history, and a [[Fork]] is your own copy of someone else's repository on GitHub.

A repository is not "a place on the internet". It is the tracked folder, wherever it sits; the copy on GitHub is just one more copy. Which files it tracks is controlled by its [[gitignore File]].

## Connections
- **Builds on:** [[Git]], [[GitHub]]
- **Leads to:** [[Fork]], [[RProject]], [[gitignore File]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is a Git repository?
??
A project folder plus the full history of its files, kept in a hidden .git folder.
++++

What does cloning do?
??
Downloads a complete copy of a remote repository, history included.
++++

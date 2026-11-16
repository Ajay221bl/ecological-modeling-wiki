# Ecological Modeling Wiki

A first-principles study wiki for an Ecological Modeling course, published with [Quartz v4](https://quartz.jzhao.xyz) at
https://ajay221bl.github.io/ecological-modeling-wiki/

- `content/` holds the Obsidian vault notes and figures. Only the vault lives here; no course PDFs or readings.
- Every push to `main` rebuilds and redeploys the site (`.github/workflows/deploy.yml`).
- Flashcards are removed at build time by `quartz/plugins/transformers/stripFlashcards.ts`, so the notes in `content/` keep their cards for Obsidian Spaced Repetition.

To update the site, copy the vault into `content/` and push.

import { QuartzTransformerPlugin } from "../types"

/**
 * Removes Obsidian Spaced Repetition material from the published site only.
 * The source notes in content/ are never changed; this runs on the text
 * Quartz reads, before it parses the markdown.
 *
 * It removes:
 *  - any "## ..." section whose heading mentions flashcards, up to the next
 *    heading of level 1 or 2 (headings inside code fences are ignored)
 *  - flashcard deck tags (flashcards/...) in the frontmatter tag list
 *  - inline #flashcards tags in the body
 *  - <!--SR:...--> review-schedule comments
 */
export const StripFlashcards: QuartzTransformerPlugin = () => ({
  name: "StripFlashcards",
  textTransform(_ctx, src) {
    let text = src.toString()

    // 1. frontmatter: drop deck tags
    const fm = text.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/)
    let front = ""
    let body = text
    if (fm) {
      front = fm[0]
        .split(/\r?\n/)
        .filter((line) => !/^\s*-\s*["']?#?flashcards(\/[^\s"']*)?["']?\s*$/i.test(line))
        .join("\n")
      body = text.slice(fm[0].length)
    }

    // 2. body: drop flashcard sections
    const out: string[] = []
    let inFence = false
    let skipping = false
    for (const line of body.split(/\r?\n/)) {
      if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
      const isTopHeading = !inFence && /^#{1,2}\s/.test(line)
      if (isTopHeading) {
        skipping = /^##\s.*flashcard/i.test(line)
      }
      if (!skipping) out.push(line)
    }
    body = out.join("\n")

    // 3. inline tags and SR schedule comments
    body = body.replace(/(^|\s)#flashcards(\/\S*)?/gi, "$1")
    body = body.replace(/<!--SR:[^>]*-->/g, "")

    return front + body
  },
})

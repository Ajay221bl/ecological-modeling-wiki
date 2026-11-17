import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/rconsole.inline"
import style from "./styles/rconsole.scss"

/**
 * In-browser R for the wiki.
 *
 * Adds a "Run" button to every R code block and a pop-up R console. R itself
 * comes from webR (R compiled to WebAssembly), loaded from the webR CDN the
 * first time someone presses Run, so pages that never run R pay nothing.
 * Everything happens in the reader's browser: no server, and nothing here
 * changes the Obsidian vault in `content/`.
 *
 * The page markup is built by the script (not rendered here) so the console
 * keeps its history when Quartz swaps pages during SPA navigation.
 */
export default (() => {
  const RConsole: QuartzComponent = () => null
  RConsole.afterDOMLoaded = script
  RConsole.css = style
  return RConsole
}) satisfies QuartzComponentConstructor

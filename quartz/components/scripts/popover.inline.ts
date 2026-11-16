import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

// Nested popovers: hovering a link inside a popover opens another popover on
// top of it, and the whole chain stays open while the mouse is on any part of it.

const p = new DOMParser()
const CLOSE_DELAY_MS = 300

type Layer = { el: HTMLElement; anchor: HTMLAnchorElement }
const stack: Layer[] = []
const contentCache = new Map<string, Promise<{ contentType: string; nodes: string } | null>>()
let closeTimer: number | undefined
let hoverToken = 0

function depthOf(anchor: HTMLElement): number {
  const host = anchor.closest(".popover") as HTMLElement | null
  if (!host) return 0
  const i = stack.findIndex((l) => l.el === host)
  return i === -1 ? -1 : i + 1
}

function truncate(depth: number) {
  while (stack.length > depth) {
    const layer = stack.pop()!
    layer.el.remove()
  }
}

function scheduleClose() {
  window.clearTimeout(closeTimer)
  closeTimer = window.setTimeout(() => {
    // keep everything up to the deepest layer the mouse is still on
    let keep = 0
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i].el.matches(":hover") || stack[i].anchor.matches(":hover")) {
        keep = i + 1
        break
      }
    }
    truncate(keep)
  }, CLOSE_DELAY_MS)
}

function cancelClose() {
  window.clearTimeout(closeTimer)
}

async function loadContent(url: URL) {
  const key = url.toString()
  if (!contentCache.has(key)) {
    contentCache.set(
      key,
      (async () => {
        const response = await fetchCanonical(url).catch((err) => {
          console.error(err)
        })
        if (!response) return null
        const [contentType] = (response.headers.get("Content-Type") ?? "").split(";")
        if (!contentType.startsWith("text/html")) return { contentType, nodes: "" }
        const html = p.parseFromString(await response.text(), "text/html")
        normalizeRelativeURLs(html, url)
        const elts = [...html.getElementsByClassName("popover-hint")]
        if (elts.length === 0) return null
        return { contentType, nodes: elts.map((e) => e.outerHTML).join("") }
      })(),
    )
  }
  return contentCache.get(key)!
}

function bindLinks(root: Document | HTMLElement) {
  const links = [...root.querySelectorAll("a.internal")] as HTMLAnchorElement[]
  for (const link of links) {
    link.addEventListener("mouseenter", mouseEnterHandler)
    link.addEventListener("mouseleave", scheduleClose)
  }
  return links
}

async function mouseEnterHandler(
  this: HTMLAnchorElement,
  { clientX, clientY }: { clientX: number; clientY: number },
) {
  const link = this
  if (link.dataset.noPopover === "true") return

  cancelClose()
  const depth = depthOf(link)
  if (depth === -1) return

  // already showing this link's popover at the next level
  if (stack[depth]?.anchor === link) {
    truncate(depth + 1)
    return
  }
  truncate(depth)

  const token = ++hoverToken
  const targetUrl = new URL(link.href)
  const hash = decodeURIComponent(targetUrl.hash)
  targetUrl.hash = ""
  targetUrl.search = ""

  const content = await loadContent(targetUrl)
  if (!content || token !== hoverToken || !link.matches(":hover")) return
  if (stack.length !== depth) truncate(depth)

  const popoverElement = document.createElement("div")
  popoverElement.classList.add("popover")
  popoverElement.style.zIndex = String(999 + depth)
  const popoverInner = document.createElement("div")
  popoverInner.classList.add("popover-inner")
  popoverInner.dataset.contentType = content.contentType
  popoverElement.appendChild(popoverInner)

  const [category, typeInfo] = content.contentType.split("/")
  if (category === "image") {
    const img = document.createElement("img")
    img.src = targetUrl.toString()
    img.alt = targetUrl.pathname
    popoverInner.appendChild(img)
  } else if (category === "application" && typeInfo === "pdf") {
    const pdf = document.createElement("iframe")
    pdf.src = targetUrl.toString()
    popoverInner.appendChild(pdf)
  } else {
    popoverInner.innerHTML = content.nodes
    // prefix IDs inside popovers to prevent duplicates (per layer)
    popoverInner.querySelectorAll("[id]").forEach((el) => {
      el.id = `popover-${depth}-internal-${el.id}`
    })
  }

  popoverElement.addEventListener("mouseenter", cancelClose)
  popoverElement.addEventListener("mouseleave", scheduleClose)
  document.body.appendChild(popoverElement)
  stack.push({ el: popoverElement, anchor: link })
  bindLinks(popoverInner)

  const { x, y } = await computePosition(link, popoverElement, {
    strategy: "fixed",
    middleware: [inline({ x: clientX, y: clientY }), shift(), flip()],
  })
  Object.assign(popoverElement.style, {
    transform: `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
  })
  popoverElement.classList.add("active-popover")

  if (hash !== "") {
    const heading = popoverInner.querySelector(
      `#popover-${depth}-internal-${CSS.escape(hash.slice(1))}`,
    ) as HTMLElement | null
    if (heading) {
      popoverInner.scroll({ top: heading.offsetTop - 12, behavior: "instant" })
    }
  }
}

document.addEventListener("nav", () => {
  truncate(0)
  const links = bindLinks(document)
  window.addCleanup(() => {
    truncate(0)
    for (const link of links) {
      link.removeEventListener("mouseenter", mouseEnterHandler)
      link.removeEventListener("mouseleave", scheduleClose)
    }
  })
})

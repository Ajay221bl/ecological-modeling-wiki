import { computePosition, flip, inline, shift, offset } from "@floating-ui/dom"
import type { VirtualElement } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

// Nested popovers: hovering a link inside a popover opens another popover on
// top of it, and the whole chain stays open while the mouse is on any part of it.
// Graph-view nodes open previews too, through window.quartzPopover.

const p = new DOMParser()
const CLOSE_DELAY_MS = 300
const OPEN_DELAY_MS = 150
const BASE_Z = 10000 // above the global graph overlay (9999)

type Source = {
  key: object // identity of the thing hovered (a link element, or a graph node id holder)
  url: URL
  ref: Element | VirtualElement
  isHovered: () => boolean
  depth: number
  pos?: { clientX: number; clientY: number }
}
type Layer = { el: HTMLElement; source: Source }

const stack: Layer[] = []
const contentCache = new Map<string, Promise<{ contentType: string; nodes: string } | null>>()
let closeTimer: number | undefined
let openTimer: number | undefined
let hoverToken = 0

function depthOf(el: Element): number {
  const host = el.closest(".popover") as HTMLElement | null
  if (!host) return 0
  const i = stack.findIndex((l) => l.el === host)
  return i === -1 ? -1 : i + 1
}

function truncate(depth: number) {
  while (stack.length > depth) {
    stack.pop()!.el.remove()
  }
}

function scheduleClose() {
  window.clearTimeout(closeTimer)
  closeTimer = window.setTimeout(() => {
    // keep everything up to the deepest layer the mouse is still on
    let keep = 0
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i].el.matches(":hover") || stack[i].source.isHovered()) {
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
        if (!response || !response.ok) return null
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

function requestOpen(source: Source) {
  cancelClose()
  window.clearTimeout(openTimer)
  openTimer = window.setTimeout(() => {
    if (source.isHovered()) openPopover(source)
  }, OPEN_DELAY_MS)
}

function requestClose() {
  window.clearTimeout(openTimer)
  scheduleClose()
}

async function openPopover(source: Source) {
  const { depth } = source
  if (depth === -1) return

  // already showing this source's popover at the next level
  if (stack[depth]?.source.key === source.key) {
    truncate(depth + 1)
    return
  }
  truncate(depth)

  const token = ++hoverToken
  const targetUrl = new URL(source.url)
  const hash = decodeURIComponent(targetUrl.hash)
  targetUrl.hash = ""
  targetUrl.search = ""

  const content = await loadContent(targetUrl)
  if (!content || token !== hoverToken || !source.isHovered()) return
  truncate(depth)

  const popoverElement = document.createElement("div")
  popoverElement.classList.add("popover")
  popoverElement.style.zIndex = String(BASE_Z + depth)
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
  stack.push({ el: popoverElement, source })
  bindLinks(popoverInner)

  const middleware = source.pos
    ? [inline({ x: source.pos.clientX, y: source.pos.clientY }), shift(), flip()]
    : [offset(8), shift({ padding: 8 }), flip()]
  const { x, y } = await computePosition(source.ref, popoverElement, {
    strategy: "fixed",
    middleware,
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

// ---- links ----

function linkEnter(this: HTMLAnchorElement, e: MouseEvent) {
  const link = this
  if (link.dataset.noPopover === "true") return
  requestOpen({
    key: link,
    url: new URL(link.href),
    ref: link,
    isHovered: () => link.matches(":hover"),
    depth: depthOf(link),
    pos: { clientX: e.clientX, clientY: e.clientY },
  })
}

function bindLinks(root: Document | HTMLElement) {
  const links = [...root.querySelectorAll("a.internal")] as HTMLAnchorElement[]
  for (const link of links) {
    link.addEventListener("mouseenter", linkEnter)
    link.addEventListener("mouseleave", requestClose)
  }
  return links
}

// ---- graph view nodes ----

const graphNodeKeys = new Map<string, object>()
let hoveredGraphNode: string | null = null

window.quartzPopover = {
  graphNodeEnter(href: string, nodeId: string, clientX: number, clientY: number) {
    hoveredGraphNode = nodeId
    if (!graphNodeKeys.has(nodeId)) graphNodeKeys.set(nodeId, { nodeId })
    const ref: VirtualElement = {
      getBoundingClientRect: () => ({
        x: clientX,
        y: clientY,
        top: clientY,
        left: clientX,
        bottom: clientY,
        right: clientX,
        width: 0,
        height: 0,
      }),
    }
    requestOpen({
      key: graphNodeKeys.get(nodeId)!,
      url: new URL(href, window.location.toString()),
      ref,
      isHovered: () => hoveredGraphNode === nodeId,
      depth: 0,
    })
  },
  graphNodeLeave() {
    hoveredGraphNode = null
    requestClose()
  },
  closeAll() {
    window.clearTimeout(openTimer)
    hoveredGraphNode = null
    truncate(0)
  },
}

document.addEventListener("nav", () => {
  truncate(0)
  const links = bindLinks(document)
  window.addCleanup(() => {
    truncate(0)
    for (const link of links) {
      link.removeEventListener("mouseenter", linkEnter)
      link.removeEventListener("mouseleave", requestClose)
    }
  })
})

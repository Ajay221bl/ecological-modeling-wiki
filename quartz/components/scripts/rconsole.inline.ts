// In-browser R for the wiki, powered by webR (R compiled to WebAssembly).
//
// - Every ```r block gets a "Run" button (output appears under the block) and an
//   "Open in console" button (copies the code into the console so it can be edited).
// - A pop-up console (the "R" button, bottom right, or Ctrl+`) runs any R code.
// - One R session is shared by the whole visit, so objects made by one block are
//   still there for the next block, on this page and on other pages.
//
// GitHub Pages cannot send the COOP/COEP headers that SharedArrayBuffer needs, so
// webR is started with its PostMessage channel, which works on any static host.
// The cost: a running R command cannot be interrupted, only restarted, and R
// functions that wait for keyboard input (readline, browser) do not work.

const WEBR_VERSION = "0.6.0"
const WEBR_URL: string =
  (window as any).R_CONSOLE_WEBR_URL ?? `https://webr.r-wasm.org/v${WEBR_VERSION}/webr.mjs`

// Packages that ship with R itself: never try to install these.
const BASE_PKGS = new Set([
  "base",
  "stats",
  "utils",
  "methods",
  "graphics",
  "grDevices",
  "datasets",
  "splines",
  "grid",
  "tools",
  "parallel",
  "compiler",
  "stats4",
  "tcltk",
  "webr",
])

// Packages that need software a browser cannot run (a C++ compiler for Stan,
// the JAGS or MARK programs). Blocks that load them get an explanation instead
// of a Run button.
const DESKTOP_ONLY: Record<string, string> = {
  brms: "Stan",
  rstan: "Stan",
  rstanarm: "Stan",
  cmdstanr: "Stan",
  tidybayes: "Stan model output",
  rjags: "JAGS",
  R2jags: "JAGS",
  jagsUI: "JAGS",
  runjags: "JAGS",
  nimble: "a C++ compiler",
  RMark: "the MARK program",
}

type Kind = "input" | "stdout" | "stderr" | "message" | "warning" | "error" | "note" | "plot"
type Entry = { kind: Kind; text: string }

// ---------------------------------------------------------------- R session

// R side of the runner, set up once per session. It runs each top-level line the
// way the R console does (printing visible results) and, on an error, stops and
// hands the error back instead of throwing it away, so output printed and plots
// drawn before the error are still shown. It lives in an attached environment
// so it does not clutter ls().
const RUNNER = `
options(width = 80)
local({
  env <- attach(NULL, name = "wiki:rconsole")
  # install.packages() fetches browser builds from the webR package repository.
  assign("install.packages", function(pkgs, ...) webr::install(pkgs), envir = env)
  assign(".wiki_run", function(code) {
    err <- NULL
    tryCatch({
      exprs <- parse(text = code, keep.source = FALSE)
      for (e in exprs) {
        res <- withVisible(eval(e, envir = globalenv()))
        if (res$visible) print(res$value)
      }
    }, error = function(e) err <<- e)
    if (is.null(err)) return(NULL)
    call <- conditionCall(err)
    where <- if (is.null(call) || identical(call[[1]], quote(eval))) "" else
      paste0(" in ", deparse(call, nlines = 1))
    paste0("Error", where, ": ", conditionMessage(err))
  }, envir = env)
})
`

let webR: any = null
let starting: Promise<any> | null = null
let queue: Promise<unknown> = Promise.resolve()
const triedPkgs = new Set<string>()
let rStatus = "R not started"

function setStatus(s: string) {
  rStatus = s
  const el = document.querySelector("#r-console .r-console-status")
  if (el) el.textContent = s
}

function getR(): Promise<any> {
  if (!starting) {
    starting = (async () => {
      setStatus("Downloading R (about 15 MB, first time only)…")
      const mod = await import(/* @vite-ignore */ WEBR_URL)
      const r = new mod.WebR({
        baseUrl: WEBR_URL.replace(/[^/]*$/, ""),
        channelType: mod.ChannelType.PostMessage,
      })
      await r.init()
      await r.evalRVoid(RUNNER)
      webR = r
      setStatus("R is ready")
      return r
    })().catch((e) => {
      starting = null
      setStatus("R failed to start")
      throw e
    })
  }
  return starting
}

async function restartR() {
  try {
    webR?.close()
  } catch {}
  webR = null
  starting = null
  triedPkgs.clear()
  setStatus("R not started")
}

function stripComments(code: string) {
  return code
    .split("\n")
    .map((l) => l.replace(/#.*$/, ""))
    .join("\n")
}

function packagesIn(code: string): string[] {
  const src = stripComments(code)
  const found = new Set<string>()
  const patterns = [
    /\b(?:library|require|requireNamespace)\(\s*["']?([A-Za-z][A-Za-z0-9.]*)/g,
    /\b([A-Za-z][A-Za-z0-9.]*):::?[A-Za-z._]/g,
  ]
  for (const re of patterns) {
    for (const m of src.matchAll(re)) found.add(m[1])
  }
  return [...found].filter((p) => !BASE_PKGS.has(p))
}

function desktopOnlyIn(code: string): string[] {
  return packagesIn(code).filter((p) => p in DESKTOP_ONLY)
}

async function conditionText(obj: any): Promise<string> {
  try {
    const msg = await obj.get("message")
    return String(await msg.toString())
  } catch {
    return String(obj)
  }
}

function bitmapToDataUrl(img: ImageBitmap): string {
  const c = document.createElement("canvas")
  c.width = img.width
  c.height = img.height
  c.getContext("2d")!.drawImage(img, 0, 0)
  return c.toDataURL("image/png")
}

// Run code in the shared session; results are passed to `emit` as they are known.
function runR(code: string, emit: (e: Entry) => void): Promise<boolean> {
  const job = queue.then(() => runNow(code, emit))
  queue = job.catch(() => {})
  return job
}

async function runNow(code: string, emit: (e: Entry) => void): Promise<boolean> {
  let r: any
  try {
    r = await getR()
  } catch (e: any) {
    emit({
      kind: "error",
      text:
        "Could not start R in this browser: " +
        (e?.message ?? e) +
        "\nR runs as WebAssembly; it needs a recent Chrome, Edge, Firefox or Safari and an internet connection the first time.",
    })
    return false
  }

  const pkgs = packagesIn(code).filter((p) => !triedPkgs.has(p))
  if (pkgs.length > 0) {
    setStatus(`Installing ${pkgs.join(", ")}…`)
    emit({
      kind: "note",
      text: `Installing ${pkgs.join(", ")} (first time only, can take a while)…`,
    })
    const sh = await new r.Shelter()
    try {
      const list = pkgs.map((p) => JSON.stringify(p)).join(", ")
      const res = await sh.captureR(`webr::install(c(${list}), quiet = TRUE)`, {
        captureConditions: true,
        captureStreams: true,
      })
      let offline = false
      for (const o of res.output) {
        if (o.type !== "warning" && o.type !== "error") continue
        const text = await conditionText(o.data)
        const m = text.match(/Requested package (\S+) not found/)
        if (m) {
          emit({
            kind: "note",
            text: `${m[1]} has no browser build, so code that needs it will not run here.`,
          })
        } else if (/Download failed|unable to access index|download from/.test(text)) {
          offline = true
        } else {
          emit({ kind: "note", text })
        }
      }
      if (offline) {
        emit({
          kind: "note",
          text: "Could not reach the webR package server (repo.r-wasm.org). Check your connection.",
        })
      }
    } catch (e: any) {
      emit({ kind: "note", text: "Package install failed: " + (e?.message ?? e) })
    } finally {
      await sh.purge()
    }
    pkgs.forEach((p) => triedPkgs.add(p))
  }

  setStatus("Running…")
  const shelter = await new r.Shelter()
  let ok = true
  try {
    const width = 720
    const res = await shelter.captureR(".wiki_run(code)", {
      env: { code },
      captureStreams: true,
      captureConditions: true,
      captureGraphics: { width, height: Math.round(width * 0.65) },
    })
    for (const o of res.output) {
      if (o.type === "stdout" || o.type === "stderr") {
        emit({ kind: o.type, text: String(o.data) })
      } else if (o.type === "message" || o.type === "warning") {
        const text = (await conditionText(o.data)).replace(/\n$/, "")
        emit({ kind: o.type, text: o.type === "warning" ? "Warning: " + text : text })
      }
    }
    for (const img of res.images ?? []) {
      emit({ kind: "plot", text: bitmapToDataUrl(img) })
    }
    const err = await res.result.toJs()
    if (err?.type === "character" && err.values?.[0]) {
      ok = false
      emit({ kind: "error", text: String(err.values[0]) })
    }
  } catch (e: any) {
    ok = false
    emit({ kind: "error", text: String(e?.message ?? e) })
  } finally {
    await shelter.purge()
    setStatus("R is ready")
  }
  return ok
}

// ---------------------------------------------------------------- rendering

function renderEntry(e: Entry): HTMLElement {
  if (e.kind === "plot") {
    const img = document.createElement("img")
    img.className = "r-plot"
    img.src = e.text
    img.alt = "R plot"
    return img
  }
  const pre = document.createElement("pre")
  pre.className = `r-out r-${e.kind}`
  pre.textContent = e.kind === "input" ? prefixLines(e.text) : e.text
  return pre
}

function prefixLines(code: string) {
  return code
    .split("\n")
    .map((l, i) => (i === 0 ? "> " : "+ ") + l)
    .join("\n")
}

// ---------------------------------------------------------------- console panel

const consoleLog: Entry[] = []
const cmdHistory: string[] = []
let histPos = -1
let consoleOpen = false
const MAX_LOG = 400

function pushLog(e: Entry) {
  consoleLog.push(e)
  if (consoleLog.length > MAX_LOG) consoleLog.splice(0, consoleLog.length - MAX_LOG)
  const logEl = document.querySelector("#r-console .r-console-log")
  if (logEl) {
    logEl.appendChild(renderEntry(e))
    logEl.scrollTop = logEl.scrollHeight
  }
}

function buildConsole() {
  if (document.getElementById("r-console")) return

  const toggle = document.createElement("button")
  toggle.id = "r-console-toggle"
  toggle.type = "button"
  toggle.title = "Open the R console (Ctrl+`)"
  toggle.setAttribute("aria-label", "Open the R console")
  toggle.textContent = "R"

  const panel = document.createElement("section")
  panel.id = "r-console"
  panel.setAttribute("aria-label", "R console")
  panel.innerHTML = `
    <div class="r-console-head">
      <strong>R console</strong>
      <span class="r-console-status"></span>
      <span class="r-console-actions">
        <button type="button" data-act="clear" title="Clear the console text (keeps your objects)">Clear</button>
        <button type="button" data-act="restart" title="Start a fresh R session (forgets all objects)">Restart R</button>
        <button type="button" data-act="close" title="Close (Ctrl+\`)" aria-label="Close the R console">✕</button>
      </span>
    </div>
    <div class="r-console-log" tabindex="0"></div>
    <div class="r-console-input">
      <span class="r-prompt">&gt;</span>
      <textarea rows="1" spellcheck="false" autocapitalize="off" autocomplete="off"
        placeholder="Type R code. Enter runs it, Shift+Enter adds a line, ↑/↓ recall history."></textarea>
    </div>`

  const logEl = panel.querySelector(".r-console-log") as HTMLElement
  if (consoleLog.length === 0) {
    consoleLog.push({
      kind: "note",
      text:
        "R runs right here in your browser (webR). Nothing is installed on your computer.\n" +
        "Objects you make stay until you press Restart R, even when you change pages.\n" +
        "Try:  x <- c(3, 5, 8); mean(x)   or   plot(rnorm(100))",
    })
  }
  consoleLog.forEach((e) => logEl.appendChild(renderEntry(e)))

  const statusEl = panel.querySelector(".r-console-status") as HTMLElement
  statusEl.textContent = rStatus

  const input = panel.querySelector("textarea") as HTMLTextAreaElement
  const autosize = () => {
    input.style.height = "auto"
    input.style.height = Math.min(input.scrollHeight, 220) + "px"
  }
  input.addEventListener("input", autosize)
  input.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" && !ev.shiftKey) {
      ev.preventDefault()
      const code = input.value
      if (!code.trim()) return
      cmdHistory.push(code)
      histPos = cmdHistory.length
      input.value = ""
      autosize()
      pushLog({ kind: "input", text: code })
      runR(code, pushLog)
    } else if (ev.key === "ArrowUp" && !input.value.slice(0, input.selectionStart).includes("\n")) {
      if (cmdHistory.length === 0) return
      ev.preventDefault()
      histPos = Math.max(0, histPos - 1)
      input.value = cmdHistory[histPos] ?? ""
      autosize()
    } else if (ev.key === "ArrowDown" && !input.value.slice(input.selectionEnd).includes("\n")) {
      if (cmdHistory.length === 0) return
      ev.preventDefault()
      histPos = Math.min(cmdHistory.length, histPos + 1)
      input.value = cmdHistory[histPos] ?? ""
      autosize()
    } else if (ev.key === "Escape") {
      setConsoleOpen(false)
    }
  })

  panel.querySelector(".r-console-actions")!.addEventListener("click", async (ev) => {
    const act = (ev.target as HTMLElement).closest("button")?.dataset.act
    if (act === "clear") {
      consoleLog.length = 0
      logEl.innerHTML = ""
    } else if (act === "restart") {
      await restartR()
      pushLog({
        kind: "note",
        text: "R was restarted. All objects are gone; R starts again on the next run.",
      })
    } else if (act === "close") {
      setConsoleOpen(false)
    }
  })

  toggle.addEventListener("click", () => setConsoleOpen(!consoleOpen))

  document.body.appendChild(toggle)
  document.body.appendChild(panel)
  setConsoleOpen(consoleOpen, false)
}

function setConsoleOpen(open: boolean, focus = true) {
  consoleOpen = open
  document.getElementById("r-console")?.classList.toggle("open", open)
  document.getElementById("r-console-toggle")?.classList.toggle("open", open)
  document.body.classList.toggle("r-console-open", open)
  if (open) {
    const log = document.querySelector("#r-console .r-console-log")
    if (log) log.scrollTop = log.scrollHeight
    if (focus) (document.querySelector("#r-console textarea") as HTMLElement | null)?.focus()
    // Start downloading R as soon as the console is opened, to save time.
    getR().catch(() => {})
  }
}

function openInConsole(code: string) {
  buildConsole()
  setConsoleOpen(true)
  const input = document.querySelector("#r-console textarea") as HTMLTextAreaElement
  input.value = code
  input.dispatchEvent(new Event("input"))
  input.focus()
  input.setSelectionRange(input.value.length, input.value.length)
}

document.addEventListener("keydown", (ev) => {
  if (ev.key === "`" && (ev.ctrlKey || ev.metaKey)) {
    ev.preventDefault()
    buildConsole()
    setConsoleOpen(!consoleOpen)
  }
})

// ---------------------------------------------------------------- code blocks

function blockSource(code: HTMLElement): string {
  const lines = code.querySelectorAll(":scope > [data-line]")
  if (lines.length > 0) {
    return [...lines].map((l) => l.textContent ?? "").join("\n")
  }
  return code.textContent ?? ""
}

const NOT_FOUND = /object '.+' not found|could not find function|object of type 'closure'/

function decorateBlocks() {
  const codes = document.querySelectorAll<HTMLElement>(
    'article pre > code[data-language="r"], article pre > code.language-r',
  )
  const blocks: { code: string; run: () => Promise<boolean> }[] = []

  codes.forEach((codeEl, index) => {
    const pre = codeEl.parentElement as HTMLElement
    const anchor = (pre.closest("figure") as HTMLElement | null) ?? pre
    if (anchor.nextElementSibling?.classList.contains("r-run-bar")) return
    const code = blockSource(codeEl)

    const bar = document.createElement("div")
    bar.className = "r-run-bar"
    const out = document.createElement("div")
    out.className = "r-output"
    out.hidden = true
    anchor.after(bar, out)

    const desktop = desktopOnlyIn(code)
    if (desktop.length > 0) {
      const needs = [...new Set(desktop.map((p) => DESKTOP_ONLY[p]))].join(" and ")
      const note = document.createElement("span")
      note.className = "r-desktop-only"
      note.textContent = `Runs in RStudio only: ${desktop.join(", ")} needs ${needs}, which a web browser cannot run.`
      bar.append(note)
      blocks.push({ code, run: async () => true })
      return
    }

    const runBtn = document.createElement("button")
    runBtn.type = "button"
    runBtn.className = "r-run"
    runBtn.innerHTML = "&#9654; Run"
    runBtn.title = "Run this code in R, right in your browser"

    const editBtn = document.createElement("button")
    editBtn.type = "button"
    editBtn.className = "r-edit"
    editBtn.textContent = "Open in console"
    editBtn.title = "Copy this code into the R console so you can change it"

    const state = document.createElement("span")
    state.className = "r-state"
    bar.append(runBtn, editBtn, state)

    const run = async (): Promise<boolean> => {
      runBtn.disabled = true
      out.hidden = false
      out.innerHTML = ""
      state.textContent = webR ? "Running…" : "Starting R (first run takes a few seconds)…"
      let needsEarlier = false
      let noPkg = false
      const ok = await runR(code, (e) => {
        if (e.kind === "error" && NOT_FOUND.test(e.text)) needsEarlier = true
        if (e.kind === "error" && /there is no package called/.test(e.text)) noPkg = true
        out.appendChild(renderEntry(e))
      })
      if (out.childElementCount === 0) {
        out.appendChild(renderEntry({ kind: "note", text: "Done (this code prints nothing)." }))
      }
      if (noPkg) {
        out.appendChild(
          renderEntry({
            kind: "note",
            text: "That package has no browser build yet, so this block only runs in RStudio on your computer.",
          }),
        )
      }
      if (!ok && needsEarlier && index > 0) {
        const hint = document.createElement("div")
        hint.className = "r-hint"
        hint.textContent =
          "This block probably uses something made in an earlier block on this page. "
        const all = document.createElement("button")
        all.type = "button"
        all.textContent = "Run the earlier blocks, then this one"
        all.addEventListener("click", async () => {
          hint.remove()
          for (const b of blocks.slice(0, index)) await b.run()
          await run()
        })
        hint.append(all)
        out.appendChild(hint)
      }
      state.textContent = ok ? "" : "Finished with an error"
      runBtn.disabled = false
      return ok
    }
    blocks.push({ code, run })

    const onRun = () => run()
    const onEdit = () => openInConsole(code)
    runBtn.addEventListener("click", onRun)
    editBtn.addEventListener("click", onEdit)
    window.addCleanup(() => {
      runBtn.removeEventListener("click", onRun)
      editBtn.removeEventListener("click", onEdit)
    })
  })
}

document.addEventListener("nav", () => {
  buildConsole()
  decorateBlocks()
})

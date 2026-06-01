/**
 * Cross-page full-text search.
 * On load: fetches each page, strips HTML, stores plain text.
 * On query: finds matches, returns pages + surrounding snippet.
 */

const PAGES = [
  { page: "index.html",                    title: "Home — SMSF Mortgage Research" },
  { page: "step-1-solution.html",          title: "Step 1. Solution" },
  { page: "step-2-security.html",          title: "Step 2. Security" },
  { page: "step-3-smsf-details.html",      title: "Step 3. SMSF Details" },
  { page: "step-5-financial-position.html",title: "Step 5. Financial Position" },
  { page: "step-6-loan-summary.html",      title: "Step 6. Loan Summary" },
];

// Populated after fetchAll()
const PAGE_TEXT = {}; // page -> plain text

// ── Helpers ────────────────────────────────────────────────────────────────

function escHtml(str) {
  return str.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

/** Extract readable text from an HTML string, ignoring nav/header/footer. */
function extractText(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  // Remove noise elements
  doc.querySelectorAll("header, footer, nav, .sidebar, script, style").forEach((el) => el.remove());
  return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
}

/**
 * Return a ~120-char snippet around the first occurrence of query in text.
 * The matched word is wrapped in <mark>.
 */
function snippet(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return "";
  const start = Math.max(0, idx - 55);
  const end   = Math.min(text.length, idx + query.length + 55);
  let s = (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
  // Highlight the matched part (case-insensitive)
  s = s.replace(new RegExp(`(${escRegex(query)})`, "gi"), "<mark>$1</mark>");
  return escHtmlExceptMark(s);
}

function escRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Escape HTML but leave <mark>…</mark> produced by snippet() intact. */
function escHtmlExceptMark(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // restore <mark> and </mark>
    .replace(/&lt;mark&gt;/g, "<mark>")
    .replace(/&lt;\/mark&gt;/g, "</mark>");
}

// ── Index building ──────────────────────────────────────────────────────────

async function fetchAll() {
  await Promise.all(
    PAGES.map(async ({ page }) => {
      try {
        const res = await fetch(page);
        const html = await res.text();
        PAGE_TEXT[page] = extractText(html);
      } catch {
        PAGE_TEXT[page] = ""; // page not reachable (e.g. file:// restriction)
      }
    })
  );
}

// ── Search ──────────────────────────────────────────────────────────────────

function searchPages(query) {
  const q = query.trim();
  if (!q) return [];

  return PAGES.flatMap(({ page, title }) => {
    const text = PAGE_TEXT[page] || "";
    const haystack = text.toLowerCase();
    const needle   = q.toLowerCase();

    // Count occurrences for relevance sort
    let count = 0;
    let pos = haystack.indexOf(needle);
    while (pos !== -1) { count++; pos = haystack.indexOf(needle, pos + 1); }

    // Also match against title
    const titleMatch = title.toLowerCase().includes(needle);
    if (!count && !titleMatch) return [];

    return [{ page, title, snippet: snippet(text, q), count: count + (titleMatch ? 100 : 0) }];
  }).sort((a, b) => b.count - a.count);
}

// ── UI ───────────────────────────────────────────────────────────────────────

function renderResults(query, container) {
  if (!query.trim()) {
    container.innerHTML = "";
    container.hidden = true;
    return;
  }

  const matches = searchPages(query);

  if (!matches.length) {
    container.innerHTML = `<li class="search-no-result">Không tìm thấy kết quả cho "<strong>${escHtml(query)}</strong>"</li>`;
    container.hidden = false;
    return;
  }

  container.innerHTML = matches
    .map(
      ({ page, title, snippet: snip }) =>
        `<li>
          <a href="${escHtml(page)}" class="search-result-link">
            <span class="search-result-title">${escHtml(title)}</span>
            ${snip ? `<span class="search-result-snippet">${snip}</span>` : ""}
          </a>
        </li>`
    )
    .join("");
  container.hidden = false;
}

function initSearch() {
  const input   = document.getElementById("site-search-input");
  const results = document.getElementById("site-search-results");
  if (!input || !results) return;

  // Kick off background fetch of all pages
  fetchAll();

  let debounceTimer;

  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => renderResults(input.value, results), 200);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      input.value = "";
      results.innerHTML = "";
      results.hidden = true;
    }
    // Arrow-key navigation
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const first = results.querySelector("a");
      if (first) first.focus();
    }
  });

  results.addEventListener("keydown", (e) => {
    const links = [...results.querySelectorAll("a")];
    const idx   = links.indexOf(document.activeElement);
    if (e.key === "ArrowDown" && idx < links.length - 1) { e.preventDefault(); links[idx + 1].focus(); }
    if (e.key === "ArrowUp")  { e.preventDefault(); idx > 0 ? links[idx - 1].focus() : input.focus(); }
    if (e.key === "Escape")   { input.value = ""; results.innerHTML = ""; results.hidden = true; input.focus(); }
  });

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.hidden = true;
    }
  });

  input.addEventListener("focus", () => {
    if (input.value.trim()) renderResults(input.value, results);
  });
}

document.addEventListener("DOMContentLoaded", initSearch);

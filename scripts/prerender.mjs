// Renders the site to static HTML (index.html + 404.html) so it can be served
// by a plain static host such as GitHub Pages. Run after `vite build`.
//
// PAGES_BASE (optional) prefixes asset URLs for project sites served from a
// subdirectory, e.g. PAGES_BASE=/my-repo/.

import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const base = process.env.PAGES_BASE || "/";
const mount = base === "/" ? "" : base.endsWith("/") ? base.slice(0, -1) : base;

const clientDir = [".output/public", "dist/client"]
  .map((dir) => join(root, dir))
  .find((dir) => existsSync(dir));

if (!clientDir) {
  console.error("No client build found. Run `vite build` first.");
  process.exit(1);
}

function findServerEntry(serverRoot) {
  const ssrDir = join(serverRoot, "_ssr");
  if (!existsSync(ssrDir)) return undefined;
  const file = readdirSync(ssrDir).find((name) => /^server-.*\.mjs$/.test(name));
  return file ? join(ssrDir, file) : undefined;
}

const entry = [".output/server", "dist/server"]
  .map((dir) => findServerEntry(join(root, dir)))
  .find(Boolean);

if (!entry) {
  console.error("No server entry found. Run `vite build` first.");
  process.exit(1);
}

const mod = await import(pathToFileURL(entry).href);
const handler = mod.default ?? mod;

if (typeof handler?.fetch !== "function") {
  console.error("Server entry does not expose a fetch handler.");
  process.exit(1);
}

let url = `http://localhost${mount}/`;
let response;
for (let hop = 0; hop < 5; hop++) {
  response = await handler.fetch(new Request(url), {}, { waitUntil() {} });
  if (response.status < 300 || response.status >= 400) break;
  const location = response.headers.get("location");
  if (!location) break;
  console.log(`Following redirect ${url} -> ${location}`);
  url = new URL(location, url).href;
}
const html = await response.text();

if (!response.ok) {
  console.error(`Prerendering "/" failed with status ${response.status}.`);
  process.exit(1);
}

function withBase(markup, prefix) {
  if (!prefix || prefix === "/") return markup;
  const clean = prefix.endsWith("/") ? prefix.slice(0, -1) : prefix;
  return markup.replace(/\b(href|src|content)="\/([^"]*)"/g, (match, attr, rest) =>
    rest ? `${attr}="${clean}/${rest}"` : match,
  );
}

const page = withBase(html, base);

writeFileSync(join(clientDir, "index.html"), page);
writeFileSync(join(clientDir, "404.html"), page);
writeFileSync(join(clientDir, ".nojekyll"), "");

console.log(`Prerendered "/" -> ${clientDir.replace(root + "/", "")}/index.html (${page.length} bytes, base: ${base})`);

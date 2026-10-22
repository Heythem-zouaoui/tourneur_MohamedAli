import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    basepath: readBasepath(),
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};

// A static build can be served from a subdirectory (GitHub Pages project sites).
// vite.config.ts bakes PAGES_BASE in as __APP_BASE__, and scripts/prerender.mjs
// mirrors it into a <meta name="app-base"> tag in the generated HTML.
declare const __APP_BASE__: string | undefined;

function readBasepath(): string | undefined {
  const fromMeta =
    typeof document === "undefined"
      ? undefined
      : document.querySelector('meta[name="app-base"]')?.getAttribute("content");
  const value = (typeof __APP_BASE__ === "string" && __APP_BASE__) || fromMeta;
  if (!value || value === "/") return undefined;
  return value.replace(/\/$/, "");
}
